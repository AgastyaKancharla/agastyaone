import { CardGrid, CheckpointList, ContactStrip, FAQ, FounderCard, Hero, Section, Steps, TextSections, TrustBar, WhyVisualCard } from './Sections';
import { CRMDemo } from './CRMDemo';
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
        showCRM={page.slug === ''}
      />
      {page.trust && page.trust.length > 0 && <TrustBar items={page.trust} />}
      {page.slug === '' ? (
        <CRMDemo />
      ) : page.intro && (
        <Section tint>
          <TextSections sections={page.intro} />
        </Section>
      )}
      {page.offers && (
        <Section title={page.offerTitle ?? 'What We Offer'}>
          <CardGrid cards={page.offers} />
        </Section>
      )}
      {page.slug === '' && (
        <>
          <Section title="Why AgastyaOne" body="A specialist growth partner for dental clinics that need real systems, not agency theatre." tint>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
              <div>
                <h3 className="font-heading text-3xl font-bold text-[#1A1A2E] md:text-5xl">
                  Built By an Entrepreneur. For Entrepreneurs.
                </h3>
                <p className="mt-5 text-base leading-7 text-gray-600">
                  Most agencies have never sat with a clinic owner. AgastyaOne builds from lived dental industry experience: a dental leads CRM built from scratch and systems used in real clinic pipelines.
                </p>
                <CheckpointList
                  items={[
                    'Operated across Koramangala, Indiranagar, Jayanagar, HSR Layout and Whitefield',
                    'We built our own CRM before selling one',
                    'We use every tool we sell in our own businesses',
                    'We are a growth partner, not a vendor'
                  ]}
                />
              </div>
              <WhyVisualCard />
            </div>
          </Section>
          <Section title="The Person Behind AgastyaOne" dark>
            <FounderCard />
          </Section>
        </>
      )}
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
