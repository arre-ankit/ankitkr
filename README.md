# Personal Website

A minimalist personal website built with Astro and Tailwind CSS, inspired by [leerob.com](https://leerob.com).

## Features

- 🎨 **Clean, minimalist design** with generous whitespace and typography-first approach
- 🌓 **Dark/light mode** with theme persistence
- 📝 **Blog** for short posts and updates
- ✍️ **Writing** section for long-form essays
- 🚀 **Projects** showcase
- 👤 **About** page with bio and social links
- 📱 **Fully responsive** mobile-first design
- ⚡ **Fast** static site generation with Astro
- 🎯 **SEO-friendly** with meta tags and OpenGraph images

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Content**: MDX for rich markdown content
- **Deployment**: Optimized for Replit

## Project Structure

```
/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── BaseHead.astro       # SEO meta tags
│   │   ├── Navigation.astro      # Sticky nav bar
│   │   ├── Footer.astro          # Site footer
│   │   └── ThemeToggle.astro     # Dark mode toggle
│   ├── content/          # Content collections
│   │   ├── blog/         # Blog posts (markdown)
│   │   └── writing/      # Long-form essays (markdown)
│   ├── layouts/          # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/            # File-based routing
│   │   ├── index.astro
│   │   ├── blog/
│   │   ├── writing/
│   │   ├── about.astro
│   │   └── projects.astro
│   ├── styles/
│   │   └── global.css    # Global styles & Tailwind imports
│   └── config.ts         # Site configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit the webview

### Building for Production

```bash
npm run build
npm run preview
```

## Customization

### Site Configuration

Edit `src/config.ts` to customize:
- Site name and description
- Author information
- Social media links
- Navigation items

### Adding Content

**Blog Posts**: Create markdown files in `src/content/blog/` with frontmatter:
```markdown
---
title: 'Your Post Title'
description: 'A brief description'
date: 2024-11-01
tags: ['tag1', 'tag2']
---

Your content here...
```

**Writing/Essays**: Create markdown files in `src/content/writing/` with frontmatter:
```markdown
---
title: 'Your Essay Title'
description: 'A brief description'
date: 2024-11-01
---

Your content here...
```

**Projects**: Edit the `projects` array in `src/pages/projects.astro`

### Styling

The design uses Tailwind CSS v4 with a custom color palette inspired by minimalist aesthetics:
- System fonts for native feel
- Custom gray scale for subtle contrast
- Dark mode support with `class` strategy

## Design Philosophy

This website embodies the principles of digital minimalism:
- **Content first**: Typography and whitespace guide focus
- **Intentional interactions**: Subtle hover effects, no flashy animations
- **Performance**: Static generation for instant loads
- **Accessibility**: Semantic HTML and proper contrast ratios

Inspired by [leerob.com](https://leerob.com), the design prioritizes:
- Generous spacing
- Clean typography hierarchy
- Single-column layout for readability
- Calm, thoughtful aesthetic

## License

MIT
