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

    console.log("Initializing Meta Pixel with ID:", pixelId)
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
        console.warn("Meta Pixel not initialized - cannot track form submission")
        return
    }

    try {
        // Prepare clean event data without undefined values
        const eventData: Record<string, any> = {
            content_name: "Contact Form Submission",
            content_category: parameters.service || "General Inquiry",
        }

        // Only add defined values
        if (parameters.name) eventData.name = parameters.name
        if (parameters.email) eventData.email = parameters.email
        if (parameters.phone) eventData.phone = parameters.phone
        if (parameters.service) eventData.service = parameters.service
        if (parameters.pageName) eventData.page_name = parameters.pageName

        // Track Lead event (standard Meta event for form submissions)
        window.fbq("track", "Lead", eventData)

        console.log("✅ Meta Pixel: Lead event tracked successfully", eventData)
    } catch (error) {
        console.error("❌ Meta Pixel: Error tracking Lead event", error)
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

/**
 * Test Lead event - Use this in browser console to test
 * Call: testLeadEvent()
 */
export function testLeadEvent(): void {
    if (typeof window === "undefined") {
        console.error("Not in browser environment")
        return
    }

    console.log("🧪 Testing Lead event...")

    if (!window.fbq) {
        console.error("❌ Meta Pixel (fbq) is not initialized!")
        console.log("Make sure MetaPixelInitializer component is mounted")
        return
    }

    try {
        window.fbq("track", "Lead", {
            content_name: "Test Lead Event",
            content_category: "Test Category",
            test: true
        })
        console.log("✅ Test Lead event fired successfully!")
        console.log("Check Meta Events Manager to see if it appears")
    } catch (error) {
        console.error("❌ Error firing test Lead event:", error)
    }
}

// Make test function available globally for console testing
if (typeof window !== "undefined") {
    (window as any).testLeadEvent = testLeadEvent
}