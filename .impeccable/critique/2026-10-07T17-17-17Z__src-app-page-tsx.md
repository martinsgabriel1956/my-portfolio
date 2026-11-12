---
target: portfolio homepage
total_score: 25
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 2
target_identity: "file:/home/gabriel-martins/Documentos/development/my-portfolio/src/app/page.tsx"
target_fingerprint: "sha256:7ecf7d73e0de1b179a26055a5b2fc5cfe4bff3bbf536ab2bfe45151f5b2a3773"
target_path: /home/gabriel-martins/Documentos/development/my-portfolio/src/app/page.tsx
timestamp: 2026-10-07T17-17-17Z
slug: src-app-page-tsx
---
Method: dual-agent. Rendered locally with fixture data copied from the production DB.

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Desktop active section ok; no mobile signal; no new-tab cue |
| 2 | Match System / Real World | 3 | Natural pt-BR; mono "jun. de 2025" clunky |
| 3 | User Control and Freedom | 3 | Anchors keep back; hero mailto fires client silently |
| 4 | Consistency and Standards | 3 | Button focus ring vs link outline; nav labels != headings |
| 5 | Error Prevention | 2 | Hero primary CTA bare mailto |
| 6 | Recognition Rather Than Recall | 3 | Sticky company column desktop only |
| 7 | Flexibility and Efficiency | 3 | Skip link, anchors, CV; no copy-email |
| 8 | Aesthetic and Minimalist Design | 3 | Duplicated footer links, filler subtitle, long cert blurbs |
| 9 | Error Recovery | 2 | No mailto fallback; CV 404 until file ships |
| 10 | Help and Documentation | n/a | Portfolio |
| Total | | 25/36 | Acceptable (69%) |

## Design Specificity Verdict
Competent but category-interchangeable minimal dev portfolio; now errs plain: color has almost no job (orange used once), only memorable moment is the closing email. Detector: CLI clean; browser 3x line-length (87-94 chars) on project descriptions, src/app/_components/experience/index.tsx:53 (max-w-prose too wide in Outfit). Overlay injected in [Human] tab.

## Priority Issues
- [P1] Button focus nearly invisible: button.tsx:8 outline-none + ring-ring/50 (~2:1). Remove to let global :focus-visible apply. /impeccable audit
- [P1] No hierarchy peak: h2 60px vs project names 18px; GTech not featured; color without a job. Demote h2, feature lead project, domain tags with existing tokens. /impeccable typeset, /impeccable colorize
- [P2] Experience description line length 87-94 chars: max-w-prose -> ~max-w-[34rem]. /impeccable typeset
- [P2] Education dominates the end (1,539px mobile): cut subtitle, one-line certs, cap list. /impeccable distill
- [P2] Fragile contact: hero bare mailto, contact email 27px tall on mobile, sheet focus returns to trigger. /impeccable harden, /impeccable adapt

## Persona Red Flags
Jordan: compute tenure, visible gap, no company descriptors, CTA may open nothing.
Sam: ~2:1 button focus, focus back to top after sheet nav, no new-tab cue.
Casey: menu top-right, ~7 screens no back-to-top, education before contact, 27px email link.

## Minor Observations
Footer duplicates contact links; mono date format; uniform py-24 rhythm; sheet links lack aria-current; OG image fine.

## Questions to Consider
- Why is proof organized by employer, not by the three promised domains?
- What would you cut to fit four phone screens?
- What is the one authored-from-facts detail only this portfolio could have?
