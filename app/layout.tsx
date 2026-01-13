import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { fetchMetadataFromAPI } from "@/lib/metadata"
import Script from "next/script"
import { FB_PIXEL_ID } from "@/lib/fpixel"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

async function getMetadata() {
  const config = await fetchMetadataFromAPI()
  return config
}

export async function generateMetadata(): Promise<Metadata> {
  const config = await getMetadata()

  return {
    title: {
      default: config.titleDefault,
      template: config.titleTemplate,
    },
    description: config.description,
    applicationName: config.siteName,
    keywords: config.keywords,
    creator: config.creator,
    publisher: config.publisher,
    category: config.category,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: config.siteUrl,
      title: config.ogTitle,
      description: config.ogDescription,
      siteName: config.siteName,
      images: [
        {
          url: config.ogImageUrl,
          width: 1200,
          height: 630,
          alt: config.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.twitterTitle,
      description: config.twitterDescription,
      images: [config.ogImageUrl],
    },
    verification: {
      google: "your-google-verification-code",
    },
    alternates: {
      canonical: config.siteUrl + config.canonicalUrl,
    },
    icons: {
      icon: [
        {
          url: "/icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/icon.svg",
          type: "image/svg+xml",
        },
      ],
      apple: "/apple-icon.png",
    },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#0ea5e9" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const config = await getMetadata()
  const { logoUrl, siteName, description, siteUrl } = config
  return (
    <html lang="en" className="hydrated" data-scroll-behavior="smooth" data-arp="">
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className={`${poppins.className} hydrated font-sans antialiased`}>
        <Header siteUrl={siteUrl} logo={logoUrl} siteName={siteName} description={description} />
        {children}
        <Analytics />
        <Footer siteUrl={siteUrl} logo={logoUrl} siteName={siteName} description={description} />
        <ScrollToTop />
      </body>
    </html>
  )
}
