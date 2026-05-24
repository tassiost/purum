---
name: Monolith Industrial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b6b5b4'
  tertiary: '#ffffff'
  on-tertiary: '#303031'
  tertiary-container: '#e3e2e2'
  on-tertiary-container: '#646464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e4e2e1'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 88px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.05em
spacing:
  margin-desktop: 64px
  margin-mobile: 24px
  gutter: 32px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is rooted in the **Industrial Techno Minimalist** movement. It is characterized by a "Dark Professionalism" that feels cold, precise, and uncompromising. The aesthetic draws heavily from the raw architecture of Berlin's underground music scene and high-end brutalist web design.

The UI should evoke a sense of focused intensity. It is designed for users who value structural efficiency over decorative flourish. The visual mood is established through extreme contrast, significant negative space, and a rejection of traditional "soft" UI trends. The admin panel maintains this DNA, shifting toward a more utilitarian and data-dense application of the same cold, industrial principles.

## Colors
The palette is strictly monochromatic to maintain an industrial, high-contrast atmosphere. 
- **Absolute Black (#000000):** The primary canvas. Used for all backgrounds to create depth and focus.
- **Stark White (#FFFFFF):** Used for primary text, focal borders, and critical action buttons.
- **Muted Gray (#333333):** Used for secondary structural elements, surface borders, and disabled states.
- **Mid-Gray (#808080):** Reserved for metadata and secondary labels to create typographic hierarchy without introducing color.

In the admin panel, these colors are used to delineate sections through thin 1px borders rather than solid blocks, preserving the dark, professional aesthetic.

## Typography
Typography is the primary driver of the design system's character. 
- **Headlines:** Use Hanken Grotesk for its sharp, neo-grotesque geometry. Large headlines should feature generous tracking (letter-spacing) to feel expansive and cinematic.
- **Body:** Hanken Grotesk remains the workhorse for readability, keeping the UI modern and clean.
- **Technical Accents:** JetBrains Mono is utilized for labels, buttons, and data points within the admin panel. This monospaced font reinforces the "industrial" and "technical" narrative.
- **Styling:** Headings should often be transformed to `uppercase` when used as navigational markers or section titles to enhance the brutalist feel.

## Layout & Spacing
This design system utilizes an **Asymmetric Brutalist Grid**. 
- **Philosophy:** Content is not always centered. Use significant negative space (Section Gaps) to force focus onto specific imagery or text blocks. 
- **Desktop:** A 12-column fluid grid with wide margins (64px). Elements should often be offset (e.g., a headline starting on column 2 while the body starts on column 5).
- **Admin Panel:** Transitions to a structured **Fixed Grid** to manage data density. Vertical spacing is tightened, but horizontal "breathability" is maintained through generous gutters.
- **Mobile:** Elements reflow to a single column, maintaining a 24px safety margin. Large display type scales down aggressively to ensure legibility without losing impact.

## Elevation & Depth
Depth is created through **Tonal Layers and Bold Borders** rather than shadows.
- **Flat Surface:** All elements sit on the same #000000 plane.
- **Structural Outlines:** Use 1px stark white or muted gray borders to define containers. This creates a "blueprint" or "industrial diagram" feel.
- **No Shadows:** Avoid drop shadows entirely. To show hover states or active layers, use a solid white fill (inverting the text to black) or increase border weight from 1px to 2px.
- **Photography:** Images should be treated with high contrast and grain filters, acting as the "texture" of the design system, often bleeding edge-to-edge or positioned asymmetrically to break the grid.

## Shapes
The shape language is strictly **Sharp (0px)**. 
There are no rounded corners in this design system. Every button, input field, card, and image container must have 90-degree angles. This reinforces the rigid, industrial, and architectural nature of the brand.

## Components
- **Buttons:** High-contrast rectangles. Default state is a white 1px border with white text. Hover state is a solid white fill with black text. No transitions or easing—actions should feel instant and mechanical.
- **Input Fields:** Bottom-border only (#333333) for a minimalist look, or a full 1px box for the admin panel. Use JetBrains Mono for input text.
- **Navigation:** Horizontal list with generous spacing. Use `uppercase` label-md. Active links are indicated by a simple strike-through or a 1px underline.
- **Chips/Tags:** Sharp-edged boxes with JetBrains Mono text. Used sparingly for categorization in the admin panel.
- **Cards:** Defined by a 1px #333333 border. No background fill change unless hovered.
- **Lists:** Clean rows separated by 1px horizontal lines. In the admin panel, use alternating subtle tints (#050505 / #000000) for row readability if data density is high.
- **Photography Containers:** High-grain, high-contrast images. Use "Object-fit: cover" with sharp edges. Black and white imagery is preferred to maintain the palette.