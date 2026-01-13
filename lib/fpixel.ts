
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "748336294208189";
// Replace with your pixel ID

// Get Facebook Click ID (fbc) from cookie
export const getFbc = () => {
    if (typeof document === "undefined") return null
    const fbcCookie = document.cookie.split("; ").find((row) => row.startsWith("_fbc="))
    return fbcCookie ? fbcCookie.split("=")[1] : null
}

// Get Facebook Browser ID (fbp) from cookie
export const getFbp = () => {
    if (typeof document === "undefined") return null
    const fbpCookie = document.cookie.split("; ").find((row) => row.startsWith("_fbp="))
    return fbpCookie ? fbpCookie.split("=")[1] : null
}

// Generate external ID (unique identifier for this user)
export const generateExternalId = () => {
    return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Track Lead event with browser pixel
export const trackLead = (formData: Record<string, string>) => {
    if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
            content_name: "Contact Form Lead",
            content_category: formData.service || "general",
            status: "completed",
        })
    }
}
