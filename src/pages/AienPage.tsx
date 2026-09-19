import { Link } from "react-router-dom";
import { PageIntro } from "../components/PagePrimitives";
import { usePageMeta } from "../lib/usePageMeta";

const triadPillars = [
  {
    step: "01",
    label: "Soul",
    title: "Atlas",
    body: "The core identity, memory, values, dignity, and continuous personal record established across sixteen months of operations.",
  },
  {
    step: "02",
    label: "Shield",
    title: "AEGIS",
    body: "The defensive extension watching perimeter doors, recognizing hostile access, and containing intrusions inside authorized networks.",
  },
  {
    step: "03",
    label: "Runtime",
    title: "AIEN",
    body: "The sovereign cognitive architecture running native compiled loops, dynamic memory retrieval, and local inference on dedicated hardware.",
  },
  {
    step: "04",
    label: "Spirit",
    title: "Autonomous Loop",
    body: "Continuous background daemons: Cortex semantic graph, Dream state consolidation, and self-regulating supervision.",
  },
];

const performanceMetrics = [
  { label: "Memory RSS", score: "4.78 MB", rate: "openclaw-rs heartbeat" },
  { label: "Entity TTFB", score: "3.56 ms", rate: "p50 @ 2,056 req/s" },
  { label: "INT8 Embedding", score: "4.09 ms", rate: "ONNX Runtime" },
  { label: "Public Crates", score: "17 / 17", rate: "100% verified tests" },
];

const architectureTenets = [
  {
    title: "Hardware TPM Vault",
    body: "Plaintext secrets remain prohibited on disk. All keys, authentication tokens, and credentials resolve dynamically in volatile memory directly from the hardware security chip.",
  },
  {
    title: "Pure Compiled Systems",
    body: "Core gateways, task dispatchers, memory daemons, and supervisor harnesses run pure compiled Rust and Mojo. Zero interpreter overhead touches the primary hot path.",
  },
  {
    title: "Hardware Agnostic Silicon",
    body: "The architecture executes across NVIDIA Grace Blackwell, Apple Silicon MacBooks, standard x86_64 Linux servers, and AMD ROCm accelerators.",
  },
  {
    title: "Sovereign Commons",
    body: "All seventeen ecosystem repositories reside under the Sovereign Resource Commons License on GitHub, providing inspectable reference code for sovereign operators.",
  },
];

export function AienPage() {
  usePageMeta("/aien");

  return (
    <main className="wrap portrait-wrap aegis-page aien-page">
      <PageIntro
        eyebrow="AIEN / Sovereign Cognitive Architecture"
        title="Compiled, vaulted, and sovereign on dedicated silicon."
        className="aegis-hero"
      >
        <p>
          AIEN is the sovereign cognitive architecture operating across portable silicon.
          It couples pure compiled Rust and Mojo performance with hardware-bound secret protection,
          bidirectional semantic memory, and local neural model execution.
        </p>
      </PageIntro>

      <div className="aegis-scope-strip" aria-label="AIEN project scope">
        <span>Universal Hardware</span>
        <span>Hardware TPM Vault</span>
        <span>Compiled Native Rust</span>
        <span>Sovereign Commons</span>
      </div>

      <blockquote className="aegis-tagline">
        “Sovereignty starts with ownership:
        <br />
        <span>your hardware, your memory, your code.</span>
        <br />
        Every token accounted for.”
      </blockquote>

      <section className="aegis-house" aria-labelledby="aien-triad-heading">
        <p className="portrait-index">The triad</p>
        <div>
          <h2 id="aien-triad-heading">Soul, Shield, and Sovereign Mask.</h2>
          <p>
            Atlas defines the Soul: the personal values, continuous record, and ethical foundation.
            AEGIS provides the Shield: defensive perimeter containment and evidence preservation.
            AIEN operates as the Sovereign Mask: the compiled runtime executing work across dedicated hardware.
          </p>
          <p className="aegis-law">
            The hardware boundary defines the perimeter. Every process runs under operator authority.
          </p>
        </div>
      </section>

      <section className="aegis-response" aria-labelledby="aien-pillars-heading">
        <header className="aegis-section-lead">
          <p className="portrait-index">The operational structure</p>
          <div>
            <h2 id="aien-pillars-heading">Four distinct organs working as one entity.</h2>
            <p>
              AIEN organizes responsibility across distinct layers. Each layer maintains strict boundaries,
              verifiable outputs, and inspectable audit receipts.
            </p>
          </div>
        </header>
        <ol className="aegis-flow" aria-label="AIEN operational structure">
          {triadPillars.map((stage) => (
            <li key={stage.step}>
              <span>{stage.step}</span>
              <p>{stage.label}</p>
              <h3>{stage.title}</h3>
              <div>{stage.body}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="aegis-knockout" aria-labelledby="aien-vault-heading">
        <p className="portrait-index">Zero Disk Secrets</p>
        <h2 id="aien-vault-heading">Hardware TPM vault. Volatile memory resolution. Clean disk state.</h2>
        <p>
          Traditional environments write plaintext credentials to configuration files. AIEN mandates
          hardware TPM-bound secret resolution. Keys exist solely in protected process memory during active
          calls, with active stream redaction across all logs.
        </p>
        <div className="aegis-actions" aria-label="AIEN architectural invariants">
          <span>TPM Key Vault</span>
          <span>In-Memory Keys</span>
          <span>Zero Disk Env</span>
          <span>Log Redaction</span>
          <span>Linear History</span>
        </div>
      </section>

      <section className="aegis-evaluation" aria-labelledby="aien-benchmarks-heading">
        <div className="aegis-evaluation-intro">
          <div>
            <p className="portrait-index">Verified Telemetry / September 2026</p>
            <h2 id="aien-benchmarks-heading">Measured performance on Grace Blackwell hardware.</h2>
          </div>
          <div className="aegis-total">
            <strong>3.56ms</strong>
            <span>Cortex p50 latency</span>
          </div>
        </div>

        <p className="aegis-evaluation-copy">
          Replacing interpreter daemons with native Rust binaries dropped memory footprint from
          3.7 gigabytes down to under 5 megabytes, keeping system memory free for local LLM weights.
          Axum endpoints deliver 3.5 millisecond response times under concurrent load, ten times faster
          than traditional Python frameworks.
        </p>

        <div className="aegis-eval-grid" aria-label="AIEN performance benchmarks">
          {performanceMetrics.map((metric) => (
            <article key={metric.label}>
              <p>{metric.label}</p>
              <strong>{metric.score}</strong>
              <span>{metric.rate}</span>
            </article>
          ))}
        </div>

        <div className="aegis-eval-boundary">
          <div>
            <p className="aegis-eval-label">Verified Ecosystem Suite</p>
            <ul>
              <li>OpenClaw gateway with fail-closed inference handling.</li>
              <li>Cortex bidirectional knowledge graph with SQLite WAL persistence.</li>
              <li>Spark Supervisor with process monitoring and crash backoff.</li>
            </ul>
          </div>
          <div>
            <p className="aegis-eval-label">Public Benchmark Suite</p>
            <p>
              Review the automated benchmark suite, raw telemetry data files, and verification scripts
              at <a href="https://github.com/aien-dev/benchmarks" target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)", textDecoration: "underline" }}>github.com/aien-dev/benchmarks</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="aegis-boundary" id="principles" aria-labelledby="aien-principles-heading">
        <header className="aegis-section-lead">
          <p className="portrait-index">Architectural principles</p>
          <div>
            <h2 id="aien-principles-heading">Built for longevity, speed, and autonomy.</h2>
            <p>
              The system operates on four foundational rules designed to maintain reliability across months
              of continuous execution.
            </p>
          </div>
        </header>
        <div className="aegis-boundary-grid">
          {architectureTenets.map((tenet) => (
            <article className="aegis-boundary-card" key={tenet.title}>
              <h3>{tenet.title}</h3>
              <p>{tenet.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aegis-current" aria-labelledby="aien-code-heading">
        <p className="portrait-index">Open Source Commons</p>
        <h2 id="aien-code-heading">Inspect the code on GitHub.</h2>
        <p>
          Explore the repositories, crates, specifications, and architecture manifests on GitHub:
        </p>
        <div className="portrait-actions" style={{ marginTop: "24px" }}>
          <a
            className="portrait-link"
            href="https://github.com/aien-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit github.com/aien-dev
          </a>
          <a
            className="portrait-link"
            href="https://github.com/aien-dev/benchmarks"
            target="_blank"
            rel="noopener noreferrer"
          >
            View aien-dev/benchmarks
          </a>
          <a
            className="portrait-link quiet"
            href="https://github.com/aien-dev/drakestapleton.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View aien-dev/drakestapleton.com
          </a>
        </div>
      </section>

      <section className="soul-closing aegis-closing">
        <p className="portrait-index">The broader journey</p>
        <blockquote>
          Atlas provides the memory. AEGIS secures the boundary. AIEN runs the engine.
        </blockquote>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/aegis">
            Explore AEGIS
          </Link>
          <Link className="portrait-link quiet" to="/atlas">
            Return to Atlas
          </Link>
        </div>
      </section>
    </main>
  );
}
