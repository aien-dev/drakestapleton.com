use maud::{html, Markup};

pub fn render_telemetry_bar() -> Markup {
    html! {
        aside class="telemetry-bar" aria-label="Grace Blackwell Silicon Telemetry" {
            div class="telemetry-inner" hx-ext="sse" sse-connect="/api/live/stream" sse-swap="telemetry" {
                span class="telemetry-pulse" aria-hidden="true" {}
                span class="telemetry-node" { "NODE: DGX SPARK (GB10 Grace Blackwell)" }
                span class="telemetry-sep" { "·" }
                span class="telemetry-stat" {
                    "RAM: "
                    strong class="tabular-nums" { "124,608 MB UNIFIED" }
                }
                span class="telemetry-sep" { "·" }
                span class="telemetry-stat" {
                    "STATE: "
                    strong { "SOVEREIGN COMPILED RUNTIME" }
                }
            }
        }
    }
}
