export type EvidenceClass =
  | "PUBLIC REPRODUCTION"
  | "PUBLIC SOURCE"
  | "PUBLICATION"
  | "PRIVATE AUDIT RECORD"
  | "HISTORICAL RECORD"
  | "SELF-REPORTED";

export interface ClaimRecord {
  id: string;
  shortClaim: string;
  fullWording: string;
  category: string;
  period: string;
  evidenceClass: EvidenceClass;
  isPublic: boolean;
  sourceUrl?: string;
  repoPath?: string;
  verificationDate: string;
  status: string;
  reproduction?: string;
}

export const EVIDENCE_CLASS_DEFINITIONS: Record<EvidenceClass, { description: string; verificationLevel: string }> = {
  "PUBLIC REPRODUCTION": {
    description: "Empirically measured via reproducible active test harness committed to a public repository.",
    verificationLevel: "Independent physical reproduction possible via one command.",
  },
  "PUBLIC SOURCE": {
    description: "Inspected directly in public open-source repositories, configuration trees, or test matrices.",
    verificationLevel: "Public source audit verification.",
  },
  "PUBLICATION": {
    description: "Formally presented or published in peer-reviewed scientific journals or conference proceedings.",
    verificationLevel: "Academic and peer-reviewed publication record.",
  },
  "PRIVATE AUDIT RECORD": {
    description: "Documented in employer archives, operational accounting ledgers, or internal change logs.",
    verificationLevel: "Internal corporate record; private verification documentation.",
  },
  "HISTORICAL RECORD": {
    description: "Documented family milestones, state court records, and verified personal history.",
    verificationLevel: "State placement records and personal family archives.",
  },
  "SELF-REPORTED": {
    description: "Personal account provided by the author reflecting lived experience and direct observation.",
    verificationLevel: "Author testimony supported by personal notes and artifacts.",
  },
};

export const SITE_CLAIMS: ClaimRecord[] = [
  {
    id: "CLAIM-GE-SAVINGS-001",
    shortClaim: "~$1.2M documented Gold Eagle raw material sourcing savings",
    fullWording: "Secured alternative chemical raw materials during global supply chain disruption, producing approximately $1.2 million in documented sourcing cost savings while serving as HAZMAT Incident Commander.",
    category: "Industrial & Sourcing",
    period: "2020-2022",
    evidenceClass: "PRIVATE AUDIT RECORD",
    isPublic: false,
    verificationDate: "2022-06-30",
    status: "Documented in Gold Eagle corporate purchasing and accounting archives.",
  },
  {
    id: "CLAIM-3M-SAVINGS-001",
    shortClaim: "$1M documented 3M manufacturing and process cost savings",
    fullWording: "Optimized high-volume manufacturing lines and chemical compounding procedures at 3M, documenting $1.0 million in operational efficiency improvements and scrap reduction.",
    category: "Industrial & Manufacturing",
    period: "2018-2020",
    evidenceClass: "PRIVATE AUDIT RECORD",
    isPublic: false,
    verificationDate: "2020-04-15",
    status: "Documented in 3M engineering operational audit records.",
  },
  {
    id: "CLAIM-CHEM-RESEARCH-001",
    shortClaim: "M.S. Chemistry with published nanomaterials research",
    fullWording: "Master of Science in Chemistry thesis and peer-reviewed publication on inorganic nanoparticle synthesis and functionalization, presented at the American Chemical Society (ACS) National Meeting.",
    category: "Scientific Research",
    period: "2016-2019",
    evidenceClass: "PUBLICATION",
    isPublic: true,
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/30931213/",
    verificationDate: "2019-04-01",
    status: "Published in peer-reviewed scientific literature and WKU Digital Commons (theses/2101).",
  },
  {
    id: "CLAIM-KV-ALLOC-001",
    shortClaim: "134M blocks/sec KV block-table allocation throughput",
    fullWording: "Measured 134,338,182 blocks/second allocation throughput (119.10 ns/sequence, 7.44 ns/block) and 238,709,061 blocks/second deallocation throughput (67.03 ns/sequence, 4.19 ns/block) in aien-kv-cache managing 160,000 block-table indices in pre-mapped unified memory.",
    category: "Systems Performance",
    period: "2026-09",
    evidenceClass: "PUBLIC REPRODUCTION",
    isPublic: true,
    sourceUrl: "https://github.com/aien-dev/benchmarks",
    repoPath: "benchmarks/src/harness/inference_bench.rs",
    verificationDate: "2026-09-19",
    status: "Active reproducible harness on NVIDIA DGX Spark GB10.",
    reproduction: "cargo run --release --bin aien-benchmarks -- report",
  },
  {
    id: "CLAIM-KV-COW-001",
    shortClaim: "8.96 ns Copy-on-Write token append latency",
    fullWording: "Measured 8.96 nanoseconds per diverging token append during Copy-on-Write block mutation in aien-kv-cache across 1,000 iterations on shared parent blocks. Single-digit nanosecond control-plane mutation.",
    category: "Systems Performance",
    period: "2026-09",
    evidenceClass: "PUBLIC REPRODUCTION",
    isPublic: true,
    sourceUrl: "https://github.com/aien-dev/benchmarks",
    repoPath: "crates/aien-kv-cache/src/lib.rs",
    verificationDate: "2026-09-19",
    status: "Active reproducible harness on NVIDIA DGX Spark GB10.",
    reproduction: "cargo run --release --bin bench_inference_stack",
  },
  {
    id: "CLAIM-FORK-LATENCY-001",
    shortClaim: "0.42 µs sequence-fork control-plane latency",
    fullWording: "Measured 0.39 µs to 1.58 µs (average 0.42 µs) to clone sequence block-table indices for child subagents branching from a 4,096-token parent context. Derived comparison yields a 4,285x latency advantage against an estimated naive DRAM memory copy baseline (384 MB physical tensor buffer at 200 GB/s bandwidth).",
    category: "Systems Performance",
    period: "2026-09",
    evidenceClass: "PUBLIC REPRODUCTION",
    isPublic: true,
    sourceUrl: "https://github.com/aien-dev/benchmarks",
    repoPath: "crates/aien-scheduler/src/bin/bench_inference_stack.rs",
    verificationDate: "2026-09-19",
    status: "Active reproducible harness on NVIDIA DGX Spark GB10.",
    reproduction: "cargo run --release --bin bench_inference_stack",
  },
  {
    id: "CLAIM-SCHED-STEP-001",
    shortClaim: "8.00 µs native scheduler step latency",
    fullWording: "Measured 1.01 µs (batch=1) to 17.68 µs (batch=192), averaging 8.00 µs step latency across concurrency tiers 1 to 16 in aien-scheduler. Measures token admission, chunked prefill budgeting, and block coordination in the native Rust control plane.",
    category: "Systems Performance",
    period: "2026-09",
    evidenceClass: "PUBLIC REPRODUCTION",
    isPublic: true,
    sourceUrl: "https://github.com/aien-dev/benchmarks",
    repoPath: "crates/aien-scheduler/src/bin/bench_inference_stack.rs",
    verificationDate: "2026-09-19",
    status: "Active reproducible harness on NVIDIA DGX Spark GB10.",
    reproduction: "cargo run --release --bin bench_inference_stack",
  },
  {
    id: "CLAIM-CORTEX-SEARCH-001",
    shortClaim: "3.56 ms p50 microservice query latency",
    fullWording: "Measured 1,637 to 2,103 requests/second throughput with 3.56 ms to 6.03 ms p50 latency on native Axum vector memory endpoints (port 18080, /api/cortex/search) under concurrent load on DGX Spark.",
    category: "Microservice Latency",
    period: "2026-09",
    evidenceClass: "PUBLIC REPRODUCTION",
    isPublic: true,
    sourceUrl: "https://github.com/aien-dev/benchmarks",
    repoPath: "benchmarks/src/harness/http_bench.rs",
    verificationDate: "2026-09-19",
    status: "Active reproducible harness on NVIDIA DGX Spark GB10.",
    reproduction: "cargo run --release --bin aien-benchmarks -- verify",
  },
  {
    id: "CLAIM-TRANSFORMER-EMBED-001",
    shortClaim: "4.84 ms bi-encoder embedding latency",
    fullWording: "Measured 177 to 206 texts/second throughput with 4.84 ms to 5.65 ms per-text latency using ONNX Runtime INT8 BAAI/bge-base-en-v1.5 across batch sizes 1 to 32 on Grace Neoverse CPU cores.",
    category: "Neural Inference",
    period: "2026-09",
    evidenceClass: "PUBLIC REPRODUCTION",
    isPublic: true,
    sourceUrl: "https://github.com/aien-dev/benchmarks",
    repoPath: "benchmarks/docs/LIVE_PRESSURE_BENCHMARK.md",
    verificationDate: "2026-09-19",
    status: "Active reproducible harness on NVIDIA DGX Spark GB10.",
    reproduction: "cargo run --release --bin stress_aien_live",
  },
  {
    id: "CLAIM-MEM-RSS-001",
    shortClaim: "4.56 MB resident set size for compiled daemons",
    fullWording: "Native compiled Rust daemons operate with 4.56 MB RSS (openclaw-rs) and 15.97 MB RSS (cortex-rs), delivering an 89.8% memory reduction compared to a single-route Python 3.12 FastAPI and Uvicorn baseline (44.76 MB RSS), and greater than 99% reduction compared to full-stack Python/PyTorch agent environments (3.7+ GB RSS).",
    category: "Memory Optimization",
    period: "2026-09",
    evidenceClass: "PUBLIC REPRODUCTION",
    isPublic: true,
    sourceUrl: "https://github.com/aien-dev/benchmarks",
    repoPath: "benchmarks/data/benchmarks_latest.json",
    verificationDate: "2026-09-19",
    status: "Active reproducible harness on NVIDIA DGX Spark GB10.",
    reproduction: "cargo run --release --bin aien-benchmarks -- report",
  },
  {
    id: "CLAIM-TPM-SECRETS-001",
    shortClaim: "Zero Disk Secrets via hardware TPM key vault",
    fullWording: "All API tokens, private keys, and operational credentials reside in the hardware TPM 2.0 key vault (atlas-vault) and resolve dynamically into volatile memory. Zero plaintext configuration files exist on disk across working repositories.",
    category: "Security Architecture",
    period: "2026-09",
    evidenceClass: "PUBLIC SOURCE",
    isPublic: true,
    sourceUrl: "https://github.com/aien-dev/aien-sovereign-core",
    repoPath: "docs/adr/0001-trust-evidence-foundation.md",
    verificationDate: "2026-09-19",
    status: "Enforced in automated CI scanners and end-to-end test suites.",
    reproduction: "cargo test --test test_tier1_feature_coverage",
  },
  {
    id: "CLAIM-AEGIS-EVAL-001",
    shortClaim: "59/62 verified AEGIS cybersecurity evaluation result",
    fullWording: "The August 20, 2026 AEGIS adapter completed 59 of 62 frozen project checks (95.2%) covering intrusion recognition, host containment, token revocation, and evidence preservation inside authorized networks.",
    category: "Security Evaluation",
    period: "2026-08",
    evidenceClass: "PUBLIC REPRODUCTION",
    isPublic: true,
    sourceUrl: "https://github.com/aien-dev/drakestapleton.com",
    repoPath: "src/pages/AegisPage.tsx",
    verificationDate: "2026-08-20",
    status: "Verified evaluation record.",
  },
  {
    id: "CLAIM-HARDWARE-SUPPORT-001",
    shortClaim: "Hardware platform support verified by tier",
    fullWording: "Platform compatibility classified by explicit verification tiers: NVIDIA DGX Spark GB10 (Runtime and Benchmark Verified Primary Platform), Apple Silicon M-series (Runtime and Test Verified), Generic x86_64 Linux (Runtime and CI Verified), and AMD ROCm (Architected and Compiles with HIP bindings).",
    category: "Platform Portability",
    period: "2026-09",
    evidenceClass: "PUBLIC SOURCE",
    isPublic: true,
    sourceUrl: "https://github.com/aien-dev/aien-sovereign-core",
    repoPath: "docs/PLATFORM_MATRIX.md",
    verificationDate: "2026-09-19",
    status: "Documented platform compatibility matrix.",
  },
  {
    id: "CLAIM-FOSTER-CARE-001",
    shortClaim: "Six Level 5 foster placements welcomed home",
    fullWording: "Drake and Devin opened their home from December 2018 until pandemic restrictions in spring 2020, caring for six Level 5 foster youth in Tennessee who needed steady adults.",
    category: "Life Record",
    period: "2018-2020",
    evidenceClass: "HISTORICAL RECORD",
    isPublic: true,
    sourceUrl: "https://www.drakestapleton.com/life",
    verificationDate: "2020-04-01",
    status: "Documented family history and state placement record.",
  },
];
