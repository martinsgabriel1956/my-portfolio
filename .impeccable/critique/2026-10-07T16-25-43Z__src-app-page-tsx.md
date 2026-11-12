---
target: portfolio homepage
total_score: 16
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
target_identity: "file:/home/gabriel-martins/Documentos/development/my-portfolio/src/app/page.tsx"
target_fingerprint: "sha256:04ef180b024c73a0b34334f1b15a01202e8d4bb00463fdae1324f84856681e37"
target_path: /home/gabriel-martins/Documentos/development/my-portfolio/src/app/page.tsx
timestamp: 2026-10-07T16-25-43Z
slug: src-app-page-tsx
---
Method: dual-agent

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Typewriter H1 blank on load; no active nav section; no loading states |
| 2 | Match System / Real World | 2 | US-format dates on pt-BR site; freelance framing vs full-time role |
| 3 | User Control and Freedom | 2 | Nav is buttons not hash links: no deep link/back |
| 4 | Consistency and Standards | 2 | Badge styles differ per section; hover on non-interactive cards; eyebrow repeats H2 |
| 5 | Error Prevention | 2 | DB awaited in render, no empty guards, sequential queries |
| 6 | Recognition Rather Than Recall | 3 | 7 unnamed icon controls |
| 7 | Flexibility and Efficiency | n/a | Read-only portfolio |
| 8 | Aesthetic and Minimalist Design | 2 | ~81 chips, GitHub x5, orbs everywhere |
| 9 | Error Recovery | 1 | No error.tsx/loading.tsx; DB failure = whole-site 500 |
| 10 | Help and Documentation | n/a | Portfolio |
| Total | | 16/32 | Acceptable |

## Design Specificity Verdict
Category-interchangeable 2024 dark dev-portfolio template (orbs+grid, typewriter, availability pill, gradient last-word H2s, zig-zag timeline, icon card grid, agency CTA). Real project content buried in half-width grey cards. Detector: 1 finding, gradient-text at src/app/globals.css:137, rendered in 7 places. Overlay unavailable (browser pane blocks localhost from public https: ERR_BLOCKED_BY_CLIENT; no DATABASE_URL locally).

## Priority Issues
- [P0] DB failure takes down whole site; no error/loading/empty states. Fix: Suspense per section, actions catch -> [], Promise.all in education. /impeccable harden
- [P1] US date format: experience-card/index.tsx:48, useExperienceCard.ts:11. Fix: toLocaleDateString("pt-BR", {month:"short", year:"numeric"}). /impeccable clarify
- [P1] A11y: 7 unlabeled controls (hero 108-140, footer 15-36), no <main>/skip link, typewriter H1, no reduced-motion, CTA contrast ~2.5-3:1. /impeccable audit
- [P1] Work doesn't lead: half-width zig-zag (experience/index.tsx:41-42), no project links/images, credentialUrl unrendered, 13-badge clouds. /impeccable layout, /impeccable bolder
- [P2] Mobile timeline dot right-0 (experience/index.tsx:48); hero chevron collision; JetBrains Mono not applied (globals.css:130). /impeccable polish

## Persona Red Flags
Jordan: blank H1, availability vs full-time mixed signal, no seniority/location/CV, dates re-read.
Sam: unnamed links, no skip link, nav focus not moved, 17 headers, contrast.
Casey: 36/33/20px targets, sheet lacks email/phone, ~8,900px scroll, public phone.

## Minor Observations
Badge div with focus/hover styles; EducationCard "undefined" end date; OG image /.github/banner.png not served; roleInterval unmount leak; dead code (education/utils.ts, handleOpenMenu, chart/sidebar tokens); duplicate email actions; 350ms sheet stagger.

## Questions to Consider
- What on the page says Gabriel if the name is covered?
- Hiring managers or freelance clients?
- What does a DB buy over typed JSON for twice-a-year content?
