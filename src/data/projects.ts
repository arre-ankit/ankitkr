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
}

export const projects: Project[] = [
  {
    slug: 'termreel',
    name: 'termreel',
    description: 'Describe your terminal demo in plain English, termreel uses AI to generate a VHS tape file, records it into GIF/MP4/WebM, and lets you refine it in a loop. The gap between "I built this" and "let me show you", closed.',
    link: 'https://github.com/arre-ankit/termreel',
    demo: null,
    tags: ['TypeScript', 'CLI', 'AI', 'VHS'],
    status: 'Active',
    year: '2026',
    mediaUrl: 'https://raw.githubusercontent.com/arre-ankit/termreel/refs/heads/main/.github/termreel-demo.gif',
  },
  {
    slug: 'repochart',
    name: 'repochart',
    description: 'GitHub repository analytics, right from your terminal. Star growth curves, commit velocity, contributor rankings, language breakdowns, all rendered as sparklines and bar charts. Compare two repos side-by-side and see who\'s actually shipping.',
    link: 'https://github.com/arre-ankit/repochart',
    demo: null,
    tags: ['TypeScript', 'CLI', 'GitHub API'],
    status: 'Active',
    year: '2026',
    mediaUrl: 'https://raw.githubusercontent.com/arre-ankit/repochart/refs/heads/main/.github/repochart-compare-demo.gif',
  },
  {
    slug: 'zombiefiles',
    name: 'zombiefiles',
    description: 'Every codebase accumulates dead weight, files nobody has touched in months, quietly rotting in the repo. zombiefiles scans your git history and surfaces them, sorted by staleness. The Marie Kondo of codebases.',
    link: 'https://github.com/arre-ankit/zombiefiles',
    demo: null,
    tags: ['TypeScript', 'CLI', 'Git'],
    status: 'Active',
    year: '2026',
    mediaUrl: 'https://raw.githubusercontent.com/arre-ankit/zombiefiles/refs/heads/main/.github/zombiefiles-demo.gif',
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
  },
  {
    slug: 'speechsync-ai',
    name: 'SpeechSync AI',
    description: 'The bottleneck for many international developers isn\'t coding skill, it\'s pronunciation. SpeechSync records your speech, runs it through Whisper ASR, then uses GPT-3.5 for detailed pronunciation feedback. A personal accent coach in your browser.',
    link: 'https://github.com/arre-ankit/speechsync-ai',
    demo: 'https://speechsync-ai.pages.dev',
    tags: ['TypeScript', 'Next.js', 'Whisper', 'Cloudflare AI'],
    status: 'Active',
    year: '2024',
    mediaUrl: 'https://github.com/user-attachments/assets/e1ccd982-c6b4-4d89-85fd-0c80b5034bba',
  },
];
