import { CardGrid, CheckpointList, ContactStrip, FAQ, FounderCard, Hero, Section, Steps, TextSections, TrustBar, WhyVisualCard } from './Sections';
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
      />
      {page.trust && page.trust.length > 0 && <TrustBar items={page.trust} />}
      {page.intro && (
        <Section title={page.slug === '' ? 'We Speak Your Industry' : undefined} tint={page.slug !== ''} dark={page.slug === ''}>
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
          <Section title="Why AgastyaOne" body="A practical growth partner for restaurants and clinics that need systems, not agency theatre." tint>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
              <div>
                <h3 className="font-heading text-3xl font-bold text-[#1A1A2E] md:text-5xl">
                  Built By an Entrepreneur. For Entrepreneurs.
                </h3>
                <p className="mt-5 text-base leading-7 text-gray-600">
                  Most agencies have never run a business. AgastyaOne builds from lived operator experience: a cloud kitchen, WeValue restaurant CRM, and dental lead systems used in real sales pipelines.
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
