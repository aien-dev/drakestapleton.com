use maud::{html, Markup};
use crate::components::voicemark::render_his_words;

pub fn render_what_i_learned_page() -> Markup {
    html! {
        div class="container reading-width" style="padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "PRODUCTION GROUND TRUTH" }
                h1 { "What I Learned" }
                p class="section-desc" {
                    "The operational lessons, production disciplines, and verified returns that shaped my engineering doctrine."
                }
            }

            div class="prose" {
                p {
                    "Physical engineering teaches you very quickly that reality does not negotiate. If a reactor reaches overpressure, if a seal fails, or if a batch is contaminated, no amount of narrative fixes the outcome. You measure, you isolate the failure mode, and you fix the root cause."
                }

                (render_his_words("Somehow I just keep finding the strength, or rather the stubbornness, to keep going.", true))

                h2 style="font-family: var(--display); margin-top: 36px;" { "The Core Heuristics" }
                ul class="links-list" style="margin-top: 16px;" {
                    li {
                        strong { "Silicon Proof Over Documentation: " }
                        "Never trust architectural intent, passing unit mocks, or marketing claims. Measure execution time, resident memory, and token generation directly on physical hardware."
                    }
                    li {
                        strong { "Eliminate the Interpreter Tax: " }
                        "Heavy dynamic interpreters create unbounded failure modes, unpredictable memory bloat, and dependency decay. Compile critical systems directly to native machine code."
                    }
                    li {
                        strong { "Zero Disk Secrets: " }
                        "Plaintext configuration files inevitably leak. Resolve credentials dynamically in volatile memory through a hardware TPM 2.0 key vault."
                    }
                    li {
                        strong { "Gratitude Moves Forward: " }
                        "The people who invested in you did so so that you would reach back and lift the next person up. Protect the team, build people up, and share what works."
                    }
                }
            }
        }
    }
}
