import { LINKS, PROJECTS, STACK, type Project } from './data'

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-[1em]"
    aria-hidden
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

function ProjectRow({ project, delay }: { project: Project; delay: number }) {
  return (
    <article
      className="rise group grid gap-4 border-t border-stone-300 py-10 md:grid-cols-[6rem_1fr_auto] md:gap-8"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span
        className="font-display text-2xl font-light md:pt-1"
        style={{ color: project.accent }}
      >
        {project.index}
      </span>

      <div>
        <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          <a
            href={project.live}
            className="underline decoration-transparent decoration-2 underline-offset-8 transition-colors hover:decoration-[var(--color-accent)]"
          >
            {project.name}
          </a>
        </h3>
        <p className="mt-1 text-sm font-medium uppercase tracking-widest text-faint">
          {project.tagline}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-stone-700">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-faint">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-3 md:flex-col md:items-end md:pt-2">
        <a
          href={project.live}
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          Live <ArrowUpRight />
        </a>
        <a
          href={project.source}
          className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 px-4 py-1.5 text-sm font-medium text-stone-700 transition-colors hover:border-stone-500"
        >
          Source <ArrowUpRight />
        </a>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24">
      {/* header */}
      <header className="flex items-center justify-between py-8 text-sm">
        <span className="font-display text-lg font-semibold">ic.</span>
        <nav className="flex gap-6 text-faint">
          <a href="#work" className="transition-colors hover:text-ink">
            Work
          </a>
          <a href="#contact" className="transition-colors hover:text-ink">
            Contact
          </a>
          <a href={LINKS.cv} className="transition-colors hover:text-ink">
            CV
          </a>
        </nav>
      </header>

      {/* hero */}
      <section className="py-20 md:py-28">
        <p className="rise text-sm font-medium uppercase tracking-[0.25em] text-faint">
          Software engineer · Denmark
        </p>
        <h1
          className="rise mt-6 font-display text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl"
          style={{ animationDelay: '80ms' }}
        >
          Ion
          <br />
          Chetraru<span className="text-accent">.</span>
        </h1>
        <p
          className="rise mt-8 max-w-xl text-lg leading-relaxed text-stone-700"
          style={{ animationDelay: '160ms' }}
        >
          I build products end to end — payments, real-time systems, render
          pipelines — and run them on my own infrastructure. MSc Computer
          Science &amp; Engineering at DTU. Everything below is live: click
          it, use it, break it.
        </p>
        <div
          className="rise mt-8 flex gap-5 text-sm font-medium"
          style={{ animationDelay: '240ms' }}
        >
          <a href={LINKS.github} className="underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-[var(--color-accent)]">
            GitHub
          </a>
          <a href={LINKS.linkedin} className="underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-[var(--color-accent)]">
            LinkedIn
          </a>
          <a href={`mailto:${LINKS.email}`} className="underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-[var(--color-accent)]">
            Email
          </a>
        </div>
      </section>

      {/* work */}
      <section id="work" className="scroll-mt-12">
        <h2 className="rise pb-8 text-sm font-medium uppercase tracking-[0.25em] text-faint">
          Selected work — five projects, all deployed
        </h2>
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.name} project={project} delay={80 * i} />
        ))}
      </section>

      {/* stack */}
      <section className="border-t border-stone-300 py-16">
        <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-faint">
          Tools I reach for
        </h2>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-stone-700">
          {STACK.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      {/* contact */}
      <section id="contact" className="scroll-mt-12 border-t border-stone-300 py-20">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Let&apos;s build something<span className="text-accent">.</span>
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-stone-700">
          Open to interesting projects and conversations.
        </p>
        <a
          href={`mailto:${LINKS.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          {LINKS.email} <ArrowUpRight />
        </a>
        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 text-sm text-faint">
          <span>© {new Date().getFullYear()} Ion Chetraru</span>
          <span className="font-mono text-xs">
            self-hosted on Hetzner · Coolify
          </span>
        </footer>
      </section>
    </div>
  )
}
