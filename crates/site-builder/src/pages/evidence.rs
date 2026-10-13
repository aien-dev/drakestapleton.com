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
                    p class="stat-value tabular-nums" { "R1-R15" }
                    p class="stat-unit" { "PASS on GB10" }
                    p class="stat-label" {
                        "Omega runtime qualification ladder on frozen candidate CAND-3; R15 is a conditional pass under a declared exception (Secure Boot was off). "
                        a href="https://github.com/aien-dev/aien-architecture/blob/main/qualification/candidates/CAND-3.gates.md" { "Gate record" }
                    }
                }
                div class="stat-card" {
                    p class="stat-value tabular-nums" { "24 / 24" }
                    p class="stat-unit" { "QEMU gates PASS" }
                    p class="stat-label" {
                        "AIENOS C kernel gates in the emulator, 0 NOT_RUN. Emulator evidence only; the kernel has not booted on the real machine yet. "
                        a href="https://github.com/aien-dev/aienos/blob/main/evidence/ck_gates_29ed03c97454354a18676f768273dd7f7a8e15462c4be1939d9994d277d0d639.json" { "Receipt" }
                    }
                }
                div class="stat-card" {
                    p class="stat-value tabular-nums" { "20.3x" }
                    p class="stat-unit" { "frozen baseline" }
                    p class="stat-label" {
                        "Prime Drag Race native GPU sieve on GB10 against the frozen baseline; it ties the CUDA mirror at 19,701 vs 19,629 passes per second. "
                        a href="https://github.com/aien-dev/benchmarks/blob/main/prime-drag-race/CAMPAIGN-2026-10-05.md" { "Campaign record" }
                    }
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
