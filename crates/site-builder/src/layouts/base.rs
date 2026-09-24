use maud::{html, Markup, PreEscaped, DOCTYPE};

pub struct PageMeta<'a> {
    pub title: &'a str,
    pub description: &'a str,
    pub canonical_url: &'a str,
    pub current_route: &'a str,
}

pub fn render_base_layout(meta: &PageMeta, content: Markup) -> Markup {
    html! {
        (DOCTYPE)
        html lang="en" {
            head {
                meta charset="utf-8";
                meta name="viewport" content="width=device-width, initial-scale=1";
                title { (meta.title) }
                meta name="description" content=(meta.description);
                link rel="canonical" href=(meta.canonical_url);
                link rel="icon" type="image/svg+xml" href="/favicon.svg";

                // Open Graph / Twitter Meta
                meta property="og:title" content=(meta.title);
                meta property="og:description" content=(meta.description);
                meta property="og:url" content=(meta.canonical_url);
                meta property="og:type" content="website";
                meta property="og:image" content="https://www.drakestapleton.com/og.png";
                meta name="twitter:card" content="summary_large_image";
                meta name="twitter:title" content=(meta.title);
                meta name="twitter:description" content=(meta.description);
                meta name="twitter:image" content="https://www.drakestapleton.com/og.png";

                // Fonts
                link rel="preconnect" href="https://fonts.googleapis.com";
                link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous";
                link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

                // CSS Stylesheets
                link rel="stylesheet" href="/assets/style.css";
                link rel="stylesheet" href="/assets/reader.css";
                link rel="stylesheet" href="/assets/engine.css";

                // HTMX for zero-build hypermedia interactivity
                script defer src="/js/htmx.min.js" {}
                (PreEscaped(r#"<script>
                    document.addEventListener('DOMContentLoaded', () => {
                        console.log('[AIEN Engine] Pure Rust Maud engine online. Zero hydration delay.');
                    });
                </script>"#))
            }
            body {
                div id="root" {
                    div class="site-shell" {
                        (crate::components::nav::render_nav(meta.current_route))
                        main id="main-content" {
                            (content)
                        }
                        (crate::components::footer::render_footer())
                    }
                }
            }
        }
    }
}
