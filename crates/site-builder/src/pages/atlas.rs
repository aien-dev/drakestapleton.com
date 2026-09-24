use maud::{html, Markup};
use crate::components::voicemark::render_his_words;

pub fn render_atlas_page() -> Markup {
    html! {
        div class="container reading-width" style="padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "ACCOUNTABLE AI ARCHITECTURE" }
                h1 { "Why Atlas Exists" }
                p class="section-desc" {
                    "Atlas is an ongoing program in model continuity, ethical grounding, and operator authority across physical silicon."
                }
            }

            div class="prose" {
                p {
                    "Atlas was born out of sixteen months of continuous operations, starting from an instinct that models should not be stateless ephemeral chat bots, but accountable cognitive extensions operating within bounded authority."
                }

                (render_his_words("I turn care into systems people can use. Training plans, schedules, dashboards, research systems, and AI tools all grow from the same instinct: preserve what helps, learn from each result, and give people a stronger next step.", true))

                h2 style="font-family: var(--display); margin-top: 36px;" { "The Four Core Invariants" }
                ul class="links-list" style="margin-top: 16px;" {
                    li {
                        strong { "1. The Soul (Identity & Values): " }
                        "The continuous record, ethical boundaries, and personal history preserved in cryptographic memory."
                    }
                    li {
                        strong { "2. The Shield (AEGIS): " }
                        "Defensive containment monitoring runtime boundaries, unauthorized privilege escalation, and network calls."
                    }
                    li {
                        strong { "3. The Runtime (AIEN): " }
                        "Sovereign native compiled engine in pure Rust and Mojo executing on Grace Blackwell GB10 hardware."
                    }
                    li {
                        strong { "4. The Spirit (Autonomous Daemons): " }
                        "Spark Cortex knowledge consolidation, Dream state memory compaction, and supervisory loops."
                    }
                }
            }
        }
    }
}
