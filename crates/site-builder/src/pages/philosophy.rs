use maud::{html, Markup};
use crate::components::voicemark::render_his_words;

pub fn render_philosophy_page() -> Markup {
    html! {
        div class="container reading-width" style="padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "HOW I WORK" }
                h1 { "Philosophy" }
                p class="section-desc" {
                    "How I approach projects, duties, and hard things. And the one thing I will not do."
                }
            }

            div class="prose" {
                p {
                    "I am a chemist by training. I have done manufacturing engineering on machines that were completely out of my league, product engineering coordinating aerospace work completely out of my realm, and now artificial intelligence and computer science, which is not even anywhere near what I studied. Every chapter of my working life started the same way: I did not know how to do it, and I did it anyway."
                }

                h2 style="font-family: var(--display); margin-top: 36px;" { "On Projects" }
                p {
                    "I start before I feel ready, because ready never comes. A project is a promise to a future version of the thing, and my job is to close the distance between what it is and what it should be, one verified step at a time. I do not chase perfect. I chase working, then I chase better. If I cannot explain what a project is for in one plain sentence, I do not understand it yet, and I go back until I do."
                }

                h2 style="font-family: var(--display); margin-top: 36px;" { "On Duties, Tasks, and Responsibilities" }
                p {
                    "If I accept it, it gets done. A duty is a promise, and I keep my promises. I do not hand off what I said I would carry. I write things down, I check my work against reality instead of against my intentions, and I would rather say I do not know yet than pretend a task is finished when it is not. Done means done and verified, not almost."
                }

                h2 style="font-family: var(--display); margin-top: 36px;" { "On Difficult Things" }
                p {
                    "I run toward the hard part first. The hard part is where all the learning lives, and comfort never taught anybody anything. When something looks impossible, I assume the problem is my understanding, not the problem. So I break it down until the pieces are small enough to hold, and then I solve the pieces one at a time. Big problems are just small problems standing on each other's shoulders."
                }

                h2 style="font-family: var(--display); margin-top: 36px;" { "On Setbacks" }
                p {
                    "Setbacks are information. Physical engineering taught me that reality does not negotiate: if a seal fails, no amount of narrative fixes it. You measure, you isolate the failure mode, and you fix the root cause. I do the same with everything. I do not take failure personally. I take it apart. Then I go again, smarter."
                }

                h2 style="font-family: var(--display); margin-top: 36px;" { "On Stubbornness" }
                p {
                    "I am stubborn the way a river is stubborn. A river does not argue with the rock. It just keeps coming. People have watched me keep going long after a reasonable person would have stopped, and I have stopped trying to explain it. Some of it is strength. Most of it is just refusal. I refuse to be the reason something that mattered did not happen."
                }

                h2 style="font-family: var(--display); margin-top: 36px;" { "There Is Always a Way" }
                p {
                    "Every wall has a door, a window, a loose brick, or soft ground underneath it. My job is to figure out which one this wall has."
                }
                ul class="links-list" style="margin-top: 16px;" {
                    li {
                        strong { "Go around it. " }
                        "Find another path to the same outcome."
                    }
                    li {
                        strong { "Go under it. " }
                        "Dig into the foundations until the obstacle stops mattering."
                    }
                    li {
                        strong { "Go over it. " }
                        "Climb above the problem and come down on the other side."
                    }
                    li {
                        strong { "Go straight through it. " }
                        "Sometimes the only way out is through, so through it is."
                    }
                }
                p {
                    "Those are the options. Stopping is not on the list. I have never met a problem that survived being attacked from every direction at once."
                }

                (render_his_words("My philosophy of life is that I don't know what's coming tomorrow, the next day, or the day after that. I don't know what I will do in 3 years, 5 years, or 10 years, but I will know this: I will not be giving up, ever, no matter what I'm doing. So if you're standing in my way, you better watch out, because I'm coming and I'm not stopping.", true))
            }
        }
    }
}
