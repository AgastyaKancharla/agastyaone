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

const dentalOffers = [
  ['Dental CRM Software', '/dental-crm-software', 'Manage patients, leads and follow-ups in one place'],
  ['Dental Website Development', '/dental-website-development', 'A website that builds trust and converts visitors into booked patients'],
  ['Dental SEO Services', '/dental-seo-services', 'Rank on Google when patients search for a dentist near them'],
  ['Dentist Appointment Software', '/dentist-appointment-software', 'Fill appointment slots automatically with zero manual follow-up'],
  ['Dental Marketing Services', '/dental-marketing-services', 'Reach new patients in your neighbourhood with targeted digital marketing'],
  ['Dental Practice Automation', '/dental-practice-automation', 'Automate reminders, follow-ups and reviews']
];

const bangaloreNeighbourhoods = [
  'Koramangala — One of Bangalore\'s most competitive markets.',
  'Indiranagar — High footfall, high expectations and strong digital comparison.',
  'Jayanagar — Established neighbourhood with loyal local customers.',
  'HSR Layout — Fast growing, tech savvy customer base.',
  'Whitefield — Large residential and corporate catchment.'
];

const dentalLinks = dentalOffers.map(([label, href]) => ({ label, href }));

function offerCards(items: string[][]): TextBlock[] {
  return items.map(([title, href, body]) => ({ title, body, links: [{ label: 'Learn More', href }] }));
}

const featureDescriptions: Record<string, string> = {
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
  'Mobile First':
    'Most dental searches happen on phones, often while people are ready to act. Every page is built for fast scanning, thumb-friendly actions and clear WhatsApp or call buttons.',
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
  'SEO Ready':
    'We structure titles, descriptions, headings, internal links and technical basics from day one. That gives Google a clean foundation before ongoing SEO work begins.',
  'Google Business Profile Optimisation':
    'We clean up your categories, services, photos, descriptions and local signals so Google understands what you offer. A stronger profile improves Maps visibility and conversion from search.',
  'Local Keyword Research':
    'We identify the exact searches patients use in Bengaluru neighbourhoods, not generic national keywords. This helps each page target people who are already looking nearby.',
  'On-Page SEO':
    'We improve page titles, headings, internal links, service content and local relevance. The goal is to make every important page easier for Google and patients to understand.',
  'Treatment Page Optimisation':
    'We optimise treatment pages around how patients search for pain relief, cosmetic care, implants, braces and checkups. Each page balances SEO with clear patient education.',
  'Review Generation Strategy':
    'We build a repeatable system for asking satisfied patients for reviews. More quality reviews strengthen Google visibility and patient trust.',
  'Competitor Analysis':
    'We study nearby clinics to see who ranks, why they rank and where your opportunity sits. This gives your SEO plan a practical local target.',
  'Local Citations':
    'Consistent business details across directories help Google trust your location and contact information. We fix mismatches and build the citations that matter locally.',
  'Monthly Reporting':
    'You get clear monthly updates on rankings, traffic, calls, reviews and next actions. Reports focus on business impact, not vanity charts.',
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
    'Technical SEO, metadata, structured headings and local signals are included from launch. Your website starts with a search-friendly foundation instead of needing fixes later.',
  'Review Management':
    'Ask happy patients for reviews at the right moment and track your review growth over time. Stronger reviews improve trust before a new patient ever walks in.',
  'Simple Dashboard':
    'Track patient retention, campaign performance, reviews and recall activity in one clean dashboard. Owners get the numbers they need without opening five different tools.'
};

function featureCards(items: string[]): TextBlock[] {
  return items.map((title) => ({
    title,
    body:
      featureDescriptions[title] ??
      'A practical feature built around daily clinic operations, clear ownership and measurable growth. We keep it simple enough for your team to use every day.'
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
      'Book a free 30 minute call with Agastya. No sales pressure. Just an honest conversation about what your clinic needs to grow.',
    ...options
  };
}

export const homePage = page(
  '',
  'AgastyaOne | Dental Digital Solutions in Bangalore',
  'Websites, CRM, SEO and automation for dental clinics in Bangalore. Built by someone who has built real dental systems. Book a free 30 min call.',
  'We Help Dental Clinics in Bengaluru Grow With Technology That Actually Works',
  'Websites, CRM software, automation and SEO — built by someone who has built real dental systems, not just read about them',
  {
    secondaryLabel: 'See Our Work',
    trust: [],
    intro: [
      {
        title: 'Dental Clinics',
        body:
          'From solo practitioners to multi-chair clinics — we help you get found online, fill appointments and keep patients coming back.',
        links: [{ label: 'Explore Dental Solutions', href: '/dental-solutions' }]
      }
    ],
    offerTitle: 'Everything Your Dental Clinic Needs to Grow Online',
    offers: [
      { title: 'Website Development', body: 'Professional websites that convert visitors into booked patients' },
      { title: 'CRM Software', body: 'Manage your patients, leads and follow-ups in one place' },
      { title: 'SEO Services', body: 'Get found on Google by patients already searching for a dentist' },
      { title: 'WhatsApp Automation', body: 'Stay connected with your patients automatically' },
      { title: 'Appointment Software', body: 'Fill your schedule and eliminate no-shows' },
      { title: 'Practice Automation', body: 'Remove the manual work so you can focus on patient care' }
    ],
    steps: [
      'Book a Free Call — Tell us about your clinic and your biggest challenge',
      'We Listen and Plan — We understand your goals and build a clear plan',
      'We Build and Launch — Fast, professional execution with zero confusion',
      'Your Clinic Grows — We track results and keep improving with you'
    ],
    internalLinks: [
      { label: 'Dental Solutions', href: '/dental-solutions' }
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
          items: ['We understand dental clinic operations', 'We know Bengaluru\'s neighbourhoods and patients', 'We measure success by filled appointments']
        }
      ],
      offerTitle: 'Everything Your Dental Clinic Needs to Grow Online',
      offers: offerCards(dentalOffers),
      steps: ['Book a Free Call — Tell us about your clinic and your biggest challenge', 'We Build Your Plan — A clear roadmap tailored to your clinic', 'We Launch Fast — Professional execution without endless back and forth', 'Your Clinic Grows — More visibility, more appointments, more returning patients'],
      internalLinks: [{ label: 'Dental Solutions Bangalore', href: '/dental-solutions-bangalore' }, ...dentalLinks]
    }
  ),
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
  page('about', 'About AgastyaOne | Dental Digital Solutions Bengaluru', 'AgastyaOne is a Bengaluru based dental digital solutions company built by an entrepreneur who has built a dental leads management system and served clinics across Koramangala, Indiranagar and Jayanagar.', 'Built By an Entrepreneur. For Dental Clinics.', 'AgastyaOne exists because I could not find a technology partner who actually understood what it means to run a dental practice. So I became one.', {
    intro: [
      { title: 'The Person Behind AgastyaOne', body: 'My name is Agastya. I am based in Bengaluru and have spent the last several years doing something most digital agency founders have never done: actually building systems for real dental clinics. I built a dental leads management system from scratch and have worked with clinic owners across Bengaluru to understand what actually moves the needle.' },
      { title: 'The Problem We Set Out to Solve', body: 'Most digital agencies build things that look good in a portfolio and disappear when the invoice is paid. AgastyaOne was built to be the opposite: a growth partner for dental clinics, not a vendor.' },
      { title: 'What We Believe', items: ['Real Experience Over Theory', 'Results Over Aesthetics', 'Simple Over Complicated', 'Transparency Over Promises', 'Long Term Over Transactional'] },
      { title: 'The Numbers', items: ['Dental Leads CRM Built and Live', '8+ Dental Clinic Demo Websites Built', '2 Websites Live For Bengaluru Clinics', '5 Bengaluru Neighbourhoods Served', '100% Dental Focused'] }
    ],
    internalLinks: [{ label: 'Dental Solutions', href: '/dental-solutions' }, { label: 'Contact', href: '/contact' }]
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
    description: 'Dental digital solutions in Bengaluru — websites, CRM, SEO and automation for dental clinics',
    url: 'https://agastyaone.com',
    email: 'hello@agastyaone.com',
    telephone: '+91-8328443057',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nayak Layout, 8th Phase, J. P. Nagar',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560076',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9082',
      longitude: '77.5717'
    },
    areaServed: ['Koramangala', 'Indiranagar', 'Jayanagar', 'HSR Layout', 'Whitefield', 'J. P. Nagar', 'Bengaluru'],
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

  const neighbourhood = 'Bengaluru';

  return {
    neighbourhood,
    problemTitle: `${neighbourhood} Competition Is Getting Sharper`,
    problemBody: `${neighbourhood} is one of Bengaluru's most competitive markets for dental clinics. Practices here compete not just on quality but on visibility, reputation and systems. The ones winning are the ones who invested in the right technology early.`,
    whyTitle: `Why AgastyaOne For ${neighbourhood}`,
    whyBody: `We have worked with dental clinics across ${neighbourhood}. We know the local patient, the local competition and exactly what it takes to stand out in this area.`,
    faq: [
      {
        q: `Do you work with dental clinics across different Bengaluru neighbourhoods?`,
        a: `Yes. We build dental digital growth systems for clinics across Koramangala, Indiranagar, Jayanagar, HSR Layout, Whitefield and wider Bengaluru.`
      },
      {
        q: `Can this be tailored to my exact area in Bengaluru?`,
        a: 'Yes. Local search terms, patient behaviour, review strategy and page content are adjusted around your neighbourhood and the competitors around you.'
      },
      {
        q: 'How quickly can a Bengaluru clinic launch these improvements?',
        a: 'Most website, CRM and automation foundations can be launched in 7 to 14 days. SEO work starts immediately and compounds over the following months.'
      }
    ]
  };
}

