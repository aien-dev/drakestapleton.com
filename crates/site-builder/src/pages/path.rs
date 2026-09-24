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
        }
    }
}
