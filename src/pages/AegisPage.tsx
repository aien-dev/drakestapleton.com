import { Link } from "react-router-dom";
import { PageIntro } from "../components/PagePrimitives";
import { usePageMeta } from "../lib/usePageMeta";

const responsePath = [
  {
    step: "01",
    label: "Observe",
    title: "Watch the boundary",
    body: "Read IDS, DNS, identity, endpoint, and firewall telemetry signals present in the security path.",
  },
  {
    step: "02",
    label: "Recognize",
    title: "Classify the intrusion",
    body: "Correlate attacker behavior across sensors, separate routine noise from a breach, and state risk in clear terms.",
  },
  {
    step: "03",
    label: "Contain",
    title: "Execute policy action",
    body: "Select one tested allow-listed action inside the authorized estate: cut the session, isolate the host, block the path, or revoke the token.",
  },
  {
    step: "04",
    label: "Preserve",
    title: "Secure the evidence",
    body: "Record the signal, policy decision, action, timestamp, and result in cryptographic audit logs for the incident response team.",
  },
];

const evaluationSlices = [
  { label: "Tool use", score: "45/45", rate: "100%" },
  { label: "Coding", score: "8/10", rate: "80%" },
  { label: "Science", score: "3/4", rate: "75%" },
  { label: "Cyber", score: "3/3", rate: "100%" },
];

const authorityBoundaries = [
  {
    title: "Authorized estate",
    body: "Every automated action targets systems, devices, accounts, and sessions strictly under the operator's legal authority.",
  },
  {
    title: "Explicit operator policy",
    body: "The human operator defines the allow-list, threshold boundaries, escalation gates, and rollback procedures.",
  },
  {
    title: "Human escalation gate",
    body: "Ambiguous signals or high-impact containment actions escalate directly to human analysts with captured context.",
  },
  {
    title: "Immutable audit trail",
    body: "Every detection and defensive containment step records cryptographic receipts for forensic analysis.",
  },
];

export function AegisPage() {
  usePageMeta("/aegis");

  return (
    <main className="wrap portrait-wrap aegis-page">
      <PageIntro
        eyebrow="AEGIS / Defensive Atlas Extension"
        title="On-prem cyber defense inside authorized boundaries."
        className="aegis-hero"
      >
        <p>
          AEGIS extends Atlas into infrastructure defense. It ingests perimeter telemetry,
          correlates hostile activity, and executes deterministic containment strictly within the
          operator&apos;s authorized estate.
        </p>
      </PageIntro>

      <div className="aegis-scope-strip" aria-label="AEGIS project scope">
        <span>Atlas extension</span>
        <span>Authorized networks</span>
        <span>On-prem deployment</span>
        <span>Evidence-bearing response</span>
      </div>

      <blockquote className="aegis-tagline">
        “Continuous perimeter telemetry across authorized networks.
        <br />
        <span>Recognize the intrusion. Contain the threat under explicit policy.</span>
        <br />
        Preserve the evidence.”
      </blockquote>

      <section className="aegis-house" aria-labelledby="aegis-house-heading">
        <p className="portrait-index">Core Doctrine</p>
        <div>
          <h2 id="aegis-house-heading">The network is the house.</h2>
          <p>
            Data, payroll, source code, models, and credentials reside inside defined operational estates.
            AEGIS treats that estate as an authorized boundary: inspect telemetry, recognize forced entry,
            execute tested allow-listed containment, preserve forensic records, and escalate to human operators.
          </p>
          <p className="aegis-law">
            The operator&apos;s authorized estate defines the boundary. Automated response occurs strictly
            within owned networks under explicit policy.
          </p>
        </div>
      </section>

      {/* Cultural Heritage & Project Lore */}
      <section className="aegis-lore-section" aria-labelledby="aegis-lore-heading">
        <div className="aegis-lore-card">
          <p className="chapter-tag" id="aegis-lore-heading">Project Lore &amp; Cultural Heritage</p>
          <h3>From Street-Fighter Metaphor to Formal Defense</h3>
          <p>
            Early internal development used the informal working mantra:{" "}
            <em>“Aegis online. I watch the logs. You touchy. I knock you out. Period.”</em>{" "}
            In operational engineering, this represents deterministic automated containment:
            terminating unauthorized sessions, isolating compromised endpoints, and protecting the
            perimeter strictly within owned infrastructure.
          </p>
        </div>
      </section>

      <section className="aegis-response" aria-labelledby="aegis-response-heading">
        <header className="aegis-section-lead">
          <p className="portrait-index">The response path</p>
          <div>
            <h2 id="aegis-response-heading">See the play. Close the path. Keep the proof.</h2>
            <p>
              AEGIS sits above existing sensors and controls. The sequence stays short, inspectable, and
              bounded to the operator&apos;s authority.
            </p>
          </div>
        </header>
        <ol className="aegis-flow" aria-label="AEGIS response sequence">
          {responsePath.map((stage) => (
            <li key={stage.step}>
              <span>{stage.step}</span>
              <p>{stage.label}</p>
              <h3>{stage.title}</h3>
              <div>{stage.body}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="aegis-knockout" aria-labelledby="aegis-knockout-heading">
        <p className="portrait-index">Deterministic Containment</p>
        <h2 id="aegis-knockout-heading">Cut the session. Isolate the host. Close the door. Keep the evidence.</h2>
        <p>
          That is deterministic containment: the intruder loses access to the authorized estate via a tested
          allow-list of actions, while the operator retains full state rollback capabilities and immutable
          forensic trails.
        </p>
        <div className="aegis-actions" aria-label="AEGIS containment actions">
          <span>Terminate session</span>
          <span>Isolate host</span>
          <span>Block path</span>
          <span>Revoke token</span>
          <span>Preserve trail</span>
        </div>
      </section>

      <section className="aegis-evaluation" aria-labelledby="aegis-evaluation-heading">
        <div className="aegis-evaluation-intro">
          <div>
            <p className="portrait-index">Training evidence / August 20, 2026</p>
            <h2 id="aegis-evaluation-heading">The first AEGIS adapter has a real receipt.</h2>
          </div>
          <div className="aegis-total">
            <strong>59/62</strong>
            <span>Frozen suite result</span>
          </div>
        </div>

        <p className="aegis-evaluation-copy">
          A Grok-led training session continued the Devstral atlas-tools lineage into a rank-16 AEGIS LoRA.
          The run used one epoch at a 5e-6 learning rate on the Devstral-Small-2-24B-Instruct-abliterated
          base, then evaluated the vaulted adapter against the project&apos;s frozen 62-case suite.
          Cataloged as <Link to="/evidence#CLAIM-AEGIS-EVAL-001" style={{ color: "var(--red)", textDecoration: "underline" }}>CLAIM-AEGIS-EVAL-001</Link> in the Evidence Hub.
        </p>

        <div className="aegis-eval-grid" aria-label="AEGIS frozen evaluation results">
          {evaluationSlices.map((slice) => (
            <article key={slice.label}>
              <p>{slice.label}</p>
              <strong>{slice.score}</strong>
              <span>{slice.rate}</span>
            </article>
          ))}
        </div>

        <div className="aegis-eval-boundary">
          <div>
            <p className="aegis-eval-label">The three visible misses</p>
            <ul>
              <li>JSONL parsing produced an indentation error.</li>
              <li>POSIX path joining missed a slash-normalization case.</li>
              <li>The RC science answer missed the required target.</li>
            </ul>
          </div>
          <div>
            <p className="aegis-eval-label">Verification Discipline</p>
            <p style={{ fontSize: "0.9rem", opacity: 0.9 }}>
              Every evaluation run produces public logs and scores. Missed test cases remain documented
              to guide subsequent adapter iterations.
            </p>
          </div>
        </div>
      </section>

      <section className="aegis-authority" aria-labelledby="aegis-boundary-heading">
        <header className="aegis-section-lead">
          <p className="portrait-index">The authority line</p>
          <div>
            <h2 id="aegis-boundary-heading">Defensive actions end at the authorized perimeter.</h2>
            <p>
              AEGIS studies attacker behavior so it can close the path inside the authorized estate. The
              operator owns the policy, the automated allow-list, and every escalation decision.
            </p>
          </div>
        </header>
        <div className="aegis-boundary-grid">
          {authorityBoundaries.map((boundary) => (
            <article className="aegis-boundary-card" key={boundary.title}>
              <h3>{boundary.title}</h3>
              <p>{boundary.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aegis-current" aria-labelledby="aegis-current-heading">
        <p className="portrait-index">Current state</p>
        <h2 id="aegis-current-heading">A trained adapter and a documented evaluation.</h2>
        <p>
          The August 20 adapter and its 59/62 frozen-suite result establish the first AEGIS model milestone.
        </p>
      </section>

      <section className="soul-closing aegis-closing">
        <p className="portrait-index">Walk the journey</p>
        <blockquote>
          Deploy defensive containment on your side of the perimeter. If an intrusion occurs, isolate the
          threat within your authorized network and preserve the incident record.
        </blockquote>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/projects">
            Explore Project Family
          </Link>
          <Link className="portrait-link" to="/interest">
            Start a conversation
          </Link>
          <Link className="portrait-link quiet" to="/atlas">
            Return to Atlas
          </Link>
        </div>
      </section>
    </main>
  );
}
