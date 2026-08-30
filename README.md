# UDAAN — Your Next Opportunity Starts Here

> **A personalized next-opportunity navigator built for underprivileged youth, designed around real-world constraints: free-first learning, low mobile data consumption, and smartphone compatibility.**

---

## 🎯 Problem Statement
Many young people do not lack ambition — they lack clear, trustworthy, and accessible guidance about what to do next. Existing career platforms often overwhelm users with hundreds of expensive courses, internships, and opportunities without considering whether a learner can actually afford them, access them on a basic smartphone, or complete them with limited daily mobile data.

## 👥 Target Users
- **Underprivileged Youth & First-Generation Learners**: Young people with limited financial resources and zero budget for commercial bootcamps.
- **Mobile-First & Low-Connectivity Learners**: Users relying on daily 1.5GB mobile data packs or shared family smartphones.
- **Aspirants Seeking Next Steps**: Individuals seeking realistic, non-overwhelming 30-day action plans to get their first job, find an internship, win a scholarship, or learn a high-demand skill.

---

## 💡 The Solution
**UDAAN** acts as an empathetic, constraint-aware career navigator. Instead of flooding learners with unfiltered listings or complex AI chatbots, UDAAN asks simple, non-judgmental questions about their goals, daily available time, monthly budget, internet access, and device situation. 

It then synthesizes a concrete 4-week action plan called **"MY NEXT STEP"**:
1. **Week 1 (Discover)**: Free foundations & tool setup
2. **Week 2 (Learn)**: Guided exercises & core concept practice
3. **Week 3 (Build)**: Tangible portfolio project proof
4. **Week 4 (Launch & Apply)**: 1-Page resume & application submission

---

## 🚀 Key Features

### 1. Progressive Onboarding & Profile Synthesis
- Non-judgmental, multi-step flow capturing career interest, education level, daily available hours (1 hr, 2 hrs, 3–4 hrs, 5+ hrs), budget (₹0 Free Only, <₹500, etc.), internet data type, and primary device.
- State preservation across steps with full back/continue/edit capabilities.

### 2. "MY NEXT STEP" Action Roadmap
- Tailored 30-day milestone roadmap customized to the user's exact daily hours and device.
- Badged with **FREE**, **LOW DATA**, and **MOBILE FRIENDLY** indicators.
- Interactive task checklists synced directly with journey tracking.
- **Offline Save & Print Feature**: Download plain-text study guides or print formatted action plans for zero-data offline studying.

### 3. Opportunity Explorer
- Categorized discovery across **🎓 Scholarships**, **📚 Free Courses**, **🧑‍💻 Internships**, **💼 Entry-level Jobs**, **🧑‍🏫 Mentorship**, and **🛠️ Skill Programs**.
- Search and multi-criteria filters: Cost (Free, <₹500, Paid), Data Requirement (Low Data, Normal), Format (Online, Offline, Hybrid), Level (Beginner, Intermediate, Advanced), and Location (Online, Pan-India, Metro).
- **"GOOD FIT FOR YOU"** smart indicator highlighting opportunities that match the user's saved constraints.
- Clear demo data labeling for transparency.

### 4. "Can I Afford This?" Diagnostic & Free Alternatives
- Transparent assessment evaluating Cost, Data, Time, Device, Language, and Access.
- Empathetic diagnosis (**GOOD MATCH** vs **MAY NOT FIT**) that never shames the user (e.g. *"This option may not fit your current budget. Here are free alternatives."*).
- **Free-First Alternative**: When a paid course or high-data program is viewed, a 1-click 100% free community-supported alternative is provided.

### 5. "My Journey" Stage Tracker
- Visual journey progression: `YOU ARE HERE → Discover → Learn → Practice → Build → Apply`.
- **"NEXT ACTION FOCUS"** card emphasizing a single actionable step to avoid decision fatigue.
- Interactive progress percentage, completed milestones tracker, saved bookmarks, and private local learning notes scratchpad.

### 6. Accessibility & Localization
- **Multilingual Support**: English, हिन्दी (Hindi), and தமிழ் (Tamil) interface translations.
- **Text Sizing**: Default, Large (18px), and Extra Large (20px) base font scaling.
- **High Contrast Mode**: Thickened borders and maximum text contrast for sunlight readability on budget mobile screens.
- **Reduced Motion**: Respects `prefers-reduced-motion` and includes explicit toggle.
- **Ultra Low-Data Saver**: Strips non-essential elements to conserve mobile data packets.
- **Keyboard Navigation**: Complete Tab/Shift+Tab order, visible focus rings, aria labels, and skip-to-content links.

---

## 🎨 Visual Identity & Design System
- **Color Palette**:
  - *Warm Neutral Canvas*: `#FBF9F5` / `#F8F6F0` (calm, welcoming, non-glare)
  - *Deep Charcoal Body*: `#1A1E1C` (WCAG AAA contrast)
  - *Deep Forest Emerald*: `#1E513A` (trust, progress, growth)
  - *Warm Saffron / Amber*: `#D97706` (opportunity, action, optimism)
- **Typography**: Clean modern sans-serif (*Plus Jakarta Sans*) paired with elegant display accents.
- **No AI Clichés**: Strictly avoids purple/blue gradients, dark glassmorphism, floating card spam, or patronizing language.

---

## 🛠️ Technology Stack
- **Frontend Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with custom responsive utilities and accessibility attributes
- **Icons**: Lucide React
- **Build Tool**: Vite 6
- **Storage**: Client-side durable `localStorage` (offline-ready, zero tracking, privacy-first)

---

## 📂 Project Structure
```
├── /src
│   ├── /components
│   │   ├── Navbar.tsx                   # Responsive navigation & language switcher
│   │   ├── HeroSection.tsx              # Hero with journey path metaphor & constraints
│   │   ├── OnboardingModal.tsx          # Multi-step personalization wizard
│   │   ├── RoadmapView.tsx              # "MY NEXT STEP" 4-week roadmap & offline export
│   │   ├── OpportunityExplorer.tsx      # Searchable, filterable opportunity catalog
│   │   ├── OpportunityCard.tsx          # Opportunity card with "Good fit" & "Afford this?"
│   │   ├── AffordabilityModal.tsx       # "Can I Afford This?" diagnostic & free alternatives
│   │   ├── MyJourneyView.tsx            # Stage progress, next action card & scratchpad
│   │   ├── AccessibilitySettingsModal.tsx # Text scaling, contrast, motion & language
│   │   ├── InfoModal.tsx                # About & Privacy / Low-data transparency
│   │   └── Footer.tsx                   # Accessible footer with standards pledge
│   ├── /data
│   │   ├── opportunities.ts             # Realistic catalog with demo data disclaimers
│   │   └── translations.ts              # Translation dictionaries for EN, HI, TA
│   ├── /utils
│   │   ├── affordabilityChecker.ts      # Constraint evaluation engine
│   │   └── roadmapGenerator.ts          # 30-day constraint-aware roadmap engine
│   ├── App.tsx                          # Core application state & view routing
│   ├── main.tsx                         # DOM root mount
│   ├── types.ts                         # Domain models, enums & interfaces
│   └── index.css                        # Tailwind v4 theme, contrast & print styles
├── /index.html                          # Semantic HTML shell & font imports
├── /metadata.json                       # Applet configuration
├── /package.json                        # Dependencies and scripts
└── /README.md                           # Comprehensive documentation
```

---

## 💻 Running Locally

### Prerequisites
- Node.js 18+ or 20+
- npm

### Installation
```bash
# Clone the repository and navigate into directory
cd udaan

# Install dependencies
npm install

# Start development server
npm run dev
```
The application will start on `http://localhost:3000`.

### Building for Production
```bash
npm run build
```

---

## ♿ Accessibility Compliance Checklist
- [x] Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- [x] Visible focus rings on all interactive buttons and inputs.
- [x] Text scaling support up to 125% without layout breakage.
- [x] High contrast mode with solid black text and thick outlines.
- [x] Skip-to-content keyboard bypass link.
- [x] Screen-reader accessible labels (`aria-label`, `aria-labelledby`, `role="progressbar"`).
- [x] Zero information communicated by color alone (always paired with icon/text).

---

## 🔒 Privacy & Low-Data Commitment
- **Zero Third-Party Trackers**: No advertising scripts, analytics cookies, or behavioral telemetry.
- **Local-First**: All user inputs, completed milestones, and notes remain in the user's browser.
- **Offline Save**: Action plans can be exported as plain `.txt` files or printed, allowing offline study without internet recharges.

---

## 📄 License
This project is licensed under the Apache 2.0 License. Built for inclusive career advancement and youth empowerment.
