export interface Project {
  index: string
  name: string
  tagline: string
  description: string
  stack: string[]
  live: string
  source: string
  accent: string
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
    accent: '#7c3aed'
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
    accent: '#d97706'
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
    accent: '#0891b2'
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
    accent: '#16a34a'
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
    accent: '#dc2626'
  }
]

export const STACK = [
  'TypeScript',
  'React / Next.js',
  'Node.js / Express',
  'PostgreSQL · MongoDB · SQLite',
  'Prisma / Mongoose',
  'Stripe',
  'Docker · Coolify · Hetzner',
  'WebGPU / WGSL',
  'Tailwind CSS'
]

export const LINKS = {
  github: 'https://github.com/neluchetraru',
  linkedin: 'https://www.linkedin.com/in/chetraru-ion',
  email: 'neluchetraru@gmail.com',
  cv: '/cv.pdf'
}
