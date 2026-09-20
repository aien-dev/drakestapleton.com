import { Link } from "react-router-dom";
import { PageIntro } from "../components/PagePrimitives";
import { AUDIT_SCOPE, EVIDENCE_CLASSES, NEXT_SOURCES, VERIFIED_FINDINGS } from "../data/historyAudit";
import { usePageMeta } from "../lib/usePageMeta";

export function EvidencePage() {
  usePageMeta("/evidence");

  return (
    <main className="wrap portrait-wrap evidence-page">
      <PageIntro eyebrow="Forensic history audit / current record" title="The documented record." className="path-header evidence-header">
        <p>
          This page organizes verified work, reconstructed history, direct project sessions, and the
          sources that will make the record fuller.
        </p>
      </PageIntro>

      <section className="audit-status" aria-labelledby="audit-status-title">
        <div>
          <p className="portrait-index">Current scope</p>
          <h2 id="audit-status-title">The current audit covers a defined source set.</h2>
        </div>
        <p>
          The complete nine-file audit package is part of this record. It reports 33 project records, 168
          evidence claims, 88 dated events, and 180 retrieved merged pull requests. The original ChatGPT
          export is the next source for an account-wide conversation history.
        </p>
      </section>

      <section className="audit-metrics" aria-label="Audit scope">
        {AUDIT_SCOPE.map((metric) => (
          <div className="audit-metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="evidence-section" aria-labelledby="classes-title">
        <p className="portrait-index">Evidence classes</p>
        <h2 id="classes-title">Four different kinds of evidence.</h2>
        <div className="evidence-class-grid">
          {EVIDENCE_CLASSES.map((item) => (
            <article className="evidence-class" key={item.title}>
              <p className="evidence-status">{item.status}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence-section" aria-labelledby="findings-title">
        <p className="portrait-index">Strongest current findings</p>
        <h2 id="findings-title">Findings supported by the current record.</h2>
        <div className="finding-list">
          {VERIFIED_FINDINGS.map((finding, index) => (
            <article className="finding" key={finding.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{finding.title}</h3>
                <p>{finding.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="evidence-section audit-gaps" aria-labelledby="gaps-title">
        <p className="portrait-index">Next sources</p>
        <h2 id="gaps-title">What comes next.</h2>
        <ul>
          {NEXT_SOURCES.map((gap) => (
            <li key={gap}>{gap}</li>
          ))}
        </ul>
      </section>

      <section className="portrait-closing compact">
        <p className="portrait-index">How I use this audit</p>
        <h2>The record grows source by source.</h2>
        <p>
          The audit documents systems I built, operated, and repaired alongside my leadership work. Every
          source is cataloged by evidence class.
        </p>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/">
            Return to the human story
          </Link>
          <Link className="portrait-link quiet" to="/path">
            Follow the path
          </Link>
        </div>
      </section>
    </main>
  );
}
