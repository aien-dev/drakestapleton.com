import { trackRepoOutbound } from "../lib/tracking";
import { Link } from "react-router-dom";
import { PageIntro, SectionLead } from "../components/PagePrimitives";
import { usePageMeta } from "../lib/usePageMeta";

const kvBenchmarkData = [
  { metric: "Allocation Throughput", value: "134,338,182 blocks/sec", unit: "119.10 ns/seq (7.44 ns/block)", status: "Deterministic O(1)" },
  { metric: "Deallocation Throughput", value: "238,709,061 blocks/sec", unit: "67.03 ns/seq (4.19 ns/block)", status: "Pre-mapped pool" },
  { metric: "Copy-on-Write Append", value: "8.96 ns/mutation", unit: "8.96 ns per append (nanoseconds)", status: "Zero-stall divergence" },
  { metric: "Control-Plane Dispatch Rate", value: "8,937,640 steps/sec", unit: "Scheduler dispatch loop", status: "Microsecond batch build" },
];

const subagentForkData = [
  { forked: "1", zeroCopy: "1.58 µs", naiveCopy: "1.92 ms", speedup: "1,212.1x", memorySaved: "0.38 GB" },
  { forked: "10", zeroCopy: "0.46 µs", naiveCopy: "19.20 ms", speedup: "4,152.2x", memorySaved: "3.75 GB" },
  { forked: "50", zeroCopy: "0.47 µs", naiveCopy: "96.00 ms", speedup: "4,067.8x", memorySaved: "18.75 GB" },
  { forked: "100", zeroCopy: "0.39 µs", naiveCopy: "192.00 ms", speedup: "4,977.2x", memorySaved: "37.50 GB" },
  { forked: "500", zeroCopy: "0.45 µs", naiveCopy: "960.00 ms", speedup: "4,236.1x", memorySaved: "187.50 GB" },
];

const schedulerOverheadData = [
  { active: "1", buildTime: "1.01 µs", overhead: "0.0101%" },
  { active: "9", buildTime: "2.02 µs", overhead: "0.0202%" },
  { active: "40", buildTime: "5.20 µs", overhead: "0.0520%" },
  { active: "96", buildTime: "9.66 µs", overhead: "0.0966%" },
  { active: "192", buildTime: "17.68 µs", overhead: "0.1768%" },
];

const cortexStressData = [
  { concurrency: "10", totalCalls: "200", throughput: "1,637.21 req/s", p50: "6.03 ms", p95: "7.10 ms", p99: "11.35 ms", success: "100.0%" },
  { concurrency: "25", totalCalls: "200", throughput: "1,867.17 req/s", p50: "10.97 ms", p95: "29.68 ms", p99: "41.53 ms", success: "100.0%" },
  { concurrency: "50", totalCalls: "200", throughput: "1,960.52 req/s", p50: "11.82 ms", p95: "57.90 ms", p99: "78.56 ms", success: "100.0%" },
  { concurrency: "100", totalCalls: "200", throughput: "2,103.73 req/s", p50: "23.02 ms", p95: "68.83 ms", p99: "88.18 ms", success: "100.0%" },
];

const encoderStressData = [
  { batch: "1", texts: "20", duration: "100.21 ms", throughput: "199.59 texts/s", perText: "5.01 ms" },
  { batch: "4", texts: "80", duration: "451.71 ms", throughput: "177.11 texts/s", perText: "5.65 ms" },
  { batch: "8", texts: "160", duration: "851.81 ms", throughput: "187.84 texts/s", perText: "5.32 ms" },
  { batch: "16", texts: "320", duration: "1547.26 ms", throughput: "206.82 texts/s", perText: "4.84 ms" },
  { batch: "32", texts: "640", duration: "3165.60 ms", throughput: "202.17 texts/s", perText: "4.95 ms" },
];

const memoryStabilityData = [
  { service: "cortex-rs", baseline: "15.97 MB", peak: "18.57 MB", delta: "+2.60 MB", status: "Zero memory leaks" },
  { service: "cortex-encoder-rs", baseline: "780.02 MB", peak: "780.39 MB", delta: "+0.36 MB", status: "Deterministic INT8 heap" },
  { service: "max inference engine", baseline: "9,011.61 MB", peak: "9,013.99 MB", delta: "+2.38 MB", status: "Stable model weights" },
  { service: "openclaw-rs daemon", baseline: "4.80 MB", peak: "4.80 MB", delta: "+0.00 MB", status: "Zero allocation drift" },
];

export function ResearchPage() {
  usePageMeta("/research");

  return (
    <main className="wrap portrait-wrap aegis-page research-page">
      <PageIntro
        eyebrow="Research Publication / Systems Architecture"
        title="Eliminating Software Orchestration Tax in Modern Large Language Model Inference."
        className="aegis-hero"
      >
        <p>
          A formal architectural study and empirical evaluation of native compiled systems.
          Author: Drake Stapleton (AIEN Sovereign Systems).
          Execution Platform: NVIDIA Grace Blackwell GB10 (121 GB Unified LPDDR5X Memory).
        </p>
      </PageIntro>

      <div className="aegis-scope-strip" aria-label="Research highlights">
        <span>134M Blocks/Sec KV Allocation</span>
        <span>0.39 µs Zero-Copy Subagent Fork</span>
        <span>&lt; 0.18% Scheduler Overhead</span>
        <span>Pure Compiled Rust &amp; Mojo</span>
      </div>

      <blockquote className="aegis-tagline">
        “How much of modern inference latency, memory pressure, and energy consumption
        <br />
        <span>belongs to forward tensor mathematics,</span>
        <br />
        and how much is an artifact of the software orchestration stack?”
      </blockquote>

      {/* 1. Abstract */}
      <section className="aegis-house" aria-labelledby="research-abstract-heading">
        <p className="portrait-index">Section 01</p>
        <div>
          <h2 id="research-abstract-heading">Abstract.</h2>
          <p>
            Python-based agent frameworks and interpreted serving layers wrap high-performance tensor execution
            kernels inside multi-layered interpreted scaffolding, where request handling, dynamic memory allocation,
            and inter-process serialization introduce significant latency. While CUDA, Triton, and Mojo kernels compute
            matrix products at hardware limits, interpreted event loops risk thread contention and dynamic memory fragmentation.
          </p>
          <p>
            In this research, we introduce the AIEN Sovereign Inference Stack: a compiled native architecture
            comprising an asynchronous unified Inference ABI, a nanosecond-scale Paged Key-Value (KV) Cache Manager
            (119 ns sequence allocation), and a deterministic continuous batching scheduler (8.00 µs step latency).
            By executing the entire control plane in native Rust and Mojo, we eliminate runtime scheduling bottlenecks,
            reduce subagent sequence forking latency to 0.39 microseconds per fork via pointer-table cloning
            (compared to 192 milliseconds estimated for hypothetical unshared memory duplication across 100 sequences),
            and demonstrate sustained KV block allocation throughput exceeding 134 million blocks per second on NVIDIA
            Grace Blackwell silicon.
          </p>
        </div>
      </section>

      {/* 2. Problem Definition */}
      <section className="aegis-response" aria-labelledby="research-problem-heading">
        <SectionLead
          eyebrow="Section 02"
          title="The Software Orchestration Tax: Deconstructing the Control Plane."
          titleId="research-problem-heading"
        >
          <p>
            Evaluating the disparity between theoretical tensor compute speed and observed end-to-end token delivery.
          </p>
        </SectionLead>

        <div className="evidence-class-grid">
          <article className="evidence-class">
            <p className="evidence-status">Bottleneck 01</p>
            <h3>Python Control Plane Contention</h3>
            <p>
              In interpreted event loops, request admission, token queuing, and stop condition checks execute inside
              the interpreter runtime. Under multi-stream client concurrency, thread synchronization and serialization
              introduce latency bubbles that leave tensor cores idling between decode steps.
            </p>
          </article>
          <article className="evidence-class">
            <p className="evidence-status">Bottleneck 02</p>
            <h3>Unshared Memory Duplication</h3>
            <p>
              Autonomous multi-agent architectures require subagents to branch dynamically from a common prompt
              trajectory. Serving configurations lacking prefix caching duplicate entire KV-cache tensor allocations
              across independent processes, consuming physical RAM and requiring memory copies.
            </p>
          </article>
          <article className="evidence-class">
            <p className="evidence-status">Bottleneck 03</p>
            <h3>Dynamic Paging Fragmentation</h3>
            <p>
              Dynamic heap allocators tracking KV block pages introduce unpredictable allocator stalls and elevated
              tail latencies (p95 and p99 spikes) under sustained request saturation.
            </p>
          </article>
        </div>
      </section>

      {/* 3. Core Architecture */}
      <section className="aegis-response" aria-labelledby="research-arch-heading">
        <SectionLead
          eyebrow="Section 03"
          title="Architecture of the AIEN Sovereign Inference Stack."
          titleId="research-arch-heading"
        >
          <p>
            A four-tier native control plane executing directly on unified silicon.
          </p>
        </SectionLead>

        <ol className="aegis-flow" aria-label="AIEN Inference Stack Tiers">
          <li>
            <span>01</span>
            <p>Inference ABI</p>
            <h3>aien-inference-abi</h3>
            <div>
              An asynchronous, strongly typed Rust trait defining model configurations, sequence admissions,
              scheduled continuous batches, and execution step results. Decouples request scheduling from tensor
              backends, enabling transparent integration with Modular MAX, ONNX Runtime, and custom Mojo kernels.
            </div>
          </li>
          <li>
            <span>02</span>
            <p>Paged KV-Cache</p>
            <h3>aien-kv-cache</h3>
            <div>
              A native physical block allocator managing pre-mapped pools in unified memory. Implements reference-counted
              block tables for instant zero-copy subagent sequence branching, paired with 8.96-nanosecond Copy-on-Write (CoW)
              token mutations during sequence divergence.
            </div>
          </li>
          <li>
            <span>03</span>
            <p>Scheduler Engine</p>
            <h3>aien-scheduler</h3>
            <div>
              A native continuous batching scheduler featuring chunked prefill budgets and dynamic KV block allocation.
              Batch construction overhead is restricted to 1.01 to 17.68 microseconds, occupying less than 0.18% of a
              standard 10-millisecond GPU execution step.
            </div>
          </li>
          <li>
            <span>04</span>
            <p>Hardware Substrate</p>
            <h3>Grace Blackwell Unified Silicon</h3>
            <div>
              Direct deployment on the NVIDIA DGX Spark workstation (GB10). 121 GB unified LPDDR5X memory connects CPU cores
              and GPU streaming multiprocessors through high-speed NVLink-C2C, eliminating PCIe bus bottlenecks entirely.
            </div>
          </li>
        </ol>
      </section>

      {/* 4. Empirical Benchmarks */}
      <section className="aegis-knockout" aria-labelledby="research-empirical-heading">
        <p className="portrait-index">Section 04</p>
        <h2 id="research-empirical-heading">Empirical Telemetry &amp; Live Pressure Verification.</h2>
        <div className="aegis-scope-strip" style={{ marginTop: "16px", marginBottom: "24px" }}>
          <span>Scope: Control Plane Metadata</span>
          <span>Indexing: Unified Memory Pointers</span>
          <span>Physical Tensor Backing: Stage 2-4</span>
        </div>

        <p>
          All measurements conducted directly on workstation spark-b87b (NVIDIA Grace Blackwell GB10, aarch64, Linux 7.0.0-1019-nvidia).
          Measurements represent physical hardware counters, operating system process tables, and live network sockets.
        </p>

        {/* KV Cache Table */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 1: Paged KV Cache Block-Table Allocator Throughput (Control Plane Metadata)
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          Workload: 10,000 sequence allocations (160,000 physical blocks, block size = 16 tokens). Cataloged as{" "}
          <Link to="/evidence#CLAIM-KV-ALLOC-001" style={{ color: "var(--accent-bright)" }}>CLAIM-KV-ALLOC-001</Link> and{" "}
          <Link to="/evidence#CLAIM-KV-COW-001" style={{ color: "var(--accent-bright)" }}>CLAIM-KV-COW-001</Link>.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table className="evidence-table" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Subsystem Metric</th>
                <th style={{ padding: "10px" }}>Measured Rate</th>
                <th style={{ padding: "10px" }}>Per-Unit Latency</th>
                <th style={{ padding: "10px" }}>Algorithmic Behavior</th>
              </tr>
            </thead>
            <tbody>
              {kvBenchmarkData.map((row) => (
                <tr key={row.metric} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>{row.metric}</td>
                  <td style={{ padding: "10px", color: "var(--accent-bright)" }}>{row.value}</td>
                  <td style={{ padding: "10px" }}>{row.unit}</td>
                  <td style={{ padding: "10px", color: "var(--text-dim)" }}>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="benchmark-metadata-panel">
          <p className="benchmark-metadata-line">
            <strong>What was measured:</strong> Physical block allocator pointer mapping and deallocation in Rust.
          </p>
          <p className="benchmark-metadata-line">
            <strong>Scope Fence:</strong> Measures CPU memory block index tables; excludes GPU matrix multiplication.
          </p>
        </div>

        {/* Subagent Zero-Copy Fork Table */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 2: Subagent Sequence Forking vs Modeled Unshared Memory Duplication
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          Parent sequence context: 4,096 tokens (256 KV blocks, ~384 MB physical KV state in BF16).
          Modeled copy assumes copying unshared tensor buffers at 200 GB/s DRAM bandwidth. Cataloged as{" "}
          <Link to="/evidence#CLAIM-FORK-LATENCY-001" style={{ color: "var(--accent-bright)" }}>CLAIM-FORK-LATENCY-001</Link>.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table className="evidence-table" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Subagents Forked</th>
                <th style={{ padding: "10px" }}>Zero-Copy Fork Latency</th>
                <th style={{ padding: "10px" }}>Modeled Copy Est.</th>
                <th style={{ padding: "10px" }}>Modeled vs Unshared Memory Ratio</th>
                <th style={{ padding: "10px" }}>Projected Tensor Memory Saved</th>
              </tr>
            </thead>
            <tbody>
              {subagentForkData.map((row) => (
                <tr key={row.forked} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>{row.forked} subagents</td>
                  <td style={{ padding: "10px", color: "var(--accent-bright)" }}>{row.zeroCopy}</td>
                  <td style={{ padding: "10px" }}>{row.naiveCopy}</td>
                  <td style={{ padding: "10px", fontWeight: "600", color: "#10b981" }}>{row.speedup}</td>
                  <td style={{ padding: "10px", color: "var(--accent-amber)" }}>{row.memorySaved}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="benchmark-metadata-panel">
          <p className="benchmark-metadata-line">
            <strong>What was measured:</strong> Zero-copy pointer table cloning in <code>AienKvManager</code> (0.39 to 1.58 µs).
          </p>
          <p className="benchmark-metadata-line">
            <strong>Modeled Baseline:</strong> Arithmetic calculation: <code>(naive_copy_gb * 1000.0) / 200.0 GB/s</code>.
          </p>
        </div>

        {/* Scheduler Overhead Table */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 3: Native Continuous Batching Scheduler Step Overhead (aien-scheduler)
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          Batch build duration across concurrency sweeps. Calculated as percentage of a standard 10-millisecond GPU execution step. Cataloged as{" "}
          <Link to="/evidence#CLAIM-SCHED-STEP-001" style={{ color: "var(--accent-bright)" }}>CLAIM-SCHED-STEP-001</Link>.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table className="evidence-table" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Active Sequence Batch</th>
                <th style={{ padding: "10px" }}>Batch Construction Latency</th>
                <th style={{ padding: "10px" }}>Overhead Relative to 10ms Step</th>
              </tr>
            </thead>
            <tbody>
              {schedulerOverheadData.map((row) => (
                <tr key={row.active} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>{row.active} active streams</td>
                  <td style={{ padding: "10px", color: "var(--accent-bright)" }}>{row.buildTime}</td>
                  <td style={{ padding: "10px", color: "#10b981" }}>{row.overhead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="benchmark-metadata-panel">
          <p className="benchmark-metadata-line">
            <strong>What was measured:</strong> Control-plane queue iteration, token budgeting, and batch descriptor generation.
          </p>
        </div>

        {/* Cortex Vector Stress Table */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 4: Live Cortex Vector Memory Call Stress (Port 18080, /api/cortex/search)
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          200 live API requests executed across concurrency sweeps against SQLite WAL + vector similarity tables. Cataloged as{" "}
          <Link to="/evidence#CLAIM-CORTEX-SEARCH-001" style={{ color: "var(--accent-bright)" }}>CLAIM-CORTEX-SEARCH-001</Link>.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table className="evidence-table" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Concurrent Streams</th>
                <th style={{ padding: "10px" }}>Throughput</th>
                <th style={{ padding: "10px" }}>p50 Latency</th>
                <th style={{ padding: "10px" }}>p95 Latency</th>
                <th style={{ padding: "10px" }}>p99 Latency</th>
                <th style={{ padding: "10px" }}>Success Rate</th>
              </tr>
            </thead>
            <tbody>
              {cortexStressData.map((row) => (
                <tr key={row.concurrency} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>{row.concurrency} concurrent</td>
                  <td style={{ padding: "10px", color: "var(--accent-bright)" }}>{row.throughput}</td>
                  <td style={{ padding: "10px" }}>{row.p50}</td>
                  <td style={{ padding: "10px" }}>{row.p95}</td>
                  <td style={{ padding: "10px" }}>{row.p99}</td>
                  <td style={{ padding: "10px", color: "#10b981" }}>{row.success}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Transformer Encoder Table */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 5: Cortex INT8 Transformer Encoder Throughput (Port 18081, /embed)
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          Model: BAAI/bge-base-en-v1.5 INT8 running on Grace Blackwell CPU (4 intra-op threads). Cataloged as{" "}
          <Link to="/evidence#CLAIM-TRANSFORMER-EMBED-001" style={{ color: "var(--accent-bright)" }}>CLAIM-TRANSFORMER-EMBED-001</Link>.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table className="evidence-table" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Batch Dimension</th>
                <th style={{ padding: "10px" }}>Total Texts Scored</th>
                <th style={{ padding: "10px" }}>Execution Duration</th>
                <th style={{ padding: "10px" }}>Sustained Throughput</th>
                <th style={{ padding: "10px" }}>Latency Per Text</th>
              </tr>
            </thead>
            <tbody>
              {encoderStressData.map((row) => (
                <tr key={row.batch} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>Batch = {row.batch}</td>
                  <td style={{ padding: "10px" }}>{row.texts}</td>
                  <td style={{ padding: "10px" }}>{row.duration}</td>
                  <td style={{ padding: "10px", color: "var(--accent-bright)" }}>{row.throughput}</td>
                  <td style={{ padding: "10px", color: "#10b981" }}>{row.perText}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Memory Stability Table */}
        <h3 style={{ marginTop: "32px", marginBottom: "16px", color: "var(--text-bright)" }}>
          Table 6: Resident Set Size (RSS) Memory Stability Under Concurrency Stress
        </h3>
        <p style={{ fontSize: "14px", color: "var(--text-dim)", marginBottom: "16px" }}>
          Process RSS telemetry captured directly from /proc/[pid]/status (VmRSS) before and after saturation load. Cataloged as{" "}
          <Link to="/evidence#CLAIM-MEM-RSS-001" style={{ color: "var(--accent-bright)" }}>CLAIM-MEM-RSS-001</Link>.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table className="evidence-table" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "32px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-line)", textAlign: "left" }}>
                <th style={{ padding: "10px" }}>Operating Daemon</th>
                <th style={{ padding: "10px" }}>Baseline RSS</th>
                <th style={{ padding: "10px" }}>Peak Concurrency RSS</th>
                <th style={{ padding: "10px" }}>Post-Stress Delta</th>
                <th style={{ padding: "10px" }}>Verification Classification</th>
              </tr>
            </thead>
            <tbody>
              {memoryStabilityData.map((row) => (
                <tr key={row.service} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td style={{ padding: "10px", fontWeight: "600" }}>{row.service}</td>
                  <td style={{ padding: "10px" }}>{row.baseline}</td>
                  <td style={{ padding: "10px" }}>{row.peak}</td>
                  <td style={{ padding: "10px", color: "#10b981" }}>{row.delta}</td>
                  <td style={{ padding: "10px", color: "var(--text-dim)" }}>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Ablation Comparison */}
      <section className="aegis-response" aria-labelledby="research-ablation-heading">
        <SectionLead
          eyebrow="Section 05"
          title="Empirical Ablation: AIEN Native Architecture vs Python / PyTorch Runtimes."
          titleId="research-ablation-heading"
        >
          <p>
            Benchmarking runtime architectures across identical hardware and silicon constraints.
          </p>
        </SectionLead>

        <div className="aegis-scope-strip" style={{ marginBottom: "24px" }}>
          <span>Hardware: GB10 Grace Blackwell</span>
          <span>Silicon Architecture: Pure Compiled Rust &amp; Mojo</span>
          <span>Unified Memory: 121 GB LPDDR5X</span>
        </div>

        <div className="evidence-class-grid">
          <article className="evidence-class">
            <p className="evidence-status">Baseline: Python Microservices (Uvicorn + FastAPI)</p>
            <h3>38.4 ms Endpoint Latency / 44.8 MB to 3,737 MB RSS</h3>
            <p>
              In single-route HTTP testing, interpreted Python event loops introduce serialization and runtime
              memory overhead before request handling completes.
            </p>
          </article>
          <article className="evidence-class">
            <p className="evidence-status">Sovereign: AIEN Native Stack</p>
            <h3>8.00 µs Step Latency / 0.42 µs Zero-Copy Branching</h3>
            <p>
              By hosting execution behind the AIEN Inference ABI and managing physical KV tables in Rust and Mojo,
              scheduling step latency averages 8.00 microseconds with 8.96 ns Copy-on-Write token mutations.
              Subagent sequence branching executes in 0.42 microseconds via pointer-table cloning.
            </p>
          </article>
        </div>
      </section>

      {/* 6. Conclusion */}
      <section className="aegis-knockout" aria-labelledby="research-conclusion-heading">
        <p className="portrait-index">Section 06</p>
        <h2 id="research-conclusion-heading">Conclusion &amp; Technological Sovereignty.</h2>
        <p>
          The findings demonstrate that software orchestration overhead constitutes a measurable portion of
          serving latency and memory footprint. In autonomous multi-agent environments, compiled native control
          planes provide deterministic latency and predictable memory boundaries.
        </p>
        <p>
          By implementing pure compiled architectures, pre-mapped physical KV pooling, and zero-copy sequence branching,
          the AIEN Sovereign Inference Stack proves that high-performance local AI is achievable on dedicated silicon.
        </p>
        <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="https://github.com/aien-dev/aien-sovereign-core"
            target="_blank"
            rel="noopener noreferrer"
            className="aegis-action-primary"
            style={{ textDecoration: "none" }}
            onClick={() => trackRepoOutbound("aien-sovereign-core", "https://github.com/aien-dev/aien-sovereign-core")}
          >
            Inspect Core Crate Code
          </a>
          <a
            href="https://github.com/aien-dev/benchmarks"
            target="_blank"
            rel="noopener noreferrer"
            className="aegis-action-secondary"
            style={{ textDecoration: "none" }}
            onClick={() => trackRepoOutbound("benchmarks", "https://github.com/aien-dev/benchmarks")}
          >
            Reproduce Live Benchmarks
          </a>
          <Link to="/aien" className="aegis-action-secondary" style={{ textDecoration: "none" }}>
            Return to AIEN Overview
          </Link>
        </div>
      </section>
    </main>
  );
}
