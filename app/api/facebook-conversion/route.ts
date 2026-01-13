import { NextResponse } from "next/server"
import crypto from "crypto"

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
// Replace with your pixel ID
const ACCESS_TOKEN = process.env.NEXT_FACEBOOK_CONVERSION_API_TOKEN
// Replace with your access token

function hashData(data: string | null | undefined) {
    if (!data) return null
    return crypto.createHash("sha256").update(data.toLowerCase().trim()).digest("hex")
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, phone, name, service, message, externalId, fbc, fbp, eventSourceUrl } = body

        // Get client IP and user agent
        const clientIpAddress =
            request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || ""
        const clientUserAgent = request.headers.get("user-agent") || ""

        // Prepare hashed user data
        const userData: Record<string, string> = {
            client_ip_address: clientIpAddress,
            client_user_agent: clientUserAgent,
        }

        // Add email if provided
        if (email) {
            userData.em = hashData(email) || ""
        }

        // Add phone if provided
        if (phone) {
            const cleanPhone = phone.replace(/\D/g, "")
            userData.ph = hashData(cleanPhone) || ""
        }

        // Add name if provided
        if (name) {
            const nameParts = name.trim().split(" ")
            userData.fn = hashData(nameParts[0]) || ""
            if (nameParts.length > 1) {
                userData.ln = hashData(nameParts[nameParts.length - 1]) || ""
            }
        }

        // Add Facebook click ID (fbc) if available
        if (fbc) {
            userData.fbc = fbc
        }

        // Add Facebook browser ID (fbp) if available
        if (fbp) {
            userData.fbp = fbp
        }

        // Prepare custom data with form parameters
        const customData: Record<string, string> = {}

        if (service) {
            customData.content_category = service
        }

        if (message) {
            customData.content_name = "Contact Form Lead"
        }

        customData.status = "completed"

        // Prepare Lead event data
        const eventData: Record<string, unknown> = {
            event_name: "Lead",
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            event_source_url: eventSourceUrl || request.headers.get("referer") || "",
            user_data: userData,
            custom_data: customData,
        }

        // Add external_id if provided
        if (externalId) {
            eventData.event_id = externalId
        }

        console.log("Sending Lead event to Facebook CAPI:", {
            pixel_id: PIXEL_ID,
            event_name: eventData.event_name,
            has_fbc: !!fbc,
            has_fbp: !!fbp,
            has_external_id: !!externalId,
        })

        // Send to Facebook Conversion API
        const response = await fetch(`https://graph.facebook.com/v18.0/${PIXEL_ID}/events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: [eventData],
                access_token: ACCESS_TOKEN,
            }),
        })

        const result = await response.json()

        if (!response.ok) {
            console.error("Facebook CAPI Error:", result)
            return NextResponse.json(
                { error: "Failed to send Lead event to Facebook", details: result },
                { status: response.status },
            )
        }

        console.log("Facebook CAPI Success:", result)

        return NextResponse.json({
            success: true,
            message: "Lead event sent successfully",
            result,
        })
    } catch (error) {
        console.error("Server Error:", error)
        return NextResponse.json(
            { error: "Internal server error", message: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 },
        )
    }
}
