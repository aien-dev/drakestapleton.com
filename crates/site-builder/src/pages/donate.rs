use maud::{html, Markup};

const MANIFUND_URL: &str =
    "https://manifund.org/projects/aienos-personally-owned-ai--intelligence-as-property-not-rent";

pub fn render_donate_page() -> Markup {
    html! {
        div class="container reading-width" style="padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "SUPPORT THE WORK" }
                h1 { "Fuel the Build" }
                p class="section-desc" {
                    "AIENOS is independent research, built in the open by one researcher with a public record. Backing from readers keeps the machines running and the work free for everyone."
                }
            }

            div class="prose" {
                p {
                    "I build this with my own hands and my own money. Every dollar you give goes straight into the work."
                }

                div style="margin-top: 32px; padding: 32px; border: 1px solid var(--line-strong); background: var(--white);" {
                    p class="eyebrow" { "MANIFUND" }
                    h2 style="margin: 12px 0;" { "Back the Project Publicly" }
                    p {
                        "The Manifund page carries a $5,000 goal for independent AIENOS development, open through October 24, 2026. Every contribution shows on the public record."
                    }
                    p style="margin-top: 20px;" {
                        a href=(MANIFUND_URL) target="_blank" rel="noreferrer" class="btn btn-primary" {
                            "Donate on Manifund"
                        }
                    }
                }
            }
        }
    }
}
