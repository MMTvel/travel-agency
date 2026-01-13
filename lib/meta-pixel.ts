/**
 * Meta Pixel tracking utilities
 * Provides type-safe functions for tracking Meta Pixel events
 */

declare global {
    interface Window {
        fbq?: {
            (action: 'track', eventName: string, parameters?: Record<string, any>): void
            (action: 'trackCustom', eventName: string, parameters?: Record<string, any>): void
            (action: 'init', pixelId: string, options?: Record<string, any>): void
            // Fallback for any other fbq calls
            (action: string, ...args: any[]): void
        }
    }
}

/**
 * Initialize Meta Pixel
 * Should be called once on app initialization
 */
export function initializeMetaPixel(pixelId: string): void {
    if (typeof window === "undefined") return

    // Check if fbq is already initialized
    if (window.fbq) {
        console.log("Meta Pixel already initialized")
        return
    }

    // console.log("Initializing Meta Pixel with ID:", pixelId)
}

/**
 * Track PageView event
 * Call this on route changes to track page views
 */
export function trackPageView(pageName?: string, parameters?: Record<string, any>): void {
    if (typeof window === "undefined" || !window.fbq) {
        console.warn("Meta Pixel not initialized")
        return
    }

    try {
        const eventData = {
            ...parameters,
            page_name: pageName || "UnnamedPage",
        }

        window.fbq("track", "PageView", eventData)
        console.log("Meta Pixel: PageView tracked", eventData)
    } catch (error) {
        console.error("Meta Pixel: Error tracking PageView", error)
    }
}

/**
 * Track custom event
 */
export function trackEvent(eventName: string, parameters?: Record<string, any>): void {
    if (typeof window === "undefined" || !window.fbq) {
        console.warn("Meta Pixel not initialized")
        return
    }

    try {
        window.fbq("track", eventName, parameters)
        console.log(`Meta Pixel: ${eventName} tracked`, parameters)
    } catch (error) {
        console.error(`Meta Pixel: Error tracking ${eventName}`, error)
    }
}

/**
 * Track Lead event (form submission)
 */
export function trackLead(parameters?: Record<string, any>): void {
    trackEvent("Lead", parameters)
}

/**
 * Track Contact event
 */
export function trackContact(parameters?: Record<string, any>): void {
    trackEvent("Contact", parameters)
}

/**
 * Track Contact Form Submission
 * Tracks when a user submits a contact form with detailed information
 */
export function trackContactFormSubmission(parameters: {
    name?: string
    email?: string
    phone?: string
    service?: string
    message?: string
    pageName?: string
}): void {
    if (typeof window === "undefined" || !window.fbq) {
        console.warn("Meta Pixel not initialized")
        return
    }

    try {
        // Track as Lead event (standard Meta event for form submissions)
        window.fbq("track", "Lead", {
            content_name: "Contact Form Submission",
            content_category: parameters.service || "General Inquiry",
            value: 1,
            currency: "USD",
            ...parameters,
        })

        // Also track as Contact event
        window.fbq("track", "Contact", parameters)

        console.log("Meta Pixel: Contact form submission tracked", parameters)
    } catch (error) {
        console.error("Meta Pixel: Error tracking contact form submission", error)
    }
}

/**
 * Track custom conversion
 */
export function trackCustomEvent(eventName: string, parameters?: Record<string, any>): void {
    if (typeof window === "undefined" || !window.fbq) {
        console.warn("Meta Pixel not initialized")
        return
    }

    try {
        window.fbq("trackCustom", eventName, parameters)
        console.log(`Meta Pixel: Custom event ${eventName} tracked`, parameters)
    } catch (error) {
        console.error(`Meta Pixel: Error tracking custom event ${eventName}`, error)
    }
}