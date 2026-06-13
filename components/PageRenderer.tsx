import { CardGrid, ContactStrip, FAQ, Hero, Section, Steps, TextSections, TrustBar } from './Sections';
import { CRMDemo } from './CRMDemo';
import { ServicesInteractive } from './ServicesInteractive';
import { AgencyVsUs } from './AgencyVsUs';
import { InvisibilityCalculator } from './InvisibilityCalculator';
import { faqSchemaForPage, getLocationContent, type SitePage } from '@/lib/site-data';

export function PageRenderer({ page, schema = false }: { page: SitePage; schema?: boolean }) {
  const ctas = [
    { label: page.primaryLabel ?? 'Book a Free 30 Min Call', href: '/contact' },
    { label: page.secondaryLabel ?? 'See How It Works', href: page.parent || page.internalLinks?.[0]?.href || '/blog' }
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
        showCRM={page.slug === '' || page.slug === 'dental-solutions'}
        lightPanel={page.slug === 'dental-solutions'}
        slug={page.slug}
      />
      {page.trust && page.trust.length > 0 && <TrustBar items={page.trust} />}
      {page.slug === '' ? (
        <CRMDemo />
      ) : page.intro && (
        <Section tint>
          <TextSections sections={page.intro} />
        </Section>
      )}
      {page.slug === 'dental-seo-services' && <InvisibilityCalculator />}
      {page.offers && (
        page.slug === '' ? (
          <ServicesInteractive />
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
      {page.faq && (
        <Section title="FAQ">
          <FAQ items={page.faq} />
        </Section>
      )}
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

