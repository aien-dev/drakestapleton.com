import { Link } from "react-router-dom";
import { PageIntro } from "../components/PagePrimitives";
import { usePageMeta } from "../lib/usePageMeta";

interface ProjectFamilyMember {
  id: string;
  role: string;
  name: string;
  tagline: string;
  description: string;
  route: string;
  githubUrl?: string;
  milestones: string[];
}

const PROJECT_FAMILY: ProjectFamilyMember[] = [
  {
    id: "atlas",
    role: "Soul & Continuity",
    name: "Atlas",
    tagline: "Continuous memory, operator values, and eighteen months of operational records.",
    description:
      "Atlas represents the continuous personal cognitive foundation. It preserves memory graphs across sessions, maintains stateful affective and physiological models, guides multi-agent work lanes, and anchors architectural decisions in verifiable proof.",
    route: "/atlas",
    githubUrl: "https://github.com/aien-dev/aien-sovereign-core",
    milestones: [
      "Eighteen months of continuous operational session archives",
      "Dynamic in-memory SQLite WAL vector retrieval",
      "Operator-supervised multi-model Symphony orchestration",
      "Hardware-bound state protection and session persistence",
    ],
  },
  {
    id: "aegis",
    role: "Perimeter Shield",
    name: "AEGIS",
    tagline: "Defensive containment and forensic evidence preservation inside authorized networks.",
    description:
      "AEGIS extends Atlas into on-premise infrastructure defense. Operating strictly within operator-authorized boundaries, AEGIS correlates multi-sensor signals, identifies malicious intrusions, executes allow-listed containment actions, and preserves forensic audit records.",
    route: "/aegis",
    githubUrl: "https://github.com/aien-dev/drakestapleton.com",
    milestones: [
      "59 of 62 verified checks on the August 20 frozen evaluation suite",
      "Deterministic allow-listed containment: session cut, host isolation, token revocation",
      "Strict policy boundaries restricted to operator-owned networks",
      "Tamper-resistant cryptographic audit logging for incident response",
    ],
  },
  {
    id: "aien",
    role: "Compiled Runtime",
    name: "AIEN",
    tagline: "Pure compiled sovereign cognitive architecture running on dedicated silicon.",
    description:
      "AIEN is the native compiled engine powering local intelligence. Built in pure Rust and Mojo, AIEN eliminates interpreted runtime overhead, allocates unified memory page-locked KV caches, enables zero-copy subagent branching, and protects all credentials in hardware TPM vaults.",
    route: "/aien",
    githubUrl: "https://github.com/aien-dev/aien-sovereign-core",
    milestones: [
      "134M blocks/sec KV block-table allocation throughput",
      "0.42 µs sequence-fork control-plane latency",
      "Hardware TPM 2.0 dynamic credential resolution",
      "Multi-platform portability across Blackwell, Apple Silicon, and Linux",
    ],
  },
];

export function ProjectsPage() {
  usePageMeta("/projects");

  return (
    <main className="wrap portrait-wrap projects-page">
      <PageIntro
        eyebrow="Sovereign AI Systems / Unified Family"
        title="Three systems. One sovereign architecture."
        className="projects-header"
      >
        <p>
          Atlas provides the memory. AEGIS secures the perimeter. AIEN executes the compiled runtime.
          Together, they form a cohesive family of local, accountable, and auditable AI systems
          built on dedicated silicon.
        </p>
      </PageIntro>

      <section className="projects-grid-section" aria-labelledby="family-overview-title">
        <div className="section-lead">
          <p className="portrait-index">System Architecture</p>
          <div>
            <h2 id="family-overview-title">The Pillars of Sovereign Intelligence</h2>
            <p>
              Each system addresses a distinct engineering boundary while sharing common principles:
              pure compiled performance, zero plaintext disk credentials, explicit operator policy, and
              tamper-evident empirical verification.
            </p>
          </div>
        </div>

        <div className="projects-family-grid">
          {PROJECT_FAMILY.map((project) => (
            <article className="project-family-card" key={project.id}>
              <div className="project-card-header">
                <span className="project-role-badge">{project.role}</span>
                <h3>{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-milestones">
                <h4>Verified Milestones</h4>
                <ul>
                  {project.milestones.map((milestone) => (
                    <li key={milestone}>{milestone}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card-actions">
                <Link to={project.route} className="portrait-link">
                  Explore {project.name}
                </Link>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portrait-link quiet"
                  >
                    View Source
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-research-banner page-boundary">
        <div className="section-lead">
          <p className="portrait-index">Empirical Research</p>
          <div>
            <h2>Research & Benchmark Suite</h2>
            <p>
              Every system is backed by active measurement harnesses running on NVIDIA DGX Spark Grace Blackwell hardware.
              Inspect our comprehensive inference research paper and live benchmark results.
            </p>
          </div>
        </div>
        <div className="portrait-actions">
          <Link to="/research" className="portrait-link">
            Read Inference Paper
          </Link>
          <Link to="/evidence" className="portrait-link">
            Inspect Evidence Hub
          </Link>
          <a
            href="https://github.com/aien-dev/benchmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="portrait-link quiet"
          >
            aien-dev/benchmarks
          </a>
        </div>
      </section>
    </main>
  );
}
