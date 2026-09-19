import { Link } from "react-router-dom";
import { PageIntro, SectionLead } from "../components/PagePrimitives";
import { PracticeTimeline } from "../components/PracticeTimeline";
import {
  AI_STORY,
  AI_WORKSPACES,
  PRACTICE_METHODS,
  PRACTICE_METRICS,
  PRACTICE_SNAPSHOT,
  TOKEN_LAYERS,
  WORKING_STACK,
} from "../data/practice";
import { usePageMeta } from "../lib/usePageMeta";

export function SoftwarePage() {
  usePageMeta("/software");

  return (
    <main className="portrait-page practice-page">
      <PageIntro
        eyebrow="Software and AI / the practice behind the work"
        title="I followed the questions into code."
        className="practice-hero page-boundary"
      >
        <p>
          I began by asking GPT about consciousness. I wrote my way through cosmology, brought that
          practice into Six Sigma and manufacturing, and taught myself software by turning questions into
          working systems. I came to software the way I came to everything else: willing to begin average,
          repeat the work, and earn the skill. I write the direction, orchestrate the implementation, review
          the result, and carry the system into use.
        </p>
      </PageIntro>

      <section className="practice-metrics page-boundary" aria-label={`Practice snapshot through ${PRACTICE_SNAPSHOT.display}`}>
        {PRACTICE_METRICS.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <p className="practice-metric-label">{metric.label}</p>
            <p>{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="token-ledger page-boundary" aria-labelledby="token-ledger-title">
        <SectionLead eyebrow="What I wrote and directed" title="I turned conversation into operating work." titleId="token-ledger-title">
          <p>
            I wrote prompts and briefs, supplied the context, directed coding sessions, orchestrated
            product calls, and reviewed the output. These totals separate the words I exchanged, the
            products I operated, and the larger computational work behind the coding sessions.
          </p>
        </SectionLead>
        <div className="token-ledger-grid">
          {TOKEN_LAYERS.map((layer) => (
            <article key={layer.label}>
              <strong>{layer.value}</strong>
              <h3>{layer.label}</h3>
              <p>{layer.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="practice-story" aria-labelledby="ai-story-title">
        <div className="page-boundary">
          <SectionLead eyebrow="My AI story" title="What I asked, wrote, and orchestrated." titleId="ai-story-title">
            <p>
              I began with consciousness, wrote across cosmology and continuous improvement, brought AI
              into manufacturing, and learned to direct software and model systems. Each chapter changed
              what I knew how to make.
            </p>
          </SectionLead>
          <div className="practice-story-list">
            {AI_STORY.map((chapter, index) => (
              <article key={`${chapter.date}-${chapter.title}`}>
                <div className="practice-story-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{chapter.date}</p>
                </div>
                <div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="practice-section page-boundary" aria-labelledby="working-set-title">
        <SectionLead eyebrow="Programs and experience" title="The working set I return to." titleId="working-set-title">
          <p>
            I choose software by what the work needs. These programs, languages, frameworks, and systems
            recur across products, research, model work, and delivery.
          </p>
        </SectionLead>
        <div className="working-stack">
          {WORKING_STACK.map((group) => (
            <article key={group.title}>
              <p className="chapter-tag">{group.eyebrow}</p>
              <h3>{group.title}</h3>
              <p>{group.body}</p>
              <ul aria-label={`${group.title} tools`}>
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <p className="stack-proof">{group.proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="practice-workspaces" aria-labelledby="workspaces-title">
        <div className="page-boundary">
          <SectionLead eyebrow="AI working environments" title="I gave each tool a job." titleId="workspaces-title">
            <p>
              I used each environment for a different kind of thinking and execution. I wrote the intent,
              assigned the work, compared the output, repaired failures, and decided what entered the
              systems I operated.
            </p>
          </SectionLead>
          <div className="workspace-grid">
            {AI_WORKSPACES.map((workspace) => (
              <article key={workspace.name}>
                <p>{workspace.measure}</p>
                <h3>{workspace.name}</h3>
                <div>{workspace.body}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="page-boundary">
        <PracticeTimeline />
      </div>

      <section className="practice-section practice-method page-boundary" aria-labelledby="method-title">
        <SectionLead
          eyebrow={`Measurement notes / snapshot ${PRACTICE_SNAPSHOT.display}`}
          title="How to read the numbers."
          titleId="method-title"
        >
          <p>
            Current code, historical additions, commits, messages, product traffic, and processed context
            answer different questions. The site presents them side by side while preserving each definition.
          </p>
        </SectionLead>
        <div className="practice-method-grid">
          {PRACTICE_METHODS.map((method, index) => (
            <article key={method.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{method.title}</h3>
              <p>{method.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="practice-closing page-boundary">
        <p className="portrait-index">The person inside the practice</p>
        <h2>I still care most about what the work makes possible.</h2>
        <p>
          Code gives an idea structure. AI lets me explore more directions. Evidence keeps the story honest.
          The purpose remains human: make something useful, preserve what matters, and help another person
          take the next step.
        </p>
        <div className="portrait-actions">
          <Link className="portrait-link" to="/aien">
            Inspect AIEN architecture
          </Link>
          <Link className="portrait-link quiet" to="/atlas">
            Continue into the Atlas story
          </Link>
          <Link className="portrait-link quiet" to="/evidence">
            Read the evidence record
          </Link>
        </div>
      </section>
    </main>
  );
}
