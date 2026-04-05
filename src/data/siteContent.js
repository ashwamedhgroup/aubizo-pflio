/**
 * Marketing copy sourced from public_website.md — keep in sync when the doc changes.
 */

export const home = {
  heroBadge: 'Structured systems · Real operations · India',
  headline:
    'We build structured software systems, websites, and applications for businesses of all sizes.',
  subtext:
    'From ready-to-use products to fully custom-built solutions, we support your business at every stage.',
  /** Credible proof points — tune numbers as you publish more work */
  stats: [
    { value: '6+', label: 'Industry verticals' },
    { value: 'Clarity', label: 'Before feature lists' },
    { value: 'Yours', label: 'Systems you can run' },
  ],
  trustStripTitle: 'Trusted by teams who run real operations',
  trustLogos: ['AMMA Association', 'Tanay Agronics', 'Ashwamedh Agrochemicals', 'Ashwamedh Herbal R&D Trust'],
  testimonial: {
    quote:
      'We did not need more features on paper — we needed something our team could actually use every day. The approach was practical, fast, and built around how we work.',
    attribution: 'Operations leadership',
    context: 'Agro & distribution',
  },
  intro:
    'We design and implement structured digital systems for businesses at every stage, combining ready products and custom solutions that are simple, fast, and built for independence — enabling organizations to operate with clarity, control, and long-term scalability.',
  offerings: [
    {
      title: 'Business Systems (ERP / CRM / Operations)',
      subtitle: null,
      to: '/services/business-systems',
    },
    {
      title: 'Websites, Web & Mobile Applications',
      subtitle: null,
      to: '/services/websites-apps',
    },
    {
      title: 'Custom Software Solutions',
      subtitle: null,
      to: '/services/custom-software',
    },
    {
      title: 'Aubizo — Agro operating system',
      subtitle: null,
      to: '/products/aubizo-erp',
    },
  ],
  whyClientsChooseUs: [
    'Built around real business workflows, not generic features',
    'Delivered quickly with a clear and structured approach',
    'Systems designed to run independently, reducing long-term dependency',
    'Focused on practical solutions that solve actual operational problems',
    'Direct communication with a focus on clarity and execution',
  ],
  industriesTitle: 'Industries We Work With',
  industries: [
    'Manufacturing',
    'Agro & Allied Industries',
    'Distribution & Supply Chain',
    'Retail & Commerce',
    'Service-Based Businesses',
    'Startups',
  ],
  cta: {
    title: 'Ready to bring structure and clarity to your business operations?',
    body: 'We design systems that fit your workflow, improve control, and simplify how your business runs.',
    primary: 'Request a demo',
    secondary: 'Request quotation',
  },
}

export const about = {
  title: 'About Us',
  description:
    'Practical systems from real operational experience — simple, structured, and built to run without unnecessary dependency.',
  heroBadge: 'People · Process · Product',
  storyPullQuote:
    'We didn’t need more features. We needed systems that actually worked.',
  story: {
    heading: 'Our Story',
    paragraphs: [
      'This started from a real business problem.',
      'While running our own operations in agrochemicals and related industries, we faced constant challenges with digital systems — slow delivery, unnecessary complexity, and long-term dependency on external teams. Most solutions looked good on paper but didn’t work in real operations.',
      'We didn’t need more features. We needed systems that actually worked.',
      'So we started building our own.',
      'What began as a personal interest in coding evolved into a practical approach — creating simple, structured systems that could be implemented quickly and used independently by teams.',
      'As more businesses around us faced the same challenges, this approach grew into a structured offering.',
      'Today, we design and develop websites, applications, and software systems built around real workflows — delivered fast, simple to use, and designed to run without dependency.',
    ],
  },
  mission: {
    heading: 'Our Mission',
    text: 'To build practical, reliable software systems that help businesses operate with clarity, control, and independence — without unnecessary complexity or dependency.',
  },
  vision: {
    heading: 'Our Vision',
    text: 'To create a new standard for business software — where systems are simple, fast to implement, and designed to be managed independently, enabling businesses to scale with confidence.',
  },
  leadership: {
    heading: 'Leadership',
    paragraphs: [
      'Founded by Samarth Waghchoure, with a background in both business operations and technology.',
      'With hands-on experience in managing real-world business processes and building software systems, the focus has always been on creating solutions that are practical, usable, and aligned with how businesses actually operate.',
    ],
  },
  whyWeStarted: {
    heading: 'Why We Started',
    intro: 'We saw a clear gap.',
    context: 'Most businesses were either:',
    gapPoints: ['using disconnected tools, or', 'relying on systems that were difficult to use and maintain'],
    bridge:
      'At the same time, many software providers focused more on features than usability, creating long-term dependency instead of control.',
    closing:
      'We started to solve this — by building systems that are simple, structured, and designed to work in real business environments.',
  },
  trustPoints: {
    heading: 'What You Can Expect',
    items: [
      'Systems built around real business workflows',
      'Fast and structured delivery',
      'Minimal dependency on developers',
      'Clear and direct communication',
      'Focus on practical, usable solutions',
    ],
  },
  sectors: {
    heading: 'Experience Across Industries',
    intro:
      'We work with businesses across multiple industries where structured systems and operational clarity matter:',
    list: [
      'Manufacturing',
      'Agro & Allied Industries',
      'Distribution & Supply Chain',
      'Retail & Commerce',
      'Service-Based Businesses',
      'Startups',
    ],
  },
}

export const services = {
  title: 'Services',
  description:
    'How we help with implementation and custom work — operations systems, digital products, and bespoke software. For our ready agro platform, see Aubizo under Products.',
  heroBadge: 'Capabilities',
  heroSubline:
    'Structured delivery scoped to how your business runs. The Aubizo operating layer for agro lives under Products — these pages cover services and custom builds.',
  items: [
    {
      id: 'business-systems',
      title: 'Business Systems (ERP / CRM / Operations)',
      excerpt:
        'ERP, CRM, and day-to-day operations — sales, stock, orders, payments, and approvals aligned to your workflow.',
      description:
        'We design and develop structured systems to manage your core business operations — including sales, inventory, orders, payments, and workflow tracking. Built around how your business actually runs.',
      included: [
        'ERP systems',
        'CRM systems',
        'Order & inventory management',
        'Payment & collection tracking',
        'Workflow & approval systems',
      ],
      whoFor: 'Businesses that need control, visibility, and structured management of their operations.',
      cta: 'Enquire Now',
      href: '/contact',
    },
    {
      id: 'websites-apps',
      title: 'Websites, Web & Mobile Applications',
      excerpt: 'Websites, portals, and mobile apps that plug into your operations — for customers, teams, and partners.',
      description:
        'We build business websites, web applications, and mobile apps that connect seamlessly with your systems — helping you manage operations, users, and interactions from anywhere.',
      included: [
        'Business / company websites',
        'Web portals (admin, client, dealer)',
        'Mobile apps (iOS & Android)',
        'User dashboards and interfaces',
      ],
      whoFor:
        'Businesses that need a strong digital presence along with interactive platforms for customers, teams, or partners.',
      cta: 'Enquire Now',
      href: '/contact',
    },
    {
      id: 'custom-software',
      title: 'Custom Software Solutions',
      excerpt: 'Bespoke systems and automation when off-the-shelf tools don’t match how you actually work.',
      description:
        'We develop tailored software based on your specific workflows, ensuring the system fits your business instead of forcing your business to adapt to the software.',
      included: [
        'Custom-built systems',
        'Internal tools',
        'Process automation systems',
        'Approval-based workflows',
        'Integrations with existing tools',
      ],
      whoFor: 'Businesses with unique processes that cannot be managed using standard software.',
      cta: 'Enquire Now',
      href: '/contact',
    },
  ],
}

/** @param {string} slug matches `services.items[].id` */
export function getServiceBySlug(slug) {
  return services.items.find((item) => item.id === slug) ?? null
}

export const products = {
  title: 'Products',
  description:
    'Ready platforms built for how agro and distribution businesses actually run — then extend with our services when you need more.',
  heroBadge: 'Product suite',
  heroSubline:
    'Aubizo is positioned as the operating layer for agro operations — not a generic ERP label. Explore the full story on the product page.',
  items: [
    {
      id: 'aubizo-erp',
      shortName: 'Aubizo',
      title: 'Aubizo – The Operating System for Agro Businesses',
      excerpt:
        'A unified platform that integrates sales, operations, field teams, inventory, orders, and collections — built specifically for agro companies.',
      card: {
        whatItIs:
          'Aubizo is a unified business platform that integrates sales, operations, field teams, inventory, orders, and collections into one structured system — built specifically for agro companies.',
        whoFor: [
          'Fertilizer companies',
          'Agrochemical companies',
          'Distribution businesses with dealer networks',
          'Businesses managing field teams',
        ],
        capabilities: [
          'Product & pricing management',
          'Dealer & farmer network management',
          'Field force tracking & activity monitoring',
          'Order & dispatch management',
          'Collection & payment tracking',
          'Reports & business analytics',
        ],
        coreValue: [
          'One platform, zero silos',
          'Complete visibility across operations',
          'Structured workflows instead of manual processes',
          'Real-time decision making',
          'Reduced revenue leakage',
        ],
        cta: 'Request a demo',
      },
    },
  ],
}

export const productAubizo = {
  headline: 'Run Your Entire Agro Business on One Platform',
  heroSubtext:
    'Aubizo connects dealers, field teams, inventory, orders, and collections into one integrated system — giving you complete operational control.',
  problemSection: {
    title: 'Challenges Agro Businesses Face',
    bullets: [
      'Orders managed via WhatsApp and calls',
      'No visibility of field staff',
      'Inventory mismatch across warehouses',
      'Scattered sales and collection data',
    ],
    impactTitle: 'Impact',
    impacts: ['Revenue leakage', 'Poor control', 'Slow decisions'],
  },
  solutionSection: {
    title: 'One Platform to Manage Your Entire Business',
    body: 'Aubizo integrates all operations into one system — eliminating silos and giving complete visibility across your business.',
  },
  moduleGroups: [
    {
      title: 'Product & inventory',
      items: ['Batch tracking', 'Multi-warehouse', 'Stock transfer'],
    },
    {
      title: 'Dealer & order management',
      items: ['Dealer onboarding', 'Order approvals', 'Scheme management'],
    },
    {
      title: 'Field force management',
      items: ['Attendance tracking', 'GPS visits', 'Travel tracking'],
    },
    {
      title: 'Farmer data',
      items: ['Farmer profiles', 'Crop & land data', 'Geo tagging'],
    },
    {
      title: 'Dispatch & logistics',
      items: ['Order-linked dispatch', 'LR & POD', 'Shipment tracking'],
    },
    {
      title: 'Collections & payments',
      items: ['Payment tracking', 'Outstanding reports', 'Digital receipts'],
    },
    {
      title: 'CRM & leads',
      items: ['Lead capture', 'Follow-ups', 'Conversion tracking'],
    },
    {
      title: 'Reports & analytics',
      items: ['Sales reports', 'Field reports', 'Performance tracking'],
    },
  ],
  whySection: {
    title: 'Why companies choose Aubizo',
    bullets: [
      'Single platform, zero silos',
      'Complete field visibility',
      'Structured dealer & farmer ecosystem',
      'End-to-end financial control',
    ],
  },
  /** Labels around the hub diagram (center = Aubizo) */
  hubModules: [
    'Reports',
    'Employees',
    'Dealers',
    'Farmers',
    'Orders',
    'Inventory',
    'Dispatch',
    'Collections',
  ],
  closingCta: {
    title: 'See Aubizo in action',
    body: 'Schedule a demo tailored to your business and understand how Aubizo can transform your operations.',
  },
  screenshotLabels: ['Dashboard', 'Order flow', 'Inventory screen', 'Reports', 'Mobile view'],
  industries: [
    'Fertilizer & agrochemical',
    'Field-led sales organisations',
  ],
  faq: [
    {
      q: 'Is Aubizo only for large agro companies?',
      a: 'Aubizo scales with you — from structured dealer networks to multi-warehouse operations. We’ll recommend scope based on how you work today.',
    },
    {
      q: 'Can we start with one module and expand?',
      a: 'Yes. Many teams phase rollout by priority — e.g. orders & inventory first, then field and collections.',
    },
    {
      q: 'Does it support role-based access for dealers and field staff?',
      a: 'Yes. Access is structured around roles so dealers, field teams, and head office each see what they need.',
    },
    {
      q: 'Can Aubizo be customized for our schemes and approvals?',
      a: 'Yes. Workflows, schemes, and approval paths can be aligned to your commercial and operational rules.',
    },
  ],
  demoForm: {
    title: 'Request a demo',
    submit: 'Request a demo',
    fields: ['Name', 'Company Name', 'Phone', 'Email', 'Business Type', 'Message'],
  },
}

/** @param {string} slug matches `products.items[].id` */
export function getProductBySlug(slug) {
  const item = products.items.find((p) => p.id === slug)
  if (!item) return null
  if (item.id === 'aubizo-erp') {
    return { ...item, ...productAubizo }
  }
  return null
}

export const caseStudies = {
  title: 'Case Studies',
  description:
    'A selection of systems and platforms we’ve built across different businesses — focused on solving real operational challenges.',
  heroBadge: 'Proof of delivery',
  heroSubline:
    'Executive-ready narratives: context, constraint, what we built, and the operational result — so procurement and leadership can see how we work.',
  stats: [
    { value: '4', label: 'Delivery stories' },
    { value: 'Multi-sector', label: 'Agro, R&D, associations' },
    { value: 'Outcome-led', label: 'Problem → system → result' },
  ],
  trustStripTitle: 'Organizations featured in this portfolio',
  trustLogos: ['AMMA Association', 'Tanay Agronics', 'Ashwamedh Agrochemicals', 'Ashwamedh Herbal R&D Trust'],
  testimonial: {
    quote:
      'The case studies read like how we actually buy — clear problem, clear build, clear outcome. It made it easy to brief our team and move forward.',
    attribution: 'Program lead',
    context: 'Distribution & operations',
  },
  note:
    'Screenshots, metrics, and deeper technical appendices can be layered in as your assets are ready — the story structure stays the same.',
  sectorsHeading: 'Sectors we have worked with',
  sectors: [
    'Agro & Allied Industries',
    'Manufacturing',
    'Research & Development',
    'Associations & Organizations',
    'Distribution Businesses',
  ],
  cases: [
    {
      id: 'amma-association',
      tag: 'Association & membership',
      excerpt: 'One platform for members, activities, and internal coordination — less fragmentation, clearer communication.',
      name: 'AMMA Association',
      overview: 'A professional association managing members, activities, and communication across its network.',
      problem: 'Lack of a structured digital system to manage members, activities, and communication efficiently.',
      solution:
        'Developed a centralized web platform to manage member data, activities, and internal coordination.',
      outcome: 'Improved organization, streamlined communication, and better visibility across the association.',
      scope: 'Centralized web platform for members, activities, and coordination',
    },
    {
      id: 'tanay-agronics',
      tag: 'Agro & distribution',
      excerpt: 'Digital front door for products and customers — stronger visibility without overcomplicating day-to-day work.',
      name: 'Tanay Agronics',
      overview: 'An agro-based business focused on product distribution and customer engagement.',
      problem: 'Limited digital presence and lack of a structured platform to represent products and engage customers.',
      solution: 'Built a business website and supporting digital structure to showcase products and improve communication.',
      outcome: 'Enhanced visibility, improved brand presence, and better customer interaction.',
      scope: 'Business website and supporting digital structure',
    },
    {
      id: 'ashwamedh-agrochemicals',
      tag: 'Agro-inputs · scale',
      excerpt: 'Structured operations across sales, dealers, and internal tracking — built for complexity at volume.',
      name: 'Ashwamedh Agrochemicals Pvt Ltd',
      overview: 'A large agro-input company dealing with fertilizers, bio-products, and distribution networks.',
      problem: 'Operational complexity across sales, dealer management, and internal tracking.',
      solution:
        'Designed and implemented structured systems for managing operations, tracking activities, and improving visibility.',
      outcome: 'Better control over operations, improved tracking, and more structured workflows.',
      scope: 'Structured operational and tracking systems',
    },
    {
      id: 'ashwamedh-herbal-rd',
      tag: 'Research & healthcare',
      excerpt: 'A credible digital layer for research-led work — clearer presentation and easier access to information.',
      name: 'Ashwamedh Herbal Research & Development Trust',
      overview: 'A research-focused organization working in herbal and healthcare development.',
      problem: 'Need for structured digital presence and systemized information management.',
      solution: 'Developed a clean and structured digital platform to present activities and manage information.',
      outcome: 'Improved presentation, better organization, and easier access to information.',
      scope: 'Digital platform for presentation and information management',
    },
  ],
}

/** @param {string} slug matches `caseStudies.cases[].id` */
export function getCaseStudyBySlug(slug) {
  return caseStudies.cases.find((c) => c.id === slug) ?? null
}

export const insights = {
  title: 'Insights',
  description:
    'Practical insights on building systems, improving operations, and using technology effectively in business.',
  heroBadge: 'Field notes · Not theory',
  heroSubline:
    'Short, decision-useful perspectives for owners, ops leads, and IT buyers — grounded in implementations, not slide decks.',
  stats: [
    { value: '12', label: 'Topics in the library' },
    { value: '4', label: 'Focus areas' },
    { value: 'Ops-first', label: 'Systems that ship' },
  ],
  supporting:
    'Every piece follows the same spine: what breaks in the real world, why it happens, what to do next — so you can brief stakeholders or challenge vendors with clarity.',
  categories: ['Systems & Operations', 'ERP & Software', 'Automation & Efficiency', 'Websites & Digital Presence'],
  articleStructure: ['Problem', 'Why it happens', 'Practical solution', 'Conclusion'],
  testimonial: {
    quote:
      'Finally content that sounds like our Monday morning problems — not a vendor brochure. We shared two articles internally before we even booked a call.',
    attribution: 'Head of operations',
    context: 'Distribution',
  },
  roadmapNote:
    'PDF briefs, email digests, or a CMS can sit behind these URLs later — each topic already has a shareable page.',
  articles: [
    {
      category: 'Systems & Operations',
      slug: 'systems-operations',
      items: [
        {
          slug: 'structure-operations-with-systems',
          title: 'How to Structure Your Business Operations Using Systems',
          teaser: 'Map processes, owners, and data before you shop for tools — so software fits how you actually run.',
          problem:
            'Teams often buy software before they agree on how work actually flows. Spreadsheets, WhatsApp, and ad-hoc tools hide the real handoffs, approvals, and exceptions — so demos look fine but go-live feels chaotic.',
          whyItHappens:
            'Tools amplify process — good or bad. When ownership, master data, and “who is allowed to change what” stay implicit, every new system inherits the confusion. Vendors sell features; your business needs clarity first.',
          practicalSolution:
            'Run a lightweight process map: triggers, steps, approvers, systems of record, and edge cases. Name owners for each object (customer, order, stock, invoice). Only then translate that map into requirements your team can test against.',
          conclusion:
            'Structure is cheaper before you license software. Retrofitting roles, data, and workflows after go-live is what makes implementations feel expensive and slow.',
        },
        {
          slug: 'struggle-without-workflow-systems',
          title: 'Why Most Businesses Struggle Without Proper Workflow Systems',
          teaser: 'When spreadsheets and ad-hoc tools crack under volume — and what “good enough” costs you.',
          problem:
            'Work still “gets done,” but visibility disappears. People chase status in threads, duplicate data entry creeps in, and month-end becomes a reconciliation project instead of a routine close.',
          whyItHappens:
            'Early-stage flexibility turns into hidden dependency on individuals. As volume grows, informal workflows do not scale — they leak time, errors, and customer-facing delays.',
          practicalSolution:
            'Prioritise a thin vertical slice: one journey end-to-end (e.g. order → fulfilment → invoice) with a single source of truth. Add approvals and audit only where risk or regulation demands — not everywhere at once.',
          conclusion:
            'Workflow systems are not about bureaucracy; they are about making the normal path obvious so exceptions are rare and visible.',
        },
        {
          slug: 'when-to-leave-excel-for-erp',
          title: 'From Excel to ERP: When Should You Upgrade',
          teaser: 'Signals that it is time to graduate from files to a system your team can run every day.',
          problem:
            'Excel is fast until it is not: conflicting versions, broken formulas, and no reliable history of who changed what. Teams outgrow files but delay a move because ERP sounds heavy.',
          whyItHappens:
            'Spreadsheets win on day one because they are flexible. They lose when concurrency, permissions, and integration with field or warehouse reality matter more than layout tweaks.',
          practicalSolution:
            'Upgrade when (a) multiple people need the same live data, (b) you need role-based access and audit, or (c) operational volume makes manual consolidation a weekly crisis. Pilot one module or business unit before a big-bang rollout.',
          conclusion:
            'The right time is when file-based work creates more risk than change — not when a competitor buys a brand-name suite.',
        },
      ],
    },
    {
      category: 'ERP & Software',
      slug: 'erp-software',
      items: [
        {
          slug: 'what-good-erp-should-do',
          title: 'What a Good ERP System Should Actually Do',
          teaser: 'The capabilities that matter for daily operations — beyond feature checklists and demo scripts.',
          problem:
            'Buyers compare long feature matrices while daily pain sits elsewhere: stock truth, collection visibility, approvals, and reports leadership can trust.',
          whyItHappens:
            'Demos optimise for screens that look impressive in an hour. Real value shows up in repeatability: the same data powering sales, warehouse, and finance without reconciliation marathons.',
          practicalSolution:
            'Score systems on core objects you run daily (orders, inventory, payments, field visits), role-based access, audit trails, and exports/APIs for what you will integrate later. Ignore nice-to-haves until the spine works.',
          conclusion:
            'A good ERP reduces coordination cost — fewer meetings to “figure out the number” — not just digitises the same chaos faster.',
        },
        {
          slug: 'erp-vs-crm-what-you-need',
          title: 'ERP vs CRM: What Does Your Business Really Need',
          teaser: 'How to choose when both categories sound similar on paper but behave differently in practice.',
          problem:
            'Teams conflate “customer data” and “running the business.” A CRM-first stack can starve operations; an ERP without pipeline visibility frustrates sales.',
          whyItHappens:
            'Categories blur in marketing. ERP anchors fulfilment, stock, and money; CRM anchors pipeline, communication, and handoffs to delivery. Your mix depends on whether you sell complex physical goods or lightweight services.',
          practicalSolution:
            'Start from revenue and fulfilment: where does truth live for stock, pricing, credit, and delivery? If operations break first, anchor ERP and integrate CRM. If pipeline and renewals drive growth, anchor CRM and integrate fulfilment carefully.',
          conclusion:
            'The answer is rarely “only one tool” — it is which system owns which truth, and a clean integration contract between them.',
        },
        {
          slug: 'mistakes-implementing-business-software',
          title: 'Common Mistakes While Implementing Business Software',
          teaser: 'Scope, training, and ownership traps we see in the field — and how to avoid them early.',
          problem:
            'Projects stall when scope tries to boil the ocean, data migration is treated as a weekend task, and nobody owns day-to-day decisions after the vendor leaves.',
          whyItHappens:
            'Organisations underestimate change management and overestimate “configuration.” Without executive sponsorship and floor-level champions, software becomes shelfware.',
          practicalSolution:
            'Phase scope: go-live a usable slice in weeks, not months. Clean master data deliberately. Train by role with real scenarios, not generic clicks. Assign internal owners for master data, approvals, and report sign-off.',
          conclusion:
            'Successful implementations look boring — tight scope, clear owners, and honest training — not a maximal feature launch.',
        },
      ],
    },
    {
      category: 'Automation & Efficiency',
      slug: 'automation-efficiency',
      items: [
        {
          slug: 'automation-reduce-manual-work',
          title: 'How Automation Can Reduce Manual Work in Your Business',
          teaser: 'Where to start so automation pays back quickly without boiling the ocean.',
          problem:
            'Teams copy-paste between systems, re-key orders, and chase status manually. “Automation” gets sold as a platform when a few reliable rules would already win hours back.',
          whyItHappens:
            'Fragmented tools and unclear ownership make manual glue feel safer than change — until errors and delays show up on customer invoices.',
          practicalSolution:
            'Automate high-volume, low-judgement steps first: notifications, validations, scheduled reports, and handoffs when a status changes. Measure before/after time and error rate on one workflow, then expand.',
          conclusion:
            'The best automation is boring, observable, and owned — not a black box nobody trusts.',
        },
        {
          slug: 'where-businesses-waste-time',
          title: 'Where Businesses Waste Time (And How to Fix It)',
          teaser: 'Hidden drag in approvals, re-entry, and swivel-chair work — and practical fixes.',
          problem:
            'Time leaks in approval ping-pong, searching for the “latest” file, and reconciling three versions of the same number. People adapt — so the waste becomes invisible.',
          whyItHappens:
            'Without standard paths, every exception becomes a hero effort. Tools multiply but processes stay informal, so work fragments across chat, email, and spreadsheets.',
          practicalSolution:
            'Map the top five recurring requests (e.g. credit note, stock transfer, dealer price change). For each, define a single entry point, SLA, and system of record. Kill duplicate entry at the boundary between teams.',
          conclusion:
            'Fixing time waste is less about motivation and more about removing duplicate coordination — systems should carry state, not people’s memory.',
        },
        {
          slug: 'simple-automations-growing-business',
          title: 'Simple Automations Every Growing Business Should Use',
          teaser: 'High-leverage automations that do not require a massive transformation programme.',
          problem:
            'Growth increases volume before headcount catches up. Simple reminders and status-driven actions prevent small misses from becoming customer-facing failures.',
          whyItHappens:
            'Early habits (manual follow-ups, ad-hoc lists) do not fail until scale exposes them — missed collections, stock-outs, and delayed dispatch updates.',
          practicalSolution:
            'Start with alerts on overdue tasks, auto-assignment by territory or product line, digest emails for managers, and blocked transitions when mandatory fields are missing. Prefer rules you can read and adjust.',
          conclusion:
            'Simple automations compound — they buy time for the harder process design work that follows.',
        },
      ],
    },
    {
      category: 'Websites & Digital Presence',
      slug: 'websites-digital',
      items: [
        {
          slug: 'what-business-website-should-do',
          title: 'What a Business Website Should Actually Do',
          teaser: 'Treat your site as part of the operating model — not just a brochure on the internet.',
          problem:
            'Many sites look polished but do not support how buyers decide: proof, clarity on offer, fast ways to enquire, and alignment with how you actually serve customers.',
          whyItHappens:
            'Websites get treated as marketing-only while operations live elsewhere. Prospects sense the gap when promises on the site do not match response times or product reality.',
          practicalSolution:
            'Define primary jobs: credibility, lead capture, partner/dealer orientation, or self-service status. Match CTAs and content to those jobs. Tie enquiry flows to CRM or inbox discipline so nothing lands in a black hole.',
          conclusion:
            'A strong business website is an operational front door — it should make the next step obvious and reliable.',
        },
        {
          slug: 'why-websites-fail-leads',
          title: 'Why Most Websites Fail to Generate Leads',
          teaser: 'Conversion gaps that have little to do with design trends and everything to do with intent and trust.',
          problem:
            'Traffic arrives but forms feel risky, value is vague, or mobile friction kills completion. Teams blame “SEO” when the offer and trust signals are weak.',
          whyItHappens:
            'Buyers compare you to alternatives in minutes. Without specificity (who you serve, proof, timelines, contact paths), they default to no action.',
          practicalSolution:
            'Tighten headline + proof above the fold, reduce fields to essentials, add human contact options, and show sector-relevant outcomes. Test one change at a time with a simple thank-you and fast follow-up SLA.',
          conclusion:
            'Lead generation is a trust and clarity problem first — design trends are secondary.',
        },
        {
          slug: 'website-vs-business-system',
          title: 'Difference Between a Website and a Business System',
          teaser: 'When a marketing site is enough — and when you need authenticated workflows and real data.',
          problem:
            'Teams try to bend a public website into order management, partner portals, or inventory views — and hit security, data integrity, and UX walls.',
          whyItHappens:
            'Websites excel at public content and light forms. Business systems excel at roles, workflows, and authoritative data. Blurring the two without architecture creates brittle plugins and unsafe shortcuts.',
          practicalSolution:
            'Use the site for discovery and enquiry; use authenticated apps for orders, stock, payments, and approvals. Integrate so public CTAs create structured records instead of orphan emails.',
          conclusion:
            'Know which layer owns truth. Marketing attracts; systems execute — connect them deliberately.',
        },
      ],
    },
  ],
}

/** @param {string} slug matches `insights.articles[].items[].slug` */
export function getInsightBySlug(slug) {
  for (const group of insights.articles) {
    const item = group.items.find((i) => i.slug === slug)
    if (item) {
      return {
        ...item,
        category: group.category,
        categorySlug: group.slug,
      }
    }
  }
  return null
}

/** Replace placeholders with your live contact details when ready. */
export const contact = {
  title: 'Contact',
  description:
    'Enquiries, demos, and project discussions — direct lines to the team that builds and implements your systems.',
  heroBadge: 'Direct access · No hand-off maze',
  heroSubline:
    'Whether you’re scoping ERP, a custom workflow, or Aubizo for agro operations — send context, not a perfect RFP. We’ll reply with clarity on fit and next steps.',
  stats: [
    { value: 'Human', label: 'Replies, not ticket bots' },
    { value: 'Ops-first', label: 'We speak workflow' },
    { value: 'India', label: 'Built for real field & plant reality' },
  ],
  responseLine: 'We aim to respond within one business day — faster when your subject line says what you’re trying to fix.',
  trustStripTitle: 'Teams we’ve shipped for',
  trustLogos: ['AMMA Association', 'Tanay Agronics', 'Ashwamedh Agrochemicals', 'Ashwamedh Herbal R&D Trust'],
  formIntro:
    'Share enough context that we can be useful in the first reply: what you run today, what’s breaking, and what “good” looks like.',
  formHint: 'No minimum project size — we’ll tell you honestly if we’re not the right fit.',
  sidebarTitle: 'Company & channels',
  exploreTitle: 'Explore while you’re here',
  exploreSubline: 'Proof, capabilities, and deep dives — so your internal brief is stronger before we talk.',
  exploreLinks: [
    { label: 'Case studies', hint: 'Delivery stories & outcomes', to: '/case-studies' },
    { label: 'Services', hint: 'ERP, apps, custom builds', to: '/services' },
    { label: 'Aubizo', hint: 'Operating system for agro businesses', to: '/products/aubizo-erp' },
    { label: 'Insights', hint: 'How we think about systems', to: '/insights' },
  ],
  afterSubmitTitle: 'What happens next',
  afterSubmit: [
    'We read your note and may reply with a few clarifying questions — not a generic brochure.',
    'If there’s a fit, we’ll suggest a short call or demo focused on your workflow — not a feature tour.',
    'If another path is better (e.g. partner-only work), we’ll say so clearly.',
  ],
  company: {
    heading: 'Company details',
    email: { label: 'Email', value: '' },
    phone: { label: 'Phone', value: '' },
    address: { label: 'Office address', value: '' },
    hint: 'Add your email, phone, and office address below. Replace the placeholder map with your live embed when coordinates are ready.',
  },
  whatsappLabel: 'Message on WhatsApp',
  whatsappHref: 'https://wa.me/',
  form: {
    heading: 'Send an enquiry',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company name',
    message: 'Message',
    submit: 'Send message',
  },
}

export const demo = {
  title: 'Request a demo',
  description:
    'A focused walkthrough of how our systems fit real operations — not a generic slide deck. Tell us what you run today and what you want to see.',
  heroBadge: 'Live walkthrough · Your workflows',
  heroSubline:
    'We tailor the session to your context: sales & stock, collections, field teams, portals, or custom builds. Bring your questions — we’ll show the spine of the system, not every checkbox.',
  stats: [
    { value: '~45 min', label: 'Typical session' },
    { value: 'Workflow-led', label: 'Not a feature dump' },
    { value: 'Decision-ready', label: 'For buyers & ops leads' },
  ],
  responseLine: 'We’ll confirm a slot or suggest a better format — usually within one business day.',
  agendaTitle: 'What we usually cover',
  agenda: [
    'How your team works today — roles, bottlenecks, and what “good” looks like after go-live.',
    'A walkthrough mapped to that reality: orders, inventory, collections, field / dealer flows, or your custom scope.',
    'Implementation shape at a high level: phases, data, training, and how you retain control.',
  ],
  sidebarTitle: 'Who this is for',
  sidebarBody:
    'Owners, operations heads, and IT buyers evaluating ERP, portals, or bespoke software — especially in distribution, agro, manufacturing, and associations. If you only need a brochure site, say so — we’ll point you to the right path.',
  trustStripTitle: 'Teams we’ve walked through similar builds',
  trustLogos: ['AMMA Association', 'Tanay Agronics', 'Ashwamedh Agrochemicals', 'Ashwamedh Herbal R&D Trust'],
  formIntro:
    'The more specific you are about what you want to see, the faster we can prepare a useful session.',
  formHint: 'No obligation — if we’re not the right fit after the call, we’ll say so.',
  fields: [
    { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
    { name: 'company', label: 'Company', type: 'text', autoComplete: 'organization', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', required: true },
    { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true },
    { name: 'businessType', label: 'Business type', type: 'text', autoComplete: 'off', required: false },
    {
      name: 'interestedIn',
      label: 'What you want to see',
      type: 'text',
      placeholder: 'e.g. Aubizo stock + orders, dealer portal, custom approvals…',
      required: false,
    },
    { name: 'message', label: 'Context & questions', type: 'textarea', rows: 4, required: false },
  ],
  submit: 'Request my walkthrough',
  exploreTitle: 'Review proof before we meet',
  exploreSubline: 'Case studies and product detail help internal stakeholders align before the call.',
  exploreLinks: [
    { label: 'Case studies', hint: 'Outcomes by sector', to: '/case-studies' },
    { label: 'Aubizo', hint: 'Product deep dive', to: '/products/aubizo-erp' },
    { label: 'Services', hint: 'Custom & implementation', to: '/services' },
    { label: 'Contact', hint: 'Prefer email first', to: '/contact' },
  ],
}
