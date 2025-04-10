# Branding Guidelines Report - Holtrop Coaching

## Executive Summary

This report outlines the comprehensive branding system for Holtrop Coaching, based on analysis of the website (https://holtropcoaching.com/). The design system emphasizes professionalism, trust, and tranquility while maintaining a modern aesthetic suitable for executive coaching services.

## 1. Color System Analysis

### Primary Color Palette (60%)

- **Navy Blue** (#1E3A8A)
  - Primary brand color representing professionalism and trust
  - Used for main navigation, headers, and key UI elements
  - Color scale:
    - 100: #EEF2FF (Light background)
    - 200: #E0E7FF
    - 300: #C7D2FE
    - 400: #A5B4FC
    - 500: #1E3A8A (Base)
    - 600: #1E40AF
    - 700: #1E3A8A
    - 800: #1E3B8A
    - 900: #1E3D8A

### Secondary Color Palette (30%)

- **Cool Gray** (#64748B)
  - Supporting neutral color for text and UI elements
  - Creates visual hierarchy and improves readability
  - Color scale matches existing branding.json:
    - 100: #F8FAFC
    - 200: #F1F5F9
    - 300: #E2E8F0
    - 400: #CBD5E1
    - 500: #94A3B8
    - 600: #64748B
    - 700: #475569
    - 800: #27272A
    - 900: #020617

### Accent Color Palette (10%)

- **Purple** (#6366F1)
  - Used for calls-to-action and interactive elements
  - Creates visual interest and highlights important actions
  - Color scale:
    - 100: #E0E7FF
    - 200: #C7D2FE
    - 300: #A5B4FC
    - 400: #818CF8
    - 500: #6366F1
    - 600: #4F46E5
    - 700: #4338CA

## 2. Supporting Colors

### System Feedback Colors

- Success: #22C55E (Green)
- Warning: #F59E0B (Amber)
- Error: #EF4444 (Red)
- Info: #3B82F6 (Blue)

## 3. Typography System

### Primary Font Family

- **Font**: "Crimson Pro"
- **Weights**:
  - Light (300)
  - Regular (400)
  - Medium (500)
  - Bold (700)
- **Usage**: Main headings, body text, and important content

### Secondary Font Family

- **Font**: "Inter"
- **Weights**:
  - Regular (400)
  - Medium (500)
- **Usage**: UI elements, navigation, buttons, and supporting text

### Typography Scale

- Display 1: 3rem (48px)
- Display 2: 2.25rem (36px)
- H1: 1.875rem (30px)
- H2: 1.5rem (24px)
- H3: 1.25rem (20px)
- H4: 1.125rem (18px)
- Body Large: 1.125rem (18px)
- Body Base: 1rem (16px)
- Body Small: 0.875rem (14px)
- Body XS: 0.75rem (12px)

## 4. Gradient System

### Primary Gradients

```css
/* Hero Section Gradient */
background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);

/* Card Gradient */
background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
```

### Secondary Gradients

```css
/* Subtle Background Gradient */
background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);

/* Accent Gradient */
background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
```

## 5. Component Guidelines

### Buttons

- Primary: Navy blue background (#1E3A8A) with white text
- Secondary: White background with navy blue border and text
- Accent: Purple background (#6366F1) with white text
- Border Radius: 0.375rem (6px)
- Padding: 0.5rem 1rem (8px 16px)

### Cards

- Background: White
- Border: 1px solid #E2E8F0
- Border Radius: 0.5rem (8px)
- Box Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- Padding: 1.5rem (24px)

### Form Elements

- Input Background: White
- Input Border: 1px solid #E2E8F0
- Focus Ring: 2px solid #6366F1
- Placeholder Text: #94A3B8
- Border Radius: 0.375rem (6px)

## 6. Implementation Notes

### React Component Examples

```jsx
// Button Component
<Button
  variant="primary"
  className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-4 py-2 rounded-md"
>
  Get Started
</Button>

// Card Component
<Card className="bg-white border border-secondary-200 rounded-lg shadow-md p-6">
  {children}
</Card>

// Input Component
<Input
  className="w-full px-4 py-2 border border-secondary-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
  placeholder="Enter your email"
/>
```

### CSS Variables Implementation

```css
:root {
  /* Colors */
  --primary-500: #1e3a8a;
  --secondary-500: #64748b;
  --accent-500: #6366f1;

  /* Typography */
  --font-primary: "Crimson Pro", serif;
  --font-secondary: "Inter", sans-serif;

  /* Spacing */
  --spacing-base: 1rem;
  --spacing-large: 1.5rem;

  /* Border Radius */
  --radius-base: 0.375rem;
  --radius-large: 0.5rem;
}
```

## 7. Accessibility Considerations

- Color contrast ratios meet WCAG 2.1 AA standards
- Typography scale ensures readable text at all sizes
- Interactive elements have clear focus states
- Semantic HTML structure recommended for all components

## 8. Version Control

- Version: 1.0.0
- Last Updated: March 2024
- Based on: https://holtropcoaching.com/
