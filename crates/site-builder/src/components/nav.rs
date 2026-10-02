use maud::{html, Markup};

const LINKS: &[(&str, &str, bool)] = &[
    ("/", "Identity", true),
    ("/path", "Career", true),
    ("/philosophy", "Philosophy", true),
    ("/software", "Orchestration", true),
    ("/works", "Works", false),
    ("/evidence", "Audit", true),
    ("/atlas", "Atlas", true),
    ("/aegis", "AEGIS", true),
    ("/aien", "AIEN", true),
    ("/research", "Research", true),
    ("/scholar", "Scholar", false),
    ("/interest", "Conversation", true),
    ("/donate", "Donate", true),
];

pub fn render_nav(current_route: &str) -> Markup {
    html! {
        header class="site-nav" {
            div class="site-nav-inner" {
                a href="/" class="brand" {
                    span class="brand-name" { "Drake Stapleton" }
                    span class="brand-line" { "Freedom Fighter · AI Architect & Operator · AIENOS.com" }
                }
                button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu" {
                    span class="nav-toggle-bar" aria-hidden="true" {}
                    span class="nav-toggle-bar" aria-hidden="true" {}
                    span class="nav-toggle-bar" aria-hidden="true" {}
                }
                nav class="links" id="primary-nav" aria-label="Primary" {
                    @for (path, label, exact) in LINKS {
                        @let is_active = if *exact {
                            current_route == *path
                        } else {
                            current_route.starts_with(path)
                        };

                        a href=(path) class=(if is_active { "active" } else { "" }) {
                            (label)
                        }
                    }
                }
            }
        }
    }
}
