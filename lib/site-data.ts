import type { TextBlock } from '@/components/Sections';

export type SitePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  trust?: string[];
  intro?: TextBlock[];
  offerTitle?: string;
  offers?: TextBlock[];
  steps?: string[];
  faq?: { q: string; a: string }[];
  final?: string;
  parent?: string;
  internalLinks?: { label: string; href: string }[];
};

const restaurantOffers = [
  ['Restaurant CRM Software', '/restaurant-crm-software', 'Manage your customers, orders and loyalty program in one place'],
  ['Restaurant Website Development', '/restaurant-website-development', 'A professional website that gets you orders and builds trust'],
  ['Restaurant SEO Services', '/restaurant-seo-services', 'Rank on Google when hungry customers search for restaurants near them'],
  ['Restaurant Loyalty Software', '/restaurant-loyalty-software', 'Turn one-time diners into regulars with a simple loyalty program'],
  ['Online Ordering System', '/restaurant-online-ordering-system', 'Take orders directly from your website with no commission to third parties'],
  ['WhatsApp Marketing', '/restaurant-whatsapp-marketing', 'Reach your customers where they already are automatically']
];

const dentalOffers = [
  ['Dental CRM Software', '/dental-crm-software', 'Manage patients, leads and follow-ups in one place'],
  ['Dental Website Development', '/dental-website-development', 'A website that builds trust and converts visitors into booked patients'],
  ['Dental SEO Services', '/dental-seo-services', 'Rank on Google when patients search for a dentist near them'],
  ['Dentist Appointment Software', '/dentist-appointment-software', 'Fill appointment slots automatically with zero manual follow-up'],
  ['Dental Marketing Services', '/dental-marketing-services', 'Reach new patients in your neighbourhood with targeted digital marketing'],
  ['Dental Practice Automation', '/dental-practice-automation', 'Automate reminders, follow-ups and reviews']
];

const bangaloreNeighbourhoods = [
  'Koramangala — One of Bangalore’s most competitive markets.',
  'Indiranagar — High footfall, high expectations and strong digital comparison.',
  'Jayanagar — Established neighbourhood with loyal local customers.',
  'HSR Layout — Fast growing, tech savvy customer base.',
  'Whitefield — Large residential and corporate catchment.'
];

const restaurantLinks = restaurantOffers.map(([label, href]) => ({ label, href }));
const dentalLinks = dentalOffers.map(([label, href]) => ({ label, href }));

function offerCards(items: string[][]): TextBlock[] {
  return items.map(([title, href, body]) => ({ title, body, links: [{ label: 'Learn More', href }] }));
}

const featureDescriptions: Record<string, string> = {
  'Customer Database':
    'Store customer names, phone numbers, preferences, birthdays and order history in one simple view. Your team can recognise regulars, segment customers and bring people back without digging through old bills or chats.',
  'Loyalty Program':
    'Run points, visit-based rewards or special offers without forcing customers to download an app. Every reward is easy to track, easy to redeem and designed for repeat visits.',
  'WhatsApp Follow-ups':
    'Send timely WhatsApp messages after orders, visits or long gaps between purchases. The system helps you stay present without manually messaging every customer.',
  'Order History Tracking':
    'See what each customer ordered, when they ordered and how often they come back. This makes targeted offers, menu suggestions and retention campaigns much more practical.',
  'Review Management':
    'Ask happy customers for reviews at the right moment and track your review growth over time. Stronger reviews improve trust before a new customer ever walks in.',
  'Simple Dashboard':
    'Track repeat customers, campaign performance, reviews and loyalty activity in one clean dashboard. Owners get the numbers they need without opening five different tools.',
  'Professional Design':
    'Your website should make the food, location and ordering options instantly clear. We design restaurant sites that feel credible, load fast and guide visitors toward calling, ordering or visiting.',
  'Mobile First':
    'Most restaurant and clinic searches happen on phones, often while people are ready to act. Every page is built for fast scanning, thumb-friendly actions and clear WhatsApp or call buttons.',
  'Fast Loading under 2 seconds':
    'Slow websites lose hungry customers before they see your menu. We optimise the build so pages load quickly on mobile connections across Bengaluru.',
  'Online Menu':
    'Publish a clean menu that is easy to read, update and share. Customers can browse categories, prices and signature items without downloading PDFs or zooming into images.',
  'Google Maps Integration':
    'Make it easy for visitors to find your exact location and navigate from search to your door. Maps integration also strengthens local trust signals on the page.',
  'WhatsApp Order Button':
    'Turn browsing into direct conversations with a visible WhatsApp order button. Customers can ask questions, place orders and confirm details without switching channels.',
  'SEO Ready':
    'We structure titles, descriptions, headings, internal links and technical basics from day one. That gives Google a clean foundation before ongoing SEO work begins.',
  'Review Integration':
    'Show real Google review signals where visitors make decisions. Strong social proof reduces hesitation and helps new customers trust you faster.',
  'Google Business Profile Optimisation':
    'We clean up your categories, services, photos, descriptions and local signals so Google understands what you offer. A stronger profile improves Maps visibility and conversion from search.',
  'Local Keyword Research':
    'We identify the exact searches customers use in Bengaluru neighbourhoods, not generic national keywords. This helps each page target people who are already looking nearby.',
  'On-Page SEO':
    'We improve page titles, headings, internal links, service content and local relevance. The goal is to make every important page easier for Google and customers to understand.',
  'Local Citations':
    'Consistent business details across directories help Google trust your location and contact information. We fix mismatches and build the citations that matter locally.',
  'Monthly Reporting':
    'You get clear monthly updates on rankings, traffic, calls, reviews and next actions. Reports focus on business impact, not vanity charts.',
  'Points System':
    'Give customers points for visits, orders or spend and let them redeem simple rewards. The structure is easy for staff to explain and easy for customers to remember.',
  'WhatsApp Integration':
    'Customers receive loyalty updates, reminders and offers directly on WhatsApp. This keeps communication familiar and avoids the friction of another app.',
  'Birthday and Anniversary Offers':
    'Automatically send personal offers around birthdays and anniversaries. These small moments give customers a warm reason to choose you again.',
  'Repeat Visit Rewards':
    'Create rewards that encourage the next visit instead of only discounting the current bill. The system nudges customers back while protecting margins.',
  'Lapsed Customer Recovery':
    'Identify customers who have not returned and send them a thoughtful offer or reminder. This turns forgotten customer data into recoverable revenue.',
  'Loyalty Dashboard':
    'See active members, redemptions, repeat visits and campaign performance in one place. Owners can quickly tell what is working and what needs adjustment.',
  'Website Ordering':
    'Accept direct orders from your own website with your menu, pricing and customer data under your control. This reduces dependence on high-commission marketplaces.',
  'WhatsApp Ordering':
    'Route orders into WhatsApp so customers can confirm items, timing and payment naturally. It is simple for staff and familiar for Bengaluru customers.',
  'Digital Menu Management':
    'Update items, prices, availability and specials without waiting for a developer. A clean digital menu keeps your ordering flow accurate every day.',
  'Order Notifications':
    'Receive clear notifications when an order comes in so staff can act quickly. Faster response improves customer confidence and reduces missed orders.',
  'Payment Integration':
    'Support practical payment options including UPI, cards and pay-on-delivery flows. Customers can complete orders without friction.',
  'Order History and Reports':
    'Track order patterns, repeat customers and revenue by channel. These reports help you decide what to promote and where direct ordering is paying off.',
  'Broadcast Campaigns':
    'Send controlled WhatsApp campaigns for offers, launches and updates to the right customer groups. We keep messaging useful so it supports trust instead of becoming noise.',
  'Automated Follow-ups':
    'Follow up after visits, enquiries or inactive periods without manual tracking. Automation keeps your business in the customer conversation at the right time.',
  'Birthday and Anniversary Messages':
    'Send personalised messages and offers on dates that matter to customers. These campaigns feel human while still running automatically.',
  'New Menu Announcements':
    'Let regular customers know when new dishes, combos or seasonal items launch. Your existing audience becomes the first source of demand.',
  'Loyalty Program Updates':
    'Keep customers informed about points, rewards and expiry dates. Clear updates increase redemption and keep the program active.',
  'Order Confirmations':
    'Confirm orders quickly on WhatsApp with the details customers care about. Better confirmations reduce confusion and missed expectations.',
  'Patient Database':
    'Complete patient profiles with contact details, treatment history, last visit date and next appointment due - all in one place. Never lose track of a patient again.',
  'Lead Management':
    'Track every enquiry from first contact to booked appointment. No lead falls through the cracks with our visual pipeline system.',
  'Appointment Reminders':
    'Automatic WhatsApp reminders sent 24 hours and 2 hours before every appointment. Reduce no-shows without calling every patient manually.',
  'Treatment Follow-ups':
    'Automatic WhatsApp messages after every procedure checking on recovery, answering common questions and scheduling the next visit.',
  'Recall System':
    'Automatically remind patients when their next checkup is due. Bring back patients you would otherwise lose to competitors.',
  'Review Requests':
    'Automatically ask satisfied patients for a Google review after their visit - sent at exactly the right moment when satisfaction is highest.',
  'Clinic Dashboard':
    'See your pipeline, upcoming appointments, patient retention rate and review count in one clean view updated in real time.',
  'Professional Trust-Building Design':
    'Dental patients look for trust before they book. We design clean clinic websites that highlight doctor credibility, treatments, reviews and easy appointment actions.',
  'Fast Loading':
    'A fast clinic website keeps anxious patients from dropping off while comparing options. We optimise pages so they open quickly on mobile networks.',
  'Services Pages':
    'Each major treatment gets its own clear page with symptoms, benefits, process and booking prompts. This helps patients understand care options and helps Google rank relevant searches.',
  'Doctor Profile Page':
    'Introduce the dentist with qualifications, experience, treatment focus and a warm professional tone. A strong profile builds confidence before the first call.',
  'WhatsApp Appointment Button':
    'Patients can start a booking conversation from any important page. This lowers friction for people who prefer messaging over calling.',
  'Google Reviews Integration':
    'Bring your Google review strength into the website experience. Reviews help visitors trust the clinic and take the next step.',
  'Location and Maps Integration':
    'Show your address, service area and map clearly so patients can plan the visit. Local clarity improves both trust and conversion.',
  'Treatment Page Optimisation':
    'We optimise treatment pages around how patients search for pain relief, cosmetic care, implants, braces and checkups. Each page balances SEO with clear patient education.',
  'Review Generation Strategy':
    'We build a repeatable system for asking satisfied patients for reviews. More quality reviews strengthen Google visibility and patient trust.',
  'Competitor Analysis':
    'We study nearby clinics to see who ranks, why they rank and where your opportunity sits. This gives your SEO plan a practical local target.',
  'Online Appointment Booking':
    'Let patients request appointments online at any time of day. Your team receives structured details instead of scattered calls and messages.',
  'Automatic WhatsApp Reminders':
    'Send reminders before appointments so patients remember and confirm in time. This reduces no-shows without burdening reception.',
  'Appointment Confirmation':
    'Capture confirmation status clearly so your team knows which slots are secure. Better confirmation improves schedule reliability.',
  'Cancellation and Rescheduling':
    'Make cancellation and rescheduling easier to manage without losing the patient. The system keeps the conversation moving toward a new appointment.',
  'Waitlist Management':
    'When a slot opens, contact suitable waitlisted patients quickly. Empty chairs become recoverable appointments instead of lost time.',
  'Post Appointment Follow-up':
    'Send after-care messages, check recovery and prompt the next step after treatment. Patients feel looked after and clinics improve retention.',
  'Appointment Dashboard':
    'View upcoming bookings, confirmations, cancellations and open slots in one place. The team can manage the day without switching between calls, registers and chats.',
  'Google Business Profile Management':
    'We keep your profile accurate, active and conversion-focused with services, photos, posts and review prompts. This is often the fastest way for clinics to improve local discovery.',
  'Google Review Generation':
    'We create a simple process for collecting reviews from satisfied patients. Consistent review growth improves both rankings and patient confidence.',
  'Local SEO':
    'We optimise your clinic for searches in the areas patients actually use, from neighbourhood terms to treatment-specific queries. This makes visibility more relevant and valuable.',
  'WhatsApp Marketing':
    'Use WhatsApp for reminders, recalls, patient education and reactivation campaigns. Messages are timed and useful, not random broadcasts.',
  'Website Optimisation':
    'We improve existing pages for speed, clarity, conversion and local search. Small changes can often produce better calls and appointment enquiries quickly.',
  'Online Reputation Management':
    'We help monitor reviews, respond professionally and build a stronger trust profile over time. Reputation work protects the clinic as much as it promotes it.',
  'Monthly Strategy and Reporting':
    'Every month, you see what improved, what did not and what we will do next. Strategy stays connected to patient enquiries and appointments.',
  'Patient Recall System':
    'Automatically identify patients due for checkups or follow-up care. Recall campaigns bring back people who would otherwise disappear from the clinic cycle.',
  'Google Review Requests':
    'Send review requests after positive visits while the experience is still fresh. The timing increases response without making the request feel forced.',
  'Missed Appointment Recovery':
    'Follow up with patients who miss appointments and guide them toward rescheduling. Recovery automation protects revenue and keeps patients in care.',
  'New Patient Welcome':
    'Send new patients a warm welcome with location details, preparation notes and what to expect. This reduces anxiety and improves first-visit experience.',
  'Birthday Messages':
    'Send simple birthday greetings or checkup prompts that keep the clinic relationship alive. Small personal touches support long-term retention.',
  'Treatment Plan Follow-up':
    'Follow up with patients who received a treatment plan but have not booked. Timely reminders help them make decisions before interest fades.',
  'Trust Building Professional Design':
    'Create a polished dental website that feels calm, credible and easy to navigate. Patients should understand your services and trust your clinic quickly.',
  'Speed Optimised':
    'We optimise images, code and layout so pages load fast on mobile. Better speed helps both search performance and patient conversion.',
  'Doctor Profile Pages':
    'For multi-doctor clinics, each dentist can have a dedicated credibility page. Patients can choose the right provider with confidence.',
  'Treatment Pages':
    'Dedicated treatment pages explain common problems, procedures, benefits and booking steps. They support SEO while answering patient concerns.',
  'Before and After Gallery':
    'Show treatment outcomes in a clear, compliant and trust-building way. Visual proof helps patients understand what is possible before booking.',
  'SEO Ready From Day One':
    'Technical SEO, metadata, structured headings and local signals are included from launch. Your website starts with a search-friendly foundation instead of needing fixes later.'
};

function featureCards(items: string[]): TextBlock[] {
  return items.map((title) => ({
    title,
    body:
      featureDescriptions[title] ??
      'A practical feature built around daily business operations, clear ownership and measurable growth. We keep it simple enough for your team to use every day.'
  }));
}

function page(
  slug: string,
  title: string,
  description: string,
  h1: string,
  subtitle: string,
  options: Partial<SitePage> = {}
): SitePage {
  return {
    slug,
    title,
    description,
    h1,
    subtitle,
    primaryLabel: 'Book a Free 30 Min Call',
    secondaryLabel: 'See How It Works',
    final:
      'Book a free 30 minute call with Agastya. No sales pressure. Just an honest conversation about what your business needs to grow.',
    ...options
  };
}

export const homePage = page(
  '',
  'AgastyaOne | Dental and Restaurant Digital Solutions in Bangalore',
  'Websites, CRM, SEO and automation for dental clinics and restaurants in Bangalore. Built by someone who has run real businesses. Book a free 30 min call.',
  'We Help Dental Clinics and Restaurants in Bengaluru Grow With Technology That Actually Works',
  'Websites, CRM software, automation and SEO — built by someone who has run real businesses, not just read about them',
  {
    secondaryLabel: 'See Our Work',
    trust: [
    ],
    intro: [
      {
        title: 'Dental Clinics',
        body:
          'From solo practitioners to multi-chair clinics — we help you get found online, fill appointments and keep patients coming back.',
        links: [{ label: 'Explore Dental Solutions', href: '/dental-solutions' }]
      },
      {
        title: 'Restaurants & Food Businesses',
        body:
          'From cloud kitchens to full service restaurants — we understand your operations, your customers and what it takes to grow in Bengaluru’s competitive food scene.',
        links: [{ label: 'Explore Restaurant Solutions', href: '/restaurant-solutions' }]
      }
    ],
    offerTitle: 'Everything Your Business Needs to Grow Online',
    offers: [
      { title: 'Website Development', body: 'Professional websites that convert visitors into customers' },
      { title: 'CRM Software', body: 'Manage your customers, leads and follow-ups in one place' },
      { title: 'SEO Services', body: 'Get found on Google by people already searching for you' },
      { title: 'WhatsApp Automation', body: 'Stay connected with your customers automatically' },
      { title: 'Loyalty & Retention Software', body: 'Turn one-time customers into regulars' },
      { title: 'Business Automation', body: 'Remove the manual work so you can focus on growth' }
    ],
    steps: [
      'Book a Free Call — Tell us about your business and what you need',
      'We Listen and Plan — We understand your goals and build a clear plan',
      'We Build and Launch — Fast, professional execution with zero confusion',
      'You Grow — We track results and keep improving with you'
    ],
    internalLinks: [
      { label: 'Dental Solutions', href: '/dental-solutions' },
      { label: 'Restaurant Solutions', href: '/restaurant-solutions' }
    ],
    parent: ''
  }
);

export const pages: SitePage[] = [
  page(
    'dental-solutions',
    'Dental Digital Solutions Bangalore | AgastyaOne',
    'Complete digital solutions for dental clinics in Bangalore. Websites, CRM, SEO and practice automation built for Bengaluru dental practices.',
    'Complete Digital Solutions for Dental Clinics in Bengaluru',
    'From your website to your CRM to your appointment automation — we help dental clinics across Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield get found online, fill appointments and keep patients coming back',
    {
      trust: ['Dental Websites Built and Live in Bengaluru', 'Built Our Own Dental Leads Management System', 'Active Across 5 Bengaluru Neighbourhoods', 'Specialists in Dental Digital Growth'],
      intro: [
        {
          title: 'Most Dental Clinics in Bengaluru Are Invisible Online',
          body:
            'Patients search, compare and choose the clinic with the best website, strongest reviews and strongest Google presence. If your clinic does not show up, your competitor gets that patient.'
        },
        {
          title: 'We Know What Dental Clinics Actually Need',
          body:
            'We have spoken to clinic owners across Bengaluru and built our own dental leads management system because the tools available did not work for how Indian clinics operate.',
          items: ['We understand dental clinic operations', 'We know Bengaluru’s neighbourhoods and patients', 'We measure success by filled appointments']
        }
      ],
      offerTitle: 'Everything Your Dental Clinic Needs to Grow Online',
      offers: offerCards(dentalOffers),
      steps: ['Book a Free Call — Tell us about your clinic and your biggest challenge', 'We Build Your Plan — A clear roadmap tailored to your clinic', 'We Launch Fast — Professional execution without endless back and forth', 'Your Clinic Grows — More visibility, more appointments, more returning patients'],
      internalLinks: [{ label: 'Dental Solutions Bangalore', href: '/dental-solutions-bangalore' }, ...dentalLinks]
    }
  ),
  page(
    'restaurant-solutions',
    'Restaurant Digital Solutions Bangalore | AgastyaOne',
    'Complete digital solutions for restaurants in Bangalore. Websites, CRM, SEO, WhatsApp marketing and loyalty programs built for Bengaluru food businesses.',
    'Complete Digital Solutions for Restaurants and Food Businesses in Bengaluru',
    'From your website to your CRM to your WhatsApp automation — we build everything your restaurant needs to get more customers and keep them coming back',
    {
      trust: ['Bengaluru Based', 'Built By Someone Who Has Run a Cloud Kitchen', 'Restaurant Technology Specialists', 'Real Results For Real Restaurants'],
      intro: [
        {
          title: 'Running a Restaurant in Bengaluru Is Hard Enough',
          body:
            'You are managing staff, handling orders, dealing with food costs and trying to keep customers happy. Bengaluru’s food scene is fiercely competitive, and the restaurants winning right now are the ones with better websites, better customer retention and better visibility on Google.'
        },
        {
          title: 'We Have Sat in Your Chair',
          body:
            'AgastyaOne was built by someone who has actually run a cloud kitchen in Bengaluru. Every restaurant solution we build is practical, affordable and built for how restaurants actually work.',
          items: ['We understand restaurant operations', 'We know Bengaluru’s food market', 'We are with you after launch']
        }
      ],
      offerTitle: 'Everything Your Restaurant Needs in One Place',
      offers: offerCards(restaurantOffers),
      steps: ['Book a Free Call — Tell us about your restaurant and your goals', 'We Build Your Plan — A clear roadmap of what we will build and when', 'We Launch Fast — Professional execution without the agency drama', 'Your Restaurant Grows — More customers, more orders, more repeat visits'],
      internalLinks: [{ label: 'Restaurant Solutions Bangalore', href: '/restaurant-solutions-bangalore' }, ...restaurantLinks]
    }
  ),
  page('restaurant-crm-software', 'Restaurant CRM Software in Bangalore | WeValue by AgastyaOne', 'Restaurant CRM software built for Bengaluru restaurants. Manage customers, run loyalty programs and automate follow-ups with WeValue. Book a free demo today.', 'Restaurant CRM Software That Helps Bengaluru Restaurants Keep Customers Coming Back', 'Manage your customers, track orders, run loyalty programs and automate follow-ups — all in one place built specifically for how Indian restaurants operate', {
    primaryLabel: 'Book a Free Demo',
    parent: '/restaurant-solutions',
    intro: [
      { title: 'Most Restaurants Lose 60% of Their Customers After the First Visit', body: 'You work hard to get a customer through your door or onto your menu. They have a great experience, leave, and then you never hear from them again. A restaurant CRM gives you the system to bring them back.' },
      { title: 'A CRM Built for Restaurants — Not Generic Businesses', body: 'WeValue was built after running a cloud kitchen in Bengaluru and realising nothing in the market worked for how Indian restaurants actually operate.' }
    ],
    offerTitle: 'What You Get',
    offers: featureCards(['Customer Database', 'Loyalty Program', 'WhatsApp Follow-ups', 'Order History Tracking', 'Review Management', 'Simple Dashboard']),
    faq: [{ q: 'Is this suitable for a small restaurant or cloud kitchen?', a: 'Yes. WeValue was built specifically with small and independent restaurants in mind.' }, { q: 'Do I need technical knowledge?', a: 'None at all. If you can use WhatsApp you can use WeValue.' }, { q: 'How much does it cost?', a: 'Simple monthly subscription plans. Book a call to see current pricing.' }],
    internalLinks: [{ label: 'Restaurant Solutions', href: '/restaurant-solutions' }, { label: 'Restaurant CRM Bangalore', href: '/restaurant-crm-bangalore' }]
  }),
  page('restaurant-website-development', 'Restaurant Website Development in Bangalore | AgastyaOne', 'Professional restaurant website development in Bengaluru. Fast, mobile first, SEO ready websites for restaurants and food businesses. Book a free consultation today.', 'Restaurant Website Development in Bengaluru That Gets You More Orders and More Customers', 'A professional restaurant website that looks great, loads fast, ranks on Google and turns visitors into customers — built specifically for Bengaluru’s food businesses', {
    primaryLabel: 'Book a Free Consultation',
    parent: '/restaurant-solutions',
    intro: [{ title: 'Your Restaurant Deserves Better Than a Generic Website', body: 'Most restaurant websites in Bengaluru look unprofessional, load slowly and do not rank on Google. A bad website actively costs you customers every single day.' }],
    offerTitle: 'What We Build',
    offers: featureCards(['Professional Design', 'Mobile First', 'Fast Loading under 2 seconds', 'Online Menu', 'Google Maps Integration', 'WhatsApp Order Button', 'SEO Ready', 'Review Integration']),
    faq: [{ q: 'How long does it take?', a: '7 to 14 days from first call.' }, { q: 'Will it rank on Google?', a: 'SEO ready from day one.' }, { q: 'Can I update my menu myself?', a: 'Yes, no developer needed.' }],
    internalLinks: [{ label: 'Restaurant Solutions', href: '/restaurant-solutions' }, { label: 'Restaurant Website Development Bangalore', href: '/restaurant-website-development-bangalore' }]
  }),
  page('restaurant-seo-services', 'Restaurant SEO Services in Bangalore | AgastyaOne', 'Restaurant SEO services in Bengaluru. Get your restaurant found on Google Maps and local search. Specialists in Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield.', 'Restaurant SEO Services in Bengaluru That Get Your Restaurant Found on Google', 'When hungry customers in Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield search for a restaurant near them — we make sure they find yours first', {
    primaryLabel: 'Book a Free SEO Audit',
    parent: '/restaurant-solutions',
    intro: [{ title: 'Your Competitors Are Getting Customers That Should Be Yours', body: 'If your restaurant does not show up when people search for food near them, your competitor gets that customer. Not because their food is better. Because their SEO is better.' }, { title: 'Results Timeline', items: ['Month 1: Foundations', 'Month 2-3: Rankings start moving', 'Month 4-6: Consistent top positions', 'Month 6+: Compounding results'] }],
    offerTitle: 'What We Do',
    offers: featureCards(['Google Business Profile Optimisation', 'Local Keyword Research', 'On-Page SEO', 'Review Management', 'Local Citations', 'Monthly Reporting']),
    faq: [{ q: 'How long before results?', a: '3 to 6 months for meaningful results.' }, { q: 'Do I need a website?', a: 'It helps significantly, but we can start with Google Business Profile.' }],
    internalLinks: [{ label: 'Restaurant Solutions', href: '/restaurant-solutions' }, { label: 'Restaurant SEO Bangalore', href: '/restaurant-seo-bangalore' }]
  }),
  page('restaurant-loyalty-software', 'Restaurant Loyalty Software in Bangalore | AgastyaOne', 'Restaurant loyalty software for Bengaluru restaurants. WhatsApp based loyalty programs that turn one-time diners into regulars. No app download needed.', 'Restaurant Loyalty Software That Turns One-Time Diners Into Regulars in Bengaluru', 'Stop losing customers after their first visit. Give them a reason to come back every week with a simple, affordable loyalty program built for Indian restaurants', {
    primaryLabel: 'Book a Free Demo',
    parent: '/restaurant-solutions',
    intro: [{ title: 'Getting a New Customer Costs 5 Times More Than Keeping an Existing One', body: 'A loyalty program puts you directly in your customer’s mind without paying commission to anyone.' }, { title: 'The Numbers', body: 'Repeat customers spend 67% more than new customers. A 5% increase in customer retention can increase profits by 25 to 95%.' }],
    offerTitle: 'What You Get',
    offers: featureCards(['Points System', 'WhatsApp Integration', 'Birthday and Anniversary Offers', 'Repeat Visit Rewards', 'Lapsed Customer Recovery', 'Loyalty Dashboard']),
    faq: [{ q: 'Do customers need an app?', a: 'No. Works through WhatsApp.' }, { q: 'Can I customise rewards?', a: 'Yes completely.' }],
    internalLinks: [{ label: 'Restaurant Solutions', href: '/restaurant-solutions' }, { label: 'Restaurant CRM Software', href: '/restaurant-crm-software' }]
  }),
  page('restaurant-online-ordering-system', 'Restaurant Online Ordering System in Bangalore | AgastyaOne', 'Commission free online ordering system for Bengaluru restaurants. Accept orders directly via website and WhatsApp. No Zomato or Swiggy commission.', 'Restaurant Online Ordering System That Lets You Take Orders Without Paying Commission to Anyone', 'Accept orders directly from your website and WhatsApp — no Zomato commission, no Swiggy fees, no middleman between you and your customers in Bengaluru', {
    primaryLabel: 'Book a Free Demo',
    parent: '/restaurant-solutions',
    intro: [{ title: 'Zomato and Swiggy Are Taking Up to 30% of Every Order You Earn', body: 'For a restaurant doing Rs 3 lakhs a month in delivery orders, that can mean Rs 90,000 leaving the business every month.' }],
    offerTitle: 'What You Get',
    offers: featureCards(['Website Ordering', 'WhatsApp Ordering', 'Digital Menu Management', 'Order Notifications', 'Payment Integration', 'Customer Database', 'Order History and Reports']),
    faq: [{ q: 'Should I stop using Zomato and Swiggy?', a: 'Not immediately. Use aggregators for discovery and direct ordering for retention.' }, { q: 'Indian payment methods?', a: 'Yes. UPI, Google Pay, PhonePe, cards and cash on delivery.' }],
    internalLinks: [{ label: 'Restaurant Solutions', href: '/restaurant-solutions' }, { label: 'Restaurant Website Development', href: '/restaurant-website-development' }]
  }),
  page('restaurant-whatsapp-marketing', 'Restaurant WhatsApp Marketing in Bangalore | AgastyaOne', 'Restaurant WhatsApp marketing and automation for Bengaluru restaurants. Automated follow-ups, broadcasts and loyalty messages that bring customers back.', 'Restaurant WhatsApp Marketing That Keeps Your Customers Coming Back to Your Restaurant in Bengaluru', 'Reach your customers directly on WhatsApp with offers, updates and reminders — automatically, personally and without paying for ads', {
    primaryLabel: 'Book a Free Demo',
    parent: '/restaurant-solutions',
    intro: [{ title: 'Your Customers Are on WhatsApp All Day. Are You Reaching Them?', body: 'A WhatsApp message from a business they know gets opened, read and acted on when campaigns are useful and respectful.' }, { title: 'Sample Messages', items: ['Weekly Special: This week at your restaurant, a limited offer is available Friday to Sunday.', 'Lapsed Customer: We miss you. Come back this week and get a special offer.', 'Birthday: Enjoy a complimentary dessert on your next visit this month.'] }],
    offerTitle: 'What You Get',
    offers: featureCards(['Broadcast Campaigns', 'Automated Follow-ups', 'Lapsed Customer Recovery', 'Birthday and Anniversary Messages', 'New Menu Announcements', 'Loyalty Program Updates', 'Order Confirmations']),
    faq: [{ q: 'Will customers find this spammy?', a: 'Only if done wrong. We follow WhatsApp business guidelines strictly.' }, { q: 'Do I need WhatsApp Business API?', a: 'For basic automation, WhatsApp Business app is sufficient.' }],
    internalLinks: [{ label: 'Restaurant Solutions', href: '/restaurant-solutions' }, { label: 'Restaurant Loyalty Software', href: '/restaurant-loyalty-software' }]
  }),
  page('dental-crm-software', 'Dental CRM Software in Bangalore | AgastyaOne', 'Dental CRM software for clinics in Bengaluru. Manage patients, automate appointment reminders and build your Google reviews. Built for Indian dental practices.', 'Dental CRM Software That Helps Bengaluru Clinics Fill Appointments and Keep Patients Coming Back', 'Manage your patients, track leads, automate follow-ups and fill your appointment slots — built specifically for how dental clinics in Bengaluru actually operate', {
    primaryLabel: 'Book a Free Demo',
    parent: '/dental-solutions',
    intro: [{ title: 'Most Dental Clinics in Bengaluru Are Losing Patients They Already Have', body: 'The average dental patient should visit twice a year. Most visit once every two to three years or never again. That gap is lost revenue and preventable.' }, { title: 'The Numbers', body: 'A clinic with 500 active patients losing 25% annually loses 125 patients every year. At Rs 3,000 average value, that is Rs 3,75,000 in lost revenue.' }],
    offerTitle: 'What You Get',
    offers: featureCards(['Patient Database', 'Lead Management', 'Appointment Reminders', 'Treatment Follow-ups', 'Recall System', 'Review Requests', 'Clinic Dashboard']),
    faq: [{ q: 'Suitable for small single-dentist clinic?', a: 'Yes. Built for independent clinics first.' }, { q: 'Do patients need to download anything?', a: 'No. All communication happens through WhatsApp.' }],
    internalLinks: [{ label: 'Dental Solutions', href: '/dental-solutions' }, { label: 'Dental CRM Bangalore', href: '/dental-crm-bangalore' }]
  }),
  page('dental-website-development', 'Dental Website Development in Bangalore | AgastyaOne', 'Professional dental website development in Bengaluru. Fast, mobile first, SEO ready websites for dental clinics that convert visitors into booked patients.', 'Dental Website Development in Bengaluru That Turns Online Visitors Into Booked Patients', 'A professional dental clinic website that builds trust, ranks on Google and converts visitors into appointments — built specifically for dental clinics across Bengaluru', {
    primaryLabel: 'Book a Free Consultation',
    parent: '/dental-solutions',
    intro: [{ title: 'Your Patients Judge Your Clinic Before They Ever Walk Through Your Door', body: 'Before a patient books an appointment they search Google, look at your website and read reviews in under 60 seconds. A poor website sends patients to competitors.' }],
    offerTitle: 'What We Build',
    offers: featureCards(['Professional Trust-Building Design', 'Mobile First', 'Fast Loading', 'Services Pages', 'Doctor Profile Page', 'WhatsApp Appointment Button', 'Google Reviews Integration', 'SEO Ready', 'Location and Maps Integration']),
    faq: [{ q: 'How long to build?', a: '7 to 14 days.' }, { q: 'Do you write the content?', a: 'Yes. All content included.' }],
    internalLinks: [{ label: 'Dental Solutions', href: '/dental-solutions' }, { label: 'Dental Website Development Bangalore', href: '/dental-website-development-bangalore' }]
  }),
  page('dental-seo-services', 'Dental SEO Services in Bangalore | AgastyaOne', 'Dental SEO services for clinics in Bengaluru. Get your dental clinic found on Google Maps and local search in Koramangala, Indiranagar, Jayanagar and HSR Layout.', 'Dental SEO Services in Bengaluru That Get Your Clinic Found by Patients Searching on Google Right Now', 'When patients in Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield search for a dentist near them — we make sure they find your clinic first', {
    primaryLabel: 'Book a Free SEO Audit',
    parent: '/dental-solutions',
    intro: [{ title: 'Patients Are Searching For a Dentist in Your Neighbourhood Right Now', body: 'If your clinic does not appear when patients search Google, your competitor gets that patient every single day.' }, { title: 'Results Timeline', items: ['Month 1: Foundations', 'Month 2-3: Rankings improve', 'Month 4-6: Consistent top positions', 'Month 6+: Compounding results'] }],
    offerTitle: 'What We Do',
    offers: featureCards(['Google Business Profile Optimisation', 'Local Keyword Research', 'Treatment Page Optimisation', 'Review Generation Strategy', 'Local Citations', 'Competitor Analysis', 'Monthly Reporting']),
    faq: [{ q: 'My clinic is already on Practo. Do I still need SEO?', a: 'Absolutely. Practo is rented visibility. Google ranking is an asset you own.' }, { q: 'Long term contract?', a: 'No. Monthly plans only.' }],
    internalLinks: [{ label: 'Dental Solutions', href: '/dental-solutions' }, { label: 'Dental SEO Bangalore', href: '/dental-seo-bangalore' }]
  }),
  page('dentist-appointment-software', 'Dentist Appointment Software in Bangalore | AgastyaOne', 'Dentist appointment software for Bengaluru clinics. Automate bookings, WhatsApp reminders and reduce no-shows. Built for Indian dental practices.', 'Dentist Appointment Software That Fills Your Schedule and Eliminates No-Shows in Bengaluru', 'Automate your appointment bookings, reminders and follow-ups so your reception team spends less time on the phone and more time with patients', {
    primaryLabel: 'Book a Free Demo',
    parent: '/dental-solutions',
    intro: [{ title: 'Empty Appointment Slots and No-Shows Are Costing Your Clinic Real Money Every Day', body: 'The average dental clinic in Bengaluru loses 15 to 20% of appointment revenue to no-shows and last minute cancellations every month.' }, { title: 'The Numbers', body: 'A clinic with 20 appointments per day losing 15% to no-shows can lose Rs 90,000 per month from patients who intended to come but were not reminded.' }],
    offerTitle: 'What You Get',
    offers: featureCards(['Online Appointment Booking', 'Automatic WhatsApp Reminders', 'Appointment Confirmation', 'Cancellation and Rescheduling', 'Waitlist Management', 'Post Appointment Follow-up', 'Appointment Dashboard']),
    faq: [{ q: 'Can patients book outside clinic hours?', a: 'Yes. 24/7 booking.' }, { q: 'What happens when a patient cancels last minute?', a: 'The system can contact the next patient on the waitlist.' }],
    internalLinks: [{ label: 'Dental Solutions', href: '/dental-solutions' }, { label: 'Dental Practice Automation', href: '/dental-practice-automation' }]
  }),
  page('dental-marketing-services', 'Dental Marketing Services in Bangalore | AgastyaOne', 'Dental marketing services for clinics in Bengaluru. SEO, Google reviews, WhatsApp marketing and online reputation management for dental practices.', 'Dental Marketing Services in Bengaluru That Bring New Patients to Your Clinic Every Month', 'A complete digital marketing system for dental clinics — SEO, WhatsApp, Google reviews and online presence — built to grow your patient base consistently and affordably', {
    primaryLabel: 'Book a Free Consultation',
    parent: '/dental-solutions',
    intro: [{ title: 'Most Dental Clinics in Bengaluru Rely on Word of Mouth and Hope', body: 'Word of mouth is powerful, but it is not a predictable growth strategy. You need control over how many new patients walk through your door each month.' }, { title: 'Who This Is For', items: ['You rely mainly on word of mouth', 'Your Google Business Profile has fewer than 50 reviews', 'You have a website that gets no traffic', 'You want to grow without a fortune in paid ads'] }],
    offerTitle: 'What We Do',
    offers: featureCards(['Google Business Profile Management', 'Google Review Generation', 'Local SEO', 'WhatsApp Marketing', 'Website Optimisation', 'Online Reputation Management', 'Monthly Strategy and Reporting']),
    faq: [{ q: 'Do I need a big budget?', a: 'No. Most effective strategies require zero ad spend.' }, { q: 'Can you help a brand new clinic?', a: 'Absolutely. Starting from scratch is often easier.' }],
    internalLinks: [{ label: 'Dental Solutions', href: '/dental-solutions' }, { label: 'Dental SEO Services', href: '/dental-seo-services' }]
  }),
  page('dental-practice-automation', 'Dental Practice Automation in Bangalore | AgastyaOne', 'Dental practice automation for clinics in Bengaluru. Automate appointment reminders, patient follow-ups, review requests and recall systems on WhatsApp.', 'Dental Practice Automation That Removes the Manual Work From Running Your Clinic in Bengaluru', 'Automate patient reminders, follow-ups, review requests and recall systems — so your team focuses on patients not paperwork', {
    primaryLabel: 'Book a Free Demo',
    parent: '/dental-solutions',
    intro: [{ title: 'Your Team Is Spending Hours Every Day on Work That Should Happen Automatically', body: 'Calling patients, following up enquiries, reminding checkups and asking for Google reviews can all be automated.' }, { title: 'The Impact', items: ['Before: receptionist spends 2 hours daily on manual calls', 'After: zero manual reminder calls', 'No-show rate drops 50-70%', 'Reviews grow consistently every month'] }],
    offerTitle: 'What We Automate',
    offers: featureCards(['Appointment Reminders', 'Treatment Follow-ups', 'Patient Recall System', 'Google Review Requests', 'Missed Appointment Recovery', 'New Patient Welcome', 'Birthday Messages', 'Treatment Plan Follow-up']),
    faq: [{ q: 'Will automated messages feel impersonal?', a: 'Done correctly, no. Messages use patient name and context.' }, { q: 'Can I customise the messages?', a: 'Yes completely. You approve everything before it goes live.' }],
    internalLinks: [{ label: 'Dental Solutions', href: '/dental-solutions' }, { label: 'Dentist Appointment Software', href: '/dentist-appointment-software' }]
  }),
  page('restaurant-solutions-bangalore', 'Restaurant Digital Solutions in Bangalore | AgastyaOne', 'Complete digital solutions for restaurants in Bangalore. Websites, CRM, SEO and WhatsApp marketing for food businesses across Koramangala, Indiranagar, Jayanagar and HSR Layout.', 'Restaurant Digital Solutions in Bangalore For Food Businesses That Want to Grow', 'Websites, CRM, SEO, WhatsApp marketing and loyalty programs — built specifically for restaurants and cloud kitchens across Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield', {
    intro: [{ title: 'Why Bangalore Restaurants Need This Now', body: 'Bangalore has thousands of restaurants competing for the same customers. The restaurants winning right now have better websites, better Google visibility and better customer retention systems.' }, { title: 'Neighbourhoods We Serve', items: bangaloreNeighbourhoods }],
    offerTitle: 'What We Offer',
    offers: offerCards(restaurantOffers),
    internalLinks: [{ label: 'Restaurant Solutions', href: '/restaurant-solutions' }, ...restaurantLinks]
  }),
  page('restaurant-crm-bangalore', 'Restaurant CRM Software in Bangalore | WeValue by AgastyaOne', 'Restaurant CRM software for Bangalore restaurants and cloud kitchens. Manage customers, run loyalty programs and automate WhatsApp follow-ups with WeValue.', 'Restaurant CRM Software in Bangalore That Keeps Your Customers Coming Back', 'Manage your customers, automate follow-ups and run loyalty programs — built for restaurants and cloud kitchens across Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield', {
    primaryLabel: 'Book a Free Demo',
    intro: [{ title: 'Why Bangalore Restaurants Need a CRM', body: 'Bangalore is one of India’s most competitive restaurant markets. Without a system to remind, reward and bring customers back, you lose them to the noise.' }, { title: 'Who This Is For in Bangalore', body: 'Whether you run a cloud kitchen in HSR Layout, a full service restaurant in Koramangala, a QSR in Indiranagar or a delivery kitchen in Jayanagar, WeValue works for you.' }],
    faq: [{ q: 'Does this work for a small cloud kitchen?', a: 'Yes. WeValue was built with small Bangalore food businesses in mind.' }, { q: 'How is this different from a WhatsApp group?', a: 'A WhatsApp group is manual. WeValue automates communication and tracks every customer individually.' }],
    internalLinks: [{ label: 'Restaurant CRM Software', href: '/restaurant-crm-software' }, { label: 'Restaurant Solutions Bangalore', href: '/restaurant-solutions-bangalore' }]
  }),
  page('restaurant-seo-bangalore', 'Restaurant SEO in Bangalore | AgastyaOne', 'Restaurant SEO services in Bangalore. Get your restaurant found on Google Maps in Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield. Free audit.', 'Restaurant SEO in Bangalore That Gets Your Restaurant Found on Google Before Your Competitors', 'When hungry customers in Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield search for food near them — we make sure they find your restaurant first', {
    primaryLabel: 'Book a Free SEO Audit',
    intro: [{ title: 'Why Bangalore Restaurant SEO Is Different', body: 'Bangalore is not one market. It is many neighbourhoods competing against each other, and each area needs a different local SEO strategy.' }, { title: 'Neighbourhood Expertise', items: bangaloreNeighbourhoods }],
    faq: [{ q: 'My restaurant is already on Zomato and Swiggy. Do I still need SEO?', a: 'Absolutely. Zomato and Swiggy own those customers. SEO helps you own your visibility.' }],
    internalLinks: [{ label: 'Restaurant SEO Services', href: '/restaurant-seo-services' }, { label: 'Restaurant Solutions Bangalore', href: '/restaurant-solutions-bangalore' }]
  }),
  page('restaurant-website-development-bangalore', 'Restaurant Website Development in Bangalore | AgastyaOne', 'Professional restaurant website development in Bangalore. Mobile first, SEO ready websites for restaurants and cloud kitchens across Koramangala, Indiranagar, Jayanagar and HSR Layout.', 'Restaurant Website Development in Bangalore That Gets You More Customers and More Direct Orders', 'Professional restaurant websites built for food businesses across Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield — fast, mobile first and SEO ready from day one', {
    primaryLabel: 'Book a Free Consultation',
    intro: [{ title: 'Why Bangalore Restaurants Need a Proper Website', body: 'Before a customer visits your restaurant they search Google, look at your website and read reviews in under 60 seconds on their phone.' }, { title: 'Bangalore Neighbourhood Specific Approach', items: bangaloreNeighbourhoods }],
    faq: [{ q: 'How long to build?', a: '7 to 14 days.' }, { q: 'Do you build for cloud kitchens specifically?', a: 'Yes. Direct cloud kitchen experience in Bangalore.' }],
    internalLinks: [{ label: 'Restaurant Website Development', href: '/restaurant-website-development' }, { label: 'Restaurant Solutions Bangalore', href: '/restaurant-solutions-bangalore' }]
  }),
  page('dental-solutions-bangalore', 'Dental Digital Solutions in Bangalore | AgastyaOne', 'Complete digital solutions for dental clinics in Bangalore. Websites, CRM, SEO and practice automation for clinics across Koramangala, Indiranagar, Jayanagar and HSR Layout.', 'Complete Digital Solutions For Dental Clinics in Bangalore That Want to Grow Their Patient Base', 'Websites, CRM, SEO, appointment software and practice automation — built specifically for dental clinics across Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield', {
    intro: [{ title: 'The Bangalore Dental Patient Journey', items: ['Search: Patient searches dentist near me on Google', 'Compare: They check star ratings, reviews and photos', 'Visit Website: They judge professionalism and services', 'Contact: They call, WhatsApp or book online', 'Return: They come back and leave a Google review'] }, { title: 'Neighbourhoods We Serve', items: bangaloreNeighbourhoods }],
    offerTitle: 'What We Offer',
    offers: offerCards(dentalOffers),
    internalLinks: [{ label: 'Dental Solutions', href: '/dental-solutions' }, ...dentalLinks]
  }),
  page('dental-crm-bangalore', 'Dental CRM Software in Bangalore | AgastyaOne', 'Dental CRM software for clinics in Bangalore. Manage patients, automate WhatsApp reminders and build a recall system that keeps patients coming back.', 'Dental CRM Software in Bangalore That Helps Your Clinic Retain Patients and Fill Appointments Every Month', 'Manage your patients, automate follow-ups and build a recall system that brings patients back — built specifically for dental clinics across Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield', {
    primaryLabel: 'Book a Free Demo',
    intro: [{ title: 'The Bangalore Dental Retention Problem', body: 'For a Bangalore clinic with 300 active patients losing 25% annually, that is 75 patients walking away every year and significant lost revenue.' }, { title: 'Built for Bangalore Dental Clinics', body: 'Simple enough for a receptionist to manage between patient calls and powerful enough for a growing multi-chair practice.' }],
    faq: [{ q: 'We already use a register and WhatsApp group. Why do we need a CRM?', a: 'A register is manual and reactive. A CRM is automatic and proactive.' }],
    internalLinks: [{ label: 'Dental CRM Software', href: '/dental-crm-software' }, { label: 'Dental Solutions Bangalore', href: '/dental-solutions-bangalore' }]
  }),
  page('dental-seo-bangalore', 'Dental SEO in Bangalore | AgastyaOne', 'Dental SEO services for clinics in Bangalore. Get your dental clinic to the top of Google Maps in Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield. Free audit.', 'Dental SEO in Bangalore That Gets Your Clinic to the Top of Google When Patients Search for a Dentist', 'When patients in Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield search for a dentist near them — we make sure they find your clinic before they find your competitors', {
    primaryLabel: 'Book a Free SEO Audit',
    intro: [{ title: 'Neighbourhood Breakdown', items: bangaloreNeighbourhoods }],
    faq: [{ q: 'My clinic already has a Practo listing. Do I still need dental SEO?', a: 'Absolutely. Practo is rented visibility. Google ranking is an asset your clinic owns permanently.' }, { q: 'My clinic has no website. Can you still do SEO?', a: 'Yes. We can start with Google Business Profile immediately.' }],
    internalLinks: [{ label: 'Dental SEO Services', href: '/dental-seo-services' }, { label: 'Dental Solutions Bangalore', href: '/dental-solutions-bangalore' }]
  }),
  page('dental-website-development-bangalore', 'Dental Website Development in Bangalore | AgastyaOne', 'Professional dental website development in Bangalore. Fast, mobile first, SEO ready websites for dental clinics across Koramangala, Indiranagar, Jayanagar and HSR Layout.', 'Dental Website Development in Bangalore That Turns Google Visitors Into Booked Patients', 'Professional dental clinic websites built for practices across Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield — fast, mobile first, SEO ready and built to convert visitors into appointments', {
    primaryLabel: 'Book a Free Consultation',
    intro: [{ title: 'What Bangalore Dental Patients Look For', body: 'They want trust, doctor credentials, the specific treatment they need, genuine patient reviews and instant WhatsApp contact. We build every element around these needs.' }, { title: 'Bangalore Neighbourhood Specific Approach', items: bangaloreNeighbourhoods }],
    offerTitle: 'What We Build',
    offers: featureCards(['Trust Building Professional Design', 'Mobile First', 'Speed Optimised', 'Doctor Profile Pages', 'Treatment Pages', 'WhatsApp Appointment Button', 'Google Reviews Integration', 'Before and After Gallery', 'Location and Maps Integration', 'SEO Ready From Day One']),
    faq: [{ q: 'How long to build?', a: '7 to 14 days.' }, { q: 'My clinic is newly opened. Is it too early?', a: 'The opposite. A new clinic needs a strong website from day one.' }],
    internalLinks: [{ label: 'Dental Website Development', href: '/dental-website-development' }, { label: 'Dental Solutions Bangalore', href: '/dental-solutions-bangalore' }]
  }),
  page('about', 'About AgastyaOne | Bengaluru Dental and Restaurant Digital Solutions', 'AgastyaOne is a Bengaluru based digital solutions company built by an entrepreneur who has built a dental leads management system, run a cloud kitchen and served businesses across Koramangala, Indiranagar and Jayanagar.', 'Built By an Entrepreneur. For Entrepreneurs.', 'AgastyaOne exists because I could not find a technology partner who actually understood what it means to run a business. So I became one.', {
    intro: [
      { title: 'The Person Behind AgastyaOne', body: 'My name is Agastya. I am based in Bengaluru and have spent the last several years doing something most digital agency founders have never done: actually running real businesses. I have built a dental leads management system, run a cloud kitchen and built WeValue for real operations.' },
      { title: 'The Problem We Set Out to Solve', body: 'Most digital agencies build things that look good in a portfolio and disappear when the invoice is paid. AgastyaOne was built to be the opposite: a growth partner, not a vendor.' },
      { title: 'What We Believe', items: ['Real Experience Over Theory', 'Results Over Aesthetics', 'Simple Over Complicated', 'Transparency Over Promises', 'Long Term Over Transactional'] },
      { title: 'The Numbers', items: ['Dental Leads CRM Built and Live', '8+ Dental Clinic Demo Websites Built', '2 Websites Live For Bengaluru Businesses', '1 Restaurant CRM Built and Deployed — WeValue', '5 Bengaluru Neighbourhoods Served', '100% Bengaluru Focused'] }
    ],
    internalLinks: [{ label: 'Dental Solutions', href: '/dental-solutions' }, { label: 'Restaurant Solutions', href: '/restaurant-solutions' }]
  })
];

export const allPages = [homePage, ...pages];

export function getPage(slug: string) {
  return allPages.find((item) => item.slug === slug);
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AgastyaOne',
    description: 'Dental and restaurant digital solutions in Bengaluru - websites, CRM, SEO and automation',
    url: 'https://agastyaone.com',
    email: 'hello@agastyaone.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kumaraswamy Layout',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560078',
      addressCountry: 'IN'
    },
    areaServed: ['Koramangala', 'Indiranagar', 'Jayanagar', 'HSR Layout', 'Whitefield', 'Bengaluru'],
    sameAs: ['https://agastyaone.com']
  };
}

export function faqSchemaForPage(page: SitePage) {
  if (!page.faq || page.faq.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };
}

export function getLocationContent(page: SitePage) {
  if (!page.slug.endsWith('-bangalore')) return null;

  const isDental = page.slug.includes('dental') || page.slug.includes('dentist');
  const isRestaurant = page.slug.includes('restaurant');
  const neighbourhood = 'Bengaluru';
  const audience = isDental ? 'dental clinics' : 'restaurants';
  const service = isDental ? 'dental digital growth' : isRestaurant ? 'restaurant digital growth' : 'local business growth';

  return {
    neighbourhood,
    problemTitle: `${neighbourhood} Competition Is Getting Sharper`,
    problemBody: `${neighbourhood} is one of Bengaluru's most competitive markets for ${audience}. Businesses here compete not just on quality but on visibility, reputation and systems. The ones winning are the ones who invested in the right technology early.`,
    whyTitle: `Why AgastyaOne For ${neighbourhood}`,
    whyBody: `We have worked with businesses across ${neighbourhood}. We know the local customer, the local competition and exactly what it takes to stand out in this area.`,
    faq: [
      {
        q: `Do you work with ${audience} across different Bengaluru neighbourhoods?`,
        a: `Yes. We build ${service} systems for businesses across Koramangala, Indiranagar, Jayanagar, HSR Layout, Whitefield and wider Bengaluru.`
      },
      {
        q: `Can this be tailored to my exact area in Bengaluru?`,
        a: 'Yes. Local search terms, customer behaviour, review strategy and page content are adjusted around your neighbourhood and the competitors around you.'
      },
      {
        q: 'How quickly can a Bengaluru business launch these improvements?',
        a: 'Most website, CRM and automation foundations can be launched in 7 to 14 days. SEO work starts immediately and compounds over the following months.'
      }
    ]
  };
}
