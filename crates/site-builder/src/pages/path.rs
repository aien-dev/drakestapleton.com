use maud::{html, Markup};

pub fn render_path_page() -> Markup {
    html! {
        div class="container reading-width" style="padding: clamp(48px, 6vw, 96px) var(--gutter);" {
            header class="section-header" {
                p class="eyebrow" { "ENGINEERING DISCIPLINE & CAREER EVOLUTION" }
                h1 { "AI Architect Career Path" }
                p class="section-desc" {
                    "From industrial nanomaterials and high-volume chemical manufacturing to compiled AI architecture on Grace Blackwell silicon."
                }
            }

            div class="prose" {
                div class="stat-card" style="margin: 24px 0;" {
                    p class="stat-unit" { "FEBRUARY 2026 - PRESENT" }
                    h2 style="font-family: var(--display); font-size: 1.4rem; margin: 0 0 8px;" { "Product Engineer · 3M" }
                    p { "Driving product engineering, physical specifications, and automated verification." }
                }

                div class="stat-card" style="margin: 24px 0;" {
                    p class="stat-unit" { "MARCH 2024 - FEBRUARY 2026" }
                    h2 style="font-family: var(--display); font-size: 1.4rem; margin: 0 0 8px;" { "Manufacturing Engineer · 3M" }
                    p { "Delivered $1,000,000 in documented PPU cost savings through automated telemetry, process optimization, and yield improvement." }
                }

                div class="stat-card" style="margin: 24px 0;" {
                    p class="stat-unit" { "2019 - 2024" }
                    h2 style="font-family: var(--display); font-size: 1.4rem; margin: 0 0 8px;" { "R&D Chemist · Gold Eagle Co." }
                    p { "Commercialized the 303 Graphene formulation, secured alternate raw materials delivering roughly $1.2M in documented sourcing savings, and served as HAZMAT Incident Commander." }
                }

                div class="stat-card" style="margin: 24px 0;" {
                    p class="stat-unit" { "2016 - 2018" }
                    h2 style="font-family: var(--display); font-size: 1.4rem; margin: 0 0 8px;" { "M.S. Chemistry · Western Kentucky University" }
                    p { "Researched nanomaterials and photocatalytic semiconductor nanorods under Dr. Lawrence J. Hill. Honors B.S. in Chemistry and Biology (2016)." }
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
                        "I wanted excellence anyway, and work had to carry me there. Football practice, honors classes, farm chores before and after school. I returned to the rep, the page, and the problem until the work added up."
                    }
                    p {
                        "That 3.92 was earned one repetition at a time. It was refusal to quit."
                    }
                }

                div style="margin: 32px 0;" {
                    p style="font-family: var(--mono); font-size: 0.85rem; letter-spacing: 0.08em; color: var(--muted);" { "02 · UNDERGRADUATE · 3.2 AND HONORS" }
                    h3 style="font-family: var(--display); font-size: 1.4rem; margin: 8px 0 12px;" { "Undergraduate: 3.2 and Honors" }
                    p {
                        "College was exploration. I tried futures on, learned which dreams belonged to me, and finished with a 3.2 GPA and graduated with honors."
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
        }
    }
}
