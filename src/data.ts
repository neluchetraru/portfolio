export interface Project {
  index: string
  name: string
  tagline: string
  description: string
  stack: string[]
  live: string
  source: string
  accent: string
  image: string
  alt: string
}

export const PROJECTS: Project[] = [
  {
    index: '01',
    name: 'devlinks',
    tagline: 'Every link you care about, one simple page',
    description:
      'A link-in-bio platform: build a profile, add social links with automatic brand colors, share one public page. Fully self-hosted — email+password auth with Better Auth and avatar storage on disk, no third-party services.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Better Auth', 'Tailwind'],
    live: 'https://devlinks.ionchetraru.me',
    source: 'https://github.com/neluchetraru/link-sharing-app',
    accent: 'oklch(72% 0.16 293)',
    image: '/shots/devlinks.webp',
    alt: 'devlinks landing page with a phone mockup showing a link-in-bio profile'
  },
  {
    index: '02',
    name: 'wallshot',
    tagline: 'Your photos as framed wall art',
    description:
      'A custom print shop with a drag-and-drop designer: position a photo inside a live frame mockup, pick size, frame and paper, then check out through Stripe with webhook-confirmed orders and an admin dashboard. Payments run in test mode — try it with 4242 4242 4242 4242.',
    stack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma', 'sharp'],
    live: 'https://wallshot.ionchetraru.me',
    source: 'https://github.com/neluchetraru/wallshot',
    accent: 'oklch(76% 0.13 65)',
    image: '/shots/wallshot.webp',
    alt: 'wallshot design tool with a photo positioned inside a framed poster mockup'
  },
  {
    index: '03',
    name: 'rooms',
    tagline: 'Real-time chat, no accounts needed',
    description:
      'Room-based chat over websockets with a typed socket.io protocol shared between client and server — event typos are compile errors. Message history persists in SQLite with cursor pagination, plus typing indicators, rate limiting and a profanity filter.',
    stack: ['React', 'socket.io', 'Express', 'SQLite', 'TypeScript', 'Vite'],
    live: 'https://rooms.ionchetraru.me',
    source: 'https://github.com/neluchetraru/rooms',
    accent: 'oklch(74% 0.10 220)',
    image: '/shots/rooms.webp',
    alt: 'rooms chat interface showing a live conversation with a typing indicator'
  },
  {
    index: '04',
    name: 'taskboard',
    tagline: 'A kanban board with drag & drop',
    description:
      'Mini-Trello: three columns, drag-and-drop cards with fractional ordering (every drop is a single PATCH), due dates with overdue highlighting, and JWT auth where logout actually revokes tokens server-side.',
    stack: ['React', 'dnd-kit', 'Express', 'MongoDB', 'TypeScript'],
    live: 'https://taskboard.ionchetraru.me',
    source: 'https://github.com/neluchetraru/taskboard',
    accent: 'oklch(74% 0.14 150)',
    image: '/shots/taskboard.webp',
    alt: 'taskboard kanban view with tasks in To do, In progress and Done columns'
  },
  {
    index: '05',
    name: '3d labyrinth',
    tagline: 'Tilt the board, dodge the holes',
    description:
      'A browser game written against raw WebGPU — custom render pipeline, WGSL shaders, textures and lighting, no engine — with rigid-body physics from Ammo.js and JSON-defined levels. Needs a WebGPU browser (Chrome/Edge).',
    stack: ['WebGPU', 'WGSL', 'Ammo.js', 'JavaScript'],
    live: 'https://labyrinth.ionchetraru.me',
    source: 'https://github.com/neluchetraru/webgpu-labyrinth',
    accent: 'oklch(70% 0.16 25)',
    image: '/shots/labyrinth.webp',
    alt: '3D labyrinth gameplay: a wooden tilting board with a ball, walls and holes'
  },
  {
    index: '06',
    name: 'parsely',
    tagline: 'Invoice extraction, measured',
    description:
      'LLM document extraction with the part most AI demos skip: a public evals dashboard. A reproducible golden dataset of 30 synthetic invoices scores every model and prompt version on per-field accuracy, cost and latency — the v1 eval caught a real date-parsing bug, and prompt v2 took the cheap model from 93% to 100% at the same cost.',
    stack: ['Next.js', 'TypeScript', 'Claude API', 'PostgreSQL', 'Prisma', 'daisyUI'],
    live: 'https://parsely.ionchetraru.me',
    source: 'https://github.com/neluchetraru/parsely',
    accent: 'oklch(76% 0.14 163)',
    image: '/shots/parsely.webp',
    alt: 'parsely landing page with sample invoices and an upload dropzone on a graph-paper background'
  }
]

export interface Tool {
  symbol: string
  name: string
  detail: string
  accent: string
}

export const TOOLS: Tool[] = [
  { symbol: 'Ts', name: 'TypeScript', detail: 'strict, everywhere', accent: 'oklch(72% 0.16 293)' },
  { symbol: 'Re', name: 'React / Next.js', detail: 'app router era', accent: 'oklch(72% 0.16 293)' },
  { symbol: 'Tw', name: 'Tailwind CSS', detail: 'v4, design tokens', accent: 'oklch(72% 0.16 293)' },
  { symbol: 'No', name: 'Node.js', detail: 'express, ESM', accent: 'oklch(74% 0.14 150)' },
  { symbol: 'Pg', name: 'PostgreSQL', detail: 'via Prisma', accent: 'oklch(74% 0.10 220)' },
  { symbol: 'Mo', name: 'MongoDB', detail: 'via Mongoose', accent: 'oklch(74% 0.10 220)' },
  { symbol: 'Sq', name: 'SQLite', detail: 'WAL mode', accent: 'oklch(74% 0.10 220)' },
  { symbol: 'St', name: 'Stripe', detail: 'checkout + webhooks', accent: 'oklch(76% 0.13 65)' },
  { symbol: 'Ws', name: 'WebSockets', detail: 'socket.io, typed', accent: 'oklch(74% 0.14 150)' },
  { symbol: 'Wg', name: 'WebGPU', detail: 'WGSL, no engine', accent: 'oklch(70% 0.16 25)' },
  { symbol: 'Dk', name: 'Docker', detail: 'Coolify · Hetzner', accent: 'oklch(76% 0.13 65)' },
  { symbol: 'Gt', name: 'Git / CI', detail: 'gh cli, actions', accent: 'oklch(76% 0.13 65)' }
]

export const LINKS = {
  github: 'https://github.com/neluchetraru',
  githubUser: 'neluchetraru',
  linkedin: 'https://www.linkedin.com/in/chetraru-ion',
  email: 'neluchetraru@gmail.com',
  cv: '/cv.pdf'
}
