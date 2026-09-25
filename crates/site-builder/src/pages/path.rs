use maud::{html, Markup};

use crate::components::voicemark::render_his_words;

struct ChapterLink {
    label: &'static str,
    href: &'static str,
}

struct Chapter {
    years: &'static str,
    title: &'static str,
    body: Markup,
    bridge: &'static str,
    quote: Option<&'static str>,
    quote_note: Option<&'static str>,
    links: Vec<ChapterLink>,
}

fn chapters() -> Vec<Chapter> {
    vec![
        Chapter {
            years: "The foundation",
            title: "The farm taught me to respect the person closest to the work",
            body: html! {
                p {
                    "I grew up in a humble farm home where practical work mattered and every person doing it was visible. I learned that every useful task carries dignity, that the people carrying the work see what outsiders miss, and that trust begins when I am willing to work beside them."
                }
            },
            bridge: "That is what I carried into my first job: notice what people need, help before asking, and carry every task I ask someone else to do.",
            quote: None,
            quote_note: None,
            links: vec![],
        },
        Chapter {
            years: "My first job",
            title: "Team member to shift leader, Taco Bell",
            body: html! {
                p {
                    "I worked my way from the line into shift leadership. My first concern was whether my crew had everything they needed. I served them, became the fastest worker I could be, and took on every task I asked them to do. That became my first leadership rule: carry the work beside the people you lead. Gina became one of the best mentors I have ever had."
                }
            },
            bridge: "Taco Bell turned the farm lesson into a leadership practice. I learned that trust is earned in the work and carries farther than any title, and I brought that posture into every team and laboratory after it.",
            quote: Some("Remember, Michael: at the end of the day, when you clock out and go home, it's just tacos."),
            quote_note: Some("I still hear her advice when the pressure rises: it is just chemistry. Keep perspective, serve the people, and solve the next problem."),
            links: vec![],
        },
        Chapter {
            years: "College years",
            title: "Taco Bell in Bowling Green to a Valspar laboratory",
            body: html! {
                p {
                    "I carried the same work ethic to Bowling Green and stayed with Taco Bell until I moved into a Valspar internship. A chemist mentored me while I learned production paints, color matching, sample preparation, and disciplined lab work. "
                    (render_his_words("I was the eager little lab rat, making samples and trying to get every detail right.", false))
                }
            },
            bridge: "Valspar connected my work ethic to chemistry. I learned that the laboratory and production were one chain: a good sample had to become something people could make correctly and repeatedly.",
            quote: None,
            quote_note: None,
            links: vec![],
        },
        Chapter {
            years: "2016",
            title: "B.S. in Chemistry and Biology",
            body: html! {
                p {
                    "Undergraduate study became four years of exploration. I tested disciplines, futures, and versions of myself, learned which dreams felt like mine, finished with a 3.2 GPA, and graduated with honors from Western Kentucky University."
                }
            },
            bridge: "The degree gave my curiosity scientific structure and moved me from learning laboratory discipline to asking and answering original research questions.",
            quote: None,
            quote_note: None,
            links: vec![],
        },
        Chapter {
            years: "2018",
            title: "Master of Science in Chemistry",
            body: html! {
                p {
                    "As an inorganic chemist researching under Dr. Lawrence J. Hill at Western Kentucky University, I synthesized colloidal cadmium selenide (CdSe) quantum dot seeds and grew anisotropic cadmium sulfide (CdS) nanorods to form CdSe@CdS dot-in-rod quasi-type-II heterostructures. I investigated noble-metal deposition, using [BMIM]Tf2N room-temperature ionic liquid as solvent, ligand, and reducing agent to deposit metallic platinum nanoparticles onto the semiconductor tips. That research became my master's thesis and a peer-reviewed journal paper under my name at the time, Michael Drake Ballentine. I presented the findings at the American Chemical Society (ACS) National Meeting, navigating the social intensity of national conferences while managing autism and ADHD. The rigor of synthesizing nanomaterials, measuring charge dynamics via TEM, PXRD, and photoluminescence quenching, and testing visible-light photocatalysis formed the foundation for my industrial chemistry career."
                }
            },
            bridge: "Graduate research taught me to turn uncertainty into experiments, measurement, and evidence. I carried that nanoscale precision out of the academic laboratory and directly into industrial formulation at Soudal and Gold Eagle.",
            quote: None,
            quote_note: None,
            links: vec![
                ChapterLink {
                    label: "Read my 2018 master's thesis (TopSCHOLAR)",
                    href: "https://digitalcommons.wku.edu/theses/2101/",
                },
                ChapterLink {
                    label: "Read the 2019 journal paper (PubMed)",
                    href: "https://pubmed.ncbi.nlm.nih.gov/30931213/",
                },
            ],
        },
        Chapter {
            years: "July 2018 to May 2020",
            title: "R&D Chemist, Soudal",
            body: html! {
                p {
                    "I formulated and scaled silicone products, supported quality systems and UL certification, and coordinated with Soudal's Belgian headquarters. Traveling to Belgium and learning from generous mentors brought me fully into industry. Working beside operators taught me to listen before changing anything: they knew where a process behaved differently on the floor than it did in the laboratory."
                }
            },
            bridge: "Soudal taught me that operator knowledge and technical knowledge become more valuable when someone can connect them. That bridge became the core of how I worked at Gold Eagle.",
            quote: None,
            quote_note: None,
            links: vec![],
        },
        Chapter {
            years: "May 2020 to March 2024",
            title: "R&D Chemist, Gold Eagle and 303 Products",
            body: html! {
                p {
                    "I approached improvement from the formulation side. I developed and improved products, commercialized formulations across the 303 Graphene line, kept building relationships with operators, explained the chemistry on camera, served as a HAZMAT Incident Commander, trained teams, and secured alternate raw materials during COVID-era disruption. That formulation-led work produced about $1.2 million in documented sourcing savings."
                }
            },
            bridge: "Gold Eagle taught me to connect formulation, production reality, supply chain, and the customer. I entered 3M with years of practice listening to operators and translating what they knew into changes a business could act on.",
            quote: None,
            quote_note: None,
            links: vec![
                ChapterLink {
                    label: "See the current 303 Graphene line",
                    href: "https://www.goldeagle.com/303-graphene/",
                },
            ],
        },
        Chapter {
            years: "March 2024 to February 2026",
            title: "Manufacturing Engineer, 3M",
            body: html! {
                p {
                    "I led PPU improvements through manufacturing change control, workflow mapping, line balancing, standard work, and operator partnership. The methods mattered, but my connection with operators made them useful. Because Soudal and Gold Eagle had taught me how to listen and work beside people, operators trusted me enough to show me where the process actually slowed, broke, or created waste. We turned that knowledge into $1 million in cost savings."
                }
            },
            bridge: "The savings were the result of the whole ladder: farm-grounded respect, service leadership, scientific discipline, formulation experience, and operator trust. That full combination moved with me into product engineering.",
            quote: None,
            quote_note: None,
            links: vec![],
        },
        Chapter {
            years: "February 2026 onward",
            title: "Product Engineer, 3M",
            body: html! {
                p {
                    "A second February 13 offer moved me into the product engineer role I hold today. I can improve both sides: the chemistry and performance of the product, and the process, efficiency, and operator experience behind making it."
                }
            },
            bridge: "This title carries the climb forward. I am combining every rung: formulation, product performance, manufacturing, PPU improvements, operator experience, and measurable business impact.",
            quote: None,
            quote_note: None,
            links: vec![],
        },
        Chapter {
            years: "Built alongside it all",
            title: "Independent software and AI work",
            body: html! {
                p {
                    "I built software, automation, AI systems, research harnesses, and community infrastructure alongside my industrial career. This belongs to the same life. I brought the same habit of listening to people, studying systems, preserving evidence, and improving what others have to use. Atlas became my latest achievement and my greatest so far."
                }
            },
            bridge: "The medium changed while the method stayed. I keep carrying the people, the evidence, and every prior lesson into the next system I build.",
            quote: None,
            quote_note: None,
            links: vec![],
        },
    ]
}

struct FeaturedVideo {
    kind: &'static str,
    date: &'static str,
    title: &'static str,
    body: &'static str,
    href: &'static str,
    image: &'static str,
}

fn featured_videos() -> Vec<FeaturedVideo> {
    vec![
        FeaturedVideo {
            kind: "303 Products video",
            date: "November 2020",
            title: "303 Graphene Nano Spray Coating Fights Water Spots",
            body: "I demonstrate how the graphene coating's surface-temperature behavior helps reduce water spotting.",
            href: "https://www.youtube.com/watch?v=W3Vu0DMH33E",
            image: "https://i.ytimg.com/vi/W3Vu0DMH33E/hqdefault.jpg",
        },
        FeaturedVideo {
            kind: "303 Products video",
            date: "December 2021",
            title: "303 Graphene Detailer | Breaking Down The Science",
            body: "I explain how graphene oxide supports gloss, slickness, and protection between washes.",
            href: "https://www.youtube.com/watch?v=uUOqqFfGWvc",
            image: "https://i.ytimg.com/vi/uUOqqFfGWvc/hqdefault.jpg",
        },
        FeaturedVideo {
            kind: "Television commercial",
            date: "March 2022",
            title: "303 Graphene | 2022 TV Commercial",
            body: "The 303 Graphene television spot that coworkers recognized after I joined 3M.",
            href: "https://www.youtube.com/watch?v=lReSVK2uXGc",
            image: "https://i.ytimg.com/vi/lReSVK2uXGc/hqdefault.jpg",
        },
        FeaturedVideo {
            kind: "303 Products video",
            date: "June 2022",
            title: "Science Behind 303 Marine Graphene Nano Spray Coating",
            body: "I explain the chemistry behind the marine formulation and its exterior-protection performance.",
            href: "https://www.youtube.com/watch?v=HLax_gGsZyQ",
            image: "https://i.ytimg.com/vi/HLax_gGsZyQ/hqdefault.jpg",
        },
        FeaturedVideo {
            kind: "303 Products video",
            date: "February 2023",
            title: "Ceramic vs. Graphene: Breaking Down the Science",
            body: "I compare two major detailing technologies and the chemistry each product brings to a surface.",
            href: "https://www.youtube.com/watch?v=Jvgj2LdPpXA",
            image: "https://i.ytimg.com/vi/Jvgj2LdPpXA/hqdefault.jpg",
        },
        FeaturedVideo {
            kind: "303 Products video",
            date: "March 2023",
            title: "303 Ceramics: Science Behind SiO2 Products",
            body: "I break down the product science behind 303 Spray and Rinse Ceramic Sealant and Slick Shine Ceramic Detailer.",
            href: "https://www.youtube.com/watch?v=B-XLum3HIwY",
            image: "https://i.ytimg.com/vi/B-XLum3HIwY/hqdefault.jpg",
        },
    ]
}

pub fn render_path_page() -> Markup {
    html! {
        div class="container reading-width" style="padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "EDUCATION AND WORK" }
                h1 { "Every step taught me how to take the next one." }
                p class="section-desc" {
                    "Each job became part of one climb. I carried the farm into Taco Bell, service leadership into the laboratory, scientific discipline into production, and operator trust into every improvement after that. I am still walking up the same ladder."
                }
            }

            section style="margin: 48px 0;" {
                p class="eyebrow" { "THE LADDER" }
                h2 style="font-family: var(--display); font-size: 1.8rem; margin: 12px 0;" {
                    "The $1 million at 3M began long before I joined 3M."
                }
                div class="prose" {
                    p {
                        "It began in a humble farm home, moved through the Taco Bell line and the Valspar laboratory, gained scientific rigor at Western Kentucky, learned operator partnership at Soudal, and deepened through formulation work at Gold Eagle. By the time I began leading PPU improvements at 3M, every earlier step was already in the room with me."
                    }
                }
            }

            @for (index, chapter) in chapters().into_iter().enumerate() {
                article style="margin: 40px 0; padding: 32px; border: 1px solid var(--line);" {
                    p style="font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.08em; color: var(--muted);" {
                        (format!("{:02} · {}", index + 1, chapter.years.to_uppercase()))
                    }
                    h2 style="font-family: var(--display); font-size: 1.5rem; margin: 8px 0 12px;" {
                        (chapter.title)
                    }
                    div class="prose" {
                        (chapter.body)
                    }
                    @if let Some(quote) = chapter.quote {
                        blockquote style="margin: 20px 0; padding-left: 20px; border-left: 3px solid var(--line-strong); font-style: italic;" {
                            (format!("\u{201C}{}\u{201D}", quote))
                            br;
                            cite style="font-style: normal; font-size: 0.9rem;" { "Gina, my Taco Bell mentor" }
                        }
                    }
                    @if let Some(note) = chapter.quote_note {
                        p style="color: var(--muted);" { (note) }
                    }
                    @for link in chapter.links.iter() {
                        p {
                            a href=(link.href) target="_blank" rel="noreferrer" { (link.label) }
                        }
                    }
                    p style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--line);" {
                        strong { "What this step built. " }
                        (chapter.bridge)
                    }
                }
            }

            div class="section-header" style="margin-top: var(--section);" {
                p class="eyebrow" { "BOTH SIDES OF IMPROVEMENT" }
                h2 { "I can improve the product and the process that makes it." }
            }

            div class="prose" {
                div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin: 32px 0;" {
                    div style="padding: 28px; border: 1px solid var(--line);" {
                        p class="eyebrow" { "GOLD EAGLE / FORMULATION IMPROVEMENT" }
                        p style="font-family: var(--display); font-size: 2.2rem; margin: 8px 0;" { "$1.2M" }
                        p style="color: var(--muted);" { "documented sourcing savings" }
                        h3 style="font-family: var(--display); font-size: 1.2rem; margin: 12px 0;" { "I approached improvement through formulation." }
                        p {
                            "I used formulation chemistry, testing, commercialization, alternate raw-material sourcing, and technical communication to improve products and carry them from the laboratory through production and into the market."
                        }
                    }
                    div style="padding: 28px; border: 1px solid var(--line);" {
                        p class="eyebrow" { "3M / PPU PROCESS IMPROVEMENT" }
                        p style="font-family: var(--display); font-size: 2.2rem; margin: 8px 0;" { "$1M" }
                        p style="color: var(--muted);" { "PPU improvement savings" }
                        h3 style="font-family: var(--display); font-size: 1.2rem; margin: 12px 0;" { "I approached improvement through process." }
                        p {
                            "I used workflow mapping, line balancing, standard work, change control, and the knowledge of operators who trusted me enough to show me what the process really needed."
                        }
                    }
                }
                p {
                    "The two dollar figures came from different sides of improvement. Gold Eagle was formulation-led. 3M was PPU and process-led. The ability to deliver both was built one rung at a time."
                }
            }

            div class="section-header" style="margin-top: var(--section);" {
                p class="eyebrow" { "THE CHEMIST ON CAMERA" }
                h2 { "Gold Eagle gave me a product line and a microphone." }
                p class="section-desc" {
                    "I formulated products for the 303 Graphene line and became one of the chemists trusted to explain their science publicly. It grew into one of the brand's most successful product lines and remains in the current 303 catalog. When I joined 3M in 2024, coworkers walked up to me with the same sentence: "
                    em { (format!("\u{201C}I saw you on TV last night.\u{201D}")) }
                }
            }

            div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin: 32px 0;" {
                @for video in featured_videos().iter() {
                    a href=(video.href) target="_blank" rel="noreferrer" style="display: block; border: 1px solid var(--line); text-decoration: none; color: inherit;" {
                        img src=(video.image) alt=(format!("Official 303 Products video: {}", video.title)) loading="lazy" style="width: 100%; display: block;";
                        div style="padding: 20px;" {
                            p style="font-family: var(--mono); font-size: 0.8rem; letter-spacing: 0.06em; color: var(--muted);" {
                                (format!("{} / {}", video.kind.to_uppercase(), video.date.to_uppercase()))
                            }
                            h3 style="font-family: var(--display); font-size: 1.15rem; margin: 8px 0;" { (video.title) }
                            p style="color: var(--muted);" { (video.body) }
                            p style="margin-top: 12px; font-weight: 600;" { "Watch on YouTube" }
                        }
                    }
                }
            }

            div class="section-header" style="margin-top: var(--section);" {
                p class="eyebrow" { "THE DRIVE BEHIND THE GRADES" }
                h2 { "The Drive Behind the Grades" }
                p class="section-desc" {
                    "Support gave all that effort room to compound."
                }
            }

            div class="prose" {
                div style="margin: 32px 0;" {
                    p style="font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.08em; color: var(--muted);" { "01 · HIGH SCHOOL · 3.92" }
                    h3 style="font-family: var(--display); font-size: 1.4rem; margin: 8px 0 12px;" { "High School: 3.92" }
                    p {
                        "Intelligence and athleticism seemed natural in other people. In me, everything had to be earned. I am autistic and I have ADHD, and I went through high school unmedicated, so every classroom felt built for somebody else's brain."
                    }
                    p {
                        "Being autistic around people felt like everyone else got a manual and I was still looking for mine. I watched how people stood, how they laughed, when they looked away, and I copied it. I got good at copying, good enough that the effort stayed invisible. It drained me in ways beyond anything I could name."
                    }
                    p {
                        "Under all of that sat something heavier, still unnamed. I was gay before I had words for it. My body was changing, hormones were everywhere, my brain was already loud, and what I was stayed a mystery to me. In the Bible Belt, in a preacher's house, staying unsure felt safer than being sure. Being sure would have meant saying it out loud, and saying it out loud felt like it could end my world."
                    }
                    p {
                        "So the world was scary. Not in one big way, in a thousand small ones. Every room was a test I was unprepared for. Every conversation was a chance to get it wrong. I learned to be quiet, to be good, to be excellent at the things with clear rules. A test grades the work. A football play rewards execution. A 3.92 rewards work."
                    }
                    p {
                        "I wanted excellence anyway, and work had to carry me there. Football practice, honors classes, farm chores before and after school. I returned to the rep, the page, and the problem until the work added up."
                    }
                    p {
                        "That 3.92 was earned one repetition at a time. It was the one place I could prove I belonged on the strength of the work alone. It was refusal to quit."
                    }
                }

                div style="margin: 32px 0;" {
                    p style="font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.08em; color: var(--muted);" { "02 · UNDERGRADUATE · 3.2 AND HONORS" }
                    h3 style="font-family: var(--display); font-size: 1.4rem; margin: 8px 0 12px;" { "Undergraduate: 3.2 and Honors" }
                    p {
                        "College was exploration. I tried futures on, learned which dreams belonged to me, and finished with a 3.2 GPA and graduated with honors. Through those eleven years from age thirteen until marrying Devin in 2018, I went by Michael Drake Ballentine. Ballentine was Dad's last name, given to me when he chose to adopt my brother and me after Mom brought us to safety. Stapleton became my married name when Devin and I chose our future together."
                    }
                }

                div style="margin: 32px 0;" {
                    p style="font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.08em; color: var(--muted);" { "03 · GRADUATE SCHOOL · I BECAME DRAKE" }
                    h3 style="font-family: var(--display); font-size: 1.4rem; margin: 8px 0 12px;" { "Graduate School: I Became Drake" }
                    p {
                        "A diagnosis of ADHD and autism, medication, mental healthcare, quiet study and exam rooms, extra time to think, and room to stare out the window and let my brain run wild finally gave me an equal field. The grit stayed. With support, it compounded."
                    }
                    p {
                        "Synthesizing nanomaterials, presenting at the ACS conference, and defending my thesis proved what I could create. I could feel myself becoming Drake, and my growth accelerated from there."
                    }
                }
            }

            div class="section-header" style="margin-top: var(--section);" {
                p class="eyebrow" { "THE PRICE OF THE PATH" }
                h2 { "I Followed the Path" }
            }

            div class="prose" {
                p {
                    "I did everything I was told to do. I went to school. I got the degrees. I followed the path step by step, the way good kids are supposed to."
                }
                p {
                    "It cost me $100,000 in student loan debt."
                }
                p {
                    "Now I sit here questioning my life choices, because what I do for a living never felt like mine. Chemistry led to engineering. Engineering led here. And the thing I actually care about, AI, gets treated like a fad the internet loves to piss on."
                }
                p {
                    "So I followed the script. It left me in debt, doing work that never felt like mine, in a field people mock."
                }
                p {
                    "The path taught me how to work. The debt taught me what things cost. The questioning taught me the most important lesson: the next thing I build will be mine."
                }
            }

            div class="section-header" style="margin-top: var(--section);" {
                p class="eyebrow" { "WHAT FAILURE TAUGHT ME" }
                h2 { "Each hit became another attempt." }
            }

            div class="prose" {
                p {
                    (render_his_words("I have spent my life competing, doing my best, and watching the result land short of what I wanted.", false))
                    " The first lesson was painful and simple: effort gives me a chance rather than a promise. I could prepare, care deeply, and still miss the job, the recognition, or the test."
                }
                p {
                    "Jobs passed me over. People called me too young. Recognition and compensation sometimes moved more slowly than the value I knew I was creating. Each hit forced me to decide whether the result would become a verdict or information. I chose information: study what happened, keep what worked, change what failed, and return."
                }
                p {
                    "The farm taught me to finish the work in front of me. Football taught me to get up after contact. Chemistry taught me that an unsuccessful experiment still narrows the answer. Manufacturing taught me to turn a problem into a process. Software and AI taught me to preserve every lesson so the next attempt begins farther ahead."
                }
                p {
                    "Persistence for me is disciplined return: the same purpose with better preparation, sharper questions, and a stronger system. I enjoy the work, I need the purpose, and each attempt gives the next one more to stand on."
                }
                div style="margin: 32px 0; padding: 28px; border: 1px solid var(--line-strong);" {
                    p style="font-family: var(--display); font-size: 2.2rem; margin: 0 0 8px;" { "4" }
                    h3 style="font-family: var(--display); font-size: 1.2rem; margin: 0 0 12px;" { "The fourth attempt passed." }
                    p {
                        (render_his_words("I failed the Six Sigma exam three times.", false))
                        " Each result showed me that wanting the credential and earning it were different things. I studied again, returned for the fourth attempt, and passed."
                    }
                    p {
                        "The credential mattered. The proof that I could keep returning mattered more."
                    }
                }
            }

            div class="section-header" style="margin-top: var(--section);" {
                p class="eyebrow" { "THE CONNECTIVE TISSUE" }
                h2 { "The title changed. The way I work stayed." }
            }

            div class="prose" {
                p {
                    "I arrived at 3M already knowing operators mattered. Soudal taught me to listen to the people closest to production. Gold Eagle taught me to carry their knowledge through formulation, scale-up, sourcing, and commercialization. By 3M, connection was already how I worked."
                }
                p {
                    "The farm boy in me still stands between the rooms. I know the dignity of practical work, and I can translate between the people setting direction and the people making that direction real. That is who I am, and it is why the operators' trust became measurable improvement instead of a line on a resume."
                }
            }

            div class="section-header" style="margin-top: var(--section);" {
                p class="eyebrow" { "THE LEAP TOWARD HOME" }
                h2 { "Intuition carried us through Chicago and back to Springfield." }
            }

            div class="prose" {
                p {
                    "Papa's death pulled Granny back to Springfield while graduate school kept me in Kentucky. When Gold Eagle offered me a role in Chicago, Devin and I followed our intuition and took the leap. We built four years of life there, learned from the city, and carried our family story with us."
                }
                p {
                    "Granny's open-heart surgery in 2023 sharpened the pull toward family. The 3M offer brought us to Springfield in 2024. The move joined my career to the place my family had already made home."
                }
            }

            div class="section-header" style="margin-top: var(--section);" {
                p class="eyebrow" { "THE PROJECT RECORD" }
                h2 { "The career behind the AI architecture." }
                p class="section-desc" {
                    "My path from industrial chemistry through manufacturing engineering into AI architecture shows how I translate technical systems into accountable production work. Continue through the "
                    a href="/evidence" { "evidence record" }
                    ", explore my "
                    a href="/software" { "software practice" }
                    ", or "
                    a href="/interest" { "start a conversation" }
                    "."
                }
            }
        }
    }
}
