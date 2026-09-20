import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-identity">
          <p className="site-footer-name">Drake Stapleton</p>
          <p className="site-footer-line">AI Architect &amp; Operator · Freedom Fighter</p>
          <p className="site-footer-line">Springfield, Missouri</p>
        </div>
        <nav className="site-footer-links" aria-label="Explore the site">
          <Link to="/path">Work</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/research">Research</Link>
          <Link to="/life">About</Link>
          <Link to="/evidence">Evidence</Link>
          <Link to="/interest">Contact</Link>
        </nav>
      </div>
      <div className="site-footer-disclosure page-boundary">
        <p className="ai-transparency">
          Drake sets direction, uses AI in implementation and research, reviews output, tests results,
          maintains source control, and remains responsible.
        </p>
      </div>
    </footer>
  );
}
