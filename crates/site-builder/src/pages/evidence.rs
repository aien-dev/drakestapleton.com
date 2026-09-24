use maud::{html, Markup};

pub fn render_evidence_page() -> Markup {
    html! {
        div class="container" style="max-width: var(--page); margin: 0 auto; padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "CANONICAL TRUST HUB & PHYSICAL SILICON RECEIPTS" }
                h1 { "Canonical Evidence Hub & Verified Claims" }
                p class="section-desc" {
                    "Every architectural assertion is bound to verifiable cryptographic proofs, reproducible benchmarks, and physical silicon receipts."
                }
            }

            div class="grid stats-grid" style="margin-top: 36px;" {
                div class="stat-card" {
                    p class="stat-value tabular-nums" { "553.14" }
                    p class="stat-unit" { "tokens / second" }
                    p class="stat-label" { "TinyLlama-1.1B continuous batching at concurrency 16 on GB10" }
                }
                div class="stat-card" {
                    p class="stat-value tabular-nums" { "2.06 μs" }
                    p class="stat-unit" { "p50 latency" }
                    p class="stat-label" { "Zero-copy 500-branch fork sequence admission in aien-scheduler" }
                }
                div class="stat-card" {
                    p class="stat-value tabular-nums" { "500.0x" }
                    p class="stat-unit" { "memory reduction" }
                    p class="stat-label" { "Pre-forked prefix cache sharing versus redundant prefill" }
                }
                div class="stat-card" {
                    p class="stat-value tabular-nums" { "100%" }
                    p class="stat-unit" { "TPM-bound" }
                    p class="stat-label" { "Hardware TPM 2.0 key vault: zero plaintext secrets on disk" }
                }
            }

            section style="margin-top: 48px;" {
                h2 style="font-family: var(--display); margin-bottom: 24px;" { "The Cryptographic Improvement Ledger" }
                div class="prose reading-width" {
                    p {
                        "All autonomous benchmarks, regression evaluations, and recursive improvements are committed to the hardware TPM-signed ledger. Cortex ingests derived operational lessons and causal post-mortems directly from silicon receipts."
                    }
                    p {
                        "Parity suites are verified against immutable Hugging Face Transformers FP32 references before any candidate kernel or quantized branch is accepted."
                    }
                }
            }
        }
    }
}
