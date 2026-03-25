# Solfoundary Assignment

A multi-step onboarding flow for **Sol**, built with React, TypeScript, and Tailwind CSS. The UI walks a new user through a 3-step wizard that summarizes their Slack activity — messages analyzed, collaboration insights, and open loops — with coordinated fade/stagger animations between steps.

## Tech Stack

- **React 19** with TypeScript (strict mode)
- **Vite 8** for development and bundling
- **Tailwind CSS v4** (Vite plugin, `@theme` design tokens)
- **ESLint** with React hooks and refresh plugins

## Project Structure

```
src/
├── components/
│   ├── icons/          # SVG icon components + icon sprite registry
│   ├── modules/
│   │   └── onboarding/ # Onboarding flow, card, insights, segments
│   └── ui/             # Reusable primitives (Button, Card)
├── data/
│   └── onboardingConfig.ts  # Step content & config
├── App.tsx
├── main.tsx
└── index.css           # Tailwind theme, keyframes, animation utilities
```

## Architecture

```
OnboardingFlow (state machine: step, textExiting, enterNonce, ctaReady)
├── OnboardingCard (coordinates entrance/exit animations)
│   ├── CardContent (Sol logo + staggered title/subtitle reveal)
│   ├── AnalyzedSoFar (step 2: message/thread/channel counts)
│   ├── Insights (step 3: collaboration & open loop rows)
│   └── Notes (step 3: footer summary text)
└── CtaFooter (deferred-unmount pattern for fade-out on click)
```
Deployed link: https://sol-foundary-assignment.vercel.app/
https://github.com/user-attachments/assets/5c456885-7e19-4d32-b91d-45df98769a73

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```
