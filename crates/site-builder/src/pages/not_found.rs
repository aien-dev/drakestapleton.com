use maud::{html, Markup};

pub fn render_not_found_page() -> Markup {
    html! {
        div class="not-found-page container reading-width" {
            div class="section-header" style="margin-top: 4rem; margin-bottom: 2rem;" {
                p class="eyebrow" { "404 NOT FOUND" }
                h1 { "Page Directory" }
                p class="section-desc" {
                    "The requested path does not exist. Choose a verified route from the directory below."
                }
            }
            div class="not-found-links" {
                ul class="links-list" {
                    li { a href="/" { "Identity (Home)" } }
                    li { a href="/research" { "LLM Inference Research" } }
                    li { a href="/aien" { "AIEN Sovereign Architecture" } }
                    li { a href="/evidence" { "Canonical Evidence Hub" } }
                    li { a href="/atlas" { "Atlas Program" } }
                    li { a href="/aegis" { "AEGIS Defensive Extension" } }
                    li { a href="/software" { "Orchestration & Software" } }
                    li { a href="/works" { "Works & Publications" } }
                    li { a href="/interest" { "Start a Conversation" } }
                }
            }
        }
    }
}
