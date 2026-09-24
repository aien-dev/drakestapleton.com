use maud::{html, Markup};
use crate::pages::reader::WorkFrontmatter;

pub fn render_works_index(works: &[WorkFrontmatter]) -> Markup {
    html! {
        div class="works-index-page container" style="max-width: var(--page); margin: 0 auto; padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "PUBLICATIONS & ARCHITECTURAL MANUSCRIPTS" }
                h1 { "Works & Evidence Records" }
                p class="section-desc" {
                    "Original architectural papers, verified engineering benchmarks, and documented operational systems."
                }
            }

            div class="grid cards-grid" style="margin-top: 36px;" {
                @for work in works {
                    article class="pillar-card" {
                        div class="pillar-marker" { (work.date) }
                        h2 style="font-family: var(--display); font-size: 1.5rem; margin: 0 0 12px;" {
                            a href={ "/" (work.slug) } { (work.title) }
                        }
                        p { (work.summary) }
                        a href={ "/" (work.slug) } class="card-link" { "Read Document →" }
                    }
                }
            }
        }
    }
}
