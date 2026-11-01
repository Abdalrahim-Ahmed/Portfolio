# PHASE 1 — UI/UX SKILLS RESEARCH & METHODOLOGY

**Document:** `docs/audits/SKILL_RESEARCH.md`  
**Purpose:** Extraction and synthesis of 15 UI/UX design frameworks into a unified evaluation matrix.

---

## 1. Skill Inventory & Research Matrix

| # | Resource Name & Repository | Availability | Documentation Inspected | Core Principles Extracted | Applicability to Current Portfolio |
| :- | :--- | :--- | :--- | :--- | :--- |
| **1** | **UXCraft — Complete UX/UI Guidelines**<br>`Seance1723/UXCraft` | Accessible via verified open-source documentation | Multi-role pipeline specification, discovery workflows, design system standards | • Holistic multi-perspective audits<br>• Systemic component hierarchy<br>• Preservation of underlying business logic | High: Serves as the overarching governance model for this portfolio audit. |
| **2** | **UX/UI Design System Guidelines**<br>`plugin87/ux-ui-agent-skills` | Accessible (XIAS Suite) | DTCG token architecture, WCAG 2.2 AA standards, component specifications | • Strict token-to-utility mapping<br>• Objective accessibility acceptance gates<br>• Scalable component variants | Critical: Applied directly to Tailwind token structure and semantic tokens. |
| **3** | **UI/UX Skills Collection**<br>`taylorwinfield/ux-ui-skills` | Accessible via published agent modules | Root architecture for anti-slop, design-grounded interface creation | • Rejection of generic template output<br>• Intentional aesthetic decisions rooted in subject matter | High: Directly guards against generic AI layouts in the portfolio presentation. |
| **4** | **Bootstrapping Design Context**<br>`.../bootstrapping-design-context` | Accessible | Context extraction, persona identification, problem bounding | • Establish user intent before touching styles<br>• Respect existing project persona (Senior Web Designer & UI/UX Creator) | High: Prevents arbitrary redesign; anchors every fix in the designer persona. |
| **5** | **Grounding Before Designing**<br>`.../grounding-before-designing` | Accessible | Domain grounding, visual tone calibration, brand identity anchors | • Align visual grammar with real-world artifacts (e.g. shirt blue, warm wood, studio lighting) | High: Direct validation of the user's custom photo-extracted palette. |
| **6** | **Design Judgment References**<br>`.../design-judgment-references` | Accessible | Design heuristics, typographic scale mathematics, optical balancing | • Proportionate information density<br>• Optical alignment over mathematical centering where needed | High: Evaluates Hero cutout alignment, stats layout, and modal proportions. |
| **7** | **Flow Doc First**<br>`.../flow-doc-first` | Accessible | User journey mapping, task completion paths, friction triage | • Map end-to-end task flows<br>• Zero dead-ends or unguided interactions | High: Used to audit Project Review Flow, Contact Submission Flow, and Theme Switch Flow. |
| **8** | **Designing States Not Screens**<br>`.../designing-states-not-screens` | Accessible | "Fab 5" State Matrix (Default, Loading, Empty, Error, Success) | • An interface is a state machine, not a static poster<br>• Explicit visual feedback for every user action | Critical: Audits interactive forms, image loaders, modal transitions, and button states. |
| **9** | **Visual Hierarchy & Typography**<br>`.../visual-hierarchy-and-type` | Accessible | Typographic scales, optical leading, tracking rules, weight ratios | • High contrast between display and body copy<br>• Strict line-length limits (45–75 chars)<br>• Coherent heading scales | High: Directly governs Bebas Neue, Plus Jakarta Sans, and Caveat font relationships. |
| **10** | **Interaction Craft**<br>`.../interaction-craft` | Accessible | Micro-interaction physics, timing curves, focus rings, hover lift | • Responsive hover feedback (150–250ms)<br>• Visible focus states for keyboard navigation<br>• Active touch depression | High: Applied to card lift, button press, modal backdrop dismiss, and icon pills. |
| **11** | **Precision Copy & Formatting**<br>`.../precision-copy-and-formatting` | Accessible | Micro-copy standards, case rules, punctuation, scannability | • Consistent casing (sentence vs title vs uppercase)<br>• Direct, actionable CTA labels<br>• Error messaging clarity | Medium: Audits project metadata, modal form labels, and footer copy. |
| **12** | **Grilling UI — UX Review**<br>`.../grilling-ui` | Accessible | Stress-testing viewport limits, extreme data, zoom (200%), keyboard only | • Mobile viewport stress (320px–375px)<br>• Keyboard tab traps and focus escape<br>• Content truncation handling | Critical: Stress-tests mobile hero, project grid stacking, and modal viewports. |
| **13** | **Anti-Slop UI Audit**<br>`.../anti-slop-audit` | Accessible | Anti-AI-fingerprint heuristics, removal of gratuitous glassmorphism | • Eliminate arbitrary blur layers that harm readability<br>• Remove repetitive 3-box clone layouts lacking internal variation<br>• Ground all shadows and colors | Critical: Refines ambient glows, removes gratuitous backdrop blurs, sharpens card contrast. |
| **14** | **Redesign & UX Audit**<br>`plugin87/.../redesign` | Accessible | Audit-first, behavior-preserving remediation protocol | • Do not modify code during audit<br>• Classify findings by severity<br>• Verify regression safety post-implementation | Critical: The structural blueprint for Phase 2, Phase 3, and Phase 5 execution. |
| **15** | **UI Design & Visual QA**<br>`mblode/.../ui-design` | Accessible | Visual QA checklists, Tailwind CSS token alignment, dark/light parity | • Full dark/light mode semantic parity<br>• Eliminate hardcoded hex values in favor of tokens<br>• Pixel-aligned grid systems | Critical: Audits dark/light mode balance and Tailwind token consistency. |

---

## 2. Consolidated Audit Framework

By synthesizing these 15 resources, we establish a **Unified 6-Pillar Quality Standard**:

```
                       ┌───────────────────────────────────────────────┐
                       │     PORTFOLIO UI/UX AUDIT & REMEDIATION       │
                       └───────────────────────┬───────────────────────┘
                                               │
       ┌───────────────────┬───────────────────┼───────────────────┬───────────────────┐
       ▼                   ▼                   ▼                   ▼                   ▼
1. Visual Hierarchy 2. Interaction Craft  3. Accessibility   4. State Integrity  5. Responsive Resilience
  • Typographic scale • Physics & timing    • WCAG 2.2 AA      • Default / Hover   • 320px to 1440px
  • Token-based colors• Touch targets ≥44px • Focus visibility • Error / Success   • Zero horizontal scroll
  • Anti-slop polish  • Keyboard navigable • Contrast ≥ 4.5:1 • Loading / Empty   • Optical alignment
```
