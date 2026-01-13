/**
 * Client-side Meta Pixel initialization component
 * Initializes Meta Pixel globally and tracks page views
 * Implementation follows Next.js best practices with duplicate prevention
 */

"use client"

import { useEffect } from "react"
import { initializeMetaPixel, trackPageView } from "@/lib/meta-pixel"
import Script from "next/script"
import { usePathname } from "next/navigation"

export function MetaPixelInitializer() {
    const pathname = usePathname()
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "748336294208189"

    // Initialize pixel on mount - only once
    useEffect(() => {
        if (typeof window !== 'undefined' && !window.fbq) {
            initializeMetaPixel(pixelId)
        }
    }, [pixelId])

    // Track page views on route change
    useEffect(() => {
        // Wait for pixel to be ready
        if (typeof window === 'undefined' || !window.fbq) return

        // Map pathname to human-readable page names for better tracking
        const pageNames: Record<string, string> = {
            "/": "HomePage",
            "/contact": "ContactPage",
            "/blog": "BlogPage",
            "/about": "AboutPage",
        }

        // Get page name from pathname mapping or generate from pathname
        const pageName =
            pageNames[pathname] ||
            pathname
                .slice(1)
                .replace(/[/-]/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase()) ||
            "UnnamedPage"

        // Track page view
        trackPageView(pageName, {
            page_url: window.location.href,
        })
    }, [pathname])

    return (
        <>
            {/* Meta Pixel SDK initialization script */}
            <Script
                id="facebook-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;
            n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};

            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}', {
                autoConfig: false,
                debug: false
            });
          `,
                }}
            />
        </>
    )
}