# Personal / consumer-life pains solvable with software (B2C & prosumer)

> Method note: Reddit (reddit.com) was **not reachable** by the research tooling (domain blocked), so no first-hand r/ADHD, r/AgingParents, r/coparenting, r/Renters, r/recruitinghell threads could be cited directly. Evidence comes instead from Hacker News threads (primary first-person testimonials), AARP community forums, Trustpilot/ConsumerAffairs reviews (via search summaries), survey reports, district policy pages and personal blogs. Items older than 2024 are flagged **[older]**.

## Which everyday admin tasks do people say they hate or keep failing at?

### Takeaway
The strongest, best-evidenced pains are (1) caregiving coordination for aging parents, (2) health-insurance billing/denial fights, (3) forgotten/hard-to-cancel subscriptions, (4) "app sprawl" in school/parent communication, and (5) digital legacy (accounts/passwords when someone dies). Recurring failure modes of existing apps: shutdowns (Mint), price hikes/paywalls (YNAB, Splitwise), cancellation that doesn't stick (Rocket Money), cost imposed per person (OurFamilyWizard), and apps that demand executive function the user lacks (ADHD).

### Cited Findings

#### P1. Caregiving for aging parents: meds, appointments, paperwork, sibling coordination
- Who: ~63M US family caregivers (about 1 in 4 adults, +20M since 2015); average 27 h/week of care; 24% give 40+ h/week — [AARP press release, Jul 2025](https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers.html)
- Intensity/money: caregivers spend roughly $7,200/yr out of pocket; nearly half report a negative financial impact (debt, depleted savings) — [AARP press release, Jul 2025](https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers.html); [ZenCaregiving summary](https://zencaregiving.org/caregiving-statistics-us-2025/) (secondary)
- Testimonial: an AARP forum caregiver describes building a single spreadsheet (providers, meds/doses/refills, appointments, history, insurance) so they could stop using their brain as a filing system, and says it helped bring siblings in — [AARP Community thread](https://community.aarp.org/t5/Caregiving/How-do-you-all-handle-the-paperwork-side-of-caring-for-a-parent/m-p/2671758)
- A geriatrician (Nicole Didyk, MD) replying to readers said she was still looking for the perfect app and suggested Google Docs/Evernote/Excel + Dropbox — [Better Health While Aging](https://betterhealthwhileaging.net/tools-for-caregivers-the-portable-up-to-date-medication-list) (post date not confirmed; likely **[older]**)
- HN user published a free open-source care-plan template after parents developed dementia and cancer — [Ask HN: Care plan template for elderly parents](https://news.ycombinator.com/item?id=37269169) **[older, 2023]**
- HN commenter set up a financial aggregator on a parent's accounts with alerts for large withdrawals; noted it needs a lot of trust (in the parent and in Plaid) and is reactive — [Ask HN: Remotely helping elderly parents?](https://news.ycombinator.com/item?id=29685115) **[older, 2021]**
- HN commenter built a plain-text syntax + web app to turn hired caregivers' hours into timesheets — same thread cluster via [Ask HN search results](https://news.ycombinator.com/item?id=29685115) **[older]**
- Existing tools fall short: OpenCare (open source) says on its own page it is a work in progress, not HIPAA-compliant, not for real medical use — [OpenCare](https://opencare.onrender.com/); printable organizers/templates proliferate (law-firm "Elder Organizer", Commonwealth Care Alliance guide, Etsy templates) — [Foster Swift Elder Organizer PDF](https://sitepilot11.firmseek.com/client/foster/www/assets/htmldocuments/Using%20the%20Elder%20Organizer%20-%20Foster%20Swift.pdf); [CCA guide](https://www.commonwealthcarealliance.org/wp-content/uploads/2021/03/Caring-for-Aging-Parents-Guide_FINAL.pdf) **[2021]**
- Software idea: a sibling-shared "parent dossier" — meds list with refill dates, appointment calendar with visit notes, provider/insurance directory, task rota (who drives/picks up prescriptions), expense ledger split among siblings (feeds the out-of-pocket problem and a possible caregiver tax credit), read-only "wallet card" for ER. Privacy-first (E2E or local) is a differentiator given the trust concerns above.

#### P2. Health insurance admin: denied claims, surprise bills, phone runarounds
- 2024 Commonwealth Fund survey (via Time): ~45% of insured working-age adults got a bill/copay they believed should have been covered — [Time](https://partners.time.com/7284610/fighting-health-insurance-company-denial)
- ~12M hours/week spent on the phone with insurers — [Becker's](https://www.beckerspayer.com/payer/americans-spend-12m-hours-a-week-on-the-phone-with-health-insurers) attributes it to a Stanford study, while [Time](https://partners.time.com/7284610/fighting-health-insurance-company-denial) attributes it to Gallup — **conflicting attribution, unverified**
- Stanford (Pfeffer) estimates ~$21.57B direct cost of employee time on insurance admin — [Stanford GSB](https://www.gsb.stanford.edu/faculty-research/publications/magnitude-effects-sludge-benefits-administration-how-health-insurance)
- Anecdote: patient profiled by Time spends 8–10 h/week fighting one medication denial — [Time](https://partners.time.com/7284610/fighting-health-insurance-company-denial)
- First-person (Jul 2025): user paid ~$3k for care abroad; Cigna gave shifting reasons, chats dropped, employer stopped responding; commenters describe insurers as designed to wear people down; advice = state regulator / DOL EBSA complaints — [Ask HN: resources for health insurance denials](https://news.ycombinator.com/item?id=44458894)
- HN commenter spent months before discovering the insurer had processed a different drug formulation than prescribed (code mismatch) — [HN search cluster on denials](https://news.ycombinator.com/item?id=44458894) (exact comment location not verified)
- Unverified HN claim: ~15–17% initial denial rate, 80%+ overturned on appeal, <1% of patients appeal — [HN discussion](https://news.ycombinator.com/item?id=41358132) (unsourced comment)
- Existing tools: Fight Health Insurance (open-source LLM appeal generator), Claimable (commercial; criticized in HN thread for its treatment-selection form) — [HN: Using AI to fight insurance claim denials](https://news.ycombinator.com/item?id=41358132); [HN: Health AI startup reversing denials](https://news.ycombinator.com/item?id=47865292)
- Software idea: "claims inbox" — scan EOBs + provider bills, auto-match them, flag mismatched codes/formulations, track appeal deadlines and call logs (rep name, reference #), generate appeal letters and regulator complaints.

#### P3. Forgotten subscriptions & hard cancellation
- 74% say it's easy to forget recurring charges; 42% still pay for subscriptions they don't use; people underestimate spend by ~$133/mo — C+R Research survey via [NerdWallet](https://nerdwallet.com/finance/learn/subscriptions-are-hard-to-cancel-and-easy-to-forget-by-design) **[older, 2022]**
- CNET/YouGov (Apr 2024–Apr 2025): average ~$205/yr spent on unused subscriptions — via [AOL](https://www.aol.com/articles/americans-waste-over-200-per-124500046.html) (other estimates differ, e.g., ~$127/household; methods not comparable)
- Regulation won't fix it soon: FTC "Click to Cancel" rule (Oct 2024) was vacated by an appeals court in July 2025; a bipartisan Unsubscribe Act was introduced afterward — [ConsumerAffairs](https://www.consumeraffairs.com/news/click-to-cancel-may-be-revived-011326.html); [NerdWallet](https://nerdwallet.com/finance/learn/subscriptions-are-hard-to-cancel-and-easy-to-forget-by-design)
- Why the leading app fails: Rocket Money reviewers (Sept 2025, Feb 2026) report "cancelled" subscriptions still charging; surprise annual charge after 7-day premium trial; bill-negotiation success fee of ~30–60% of first-year savings called hidden; lost transaction history after bank disconnect; no support reply after phone-number change (Aug 2025) — [Trustpilot](https://ie.trustpilot.com/review/rocketmoney.com?page=2); [ConsumerAffairs](https://www.consumeraffairs.com/finance/truebill.html); [Michael Ryan Money](https://michaelryanmoney.com/cancel-truebill-subscription-account/) (unverified user reviews; some affiliate content)
- Software idea: subscription tracker that doesn't require bank-linking (parse email receipts / card statements), shows "last used" signals, renewal-date alarms, and per-merchant cancellation playbooks + proof-of-cancellation storage with post-cancel charge monitoring. Trust/privacy is the wedge vs. Plaid-based tools.

#### P4. Budgeting-app instability (shutdowns, price hikes)
- Mint shut down (announced Nov 2023, access ended ~Mar 2024); Credit Karma replacement explicitly lacks monthly/category budgets — [NerdWallet](https://www.nerdwallet.com/article/finance/mint-app-closing-what-it-means-how-to-pick-a-new-budget-service); [CNBC](https://www.cnbc.com/2023/11/07/budgeting-app-mint-is-shutting-down-users-are-disappointed.html) **[2023–24]**
- YNAB raised price to ~$99/yr in Dec 2021; grandfathered $45 users saw ~100% increase and felt misled — [Fortune](https://fortune.com/article/ynab-pros-and-cons); [personal blog](https://tiny.write.as/ridwans/its-time-to-cancel-ynab) **[older, 2021]**; current price reported ~$109/yr (third-party, unverified) — [FinCompareLab](https://www.fincomparelab.com/?p=470)
- HN: indie iOS budget app maintained since 2011 still drawing interest — [Show HN](https://news.ycombinator.com/item?id=46599341)
- Software idea: local-first budgeting (CSV/OFX import, optional sync) with guaranteed data export and one-time or low price — positioned against shutdown/price-hike risk.

#### P5. School / parent communication app sprawl
- Mat-Su district (Alaska) banned Remind, ClassDojo, SportsYou, Band, Smore etc. for family messaging from July 1, 2025 and consolidated to ParentSquare, explicitly citing parents overwhelmed by the number of tools — [Mat-Su KB](https://matsuk12.teamdynamix.com/TDClient/1927/Portal/KB/ArticleDet?ID=156861)
- YES Prep moved elementary families to ParentSquare for 2025–26, keeping ClassDojo only for behavior — [YES Prep](https://www.yesprep.org/families/resources/dashboards/parentsquare)
- Parent blog (Aug 2025) describes being asked to join a seemingly endless number of apps per kid/activity, incl. signing a swim waiver in an app — [Ashlee Gadd, Substack](https://ashleegadd.substack.com/p/too-many-apps-too-little-time)
- Software idea: parent-side aggregator — forward all school/club emails + app notifications into one inbox; LLM extracts dates, forms-to-sign, things-to-bring, payments, and pushes to a shared family calendar for both parents. Note: activity apps (sports, music, camps) remain fragmented even where districts consolidate.

#### P6. Co-parenting / shared custody logistics
- OurFamilyWizard is court-ordered in many contested cases (company claims all 50 states); each parent must buy a separate subscription (reported ~$100–$300/yr per parent; sources disagree on tiers); model orders can mandate the paid ToneMeter add-on — [OFW model order template](https://www.ourfamilywizard.com/sites/default/files/inline-files/us-modelordertemplate-ofw.pdf); [ThePricer](https://www.thepricer.org/how-much-does-ourfamilywizard-cost/); [divorce.law guide](https://divorce.law/guides/co-parenting-apps-tools/california/)
- Fee waivers exist for low income — [ThePricer](https://www.thepricer.org/how-much-does-ourfamilywizard-cost/)
- Software idea: cheaper court-admissible co-parenting (tamper-evident message log, custody calendar with swap requests, reimbursement requests with receipts) — must win court/attorney acceptance; B2B2C via family-law attorneys.

#### P7. ADHD / executive function: "app graveyard"
- Writers describe installing many productivity apps, customizing heavily, then abandoning within weeks — [Android Authority](https://www.androidauthority.com/productivity-apps-failed-3639859/); [ADHD PM Substack](https://adhdpm.substack.com/p/67-understanding-and-improving-productivity)
- Claimed failure reasons: apps assume users remember to check them, require heavy setup/decisions, and overdue-task notifications trigger avoidance — [Readdle](https://readdle.com/blog/best-adhd-productivity-apps); [Sumizeit](https://www.sumizeit.com/blog/adhd-apps-13-tools-to-defeat-procrastination-and-time-blindness) (vendor content — promotional)
- Software idea: zero-setup "external brain" that captures from where the user already is (SMS/WhatsApp/voice), surfaces one next action, no guilt-inducing overdue piles; body-doubling / accountability features.

#### P8. Home maintenance & home records
- HouseTrak (Show HN) built because maintenance info was scattered across notes, photos, emails, spreadsheets, reminders — [Show HN: HouseTrak](https://news.ycombinator.com/item?id=46752069) (~2025–26; no commenter testimonials)
- Dwellable (Show HN) pulls property records and AI-suggests seasonal tasks for owners unsure where to start — [Show HN: Dwellable](https://news.ycombinator.com/item?id=45768335)
- A Contractor Talk user asked for a maintenance/seasonal-repair app without billing; reply suggested a DIY spreadsheet listing every house system — [Contractor Talk](https://www.contractortalk.com/threads/property-management-apps.462171)
- People use GitHub Issues for house repairs — [HN](https://news.ycombinator.com/item?id=4962518) **[older, 2012]**; terminal tool micasa (offline SQLite, appliances, warranties, quotes) — [AlternativeTo listing](https://alternativeto.net/software/whofixedit)
- Software idea: "house logbook" — warranty/manual capture from receipt photos, model-number-based maintenance schedules, contractor history; transferable to buyer at sale (value-add at home sale).

#### P9. Renting: security deposits & landlord disputes
- Generation Rent (England, Jan–Mar 2024, n=1,021): ~26% had problems getting their deposit back but only 5% disputed — distrust of the process discouraged them — [The Intermediary](https://theintermediary.co.uk/?p=56426)
- Go.Compare (UK, Sep 2025): 1 in 5 departing tenants had part of deposit withheld; ~3/4 of those considered it unfair — [Property Reporter](https://www.propertyreporter.co.uk/millions-in-rental-deposits-potentially-withheld-unfairly.html)
- Threshold (Ireland): 47% say a landlord unfairly withheld a deposit (year unclear) — [Longford Leader](https://www.longfordleader.ie/news/third-of-renters-spending-at-least-50-of-their-income-on-rent-7715228); Tenants Together (California, members, undated): 60% — [Tenants Together](https://www.tenantstogether.org/node/9253)
- No US national 2024 figure found.
- Software idea: move-in/move-out evidence kit — timestamped room-by-room photo/video walkthrough, repair-request log with landlord response times, jurisdiction-specific deposit-return deadline calculator and demand-letter generator.

#### P10. Job search: application tracking & ghosting
- Greenhouse 2024 report (via blog): 61% of seekers ghosted after an interview; CareerPlug 2024: 31% ghosted after an employer responded; ~180 applicants per hire — [Job Shinobi blog](https://jobshinobi.com/blog/how-to-follow-up-after-applying-using-a-tracker) (secondary, marketing site — verify originals)
- HN users describe spreadsheets breaking down at volume (tracking prior conversations became painful; 30+ jobs hard to remember) and using Trello, Streak, Org-mode, Gmail search — [Ask HN: Job seekers](https://news.ycombinator.com/item?id=17193574) **[older, 2018]**
- Flat status columns stop working ~40 applications because they don't show how long a recruiter has been silent — [DEV Community](https://dev.to/larbisahli_/the-junior-pipeline-is-broken-a-job-application-tracker-is-your-only-defense-5fmo)
- Many indie trackers launched on HN 2025–26 (TrackJ, Applytrack, Job Tracker w/ local storage, Rolepad) — [TrackJ](https://news.ycombinator.com/item?id=44712259); [Applytrack](https://news.ycombinator.com/item?id=46575084); [Job Tracker](https://news.ycombinator.com/item?id=46330770); laid-off person built own system — [Substack](https://nikitisza.substack.com/p/i-got-laid-off-and-built-a-job-tracking)
- Software idea: inbox-driven tracker (auto-detect application confirmations/rejections from email, auto-age "silent" applications, follow-up nudges, resume-version linkage). Market is crowded with free tools.

#### P11. Digital legacy: accounts and passwords when someone dies
- HN thread: a deceased person's 100+ accounts are a nightmare for the family — [HN](https://news.ycombinator.com/item?id=39667986) (~2024)
- Testimonials: banks want one certified death certificate per account (scans refused); a father's password list was useless without his phone for 2FA; a family paid to keep a dead person's phone number active to keep receiving SMS codes; Facebook repeatedly asked for the same documents without acting — [HN: What happens to your online accounts when you die?](https://news.ycombinator.com/item?id=42991112); [Ask HN: procedure to disclose passwords on death](https://news.ycombinator.com/item?id=33409891) **[2022]**; [Ask HN: "in case of death" file](https://news.ycombinator.com/item?id=36364182) **[2023]**
- Existing: password-manager emergency access (Bitwarden, Dashlane, 1Password) — one failure: the access-request email went to junk; DIY dead-man's switch servers; sealed envelopes with lawyer — same threads
- Software idea: "estate binder" — inventory of accounts/assets/subscriptions (not passwords), per-institution closure checklists, 2FA/phone-number continuity plan, executor workflow with document-copy tracking.

#### P12. Family photo libraries / digital clutter
- HN users repeatedly ask for private family photo storage; options (Synology Photos, PhotoPrism, Immich, Nextcloud Memories) each have gaps: weak mobile sync, failure on 50k+ libraries, self-hosted projects abandoned after 1–2 years, parents unwilling to set up servers — [Ask HN: self-hosted photo organizing](https://news.ycombinator.com/item?id=37150986) **[2023]**; [Ask HN: FOSS family albums](https://news.ycombinator.com/item?id=34416503) **[2023]**; [Show HN: Memories](https://news.ycombinator.com/item?id=39783223) (2024)
- Software idea: dedup + "family archive" curation (best-of selection, scanned print digitization, per-relative sharing) on top of existing storage rather than replacing it.

#### P13. Group coordination: trips & shared expenses
- Splitwise limited free users to ~3 expenses/day with Pro nags (late 2023–2024); Pro ~$5/mo or $40/yr — [Trustpilot](https://au.trustpilot.com/review/splitwise.com); [ITVoice](https://www.itvoice.in/splitwise-has-introduced-restrictions-on-the-number-of-free-expenses-users-can-add)
- HN commenter on Aruko launch: easier to use WhatsApp for chat + Splitwise for money than a new all-in-one — [Show HN: Aruko](https://news.ycombinator.com/item?id=44157388); Itineraries.io built by a couple to replace their Excel trip spreadsheets — [Show HN](https://news.ycombinator.com/item?id=41788246)
- Software idea: lightweight, no-install web trip hub (link-shareable) with itinerary + expense split + polls, plugging into the group chat rather than replacing it; one-time per-trip pricing (Kittysplit-style ~€3) — [Kittysplit](https://www.kittysplit.com/es/splitwise-alternative) (vendor)

#### P14. Household paperwork & bills (statements, policies, due dates)
- Caregivers advised to gather mortgage/deed, car, cards, recurring payments, insurance into one place while parents can still help — [Ask HN: Advice about aging parents](https://news.ycombinator.com/item?id=29429558) **[2021]**
- PaperMind (macOS, Apr 2026): drag in mortgage/insurance/car statements, auto-organize, due-date reminders — [Ask HN: What Are You Working On (Apr 2026)](https://news.ycombinator.com/item?id=47741527)
- Software idea: document inbox with OCR + extraction of due dates/renewals/policy numbers; overlaps with P1, P3, P11 — a "household OS" could share one data model.

### Inferences
- P1, P2, P11 and P14 share a data model (people, accounts, documents, deadlines, call logs) — a single "family admin vault" could address several at once; caregiving is the highest-intensity entry point.
- Trust/privacy is a recurring objection (Plaid, HIPAA, password vaults), favoring local-first or E2E designs.
- Many pains are coordination problems among several people (siblings, co-parents, travel groups, two parents vs. school) — multi-user sharing is core, not an add-on.

### Gaps
- No first-hand Reddit testimonials (domain blocked) — r/ADHD, r/coparenting, r/Renters, r/recruitinghell evidence missing; recommend manual review.
- Taxes (personal tax prep) and learning/self-education were not researched due to tool-call budget.
- No independent complaint data for OurFamilyWizard found; ADHD evidence is mostly vendor blogs.
- No US national 2024 survey on security-deposit withholding found.

## Where do people describe building their own spreadsheets/hacks because no app fits?

### Takeaway
DIY spreadsheets/templates are the default for caregiving, home maintenance, job hunting and trip planning; HN builders repeatedly ship personal tools (care plan templates, timesheet syntax, dead-man's switches, GitHub-issues-for-house-repairs) — a strong "no app fits" signal.

### Cited Findings
- Caregiving: one master spreadsheet for meds/providers/appointments/insurance shared with siblings — [AARP Community](https://community.aarp.org/t5/Caregiving/How-do-you-all-handle-the-paperwork-side-of-caring-for-a-parent/m-p/2671758); geriatrician recommends Docs/Excel + Dropbox absent a good app — [Better Health While Aging](https://betterhealthwhileaging.net/tools-for-caregivers-the-portable-up-to-date-medication-list); open-source care-plan template on GitHub — [HN](https://news.ycombinator.com/item?id=37269169) **[2023]**
- Home: Google Sheets maintenance/warranty templates (free and $2.99 paid) — [InfoInspired](https://infoinspired.com/google-docs/spreadsheet/home-maintenance-tracker-template-google-sheets/); [Everyday Old House](https://everydayoldhouse.com/shop/home-management-habit-tracker-google-sheets/); GitHub Issues for repairs — [HN](https://news.ycombinator.com/item?id=4962518) **[2012]**
- Job hunting: spreadsheets, Trello, Streak, Org-mode, Gmail as DB — [Ask HN: Job seekers](https://news.ycombinator.com/item?id=17193574) **[2018]**; numerous self-built trackers 2025–26 — [TrackJ](https://news.ycombinator.com/item?id=44712259); [Applytrack](https://news.ycombinator.com/item?id=46575084)
- Trips: couple replaced Excel trip spreadsheets with their own app — [Itineraries.io](https://news.ycombinator.com/item?id=41788246)
- Digital legacy: self-built dead-man's switch server emailing loved ones after a week of inactivity; sealed paper envelopes — [HN](https://news.ycombinator.com/item?id=42991112)
- Insurance appeals: open-source LLM appeal generator built by an individual — [HN](https://news.ycombinator.com/item?id=41358132)

### Inferences
- Where people hand-roll spreadsheets *and* share them with others (siblings, partners), a collaborative purpose-built app has the clearest upgrade path.
- Domains where builders keep launching free trackers (job search) indicate easy-to-build, hard-to-monetize.

### Gaps
- Could not quantify how many users rely on spreadsheets vs. apps per domain.

## Which consumer pains come with willingness to pay?

### Takeaway
Willingness to pay is strongest where money is at stake or payment is mandated: co-parenting (court-ordered), budgeting (YNAB ~$100+/yr), insurance/billing recovery and subscription savings (success fees), and caregiving (already ~$7,200/yr out of pocket). It is weakest for job tracking, photo self-hosting and group expense splitting, where users resist paywalls and prefer free/open source.

### Cited Findings
- Court-mandated spend: ~$100–$300/yr *per parent* for OurFamilyWizard, plus mandated add-ons — [ThePricer](https://www.thepricer.org/how-much-does-ourfamilywizard-cost/); [OFW model order](https://www.ourfamilywizard.com/sites/default/files/inline-files/us-modelordertemplate-ofw.pdf)
- Budgeting users pay ~$99–109/yr for YNAB despite anger over hikes — [Fortune](https://fortune.com/article/ynab-pros-and-cons); [FinCompareLab](https://www.fincomparelab.com/?p=470) (unverified current price)
- Rocket Money monetizes via $7–14/mo premium and 30–60% success fees on negotiated savings — but these drive "hidden charge" complaints — [Michael Ryan Money](https://michaelryanmoney.com/cancel-truebill-subscription-account/); [Trustpilot](https://ie.trustpilot.com/review/rocketmoney.com?page=2)
- Caregivers already spend ~$7,200/yr out of pocket — [AARP](https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers.html)
- Insurance: HN commenters steered away from paying lawyers/advocates, preferring free regulator complaints — [Ask HN](https://news.ycombinator.com/item?id=44458894) — suggests WTP is outcome-based (contingency) rather than subscription
- Splitwise paywall (~3 free expenses/day; $40/yr Pro) triggered backlash and migration to free alternatives — [Trustpilot](https://au.trustpilot.com/review/splitwise.com); [ITVoice](https://www.itvoice.in/splitwise-has-introduced-restrictions-on-the-number-of-free-expenses-users-can-add)
- Photo-library crowd favors free/self-hosted, with abandonment risk noted — [Ask HN](https://news.ycombinator.com/item?id=37150986) **[2023]**
- Job trackers: launched mostly free (local-storage, CSV export) — [Job Tracker](https://news.ycombinator.com/item?id=46330770)

### Inferences
- Viable B2C models: (a) savings-linked/contingency fees (subscriptions, insurance appeals, deposit recovery), (b) B2B2C via mandating/referring institutions (courts/attorneys for co-parenting, employers/benefits for caregiving, school districts), (c) premium for multi-user family plans where the pain is shared.
- Success-fee models carry trust risk (Rocket Money backlash) — transparency is a differentiator.

### Gaps
- No direct survey data on WTP for caregiving apps, ADHD tools, or home-maintenance apps found.
- No pricing evidence for insurance-appeal tools (Claimable etc.) collected.
