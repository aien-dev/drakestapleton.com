use maud::{html, Markup, PreEscaped};
use pulldown_cmark::{html::push_html, Options, Parser};

#[derive(Debug, Clone, serde::Deserialize)]
pub struct WorkFrontmatter {
    pub title: String,
    pub slug: String,
    pub date: String,
    pub summary: String,
}

pub fn parse_work_markdown(raw: &str) -> (Option<WorkFrontmatter>, String) {
    if raw.starts_with("---\n") || raw.starts_with("---\r\n") {
        let rest = &raw[4..];
        if let Some(end_idx) = rest.find("\n---") {
            let frontmatter_str = &rest[..end_idx];
            let markdown_content = &rest[end_idx + 4..].trim_start_matches('\n').trim_start_matches('\r');

            // Quick YAML key-value parser to avoid extra heavy yaml parser dependency
            let mut title = String::new();
            let mut slug = String::new();
            let mut date = String::new();
            let mut summary = String::new();

            for line in frontmatter_str.lines() {
                let trimmed = line.trim();
                if let Some((k, v)) = trimmed.split_once(':') {
                    let key = k.trim();
                    let val = v.trim().trim_matches('"').trim_matches('\'');
                    match key {
                        "title" => title = val.to_string(),
                        "slug" => slug = val.to_string(),
                        "date" => date = val.to_string(),
                        "summary" => summary = val.to_string(),
                        _ => {}
                    }
                }
            }

            let meta = WorkFrontmatter {
                title,
                slug,
                date,
                summary,
            };

            let mut options = Options::empty();
            options.insert(Options::ENABLE_TABLES);
            options.insert(Options::ENABLE_STRIKETHROUGH);
            let parser = Parser::new_ext(markdown_content, options);
            let mut html_output = String::new();
            push_html(&mut html_output, parser);

            return (Some(meta), html_output);
        }
    }

    let mut options = Options::empty();
    options.insert(Options::ENABLE_TABLES);
    let parser = Parser::new_ext(raw, options);
    let mut html_output = String::new();
    push_html(&mut html_output, parser);
    (None, html_output)
}

pub fn render_reader_page(meta: &WorkFrontmatter, html_body: &str) -> Markup {
    html! {
        article class="reader" {
            header class="reader-header" {
                p class="reader-date" { (meta.date) }
                h1 { (meta.title) }
                p class="reader-summary" { (meta.summary) }
            }
            div class="reader-content" {
                (PreEscaped(html_body))
            }
        }
    }
}
