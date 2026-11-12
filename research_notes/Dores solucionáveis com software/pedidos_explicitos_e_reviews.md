# Explicit "someone build this" requests and incumbent-SaaS complaints as unmet-demand signals

Scope note: research done 2026-10-09. Reddit could not be fetched directly (reddit.com is blocked for the fetch tool, and search results returned only mirrors, aggregators and vendor blogs). Reddit-derived claims below are therefore second-hand and labeled as such. Primary sources used: Hacker News threads (fetched directly), Intuit's QuickBooks community forum, Shopify Community, Product Hunt. Many complaint sources are blogs written by competitors. They are flagged where used.

## 1. What do people explicitly ask someone to build, with strong community agreement?

### Takeaway
Explicit "please build this" posts are plentiful, but strong, measurable agreement is rare. Most wish-list threads get 1 to 22 points, with 0 to 4 replies per idea. The strongest explicit-demand signals are ones where the poster names a price ("I would pay", "$1-2k/year", "take my money"). Complaints about incumbents' pricing (sections 3 and 4) carry more evidence of real money than wish lists do.

### Cited Findings
- **Product Hunt "Steal this idea" thread (about 2025, page shows only "1yr ago").** The top software ideas by upvotes were an email assistant that drafts replies in your own voice from your sent mail (13 upvotes, with an explicit "take my money"), a resale marketplace for unused lifetime deals and subscriptions (11 upvotes), a phone-sensor app comparing driving skill (10 upvotes) and a Reddit reply assistant (8 upvotes). Replies point to existing tools for most of them: Superhuman, Serif and Migma for email, AppSumo and LTD Facebook groups for resale, and GummySearch and ReplyGuy for Reddit. — [Product Hunt](https://www.producthunt.com/p/producthunt/steal-this-idea-what-s-a-product-you-wish-someone-else-would-build)
- **The resale-marketplace pain:** money wasted on software bought on impulse during deals, then renewals at higher prices. One commenter called it an after-market for digital goods. — [Product Hunt](https://www.producthunt.com/p/producthunt/steal-this-idea-what-s-a-product-you-wish-someone-else-would-build)
- **r/SomebodyMakeThis composition:** about 79k members. "App" is the top post flair (79 posts), followed by "Idea" (47), "AI" (41) and "Tool" (24). One sample Software-flair idea is a recipe app that shows only the recipe, with no extra content. Individual post scores were not available. — [GummySearch](https://gummysearch.com/r/SomebodyMakeThis); [subreddit mirror](https://lr.sudovanilla.org/r/SomebodyMakeThis)
- The subreddit's monthly showcase bars paid-only products (anything shown must have a free tier or trial), so "would pay" talk shows up in regular posts rather than the showcase. — [subreddit mirror](https://lr.sudovanilla.org/r/SomebodyMakeThis)

### Inferences
- "Take my money" often lands on ideas that already have several funded competitors (AI email drafting). Explicit requests are better read as proof of a pain than as proof of a gap. Check the replies for "X already does this" before treating an idea as open.
- The recipe-only app is a classic r/SomebodyMakeThis request that is already well served (Paprika, Mela, JustTheRecipe-style sites). It works as a warning: popular requests are often already built.

### Gaps
- Could not get vote counts or "me too" counts for r/SomebodyMakeThis, r/AppIdeas, r/SaaS or r/nocode posts, because Reddit could not be fetched. A follow-up through Reddit search in a browser (sort by top, past year) would add upvote evidence.

## 2. What do Hacker News "Ask HN: what do you wish existed / would pay for" threads reveal?

### Takeaway
The 2024-2026 HN wish-list threads are small (4 to 24 comments), but they repeat developer-workflow pain (local CI, uncluttered API clients, lightweight observability), niche financial and tax tooling for underserved groups (US expats), data-access APIs (Reddit, normalized government data) and "sovereign" self-hosted media tools. The only explicit willingness-to-pay statements were for local CI debugging, expat tax filing and a Reddit posting API.

### Cited Findings
Thread list found through the hn.algolia.com API (ask_hn, created since 2024-01-01). The largest were "What developer tool do you wish existed in 2026?" (Dec 2025, 22 points, 24 comments), "What do you wish existed? (October 2025)" (13 points, 19 comments), "What's an API that you wish existed?" (Jan 2026, 11 points, 14 comments) and "Small Businesses vs. Corporations: What Tech Tools Are We Missing?" (Dec 2024, 24 points, 49 comments). — [HN Algolia query](https://hn.algolia.com/api/v1/search?query=%22wish%20existed%22&tags=ask_hn&numericFilters=created_at_i>1704067200)

**A. Run CI pipelines locally (explicit willingness to pay).**
- User wojciii wants a CI system that runs jobs locally in the same environment as CI, so they don't have to keep committing YAML to test changes. They also want step-through debugging. They wrote: "Solve this and I would pay for it." The thread had 2 replies. — [HN 46345827, Dec 2025](https://news.ycombinator.com/item?id=46345827)
- A separate wish in the same thread: an LLM in CI that picks which tests should block a change and estimates how many reruns are needed to check new tests for flakiness. The commenter says current tools select tests by brute-force path matching. — [HN 46345827](https://news.ycombinator.com/item?id=46345827)

**B. An uncluttered Postman alternative.**
- User dhruv3006 calls Postman bloated and says Bruno is "still bloated". Others suggested Posting (a terminal client) and Yaak. The poster is building Voiden. There were 4 replies, the most of any top-level comment in that thread. — [HN 46345827](https://news.ycombinator.com/item?id=46345827)

**C. Disposable SSH sessions** (connecting spins up an LXC or Firecracker container that is destroyed on logout). Replies pointed to ContainerSSH, and the requester said it "looks like what I want", so this one is already partly solved. — [HN 46345827](https://news.ycombinator.com/item?id=46345827)

**D. Tax filing for US expats in Europe with US investments (explicit price).**
- User deanmoriarty wants TurboTax-style software for US expats in Europe who hold US investments and would pay $1-2k per year. They say CPAs make mistakes and existing software doesn't handle the case. There were 2 replies. — [HN 45500937, Oct 2025](https://news.ycombinator.com/item?id=45500937)

**E. Feed-cleaning tools.** One request is a browser extension that filters AI-generated content and spam reviews on Reddit and similar sites. Another is an app that shows Facebook group posts in order, without algorithmic ranking. — [HN 45500937](https://news.ycombinator.com/item?id=45500937)

**F. A crowd-correctable cycling route map.** The requester says CityMapper offers no way to correct a route that includes a dangerous stretch. — [HN 45500937](https://news.ycombinator.com/item?id=45500937)

**G. APIs people wish existed (Jan 2026).**
- A free or usable Reddit API for third-party apps (2 commenters). One of them said they would pay for an API to post and comment, because they keep getting banned. — [HN 46691222](https://news.ycombinator.com/item?id=46691222)
- A normalized API for government financial transaction data. The commenter says it is currently published in inconsistent XLSX and CSV files. Another reply asked what price the requester would accept. The same commenter also wants open rental data, since immoscout24 access is paid. — [HN 46691222](https://news.ycombinator.com/item?id=46691222)
- A general sports API with real-time and historical data, with one "I'd like this too" reply. — [HN 46691222](https://news.ycombinator.com/item?id=46691222)

**H. Self-hosted, sovereign media (Aug 2026).** One commenter wants an open-source, Spotify-style desktop music app for your own library: drag-and-drop import, MusicBrainz auto-tagging, S3 or rclone storage and shareable playlists in an open format. The same commenter wants a federated library system tracking what you own, want and can lend. The thread has only 5 comments. — [HN 49259602](https://news.ycombinator.com/item?id=49259602)

**I. What small businesses say they are missing (Dec 2024, 49 comments).**
- Lightweight logging and alerting without Datadog's enterprise features (user fs_software). It drew the most replies in the thread: suggestions of ntfy.sh, self-hosted Sentry ("not lightweight"), Prometheus/Grafana and HyperDX, plus a note that self-hosted full-text search is hard. — [HN 42397330](https://news.ycombinator.com/item?id=42397330)
- Accounting SaaS assumes a sole proprietor. In multi-person firms, 2FA goes to one owner's phone (user xtiansimon). — [HN 42397330](https://news.ycombinator.com/item?id=42397330)
- Paying for SAML/SCIM, MDM and EDR is called a "farce" for small companies. A reply says enterprise SSO and SCIM are buggy and that MDM is a "circus". — [HN 42397330](https://news.ycombinator.com/item?id=42397330)
- One user wants a modern Access or Visual FoxPro (a simple integrated database app builder) and calls ERPs the biggest culprit. Another calls Kubernetes "too complicated" for small shops. — [HN 42397330](https://news.ycombinator.com/item?id=42397330)
- One user wants tools for small firms to bid together as consortia on government tenders, since some bids require three years of minimum turnover. — [HN 42397330](https://news.ycombinator.com/item?id=42397330)

### Inferences
- The developer-tool requests (A, B, I-logging) come from people who would build a quick version themselves, which makes them good fits for a solo developer. Their buyers, though, are price-sensitive and used to open source.
- Request D (expat tax) is the clearest high-price request ($1-2k/year). It is a regulatory niche with heavy liability. It suits a domain expert better than a generic solo developer.
- Existing tools I know of that partly cover these requests, not verified in this session: nektos/act runs GitHub Actions locally, and Dagger offers portable CI. The HN requester's step-through debugging and full CI-environment parity suggest these fall short, but that is my inference.

### Gaps
- HN wish threads in 2024-2026 are low-traffic (the largest has 49 comments). No thread reached hundreds of upvotes, so "strong community agreement" is weakly evidenced here. Older, larger threads (pre-2024) were not reviewed.
- The algolia search used only the phrase "wish existed". Phrasings such as "would pay for" or "SaaS idea" may surface more threads.

## 3. What complaints repeat in negative reviews of popular tools (QuickBooks, Mailchimp, Calendly, Shopify apps, DocuSign, Zapier, Notion)?

### Takeaway
The dominant repeated complaint is pricing that rises without matching value: forced subscription migrations, per-seat and per-usage meters (seats, envelopes, tasks, contacts) and add-on stacking. Next come bloat and slowness, and poor sales or support responses ("find an alternative if you don't like it"). Feature gaps are mentioned less often than price.

### Cited Findings
**QuickBooks Desktop / Online (Intuit) — strongest primary evidence**
- A June 2025 thread from a one-person business with two employees and 20+ years on QuickBooks Desktop Pro: yearly cost rose from about $589 to nearly $1,000 (about 70%). A sales rep told him to find an alternative if he didn't like it. The thread has 31 replies and 1,013 views. Later replies: a bookkeeping firm reports costs rising from about $1,100 to over $4,000 per year since 2021 and plans to leave (Feb 2026). Another one-person user reports about $1,600 per year and asks for cheaper options (June 2026). — [QuickBooks Community](https://quickbooks.intuit.com/community/other-questions-9/longtime-customer-deeply-disappointed-by-quickbooks-pricing-and-forced-migration-90743)
- An April 2025 post says costs went from roughly $250 every couple of years to $999 in 2025. — [QuickBooks Community](https://quickbooks.intuit.com/community/other-questions-9/price-increase-2025-89871)
- Another post objects to a May 2025 increase plus a per-employee check fee and suspects the aim is pushing users to Online. — [QuickBooks Community](https://quickbooks.intuit.com/community/account-management-65/complaint-department-about-price-increase-of-subscription-162510)
- NerdWallet notes frequent complaints about QuickBooks price hikes and upselling. It compares Zoho Books (from $0 per month) with QuickBooks Online's entry plan ($38 per month). — [NerdWallet](https://www.nerdwallet.com/article/small-business/quickbooks-alternatives-signs)

**Shopify app ecosystem**
- In a 15-year merchant's Jan 2025 post, "Apps Have Become Worse Than the Mafia": app pricing moved from free or cheap to monthly fees plus usage charges (a percentage of sales, clicks or actions). Large-inventory stores get pushed into top tiers of about $150 per month. A $29 per month app degraded without notice. Many apps charge for things Shopify Flow can do, but Flow is hard for average users. The poster replaced a roughly $100 per month function with a free spreadsheet. — [Shopify Community](https://community.shopify.com/t/apps-have-become-worse-than-the-mafia/388157)
- Related Shopify Community threads include "The Price of Apps is Completely Out of Control" (June 2025) and "Too Many Shortcomings Requiring Too Many Apps" (June 2024, 8 replies, 454 views). — [Shopify Community](https://community.shopify.com/t/apps-have-become-worse-than-the-mafia/388157)
- A merchant was ready to add a trade-in section until seeing the $599 per month price. (Source is a vendor blog quoting a merchant.) — [Surebright](https://www.surebright.com/blog/shopify-app-subscriptions-bleeding-you-dry-heres-how-to-spot-the-ones-worth-keeping-and-which-are-a-waste-of-money)
- Counterpoint: one analysis estimates real app spend at about $235-350 per month for a typical store and calls the "app bloat" category overstated in dollar terms. — [EightX](https://eightx.co/blog/shopify-app-bloat-report-2026)

**Mailchimp**
- The free plan was cut from 500 contacts and 1,000 sends to 250 contacts and 500 sends (announced Jan 2026, effective Feb 17, 2026). Legacy plans then rose 11-13%. Pricing is billed on contacts and sends, and unsubscribed or archived contacts count until manually removed. (Source is a competitor blog.) — [BuyerSprint](https://buyersprint.com/2026/04/01/mailchimp-alternatives-2026/); [Brevo](https://www.brevo.com/blog/mailchimp-price-increase/)

**Calendly**
- The most-cited complaints are per-seat cost creep as teams grow and limited booking-page customization. Salesforce integration requires the Teams tier ($16 per seat per month annually) rather than Standard ($10). Enterprise starts at $15k per year. — [usecarly review](https://www.usecarly.com/blog/calendly-review/); [Capterra pricing](https://www.capterra.com/p/148036/Calendly/pricing)
- One site claims inactive seats keep being billed. Single source, unverified. — [RapidDevelopers](https://www.rapidevelopers.com/md/review/calendly)
- Conflicting signal: Calendly is still rated about 4.7 on G2 with 2,500+ reviews, so the complaints come from a vocal minority, mostly growing teams. — [cut-the-saas](https://cut-the-saas.com/guides/calendly-vs-cal-com)

**DocuSign**
- Small organizations report envelope caps and workarounds on Capterra, plus basic features (bulk send, branding, payments) gated to higher tiers. A G2 reviewer is quoted paying about $4.50 per envelope and calling sales inflexible for small buyers. Sources disagree on the actual envelope caps. (Sources are competitor blogs.) — [Blueink](https://www.blueink.com/blog/why-small-businesses-are-leaving-docusign); [Prospeo](https://prospeo.io/s/docusign-pricing-reviews-pros-and-cons)
- The open-source alternative DocuSeal is criticized for lacking SOC 2 Type II, which blocks enterprise procurement. — [Prospeo](https://prospeo.io/s/docusign-alternatives)

**Zapier**
- Task-based billing counts every step, so a 5-step Zap uses 5 tasks per run. One r/nocode example pays $49 per month for 750 tasks for forms → sheets → email. Reddit users report bills going from $10 to $750+ per month. (Second-hand, via a comparison site.) — [TinyCommand](https://tinycommand.com/blogs/zapier-alternatives-2026); [Prospeo](https://prospeo.io/s/zapier-alternatives)
- n8n is cheaper when self-hosted, but a May 2026 Reddit comment says it needs someone comfortable debugging nodes, credentials, JSON and retries. — [Reddit snapshot](https://reddit.sentinel-team.org/posts/1t78cd0/snapshots/2026-05-15T20%3A49%3A13.68504Z)

**Notion**
- Slowdowns start beyond a few thousand database rows and with relation and rollup chains. In one anecdote, a 3,500-page CRM database loaded in 15 seconds and took 2 seconds after archiving. A review-mining analysis ranks performance as the top complaint (21%), with one quote that a page takes 8 seconds to open. Notion AI's credit and usage windows are also cited. (Sources sell alternatives.) — [Fabric](https://developers.fabric.so/blog/why-notion-is-slow); [Unstar](https://unstar.app/blog/productivity-app-reviews-what-power-users-complain-about-2026); [Toolworthy](https://www.toolworthy.ai/blog/notion-alternatives)

**The "SSO tax" (cross-vendor)**
- sso.tax lists vendors that lock SSO into enterprise tiers, comparing the base per-user price with the cheapest tier that includes SSO. HubSpot is cited at a 6,300% markup, and Airtable SAML requires the $45 per user per month Business tier. The list has had limited effect on vendor pricing. — [Ory](https://www.ory.sh/blog/sso-wall-of-shame-vs-wall-of-fame); [1Password](https://1password.com/blog/explaining-the-backlash-to-the-sso-tax); [SSOReady](https://ssoready.com/blog/from-the-founders/an-unpopular-perspective-on-the-sso-tax)

### Inferences
- The recurring pattern is metering on a unit the customer doesn't feel as value (seats, envelopes, tasks, unsubscribed contacts). A flat-price or one-time-price version of the core 20% of the product is the most repeatable wedge.
- The intensity of the QuickBooks Desktop complaints (31 replies, multi-year, still active in 2026) suggests users who want local or offline software with predictable pricing. That is a segment many SaaS makers ignore.
- Salesforce, which the task named, was not researched due to the tool-call budget. Its complaints (complexity, admin cost) are widely known, but they are not evidenced here.

### Gaps
- No primary G2, Capterra or Trustpilot review pages were fetched (Trustpilot results did not surface for Calendly). Most review-site complaints above come from competitor blogs summarizing reviews, so they are biased.
- Salesforce and Jira were not covered.
- Calendly's "inactive seats billed" claim and DocuSign's envelope caps are unverified or conflicting.

## 4. What unbundling opportunities exist, and what concrete software could a solo developer or small team build?

### Takeaway
The best opportunities are flat-priced, single-purpose versions of a metered feature inside a bloated suite, aimed at small teams that are being priced out. Each item below pairs evidence with a scoped idea. Demand strength runs from strongest (primary threads with dozens of replies) to weakest (one HN comment).

### Cited Findings
(All evidence is cited in sections 2 and 3. Each idea below lists its source.)

### Inferences — opportunity list (ideas are my synthesis, not claims from the sources)

| # | Pain / request | Who wants it | Evidence | Demand signal | Existing alternatives and the gap | Solo-developer idea |
|---|---|---|---|---|---|---|
| 1 | QuickBooks Desktop price jumps (+70%, up to 4x) and forced migration to Online | Micro-businesses (1-5 people), small bookkeeping firms | [QB Community](https://quickbooks.intuit.com/community/other-questions-9/longtime-customer-deeply-disappointed-by-quickbooks-pricing-and-forced-migration-90743), [QB 2025](https://quickbooks.intuit.com/community/other-questions-9/price-increase-2025-89871) | Strong: 31 replies and 1,013 views, complaints continuing into 2026, people already paying $1k-4k/yr | Zoho Books (cloud, upsell path), old Desktop licenses (end of support) | Local-first desktop bookkeeping for US micro-businesses with a one-time license plus optional sync, and import from QuickBooks Desktop (.IIF/QBO). Scope: bank CSV import, categorization, P&L, 1099 export |
| 2 | Shopify apps priced at $100-600/mo for small functions, plus percentage-of-sales fees | Shopify merchants, especially those with large catalogs | [Shopify Community](https://community.shopify.com/t/apps-have-become-worse-than-the-mafia/388157), [Surebright](https://www.surebright.com/blog/shopify-app-subscriptions-bleeding-you-dry-heres-how-to-spot-the-ones-worth-keeping-and-which-are-a-waste-of-money) | Medium: several community threads in 2024-25. Counter-evidence: average spend may be modest | Shopify Flow (hard for average users), single-purpose apps | Flat-price, non-SKU-tiered Shopify apps for one function (trade-in, bulk edit). Or "Flow recipes as a service": prebuilt Flow templates with a simple UI |
| 3 | Zapier task metering ($49 for 750 tasks for forms → sheets → email) | Non-technical SMB owners | [TinyCommand](https://tinycommand.com/blogs/zapier-alternatives-2026), [Reddit snapshot](https://reddit.sentinel-team.org/posts/1t78cd0/snapshots/2026-05-15T20%3A49%3A13.68504Z) | Medium (second-hand Reddit): "price is the #1 complaint" | n8n (needs debugging skills), Make (still metered) | Managed n8n, or a narrow flat-fee "form → sheet → email/CRM" tool with unlimited runs and capped integrations |
| 4 | The SSO tax: SSO/SCIM locked behind enterprise tiers | Small companies with security or compliance needs | [HN 42397330](https://news.ycombinator.com/item?id=42397330), [Ory](https://www.ory.sh/blog/sso-wall-of-shame-vs-wall-of-fame) | Medium: a long-running public campaign (sso.tax). The HN thread calls it a "farce" | SSOReady, authentik, glauth (self-host effort) | An SSO/SCIM drop-in for B2B SaaS makers (sell to developers). Or, for SMBs, a "shadow SSO" password-and-provisioning hub for tools that don't offer SSO |
| 5 | Mailchimp free-plan cut, price hikes, billing for unsubscribed contacts | Small newsletters, local businesses | [BuyerSprint](https://buyersprint.com/2026/04/01/mailchimp-alternatives-2026/), [Brevo](https://www.brevo.com/blog/mailchimp-price-increase/) | Medium (competitor blogs) | Brevo, Kit, MailerLite (crowded) | Crowded. Only a niche angle works, such as a flat-price newsletter for a vertical (churches, clubs) running on SES with no contact-based billing |
| 6 | Calendly per-seat creep and CRM integrations gated to a higher tier | Growing sales and service teams | [usecarly](https://www.usecarly.com/blog/calendly-review/), [Capterra](https://www.capterra.com/p/148036/Calendly/pricing) | Weak-medium: still rated 4.7 on G2 | Cal.com (open source), Google Calendar booking pages | Crowded. Possible angle: a flat team price for a vertical (clinics, salons) with bundled payments and reminders |
| 7 | DocuSign envelope caps, about $4.50 per envelope, basic features tier-gated | Small businesses that sign occasionally | [Blueink](https://www.blueink.com/blog/why-small-businesses-are-leaving-docusign), [Prospeo](https://prospeo.io/s/docusign-pricing-reviews-pros-and-cons) | Medium (competitor blogs) | DocuSeal (no SOC 2), Dropbox Sign, SignNow | Pay-per-document e-sign with no subscription, or vertical e-sign (rental leases, freelancer contracts) |
| 8 | Lightweight logs and alerts without Datadog | Small dev teams | [HN 42397330](https://news.ycombinator.com/item?id=42397330) | Medium: the most-replied subthread in a 49-comment HN thread | HyperDX, Sentry self-host (heavy), Prometheus/Grafana (setup) | A single-binary log ingester with full-text search, alert rules and ntfy/Slack hooks, at a flat price |
| 9 | Run and debug CI pipelines locally | Developers | [HN 46345827](https://news.ycombinator.com/item?id=46345827) | Weak-medium: one explicit "I would pay" | act, Dagger (my knowledge, not verified here) | A local runner with step-through, breakpoints and rerun-from-step for GitHub Actions YAML |
| 10 | Uncluttered API client (Postman bloat, Bruno "still bloated") | Developers | [HN 46345827](https://news.ycombinator.com/item?id=46345827) | Weak-medium: the most-replied comment in its thread | Yaak, Posting, Bruno, Hoppscotch | Crowded. Differentiation would have to be extreme simplicity, such as file-based requests in the repo |
| 11 | Tax filing for US expats with US investments | US citizens living in Europe | [HN 45500937](https://news.ycombinator.com/item?id=45500937) | Weak by count, but a strong stated price ($1-2k/yr) | CPAs (error-prone), generic tax software | Expat-specific prep: PFIC/FBAR/Form 8938 worksheets and a foreign-tax-credit calculator. Needs tax-domain expertise |
| 12 | Accounting tools assume a sole owner (2FA tied to one phone) | Multi-person small firms | [HN 42397330](https://news.ycombinator.com/item?id=42397330) | Weak (one comment) | — | A shared-access and 2FA vault for small-business finance accounts, with role-based access and audit trails |
| 13 | Notion slows down with large databases | Ops teams using Notion as a CRM or database | [Fabric](https://developers.fabric.so/blog/why-notion-is-slow), [Unstar](https://unstar.app/blog/productivity-app-reviews-what-power-users-complain-about-2026) | Medium (biased sources) | Airtable (SSO tax), local-first note apps | A fast, local-first "Notion database only" app (tables, relations, views), syncing via SQLite/CRDT, with Notion import |
| 14 | Resale market for unused lifetime deals and subscriptions | Indie founders, deal buyers | [Product Hunt](https://www.producthunt.com/p/producthunt/steal-this-idea-what-s-a-product-you-wish-someone-else-would-build) | Weak-medium: 11 upvotes | AppSumo, LTD Facebook groups | A marketplace with license-transfer verification. Risk: vendor terms often forbid transfers |
| 15 | Normalized government finance data API; Reddit/sports data APIs | Developers, analysts | [HN 46691222](https://news.ycombinator.com/item?id=46691222) | Weak: a few comments, one "would pay" (for the Reddit posting API, which has ToS risk) | Paid portals, scrapers | A normalized API for one country's public procurement and spending data (start with a single source) |
| 16 | Filters for AI slop and spam reviews; chronological Facebook groups | General users | [HN 45500937](https://news.ycombinator.com/item?id=45500937) | Weak | Ad-blocker filter lists | A browser extension that classifies and hides AI-generated posts and reviews. Low price ceiling |

- Recurring meta-pattern: in items 1-7 the incumbent meters something (seats, envelopes, tasks, contacts, SKUs, % of sales) or forces a migration. A one-time or flat-price narrow tool is the repeatable wedge, and the clearest buyers are micro-businesses squeezed by those meters.
- Most crowded, and probably to avoid as generic plays: email marketing, scheduling, API clients, AI email drafting.
- Best fits for a solo developer, given evidence strength plus a narrow scope: #1 (local-first bookkeeping with a one-time license), #2 (flat-price single-function Shopify apps), #3 (flat-fee simple automation), #8 (lightweight logs and alerts), #13 (fast local-first database).

### Gaps
- No willingness-to-pay figures were found for items 2-8 beyond what users already pay incumbents. That spend is a proxy for budget, not proof that people will switch.
- Self-hosting requests (r/selfhosted) could not be verified from Reddit itself. The only related evidence is a Lemmy thread asking for a proper self-hosted Obsidian web app; existing options are a VNC-in-container hack ([Lemmy](https://discuss.mschae23.de/comment/42779?context=3)). A blog's summary of a roughly 600-comment r/selfhosted thread says email and search are seen as not worth self-hosting ([DigitalBizTalk](https://digitalbiztalk.com/article/services-not-worth-self-hosting-in-2026-the-smart-guide)), which is second-hand.
- Salesforce, Jira and HubSpot negative-review mining was not done.
