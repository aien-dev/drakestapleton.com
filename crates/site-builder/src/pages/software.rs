use maud::{html, Markup};

pub fn render_software_page() -> Markup {
    html! {
        div class="container" style="max-width: var(--page); margin: 0 auto; padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "SOVEREIGN STACK, BUILT IN THE OPEN" }
                h1 { "AI Orchestration & Architecture" }
                p class="section-desc" {
                    "Software written to run as close to the hardware as the hardware allows, on a machine I own, with every claim tied to a receipt."
                }
            }

            div class="grid cards-grid" style="margin-top: 36px;" {
                article class="pillar-card" {
                    div class="pillar-marker" { "SOVEREIGN STACK" }
                    h2 style="font-family: var(--display); font-size: 1.5rem; margin: 0 0 12px;" {
                        "AIEN"
                    }
                    p {
                        "An operating system (AIENOS), a language with its own GPU engine (Omega), a host runtime (sovereign core) and the verification pipeline that judges every change on the Spark. Being gathered into one core tree, Aienix."
                    }
                    a href="/aien" class="card-link" { "Explore AIEN →" }
                }

                article class="pillar-card" {
                    div class="pillar-marker" { "MULTI-AGENT HARNESS" }
                    h2 style="font-family: var(--display); font-size: 1.5rem; margin: 0 0 12px;" {
                        "Atlas Symphony"
                    }
                    p {
                        "Deterministic multi-model coordination harness enforcing bounded lanes, adversarial validation, and cryptographic work receipts."
                    }
                    a href="/symphony" class="card-link" { "Explore Symphony →" }
                }

                article class="pillar-card" {
                    div class="pillar-marker" { "DEFENSIVE PERIMETER" }
                    h2 style="font-family: var(--display); font-size: 1.5rem; margin: 0 0 12px;" {
                        "AEGIS Shield"
                    }
                    p {
                        "Host-level defense and containment agent monitoring file systems, network connections, and active processes with forensic logging."
                    }
                    a href="/aegis" class="card-link" { "Explore AEGIS →" }
                }
            }
        }
    }
}
