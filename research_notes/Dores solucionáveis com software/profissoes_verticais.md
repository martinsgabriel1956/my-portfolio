# Recurring Work Pains of Vertical-Niche Professionals Solvable with Software

> **Method note (read first):** reddit.com is blocked for this research agent's search and fetch tools (both return HTTP 400 "domain not accessible"). Reddit evidence below therefore comes only from **third-party mirrors/snapshots** (reddit.sentinel-team.org, gummysearch.com) or from vendor blogs that summarize Reddit. Every other item comes from first-party forums (BiggerPockets, HoneyBook Community, Dentaltown), review sites (Capterra, G2, Trustpilot), trade press (EdWeek, HousingWire, AccountingWEB), and surveys. **Vendor-authored sources are flagged [VENDOR]** because they sell a fix for the pain they describe. Dates are given where known; older items are flagged. The report writer should verify Reddit threads directly before quoting them.

## What repetitive admin/paperwork do these professionals complain about most?

### Takeaway
The dominant pattern across niches is **documentation and data re-entry that spills outside paid hours** (nurses, PTs, therapists, teachers, trades quoting at night), followed by **chasing other people for information** (bookkeepers chasing receipts, dental front desks verifying insurance, landlords tracking maintenance requests, realtors chasing disclosure signatures). The 18 pains below are the evidence-backed catalogue.

### Cited Findings

#### Pain 1 — Nurses: end-of-shift charting backlog (Healthcare / nursing)
- **What:** Patient care feels manageable but documentation piles up and becomes a rush at shift end; nurses stay late or arrive ~30 min early to chart. Replies advise charting in real time and warn that retrospective end-of-shift charting misses details and produces inaccurate timestamps (legal-liability angle from an ICU nurse turned legal consultant). Tools named: Epic, Cerner (dot phrases, templates as workarounds). — [r/nursing post via Reddit Sentiment Analyzer mirror, posted ~Oct 2025, snapshot Apr 2026](https://reddit.sentinel-team.org/posts/1sl4w6f/snapshots/2026-04-17T20%3A10%3A05.44504Z)
- **Frequency/intensity:** 2025 Black Book survey: 92% of nurses say EHRs hurt job satisfaction; ~40% of shift spent on documentation [VENDOR-run survey; nurse.org page returned 403, figure from search snippet] — [nurse.org](https://nurse.org/news/ehr-nurse-burnout-solutions-2025)
- ED time-and-motion study (2024, secondhand): EHR time tripled from 10% to 27% of shift since 2007 while direct care fell 32%→25% — [nirmitee.io summary [VENDOR]](https://nirmitee.io/blog/ehr-documentation-burden-solutions/)
- Nurses in an AMIA study asked for removal of "routinely redundant and double charted information" and prefer charting-by-exception — [AMIA poster](https://amia.secure-platform.com/symposium/gallery/rounds/82001/details/11128)
- **Incumbent gap:** Epic is responding with its own AI (Art) drafting end-of-shift care-plan notes; Mercy pilot cut note time from ~3.5 min to ~32 s (Epic/pilot-reported, preliminary) — [Becker's](https://www.beckershospitalreview.com/healthcare-information-technology/ehrs/mercy-nurses-cut-note-time-by-85-with-epic-ai/)
- **Software idea:** Hard for a startup to displace the EHR; opportunity is a *personal* shift-companion (voice capture of events with timestamps during the shift → structured draft to paste/push into the EHR flowsheet) or handoff-report generator. Note the incumbent is closing this gap itself.

#### Pain 2 — Teachers: non-teaching admin and duplicate data reporting (Education)
- **What:** EdWeek's 2024 State of Teaching: teachers work ~57 h/week, under half teaching. Tasks teachers want removed include compiling student-data reports that administrators can already access, sending excessive parent updates (incl. attendance calls — "Why is it all on me?"), and arranging their own substitute coverage — [EdWeek, Mar 29 2024](https://www.edweek.org/the-state-of-teaching/2024/teaching-learning/dear-administrators-teachers-want-you-to-get-these-8-tasks-off-their-plates/)
- Dutch Court of Audit (June 2025): primary teachers spend on average 6–8 h/week on paperwork — [Algemene Rekenkamer](https://english.rekenkamer.nl/latest/news/2025/06/12/primary-school-teachers-spend-nearly-a-day-a-week-on-paperwork)
- RAND State of the Teacher: ~53 h/week vs 44 for similar workers; admin work outside teaching is a top stressor (release date unconfirmed) — [Local News Matters](https://localnewsmatters.org/tag/rand/)
- Too many systems: Florida district teachers (esp. exceptional student education) said they must navigate too many systems; district CIO called consolidation "a journey" (**date unknown, likely older**) — [Tampa Bay Times](https://www.tampabay.com/electronic-grade-reports-and-teacher-aides-remain-under-discussion-in/2196717)
- Grading load: 32% of US teachers considered leaving due to grading; 56% say grading load increased (Mar 2025) [VENDOR: Learnosity] — [BusinessWire](https://www.businesswire.com/news/home/20250326730498/en/a-third-of-us-teachers-considered-leaving-education-due-to-grading-workload-says-new-research-by-learnosity)
- **Software idea:** A cross-platform "one entry, many destinations" layer (enter a grade/behavior/attendance note once → syncs to SIS, LMS, parent-comm app), or auto-generated parent update digests from data already in the LMS. Buyer is the district (slow sales) — consider teacher-paid freemium.

#### Pain 3 — Bookkeepers/accountants: chasing clients for receipts and documents every month (Accounting)
- **What:** Month-end rhythm of chasing receipts, mystery transactions, and clients who categorize differently each quarter — [Littlebird [VENDOR]](https://littlebird.ai/for/bookkeepers)
- Receipt Bank manager: "the major pain point" is going back and forth on email chasing clients; it consumes capacity and forces retrospective bookkeeping — [Fyle blog [VENDOR]](https://www.fylehq.com/blog/the-receipt-chase-is-not-worth-it-your-clients-are)
- **Frequency:** UK survey of 142 practitioners after the first Making Tax Digital quarterly deadline: 67% said getting information from clients was the biggest difficulty; client chasing called the profession's "main point of resistance" — [AccountingWEB](https://www.accountingweb.co.uk/node/232293)
- **Existing tools/gap:** Solo-dev product DocChase ($12–49/mo) gives no-login upload links, auto reminders, monthly recurring checklists — signals indie-scale viability — [Hunted.space listing](https://www.hunted.space/dashboard/docchase)
- **Software idea:** No-login client portal + WhatsApp/SMS reminder bot that asks about specific uncategorized bank transactions ("What was this $84 at Home Depot?") and writes the answer back into QBO/Xero. Regulatory deadlines (MTD in UK) create urgency.

#### Pain 4 — Therapists: SimplePractice price hikes, billing/claim scrub errors, weak support (Mental health)
- **What:** r/SimplePractice (~2k members, +32.7% YoY) top topics by post count: "Issues" (40), "Billing" (29), "Telehealth" (16), "Insurance" (9); example titles: "Scrub Issues today with BCBS TX", "Issues with Insurance status check feature?", "Is SP's invoice emailing feature HIPAA compliant?", a class-action thread about pixel tracking on the client portal; "Pain & Anger" theme has 14 posts — [GummySearch snapshot, updated Oct 2026](https://gummysearch.com/r/SimplePractice/)
- Earlier snapshot listed threads "Your new pricing is offensive, Simplepractice", "Data Compromised with New Terms and Conditions", and news that SimplePractice laid off ≥18 US customer-support staff in Aug 2025 — [GummySearch (via search snippet)](https://gummysearch.com/r/SimplePractice/)
- Capterra reviewers: constant price raises with ~30 days' notice; another (ops director) calls tech "extremely unreliable, constant connect issues" — [Capterra compare page](https://www.capterra.com/compare/130710-171393/SimplePractice-vs-HelloNote)
- AI Note Taker sold as a $35/mo/clinician add-on (competitor-sourced) — [Mentalyc [VENDOR/competitor]](https://www.mentalyc.com/blog/?p=11309)
- **Software idea:** Insurance-claim "pre-flight checker" that sits beside any EHR (payer-specific scrub rules, eligibility check, denial-reason explanations) — the pain is billing, not notes; AI notes are already crowded.

#### Pain 5 — Therapists: insurance credentialing takes months (Mental health)
- **What:** Payer credentialing 60–150 days per payer; full process 4–6 months; CAQH profile upkeep required to avoid delays [VENDOR guides] — [DirectShifts](https://www.directshifts.com/clinician-resources/insurance-credentialing-for-therapists-a-complete-guide-for-lpcs-lmfts-and-mental-health-counselors); [EaseHealth](https://easehealth.com/blog/insurance-credentialing-guide-therapists)
- Many therapists stay cash-only because insurance feels confusing and hard to manage (Feb 2026) — [Berries [VENDOR]](https://heyberries.com/blog/articles/how-to-accept-insurance-as-a-therapist)
- **Software idea:** Credentialing tracker (status per payer, CAQH re-attestation reminders, document vault, follow-up email drafts). Crowded with done-for-you services; a cheap self-serve tracker is the gap.

#### Pain 6 — Physical therapists: notes done off the clock + prior authorization (Rehab)
- **What:** APTA administrative-burden survey (Nov 2025, sent to ~19,000 PTs): 91% say admin burden contributes to burnout; prior auth: 85% say it harms outcomes, 83% say delays made patients abandon treatment, 80% wait 3+ days (figures via vendor summary; APTA original not accessed) — [Physitrack [VENDOR]](https://www.physitrack.com/insights/documentation-burden-pt-ot-burnout)
- Claim that only ~35% of PTAs finish notes during paid hours; untraced to a primary survey — [Physitrack [VENDOR]](https://www.physitrack.com/en-ca/insights/ai-documentation-pt-burnout)
- **Gap:** No WebPT-specific complaint evidence found (see Gaps).
- **Software idea:** Prior-auth packet builder for outpatient PT (payer-specific forms, auto-fill from eval note, status tracking, visit-count alerts before auth expires).

#### Pain 7 — Dental front desk: insurance eligibility/benefits verification (Dental)
- **What/frequency:** CAQH Index 2024: ~12 min of manual staff time per dental verification (~7 min partly electronic); 1.2B dental eligibility transactions, +24% — [Stealth Agents summary of CAQH](https://stealthagents.com/research/dental-insurance-verification-workload-statistics-2026)
- ADA: 55.3% of 751 dentists ranked insurance issues among top-3 2026 challenges (secondhand) — [Stealth Agents](https://stealthagents.com/research/dental-insurance-verification-staffing-statistics-2026)
- Dentaltown post: eligibility checks average ~2 h/day (**2017, old**) — [Dentaltown](https://www.dentaltown.com/channel/post/7458/is-dental-insurance-eligibility-taking-too-much-time)
- One practice's front desk spent up to 75% of time verifying insurance (single case study) [VENDOR: Overjet] — [Overjet](https://www.overjet.com/resources/how-promenade-center-for-dentistry-achieved-100-insurance-verification-accuracy-and-saved-20-hours-per-week-with-ai)
- **Software idea:** AI phone/portal agent that verifies benefits the day before and writes a structured breakdown (frequencies, downgrades, waiting periods) into Dentrix/Open Dental. Competitive (Overjet, Zuub, etc.) — differentiate on small-practice price.

#### Pain 8 — HVAC/plumbing/electrical small shops: ServiceTitan built for big shops, priced and contracted like enterprise (Trades)
- **What:** Reddit feedback (as summarized) calls ServiceTitan overkill for small operations; one user said by contract end they "couldn't justify the price point"; support "like pulling teeth" — [schedulingkit summary of reviews](https://schedulingkit.com/pros-and-cons/servicetitan-pros-and-cons)
- Contractor-reported pricing ~$245–398/tech/month + $5k+ implementation; 2–3 year contracts with termination fees (competitor claim) [VENDOR] — [Nexasphere](https://nexasphere.io/blog/leaving-servicetitan-solo-hvac-iphone); [FieldCamp](https://fieldcamp.ai/alternatives/servicetitan.md)
- No free trial; contract required to access live platform — [toolsforhumans](https://www.toolsforhumans.ai/alternatives/servicetitan)
- **Software idea:** Solo/1–3 truck, phone-first FSM with flat pricing, month-to-month, export-anything. Crowded (Jobber, Housecall Pro, Workiz) — wedge must be a sub-trade specialization (e.g., HVAC maintenance-agreement renewals, refrigerant tracking).

#### Pain 9 — Trades: quoting/estimating spills into evenings and loses jobs (Trades)
- **What:** Electricians finish installs then do paperwork at night; a quote promised "tonight" becomes tomorrow and the job goes to whoever replied first [VENDOR, no independent survey found] — [Fieldproxy](https://www.fieldproxy.ai/resources/blog/ai-quoting-app-for-trades); [canibuild](https://canibuild.com/en-us/resources/insights/why-contractors-need-quoting-software)
- Most estimating software charges per seat — [Electrical Contracting News](https://electricalcontractingnews.com/?p=52344)
- **Software idea:** Voice/photo-to-quote on site (dictate line items → price book → branded PDF/SMS link with e-sign + deposit). QuotMark already does voice-to-line-item — [QuotMark on Capterra](https://www.capterra.co.uk/software/1099181/QuotMark).

#### Pain 10 — Cleaning/landscaping companies: Jobber workflow gaps (Home services)
- **What:** Capterra reviewers: jobs and visits tracked separately; jobs sometimes can't be matched to invoices so invoices are made manually; multi-step schedule→close→bill flow; deleted invoices unrecoverable; can't label non-paying customers or track service-club memberships well — [Capterra Jobber reviews p.47](https://www.capterra.com/p/127994/Jobber/reviews/?page=47); [SoftwareConnect](https://softwareconnect.com/reviews/jobber/)
- Positive: a cleaning-business owner calls it the best CRM they've used; scheduling moved off Excel — [Capterra](https://www.capterra.com/p/127994/Jobber/reviews/?page=47)
- **Software idea:** Recurring-service-native tool for cleaners (recurring visits, cleaner checklists with photo proof, key/access-code vault, auto-billing per visit, WhatsApp updates to clients). Incumbent is liked, so this is a niche-depth play, not a hate play.

#### Pain 11 — Small landlords: rent tracked by hand in Excel across checks, deposits and apps (Real estate / landlords)
- **What:** Milwaukee landlord with 23 tenants enters checks, direct deposits and Cozy payments by hand into a "poorly designed" spreadsheet, wants to scale to 200 units; others find Stessa too rigid and prefer editable sheets; a user balked at ~$125/yr for Property Buddy — [BiggerPockets thread](https://www.biggerpockets.com/forums/52/topics/956050-software-to-manage-your-rental-properties); [BiggerPockets](https://www.biggerpockets.com/forums/899/topics/1296223-rental-software-opinions); [BiggerPockets](https://www.biggerpockets.com/forums/48/topics/90022-rental-software-to-track-income-expenses) (**dates not shown; several likely pre-2024**)
- Free Google Sheets rent tracker template thread exists, showing spreadsheet persistence — [BiggerPockets](https://www.biggerpockets.com/forums/52/topics/1277850-free-google-sheets-rent-payment-tracker-template-for-landlords?page=1)
- **Software idea:** "Spreadsheet-first" landlord tool: bank feed auto-matches deposits to tenants into a Google Sheet the landlord owns, with Schedule E export. Respects the "I want my own sheet" preference instead of fighting it.

#### Pain 12 — Self-managing landlords: maintenance requests lost across texts/calls/emails (Real estate)
- **What:** 2026 BiggerPockets poll thread: hardest part is tracking which requests are still open after calls and texts; a PM says coordination, not the repair, eats the time; advice is one written channel — [BiggerPockets](https://www.biggerpockets.com/posts/7277811); [BiggerPockets](https://www.biggerpockets.com/posts/7280085)
- If a request can't be filed quickly from a phone, tenants revert to texting the landlord — [BiggerPockets](https://www.biggerpockets.com/posts/7250136)
- **Software idea:** SMS/WhatsApp-native maintenance inbox: tenant texts a number, bot collects photos/unit/urgency, creates ticket, dispatches to the landlord's own vendor list, nags until closed. No portal/app download for tenants.

#### Pain 13 — Property managers: AppFolio poor fit for multi-family, banking/accounting errors, support access (Property management)
- **What:** Jan 2025 Capterra 2/5: "not built for multi-family needs", no process for historical data, poor implementation; Jun 2025: bill payments default to wrong bank account, multiple accounts break balance-sheet cash; Sep 2024: bank change delayed and AppFolio's response "made it worse". Overall rating still 4.5 (1,888 reviews) — [Capterra AppFolio reviews](https://capterra.com/p/92228/AppFolio-Property-Manager/reviews/)
- Trustpilot 2026 themes (AI-generated aggregator, directional only): hard to reach human support, price increases, rigid custom reporting/API — [RFP.wiki](https://www.rfp.wiki/specialty-industries/real-estate-property/appfolio-property-manager/rentec-direct)
- **Software idea:** Add-on reporting/API layer for AppFolio/Buildium data (owner reports, multi-entity cash reconciliation) rather than a full PMS replacement.

#### Pain 14 — Lawyers (small firms): Clio billing assumes hourly, weak multi-trust accounting, paid seats for bookkeepers (Legal)
- **What:** G2 reviewer: Clio dashboard measures productivity by billable hours even though the firm bills flat-fee; charges a license for the bookkeeper. Capterra: falls short with several trust and operating accounts; client balances change on already-sent invoices — [G2 lawyer software](https://g2.com/software/lawyer); [Capterra Clio reviews p.16](https://www.capterra.com/p/105428/Clio/reviews/?page=16)
- Fishbowl post: a managing partner "hates" Clio and asked staff to research alternatives; replies mention moving to Filevine, CosmoLex (page 403 on fetch; content from search snippet) — [Fishbowl](https://www.fishbowlapp.com/post/what-billing-software-does-your-firm-use-our-firm-uses-clio-and-my-managing-partner-hates-it-he-has-asked-me-to-research)
- Counterpoint: Capterra shows 94% positive sentiment across ~1,700 reviews — [Capterra](https://www.capterra.com/p/105428/Clio/)
- **Software idea:** Flat-fee/subscription-law-firm billing + IOLTA trust reconciliation tool (three-way reconciliation, multi-trust) for solo/small firms. Trust accounting errors carry bar-discipline risk = high willingness to pay.

#### Pain 15 — Paralegals (PI/med-mal): organizing, Bates-labeling and summarizing medical record productions (Legal)
- **What:** Job postings bundle Bates-labeling, indexing, OCR of large record productions, gap-spotting and billing summaries; hand labeling described as tedious — [ABA Litigation newsletter](https://www.americanbar.org/groups/litigation/resources/newsletters/mass-torts/five-tips-for-associates-reviewing-or-producing-medical-records/); [SimplyHired posting](https://www.simplyhired.com/job/6EKYXGo1WqIXkTwES3OynY_PvKyH2hvRl8P8Ze8aPk_7Fpd3E8SA_A)
- **Weak evidence:** no first-person paralegal testimonial found (see Gaps).
- **Software idea:** Medical chronology builder (merge PDFs → dedupe → Bates → chronology table → specials/billing totals). Crowded with AI legal startups in 2025–26.

#### Pain 16 — Realtors: transaction file ops and disclosure chasing (Real estate agents)
- **What:** Agents/brokers still pay a transaction coordinator $300–500 per deal or subscribe to tools that "track the file and then hand the work back"; someone must chase disclosure completion, route for signature, audit missing initials (opinion piece, vendor-influenced) — [HousingWire](https://www.housingwire.com/articles/real-estate-file-ops-costs/)
- NAR: growing document count and regulations make TCs more essential — [NAR](https://www.nar.realtor/news/broker-news/network/transaction-coordinator-an-answer-to-your-prayers)
- **Gap:** No first-person r/realtors complaints about MLS/CRM retrieved (blocked).
- **Software idea:** "AI transaction coordinator" that reads the contract, builds the deadline calendar, and auto-chases each party by SMS/email with missing-initial detection on returned PDFs. Priced per transaction (< $300).

#### Pain 17 — Event/wedding vendors & creative freelancers: HoneyBook price hikes and AI upsell (Events / creatives)
- **What:** Dec 2024 HoneyBook Community post: price hike with silence afterward, "Adding AI is not a reason to hike the price", substantial payment-processing fees, missing basics (promo codes, images in emails), repeated hikes forced a downgrade; competitors 17hats ("Escape from HoneyBook" sale) and Dubsado poaching; photographers offered free migration elsewhere — [HoneyBook Community](https://community.honeybook.com/money-talk-143/honeybook-your-direct-competitors-have-begun-taking-your-users-4068)
- Trustpilot: price rose just after paying annual fee; features moved to higher tiers; lost proposals and outages — [Trustpilot](https://www.trustpilot.com/review/honeybook.com?page=8)
- Another community thread: "can we stop changing things that aren't broken" — [HoneyBook Community](https://community.honeybook.com/honeybook-product-talk-7/hb-i-love-you-but-can-we-stop-changing-things-that-arent-broken-5183)
- **Software idea:** Lean, flat-priced client-flow tool (inquiry → proposal → contract → deposit) for a single niche (wedding photographers / DJs / florists) with one-click HoneyBook import. Low engagement on the thread (81 views, 2 replies), so intensity signal is moderate.

#### Pain 18 — Personal trainers/online coaches: clunky, dated client apps (Fitness)
- **What:** 2025 Capterra Trainerize reviews: older clients find the app confusing, needing extra onboarding; workouts look "outdated"; MyFitnessPal sync not smooth. TrueCoach reviewers who switched from Trainerize call it "too heavy and clunky"/"cumbersome" — [Capterra Trainerize](https://capterra.com/p/140262/Trainerize/reviews/); [Capterra TrueCoach p.7](https://www.capterra.com/p/155784/truecoach/reviews/?page=7)
- Pricing scales by client count ($18/5 clients → $270 unlimited; may be outdated) — [SoftwarePundit](https://www.softwarepundit.com/node/253)
- **Software idea:** WhatsApp-first coaching tool (workouts/check-ins delivered in chat, no client app install) for trainers with older or non-techy clients.

### Inferences
- The highest-pain items are where **time is unpaid and liability is real**: nurse charting, PT notes/prior auth, trust accounting, insurance verification. These also have entrenched incumbents (Epic, WebPT, Clio, Dentrix), so the realistic startup wedge is an **add-on/sidecar** rather than a replacement.
- "Chasing people" pains (bookkeeper receipts, landlord maintenance, realtor disclosures, dental verification) share one solution shape: **messaging-native (SMS/WhatsApp) intake + automatic reminders + status tracking**, which can be built once and verticalized repeatedly.

### Gaps
- No first-person Reddit threads could be fetched directly (reddit.com blocked); r/Teachers, r/Accounting, r/Bookkeeping, r/therapists, r/physicaltherapy, r/HVAC, r/Plumbing, r/electricians, r/realtors, r/Lawyertalk, r/paralegal, r/Dentistry, r/personaltraining claims are therefore not individually evidenced. Report writer should verify manually.
- Several frequency figures (Black Book 92%/40%, PTA 35%, ADA 12.4 h/day, APTA Nov 2025 numbers) are only available via vendor summaries; primary reports not accessed.
- No independent survey quantifies trade quoting time; only vendor claims.
- No first-person paralegal or realtor testimonial retrieved.

## Which incumbent tools in each niche get the most hate and why?

### Takeaway
The clearest "hated incumbent" signals are **ServiceTitan** (enterprise pricing/contracts imposed on small shops), **SimplePractice** (repeated price hikes, billing/claim issues, support layoffs, privacy/terms concerns), **HoneyBook** (price hikes justified by unwanted AI), and **EHRs like Epic** for nurses (click burden, duplicate charting). Clio, AppFolio and Jobber get targeted complaints but retain high overall ratings, so they are "tolerated" rather than hated.

### Cited Findings
- **ServiceTitan (HVAC/plumbing/electrical):** overkill and unjustifiable for small shops; 2–3 yr contracts, implementation fees $5k–10k, no free trial; support "like pulling teeth" — [schedulingkit](https://schedulingkit.com/pros-and-cons/servicetitan-pros-and-cons); [toolsforhumans](https://www.toolsforhumans.ai/alternatives/servicetitan); [Nexasphere [VENDOR]](https://nexasphere.io/blog/leaving-servicetitan-solo-hvac-iphone)
- **SimplePractice (therapists):** "Your new pricing is offensive" thread; Aug 2025 support layoffs; terms/data concerns; pixel-tracking class-action thread; billing and claim-scrub issues dominate subreddit — [GummySearch](https://gummysearch.com/r/SimplePractice/); price raised with ~30 days' notice, unreliable connections — [Capterra](https://www.capterra.com/compare/130710-171393/SimplePractice-vs-HelloNote); a pricing petition exists (**Jan 2022, old**) — [Change.org](https://www.change.org/p/open-letter-to-of-simple-practice)
- **HoneyBook (event vendors, photographers, creatives):** price hikes + AI upsell + processing fees; competitors run "escape" campaigns — [HoneyBook Community, Dec 2024](https://community.honeybook.com/money-talk-143/honeybook-your-direct-competitors-have-begun-taking-your-users-4068); [Trustpilot](https://uk.trustpilot.com/review/honeybook.com?page=4)
- **Epic/Cerner (nurses):** redundant double charting, click burden; 76% of nurses feel inadequately prepared to use their EHR — [AMIA](https://amia.secure-platform.com/symposium/gallery/rounds/82001/details/11128); [nirmitee.io [VENDOR]](https://nirmitee.io/blog/ehr-documentation-burden-solutions/)
- **Clio (small law firms):** hourly-centric dashboards for flat-fee firms, multi-trust shortfalls, paid bookkeeper seats; but 94% positive on Capterra — [G2](https://g2.com/software/lawyer); [Capterra](https://www.capterra.com/p/105428/Clio/)
- **AppFolio (property managers):** multi-family fit, bank-account defaults, support access; still 4.5/5 — [Capterra](https://capterra.com/p/92228/AppFolio-Property-Manager/reviews/)
- **Jobber (home services):** invoice/job matching, unrecoverable deletes; generally liked — [Capterra](https://www.capterra.com/p/127994/Jobber/reviews/?page=47)
- **Trainerize (trainers):** dated/clunky UI, confusing for older clients — [Capterra](https://capterra.com/p/140262/Trainerize/reviews/)

### Inferences
- A recurring hate trigger is **price increases justified by AI features users didn't ask for** (HoneyBook, SimplePractice AI add-on). A flat-priced, "boring", no-AI-upsell positioning is a credible differentiator in these niches.
- Second trigger: **enterprise sales motion pushed down-market** (ServiceTitan contracts, AppFolio implementation). Month-to-month, self-serve, data-export-friendly tools win switchers.

### Gaps
- No WebPT, Dentrix/Eaglesoft, dotloop/MLS, or school LMS (PowerSchool/Canvas) complaint evidence retrieved in this pass.
- Review-site samples are self-selected; no quantitative NPS/churn data found.

## Where are people still using spreadsheets, paper, WhatsApp or email as workaround?

### Takeaway
Spreadsheets persist strongly among **small landlords** (rent tracking, by choice even when software exists), texts/calls among **self-managing landlords** for maintenance, **email back-and-forth** for bookkeepers chasing clients, and **paper/duplicate entry** in schools. Explicit WhatsApp-as-workaround evidence was not found in English-language sources.

### Cited Findings
- Landlord hand-entering checks, deposits and app payments into Excel for 23 units; another prefers editable spreadsheet over Stessa's rigidity; PM says Excel suffices for ≤10 properties — [BiggerPockets](https://www.biggerpockets.com/forums/52/topics/956050-software-to-manage-your-rental-properties); [BiggerPockets](https://www.biggerpockets.com/forums/899/topics/1296223-rental-software-opinions)
- Free Google Sheets rent tracker shared on BiggerPockets — [BiggerPockets](https://www.biggerpockets.com/forums/52/topics/1277850-free-google-sheets-rent-payment-tracker-template-for-landlords?page=1)
- Maintenance via texts/calls/emails, open requests get lost; one single-property user found plain texts sufficient until portfolio grew — [BiggerPockets 2026](https://www.biggerpockets.com/posts/7277811); [BiggerPockets user](https://biggerpockets.com/posts/user/edgars18)
- Tracking tenant communications (late-payment reasons, complaints) poorly organized — [BiggerPockets](https://www.biggerpockets.com/forums/48/topics/90022-rental-software-to-track-income-expenses)
- Bookkeepers: email back-and-forth chasing clients is "the major pain point" — [Fyle [VENDOR]](https://www.fylehq.com/blog/the-receipt-chase-is-not-worth-it-your-clients-are)
- Teachers: work done online must be repeated on paper (Portugal union, **2022**) — [The Portugal News](https://theportugalnews.com/news/2022-07-30/80-of-teachers-complain-about-useless-bureaucratic-work/69078); disconnected systems force re-entering the same data — [Edsby [VENDOR]](https://www.edsby.com/?p=73670)
- Cleaning business moved scheduling from Excel to Jobber's calendar — [Capterra](https://www.capterra.com/p/127994/Jobber/reviews/?page=47)
- Nurses' workaround is personal templates/dot phrases and coming in 30 min early — [r/nursing mirror](https://reddit.sentinel-team.org/posts/1sl4w6f/snapshots/2026-04-17T20%3A10%3A05.44504Z)

### Inferences
- Where users *choose* spreadsheets despite available software (landlords), the winning product augments the spreadsheet (auto-fill a sheet they own) rather than replaces it.
- WhatsApp workarounds are likely more visible in non-US markets (Brazil, LatAm, India) where SMB communication is WhatsApp-first; this is an opportunity for a Brazil-based builder but is unevidenced here.

### Gaps
- No direct evidence found of WhatsApp used as a workaround by any of the target professions (English sources). Portuguese-language searches (e.g., Brazilian forums, Reclame Aqui reviews of iClinic, Feegow, Simples Dental, Superlógica) would likely surface it and were not run.
- No evidence retrieved for event planners' spreadsheet use (Aisle Planner search returned nothing relevant).
