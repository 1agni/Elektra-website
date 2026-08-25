---
name: Brutalist Developer Experience
colors:
  surface: '#061327'
  surface-dim: '#061327'
  surface-bright: '#2d3a4f'
  surface-container-lowest: '#020e22'
  surface-container-low: '#0e1c30'
  surface-container: '#132034'
  surface-container-high: '#1d2a3f'
  surface-container-highest: '#28354b'
  on-surface: '#d6e3ff'
  on-surface-variant: '#c4c6d0'
  inverse-surface: '#d6e3ff'
  inverse-on-surface: '#243146'
  outline: '#8e9099'
  outline-variant: '#44474e'
  surface-tint: '#aec7f8'
  primary: '#aec7f8'
  on-primary: '#153058'
  primary-container: '#112d55'
  on-primary-container: '#7d95c3'
  inverse-primary: '#465f89'
  secondary: '#adc7ff'
  on-secondary: '#002e68'
  secondary-container: '#4a8eff'
  on-secondary-container: '#00285b'
  tertiary: '#f9b987'
  on-tertiary: '#4c2701'
  tertiary-container: '#492400'
  on-tertiary-container: '#c1895b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f8'
  on-primary-fixed: '#001b3e'
  on-primary-fixed-variant: '#2e4770'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc7ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#f9b987'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#673c15'
  background: '#061327'
  on-background: '#d6e3ff'
  surface-variant: '#28354b'
  background-deep: '#061428'
  surface-primary: '#112D55'
  action-blue: '#007BFF'
  text-white: '#FFFFFF'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system embodies a "hacker-chic" aesthetic, blending the raw, unapologetic energy of Neo-Brutalism with high-performance technical utility. It is designed specifically for developer tools, terminal emulators, and high-density data interfaces where precision and speed are paramount.

The brand personality is authoritative yet experimental. It rejects the softness of modern consumer SaaS in favor of hard edges, monospaced functional elements, and high-contrast layouts. The user experience should feel like operating a sophisticated piece of specialized machinery: efficient, transparent, and powerful. Whitespace is used not for "breathing room" in the traditional sense, but as a structural void to separate complex data clusters.

## Colors

The color strategy utilizes a "Deep Tech" palette. The core is built on `#061428`, a near-black navy that serves as the infinite canvas. This is layered with the primary seed color, `#112D55`, which defines structural surfaces and containers.

Interactive elements use a high-vibrancy `#007BFF` to cut through the dark atmosphere, providing clear affordance. Text is primarily `#FFFFFF` to ensure maximum readability against the dark backgrounds. The palette avoids gradients entirely, relying on flat, solid fills to maintain the brutalist, digital-first aesthetic.

## Typography

Typography is the primary differentiator in this design system. We pair **Syne**, an expressive and ultra-modern display face, with **JetBrains Mono**, a font designed specifically for developers.

**Syne** is reserved for high-impact moments—headlines, large stats, and section breaks. It should be set with tight tracking and leading to emphasize its geometric weight. 

**JetBrains Mono** handles all functional content. Its monospaced nature ensures that data tables, code blocks, and UI labels align perfectly to a vertical rhythm. All "Body" and "Label" styles use this typeface to maintain a consistent "hacker" feel across the entire experience.

## Layout & Spacing

The layout philosophy is based on a **rigorous 4px grid** and a **12-column fixed grid** for desktop environments. Content is organized into modular "blocks" that snap to this grid.

- **Desktop (1440px+):** 12 columns, 24px gutters, 48px side margins.
- **Tablet (768px-1024px):** 6 columns, 16px gutters, 24px side margins.
- **Mobile (320px-767px):** 2 columns, 12px gutters, 16px side margins.

Horizontal and vertical spacing must always be multiples of the 4px unit. Avoid fluid "centering" where possible; favor left-aligned layouts that feel like a document or terminal output.

## Elevation & Depth

This design system rejects soft shadows and ambient light. Depth is communicated through **Tonal Layering** and **Bold Outlines**.

1.  **Background:** `#061428` (The base).
2.  **Surface:** `#112D55` (For cards, sidebars, and panels).
3.  **Borders:** 1px or 2px solid borders using `#FFFFFF` at 20% opacity or `#007BFF` for focus states.

Instead of a shadow, use a "Hard Shadow" (an offset solid fill) for high-importance elements. For example, a button may have a 4px offset block of `#007BFF` behind it to simulate depth without using blurs.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. Every element—buttons, input fields, cards, and dropdowns—must have 90-degree corners. This reinforces the brutalist, architectural nature of the design. 

In rare cases where distinction is needed (such as a status dot), a perfect circle (pill-shaped) may be used, but all structural containers must remain rectangular.

## Components

### Buttons
- **Primary:** Solid `#007BFF` background, `#FFFFFF` text (JetBrains Mono Bold). Sharp corners. No transitions; state changes should be instant.
- **Ghost:** 1px solid `#FFFFFF` border, no background. Text `#FFFFFF`.
- **Active State:** On hover/click, shift the button 2px up and 2px left, revealing a solid black shadow beneath it.

### Input Fields
- **Default:** Transparent background, 1px solid `#112D55` border.
- **Focus:** 1px solid `#007BFF` border. Label sits above the field in `label-caps` style.
- **Cursor:** Use a block-style cursor (solid rectangle) for text inputs to mimic a terminal.

### Cards & Panels
- Background: `#112D55`. 
- Header: A top bar with a 1px solid bottom border, using `label-caps` for the title.
- Content: 16px padding on all sides.

### Chips / Tags
- Small, rectangular blocks with a solid `#061428` background and a 1px border. Use `body-sm` typography.

### Data Tables
- High-density. No vertical lines, only 1px horizontal dividers. Header row uses `#112D55` background and `label-caps` text. Cell text is strictly `code-snippet` style.