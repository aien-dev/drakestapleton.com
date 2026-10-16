//! The live record of AIEN, read at build time from the facts file aienos.com publishes
//! (https://www.aienos.com/facts.json). aienos.com writes that file from GitHub every hour:
//! the Spark judge's verdict for the current sovereign-core commit and one row per core
//! component. This site reuses it instead of typing project status by hand.
//!
//! When the file cannot be read, the pages say so plainly instead of showing stale figures.

use std::process::Command;

use maud::{html, Markup};
use serde::Deserialize;

pub const FACTS_URL: &str = "https://www.aienos.com/facts.json";

#[derive(Debug, Clone, Deserialize)]
pub struct Receipt {
    #[serde(default)]
    pub repo: String,
    #[serde(default)]
    pub sha: String,
    #[serde(default)]
    pub commit_title: String,
    #[serde(default)]
    pub state: String,
    #[serde(default)]
    pub description: String,
    #[serde(default)]
    pub target_url: String,
}

#[derive(Debug, Clone, Deserialize)]
pub struct LastMerge {
    #[serde(default)]
    pub title: String,
    #[serde(default)]
    pub url: String,
}

#[derive(Debug, Clone, Deserialize)]
pub struct Component {
    #[serde(default)]
    pub name: String,
    #[serde(default)]
    pub repo: String,
    #[serde(default)]
    pub open_prs: u64,
    #[serde(default)]
    pub last_merge: Option<LastMerge>,
}

#[derive(Debug, Clone, Deserialize)]
pub struct Facts {
    #[serde(default)]
    pub generated_at: String,
    pub receipt: Receipt,
    #[serde(default)]
    pub components: Vec<Component>,
}

/// Reads the facts: from the file named by `AIEN_FACTS_FILE` when set (offline builds and
/// tests), otherwise from aienos.com. `None` means the pages render without live figures.
pub fn fetch_facts() -> Option<Facts> {
    let text = match std::env::var("AIEN_FACTS_FILE") {
        Ok(path) if !path.is_empty() => std::fs::read_to_string(&path)
            .map_err(|e| eprintln!("  [FACTS] {path}: {e}"))
            .ok()?,
        _ => {
            let out = Command::new("curl")
                .args(["-fsS", "--max-time", "20", FACTS_URL])
                .output()
                .map_err(|e| eprintln!("  [FACTS] curl: {e}"))
                .ok()?;
            if !out.status.success() {
                eprintln!("  [FACTS] {FACTS_URL}: {}", String::from_utf8_lossy(&out.stderr).trim());
                return None;
            }
            String::from_utf8(out.stdout).ok()?
        }
    };
    match serde_json::from_str::<Facts>(&text) {
        Ok(f) => {
            println!("  [FACTS] live record from aienos.com, generated {}", f.generated_at);
            Some(f)
        }
        Err(e) => {
            eprintln!("  [FACTS] facts file is not in the expected shape: {e}");
            None
        }
    }
}

/// The Spark reports a run it could not perform (for example after a pipeline configuration
/// change that needs an operator) as a failing status with NOT_RUN in the text; the page says
/// BLOCKED for those so a reader does not take it for a failed test.
fn verdict_word(state: &str, description: &str) -> &'static str {
    match state {
        "success" => "PASS",
        "failure" if description.starts_with("BLOCKED") && description.contains("NOT_RUN") => "BLOCKED",
        "failure" => "FAIL",
        "pending" => "RUNNING",
        _ => "NO VERDICT",
    }
}

fn short_sha(sha: &str) -> &str {
    &sha[..sha.len().min(7)]
}

fn repo_url(repo: &str) -> String {
    format!("https://github.com/{repo}")
}

/// A stat card with the Spark judge's verdict for the current sovereign-core commit. Fits the
/// `stats-grid` on the home and evidence pages.
pub fn render_verdict_card(facts: Option<&Facts>) -> Markup {
    match facts {
        Some(f) => html! {
            div class="stat-card" {
                p class={ "stat-value tabular-nums verdict-" (f.receipt.state) } { (verdict_word(&f.receipt.state, &f.receipt.description)) }
                p class="stat-unit" { "Spark judge, sovereign core" }
                p class="stat-label" {
                    "Verdict for commit " (short_sha(&f.receipt.sha)) " of the host runtime: " (f.receipt.description) ". "
                    @if !f.receipt.target_url.is_empty() { a href=(f.receipt.target_url) { "Receipt" } }
                }
            }
        },
        None => html! {
            div class="stat-card" {
                p class="stat-value tabular-nums" { "n/a" }
                p class="stat-unit" { "Spark judge, sovereign core" }
                p class="stat-label" { "The live record at aienos.com could not be read when this page was built. " a href=(FACTS_URL) { "Read it directly" } }
            }
        },
    }
}

/// The "AIEN today" block appended to the AIEN work page: verdict plus one row per core
/// component, with the time the record was generated.
pub fn render_live_block(facts: Option<&Facts>) -> Markup {
    html! {
        section class="live-record" id="live" {
            h2 { "AIEN today" }
            p {
                "This block is not typed by hand. It is read when the page is built from the record "
                a href="https://www.aienos.com/" { "aienos.com" } " publishes every hour from GitHub, and the page is rebuilt every hour as well."
            }
            div class="grid stats-grid" { (render_verdict_card(facts)) }
            @if let Some(f) = facts {
                @if !f.components.is_empty() {
                    table class="live-table" {
                        thead { tr { th { "Component" } th { "Last merged change" } th { "Open proposals" } } }
                        tbody {
                            @for c in &f.components {
                                tr {
                                    td { a href=(repo_url(&c.repo)) { (c.name) } }
                                    td {
                                        @match &c.last_merge {
                                            Some(m) if !m.url.is_empty() => a href=(m.url) { (m.title) },
                                            Some(m) => (m.title),
                                            None => "none recorded",
                                        }
                                    }
                                    td class="tabular-nums" { (c.open_prs) }
                                }
                            }
                        }
                    }
                }
                p class="live-generated" { "Record generated " (f.generated_at) ". Source: " a href=(FACTS_URL) { "facts.json" } "." }
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const SAMPLE: &str = r#"{"generated_at":"2026-10-16T16:42:38Z","receipt":{"repo":"aien-dev/aien-sovereign-core","sha":"bdd58a2b8fc873deecc06871809817801ac8b1e2","commit_title":"t","state":"failure","description":"BLOCKED FAIL PREFILL-E2E-2:rc_nonzero","target_url":"https://github.com/aien-dev/aien-sovereign-core/commit/bdd58a2b","updated_at":"x"},"components":[{"name":"AIENOS","repo":"aien-dev/aienos","last_merge":{"title":"docs: x","url":"https://github.com/aien-dev/aienos/pull/1"},"open_prs":4}]}"#;

    #[test]
    fn parses_the_aienos_facts_shape() {
        let f: Facts = serde_json::from_str(SAMPLE).unwrap();
        assert_eq!(f.receipt.state, "failure");
        assert_eq!(f.components[0].open_prs, 4);
    }

    #[test]
    fn a_failing_verdict_is_shown_as_fail() {
        let f: Facts = serde_json::from_str(SAMPLE).unwrap();
        let html = render_live_block(Some(&f)).into_string();
        assert!(html.contains(">FAIL<"));
        assert!(html.contains("bdd58a2"));
        assert!(html.contains("BLOCKED FAIL PREFILL-E2E-2:rc_nonzero"));
        assert!(html.contains("AIENOS"));
        assert!(!html.contains('\u{2014}'));
    }

    #[test]
    fn a_run_the_judge_did_not_perform_says_blocked() {
        assert_eq!(verdict_word("failure", "BLOCKED NOT_RUN PIPELINE_CONFIG_CHANGED"), "BLOCKED");
        assert_eq!(verdict_word("failure", "BLOCKED FAIL PREFILL-E2E-2:rc_nonzero"), "FAIL");
        assert_eq!(verdict_word("success", "PASS 12 gates"), "PASS");
    }

    #[test]
    fn missing_record_is_said_plainly() {
        let html = render_verdict_card(None).into_string();
        assert!(html.contains("could not be read"));
    }
}
