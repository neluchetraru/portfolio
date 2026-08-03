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
    tagline: 'Selft-hosted link-in-bio tool',
    description:
      'A self-hosted alternative to LinkTree for publishing profile pages on custom slugs. Uses self-hosted authentication and uploads, so you can run it without using third party services.',
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
    tagline: 'E-commerce platform for framed prints of your photos',
    description:
      'Drag your photo around inside a frame mockup until the crop looks right, choose a size, frame and paper, then pay. Stripe webhooks handle the order fulfillment. An admin dashboard lets me see and manage orders.',
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
    tagline: 'Real-time room-based chat application',
    description:
      'A real-time chat application built without account requirements. Features an end-to-end typed Socket.io protocol shared between client and server, SQLite history persistance, rate limiting, and message filtering.',
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
    tagline: 'Kanban task management app',
    description:
      'A minimalist Kanban board built with React and Express. Features drag-and-drop task management and a simple custom authentication system based on signed JWTs. Tasks and board state are persisted in a MongoDB database.',
    stack: ['React', 'dnd-kit', 'Express', 'MongoDB', 'TypeScript', "jwt"],
    live: 'https://taskboard.ionchetraru.me',
    source: 'https://github.com/neluchetraru/taskboard',
    accent: 'oklch(74% 0.14 150)',
    image: '/shots/taskboard.webp',
    alt: 'taskboard kanban view with tasks in To do, In progress and Done columns'
  },
  {
    index: '05',
    name: '3d labyrinth',
    tagline: "Raw WebGPU tilt-maze engine",
    description:
      "A browser-based wooden tilt-maze built directly on raw WebGPU without third-party graphics engines or Three.js. Features custom WGSL shaders, texture loading, lighting, and rigid-body physics powered by Ammo.js with JSON-based level configurations.",
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
    tagline: 'Invoice extraction & evaluation platform',
    description:
      "An automated invoice parsing tool that extracts structured fields using the Claude API. Features a public evaluation pipeline that systematically benchmarks prompt iterations and model variation against a synthetic ground-truth dataset, scoring field-level accuracy, latency, and token cost.",
    stack: ['Next.js', 'TypeScript', 'Claude API', 'PostgreSQL', 'Prisma', 'daisyUI'],
    live: 'https://parsely.ionchetraru.me',
    source: 'https://github.com/neluchetraru/parsely',
    accent: 'oklch(76% 0.14 163)',
    image: '/shots/parsely.webp',
    alt: 'parsely landing page with sample invoices and an upload dropzone on a graph-paper background'
  }
]

export const LINKS = {
  github: 'https://github.com/neluchetraru',
  githubUser: 'neluchetraru',
  linkedin: 'https://www.linkedin.com/in/chetraru-ion',
  email: 'neluchetraru@gmail.com',
  cv: '/cv.pdf'
}
