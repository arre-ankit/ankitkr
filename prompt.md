# Personal Website Design System Prompt

Build a minimalist personal portfolio website with a distinctive brutalist-minimal aesthetic using Astro and Tailwind CSS. Follow this exact design system:

## Design Philosophy
- Minimalist brutalist aesthetic with a dark, monochromatic base
- Extensive use of dashed borders to create visual hierarchy and structure
- Subtle transparency and layering for depth
- Micro-interactions through subtle hover states and transitions
- Grid-based layout with precise alignment

## Color System

### Base Colors (Tailwind custom theme)
```css
--color-brand-primary: #000000      /* Pure black background */
--color-brand-dashboard: #161618    /* Dark gray for borders */
--color-brand-text: #f2f2f2        /* Off-white text */
```

### Accent Colors (for visual interest)
```css
--color-brand-accent1: #FAD000   /* Yellow */
--color-brand-accent2: #818CF8   /* Indigo */
--color-brand-accent3: #4ADE80   /* Green */
--color-brand-accent4: #9C88FF   /* Purple */
--color-brand-accent5: #00F6FA   /* Cyan */
--color-brand-accent6: #ED8B00   /* Orange */
--color-brand-accent7: #CC3D3A   /* Red */
--color-brand-accent8: #FF2D1F   /* Bright red */
--color-brand-accent9: #22C55E   /* Emerald */
--color-brand-accent10: #9685FD  /* Light purple */
```

## Typography

### Font Stack
- **Sans-serif**: Inter (system fallbacks: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Monospace**: ui-monospace, SF Mono, Menlo, Consolas

### Text Hierarchy
- **H1**: `text-4xl font-semibold tracking-tight` (main page titles)
- **H2 in prose**: `text-2xl md:text-3xl` with `w-1 h-6 bg-brand-accent2` left accent bar
- **H3 in prose**: `text-xl md:text-2xl`
- **Body text**: `text-brand-text/90 leading-relaxed` (90% opacity for softer appearance)
- **Small labels**: `text-xs font-semibold tracking-widest uppercase` (for section headers)
- **Metadata**: `text-xs font-mono text-brand-text/50` (for dates and technical info)

### Text Selection
Custom selection style: light text on dark background
```css
::selection {
  background: #f2f2f2;
  color: #000000;
}
```

## Grid Layout System

### Main Layout Structure
All pages use a **12-column grid** with centered max-width container:

```astro
<main class="flex justify-center px-8 py-12">
  <div class="w-full max-w-4xl">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- Main content: md:col-span-8 -->
      <!-- Sidebar: md:col-span-4 -->
    </div>
  </div>
</main>
```

### Column Distribution
- **Main content column**: `md:col-span-8` (8/12 columns = 66.66%)
- **Sidebar column**: `md:col-span-4` (4/12 columns = 33.33%)
- **Gap**: `gap-8` (2rem spacing between columns)
- **Max width**: `max-w-4xl` centered container
- **Mobile**: Single column `grid-cols-1` (stack vertically)

### Main Content Styling
```html
<div class="md:col-span-8 border-l border-r border-dashed border-brand-text/10 px-8">
  <!-- Content -->
</div>
```
- Vertical dashed borders on left and right
- Horizontal padding: `px-8`
- Creates a "column" effect even within the grid

## Border System

### Border Characteristics
All borders follow this pattern:
```css
border border-dashed border-brand-text/10
```
- **Style**: Always `dashed`
- **Color**: `border-brand-text/10` (10% opacity white on black = subtle gray)
- **Thickness**: Default 1px (use `border-2` for emphasis)

### Border Usage Patterns
1. **Column dividers**: `border-l border-r` on main content
2. **Card containers**: `border` (all sides)
3. **Section separators**: `border-t` at top of stacked cards
4. **Hover states**: `border-brand-text/20` (increase opacity)
5. **Accent borders**: Use accent colors for emphasis (e.g., `border-brand-accent3`)

## Component Patterns

### 1. Card Component (Sidebar Cards)
```html
<div class="relative border-t border-l border-r border-dashed border-brand-text/10 p-6 bg-brand-text/[0.01]">
  <!-- Corner accent (optional) -->
  <div class="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-brand-accent3"></div>

  <!-- Content -->
</div>
```

**Characteristics**:
- Very subtle background: `bg-brand-text/[0.01]` (1% opacity)
- Padding: `p-6` (1.5rem)
- Borders on top, left, right (stacked cards share borders)
- Optional corner accents using different accent colors
- Bottom-right corner accent variant: `absolute bottom-0 right-0`

### 2. Interactive Card (with hover)
```html
<div class="group border border-dashed border-brand-text/10 hover:border-brand-text/20
            bg-brand-text/[0.01] hover:bg-brand-text/[0.02] transition-all">
  <span class="group-hover:text-brand-text transition-colors">Text</span>
</div>
```

**Hover effects**:
- Increase border opacity: `10` → `20`
- Increase background opacity: `0.01` → `0.02`
- Brighten text: `text-brand-text/70` → `text-brand-text`
- Use `transition-all` or `transition-colors` for smooth animations

### 3. Section Headers (Sidebar)
```html
<h3 class="text-xs font-semibold text-brand-text/60 mb-4 tracking-widest uppercase flex items-center gap-2">
  <span class="w-1.5 h-1.5 bg-brand-accent2 rotate-45"></span>
  Section Title
</h3>
```

**Features**:
- Rotated square accent (diamond shape)
- All caps with wide letter-spacing
- Muted color at 60% opacity

### 4. Status Indicator
```html
<div class="flex gap-1.5">
  <div class="w-2 h-2 rounded-full bg-brand-accent3 animate-pulse"></div>
  <div class="w-2 h-2 rounded-full bg-brand-accent3/60"></div>
  <div class="w-2 h-2 rounded-full bg-brand-accent3/30"></div>
</div>
```

**Animation**: First dot pulses with `animate-pulse`, others fade progressively

### 5. Link Styling
```html
<a class="underline underline-offset-4 decoration-brand-text/40
         hover:decoration-brand-text transition-colors">Link text</a>
```

**Characteristics**:
- Underline always visible with offset
- Muted decoration that brightens on hover
- Smooth color transition

### 6. Left Border Accent List
```html
<ul class="space-y-2 ml-6 border-l border-dashed border-brand-text/20 pl-4">
  <li><a href="#">Item</a></li>
</ul>
```

### 7. Corner Accents
```html
<!-- Top-left corner -->
<div class="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-brand-accent3"></div>

<!-- Bottom-right corner -->
<div class="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-brand-accent5"></div>
```

**Usage**: Add visual interest to cards, use different accent colors for variety

## Navigation

```html
<nav class="border-b border-dashed border-brand-text/10">
  <div class="flex justify-center px-8 py-6">
    <div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8">
      <div class="md:col-span-8 border-l border-r border-dashed border-brand-text/10 pl-8 pr-8
                  flex items-center gap-6 text-sm">
        <!-- Nav links -->
      </div>
    </div>
  </div>
</nav>
```

**Nav Link States**:
- Active: `text-brand-text` (full brightness)
- Inactive: `text-brand-text/60` (60% opacity)
- Hover: `hover:text-brand-text`
- Transition: `transition-colors`

## Prose Styling (Blog Content)

### Base Prose Classes
```html
<div class="prose max-w-none">
  <!-- Markdown content -->
</div>
```

### Customizations
- **Headings**: `prose-headings:text-brand-text prose-headings:font-semibold`
- **H2 with accent**: `prose-h2:before:content-[''] prose-h2:before:w-1 prose-h2:before:h-6 prose-h2:before:bg-brand-accent2`
- **Links**: Same underline pattern as global links
- **Code inline**: `prose-code:bg-brand-primary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded`
- **Code blocks**: Gradient background with corner accents
- **Blockquotes**: `border-l-2 border-dashed border-brand-accent3/30 pl-6` with rotated square accent
- **Images**: `border-2 border-dashed border-brand-text/10`

## Spacing & Layout Rules

### Vertical Spacing
- **Card stacks**: `space-y-0` (cards share borders, no gap)
- **Content sections**: `space-y-8` (2rem between major sections)
- **List items**: `space-y-2` (0.5rem between items)
- **Paragraphs**: `mb-4` (1rem bottom margin)

### Padding
- **Cards**: `p-6` (1.5rem all sides)
- **Main content**: `px-8` horizontal, `pb-12` bottom
- **Navigation**: `py-6` vertical, `px-8` horizontal
- **Small cards/buttons**: `p-3` (0.75rem)

### Container Constraints
- **Max width**: `max-w-4xl` (56rem = ~896px)
- **Always centered**: `flex justify-center`
- **Responsive padding**: `px-8` on mobile, maintains on desktop

## Responsive Behavior

### Breakpoint Strategy
Use `md:` prefix for desktop (768px+):
- Grid: `grid-cols-1 md:grid-cols-12`
- Column spans: `md:col-span-8`, `md:col-span-4`
- Text sizes: `text-4xl md:text-5xl`

### Mobile-First Approach
- Single column layout by default
- Sidebar cards stack below main content
- Navigation items may need wrapping or hamburger menu
- Maintain all border styling and spacing

## Page Structure Templates

### Homepage
```astro
<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
  <div class="md:col-span-8 border-l border-r border-dashed border-brand-text/10 px-8">
    <h1>Name</h1>
    <div class="space-y-4 text-brand-text/90 leading-relaxed">
      <!-- Bio paragraphs -->
    </div>
  </div>

  <div class="md:col-span-4 space-y-0">
    <!-- Status card -->
    <!-- Connect card -->
    <!-- Latest activity card -->
  </div>
</div>
```

### Blog Post
```astro
<div class="grid grid-cols-1 md:grid-cols-12 gap-8">
  <article class="md:col-span-8 border-l border-r border-dashed border-brand-text/10 px-8">
    <div class="space-y-4">
      <a href="/writing">← Back to writing</a>
      <h1>{title}</h1>
      <div class="border-l-2 border-dashed border-brand-text/20 pl-4">
        <time class="font-mono">{date}</time>
      </div>
    </div>
    <div class="prose">
      <!-- Content -->
    </div>
  </article>

  <div class="md:col-span-4 space-y-0">
    <!-- Key takeaways card -->
    <!-- Share card -->
    <!-- Related essays card -->
  </div>
</div>
```

## Interactive Elements

### Buttons/Links
```html
<a class="px-4 py-2 border border-dashed border-brand-text/20
         hover:border-brand-accent3 bg-brand-text/[0.01]
         hover:bg-brand-text/[0.02] transition-all text-sm">
  Button Text
</a>
```

### Social Links
```html
<a class="group flex items-center justify-between p-3
         border border-dashed border-brand-text/10
         hover:border-brand-text/20 transition-all">
  <span class="text-brand-text/70 group-hover:text-brand-text">Platform</span>
  <svg class="text-brand-text/40 group-hover:text-brand-text/70">...</svg>
</a>
```

### Icon Animations
```html
<svg class="group-hover:translate-x-1 transition-transform">...</svg>
```

## Accent Color Usage Guide

Distribute accent colors throughout the design for visual variety:
- **Green (accent3)**: Status indicators, CTAs, success states
- **Indigo (accent2)**: Section headers, primary accents
- **Cyan (accent5)**: Secondary accents, latest/new items
- **Purple (accent4)**: Tertiary accents, special features
- **Yellow (accent1)**: Highlights, warnings

## Technical Implementation

### Stack
- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS v4 with custom theme
- **Content**: Markdown with frontmatter (Astro Content Collections)
- **Font**: Inter (from Google Fonts or self-hosted)

### File Structure
```
src/
├── components/
│   ├── BaseHead.astro
│   ├── Navigation.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── writing/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   └── projects/
│       └── index.astro
├── content/
│   └── writing/
│       └── *.md
├── styles/
│   └── global.css
└── config.ts
```

### Global CSS Setup
```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #000000;
  --color-brand-text: #f2f2f2;
  /* ... other colors */
}

@layer base {
  * {
    border-color: #161618;
  }

  body {
    background-color: #000000;
    color: #f2f2f2;
    @apply antialiased;
  }

  ::selection {
    @apply bg-brand-text text-brand-primary;
  }
}
```

### Tailwind Config
```js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', /* ... */],
        mono: ['ui-monospace', 'SF Mono', /* ... */],
      },
    },
  },
};
```

## Design Principles Summary

1. **Brutalist Minimalism**: Raw, functional aesthetic with clear structure
2. **Dashed Borders Everywhere**: Creates visual rhythm and hierarchy
3. **Subtle Depth**: Use 1-2% background opacity for layering
4. **Accent Colors**: Strategic pops of color on otherwise monochrome design
5. **Consistent Grid**: 8-4 column split for all pages
6. **Micro-interactions**: Subtle hover states for engagement
7. **Typography Hierarchy**: Clear contrast between heading sizes and weights
8. **Responsive**: Mobile-first, stacks to single column
9. **Performance**: Static generation, minimal JavaScript
10. **Accessibility**: Sufficient contrast, semantic HTML, keyboard navigation

## Key Differentiators

What makes this design unique:
- Extensive use of dashed borders (not solid)
- Very subtle backgrounds (1-2% opacity, not 5-10%)
- Corner accent details on cards
- Rotated squares (diamonds) as section markers
- 3-dot status indicators with animation
- Consistent 8-4 grid split
- Monochromatic base with strategic accent colors
- Left-border accents on lists and metadata

---

**Result**: A distinctive, modern portfolio website with a brutalist-minimal aesthetic, featuring a sophisticated grid system, subtle interactions, and a cohesive design language throughout.