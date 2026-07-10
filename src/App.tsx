import { useEffect, useRef, useState } from 'react'
import { LINKS, PROJECTS, TOOLS, type Project } from './data'

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-[1em] transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
    aria-hidden
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.05.78 2.12v3.14c0 .3.2.67.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

/* animated network background */
function LiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    let width = 0
    let height = 0
    let nodes: { x: number; y: number; vx: number; vy: number }[] = []
    let raf = 0

    const LINK_DISTANCE = 150
    const SPEED = 0.25

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const target = Math.min(90, Math.floor((width * height) / 22000))
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED * 2,
        vy: (Math.random() - 0.5) * SPEED * 2
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < -20) node.x = width + 20
        if (node.x > width + 20) node.x = -20
        if (node.y < -20) node.y = height + 20
        if (node.y > height + 20) node.y = -20
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.11
            ctx.strokeStyle = `rgba(242, 239, 233, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      for (const node of nodes) {
        ctx.fillStyle = 'rgba(245, 158, 11, 0.45)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      draw()
      raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)
    if (reducedMotion) {
      draw() // static constellation, no animation
    } else {
      loop()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        maskImage: 'linear-gradient(to bottom, black, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.35))'
      }}
    />
  )
}

/* reveal-on-scroll */
function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* fixed section indicator */
const SECTIONS = [
  { id: 'top', label: 'Top' },
  { id: 'work', label: 'Work' },
  { id: 'activity', label: 'Activity' },
  { id: 'contact', label: 'Contact' }
]

function SectionRail() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Sections"
      className="fixed right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 xl:flex"
    >
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group/rail flex items-center justify-end gap-2"
          aria-current={active === id ? 'true' : undefined}
        >
          <span
            className={`text-xs transition-all duration-200 ${
              active === id
                ? 'font-medium text-ink opacity-100'
                : 'text-faint opacity-0 group-hover/rail:opacity-100'
            }`}
          >
            {label}
          </span>
          <span
            className={`rounded-full transition-all duration-300 ${
              active === id ? 'h-2 w-6 bg-accent' : 'size-2 bg-stone-700 group-hover/rail:bg-stone-500'
            }`}
          />
        </a>
      ))}
    </nav>
  )
}

/* GitHub contribution graph, restyled to match the page */
type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }

const LEVEL_COLORS = [
  'rgba(242, 239, 233, 0.07)',
  'color-mix(in oklch, #f59e0b 30%, #14120f)',
  'color-mix(in oklch, #f59e0b 55%, #14120f)',
  'color-mix(in oklch, #f59e0b 80%, #14120f)',
  '#f59e0b'
]

function Contributions() {
  const [days, setDays] = useState<ContributionDay[] | null>(null)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${LINKS.githubUser}?y=last`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: { total: { lastYear: number }; contributions: ContributionDay[] }) => {
        setDays(data.contributions)
        setTotal(data.total.lastYear)
      })
      .catch(() => setDays(null))
  }, [])

  // columns = weeks
  const weeks: ContributionDay[][] = []
  if (days) {
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7))
    }
  }

  return (
    <section id="activity" className="reveal scroll-mt-16 border-t border-stone-800 py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-faint">
          A year of commits
        </h2>
        <a
          href={LINKS.github}
          className="font-mono text-xs text-faint underline decoration-stone-600 underline-offset-4 hover:decoration-[var(--color-accent)]"
        >
          {days ? `${total.toLocaleString()} contributions — ` : ''}@{LINKS.githubUser}
        </a>
      </div>
      {days ? (
        <div className="mt-6 overflow-x-auto pb-2" role="img" aria-label={`GitHub contribution graph: ${total} contributions in the last year`}>
          <div className="flex w-max gap-[3px]">
            {weeks.map((week, w) => (
              <div key={w} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <span
                    key={day.date}
                    title={`${day.date}: ${day.count} contribution${day.count === 1 ? '' : 's'}`}
                    className="size-[11px] rounded-[3px]"
                    style={{ backgroundColor: LEVEL_COLORS[day.level] }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-6 font-mono text-xs text-faint">
          Loading contribution graph… if it doesn't appear,{' '}
          <a href={LINKS.github} className="underline underline-offset-4">
            see it on GitHub
          </a>
          .
        </p>
      )}
    </section>
  )
}

function ProjectRow({ project, i }: { project: Project; i: number }) {
  return (
    <article
      className="reveal group relative grid gap-5 border-t border-stone-800 py-10 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,24rem)] md:items-start md:gap-10 md:py-14"
      style={{ '--pa': project.accent } as React.CSSProperties}
    >
      <span className="hidden font-display text-4xl font-extralight md:block" style={{ color: 'var(--pa)' }}>
        {project.index}
      </span>

      <div>
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl font-extralight md:hidden" style={{ color: 'var(--pa)' }}>
            {project.index}
          </span>
          <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            <a
              href={project.live}
              className="underline decoration-transparent decoration-2 underline-offset-8 transition-colors hover:decoration-[var(--pa)]"
            >
              {project.name}
            </a>
          </h3>
        </div>
        <p className="mt-1 font-display text-lg italic text-stone-400">{project.tagline}</p>

        {/* mobile figure */}
        <img
          src={project.image}
          alt={project.alt}
          width={1200}
          height={750}
          loading={i === 0 ? 'eager' : 'lazy'}
          className="mt-5 aspect-[16/10] w-full rounded-md border border-white/10 object-cover object-top md:hidden"
          style={{
            boxShadow: '0 0 32px -8px color-mix(in oklch, var(--pa) 40%, transparent)'
          }}
        />

        <p className="mt-4 max-w-2xl leading-relaxed text-stone-300">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-faint">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          <a
            href={project.live}
            aria-label={`${project.name} — live site`}
            className="group/btn inline-flex min-h-11 items-center gap-1.5 rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper"
          >
            Live <ArrowUpRight />
          </a>
          <a
            href={project.source}
            aria-label={`${project.name} — source code on GitHub`}
            className="group/btn inline-flex min-h-11 items-center gap-1.5 rounded-full border border-stone-700 px-5 py-2 text-sm font-medium text-stone-300 transition-colors hover:border-stone-400"
          >
            Source <ArrowUpRight />
          </a>
        </div>
      </div>

      {/* desktop figure — bleeds past the grid, overlaps the row border */}
      <figure
        className={`hidden md:block lg:-mr-16 ${
          i % 2 ? 'md:mt-8 md:rotate-[0.6deg]' : 'md:-mt-5 md:-rotate-[0.5deg]'
        }`}
      >
        <a href={project.live} tabIndex={-1} aria-hidden>
          <img
            src={project.image}
            alt={project.alt}
            width={1200}
            height={750}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="aspect-[16/10] w-full rounded-md border border-white/10 bg-stone-900 object-cover object-top transition-transform duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:rotate-0"
            style={{
              boxShadow:
                '0 0 36px -6px color-mix(in oklch, var(--pa) 45%, transparent), 0 0 90px -12px color-mix(in oklch, var(--pa) 35%, transparent)'
            }}
          />
        </a>
      </figure>
    </article>
  )
}

export default function App() {
  useReveal()

  return (
    <div className="relative">
      <LiveBackground />
      <SectionRail />

      <div className="relative z-[1] mx-auto max-w-6xl px-6 pb-24">
        {/* header */}
        <header className="flex items-center justify-between py-8 text-sm">
          <span className="font-display text-lg font-semibold">
            ic<span className="text-accent">.</span>
          </span>
          <nav className="flex gap-2 text-faint">
            <a href="#work" className="px-2 py-2 transition-colors hover:text-ink">
              Work
            </a>
            <a href="#contact" className="px-2 py-2 transition-colors hover:text-ink">
              Contact
            </a>
            <a
              href={LINKS.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 transition-colors hover:text-ink"
            >
              CV<span className="sr-only"> (PDF, opens in new tab)</span>
            </a>
          </nav>
        </header>

        {/* hero */}
        <section id="top" className="scroll-mt-24 py-20 md:py-28">
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
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-stone-300"
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
            <a
              href={LINKS.github}
              className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-4 py-2 transition-colors hover:border-stone-400"
            >
              <GitHubIcon /> GitHub
            </a>
            <a
              href={LINKS.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-4 py-2 transition-colors hover:border-stone-400"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href={`mailto:${LINKS.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-4 py-2 transition-colors hover:border-stone-400"
            >
              <MailIcon /> Email
            </a>
          </div>
        </section>

        {/* work */}
        <section id="work" className="scroll-mt-16">
          <h2 className="reveal pb-8 text-sm font-medium uppercase tracking-[0.25em] text-faint">
            Selected work — six projects, all deployed
          </h2>
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.name} project={project} i={i} />
          ))}
        </section>

        {/* stack — periodic table of tools */}
        <section className="reveal border-t border-stone-800 py-16">
          <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-faint">
            Periodic table of tools
          </h2>
          <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {TOOLS.map((tool, i) => (
              <li
                key={tool.symbol}
                className="group/tile relative rounded-md border border-white/10 bg-white/[0.04] p-3 transition-all duration-200 hover:-translate-y-1"
                style={{ '--ta': tool.accent } as React.CSSProperties}
              >
                <span
                  className="absolute inset-x-0 top-0 h-0.5 rounded-t-md opacity-60 transition-opacity group-hover/tile:opacity-100"
                  style={{ backgroundColor: 'var(--ta)' }}
                />
                <span className="font-mono text-[10px] text-faint">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-display text-3xl font-semibold leading-none" style={{ color: 'var(--ta)' }}>
                  {tool.symbol}
                </p>
                <p className="mt-1.5 text-xs font-medium text-ink">{tool.name}</p>
                <p className="font-mono text-[10px] text-faint">{tool.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* github activity */}
        <Contributions />

        {/* contact */}
        <section id="contact" className="reveal scroll-mt-16 border-t border-stone-800 py-28">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s build <span className="italic text-stone-400">something</span>
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-stone-300">
            Found a bug in one of the projects above? Even better — email me.
          </p>
          <a
            href={`mailto:${LINKS.email}`}
            className="group/btn mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-paper"
          >
            {LINKS.email} <ArrowUpRight />
          </a>
          <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 text-sm text-faint">
            <span>© {new Date().getFullYear()} Ion Chetraru</span>
          </footer>
        </section>
      </div>
    </div>
  )
}
