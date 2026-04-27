import type { Metadata } from 'next';
import { Dela_Gothic_One, Montserrat, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import { DEFAULT_SEO, SITE_URL } from '@/lib/seo';
import '@/styles/globals.css';

const heading = Dela_Gothic_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const body = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const mono = JetBrains_Mono({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_SEO.defaultTitle,
    template: DEFAULT_SEO.titleTemplate,
  },
  description: DEFAULT_SEO.description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Implenix',
    title: DEFAULT_SEO.defaultTitle,
    description: DEFAULT_SEO.description,
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@implenix',
    title: DEFAULT_SEO.defaultTitle,
    description: DEFAULT_SEO.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <SchemaOrg schema={[organizationSchema(), websiteSchema()]} />
        {/* GTM: REPLACE GTM-XXXXXXX WITH YOUR CONTAINER ID */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>
        {/* META PIXEL: REPLACE 000000000000000 WITH YOUR PIXEL ID */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){
            n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
            t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','000000000000000');fbq('track','PageView');`}
        </Script>
        {/* GOOGLE ADS CONVERSION: REPLACE AW-XXXXXXXXXX WITH YOUR TAG ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXXXXXXXXX');`}
        </Script>
      </head>
      <body className="min-h-screen bg-brand-dark text-white antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
