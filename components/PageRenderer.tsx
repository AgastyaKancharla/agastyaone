import { CardGrid, ContactStrip, FAQ, Hero, Section, Steps, TextSections, TrustBar } from './Sections';
import { CRMDemo } from './CRMDemo';
import { ServicesInteractive } from './ServicesInteractive';
import { ServicesInteractiveDental } from './ServicesInteractiveDental';
import { AgencyVsUs } from './AgencyVsUs';
import { ProblemSolution } from './ProblemSolution';
import { CRMFeaturesSection } from './CRMFeaturesSection';
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
        showCRM={page.slug === '' || page.slug === 'dental-solutions' || page.slug === 'dental-crm-software'}
        slug={page.slug}
      />
      {page.trust && page.trust.length > 0 && <TrustBar items={page.trust} />}
      {page.slug === '' ? (
        <CRMDemo />
      ) : page.slug === 'dental-solutions' ? (
        <ProblemSolution />
      ) : page.slug === 'dental-crm-software' ? (
        page.intro && (
          <section style={{ background: '#F8F6F3', padding: '40px 0 48px' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(1rem,5vw,2rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
              {/* Card 1 — Problem with stat callout */}
              <div style={{ background: '#1A1A2E', borderRadius: 18, padding: '24px 24px 20px', boxShadow: '0 12px 40px rgba(26,26,46,0.12)' }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 42, color: '#E86C2F', lineHeight: 1 }}>₹3.75L</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Lost per year · avg clinic</div>
                </div>
                <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 10px', lineHeight: 1.3 }}>{page.intro[0].title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.75, margin: 0 }}>{page.intro[0].body}</p>
              </div>
              {/* Card 2 — Cause with orange left border */}
              <div style={{ background: '#fff', borderRadius: 18, padding: '24px 24px 20px', borderLeft: '4px solid #E86C2F', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(232,108,47,0.08)', border: '1px solid rgba(232,108,47,0.15)', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700, color: '#E86C2F', marginBottom: 14, width: 'fit-content' }}>
                  WHY THIS HAPPENS
                </div>
                <h3 style={{ fontFamily: 'Poppins,sans-serif', fontSize: 16, fontWeight: 700, color: '#1A1A2E', margin: '0 0 10px', lineHeight: 1.3 }}>{page.intro[1].title}</h3>
                <p style={{ color: '#6B7280', fontSize: 13, lineHeight: 1.75, margin: 0 }}>{page.intro[1].body}</p>
              </div>
            </div>
          </section>
        )
      ) : page.intro && (
        <Section tint>
          <TextSections sections={page.intro} />
        </Section>
      )}
      {page.offers && (
        page.slug === '' ? (
          <ServicesInteractive />
        ) : page.slug === 'dental-solutions' ? (
          <ServicesInteractiveDental />
        ) : page.slug === 'dental-crm-software' ? (
          <CRMFeaturesSection />
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

