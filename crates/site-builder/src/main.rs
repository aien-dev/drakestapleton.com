use std::collections::HashMap;
use std::fs;
use std::path::Path;
use std::time::Instant;

#[derive(serde::Deserialize)]
struct PageMeta {
    title: String,
    #[allow(dead_code)]
    description: String,
}

fn main() {
    let start = Instant::now();
    let target_dir = std::env::args().nth(1).unwrap_or_else(|| "dist".to_string());
    let dist = Path::new(&target_dir);

    println!("============================================================");
    println!("  AIEN Native Static Site Builder & Integrity Verifier      ");
    println!("  Target: {}", dist.display());
    println!("============================================================");

    if !dist.exists() {
        eprintln!("Error: Target directory '{}' does not exist.", dist.display());
        std::process::exit(1);
    }

    let metadata_str = fs::read_to_string("site-metadata.json")
        .expect("Failed to read site-metadata.json");
    let metadata: HashMap<String, PageMeta> = serde_json::from_str(&metadata_str)
        .expect("Failed to parse site-metadata.json");

    let required_routes = vec![
        ("index.html", "/"),
        ("aien/index.html", "/aien"),
        ("atlas/index.html", "/atlas"),
        ("aegis/index.html", "/aegis"),
        ("software/index.html", "/software"),
        ("path/index.html", "/path"),
        ("evidence/index.html", "/evidence"),
        ("what-i-learned/index.html", "/what-i-learned"),
        ("interest/index.html", "/interest"),
        ("symphony/index.html", "/symphony"),
        ("symphony/first/index.html", "/symphony/first"),
        ("symphony/workflow/index.html", "/symphony/workflow"),
        ("symphony/map/index.html", "/symphony/map"),
        ("404.html", "/404"),
    ];

    let mut total_bytes = 0usize;
    let mut verified_pages = 0;

    for (rel_path, route) in &required_routes {
        let file_path = dist.join(rel_path);
        assert!(
            file_path.exists(),
            "Required static route missing: {}",
            file_path.display()
        );

        let content = fs::read_to_string(&file_path)
            .unwrap_or_else(|_| panic!("Failed to read {}", file_path.display()));

        total_bytes += content.len();

        // Check for pre-rendered root content (eliminates SPA clunkiness)
        assert!(
            content.contains("<div id=\"root\">") && content.contains("<div class=\"site-shell\">"),
            "Route {} missing pre-rendered HTML DOM in #root",
            route
        );

        // Check metadata matches site-metadata.json
        if let Some(meta) = metadata.get(*route) {
            let escaped_title = meta.title.replace('&', "&amp;");
            assert!(
                content.contains(&escaped_title),
                "Route {} missing required title: {}",
                route,
                escaped_title
            );
        }

        // Verify unslop standards: zero em dashes and zero en dashes
        assert!(
            !content.contains('\u{2014}'),
            "Forbidden em dash detected in {}",
            rel_path
        );
        assert!(
            !content.contains('\u{2013}'),
            "Forbidden en dash detected in {}",
            rel_path
        );

        verified_pages += 1;
        println!("  [OK] {} ({} bytes) -> {}", rel_path, content.len(), route);
    }

    // Verify sitemap and robots
    let sitemap = dist.join("sitemap.xml");
    assert!(sitemap.exists(), "Missing sitemap.xml");
    let robots = dist.join("robots.txt");
    assert!(robots.exists(), "Missing robots.txt");

    let elapsed = start.elapsed();
    println!("------------------------------------------------------------");
    println!("  Verified {} pre-rendered static routes ({} KB total)", verified_pages, total_bytes / 1024);
    println!("  Integrity & Unslop Invariants: PASS");
    println!("  Verification completed in: {:.2?}", elapsed);
    println!("============================================================");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_unslop_punctuation_invariants() {
        let sample = "AIEN: Sovereign Cognitive Architecture on dedicated hardware.";
        assert!(!sample.contains('\u{2014}'), "Must not contain em dash");
        assert!(!sample.contains('\u{2013}'), "Must not contain en dash");
    }

    #[test]
    fn test_metadata_deserialization() {
        let sample_json = r#"{"/aien":{"title":"AIEN Sovereign","description":"Sovereign cognitive runtime."}}"#;
        let map: HashMap<String, PageMeta> = serde_json::from_str(sample_json).unwrap();
        assert_eq!(map.get("/aien").unwrap().title, "AIEN Sovereign");
    }
}
