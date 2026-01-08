import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MetaPixelInitializer } from "@/components/meta-pixel-initializer"
import { fetchMetadataFromAPI } from "@/lib/metadata"


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
  const config = await getMetadata();

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
  const config = await getMetadata();
  const { logoUrl, siteName, description, siteUrl } = config;
  return (
    <html lang="en" className="hydrated" data-scroll-behavior="smooth">
      <body className={`${poppins.className} hydrated font-sans antialiased`}>

        <Header siteUrl={siteUrl} logo={logoUrl} siteName={siteName} description={description} />
        {children}
        <Analytics />
        <Footer siteUrl={siteUrl} logo={logoUrl} siteName={siteName} description={description} />
        <ScrollToTop />
        <MetaPixelInitializer />
      </body>
    </html>
  )
}
