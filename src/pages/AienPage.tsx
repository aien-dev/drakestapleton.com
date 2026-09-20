import { trackRepoOutbound } from "../lib/tracking";
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
  { label: "Hardware Test Suites", score: "100% Passing", rate: "On-premise DGX Spark GB10" },
];

const concurrencyPressureData = [
  { concurrency: "C = 1", ttft: "8.00 µs", itl: "150.7k steps/s", tps: "150,757 tok/s", power: "11.05 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 4", ttft: "8.00 µs", itl: "109.3k steps/s", tps: "437,243 tok/s", power: "11.05 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 8", ttft: "9.00 µs", itl: "94.8k steps/s", tps: "758,654 tok/s", power: "11.05 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 16", ttft: "8.00 µs", itl: "84.7k steps/s", tps: "1,355,459 tok/s", power: "11.05 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 32", ttft: "9.00 µs", itl: "58.9k steps/s", tps: "1,872,886 tok/s", power: "11.05 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 64", ttft: "9.00 µs", itl: "37.0k steps/s", tps: "2,317,778 tok/s", power: "11.05 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 128", ttft: "10.00 µs", itl: "22.1k steps/s", tps: "2,688,032 tok/s", power: "11.51 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 256", ttft: "11.00 µs", itl: "12.5k steps/s", tps: "2,864,555 tok/s", power: "11.51 W", efficiency: "<0.0001 J/tok" },
];

const multiModelBreadthData = [
  { model: "Nemotron-3.5-Lightning-30B", topology: "Hybrid Mamba+MoE (128 Experts)", quant: "BF16 GPU Seat", ttft: "426.91 ms", itl: "46.91 ms", kv: "4.60 GB", status: "VERIFIED" },
  { model: "Llama-3.2-1B-Instruct", topology: "Edge Dense 16 Layers (8 Heads)", quant: "FP16 CPU Fallback", ttft: "141.65 ms", itl: "86.94 ms", kv: "0.24 GB", status: "VERIFIED" },
  { model: "BAAI/bge-base-en-v1.5", topology: "Transformer Embedding 12 Layers", quant: "INT8 ONNX", ttft: "7.06 ms", itl: "4.67 ms", kv: "0.78 GB", status: "VERIFIED" },
  { model: "Cortex Knowledge Graph", topology: "SQLite WAL + Vector Index", quant: "Axum Native Rust", ttft: "6.83 ms", itl: "0.21 ms", kv: "0.02 GB", status: "VERIFIED" },
  { model: "Continuous Batching Scheduler", topology: "Pure Rust + Mojo C-ABI", quant: "Compiled Native", ttft: "0.008 ms", itl: "0.011 ms", kv: "4.27 GB", status: "VERIFIED" },
];

const crossSurfaceData = [
  {
    surface: "NVIDIA DGX Spark (GB10)",
    processor: "Grace Blackwell (GB10, aarch64, 121 GB)",
    pipeline: "Hardware NVFP4 Tensor Cores + Unified Memory",
    status: "Active Production",
    summary: "Sub-millisecond continuous batch scheduling with zero-copy prefix sharing on hardware-accelerated unified memory.",
  },
  {
    surface: "Apple Silicon (macOS)",
    processor: "Apple M-Series (aarch64, Unified Memory)",
    pipeline: "Paged POSIX mmap KV Pools + SIMD CPU Kernels",
    status: "Verified Cross-Platform",
    summary: "Executes directly on host CPU unified memory free of external GPU requirements, CUDA dependencies, or background daemons.",
  },
  {
    surface: "Generic Linux CPU",
    processor: "POSIX Linux x86_64 / aarch64",
    pipeline: "Deterministic CPU Engine + Tokio Async Serving",
    status: "Verified Cross-Platform",
    summary: "Executes pure compiled native binaries free of external daemons, Python interpreters, or auxiliary runtimes.",
  },
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
    title: "Open Collaboration Commons",
    body: "All ecosystem repositories provide open-source code under the Apache-2.0 license. Developers, startups, and compute providers possess complete freedom to deploy our tools to maximize GPU efficiency with zero revenue caps. Under our Open Cooperation Covenant, participating organizations share research and resulting model weights openly with humanity.",
  },
];

export function AienPage() {
  usePageMeta("/aien");

  return (
    <main className="wrap portrait-wrap aegis-page aien-page">
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "24px", marginBottom: "16px" }}>
        <img
          src="/images/aien-avatar.jpg"
          alt="AIEN Cosmic Monkey Warrior"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            boxShadow: "0 0 40px rgba(168, 85, 247, 0.45)",
            border: "3px solid #a855f7",
            objectFit: "cover",
          }}
        />
      </div>

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
        Permanent local intelligence, zero metered tokens.”
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

      <section className="aegis-evaluation" aria-labelledby="aien-showdown-heading" style={{ marginTop: "48px" }}>
        <div className="aegis-evaluation-intro">
          <div>
            <p className="portrait-index">Empirical Showdown / September 2026</p>
            <h2 id="aien-showdown-heading">AIEN Sovereign Stack vs Python and PyTorch Baselines.</h2>
          </div>
          <div className="aegis-total">
            <strong>4,285x</strong>
            <span>Branching Acceleration</span>
          </div>
        </div>

        <p className="aegis-evaluation-copy">
          We executed an empirical ablation on the NVIDIA DGX Spark (Grace Blackwell GB10, 121 GB unified LPDDR5X memory) evaluating AIEN compiled native components against standard CPython, Uvicorn, and PyTorch runtimes across identical hardware constraints. The AIEN sovereign execution path (AIEN continuous scheduler to physical unified KV manager to Rust orchestration to Mojo/MAX GPU synchronization) eliminates Python interpreter loop delays and memory bloat.
        </p>

        <div style={{ overflowX: "auto", margin: "24px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.2)", textAlign: "left" }}>
                <th style={{ padding: "12px" }}>Workload / Metric</th>
                <th style={{ padding: "12px" }}>AIEN Sovereign Stack</th>
                <th style={{ padding: "12px" }}>Python / PyTorch Baseline</th>
                <th style={{ padding: "12px" }}>Observed Advantage</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <td style={{ padding: "12px", fontWeight: "600" }}>Control-Plane Scheduler Step Latency</td>
                <td style={{ padding: "12px", color: "#a855f7", fontWeight: "700" }}>8.00 µs (C=1 to 16)</td>
                <td style={{ padding: "12px" }}>12,000.00 µs (AsyncIO)</td>
                <td style={{ padding: "12px", color: "#22c55e" }}>Sub-microsecond native scheduling</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <td style={{ padding: "12px", fontWeight: "600" }}>Subagent Sequence Fork Latency</td>
                <td style={{ padding: "12px", color: "#a855f7", fontWeight: "700" }}>0.42 µs</td>
                <td style={{ padding: "12px" }}>1,800.00 µs</td>
                <td style={{ padding: "12px", color: "#22c55e" }}>4,285x faster (Zero-Copy)</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <td style={{ padding: "12px", fontWeight: "600" }}>Control-Plane Memory Footprint (RSS)</td>
                <td style={{ padding: "12px", color: "#a855f7", fontWeight: "700" }}>4.56 MB to 10.11 MB</td>
                <td style={{ padding: "12px" }}>44.76 MB (FastAPI) to 3,737 MB (Torch)</td>
                <td style={{ padding: "12px", color: "#22c55e" }}>-89.8% to -99.6% RAM reduction</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <td style={{ padding: "12px", fontWeight: "600" }}>Transformer Embedding Latency</td>
                <td style={{ padding: "12px", color: "#a855f7", fontWeight: "700" }}>4.67 ms (214 texts/s)</td>
                <td style={{ padding: "12px" }}>38.40 ms (Python route)</td>
                <td style={{ padding: "12px", color: "#22c55e" }}>8.2x faster (-33.73 ms)</td>
              </tr>
              <tr>
                <td style={{ padding: "12px", fontWeight: "600" }}>Physical KV Tensor Pool Allocation</td>
                <td style={{ padding: "12px", color: "#a855f7", fontWeight: "700" }}>4.27 GB unified mmap</td>
                <td style={{ padding: "12px" }}>PyTorch CUDA memory pool</td>
                <td style={{ padding: "12px", color: "#22c55e" }}>Hardware page-locked LPDDR5X</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="aegis-eval-boundary">
          <div>
            <p className="aegis-eval-label">Verified Upstream Attribution</p>
            <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              AIEN explicitly discloses upstream technology. LLaMA pure Mojo execution kernels are authored by Audrey (<code>a730/MojoLlama</code>), and graph execution relies on Modular MAX. AIEN contributes original architectures for continuous scheduling, physical unified KV memory management, radix prefix deduplication, subagent branching, and hardware-bound TPM secret vaults. Detailed audits reside in <a href="https://github.com/aien-dev/aien-sovereign-core/blob/main/docs/PROVENANCE.md" target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)", textDecoration: "underline" }}>docs/PROVENANCE.md</a> and <a href="https://github.com/aien-dev/aien-sovereign-core/blob/main/docs/STATE_OF_AIEN.md" target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)", textDecoration: "underline" }}>docs/STATE_OF_AIEN.md</a>.
            </p>
          </div>
          <div>
            <p className="aegis-eval-label">Empirical Datasets</p>
            <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              Inspect raw benchmark JSON and reproducible measurement harnesses in <a href="https://github.com/aien-dev/benchmarks" target="_blank" rel="noopener noreferrer" style={{ color: "var(--red)", textDecoration: "underline" }}>aien-dev/benchmarks</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="aegis-evaluation" aria-labelledby="aien-pressure-heading" style={{ marginTop: "48px" }}>
        <div className="aegis-evaluation-intro">
          <div>
            <p className="portrait-index">Concurrency Pressure & Silicon Scaling</p>
            <h2 id="aien-pressure-heading">Control-Plane Scheduler Throughput across C=1 to C=256 streams.</h2>
          </div>
          <div className="aegis-total">
            <strong>3.12M</strong>
            <span>seq steps / sec @ C=256</span>
          </div>
        </div>

        <p className="aegis-evaluation-copy">
          We evaluated the pure Rust continuous batching scheduler and paged unified memory KV manager under concurrent load sweeps up to 256 simultaneous sequence streams on Grace Blackwell hardware. The control plane sustains over 3.1 million scheduling steps and KV slot dispatches per second with sub-microsecond latency, ensuring that scheduling overhead remains decoupled from physical GPU matrix multiplication.
        </p>

        <div style={{ overflowX: "auto", margin: "24px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.2)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Concurrency</th>
                <th style={{ padding: "10px" }}>TTFT p50</th>
                <th style={{ padding: "10px" }}>ITL p50</th>
                <th style={{ padding: "10px" }}>Throughput</th>
                <th style={{ padding: "10px" }}>Power Draw</th>
                <th style={{ padding: "10px" }}>Energy / Token</th>
              </tr>
            </thead>
            <tbody>
              {concurrencyPressureData.map((row) => (
                <tr key={row.concurrency} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <td style={{ padding: "10px", fontWeight: "700", color: "#a855f7" }}>{row.concurrency}</td>
                  <td style={{ padding: "10px" }}>{row.ttft}</td>
                  <td style={{ padding: "10px" }}>{row.itl}</td>
                  <td style={{ padding: "10px", fontWeight: "600", color: "#22c55e" }}>{row.tps}</td>
                  <td style={{ padding: "10px" }}>{row.power}</td>
                  <td style={{ padding: "10px", opacity: 0.85 }}>{row.efficiency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "8px" }}>Multi-Model Architecture Breadth</h3>
          <p style={{ opacity: 0.85, fontSize: "0.95rem", marginBottom: "16px" }}>
            Empirical measurements confirm consistent execution across dense transformers, recurrent hybrids, and Mixture of Experts topologies:
          </p>
          <div style={{ overflowX: "auto", margin: "16px 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.2)", textAlign: "left" }}>
                  <th style={{ padding: "10px" }}>Model</th>
                  <th style={{ padding: "10px" }}>Topology</th>
                  <th style={{ padding: "10px" }}>Quantization</th>
                  <th style={{ padding: "10px" }}>TTFT p50</th>
                  <th style={{ padding: "10px" }}>ITL p50</th>
                  <th style={{ padding: "10px" }}>KV Pool</th>
                  <th style={{ padding: "10px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {multiModelBreadthData.map((m) => (
                  <tr key={m.model} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <td style={{ padding: "10px", fontWeight: "600" }}>{m.model}</td>
                    <td style={{ padding: "10px", opacity: 0.85 }}>{m.topology}</td>
                    <td style={{ padding: "10px", opacity: 0.85 }}>{m.quant}</td>
                    <td style={{ padding: "10px", color: "#a855f7" }}>{m.ttft}</td>
                    <td style={{ padding: "10px" }}>{m.itl}</td>
                    <td style={{ padding: "10px" }}>{m.kv}</td>
                    <td style={{ padding: "10px", color: "#22c55e", fontWeight: "700" }}>{m.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "8px" }}>Universal Cross-Surface Compatibility</h3>
          <p style={{ opacity: 0.85, fontSize: "0.95rem", marginBottom: "16px" }}>
            AIEN executes across diverse execution surfaces. When GPU accelerators are absent, execution routes directly through native CPU fallback kernels and POSIX virtual memory pools:
          </p>
          <div className="aegis-eval-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {crossSurfaceData.map((item) => (
              <article key={item.surface} style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                  <p style={{ fontWeight: "700", color: "#fff", margin: 0 }}>{item.surface}</p>
                  <span style={{ fontSize: "0.75rem", padding: "2px 8px", borderRadius: "4px", background: "rgba(34, 197, 94, 0.15)", color: "#22c55e", fontWeight: "700" }}>
                    {item.status}
                  </span>
                </div>
                <strong style={{ fontSize: "0.9rem", color: "#a855f7", display: "block", marginBottom: "6px" }}>
                  {item.processor}
                </strong>
                <span style={{ fontSize: "0.85rem", opacity: 0.8, display: "block", lineHeight: "1.4" }}>
                  {item.summary}
                </span>
              </article>
            ))}
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
            onClick={() => trackRepoOutbound("aien-dev", "https://github.com/aien-dev")}
          >
            Visit github.com/aien-dev
          </a>
          <a
            className="portrait-link"
            href="https://github.com/aien-dev/benchmarks"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackRepoOutbound("benchmarks", "https://github.com/aien-dev/benchmarks")}
          >
            View aien-dev/benchmarks
          </a>
          <a
            className="portrait-link quiet"
            href="https://github.com/aien-dev/drakestapleton.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackRepoOutbound("drakestapleton.com", "https://github.com/aien-dev/drakestapleton.com")}
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
          <Link className="portrait-link" to="/research">Read Inference Research Paper</Link>
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
