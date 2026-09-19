use axum::{
    extract::{OriginalUri, State},
    http::{header, HeaderMap, HeaderValue, StatusCode},
    response::{Html, IntoResponse, Response},
};
use crate::state::AppState;

pub async fn serve_page(
    State(state): State<AppState>,
    OriginalUri(uri): OriginalUri,
) -> Response {
    let path = uri.path();
    
    // Normalize trailing slash (except for root "/")
    let normalized = if path.len() > 1 && path.ends_with('/') {
        path.trim_end_matches('/')
    } else {
        path
    };

    if let Some(content) = state.routes.get(normalized) {
        let mut headers = HeaderMap::new();
        headers.insert(header::CONTENT_TYPE, HeaderValue::from_static("text/html; charset=utf-8"));
        headers.insert(header::CACHE_CONTROL, HeaderValue::from_static("public, max-age=300, stale-while-revalidate=86400"));
        (StatusCode::OK, headers, Html(content.clone())).into_response()
    } else {
        let not_found_html = state
            .routes
            .get("/404")
            .cloned()
            .unwrap_or_else(|| "<h1>404 - Page Not Found</h1>".to_string());
        let mut headers = HeaderMap::new();
        headers.insert(header::CONTENT_TYPE, HeaderValue::from_static("text/html; charset=utf-8"));
        (StatusCode::NOT_FOUND, headers, Html(not_found_html)).into_response()
    }
}
