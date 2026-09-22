import { useMemo, useState } from "react";
import { PageIntro } from "../components/PagePrimitives";
import { usePageMeta } from "../lib/usePageMeta";

type Chapter = {
  n: string;
  title: string;
  part: string;
  summary: string;
};

const CHAPTERS: Chapter[] = [
  {
    n: "I",
    title: "Algebraic Construction of the Ω-Number Algebra",
    part: "Part I · Foundations",
    summary:
      "Extends the complex numbers with Ω-numbers so that division by zero, the mathematical signature of a singularity, becomes a well-defined algebraic operation. Builds the graded algebra C_Ω with closure and associativity intact.",
  },
  {
    n: "II",
    title: "Observer-Dependent Limits and Physical Mechanism",
    part: "Part I · Foundations",
    summary:
      "Defines x/0 = Ω·e^(iτ): a universal magnitude Ω with an observer-dependent phase τ. The phase emerges as the holonomy of an observer connection along the observer's worldline, with explicit Lorentz-covariant transformation rules between observers.",
  },
  {
    n: "III",
    title: "Variational Principle and Field Equations",
    part: "Part I · Foundations",
    summary:
      "Derives Ω-modified Einstein equations from an action principle generalizing the Einstein-Hilbert action. The equations recover standard general relativity away from singularities while predicting finite, observer-independent curvature at would-be singular points.",
  },
  {
    n: "IV",
    title: "Conservation Laws and Algebraic Consistency",
    part: "Part I · Foundations",
    summary:
      "Shows the Ω-modified action is diffeomorphism invariant, so conservation laws follow from Noether's theorem, and verifies the Bianchi identity and algebraic consistency of the framework.",
  },
  {
    n: "V",
    title: "Physical Predictions and Invariant Quantities",
    part: "Part I · Foundations",
    summary:
      "First quantitative payoff: the Kretschmann scalar at a Schwarzschild singularity is finite, K(0) = 48G²M²Ω/(c⁴r_s⁶), and identical for every observer despite the observer-dependent mathematics.",
  },
  {
    n: "VI",
    title: "Gravitational Wave Signature Predictions",
    part: "Part II · Predictions",
    summary:
      "Replaces the r = 0 singularity with an Ω-scale core near the Planck length, generating post-merger echoes, quasinormal-mode shifts, and inspiral phase corrections in gravitational waveforms. Predicts detectable phase shifts for LIGO-band binaries when the Ω strength parameter ξ exceeds 10⁻³.",
  },
  {
    n: "VII",
    title: "Observer-Dependent Physical Manifestations",
    part: "Part II · Predictions",
    summary:
      "Works out measurable consequences of the observer phase τ: gravitational geometric phase effects, measurement-entanglement signatures, relativistic transformation effects, and cosmic variability predictions.",
  },
  {
    n: "VIII",
    title: "Quantum Gravity Interface and Divergence Regularization",
    part: "Part II · Predictions",
    summary:
      "Uses Ω-number algebra to systematically regularize ultraviolet divergences in quantum gravity: effective field theory corrections, renormalization group flow modifications, vacuum fluctuation effects, and black hole evaporation modifications.",
  },
  {
    n: "IX",
    title: "Specific Numerical Predictions for Current Detectors",
    part: "Part II · Predictions",
    summary:
      "Concrete numbers for LIGO-Virgo-KAGRA, LISA, the Event Horizon Telescope, and pulsar timing arrays. Includes predicted ~10⁻⁴-level deviations from general relativity for LISA and fractional black-hole shadow deviations of order 10⁻³ to 10⁻² for the EHT.",
  },
  {
    n: "X",
    title: "Error Analysis and Confidence Intervals",
    part: "Part III · Validation",
    summary:
      "Catalogs systematic uncertainties: numerical relativity waveform errors near 10⁻⁴, observer-phase determination limits, and astrophysical foregrounds, so every prediction carries an honest error budget.",
  },
  {
    n: "XI",
    title: "Comparison with Existing Observational Data",
    part: "Part III · Validation",
    summary:
      "Checks the framework against GW150914's ringdown, the EHT's M87* shadow, and other current data. Everything measured so far is consistent with classical general relativity within uncertainties, which the framework must reproduce in the weak-field regime.",
  },
  {
    n: "XII",
    title: "Experimental Validation Pathways",
    part: "Part III · Validation",
    summary:
      "A testing roadmap: near-term LIGO A+ and pulsar timing arrays, medium-term LISA in the 2030s, and long-term Cosmic Explorer and Einstein Telescope with 10 to 100 times current sensitivity.",
  },
  {
    n: "XIII",
    title: "Current Observational Constraints and Quantitative Comparison",
    part: "Part III · Validation",
    summary:
      "Detailed side-by-side of Ω-framework predictions against LIGO/Virgo catalog data, EHT imaging, and cosmological measurements, pinning down where the framework is allowed to differ from general relativity and by how much.",
  },
  {
    n: "XIV",
    title: "Statistical Significance and Confidence Levels",
    part: "Part III · Validation",
    summary:
      "States the result plainly: the framework currently yields null statistical significance, with a Bayesian evidence ratio near 1.2, meaning no current experimental evidence for or against it. Deviations live in regimes today's detectors cannot yet resolve.",
  },
  {
    n: "XV",
    title: "Systematic Errors and Experimental Limitations",
    part: "Part III · Validation",
    summary:
      "Why the signal is hard to see: LIGO's ~1% frequency resolution against predicted shifts far below it, EHT's inability to resolve the innermost stable circular orbit, and CMB foregrounds that can mask pre-Big-Bang signatures.",
  },
  {
    n: "XVI",
    title: "Future Experimental Tests and Success Criteria",
    part: "Part III · Validation",
    summary:
      "Falsifiable success criteria for specific experiments: LVK precision ringdown analysis, next-generation EHT shadow measurements below 1% precision, and CMB-S4/LiteBIRD spectral index tests, each with implementation plans and timelines.",
  },
  {
    n: "XVII",
    title: "Discussion",
    part: "Part IV · Assessment",
    summary:
      "Steps back to assess what the framework achieves: geodesic completeness across classical singular regions, finite curvature at r = 0, and a preserved principle of relativity, alongside the candid admission that it is not yet a mature theory of everything.",
  },
  {
    n: "XVIII",
    title: "Comparison with Alternative Approaches",
    part: "Part IV · Assessment",
    summary:
      "Positions the Ω-framework against regular black holes, loop quantum gravity, string theory, and modified gravity. Unlike approaches that alter the Einstein equations, this framework modifies the number system itself.",
  },
  {
    n: "XIX",
    title: "Limitations and Potential Objections",
    part: "Part IV · Assessment",
    summary:
      "Answers the hard objections head-on: the tension between observer-dependence and relativity, the measurement problem across observers, experimental accessibility below current thresholds, and dimensional inconsistencies still to be resolved.",
  },
  {
    n: "XX",
    title: "Future Research Directions",
    part: "Part IV · Assessment",
    summary:
      "Three research programs: completing the algebraic foundations with rigorous verification, deriving the observer connection from first principles, and rendering all key predictions dimensionally consistent and numerically precise.",
  },
  {
    n: "XXI",
    title: "Conclusions",
    part: "Part IV · Assessment",
    summary:
      "The closing case: a singularity-free theory preserving the equivalence principle, unitarity, and causal structure, honest about its unfinished business with quantum field theory integration and experimental confirmation.",
  },
];

const ASTRO_ENDPOINT = "/api/astro/chat";

type Msg = { role: "user" | "astro"; text: string };

function AstroChat() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "astro",
      text: "I am Astro, trained on the full Ω-framework manuscript. Ask me about any chapter, prediction, or open question.",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    setError(null);
    setMessages((m) => [...m, { role: "user", text }]);
    setBusy(true);
    try {
      const res = await fetch(ASTRO_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      if (!res.ok) throw new Error(`Astro is not reachable right now (HTTP ${res.status}).`);
      const data = await res.json();
      setMessages((m) => [...m, { role: "astro", text: data.reply ?? "Astro returned no reply." }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Astro is not reachable right now.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="aegis-house" aria-labelledby="omega-chat-heading">
      <p className="portrait-index">Conversation</p>
      <div>
        <h2 id="omega-chat-heading">Chat with Astro about the paper.</h2>
        <p>
          Astro is a model served from the DGX Spark that knows this manuscript end to end.
          Ask it to explain a chapter, defend a prediction, or steelman an objection.
        </p>
      </div>
      <div
        className="claim-card"
        style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "320px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxHeight: "380px", overflowY: "auto" }}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                maxWidth: "85%",
                padding: "10px 14px",
                borderRadius: "10px",
                background: m.role === "user" ? "var(--blue-pale)" : "var(--dark-surface)",
                border: "1px solid var(--line)",
                color: "var(--copy)",
                fontSize: "15px",
              }}
            >
              {m.text}
            </div>
          ))}
          {busy && <div style={{ color: "var(--muted)", fontSize: "14px" }}>Astro is thinking…</div>}
        </div>
        {error && <p style={{ color: "var(--red)", fontSize: "14px" }}>{error}</p>}
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask Astro about the Ω-framework…"
            aria-label="Ask Astro about the Omega framework"
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid var(--line)",
              background: "var(--paper)",
              color: "var(--copy)",
              fontSize: "15px",
            }}
          />
          <button
            onClick={send}
            disabled={busy}
            className="aegis-action-primary"
            style={{ textDecoration: "none", cursor: busy ? "wait" : "pointer" }}
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export function OmegaPage() {
  usePageMeta("/scholar/omega");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CHAPTERS;
    return CHAPTERS.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.part.toLowerCase().includes(q) ||
        c.n.toLowerCase() === q
    );
  }, [query]);

  return (
    <main className="wrap portrait-wrap aegis-page omega-page">
      <PageIntro
        eyebrow="Scholar / Unpublished Manuscript"
        title="The Ω-Framework: An Observer-Dependent Resolution of Singularities in General Relativity and Quantum Gravity."
        className="aegis-hero"
      >
        <p>
          A manuscript in progress. Classical general relativity predicts infinities where collapsing
          matter and the early universe evolve toward infinite curvature. This framework assigns
          division by zero a finite, observer-dependent value, x/0 = Ω·e^(iτ), and derives
          testable predictions from it. Search the chapters below, or ask Astro.
        </p>
      </PageIntro>

      <div className="aegis-scope-strip" aria-label="Manuscript highlights">
        <span>21 Chapters · 4 Parts</span>
        <span>x/0 = Ω·e^(iτ)</span>
        <span>Finite curvature at r = 0</span>
        <span>Status: unpublished manuscript</span>
      </div>

      {/* Chapter search + tiles */}
      <section className="aegis-response" aria-labelledby="omega-chapters-heading">
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <h2 id="omega-chapters-heading" style={{ margin: 0 }}>Chapters.</h2>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters…"
            aria-label="Search Omega framework chapters"
            style={{
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid var(--line)",
              background: "var(--paper)",
              color: "var(--copy)",
              fontSize: "15px",
              minWidth: "240px",
            }}
          />
        </div>
        <p style={{ fontSize: "14px", color: "var(--muted)" }}>
          {results.length} of {CHAPTERS.length} chapters{query.trim() ? ` matching “${query.trim()}”` : ""}.
        </p>
        <div className="evidence-class-grid" style={{ marginTop: "16px" }}>
          {results.map((c) => (
            <article className="evidence-class" key={c.n}>
              <p className="evidence-status">
                Chapter {c.n} · {c.part}
              </p>
              <h3>{c.title}</h3>
              <p>{c.summary}</p>
            </article>
          ))}
        </div>
        {results.length === 0 && (
          <p style={{ color: "var(--muted)" }}>No chapters match that search. Try “LISA”, “algebra”, or “singularity”.</p>
        )}
      </section>

      <AstroChat />
    </main>
  );
}
