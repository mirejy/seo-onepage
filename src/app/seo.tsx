// src/app/seo.tsx
import { DefaultSeo, LocalBusinessJsonLd } from 'next-seo';

export default function SEO() {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Beauty Secrets JuliaSun"
        defaultTitle="Beauty Secrets JuliaSun — Botox, cosmetologia a Pisa"
        description="Esperta in trattamenti di botox e cosmetologia a Pisa. Prenota la tua consulenza di bellezza oggi."
        canonical="https://beauty-secrets-juliasun.vercel.app/"
        openGraph={{
          type: 'website',
          locale: 'it_IT',
          url: 'https://beauty-secrets-juliasun.vercel.app/',
          site_name: 'Beauty Secrets JuliaSun',
          images: [
            {
              url: 'https://beauty-secrets-juliasun.vercel.app/images/hero.jpg',
              width: 1200,
              height: 630,
              alt: 'Beauty Secrets JuliaSun',
            },
          ],
        }}
        twitter={{
          handle: '@juliasunsecrets',
          site: '@juliasunsecrets',
          cardType: 'summary_large_image',
        }}
      />

      <LocalBusinessJsonLd
        type="BeautySalon"
        name="Beauty Secrets JuliaSun"
        description="Centro specializzato in botox e trattamenti cosmetologici a Pisa."
        id="https://beauty-secrets-juliasun.vercel.app/#organization"
        url="https://beauty-secrets-juliasun.vercel.app/"
        telephone="+39 351 601 47 37"
        address={{
          streetAddress: 'Via Sassogrosso, 8',
          addressLocality: 'Collemontanino (PI)',
          postalCode: '56034',
          addressCountry: 'IT',
        }}
        geo={{
          latitude: '43.5119722',
          longitude: '10.6184167',
        }}
        openingHours={['Mo-Fr 09:00-18:00']}
      />
    </>
  );
}
