use maud::{html, Markup};

pub fn render_symphony_page(subpage: Option<&str>) -> Markup {
    let (eyebrow, title, desc) = match subpage {
        Some("first") => (
            "OPERATIONAL RECORD",
            "First Multi-Model Symphony Run",
            "Review the first documented Atlas Symphony run, participating runtimes, work lanes, and independent reviewers.",
        ),
        Some("workflow") => (
            "SYSTEM WORKFLOW",
            "AI Orchestration Workflow",
            "Explore the Atlas Symphony command tree, operator dispatch cycle, and verification gates.",
        ),
        Some("map") => (
            "ARCHITECTURE MAP",
            "AI Orchestration Map",
            "Six-track operator map of Atlas development and multi-model orchestration from June through August 2026.",
        ),
        _ => (
            "MULTI-MODEL ORCHESTRATION",
            "Multi-Model AI Orchestration",
            "Atlas Symphony is an operator-led process for coordinating multiple AI models through bounded work lanes and evidence-bearing reviews.",
        ),
    };

    html! {
        div class="container reading-width" style="padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { (eyebrow) }
                h1 { (title) }
                p class="section-desc" { (desc) }
            }

            div class="prose" {
                p {
                    "Atlas Symphony structures AI work into bounded lanes. An operator defines specifications, dispatches specialized agents, enforces adversarial reviews by independent model architectures, and requires verifiable cryptographic receipts before any pull request is merged."
                }

                div class="grid cards-grid" style="margin-top: 32px;" {
                    article class="pillar-card" {
                        div class="pillar-marker" { "01 · DISPATCH" }
                        h3 { "Bounded Work Lanes" }
                        p { "Agents receive scoped file trees and clear invariants. No unbounded recursive write permissions." }
                    }
                    article class="pillar-card" {
                        div class="pillar-marker" { "02 · ADVERSARIAL" }
                        h3 { "Independent Validation" }
                        p { "Diffs are verified by distinct model architectures to eliminate blind spots and confirmation bias." }
                    }
                    article class="pillar-card" {
                        div class="pillar-marker" { "03 · EVIDENCE" }
                        h3 { "Cryptographic Receipts" }
                        p { "Compiler outputs, benchmark numbers, and silicon traces are captured and hashed into the ledger." }
                    }
                }

                nav class="subpage-nav" style="margin-top: 48px; border-top: 1px solid var(--line); padding-top: 24px;" {
                    p class="eyebrow" { "SYMPHONY CHAPTERS" }
                    ul class="links-list" {
                        li { a href="/symphony" { "Overview: Symphony Doctrine" } }
                        li { a href="/symphony/first" { "First Run: Initial Multi-Model Execution" } }
                        li { a href="/symphony/workflow" { "Workflow: Command Tree & Lifecycle" } }
                        li { a href="/symphony/map" { "Map: Six-Track Operator Evolution" } }
                    }
                }
            }
        }
    }
}
