import { Link } from "react-router-dom";
import { BenchmarkSection } from "../components/BenchmarkSection";
import { InterestForm } from "../components/InterestForm";
import { SectionLead } from "../components/PagePrimitives";
import { usePageMeta } from "../lib/usePageMeta";

const PROOF_STRIP = [
  {
    metric: "~$1.2M",
    label: "Documented Sourcing Savings",
    subtext: "Gold Eagle alternate raw material qualification during global disruption.",
    claimId: "CLAIM-GE-SAVINGS-001",
  },
  {
    metric: "$1.0M",
    label: "Documented Process Savings",
    subtext: "3M manufacturing optimization and chemical process improvements.",
    claimId: "CLAIM-3M-SAVINGS-001",
  },
  {
    metric: "M.S. Chem",
    label: "Published Nanomaterials Research",
    subtext: "Master thesis and peer-reviewed publication presented at ACS.",
    claimId: "CLAIM-CHEM-RESEARCH-001",
  },
  {
    metric: "100%",
    label: "Public Sovereign Artifacts",
    subtext: "Reproducible Rust benchmarks and test suites on Grace Blackwell silicon.",
    claimId: "CLAIM-KV-ALLOC-001",
  },
];

const WHAT_I_BUILD = [
  {
    title: "Native Compiled Runtimes",
    body: "Pure compiled Rust and Mojo engines replacing interpreted control planes, eliminating runtime overhead across scheduling and memory loops.",
  },
  {
    title: "Hardware TPM Key Vaults",
    body: "Credentials resolve dynamically from physical security chips into volatile memory. Zero plaintext configuration files on persistent storage.",
  },
  {
    title: "Unified Paged KV Cache",
    body: "Deterministic O(1) block allocation and zero-copy sequence branching in page-locked memory on dedicated Grace Blackwell hardware.",
  },
  {
    title: "Auditable Agent Orchestration",
    body: "Side-effect-free diagnostic probes, deterministic allow-lists, and verified cryptographic ledgers anchoring every autonomous action in proof.",
  },
];

const CAREER_LADDER = [
  {
    period: "2016 to 2018",
    role: "Inorganic Chemistry Researcher",
    organization: "Western Kentucky University",
    summary: "Colloidal semiconductor nanocrystals, catalytic platinum heterostructures, and published ACS master thesis research.",
  },
  {
    period: "2018 to 2020",
    role: "Formulation & Process Chemist",
    organization: "Soudal",
    summary: "Industrial moisture-cure silicone formulation scale-up, rheological characterization, and manufacturing line partnerships.",
  },
  {
    period: "2020 to 2024",
    role: "Lead Chemist & HAZMAT Commander",
    organization: "Gold Eagle Co.",
    summary: "Commercialized 303 Graphene line, secured alternative raw materials during global disruption, producing ~$1.2M in documented savings.",
  },
  {
    period: "2024 to Present",
    role: "Manufacturing & Product Engineer",
    organization: "3M",
    summary: "Led PPU optimization delivering $1.0M in manufacturing cost savings. Directing technical product engineering programs.",
  },
];

export function HomePage() {
  usePageMeta("/");

  return (
    <main className="portrait-page home-page">
      {/* 1. Hero Section */}
      <section className="home-hero page-boundary" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">
            <span className="keep-together">Drake Stapleton</span> ·{" "}
            <span className="keep-together">AI Architect &amp; Operator</span> ·{" "}
            <span className="keep-together">Freedom Fighter</span>
          </p>
          <h1 id="hero-title">
            <span className="keep-together">AI Architect,</span>{" "}
            <span className="keep-together">Systems Builder,</span>{" "}
            <span>and Scientist.</span>
          </h1>
          <blockquote className="hero-quote">
            Building accountable, high-performance local AI systems on dedicated silicon.
          </blockquote>
          <p className="home-hero-lede">
            I unite rigorous scientific experimentation, manufacturing discipline, native compiled
            systems architecture, and local neural inference. My work replaces interpreted frameworks
            with verified, auditable native software grounded in physical hardware proof.
          </p>
          <div className="portrait-actions hero-actions">
            <Link className="portrait-link" to="/aien">
              Explore AIEN
            </Link>
            <Link className="portrait-link" to="/evidence">
              View the Evidence
            </Link>
            <Link className="portrait-link quiet" to="/interest">
              Start a Conversation
            </Link>
          </div>
        </div>
        <aside className="hero-identity" aria-label="Professional summary">
          <span>M.S. Inorganic Chemistry</span>
          <span>HAZMAT Incident Commander</span>
          <span>NVIDIA DGX Spark GB10</span>
          <span>Pure Native Rust &amp; Mojo</span>
          <span>Hardware TPM Key Vault</span>
          <span>3M Product Engineer</span>
        </aside>
      </section>

      {/* 2. Proof Strip */}
      <section className="proof-strip-section page-boundary" aria-labelledby="proof-strip-heading">
        <h2 id="proof-strip-heading" className="visually-hidden">Documented Proof Strip</h2>
        <div className="proof-strip-grid">
          {PROOF_STRIP.map((item) => (
            <Link
              key={item.claimId}
              to={`/evidence#${item.claimId}`}
              className="proof-strip-card"
              title="View canonical verification record"
            >
              <strong className="proof-metric">{item.metric}</strong>
              <span className="proof-label">{item.label}</span>
              <p className="proof-subtext">{item.subtext}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. What I Build */}
      <section className="home-chapter page-boundary" id="what-i-build" aria-labelledby="build-heading">
        <SectionLead
          eyebrow="01 / Systems Architecture"
          title="What I build: sovereign systems with zero compromise."
        >
          <p>
            Modern AI deployment requires performance, privacy, and accountability.
            I design and compile architectures that operate directly on dedicated hardware.
          </p>
        </SectionLead>
        <div className="what-i-build-grid">
          {WHAT_I_BUILD.map((item) => (
            <article className="build-feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link to="/projects" className="text-link">
            Explore the unified project family: Atlas, AEGIS, and AIEN →
          </Link>
        </div>
      </section>

      {/* 4. Condensed Career Ladder */}
      <section className="home-chapter page-boundary" id="career" aria-labelledby="career-heading">
        <SectionLead
          eyebrow="02 / Foundation & Career"
          title="How I got here: laboratory science to sovereign AI."
        >
          <p>
            Every step built the discipline required for complex systems: precision chemistry,
            high-volume manufacturing engineering, and autonomous software orchestration.
          </p>
        </SectionLead>
        <div className="career-ladder-list">
          {CAREER_LADDER.map((step) => (
            <article className="career-ladder-item" key={step.period}>
              <div className="ladder-period">{step.period}</div>
              <div className="ladder-content">
                <h3>{step.role} <span className="ladder-org">· {step.organization}</span></h3>
                <p>{step.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "24px" }}>
          <Link to="/path" className="text-link">
            Follow the complete career and manufacturing path →
          </Link>
        </div>
      </section>

      {/* 5. Short Why I Build Excerpt */}
      <section className="why-i-build-section page-boundary" id="why-i-build" aria-labelledby="why-heading">
        <div className="section-lead">
          <p className="portrait-index">03 / Human Purpose</p>
          <div>
            <h2 id="why-heading">Why I build: care turned into durable machinery.</h2>
            <p>
              I survived a childhood that taught me to hide, and became a man who lives in the open.
              Mom gave me relentless fire. Dad taught me patient labor by example. Devin and I opened
              our home to six Level 5 foster children who needed steady adults.
            </p>
            <blockquote className="why-quote">
              “The people saved me. Now it's my turn. I turn care into systems people can rely upon.”
            </blockquote>
            <p>
              Atlas, AEGIS, and AIEN all trace back to the same conviction: memory, truth, dignity,
              and protection are worth building for.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Link to="/life" className="portrait-link">
                Read the Personal Record &amp; Family History
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Latest AIEN & Atlas Work */}
      <section className="latest-work page-boundary" id="latest-work" aria-labelledby="latest-heading">
        <div className="section-lead">
          <p className="portrait-index">04 / Sovereign Stack</p>
          <div>
            <h2 id="latest-heading">AIEN Sovereign Core &amp; Atlas Symphony</h2>
            <p>
              Active systems running on on-premise NVIDIA DGX Spark Grace Blackwell silicon.
              Pure compiled Rust daemons, hardware-bound TPM security, and multi-model coordination.
            </p>
          </div>
        </div>
        <div className="latest-work-grid">
          <article className="latest-work-card">
            <div className="mascot-badge-row">
              <img
                src="/images/aien-avatar.jpg"
                alt="AIEN Cosmic Monkey Warrior"
                className="mascot-avatar-small"
              />
              <div>
                <h3>AIEN Sovereign Cognitive Architecture</h3>
                <p className="work-meta">Pure Compiled Rust &amp; Mojo · Grace Blackwell GB10</p>
              </div>
            </div>
            <p>
              A sovereign cognitive architecture operating across portable silicon.
              Eliminates interpreted runtime friction, allocates page-locked unified KV caches,
              and resolves keys through hardware TPM vaults.
            </p>
            <div className="work-card-links">
              <Link to="/aien" className="portrait-link">
                Explore AIEN Runtime
              </Link>
              <Link to="/research" className="portrait-link quiet">
                Read Inference Paper
              </Link>
            </div>
          </article>

          <article className="latest-work-card">
            <div className="card-header-simple">
              <span className="project-role-badge">Orchestration &amp; Memory</span>
              <h3>Atlas Symphony &amp; AEGIS Defense</h3>
              <p className="work-meta">Multi-Model Supervision · Authorized Containment</p>
            </div>
            <p>
              Atlas coordinates multi-model execution lanes under human supervision while preserving
              continuous memory. AEGIS extends the perimeter into on-prem defensive containment inside
              authorized networks (59/62 verified milestone).
            </p>
            <div className="work-card-links">
              <Link to="/atlas" className="portrait-link">
                Explore Atlas
              </Link>
              <Link to="/aegis" className="portrait-link quiet">
                Explore AEGIS
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* 7. Labeled Benchmark Preview */}
      <BenchmarkSection />

      {/* 8. Evidence Hub CTA */}
      <section className="evidence-cta-band page-boundary" aria-labelledby="evidence-cta-heading">
        <div className="section-lead">
          <p className="portrait-index">08 / Verification &amp; Trust</p>
          <div>
            <h2 id="evidence-cta-heading">Every major claim linked to canonical proof.</h2>
            <p>
              I believe in auditable truth. Inspect our structured claims catalog, verified
              timelines, employer documentation classes, and one-command reproduction instructions.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Link to="/evidence" className="portrait-link">
                Inspect Canonical Evidence Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Conversation CTA */}
      <section className="home-chapter page-boundary" id="conversation" aria-labelledby="conversation-heading">
        <SectionLead
          eyebrow="09 / Direct Contact"
          title="Start a conversation."
        >
          <p>
            Open to discussions on AI architecture, systems engineering, research collaboration,
            and high-impact technical leadership.
          </p>
        </SectionLead>
        <InterestForm />
      </section>

      {/* AI Authorship & Transparency Disclosure */}
      <footer className="home-transparency-strip page-boundary">
        <p className="ai-transparency">
          Drake sets direction, uses AI in implementation and research, reviews output, tests results,
          maintains source control, and remains responsible.
        </p>
      </footer>
    </main>
  );
}
