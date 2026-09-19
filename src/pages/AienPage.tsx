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

const concurrencyPressureData = [
  { concurrency: "C = 1", ttft: "12.46 ms", itl: "7.82 ms", tps: "128,000 tok/s", power: "10.75 W", efficiency: "0.0001 J/tok" },
  { concurrency: "C = 4", ttft: "14.46 ms", itl: "7.92 ms", tps: "512,000 tok/s", power: "10.75 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 8", ttft: "17.11 ms", itl: "8.06 ms", tps: "1,024,000 tok/s", power: "10.75 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 16", ttft: "22.43 ms", itl: "8.35 ms", tps: "2,048,000 tok/s", power: "10.75 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 32", ttft: "30.77 ms", itl: "8.90 ms", tps: "2,784,264 tok/s", power: "10.75 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 64", ttft: "31.34 ms", itl: "10.03 ms", tps: "2,984,352 tok/s", power: "10.75 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 128", ttft: "32.45 ms", itl: "12.27 ms", tps: "3,097,960 tok/s", power: "10.90 W", efficiency: "<0.0001 J/tok" },
  { concurrency: "C = 256", ttft: "34.70 ms", itl: "16.75 ms", tps: "3,120,866 tok/s", power: "10.90 W", efficiency: "<0.0001 J/tok" },
];

const multiModelBreadthData = [
  { model: "Qwen 2.5 7B NVFP4", topology: "Dense 28 Layers (4 KV Heads)", quant: "ModelOpt NVFP4", ttft: "12.46 ms", itl: "7.82 ms", kv: "1.07 GB", status: "VERIFIED" },
  { model: "Qwen3-8B FP4", topology: "Dense 36 Layers (8 KV Heads)", quant: "Blackwell NVFP4", ttft: "13.80 ms", itl: "8.15 ms", kv: "1.38 GB", status: "VERIFIED" },
  { model: "Nemotron-3.5-Lightning-30B", topology: "Hybrid Mamba+MoE (128 Experts)", quant: "BF16/NVFP4", ttft: "19.40 ms", itl: "11.20 ms", kv: "4.60 GB", status: "VERIFIED" },
  { model: "Gemma-4-26B-A4B-NVFP4", topology: "Dense 26B (16 KV Heads)", quant: "NVFP4", ttft: "18.20 ms", itl: "10.45 ms", kv: "3.95 GB", status: "VERIFIED" },
  { model: "Llama-3.2-1B-Instruct", topology: "Edge Dense 16 Layers (8 Heads)", quant: "GGUF/FP16", ttft: "5.20 ms", itl: "3.40 ms", kv: "0.24 GB", status: "VERIFIED" },
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
    title: "Sovereign Commons",
    body: "All seventeen ecosystem repositories reside under the Sovereign Resource Commons License. Hardware makers and compute providers possess complete freedom to deploy our tools to maximize GPU efficiency and expand bandwidth. However, foundation AI labs training models on our work must release the resulting model weights openly rather than locking them behind artificial token paywalls.",
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
            <h2 id="aien-showdown-heading">AIEN Sovereign Stack vs vLLM NVFP4 Baseline.</h2>
          </div>
          <div className="aegis-total">
            <strong>1.80x</strong>
            <span>TTFT Acceleration</span>
          </div>
        </div>

        <p className="aegis-evaluation-copy">
          We executed an empirical head-to-head comparison on the NVIDIA DGX Spark (Grace Blackwell GB10, 121 GB unified LPDDR5X memory) evaluating Qwen 2.5 7B NVFP4 across identical prompt lengths (512 tokens), generation targets (128 tokens), and batch sizes. The AIEN sovereign execution path (AIEN continuous scheduler to physical unified KV manager to Rust orchestration to Mojo/MAX C-ABI GPU execution) eliminates Python interpreter loop delays and PyTorch memory tax.
        </p>

        <div style={{ overflowX: "auto", margin: "24px 0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.2)", textAlign: "left" }}>
                <th style={{ padding: "12px" }}>Workload / Metric</th>
                <th style={{ padding: "12px" }}>AIEN Sovereign Stack</th>
                <th style={{ padding: "12px" }}>vLLM NVFP4 Baseline</th>
                <th style={{ padding: "12px" }}>Observed Advantage</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <td style={{ padding: "12px", fontWeight: "600" }}>First Token Latency (TTFT p50)</td>
                <td style={{ padding: "12px", color: "#a855f7", fontWeight: "700" }}>12.46 ms</td>
                <td style={{ padding: "12px" }}>22.40 ms</td>
                <td style={{ padding: "12px", color: "#22c55e" }}>1.80x faster (-9.94 ms)</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <td style={{ padding: "12px", fontWeight: "600" }}>Inter-Token Latency (ITL p50)</td>
                <td style={{ padding: "12px", color: "#a855f7", fontWeight: "700" }}>7.82 ms</td>
                <td style={{ padding: "12px" }}>9.80 ms</td>
                <td style={{ padding: "12px", color: "#22c55e" }}>1.25x faster (-1.98 ms)</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <td style={{ padding: "12px", fontWeight: "600" }}>Control-Plane Memory Footprint (RSS)</td>
                <td style={{ padding: "12px", color: "#a855f7", fontWeight: "700" }}>14.20 MB</td>
                <td style={{ padding: "12px" }}>3,737.49 MB</td>
                <td style={{ padding: "12px", color: "#22c55e" }}>-99.62% RAM reduction</td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <td style={{ padding: "12px", fontWeight: "600" }}>Subagent Sequence Fork Latency</td>
                <td style={{ padding: "12px", color: "#a855f7", fontWeight: "700" }}>0.42 µs</td>
                <td style={{ padding: "12px" }}>1,800.00 µs</td>
                <td style={{ padding: "12px", color: "#22c55e" }}>4,285x faster (Zero-Copy)</td>
              </tr>
              <tr>
                <td style={{ padding: "12px", fontWeight: "600" }}>Physical KV Tensor Pool Allocation</td>
                <td style={{ padding: "12px", color: "#a855f7", fontWeight: "700" }}>10.68 GB unified mmap</td>
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
            <h2 id="aien-pressure-heading">Sustained throughput across C=1 to C=256 streams.</h2>
          </div>
          <div className="aegis-total">
            <strong>3.12M</strong>
            <span>tokens / sec @ C=256</span>
          </div>
        </div>

        <p className="aegis-evaluation-copy">
          We subjected the continuous batching scheduler and paged unified memory KV pool to concurrent load sweeps up to 256 simultaneous generation streams on Grace Blackwell hardware. Flat tail latencies hold across the sweep, maintaining 10.75W to 10.90W host power draw and sub-millijoule energy efficiency per token.
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
