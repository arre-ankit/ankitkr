# Minimalist Personal Website

## Project Overview

A clean, minimalist personal website built with Astro and Tailwind CSS, inspired by leerob.com's design philosophy. Features a content-first approach with generous whitespace, clean typography, and dark mode support.

## Features Implemented

✅ **Core Pages**
- Home page with introduction and navigation cards
- Blog section with post listings and individual post pages
- Writing section for long-form essays
- Projects showcase with descriptions and tags
- About page with bio and social links

✅ **Design & UX**
- leerob.com-inspired minimalist aesthetic
- Sticky navigation with text-only links
- Dark/light mode toggle with theme persistence
- Responsive mobile-first design
- System fonts for native feel
- Subtle hover effects and transitions

✅ **Technical**
- Astro v5 static site generator
- Tailwind CSS v4 with custom configuration
- MDX support for rich markdown content
- Content collections for blog and writing
- SEO-friendly meta tags and OpenGraph support
- Optimized for Replit deployment

## Quick Start

The development server is already running! You can view your site in the webview.

### Customizing Your Site

1. **Update Site Information** - Edit `src/config.ts`:
   - Change site name, description, and URL
   - Update author name, email, and social media links
   - Customize navigation items

2. **Add Your Content**:
   - **Blog posts**: Create `.md` files in `src/content/blog/`
   - **Essays**: Create `.md` files in `src/content/writing/`
   - **Projects**: Edit the projects array in `src/pages/projects.astro`
   - **About**: Update `src/pages/about.astro` with your bio

3. **Customize Styling** (optional):
   - Edit `src/styles/global.css` for custom styles
   - Modify `tailwind.config.mjs` for theme customization
   - Update color palette in the gray scale

### Content Format

Blog posts and writing use markdown with frontmatter:

```markdown
---
title: 'Your Post Title'
description: 'Brief description'
date: 2024-11-01
tags: ['optional', 'tags']  # Blog only
---

Your content in markdown format...
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── content/         # Blog posts and writing (markdown)
├── layouts/         # Page layouts
├── pages/           # File-based routing
├── styles/          # Global styles
└── config.ts        # Site configuration
```

## Next Steps

1. **Customize**: Update `src/config.ts` with your information
2. **Add Content**: Replace sample posts with your own
3. **Deploy**: When ready, publish your site to make it live
4. **Optional**: Add an OpenGraph image in `public/og-image.png`

## Tech Stack

- **Astro 5**: Fast, modern static site generator
- **Tailwind CSS v4**: Utility-first CSS framework
- **MDX**: Markdown with component support
- **TypeScript**: Type-safe development

## Support

- Astro Docs: https://docs.astro.build
- Tailwind CSS: https://tailwindcss.com
- See README.md for detailed documentation

---

*Built with care for a calm, thoughtful web presence.*
