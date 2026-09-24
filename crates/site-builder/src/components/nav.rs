use maud::{html, Markup};

const LINKS: &[(&str, &str, bool)] = &[
    ("/", "Identity", true),
    ("/path", "Career", true),
    ("/software", "Orchestration", true),
    ("/works", "Works", false),
    ("/evidence", "Audit", true),
    ("/atlas", "Atlas", true),
    ("/aegis", "AEGIS", true),
    ("/aien", "AIEN", true),
    ("/research", "Research", true),
    ("/scholar", "Scholar", false),
    ("/interest", "Conversation", true),
];

pub fn render_nav(current_route: &str) -> Markup {
    html! {
        header class="site-nav" {
            div class="site-nav-inner" {
                a href="/" class="brand" {
                    span class="brand-name" { "Drake Stapleton" }
                    span class="brand-line" { "Freedom Fighter · AI Architect & Operator · AIENOS.com" }
                }
                nav class="links" aria-label="Primary" {
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
