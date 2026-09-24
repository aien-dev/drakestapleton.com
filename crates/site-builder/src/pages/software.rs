use maud::{html, Markup};

pub fn render_software_page() -> Markup {
    html! {
        div class="container" style="max-width: var(--page); margin: 0 auto; padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "COMPILED NATIVE RUNTIME & DISTRIBUTED FRAMEWORKS" }
                h1 { "AI Orchestration & Architecture" }
                p class="section-desc" {
                    "Eliminating the Python interpreter tax: pure compiled Rust sequence semantics, Mojo accelerated GPU mathematics, and zero-copy hypermedia."
                }
            }

            div class="grid cards-grid" style="margin-top: 36px;" {
                article class="pillar-card" {
                    div class="pillar-marker" { "INFERENCE ENGINE" }
                    h2 style="font-family: var(--display); font-size: 1.5rem; margin: 0 0 12px;" {
                        "AIEN Sovereign Core"
                    }
                    p {
                        "Branch-native inference engine with zero-copy prefix KV forks, sub-3 microsecond branch latency, and hardware TPM vault security."
                    }
                    a href="/aien" class="card-link" { "Explore AIEN Core →" }
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
