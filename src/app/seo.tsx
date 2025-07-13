import { DefaultSeo, LocalBusinessJsonLd } from 'next-seo';

export default function SEO() {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Beauty Secrets JuliaSun"
        defaultTitle="Beauty Secrets JuliaSun — Botox, Cosmetologia a [Città]"
        description="Esperta in trattamenti di botox e cosmetologia in [Città]. Prenota la tua consulenza di bellezza oggi."
        canonical="https://tuo-dominio.it/"
        openGraph={{
          type: 'website',
          locale: 'it_IT',
          url: 'https://tuo-dominio.it/',
          site_name: 'Beauty Secrets JuliaSun',
          images: [{ url: 'https://tuo-dominio.it/og-image.jpg' }],
        }}
        twitter={{
          handle: '@tuo_handle',
          site: '@tuo_handle',
          cardType: 'summary_large_image',
        }}
      />

      {/* Локальный бизнес для Local SEO */}
      <LocalBusinessJsonLd
        type="BeautySalon"
        name="Beauty Secrets JuliaSun"
        description="Centro estetico specializzato in botox e trattamenti cosmetologici a [Città]."
        id="https://tuo-dominio.it/#organization"
        url="https://tuo-dominio.it/"
        telephone="+39 351 601 47 37"
        address={{
          streetAddress: 'Via Sassogrosso, 8',
          addressLocality: 'Collemontanino PI',
          postalCode: '56034',
          addressCountry: 'IT',
        }}
        geo={{ latitude: '43.5119722', longitude: '10.6184167' }}
        openingHours={['Mo-Fr 09:00-18:00']}
      />
    </>
  );
}
