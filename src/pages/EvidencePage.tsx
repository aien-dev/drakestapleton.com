import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PageIntro } from "../components/PagePrimitives";
import {
  SITE_CLAIMS,
  EVIDENCE_CLASS_DEFINITIONS,
  type ClaimRecord,
  type EvidenceClass,
} from "../data/claims";
import { AUDIT_SCOPE, NEXT_SOURCES } from "../data/historyAudit";
import { usePageMeta } from "../lib/usePageMeta";

export function EvidencePage() {
  usePageMeta("/evidence");

  const [selectedClass, setSelectedClass] = useState<string>("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = useMemo(() => {
    const set = new Set<string>();
    SITE_CLAIMS.forEach((c) => set.add(c.category));
    return ["ALL", ...Array.from(set).sort()];
  }, []);

  const evidenceClasses = useMemo(() => {
    return ["ALL", ...Object.keys(EVIDENCE_CLASS_DEFINITIONS)];
  }, []);

  const filteredClaims = useMemo(() => {
    return SITE_CLAIMS.filter((claim) => {
      const matchClass = selectedClass === "ALL" || claim.evidenceClass === selectedClass;
      const matchCat = selectedCategory === "ALL" || claim.category === selectedCategory;
      return matchClass && matchCat;
    });
  }, [selectedClass, selectedCategory]);

  return (
    <main className="wrap portrait-wrap evidence-page">
      <PageIntro
        eyebrow="Canonical Trust Hub / Documented Record"
        title="The documented record."
        className="path-header evidence-header"
      >
        <p>
          Every technical metric, industrial cost savings, scientific publication, and personal milestone
          across this site is cataloged here as a structured record. We distinguish public physical
          reproductions from internal corporate audit records and personal historical archives.
        </p>
      </PageIntro>

      {/* Forensic History Audit Telemetry */}
      <section className="audit-metrics" aria-label="Audit scope">
        {AUDIT_SCOPE.map((metric) => (
          <div className="audit-metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      {/* Evidence Classes Hierarchy */}
      <section className="evidence-section" aria-labelledby="classes-title">
        <p className="portrait-index">Verification Hierarchy</p>
        <h2 id="classes-title">Six Defined Evidence Classes</h2>
        <p className="evidence-classes-note">
          Different assertions carry different levels of independent verification. Public reproductions
          provide one-command physical validation on target hardware, whereas private records reflect
          internal corporate ledgers or personal documentation.
        </p>

        <div className="evidence-class-grid">
          {(Object.entries(EVIDENCE_CLASS_DEFINITIONS) as [EvidenceClass, { description: string; verificationLevel: string }][]).map(
            ([cls, details]) => (
              <article className="evidence-class" key={cls}>
                <span className="evidence-class-pill">{cls}</span>
                <h3>{details.verificationLevel}</h3>
                <p>{details.description}</p>
              </article>
            )
          )}
        </div>
      </section>

      {/* Filter Bar */}
      <section className="claims-directory-section" aria-labelledby="claims-title">
        <div className="section-lead">
          <p className="portrait-index">Structured Claims Catalog</p>
          <div>
            <h2 id="claims-title">Canonical Claims Database</h2>
            <p>
              Inspect individual assertions, evidence categories, verification dates, source links,
              and reproduction commands.
            </p>
          </div>
        </div>

        <div className="claims-filter-bar">
          <div className="filter-group">
            <label htmlFor="category-filter">Category:</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="claims-select"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "ALL" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="class-filter">Evidence Class:</label>
            <select
              id="class-filter"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="claims-select"
            >
              {evidenceClasses.map((cls) => (
                <option key={cls} value={cls}>
                  {cls === "ALL" ? "All Evidence Classes" : cls}
                </option>
              ))}
            </select>
          </div>

          <div className="claims-count-badge">
            Showing {filteredClaims.length} of {SITE_CLAIMS.length} claims
          </div>
        </div>

        {/* Claims Cards */}
        <div className="claims-list">
          {filteredClaims.map((claim: ClaimRecord) => (
            <article className="claim-record-card" id={claim.id} key={claim.id}>
              <div className="claim-card-top">
                <div className="claim-id-row">
                  <a href={`#${claim.id}`} className="claim-id-anchor">
                    #{claim.id}
                  </a>
                  <span className="claim-category-tag">{claim.category}</span>
                  <span className={`claim-class-tag class-${claim.evidenceClass.toLowerCase().replace(/\s+/g, "-")}`}>
                    {claim.evidenceClass}
                  </span>
                </div>
                <span className="claim-period">{claim.period}</span>
              </div>

              <h3 className="claim-short-title">{claim.shortClaim}</h3>
              <p className="claim-full-wording">{claim.fullWording}</p>

              <div className="claim-metadata-grid">
                <div>
                  <strong>Status &amp; Verification</strong>
                  <p>{claim.status}</p>
                </div>
                <div>
                  <strong>Verification Date</strong>
                  <p>{claim.verificationDate}</p>
                </div>
              </div>

              {(claim.sourceUrl || claim.repoPath || claim.reproduction) && (
                <div className="claim-verification-details">
                  {claim.sourceUrl && (
                    <div className="claim-detail-row">
                      <span className="detail-label">Source URL:</span>
                      <a
                        href={claim.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-link"
                      >
                        {claim.sourceUrl}
                      </a>
                    </div>
                  )}

                  {claim.repoPath && (
                    <div className="claim-detail-row">
                      <span className="detail-label">Repository Path:</span>
                      <code>{claim.repoPath}</code>
                    </div>
                  )}

                  {claim.reproduction && (
                    <div className="claim-detail-row reproduction-row">
                      <span className="detail-label">Reproduction Command:</span>
                      <code>{claim.reproduction}</code>
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Next Sources Section */}
      <section className="evidence-section audit-gaps" aria-labelledby="gaps-title">
        <p className="portrait-index">Ongoing Telemetry</p>
        <h2 id="gaps-title">Planned Additions to the Archive</h2>
        <ul>
          {NEXT_SOURCES.map((gap) => (
            <li key={gap}>{gap}</li>
          ))}
        </ul>
      </section>

      {/* Closing Actions */}
      <section className="portrait-closing compact">
        <p className="portrait-index">Verification Navigation</p>
        <h2>Grounding Every Decision in Proof.</h2>
        <p>
          All systems, industrial savings, and benchmarks reference verifiable records.
          Select a system to explore the architectural implementation.
        </p>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/projects">
            Explore Sovereign Projects
          </Link>
          <Link className="portrait-link" to="/research">
            Read Inference Paper
          </Link>
          <Link className="portrait-link quiet" to="/path">
            Career Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
