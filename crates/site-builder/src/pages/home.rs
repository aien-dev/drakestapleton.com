use maud::{html, Markup};
use crate::components::telemetry::render_telemetry_bar;
use crate::components::voicemark::render_his_words;

pub fn render_home_page() -> Markup {
    html! {
        div class="home-page" {
            // Live Telemetry Bar
            (render_telemetry_bar())

            // Hero Section
            section class="hero-section" aria-labelledby="hero-heading" {
                div class="hero-inner" {
                    p class="eyebrow" { "SOVEREIGN COGNITIVE ARCHITECTURE & VERIFIED SYSTEMS" }
                    h1 id="hero-heading" class="hero-title" {
                        "Drake Stapleton"
                    }
                    p class="hero-subtitle" {
                        "Freedom Fighter · AI Architect & Operator"
                    }
                    p class="hero-lead" {
                        "Building accountable AI architectures, compiled native inference, and sovereign systems on Grace Blackwell silicon. Every process runs under operator authority with zero uninspected abstractions."
                    }
                    div class="hero-actions" {
                        a href="/research" class="btn btn-primary" { "Read Inference Research" }
                        a href="/evidence" class="btn btn-secondary" { "Inspect Verification Receipts" }
                        a href="/works" class="btn btn-secondary" { "Explore Works" }
                    }
                }
            }

            // Core Pillars / Architecture Cards
            section class="pillars-section" aria-labelledby="pillars-heading" {
                div class="container" {
                    div class="section-header" {
                        p class="eyebrow" { "SYSTEM BOUNDARIES" }
                        h2 id="pillars-heading" { "The Four Core Organs" }
                        p class="section-desc" {
                            "AIEN separates cognitive systems into strict, verifiable responsibilities. No single layer holds unverified authority."
                        }
                    }

                    div class="grid cards-grid" {
                        article class="pillar-card" {
                            div class="pillar-marker" { "01 · SOUL" }
                            h3 { a href="/atlas" { "Atlas" } }
                            p {
                                "The personal record, continuous memory, values, and ethical foundation established across sixteen months of unbroken operations."
                            }
                            a href="/atlas" class="card-link" { "Explore Atlas →" }
                        }

                        article class="pillar-card" {
                            div class="pillar-marker" { "02 · SHIELD" }
                            h3 { a href="/aegis" { "AEGIS" } }
                            p {
                                "Defensive perimeter extension watching boundaries, detecting unauthorized access, containing intrusions, and preserving immutable forensic evidence."
                            }
                            a href="/aegis" class="card-link" { "Inspect Defense Protocol →" }
                        }

                        article class="pillar-card" {
                            div class="pillar-marker" { "03 · RUNTIME" }
                            h3 { a href="/aien" { "AIEN" } }
                            p {
                                "The sovereign cognitive architecture running native compiled loops in Rust and Mojo, hardware TPM key vault, and local inference on dedicated silicon."
                            }
                            a href="/aien" class="card-link" { "Review Architecture →" }
                        }

                        article class="pillar-card" {
                            div class="pillar-marker" { "04 · ORCHESTRATION" }
                            h3 { a href="/symphony" { "Atlas Symphony" } }
                            p {
                                "Operator-led process for coordinating multi-model teams across bounded work lanes, adversarial reviews, and strict evidence requirements."
                            }
                            a href="/symphony" class="card-link" { "View Orchestration Map →" }
                        }
                    }
                }
            }

            // Silicon Telemetry & Empirical Proof Banner
            section class="proof-section" aria-labelledby="proof-heading" {
                div class="container" {
                    div class="proof-box" {
                        div class="proof-header" {
                            span class="badge" { "EMPIRICAL RECEIPTS" }
                            h2 id="proof-heading" { "Physical Silicon Proof Over Promises" }
                        }
                        div class="proof-stats grid stats-grid" {
                            div class="stat-card" {
                                p class="stat-value tabular-nums" { "553.14" }
                                p class="stat-unit" { "tokens / sec" }
                                p class="stat-label" { "TinyLlama-1.1B continuous batching on GB10" }
                            }
                            div class="stat-card" {
                                p class="stat-value tabular-nums" { "2.06 μs" }
                                p class="stat-unit" { "p50 latency" }
                                p class="stat-label" { "Zero-copy KV fork sequence admission" }
                            }
                            div class="stat-card" {
                                p class="stat-value tabular-nums" { "500.0x" }
                                p class="stat-unit" { "memory reduction" }
                                p class="stat-label" { "Pre-forked prefix cache sharing vs full prefill" }
                            }
                            div class="stat-card" {
                                p class="stat-value tabular-nums" { "100%" }
                                p class="stat-unit" { "TPM-bound" }
                                p class="stat-label" { "Zero plaintext secrets or .env files on disk" }
                            }
                        }
                        div class="proof-footer" {
                            a href="/evidence" class="btn btn-primary" { "Open Evidence Hub & Cryptographic Ledger" }
                        }
                    }
                }
            }

            // Life and Foundation Record
            section class="life-section" aria-labelledby="life-heading" {
                div class="container reading-width" {
                    div class="section-header" {
                        p class="eyebrow" { "HUMAN FOUNDATION" }
                        h2 id="life-heading" { "The Ground Truth" }
                    }
                    div class="prose" {
                        p {
                            "I survived a childhood that taught me to hide, and became a man who lives in the open. I started average, wanted excellence, and learned to outwork the distance between the two."
                        }
                        p {
                            (render_his_words("I built people up and watched them lead. Heart gets a person in the door. Proof earns their respect.", true))
                        }
                        p {
                            "From industrial chemistry at Gold Eagle commercializing the 303 Graphene line to manufacturing engineering at 3M delivering $1M in verified cost reductions, my work has always been rooted in physical materials, exact measurement, and disciplined execution."
                        }
                        p {
                            "Software and AI architecture are not different: eliminate unnecessary layers, measure real performance on physical hardware, preserve what helps, and keep faith with the people."
                        }
                    }
                }
            }
        }
    }
}
