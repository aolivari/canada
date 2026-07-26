---
name: Pistachio & Earth
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#42493c'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#73796b'
  outline-variant: '#c2c9b8'
  surface-tint: '#3d6922'
  primary: '#3d6922'
  on-primary: '#ffffff'
  primary-container: '#93c572'
  on-primary-container: '#27520b'
  inverse-primary: '#a2d580'
  secondary: '#77574d'
  on-secondary: '#ffffff'
  secondary-container: '#fed3c7'
  on-secondary-container: '#795950'
  tertiary: '#a43c12'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff9e7c'
  on-tertiary-container: '#842800'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bdf199'
  primary-fixed-dim: '#a2d580'
  on-primary-fixed: '#092100'
  on-primary-fixed-variant: '#26500a'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#e7bdb1'
  on-secondary-fixed: '#2c160e'
  on-secondary-fixed-variant: '#5d4037'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59c'
  on-tertiary-fixed: '#380c00'
  on-tertiary-fixed-variant: '#822800'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Epilogue
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Epilogue
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  container-max: 1280px
---

## Brand & Style

The design system is built on the concept of "Joyful Organization." It balances the high-density information requirements of a travel itinerary with a warm, organic, and "coqueto" personality. The goal is to make the planning process feel as restorative and exciting as the trip itself.

The aesthetic blends **Modern Minimalism** with **Tactile/Organic** elements. It rejects clinical sharp edges in favor of generous curves and soft transitions. The personality is approachable, optimistic, and grounded, evoking the feeling of a well-kept travel journal or a boutique hotel concierge. 

The target audience is the organized traveler who seeks inspiration without the stress of cluttered spreadsheets. The UI should feel like a "Cheerful Dashboard"—structured enough to handle complex flight and hotel data, but soft enough to encourage exploration and dreaming.

## Colors

The palette is inspired by a sun-drenched Mediterranean garden. 

- **Primary (Pistachio Green):** Used for main actions, active states, and success indicators. It provides a fresh, energetic spark to the dashboard.
- **Secondary (Earthy Brown):** Used for primary text, navigation headers, and grounding structural elements. It prevents the design from feeling "childish" by adding a layer of sophisticated warmth.
- **Accents (Coral & Sunny Yellow):** Coral (#FF7F50) is used for high-interest call-to-outs (like "Book Now" or "New Trip"). Sunny Yellow (#FFD54F) is used for decorative highlights and secondary alerts.
- **Neutral (Soft Cream):** The primary background color is #FDFBF7. Avoid pure white (#FFFFFF) to maintain the cozy, "paper-like" feel of the system.

## Typography

This design system utilizes a pairing of **Epilogue** for headings and **Plus Jakarta Sans** for body and data.

**Epilogue** provides a contemporary, geometric, and slightly quirky personality that fits the "coqueto" vibe. It should be used for large titles and section headers to inject character.

**Plus Jakarta Sans** is used for all functional data. Its soft, rounded terminals maintain the friendly aesthetic while ensuring that dense itinerary details—like flight times and confirmation numbers—remain highly legible and professional.

For a personal touch, decorative sub-headers or "editor's notes" may use a secondary style (Italic weight of Epilogue) to simulate a travel journal feel.

## Layout & Spacing

The layout follows a **Fluid Grid** with generous inner padding to prevent the "data-rich" nature of an itinerary from feeling cramped.

- **Rhythm:** An 8px base unit drives all spacing. 
- **The Dashboard:** Use a sidebar-driven layout for desktop. The main content area should utilize "Cards" to separate different travel days or categories (Flights, Lodging, Activities).
- **Margins:** Large external margins (40px on desktop) create a "canvas" effect, making the app feel like a premium tool rather than a basic utility.
- **Mobile:** On mobile, the grid collapses to a single column with 16px side margins. Cards should span the full width of the viewport minus the margins to maximize readability.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows** rather than stark borders.

- **Surface Levels:** The base background is the Soft Cream. Elements placed on top (like itinerary cards) use pure white (#FFFFFF) to pop forward.
- **Shadows:** Use extremely soft, diffused shadows with a slight tint of Earthy Brown (#5D4037 at 8% opacity). This creates a "lifted paper" effect that is tactile and warm.
- **Interactive Depth:** When a user hovers over an interactive element (like a destination card), the shadow should expand slightly and the element should scale up (1.02x) to provide a "squishy," responsive feel.

## Shapes

The shape language is the core of the "coqueto" charm. All UI elements should feel soft and touchable.

- **Radii:** Use a high base roundedness (16px/1rem). Larger containers like itinerary cards or image modules should use `rounded-xl` (48px/3rem) to emphasize the organic, friendly nature of the brand.
- **Organic Accents:** Occasionally use non-symmetrical "blob" shapes for background decorations or photo masks to break the rigidity of the dashboard grid.
- **Iconography:** Use thick-stroke (2px), rounded-end icons. Avoid sharp icons or thin, technical lines.

## Components

- **Buttons:** Primary buttons use a pill-shape (full rounded) with the Pistachio Green background and Earthy Brown text. They should have a subtle 3D-press effect on click.
- **Itinerary Cards:** These are the hero components. They feature a large 24px corner radius, a soft Earthy Brown shadow, and a "Coral" accent tab for the date or status.
- **Chips & Tags:** Used for categorization (e.g., "Food," "Hiking," "Relax"). These should be semi-transparent versions of the accent colors with dark brown text.
- **Input Fields:** Use a Soft Cream background and a thick 2px border that turns Pistachio Green on focus. Labels should be in the "label-md" Earthy Brown style.
- **Progress Trackers:** For multi-day trips, use a "Sun" icon that moves along a dotted path, reinforcing the playful travel theme.
- **Lists:** Lists should be separated by soft, dashed lines (Earthy Brown at 10% opacity) rather than solid lines to keep the interface light and airy.