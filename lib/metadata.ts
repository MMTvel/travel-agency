
export interface MetadataIProps {
    siteUrl: string
    titleDefault: string
    titleTemplate: string
    description: string
    siteName: string
    logoUrl: string
    ogTitle: string
    ogDescription: string
    ogImageUrl: string
    twitterTitle: string
    twitterDescription: string
    canonicalUrl: string
    category: string
    creator: string
    publisher: string
    keywords: string[]
}

let cachedMetadata: any = null

async function fetchMetadataFromAPI(): Promise<MetadataIProps> {
    if (cachedMetadata) {
        return cachedMetadata
    }

    try {
        const response = await fetch(`${process.env.NEXT_PRIVATE_API_URL}/api/metadata`, {
            headers: {
                "Content-Type": "application/json",
            },
            // Cache for 1 hour to avoid excessive API calls
            next: { revalidate: 0 },
        })

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`)
        }

        const data = await response.json();
        cachedMetadata = parseApiResponse(data)
        return cachedMetadata
    } catch (error) {
        console.error("Failed to fetch metadata from API:", error)
        // Return fallback metadata if API fails
        return getFallbackMetadata()
    }
}

function parseApiResponse(apiData: any) {
    const metadata: Record<string, any> = {}
    const keywords: string[] = []

    // Parse metadata array
    if (apiData.metadata && Array.isArray(apiData.metadata)) {
        apiData.metadata.forEach((item: any) => {
            metadata[item.key] = item.value
        })
    }

    // Parse keywords array
    if (apiData.keywords && Array.isArray(apiData.keywords)) {
        keywords.push(...apiData.keywords)
    }

    return {
        siteUrl: metadata.siteUrl || "https://mumotravels.com",
        titleDefault: metadata.titleDefault || "Mumo Travels & Tours | Visa & Tour Services",
        titleTemplate: metadata.titleTemplate || "%s | Mumo Travels & Tours",
        description: metadata.description || "Your trusted travel partner.",
        siteName: metadata.siteName || "Mumo Travels & Tours",
        logoUrl: metadata.logoUrl || "https://i.ibb.co/cK7w2smv/8506e26deb6b.jpg",
        ogTitle: metadata.ogTitle || metadata.titleDefault || "Mumo Travels & Tours",
        ogDescription: metadata.ogDescription || metadata.description || "Your trusted travel partner.",
        ogImageUrl: metadata.ogImageUrl || "https://i.ibb.co.com/Ngxd4YL9/Screenshot-189.png",
        twitterTitle: metadata.twitterTitle || metadata.titleDefault || "Mumo Travels & Tours",
        twitterDescription: metadata.twitterDescription || metadata.description || "Your trusted travel partner.",
        canonicalUrl: metadata.canonicalUrl || "/",
        category: metadata.category || "travel",
        creator: metadata.creator || "Mumo Travels & Tours",
        publisher: metadata.publisher || "Mumo Travels & Tours",
        keywords: keywords.length > 0 ? keywords : ["visa processing", "visa"],
    }
}

function getFallbackMetadata() {
    return {
        siteUrl: "https://mumotravels.com",
        titleDefault: "Mumo Travels & Tours | Visa & Tour Services",
        titleTemplate: "%s | Mumo Travels & Tours",
        description:
            "Your trusted travel partner. Visa processing, air tickets, Umrah packages, tour packages, and foreign education services. Mumo Travels & Tours - We take you to your dream destination.",
        siteName: "Mumo Travels & Tours",
        logoUrl: "https://i.ibb.co/cK7w2smv/8506e26deb6b.jpg",
        ogTitle: "Mumo Travels & Tours | Visa & Tour Services",
        ogDescription:
            "Your trusted travel partner. Visa processing, air tickets, Umrah packages, tour packages, and foreign education services. Mumo Travels & Tours - We take you to your dream destination.",
        ogImageUrl: "https://i.ibb.co.com/Ngxd4YL9/Screenshot-189.png",
        twitterTitle: "Mumo Travels & Tours | Visa & Tour Services",
        twitterDescription:
            "Your trusted travel partner. Visa processing, air tickets, Umrah packages, tour packages, and foreign education services. Mumo Travels & Tours - We take you to your dream destination.",
        canonicalUrl: "/",
        category: "travel",
        creator: "Mumo Travels & Tours",
        publisher: "Mumo Travels & Tours",
        keywords: ["visa processing", "visa"],
    }
}

export { fetchMetadataFromAPI, getFallbackMetadata }