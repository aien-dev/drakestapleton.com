export function BenchmarkSection() {
  return (
    <section className="benchmarks-section page-boundary" id="benchmarks" aria-labelledby="benchmarks-heading">
      <div className="section-lead">
        <p className="portrait-index">07 / Systems Performance</p>
        <div>
          <h2 id="benchmarks-heading">Real numbers: how fast sovereign architecture runs.</h2>
          <p>
            Dedicated Grace Blackwell hardware. Pure compiled native Rust and Mojo. Zero disk secrets.
            Every millisecond accounted for across live multi-threaded execution sweeps.
          </p>
        </div>
      </div>

      <div className="benchmark-cards-grid">
        <article className="benchmark-card">
          <div className="benchmark-card-header">
            <span className="benchmark-tag">Memory Footprint</span>
            <h3>Resident Set Size (RSS)</h3>
            <p>
              Native compiled Rust daemons cut memory footprint by over ninety-nine percent.
              Standard Python agent frameworks consume 3.7 gigabytes while idling, exhausting system resources.
              AIEN operates in under 5 megabytes, leaving maximum memory available for local neural model weights.
            </p>
          </div>

          <div className="benchmark-visual">
            <svg viewBox="0 0 540 280" className="benchmark-chart-svg" role="img" aria-label="Memory RSS Comparison Chart">
              <rect width="100%" height="100%" rx="8" fill="#18111f" />
              
              {/* Row 1: Python Full Stack */}
              <text x="20" y="32" fill="#ded3df" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">Python Agent Stack</text>
              <text x="20" y="46" fill="#bca9c2" fontSize="9" fontFamily="ui-sans-serif, sans-serif">FastAPI + LangChain</text>
              <rect x="180" y="24" width="220" height="18" rx="3" fill="#d7755d" />
              <text x="410" y="38" fill="#fff8ee" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">3,737 MB <tspan fill="#ffd0c7" fontSize="9">(Baseline)</tspan></text>

              {/* Row 2: ONNX INT8 */}
              <text x="20" y="80" fill="#ded3df" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">cortex-encoder-rs</text>
              <text x="20" y="94" fill="#bca9c2" fontSize="9" fontFamily="ui-sans-serif, sans-serif">ONNX Runtime INT8</text>
              <rect x="180" y="72" width="70" height="18" rx="3" fill="#d3a85b" />
              <text x="260" y="86" fill="#fff8ee" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">776 MB <tspan fill="#ef8b67" fontSize="9">(-79.2%)</tspan></text>

              {/* Row 3: Python Minimal */}
              <text x="20" y="128" fill="#ded3df" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">Python Minimal</text>
              <text x="20" y="142" fill="#bca9c2" fontSize="9" fontFamily="ui-sans-serif, sans-serif">Single Uvicorn route</text>
              <rect x="180" y="120" width="16" height="18" rx="3" fill="#6d626a" />
              <text x="206" y="134" fill="#fff8ee" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">45.3 MB</text>

              {/* Row 4: Cortex Graph */}
              <text x="20" y="176" fill="#ded3df" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">cortex-rs</text>
              <text x="20" y="190" fill="#8eac78" fontSize="9" fontFamily="ui-sans-serif, sans-serif">Axum + SQLite WAL</text>
              <rect x="180" y="168" width="8" height="18" rx="3" fill="#7fb8a6" />
              <text x="198" y="182" fill="#fff8ee" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">10.3 MB <tspan fill="#7fb8a6" fontSize="9">(-99.7%)</tspan></text>

              {/* Row 5: Cockpit Gateway */}
              <text x="20" y="224" fill="#ded3df" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">spark-cockpit-rs</text>
              <text x="20" y="238" fill="#8eac78" fontSize="9" fontFamily="ui-sans-serif, sans-serif">Telemetry Gateway</text>
              <rect x="180" y="216" width="7" height="18" rx="3" fill="#7fb8a6" />
              <text x="197" y="230" fill="#fff8ee" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">8.6 MB <tspan fill="#7fb8a6" fontSize="9">(-99.8%)</tspan></text>

              {/* Row 6: OpenClaw Heartbeat */}
              <text x="20" y="262" fill="#ded3df" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">openclaw-rs</text>
              <rect x="180" y="254" width="5" height="18" rx="3" fill="#ef8b67" />
              <text x="195" y="268" fill="#fff8ee" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">4.8 MB <tspan fill="#ef8b67" fontSize="9">(-99.87%)</tspan></text>
            </svg>
          </div>
        </article>

        <article className="benchmark-card">
          <div className="benchmark-card-header">
            <span className="benchmark-tag">Response Speed</span>
            <h3>Latency (p50 TTFB) & Throughput</h3>
            <p>
              Axum microservices deliver sub-four-millisecond response times under concurrent load,
              ten times faster than standard Python servers. Agents search memory, dispatch tools,
              and complete actions with instant response.
            </p>
          </div>

          <div className="benchmark-visual">
            <svg viewBox="0 0 540 280" className="benchmark-chart-svg" role="img" aria-label="Latency and Throughput Comparison Chart">
              <rect width="100%" height="100%" rx="8" fill="#18111f" />
              
              {/* Row 1: Python FastAPI */}
              <text x="20" y="36" fill="#ded3df" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">Python FastAPI</text>
              <text x="20" y="50" fill="#bca9c2" fontSize="9" fontFamily="ui-sans-serif, sans-serif">Standard Async Route</text>
              <rect x="190" y="26" width="220" height="20" rx="3" fill="#d7755d" />
              <text x="420" y="41" fill="#fff8ee" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">38.4 ms <tspan fill="#ffd0c7" fontSize="9">(214 req/s)</tspan></text>

              {/* Row 2: Spark Cockpit Pulse */}
              <text x="20" y="98" fill="#ded3df" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">spark-cockpit-rs</text>
              <text x="20" y="112" fill="#8eac78" fontSize="9" fontFamily="ui-sans-serif, sans-serif">Pulse Gateway :18095</text>
              <rect x="190" y="88" width="28" height="20" rx="3" fill="#7fb8a6" />
              <text x="228" y="103" fill="#fff8ee" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">4.30 ms <tspan fill="#7fb8a6" fontSize="9">(1,921 req/s)</tspan></text>

              {/* Row 3: Cortex Encoder */}
              <text x="20" y="160" fill="#ded3df" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">cortex-encoder-rs</text>
              <text x="20" y="174" fill="#8eac78" fontSize="9" fontFamily="ui-sans-serif, sans-serif">Health Gateway :18081</text>
              <rect x="190" y="150" width="26" height="20" rx="3" fill="#7fb8a6" />
              <text x="226" y="165" fill="#fff8ee" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">3.97 ms <tspan fill="#7fb8a6" fontSize="9">(1,842 req/s)</tspan></text>

              {/* Row 4: Cortex Entity Query */}
              <text x="20" y="222" fill="#ded3df" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">cortex-rs /api/get</text>
              <text x="20" y="236" fill="#8eac78" fontSize="9" fontFamily="ui-sans-serif, sans-serif">Knowledge Graph Query</text>
              <rect x="190" y="212" width="23" height="20" rx="3" fill="#ef8b67" />
              <text x="223" y="227" fill="#fff8ee" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">3.56 ms <tspan fill="#ef8b67" fontSize="9">(2,056 req/s)</tspan></text>
            </svg>
          </div>
        </article>
      </div>

      <div className="silicon-highlights-grid">
        <article className="silicon-highlight-card">
          <strong>4.09 ms</strong>
          <h4>Query Vectorization</h4>
          <p>Short query INT8 quantized embedding via native ONNX Runtime C-API on Grace Blackwell.</p>
        </article>

        <article className="silicon-highlight-card">
          <strong>5.78 ms</strong>
          <h4>Context Vectorization</h4>
          <p>Medium context 32-token embedding latency executed locally on workstation silicon.</p>
        </article>

        <article className="silicon-highlight-card">
          <strong>Multi-Platform</strong>
          <h4>Universal Hardware Support</h4>
          <p>Runs across Apple Silicon MacBooks, standard x86_64 Linux servers, AMD ROCm, and NVIDIA hardware.</p>
        </article>

        <article className="silicon-highlight-card">
          <strong>100%</strong>
          <h4>Verified Pass Rate</h4>
          <p>All eighteen repositories pass unit, integration, and invariant checks with zero warnings.</p>
        </article>
      </div>

      <div className="benchmarks-action-strip">
        <div>
          <h3>Reproduce the benchmark suite</h3>
          <p>
            Review the automated harness, raw telemetry data files, and website sources on GitHub:
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href="https://github.com/aien-dev/benchmarks"
            className="portrait-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View aien-dev/benchmarks
          </a>
          <a
            href="https://github.com/aien-dev/drakestapleton.com"
            className="portrait-link quiet"
            target="_blank"
            rel="noopener noreferrer"
          >
            View aien-dev/drakestapleton.com
          </a>
        </div>
      </div>
    </section>
  );
}
