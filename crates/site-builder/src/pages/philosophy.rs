use maud::{html, Markup, PreEscaped};
use crate::components::voicemark::render_his_words;

// Hand-drawn inline SVG art. Colors come from CSS classes (see the
// "Philosophy page" block in style.css) so every drawing follows the
// light and dark themes.

const HERO_ART: &str = r#"<svg class="ph-art" viewBox="0 0 480 400" role="img" aria-labelledby="ph-hero-title">
<title id="ph-hero-title">A sun rising behind the mountains over a railway running straight to the horizon</title>
<defs>
<radialGradient id="ph-glow" cx="50%" cy="56%" r="60%"><stop offset="0" style="stop-color:var(--accent-bright);stop-opacity:.42"/><stop offset="1" style="stop-color:var(--accent-bright);stop-opacity:0"/></radialGradient>
<linearGradient id="ph-sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--accent-bright)"/><stop offset="1" style="stop-color:var(--red)"/></linearGradient>
</defs>
<rect class="ph-sky" width="480" height="400"/>
<rect width="480" height="400" fill="url(#ph-glow)"/>
<circle cx="240" cy="214" r="62" fill="url(#ph-sun)"/>
<path class="ph-stroke-soft" d="M118 92 l9 7 l9-7 M150 74 l7 5 l7-5 M330 110 l8 6 l8-6"/>
<path class="ph-hill-back" d="M0 236 V176 L58 138 L108 174 L150 146 L200 206 L240 236 Z M240 236 L294 190 L346 146 L398 180 L440 150 L480 172 V236 Z"/>
<path class="ph-hill-front" d="M0 236 V206 C50 192 92 204 140 222 C170 232 200 236 240 236 Z M240 236 C290 234 330 222 372 210 C410 199 448 196 480 204 V236 Z"/>
<rect class="ph-ground" y="236" width="480" height="164"/>
<path class="ph-ties" d="M43 392 H437 M85 356 H395 M121 326 H359 M150 302 H330 M173 283 H307 M191 268 H289 M206 256 H274 M217 247 H263 M225 241 H255"/>
<path class="ph-rails" d="M40 400 L232 236 M440 400 L248 236"/>
<path class="ph-stroke-soft" d="M0 236 H480"/>
</svg>"#;

const ART_PROJECTS: &str = r#"<svg class="ph-art ph-icon" viewBox="0 0 120 120" aria-hidden="true">
<path class="ph-line" d="M10 104 H34 V84 H58 V64 H82 V44 H96"/>
<path class="ph-line" d="M96 44 V12"/>
<path class="ph-fill-accent" d="M96 12 L116 19 L96 26 Z"/>
<circle class="ph-fill-accent" cx="22" cy="96" r="4"/>
</svg>"#;

const ART_DUTIES: &str = r#"<svg class="ph-art ph-icon" viewBox="0 0 120 120" aria-hidden="true">
<circle class="ph-line" cx="60" cy="60" r="44"/>
<circle class="ph-line-soft" cx="60" cy="60" r="34"/>
<path class="ph-line-accent" d="M42 61 L55 74 L80 46"/>
</svg>"#;

const ART_DIFFICULT: &str = r#"<svg class="ph-art ph-icon" viewBox="0 0 120 120" aria-hidden="true">
<path class="ph-line" d="M6 104 L48 30 L66 60 L80 42 L114 104 Z"/>
<path class="ph-line-accent ph-dash" d="M28 104 L58 92 L40 80 L60 68 L46 54 L48 38"/>
<circle class="ph-fill-accent" cx="48" cy="30" r="5"/>
</svg>"#;

const ART_SETBACKS: &str = r#"<svg class="ph-art ph-icon" viewBox="0 0 120 120" aria-hidden="true">
<circle class="ph-line" cx="60" cy="60" r="42"/>
<path class="ph-line-accent" d="M62 18 L54 46 L68 62 L56 80 L62 102"/>
<path class="ph-line-accent" d="M68 62 L96 70"/>
</svg>"#;

const ART_STUBBORN: &str = r#"<svg class="ph-art ph-icon" viewBox="0 0 120 120" aria-hidden="true">
<path class="ph-line-soft" d="M4 28 C26 20 42 36 60 28 S94 20 116 28"/>
<path class="ph-line-accent" d="M4 50 C24 50 34 42 60 42 S96 50 116 50"/>
<ellipse class="ph-rock" cx="60" cy="62" rx="20" ry="13"/>
<path class="ph-line-accent" d="M4 74 C24 74 34 82 60 82 S96 74 116 74"/>
<path class="ph-line-soft" d="M4 98 C26 90 42 106 60 98 S94 90 116 98"/>
</svg>"#;

const WALL_BRICKS: &str = r#"<path class="ph-wall" d="M68 18 H92 V88 H68 Z"/><path class="ph-line-soft" d="M68 32 H92 M68 46 H92 M68 60 H92 M68 74 H92 M80 18 V32 M74 32 V46 M86 32 V46 M80 46 V60 M74 60 V74 M86 60 V74 M80 74 V88"/>"#;

fn way_art(arrow: &str, ground: bool) -> Markup {
    let ground_line = if ground { r#"<path class="ph-line-soft" d="M4 88 H156"/>"# } else { "" };
    PreEscaped(format!(
        r#"<svg class="ph-art ph-way-art" viewBox="0 0 160 104" aria-hidden="true">{ground_line}{WALL_BRICKS}{arrow}</svg>"#
    ))
}

fn render_chapter(art: &str, title: &str, body: &str) -> Markup {
    html! {
        article class="ph-chapter" {
            div class="ph-chapter-art" { (PreEscaped(art)) }
            h2 { (title) }
            p { (body) }
        }
    }
}

pub fn render_philosophy_page() -> Markup {
    let ways = [
        (
            way_art(r#"<path class="ph-line-accent ph-dash" d="M8 54 H40 C56 54 58 98 80 98 C102 98 104 54 120 54 H140"/><path class="ph-fill-accent" d="M140 47 L152 54 L140 61 Z"/>"#, false),
            "Go around it.",
            "Find another path to the same outcome.",
        ),
        (
            way_art(r#"<path class="ph-line-accent ph-dash" d="M8 70 H44 C56 70 58 100 80 100 C102 100 104 70 116 70 H140"/><path class="ph-fill-accent" d="M140 63 L152 70 L140 77 Z"/>"#, true),
            "Go under it.",
            "Dig into the foundations until the obstacle stops mattering.",
        ),
        (
            way_art(r#"<path class="ph-line-accent ph-dash" d="M8 76 C30 76 46 6 80 6 C114 6 126 76 140 76"/><path class="ph-fill-accent" d="M138 68 L150 79 L136 82 Z"/>"#, true),
            "Go over it.",
            "Climb above the problem and come down on the other side.",
        ),
        (
            way_art(r#"<path class="ph-burst" d="M66 44 H94 V62 H66 Z"/><path class="ph-fill-accent" d="M100 40 l6 4 l-6 3 Z M104 60 l7 2 l-5 4 Z M98 52 l8 0 l-4 5 Z"/><path class="ph-line-accent" d="M8 53 H140"/><path class="ph-fill-accent" d="M140 46 L152 53 L140 60 Z"/>"#, true),
            "Go straight through it.",
            "Sometimes the only way out is through, so through it is.",
        ),
    ];

    html! {
        div class="ph-page" {
            section class="ph-hero" {
                div class="ph-hero-copy" {
                    p class="eyebrow" { "HOW I WORK" }
                    h1 { "Philosophy" }
                    p class="ph-lede" {
                        "How I approach projects, duties, and hard things. And the one thing I will not do."
                    }
                    p class="ph-intro" {
                        "I am a chemist by training. I have done manufacturing engineering on machines that were completely out of my league, product engineering coordinating aerospace work completely out of my realm, and now artificial intelligence and computer science, which is not even anywhere near what I studied. Every chapter of my working life started the same way: I did not know how to do it, and I did it anyway."
                    }
                }
                div class="ph-hero-art" { (PreEscaped(HERO_ART)) }
            }

            section class="ph-chapters" {
                (render_chapter(ART_PROJECTS, "On Projects", "I start before I feel ready, because ready never comes. A project is a promise to a future version of the thing, and my job is to close the distance between what it is and what it should be, one verified step at a time. I do not chase perfect. I chase working, then I chase better. If I cannot explain what a project is for in one plain sentence, I do not understand it yet, and I go back until I do."))
                (render_chapter(ART_DUTIES, "On Duties, Tasks, and Responsibilities", "If I accept it, it gets done. A duty is a promise, and I keep my promises. I do not hand off what I said I would carry. I write things down, I check my work against reality instead of against my intentions, and I would rather say I do not know yet than pretend a task is finished when it is not. Done means done and verified, not almost."))
                (render_chapter(ART_DIFFICULT, "On Difficult Things", "I run toward the hard part first. The hard part is where all the learning lives, and comfort never taught anybody anything. When something looks impossible, I assume the problem is my understanding, not the problem. So I break it down until the pieces are small enough to hold, and then I solve the pieces one at a time. Big problems are just small problems standing on each other's shoulders."))
                (render_chapter(ART_SETBACKS, "On Setbacks", "Setbacks are information. Physical engineering taught me that reality does not negotiate: if a seal fails, no amount of narrative fixes it. You measure, you isolate the failure mode, and you fix the root cause. I do the same with everything. I do not take failure personally. I take it apart. Then I go again, smarter."))
                (render_chapter(ART_STUBBORN, "On Stubbornness", "I am stubborn the way a river is stubborn. A river does not argue with the rock. It just keeps coming. People have watched me keep going long after a reasonable person would have stopped, and I have stopped trying to explain it. Some of it is strength. Most of it is just refusal. I refuse to be the reason something that mattered did not happen."))
            }

            section class="ph-ways" {
                div class="ph-ways-head" {
                    h2 { "There Is Always a Way" }
                    p {
                        "Every wall has a door, a window, a loose brick, or soft ground underneath it. My job is to figure out which one this wall has."
                    }
                }
                div class="ph-ways-grid" {
                    @for (art, title, body) in ways {
                        article class="ph-way" {
                            (art)
                            h3 { (title) }
                            p { (body) }
                        }
                    }
                }
                p class="ph-ways-close" {
                    "Those are the options. Stopping is not on the list. I have never met a problem that survived being attacked from every direction at once."
                }
            }

            section class="ph-closing" {
                div class="ph-closing-inner" {
                    (render_his_words("My philosophy of life is that I don't know what's coming tomorrow, the next day, or the day after that. I don't know what I will do in 3 years, 5 years, or 10 years, but I will know this: I will not be giving up, ever, no matter what I'm doing. So if you're standing in my way, you better watch out, because I'm coming and I'm not stopping.", true))
                    div class="ph-closing-pair" {
                        (render_his_words("I've got way too much momentum to stop.", true))
                        (render_his_words("There's nothing I cannot do. This train is going.", true))
                    }
                    (PreEscaped(TRAIN_ART))
                }
            }
        }
    }
}

const TRAIN_ART: &str = r#"<svg class="ph-art ph-train" viewBox="0 0 640 150" role="img" aria-label="A steam train at full speed">
<path class="ph-speed" d="M40 62 H250 M90 80 H270 M20 98 H240 M120 116 H280"/>
<circle class="ph-smoke" cx="456" cy="26" r="11"/><circle class="ph-smoke" cx="426" cy="18" r="14"/><circle class="ph-smoke" cx="388" cy="16" r="17"/><circle class="ph-smoke" cx="346" cy="22" r="13"/>
<rect class="ph-train-body" x="300" y="44" width="72" height="72" rx="4"/>
<rect class="ph-train-window" x="314" y="56" width="28" height="22" rx="2"/>
<rect class="ph-train-body" x="366" y="64" width="128" height="52" rx="22"/>
<rect class="ph-train-body" x="452" y="38" width="18" height="30" rx="2"/>
<path class="ph-train-body" d="M490 116 H530 L494 82 Z"/>
<circle class="ph-lamp" cx="498" cy="78" r="6"/>
<circle class="ph-wheel" cx="332" cy="120" r="13"/><circle class="ph-wheel" cx="404" cy="120" r="15"/><circle class="ph-wheel" cx="452" cy="120" r="15"/>
<path class="ph-rod" d="M404 120 H452"/>
<path class="ph-track" d="M0 136 H640"/>
</svg>"#;
