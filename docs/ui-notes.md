# AthletiQ UI/UX Design Notes

## Design System Reference

### Color Palette

#### Primary Colors
- **Primary Green**: `#4ADE80` - Used for active states, success, CTA buttons
- **Secondary Green**: `#22C55E` - Hover states, enhanced interaction
- **Accent Green**: `#16A34A` - Pressed states, deep interactions

#### Background Colors
- **Primary BG**: `#0B0F14` - Main app background
- **Secondary BG**: `#121821` - Cards, elevated content
- **Tertiary BG**: `#1A1F2E` - Inputs, disabled states

#### Text Colors
- **Primary Text**: `#F8FAFC` - Main content, headings
- **Secondary Text**: `#94A3B8` - Labels, secondary content
- **Tertiary Text**: `#64748B` - Hints, disabled text

#### Status Colors
- **Success**: `#4ADE80` - Good metrics
- **Warning**: `#FACC15` - Attention needed
- **Danger**: `#EF4444` - Critical alerts

### Typography

#### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
```

#### Sizes
- **4XL**: 32px - Main hero titles
- **3XL**: 28px - Large headings
- **2XL**: 24px - Section titles
- **XL**: 20px - Card titles
- **LG**: 18px - Subheadings
- **Base**: 16px - Body text
- **SM**: 14px - Labels, captions
- **XS**: 12px - Micro text

#### Weights
- **Light**: 300 - Accents, subtle text
- **Normal**: 400 - Body text
- **Medium**: 500 - Labels
- **Semibold**: 600 - Headings
- **Bold**: 700 - Strong emphasis

### Spacing System

Based on 4px baseline:
- **xs**: 4px
- **sm**: 8px
- **md**: 12px
- **lg**: 16px
- **xl**: 20px
- **2xl**: 24px
- **3xl**: 32px
- **4xl**: 40px

### Shadows

- **sm**: `0 2px 8px rgba(0, 0, 0, 0.3)` - Cards, subtle depth
- **md**: `0 4px 16px rgba(0, 0, 0, 0.4)` - Hover states
- **lg**: `0 8px 32px rgba(0, 0, 0, 0.5)` - Modals, prominent elements

### Border Radius

- **sm**: 8px - Input fields, badges
- **md**: 12px - Buttons, small cards
- **lg**: 16px - Main cards, sections
- **xl**: 20px - Large cards
- **2xl**: 24px - Special elements

### Transitions

- **fast**: 150ms - Micro-interactions
- **base**: 250ms - Standard transitions
- **slow**: 350ms - Page transitions

## Component Guidelines

### Cards

**Purpose**: Container for related content

**States**:
- Default: Background `#121821`, border `#1E293B`
- Hover: Border lightened, shadow increased
- Active: Green border, slight background tint

**Spacing**: lg padding, md gaps between content

**Examples**:
- Metric cards (4 per row on large screens, 2 on mobile)
- Recovery cards (full width, stacked)
- Timeline event cards

### Buttons

**Primary Button**
- Background: `#4ADE80`
- Text: `#0B0F14` (dark text on green)
- Hover: `#22C55E`
- Pressed: `#16A34A`

**Secondary Button**
- Background: `#1A1F2E`
- Border: `#334155`
- Text: `#F8FAFC`
- Hover: Border lighten, background darken

**Ghost Button**
- Background: Transparent
- Text: `#4ADE80`
- Hover: Background `rgba(74, 222, 128, 0.1)`

**Size Variants**:
- **sm**: 8px 12px
- **base**: 12px 16px (default)
- **lg**: 16px 20px

### Input Fields

**Base Style**:
- Background: `#121821`
- Border: `#1E293B`
- Text: `#F8FAFC`
- Placeholder: `#64748B`
- Radius: 8px
- Padding: 12px 16px

**Focus State**:
- Border: `#4ADE80`
- Box-shadow: `0 0 0 3px rgba(74, 222, 128, 0.1)`

**Validation**:
- Error: Border `#EF4444`, text `#EF4444`
- Success: Border `#4ADE80`, text `#4ADE80`

### Badges

**Sizes**:
- Default: 14px font, 4px 8px padding
- sm: 12px font, 2px 6px padding

**Variants**:
- Default: Gray background
- Success: Green background, green text
- Warning: Yellow background, yellow text
- Danger: Red background, red text

### Navigation

**Bottom Navigation**:
- Fixed at bottom of screen
- Safe area support (iPhone notch)
- Icon + Label for clarity
- Active item highlighted in green
- 5 items max (dashboard, timeline, recovery, regimen, profile)

**Header**:
- Sticky at top
- Title on left
- Actions (settings, notifications) on right
- Safe area support
- Border-bottom for separation

## Animation Principles

### Entrance Animations
- **fade-in-up**: 250ms - Cards, sections appear
- **slide-in-left**: 250ms - Page transitions left to right
- **scale-in**: 250ms - Modal or menu appearance

### Hover Effects
- **lift**: translateY(-2px) + shadow increase
- **scale**: scale(1.02)
- **brighten**: brightness(1.1)

### Micro Interactions
- **pulse**: Emphasis on important elements
- **bounce**: Subtle emphasis
- **glow**: Green animation for success states

### Principles
- Keep animations <300ms for snappiness
- Use easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Disable animations for users with motion preference
- Animations should enhance, not distract

## Responsive Design Breakpoints

```css
/* Mobile-first */
0px - 640px      /* Mobile (default) */
641px - 1024px   /* Tablet */
1025px+          /* Desktop */

/* Orientation */
@media (orientation: landscape)
@media (orientation: portrait)

/* Touch devices */
@media (hover: none) and (pointer: coarse)
```

## Accessibility

### Color Contrast
- Minimum 4.5:1 ratio for normal text
- Minimum 3:1 ratio for large text

### Touch Targets
- Minimum 44x44px on mobile
- Minimum 48x48px for action buttons

### Typography
- Line-height: 1.5 minimum for readability
- Font-size: 16px minimum (prevents iOS zoom)

### Keyboard Navigation
- Focus states clearly visible
- Tab order logical
- Skip links for repeated content

### Screen Readers
- Semantic HTML
- ARIA labels where needed
- Alt text for images

## Dark Mode

Primary implementation since day one:
- Reduces eye strain for early morning users
- Battery efficient on OLED screens
- Premium aesthetic
- Aligns with athletic, technical vibe

### Dark Mode Specifics
- Avoid pure black (`#000000`) - use `#0B0F14`
- Softer shadows on dark backgrounds
- Slightly increased text contrast
- Subtle green accents pop more

## Performance Targets

- **First Contentful Paint**: <1s
- **Largest Contentful Paint**: <2s
- **Cumulative Layout Shift**: <0.1
- **Animation FPS**: 60fps
- **Input Response**: <100ms

## State Indicators

### Loading
- Shimmer animation on card skeletons
- 2s animation loop
- Pulse effect on specific elements

### Success
- Green checkmark or badge
- "Snack" toast message
- Pulse animation on success element

### Error
- Red border/background
- Error message below field
- Shake animation (subtle)

### Empty State
- Large icon (48px+)
- Headline
- Description
- Optional CTA

## Mobile Considerations

### iPhone X+ Notch Handling
- `padding-top: max(12px, env(safe-area-inset-top))`
- `padding-bottom: max(12px, env(safe-area-inset-bottom))`
- Bottom nav accounts for home indicator

### Android Considerations
- Account for navigation bar
- Handle keyboard covering inputs
- Respect system dark mode
- Test on various screen sizes

### General Mobile
- Prevent viewport zoom on input focus (font-size: 16px)
- Remove 300ms tap delay
- Optimize touch targets for outdoor visibility
- Test on real devices, not just browsers

## Design Tokens Export

CSS Variables provide flexibility:
```css
--color-primary-green: #4ADE80
--spacing-lg: 16px
--radius-md: 12px
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4)
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1)
```

Easy to update globally without code changes.
