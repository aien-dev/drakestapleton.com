use maud::{html, Markup};

pub fn render_interest_page() -> Markup {
    html! {
        div class="container reading-width" style="padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "COMMUNICATION & INQUIRY" }
                h1 { "Start a Conversation" }
                p class="section-desc" {
                    "Leave Drake Stapleton a note regarding systems architecture, inference research, or verified engineering collaboration."
                }
            }

            div class="prose" {
                p {
                    "I welcome conversations with operators, architects, and builders working on physical engineering, compiled runtimes, hardware-bound security, or accountable AI orchestration."
                }

                form action="https://formsubmit.co/drake@aienos.com" method="POST" class="interest-form" style="display: flex; flex-direction: column; gap: 16px; margin-top: 32px;" {
                    input type="hidden" name="_next" value="https://www.drakestapleton.com/interest?received=1";
                    input type="hidden" name="_subject" value="New inquiry from drakestapleton.com";
                    
                    div {
                        label for="name" style="display: block; font-family: var(--mono); font-size: 0.85rem; margin-bottom: 6px;" { "YOUR NAME" }
                        input type="text" id="name" name="name" required="" style="width: 100%; padding: 12px; border: 1px solid var(--line-strong); background: var(--white); border-radius: 4px;" {}
                    }

                    div {
                        label for="email" style="display: block; font-family: var(--mono); font-size: 0.85rem; margin-bottom: 6px;" { "YOUR EMAIL" }
                        input type="email" id="email" name="email" required="" style="width: 100%; padding: 12px; border: 1px solid var(--line-strong); background: var(--white); border-radius: 4px;" {}
                    }

                    div {
                        label for="message" style="display: block; font-family: var(--mono); font-size: 0.85rem; margin-bottom: 6px;" { "MESSAGE" }
                        textarea id="message" name="message" rows="5" required="" style="width: 100%; padding: 12px; border: 1px solid var(--line-strong); background: var(--white); border-radius: 4px;" {}
                    }

                    button type="submit" class="btn btn-primary" style="align-self: flex-start; margin-top: 8px;" {
                        "Transmit Message"
                    }
                }
            }
        }
    }
}
