import { Link } from "react-router-dom";
import { BenchmarkSection } from "../components/BenchmarkSection";
import { InterestForm } from "../components/InterestForm";
import { ChapterNav, SectionLead } from "../components/PagePrimitives";
import { PRACTICE_HOME_METRICS } from "../data/practice";
import { usePageMeta } from "../lib/usePageMeta";

const chapters = [
  { href: "#formation", number: "01", label: "Formation" },
  { href: "#drive", number: "02", label: "Drive" },
  { href: "#people", number: "03", label: "People" },
  { href: "#work", number: "04", label: "Work" },
  { href: "#software", number: "05", label: "Software" },
  { href: "#latest", number: "06", label: "Latest" },
  { href: "#benchmarks", number: "07", label: "Performance" },
];

const perseverance = [
  {
    marker: "Belonging",
    title: "The people gave me a reason to stay.",
    body: "DHG found me at nineteen and gave me a place where I could lead as myself. I carried that gift forward by helping other people feel seen, capable, and worth fighting for.",
  },
  {
    marker: "10 weeks",
    title: "I built people up and watched them lead.",
    body: "I helped grow a 46-member squad to 85 percent activity. I trained members after difficult rounds, built the dashboards and schedules, and developed officers who could carry the work themselves.",
  },
  {
    marker: "45 times",
    title: "I kept choosing the people.",
    body: "Whenever leadership became heavy, someone still needed training, an officer needed support, or a member needed another person to believe in them. The people kept giving the work its purpose.",
    quote: "Somehow I just keep finding the strength, or rather the stubbornness, to keep going.",
  },
  {
    marker: "Build it",
    title: "I turn care into systems people can use.",
    body: "Training plans, schedules, dashboards, research systems, and AI tools all grow from the same instinct: preserve what helps, learn from each result, and give people a stronger next step.",
  },
];

const lifeRecord = [
  "I survived a childhood that taught me to hide, and became a man who lives in the open.",
  "I started average, wanted excellence, and learned to outwork the distance between the two.",
  "I was 24 and Devin was 22, still kids ourselves, when we built a marriage and opened our home to six foster children.",
  "I earned two science degrees and built a career across research, product development, and manufacturing.",
  "At Gold Eagle, I improved and commercialized products across the 303 Graphene line and became one of the chemists trusted to explain the science on camera.",
  "I secured alternate raw materials during a global disruption, produced roughly $1.2 million in documented sourcing savings, and served as a HAZMAT Incident Commander.",
  "At 3M, I improved manufacturing processes and efficiency, producing $1 million in cost savings.",
  "I helped communities grow, trained people through difficult rounds, and developed leaders who carry others.",
  "I taught myself software, trained models, designed AI systems, and funded years of independent work with my own money.",
  "I turned grief into a reason to preserve memory, and hard lessons into machinery that tries again.",
];

const inheritances = [
  ["Mom", "fought for me, showed me how to leave what hurts, returned to school in her forties, and crossed her stage eight days before I crossed mine."],
  ["Granny and Papa", "gave us land, food, roots, and a humble home on the farm. They showed me that a life grows larger through what it gives away."],
  ["Dad", "was a carpenter, gave me the Ballentine name, put farm work in my hands, taught me to be useful, and showed me that love can choose a family."],
  ["The people who found me", "taught me that gratitude moves forward. You turn around and reach for someone else."],
];

const values = [
  ["Truth", "I keep the source. I separate what I saw from what I inferred. I face hard facts with open eyes."],
  ["Service", "Leadership makes another person stronger and gives the title less importance."],
  ["Belonging", "I build places where people can stay fully visible."],
  ["Integrity", "I carry what is right through friendship, position, and every uncomfortable truth."],
  ["Agency", "A title describes one part of my life. I decide how far the whole life can go."],
  ["Curiosity", "I keep a question alive long enough to make it sharper."],
  ["Perseverance", "Skill came through repetition. I outwork the distance, preserve each lesson, and return stronger."],
  ["Love", "Family can be inherited, chosen, adopted, married, fostered, or found through a headset in the dark."],
];

export function HomePage() {
  usePageMeta("/");

  return (
    <main className="portrait-page home-page">
      <section className="home-hero page-boundary">
        <div className="hero-copy">
          <p className="kicker">Drake Stapleton / Freedom Fighter</p>
          <h1>
            I keep finding <span>the strength.</span>
          </h1>
          <blockquote>I am a Freedom Fighter. I turn raw compute into verifiable production work.</blockquote>
          <p className="home-hero-lede">
            I design, operate, and audit orchestration systems. My architecture relies on
            probe-first design, authorization boundaries, and verifiable proof records.
          </p>
          <p className="home-hero-purpose">
            I lead from the keyboard. I design the pipeline, train the models, and enforce
            the gate. This portfolio archives my operational history.
          </p>
        </div>
        <aside className="hero-identity" aria-label="The life in brief">
          <span>Born 1994</span>
          <span>Raised in Tennessee</span>
          <span>College in Kentucky</span>
          <span>Springfield, Missouri today</span>
          <span>Two science degrees</span>
          <span>Builder by choice</span>
          <span>Freedom Fighter</span>
        </aside>
      </section>

      <div className="page-boundary">
        <ChapterNav links={chapters} />
      </div>

      <section className="manifesto-band">
        <div className="page-boundary manifesto-inner">
          <p className="portrait-index">In my own words</p>
          <blockquote>
            “I am living as myself. I am claiming my own life and my own purpose. I decide what I can become.”
          </blockquote>
          <p>
            I have spent years learning how to see my own life clearly. This site is me{" "}
            <span className="keep-together">choosing to look.</span>
          </p>
        </div>
      </section>

      <section className="home-chapter page-boundary" id="formation">
        <SectionLead eyebrow="01 / Formation" title="I learned how to fight for every inch.">
          <p>
            I began with love, pressure, questions, and the knowledge that every ability would{" "}
            <span className="keep-together">have to be earned.</span>
          </p>
        </SectionLead>
        <div className="formation-grid">
          <article className="feature-story">
            <p className="chapter-tag">The boy I was</p>
            <h3>I learned to disappear before I learned why.</h3>
            <p>
              I grew up gay in Tennessee, in the Bible Belt. Mom fought for me. Granny and Papa rooted me.
              Dad chose me and gave me his name. My little sister gave me someone to protect. I was surrounded
              by love while believing that being fully known could cost me everything.
            </p>
            <p>
              That farm is where I want you to stand for a minute, because it's where the other lessons started. It smelled like alfalfa and cut grass with just a smidge of manure underneath: the honest smell of a place that works for what it has. At the end of that path was Granny's kitchen, where something was always being made for someone else. It taught me that work centered on the care poured into the foundation, well beyond raw output.
            </p>
            <p>
              Disappearing meant studying every room before I entered it. I learned how to stand, talk, and
              laugh like the kind of boy the other boys would let stand near them. I joined the football team,
              fought for my place in honors classes, and practiced looking certain while carrying a truth I
              had barely learned how to name.
            </p>
            <p>
              That kind of hiding creates a particular loneliness. I had a family who loved me and still felt
              unseen, because they could reach only the version I allowed into the room. The more their love
              mattered, the more I feared losing it. I became capable, observant, and self-reliant, writing a
              private manual for how to belong before I understood that belonging should include the whole of
              me.
            </p>
          </article>
          <article className="grade-card">
            <p className="chapter-tag">The drive behind the grades</p>
            <strong>3.92</strong>
            <h3>I was average. I wanted excellence.</h3>
            <p>
              I watched intelligence and athleticism seem natural in other people. I played football and sat
              in honors classes feeling pretty average. Autism and ADHD made focus a daily contest, and I
              moved through high school unmedicated.
            </p>
            <p>
              I believed I had to outwork everyone. I returned to the rep, the page, and the problem as many
              times as it took. That habit earned a 3.92, carried me through two science degrees, and became
              the way I enter every new field. The fight made me a survivor.
            </p>
          </article>
          <article className="door-story">
            <div>
              <p className="chapter-tag">June 12, 2013</p>
              <h3>The worst night of my life and the best decision of my life share a date.</h3>
            </div>
            <div>
              <p>
                I was nineteen and closer to the edge than most people knew. I picked up a controller. A
                stranger named Saturn spoke to me in a Call of Duty lobby and invited me into DHG.
              </p>
              <p>
                I said yes. That answer gave me people who had my back, a place to lead, and proof that the
                person I had hidden could still be wanted. Belonging found me through a headset in the dark.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="home-chapter drive-chapter" id="drive">
        <div className="page-boundary">
          <SectionLead eyebrow="02 / Drive" title="I keep returning because people are worth the effort.">
            <p>
              Mom returned to school in her forties and finished what life had interrupted. I watched
              her cross the stage on May 5, 2016. Eight days later, she stood beside me at Western Kentucky.
            </p>
          </SectionLead>
          <div className="perseverance-ledger">
            {perseverance.map((item, index) => (
              <article key={item.marker}>
                <div className="ledger-number">{String(index + 1).padStart(2, "0")}</div>
                <p className="ledger-marker">{item.marker}</p>
                <div>
                  <h3>{item.title}</h3>
                  {item.quote && <blockquote>“{item.quote}”</blockquote>}
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="recovery-note">
            <p className="chapter-tag">What I know now</p>
            <p>Perseverance includes recovery. Rest brings me back to the work while keeping the person doing it whole.</p>
            <Link to="/what-i-learned">Read the lessons I carried forward</Link>
          </div>
        </div>
      </section>

      <section className="life-record" aria-labelledby="life-record-title">
        <div className="page-boundary life-record-grid">
          <div className="life-record-number" aria-hidden="true">32</div>
          <div>
            <p className="portrait-index">A life worth seeing</p>
            <h2 id="life-record-title">I have already built an extraordinary life.</h2>
            <div className="life-record-list">
              {lifeRecord.map((item, index) => (
                <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-chapter page-boundary" id="people">
        <SectionLead eyebrow="03 / People" title="My life is shaped by what gets handed forward." />
        <div className="inheritance-grid">
          {inheritances.map(([name, body]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="family-story-grid">
          <article className="family-story foster-story">
            <p className="chapter-tag">The home Devin and I opened</p>
            <h3>We opened our home to young people who needed steady adults.</h3>
            <p>
              I was 24 and Devin was 22, still kids ourselves, when we married in October 2018. By December,
              before our first Christmas as husbands, our first foster placement was home with us. From
              December 2018 until COVID made us stop in spring 2020, we cared for six foster children. All
              six were Level 5 placements, young people the system struggled to place with families prepared
              for that responsibility.
            </p>
            <p>
              My stepdad adopted my brother and me and became our dad. He chose us, on paper and in every other
              way. I also had Mom beside me through the hardest parts of growing up. Devin and I wanted to offer
              that same presence to young people carrying more uncertainty. When COVID closed the world down,
              the placements ended. The love and the grief both stayed with us.
            </p>
          </article>
          <article className="family-story dad-story">
            <p className="chapter-tag">Ballentine Day / December 3, 2007</p>
            <h3>Dad keeps meeting me at the next door.</h3>
            <p>
              Dad made official what he had already lived: he adopted my brother and me. Our family calls
              that date Ballentine Day. I became Michael Drake Ballentine and carried Dad's name for eleven
              years. When Devin and I married in 2018, I became Michael Drake Stapleton. Ballentine marks the
              father who chose me. Stapleton marks the life Devin and I chose together.
            </p>
            <p>
              I remember standing in that courtroom in 2007. The judge asked me why I wanted the name change. I told him: "I requested a distinct middle name from my biological father, and wanted to correct the spelling of my first name." He chuckled and said, "Well that's a good enough reason for me. Granted." It was the best day of my life. I was thirteen and took the name 'Drake' for myself.
            </p>
            <p>
              Dad put farm work in my hands and taught me to be useful. He showed me that love can choose a
              family. He was a preacher, and he left handwritten sermons and years of thought behind. Those
              pages still ask something of me. I built Atlas around memory, truth, dignity, and the questions
              I still carry.
            </p>
            <p>
              Devin and Dad share a February 13 birthday. On that date in 2024, I received the offer
              that brought me to 3M as a manufacturing engineer. Two years later, on February 13, 2026,
              another call offered me the product engineer role I hold today. The dates have ordinary
              explanations. They still carry extraordinary meaning for me.
            </p>
            <p>
              I believe Dad has stayed with me as a guardian angel through every new door. I miss him, I am
              grateful for every lesson he put into me, and I still want to make him proud. I think he would
              want me to feel proud of myself too.
            </p>
          </article>
        </div>
        <blockquote className="people-quote">
          “I find great joy in helping others realize just how great they truly are.”
        </blockquote>
        <div className="values-block">
          <div className="values-intro">
            <p className="chapter-tag">What I stand for</p>
            <h3>The work changes. My values stay.</h3>
          </div>
          <div className="values-grid">
            {values.map(([name, body]) => (
              <article key={name}>
                <h4>{name}</h4>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-chapter work-chapter" id="work">
        <div className="page-boundary">
          <SectionLead eyebrow="04 / Work" title="Every step built the next one.">
            <p>
              The farm taught me to respect the person closest to the work. Taco Bell taught me to serve a
              crew. Valspar and graduate research turned that discipline into chemistry. Soudal and Gold Eagle
              taught me to earn operator trust. At 3M, that whole ladder produced $1 million in cost savings
              through PPU improvements.
            </p>
          </SectionLead>
          <div className="work-record">
            <article><strong>The foundation</strong><span>Farm work, practical dignity, and respect for the people carrying the job</span></article>
            <article><strong>My first job</strong><span>Taco Bell team member to shift leader, serving my crew and carrying every task beside them</span></article>
            <article><strong>College years</strong><span>Taco Bell in Bowling Green followed by a Valspar paint-laboratory internship in color matching and production samples</span></article>
            <article><strong>2016</strong><span>Honors graduate with a B.S. in Chemistry and Biology, Western Kentucky University</span></article>
            <article><strong>2018</strong><span>M.S. in Chemistry and published inorganic nanomaterials research</span></article>
            <article><strong>2018 to 2020</strong><span>Silicone formulation, scale-up, and operator partnership at Soudal</span></article>
            <article><strong>2020 to 2024</strong><span>Gold Eagle formulation improvement, 303 Graphene commercialization, and about $1.2 million in documented sourcing savings</span></article>
            <article><strong>2024 to 2026</strong><span>3M PPU improvements, operator partnership, and $1 million in manufacturing cost savings</span></article>
            <article><strong>2026 onward</strong><span>Product engineering at 3M, bringing product and process improvement together</span></article>
            <article><strong>Built alongside it</strong><span>Software, communities, model training, research systems, and independent invention</span></article>
          </div>
          <Link className="text-link" to="/path">Walk the ladder from the farm to product engineering</Link>
        </div>
      </section>

      <section className="software-home" id="software">
        <div className="page-boundary software-home-grid">
          <div>
            <p className="portrait-index">05 / Software and AI</p>
            <h2>I followed the questions into code.</h2>
            <p>
              I began by asking GPT about consciousness. I wrote my way through cosmology, used the same
              questioning in Six Sigma and manufacturing, and learned to orchestrate coding models,
              products, GPU work, and Atlas. I taught myself by building, measuring, and returning to the work.
            </p>
            <Link to="/software">Explore the software practice and AI story</Link>
          </div>
          <div className="software-home-metrics" aria-label="Software and AI practice snapshot">
            {PRACTICE_HOME_METRICS.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="latest-work" id="latest">
        <div className="page-boundary latest-work-grid">
          <div>
            <p className="portrait-index">06 / Latest achievement</p>
            <h2>Atlas is my greatest achievement so far.</h2>
          </div>
          <div>
            <p>
              It is also my latest. Atlas brings together the discipline I learned in chemistry, the
              accountability I learned in manufacturing, the care I learned through community, and years
              of independent work in software and AI.
            </p>
            <p>
              Its origin is personal. Dad left handwritten sermons and years of thought behind. I
              built Atlas around memory, truth, dignity, and the questions I still carry. This achievement
              gives me a stronger foundation for everything I build next.
            </p>
            <p>
              I am now extending Atlas into AEGIS, an on-prem defender for authorized networks. Its
              first adapter passed 59 of 62 checks in a frozen project suite on August 20, 2026.
            </p>
            <p>
              AIEN expands this foundation into a full sovereign cognitive architecture on dedicated
              Grace Blackwell silicon, with zero disk secrets, native compiled Rust performance, and
              seventeen open repositories on GitHub.
            </p>
            <div className="latest-work-links">
              <Link to="/atlas">Explore the Atlas project</Link>
              <Link to="/aegis">See AEGIS and its evaluation</Link>
              <Link to="/aien">Discover the AIEN sovereign architecture</Link>
            </div>
          </div>
        </div>
      </section>

      <BenchmarkSection />

      <section className="interest-home" id="interest">
        <div className="page-boundary interest-home-grid">
          <div>
            <p className="portrait-index">Conversation</p>
            <h2>Walk with me for a while.</h2>
            <p>
              This site is my record of the projects and the life behind them. If something here gives you
              a question, an idea, or a story of your own, leave me a note. I am open to good conversation
              and research partnerships that advance what our generation can build with AI.
            </p>
          </div>
          <InterestForm compact />
        </div>
      </section>

      <section className="home-closing page-boundary" id="identity">
        <p className="portrait-index">Identity</p>
        <h2>Freedom Fighter. AI Architect. Operator.</h2>
        <p>
          I build software and operate AI systems that produce results. My portfolio
          documents 16 months of continuous AI orchestration: managing GPU compute, designing
          complex workflows, and enforcing clear authorization boundaries. I turn raw
          compute and fuzzy requirements into durable, verifiable, and production-ready work.
        </p>
        <p>
          This site keeps the record of the systems, evidence, lessons, and person behind the work.
        </p>
        <blockquote>“The people saved me. Now it's my turn.”</blockquote>
        <div className="home-closing-actions">
          <Link to="/interest">Start a conversation</Link>
          <a href="https://github.com/dhgmonkey" rel="me">GitHub</a>
        </div>
      </section>
      <p className="ai-transparency" style={{textAlign: 'center', marginTop: '40px', color: 'var(--muted)', fontSize: '12px'}}>
        This site is AI-architected by Drake Stapleton. I maintain excellence through relentless iteration, logged by 885 nights of less than 6 hours sleep captured over the years.
      </p>
    </main>
  );
}
