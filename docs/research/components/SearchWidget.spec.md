# SearchWidget Specification

## Overview
- **Target Component:** Incorporated directly in `src/app/page.tsx`
- **Screenshots:** `docs/design-references/desktop.png` (hero area)
- **Interaction Model:** Tab-switching (Flights vs Hotels), input suggestions dropdowns on focus, date selection, passenger popover.

## DOM Structure
- Main Container
  - Tab Switcher (Flights / Hotels buttons)
  - Search Form Grid
    - Trip Type Radios (One-Way / Round-Trip)
    - Origin input (with autocomplete dropdown)
    - Destination input (with autocomplete dropdown)
    - Departure date input
    - Return date input (only visible/active for Round-Trip)
    - Passenger Count selector dropdown
  - Submit (Search) Button

## Computed Styles
- **Primary Accent Color:** `#80D700` (Wego Green)
- **Background:** `#ffffff` (White card inside `#1a1a1a` dark hero section)
- **Fonts:** `Inter, sans-serif`
- **Border Radius:** `1.5rem` (3xl) for main container, `1rem` (xl) for inputs and dropdowns.

## Responsive Behavior
- **Desktop (1440px):** Inputs arranged in a single horizontal row grid.
- **Tablet (768px):** Inputs stack into a 2x2 grid.
- **Mobile (390px):** Stacks into a single column.
