import { CardGrid, ContactStrip, FAQ, Hero, Section, Steps, TextSections, TrustBar } from './Sections';
import { WebsitePagesTabs } from './WebsitePagesTabs';
import { CRMDemo } from './CRMDemo';
import { ServicesInteractive } from './ServicesInteractive';
import { AgencyVsUs } from './AgencyVsUs';
import { BookingWidget } from './BookingWidget';
import { AppointmentFeatureTabs } from './AppointmentFeatureTabs';
import { InvisibilityCalculator } from './InvisibilityCalculator';
import { SEOProofStrip, TwoTrackSection, TimelineSection, SEOFaq } from './SEOPageContent';
import { SEOFeatureTabs } from './SEOFeatureTabs';
import { faqSchemaForPage, getLocationContent, type SitePage } from '@/lib/site-data';

export function PageRenderer({ page, schema = false }: { page: SitePage; schema?: boolean }) {
  const isAppointmentPage = page.slug === 'dentist-appointment-software';
  const ctas = [
    { label: page.primaryLabel ?? 'Book a Free 30 Min Call', href: '/contact' },
    { label: page.secondaryLabel ?? 'See How It Works', href: isAppointmentPage ? '#booking-demo' : (page.parent || page.internalLinks?.[0]?.href || '/blog') }
  ];
  const locationContent = getLocationContent(page);
  const faqSchema = faqSchemaForPage(page);

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Hero
        title={page.h1}
        subtitle={page.subtitle}
        ctas={ctas}
        imageAlt={`${page.h1} dashboard illustration`}
        showCRM={page.slug === '' || page.slug === 'dental-solutions' || page.slug === 'dental-crm-software'}
        slug={page.slug}
      />
      {page.trust && page.trust.length > 0 && <TrustBar items={page.trust} />}
      {page.slug === '' ? (
        <CRMDemo />
      ) : page.slug === 'dental-seo-services' ? (
        <>
          <SEOProofStrip />
          <InvisibilityCalculator />
          <TwoTrackSection />
          <TimelineSection />
        </>
      ) : page.intro && (
        <Section tint>
          <TextSections sections={page.intro} />
        </Section>
      )}
      {isAppointmentPage && (
        <Section title="See How the Booking Flow Works" body="Try it yourself — this is exactly what your patients experience when they book through your clinic.">
          <BookingWidget />
        </Section>
      )}
      {page.slug === 'dental-website-development' && <WebsitePagesTabs />}
      {page.offers && (
        page.slug === '' ? (
          <ServicesInteractive />
        ) : page.slug === 'dental-seo-services' ? (
          <Section title="What We Do" body="Tap any area to see exactly what's included and what it does.">
            <SEOFeatureTabs />
          </Section>
        ) : isAppointmentPage ? (
          <Section title={page.offerTitle ?? 'What We Offer'} body="Tap any feature to see how it works. Auto-cycles through all 7.">
            <AppointmentFeatureTabs />
          </Section>
        ) : (
          <Section title={page.offerTitle ?? 'What We Offer'}>
            <CardGrid cards={page.offers} />
          </Section>
        )
      )}
      {page.slug === '' && <AgencyVsUs />}
      {page.steps && (
        <Section title="Getting Started Is Simple" tint>
          <Steps steps={page.steps} />
        </Section>
      )}
      {page.faq && page.slug !== 'dental-seo-services' && (
        <Section title="FAQ">
          <FAQ items={page.faq} />
        </Section>
      )}
      {page.slug === 'dental-seo-services' && <SEOFaq />}
      {locationContent && (
        <>
          <Section title={locationContent.problemTitle} body={locationContent.problemBody} tint />
          <Section title={locationContent.whyTitle} body={locationContent.whyBody} />
          <Section title={`${locationContent.neighbourhood} FAQ`} tint>
            <FAQ items={locationContent.faq} />
          </Section>
        </>
      )}
      <ContactStrip />
    </>
  );
}

