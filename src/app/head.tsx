// src/app/head.tsx
import Script from "next/script";
import SEO from "./seo";

export default function Head() {
  return (
    <>
      {/* Ваши SEO‑мета */}
      <SEO />

      {/* 1) Браузерный пиксель Meta */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;
            n=f.fbq=function(){
              n.callMethod?
                n.callMethod.apply(n,arguments):
                n.queue.push(arguments)
            };
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(
            window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js'
          );
          fbq('init', '1076271397967446');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* 2) Фолбэк для отключённого JS */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <img
              height="1" width="1"
              style="display:none"
              src="https://www.facebook.com/tr?id=1076271397967446&ev=PageView&noscript=1"
            />
          `,
        }}
      />
    </>
  );
}
