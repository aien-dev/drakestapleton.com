use maud::{html, Markup};

pub fn render_his_words(text: &str, block: bool) -> Markup {
    let mark = html! {
        span class="his-words-mark" aria-hidden="true" { "◆" }
    };
    let sr_note = html! {
        span class="visually-hidden" { "His own words, spoken aloud. " }
    };

    if block {
        html! {
            div class="his-words-block" title="His own words, spoken aloud" {
                (sr_note)
                (mark)
                (text)
            }
        }
    } else {
        html! {
            span class="his-words" title="His own words, spoken aloud" {
                (sr_note)
                (mark)
                (text)
            }
        }
    }
}
