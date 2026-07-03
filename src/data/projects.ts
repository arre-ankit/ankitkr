export interface Project {
  slug: string;
  name: string;
  description: string;
  link: string;
  demo: string | null;
  tags: string[];
  status: string;
  year: string;
  mediaUrl: string | null;
  logo?: string;
}

export const projects: Project[] = [
  {
    slug: 'docvid',
    name: 'DocVid',
    description: 'Turns documentation into narrated and animated coding lessons.',
    link: 'https://github.com/arre-ankit/docvid',
    demo: 'https://www.docvid.in',
    tags: ['TypeScript', 'Next.js', 'AI', 'Video'],
    status: 'Active',
    year: '2026',
    mediaUrl: 'https://imghost.ankit992827.workers.dev/i/0j5r1f5v6m63.png',
    logo: 'https://imghost.ankit992827.workers.dev/i/3u5b324w5c3m.svg',
  },
  {
    slug: 'visa-explorer',
    name: 'Visa Explorer',
    description: 'Discover visa-free countries for every passport!',
    link: 'https://github.com/arre-ankit/visa-explorer',
    demo: 'https://www.freevisacountries.com',
    tags: ['TypeScript', 'Astro', 'React', 'Travel'],
    status: 'Active',
    year: '2026',
    mediaUrl: 'https://imghost.ankit992827.workers.dev/i/4w6h423n1n3g.png',
    logo: 'https://imghost.ankit992827.workers.dev/i/0o2t715b565k.png',
  },
  {
    slug: 'speechsync-ai',
    name: 'SpeechSync AI',
    description: 'The bottleneck for many international developers isn\'t coding skill, it\'s pronunciation. SpeechSync records your speech, runs it through Whisper ASR, then uses GPT-3.5 for detailed pronunciation feedback. A personal accent coach in your browser.',
    link: 'https://github.com/arre-ankit/speechsync-ai',
    demo: 'https://speechsync-web.ankit992827.workers.dev/',
    tags: ['TypeScript', 'Next.js', 'Whisper', 'Cloudflare AI'],
    status: 'Active',
    year: '2024',
    mediaUrl: 'https://imghost.ankit992827.workers.dev/i/2a4i3m00172r.png',
    logo: 'https://imghost.ankit992827.workers.dev/i/1v4i254v2d0p.png',
  },
  {
    slug: 'pullscan',
    name: 'PullScan',
    description: 'AI-powered Pull Request and Commit Summarizer with RAG-based chat. Reading through pull requests scales terribly, PullScan generates comprehensive summaries and lets you ask questions about the codebase. Like having a senior engineer who already read every PR.',
    link: 'https://github.com/arre-ankit/PullScan',
    demo: null,
    tags: ['TypeScript', 'Next.js', 'LangBase', 'AI'],
    status: 'Active',
    year: '2025',
    mediaUrl: 'https://github.com/user-attachments/assets/29776e3c-f428-41ca-aa67-d723333b2f0d',
    logo: 'https://imghost.ankit992827.workers.dev/i/2p6a006m050i.png',
  },
  {
    slug: 'termreel',
    name: 'termreel',
    description: 'Describe your terminal demo in plain English, termreel uses AI to generate a VHS tape file, records it into GIF/MP4/WebM, and lets you refine it in a loop. The gap between "I built this" and "let me show you", closed.',
    link: 'https://github.com/arre-ankit/termreel',
    demo: 'https://www.npmjs.com/package/termreel',
    tags: ['TypeScript', 'CLI', 'AI', 'VHS'],
    status: 'Active',
    year: '2026',
    mediaUrl: 'https://raw.githubusercontent.com/arre-ankit/termreel/refs/heads/main/.github/termreel-demo.gif',
    logo: 'https://imghost.ankit992827.workers.dev/i/5m5z3m3z343h.png',
  },
  {
    slug: 'repochart',
    name: 'repochart',
    description: 'GitHub repository analytics, right from your terminal. Star growth curves, commit velocity, contributor rankings, language breakdowns, all rendered as sparklines and bar charts. Compare two repos side-by-side and see who\'s actually shipping.',
    link: 'https://github.com/arre-ankit/repochart',
    demo: 'https://www.npmjs.com/package/repochart',
    tags: ['TypeScript', 'CLI', 'GitHub API'],
    status: 'Active',
    year: '2026',
    mediaUrl: 'https://raw.githubusercontent.com/arre-ankit/repochart/refs/heads/main/.github/repochart-compare-demo.gif',
    logo: 'https://imghost.ankit992827.workers.dev/i/4j3d031i1w31.png',
  },
  {
    slug: 'zombiefiles',
    name: 'zombiefiles',
    description: 'Every codebase accumulates dead weight, files nobody has touched in months, quietly rotting in the repo. zombiefiles scans your git history and surfaces them, sorted by staleness. The Marie Kondo of codebases.',
    link: 'https://github.com/arre-ankit/zombiefiles',
    demo: 'https://www.npmjs.com/package/zombiefiles',
    tags: ['TypeScript', 'CLI', 'Git'],
    status: 'Active',
    year: '2026',
    mediaUrl: 'https://raw.githubusercontent.com/arre-ankit/zombiefiles/refs/heads/main/.github/zombiefiles-demo.gif',
    logo: 'https://imghost.ankit992827.workers.dev/i/6c0x104b724e.png',
  },
  {
    slug: 'spotify-popularity-game',
    name: 'Spotify Popularity Game',
    description: 'Two songs appear, you guess which one is more popular on Spotify. Sounds easy until you realize your music taste is a terrible predictor of mainstream popularity. A fun way to discover how disconnected your bubble really is.',
    link: 'https://github.com/arre-ankit/spotify-popularity-game',
    demo: 'https://main.higher-lower-spotify-game.pages.dev',
    tags: ['TypeScript', 'Next.js', 'Spotify API'],
    status: 'Active',
    year: '2024',
    mediaUrl: 'https://github.com/user-attachments/assets/b3238e06-0fec-4f4f-9b03-f9b84fac71e3',
    logo: 'https://imghost.ankit992827.workers.dev/i/1k4l5p4g0n49.png',
  },
];
