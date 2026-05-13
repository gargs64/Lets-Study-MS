# SEO Skill — Let's Study MS
> Adapted from [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) (MIT License)
> Run monthly: Ask AI to "implement the SEO skill" to audit and optimize.

---

## How To Use

Tell the AI assistant:
> "Run the SEO skill on this project" or "Implement the SEO skill"

The AI will:
1. Read this file for the checklist
2. Audit every page against the checklist
3. Fix issues and generate a report

---

## Checklist (Run Every Month)

### 1. index.html (Root SEO)
- [ ] `<title>` tag: 50-60 chars, unique, includes primary keyword
- [ ] `<meta description>`: 150-160 chars, compelling, includes keyword
- [ ] `<meta keywords>`: relevant long-tail keywords
- [ ] `<link rel="canonical">` present and correct
- [ ] Open Graph tags: og:title, og:description, og:image, og:url, og:type
- [ ] Twitter Card tags: twitter:card, twitter:title, twitter:description, twitter:image
- [ ] Geo meta tags for local SEO
- [ ] JSON-LD EducationalOrganization schema (keep updated with new info)
- [ ] **NO FAQPage schema** (restricted to gov/health since Aug 2023)
- [ ] Favicon set correctly

### 2. Per-Page SEO (React Helmet)
For EVERY page (Home, Testimonials, Contact, all 7 course pages):
- [ ] Unique `<title>` (50-60 chars)
- [ ] Unique `<meta description>` (150-160 chars)
- [ ] `<link rel="canonical">` with correct URL
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Proper H1 tag (exactly one per page)
- [ ] BreadcrumbList schema where applicable

### 3. Technical SEO
- [ ] `robots.txt` allows all pages, references sitemap
- [ ] AI crawler directives (allow GPTBot, ClaudeBot, PerplexityBot)
- [ ] `sitemap.xml` with ALL pages, correct `<lastmod>` dates
- [ ] No `<priority>` or `<changefreq>` tags in sitemap (Google ignores them)
- [ ] `llms.txt` file for AI search visibility
- [ ] 404 page with `noindex, nofollow`
- [ ] Catch-all route in App.jsx for 404
- [ ] `.htaccess` SPA rewrite rules

### 4. Content & E-E-A-T
- [ ] Author credentials visible (faculty section)
- [ ] Contact info accessible (phone, email, address)
- [ ] Student testimonials with real names and photos
- [ ] Achievement data with specific numbers (AIR ranks, etc.)
- [ ] Institution affiliations mentioned (IIT, ISI, IISc, etc.)

### 5. Images
- [ ] All `<img>` have descriptive `alt` text (not just "Logo" or "image")
- [ ] Images use WebP/optimized formats where possible
- [ ] Hero/LCP images NOT lazy-loaded
- [ ] Below-fold images use `loading="lazy"`
- [ ] Width/height or aspect-ratio set for CLS prevention

### 6. Schema Markup
- [ ] EducationalOrganization (index.html) — keep address, phone, email current
- [ ] BreadcrumbList on Home page
- [ ] **NEVER** use: HowTo (deprecated Sept 2023), FAQ (restricted Aug 2023)
- [ ] Keep schema valid — test at https://search.google.com/test/rich-results

### 7. AI Search / GEO Readiness
- [ ] `llms.txt` present at `/llms.txt`
- [ ] Allow GPTBot, ClaudeBot, PerplexityBot in robots.txt
- [ ] Clear, quotable sentences on key pages
- [ ] Question-based H2/H3 headings where natural
- [ ] Publication/update dates visible

### 8. Performance
- [ ] Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] No render-blocking resources
- [ ] Images compressed and optimized
- [ ] Code-split routes (Vite handles this)

---

## Site Structure (All Routes)

| Path | Page | Priority |
|------|------|----------|
| `/` | Home | 1.0 |
| `/testimonials` | Hall of Fame (Alumni) | 0.8 |
| `/contact` | Contact Us | 0.8 |
| `/courses/foundation-batch` | Foundation Batch | 0.9 |
| `/courses/semester-batch` | Semester Batch | 0.9 |
| `/courses/msc-mathematics` | MSc Mathematics | 0.9 |
| `/courses/mtech-datascience` | MTech/Data Science | 0.9 |
| `/courses/engineering-mathematics` | Engineering Mathematics | 0.9 |
| `/courses/phd-entrances` | PhD Entrances | 0.9 |
| `/courses/advanced-courses` | Advanced Courses | 0.9 |

---

## Last Audit: 2026-05-13

### Changes Made:
- Removed FAQPage schema from index.html (restricted to gov/health)
- Updated sitemap.xml dates and removed `<priority>` tags
- Added AI crawler directives to robots.txt
- Created llms.txt for AI search visibility
- Added OG/Twitter tags to Testimonials and Contact pages
- Added catch-all 404 route to App.jsx
- Improved image alt text on logo
- Added BreadcrumbList schema to Testimonials page
