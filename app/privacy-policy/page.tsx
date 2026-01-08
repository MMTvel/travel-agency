import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "Privacy Policy - Mumo Travels & Tours",
    description:
        "Privacy Policy for Mumo Travels & Tours. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
    const sections = [
        {
            id: 1,
            title: "Information We Collect",
            content: [
                "We may collect personal information when you:",
                "• Submit a form on our website",
                "• Contact us via WhatsApp, phone, email, or social media",
                "• Interact with our advertisements (Facebook, Google, etc.)",
                "The information we collect may include:",
                "• Name",
                "• Phone number",
                "• Email address",
                "• Travel requirements and preferences",
                "• Any information you voluntarily provide",
            ],
        },
        {
            id: 2,
            title: "How We Use Your Information",
            content: [
                "We use your information to:",
                "• Respond to inquiries and provide travel-related information",
                "• Share quotations, updates, and service details",
                "• Process bookings and service requests",
                "• Improve our services and customer support",
                "• Communicate via phone, WhatsApp, SMS, or email for service-related purposes",
                "We do not use your information for unrelated marketing without consent.",
            ],
        },
        {
            id: 3,
            title: "Communication Consent",
            content: [
                "By providing your contact details, you consent to being contacted by Mumo Travels & Tours through:",
                "• Phone calls",
                "• WhatsApp messages",
                "• SMS",
                "• Email",
                "Communication will be limited to inquiries, service updates, confirmations, and customer support.",
            ],
        },
        {
            id: 4,
            title: "Information Sharing",
            content: [
                "We do not sell, rent, or trade your personal information.",
                "Your information may only be shared with:",
                "• Airlines, hotels, embassies, insurance providers, or service partners when required to deliver requested services",
                "• Government authorities or legal bodies if required by law",
            ],
        },
        {
            id: 5,
            title: "Data Security",
            content: [
                "We take reasonable steps to protect your personal information from unauthorized access, misuse, or disclosure. However, no online transmission or storage method is 100% secure, and we cannot guarantee absolute security.",
            ],
        },
        {
            id: 6,
            title: "Third-Party Services & Links",
            content: [
                "Our website or communication channels may include links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties. We encourage users to review their privacy policies separately.",
            ],
        },
        {
            id: 7,
            title: "Cookies & Analytics",
            content: [
                "Our website may use cookies or similar technologies to improve user experience and analyze website traffic. Cookies do not collect personally identifiable information unless you voluntarily provide it.",
            ],
        },
        {
            id: 8,
            title: "Data Retention",
            content: [
                "We retain personal information only as long as necessary to:",
                "• Fulfill service requests",
                "• Comply with legal or regulatory obligations",
                "• Maintain business records",
                "You may request deletion of your personal data, subject to legal requirements.",
            ],
        },
        {
            id: 9,
            title: "Your Rights",
            content: [
                "You have the right to:",
                "• Request access to your personal information",
                "• Request correction or update of inaccurate data",
                "• Request deletion of your personal information",
                "To exercise these rights, please contact us using the details below.",
            ],
        },
        {
            id: 10,
            title: "Changes to This Policy",
            content: [
                "Mumo Travels & Tours reserves the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website.",
            ],
        },
    ]

    return (
        <main className="min-h-screen md:mt-10 mt-6 bg-background">
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 border-b border-border pb-8">
                    <h1 className="mb-2 text-4xl font-bold text-foreground">Privacy Policy</h1>
                    <p className="text-lg text-muted-foreground">Mumo Travels & Tours</p>
                    <p className="mt-4 text-sm text-muted-foreground">Last updated: January 8, 2026</p>
                </div>

                {/* Introduction */}
                <Card className="mb-8 border-border bg-card">
                    <CardContent className="pt-6">
                        <p className="leading-relaxed text-foreground">
                            Mumo Travels & Tours ("we", "our", "us") respects your privacy and is committed to protecting your
                            personal information. This Privacy Policy explains how we collect, use, store, and protect information
                            when you use our website{" "}
                            <a href="http://www.mumotravels.com" className="text-primary hover:underline">
                                www.mumotravels.com
                            </a>
                            , contact us, or use our services.
                        </p>
                    </CardContent>
                </Card>

                {/* Sections */}
                <div className="space-y-6">
                    {sections.map((section) => (
                        <Card key={section.id} className="border-border bg-card">
                            <CardContent className="pt-6">
                                <h2 className="mb-4 text-2xl font-semibold text-foreground">
                                    {section.id}. {section.title}
                                </h2>
                                <div className="space-y-2">
                                    {section.content.map((line, index) => (
                                        <p key={index} className="leading-relaxed text-foreground">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Contact Section */}
                <Card className="mt-8 border-border bg-card">
                    <CardContent className="pt-6">
                        <h2 className="mb-4 text-2xl font-semibold text-foreground">11. Contact Us</h2>
                        <p className="mb-4 leading-relaxed text-foreground">
                            If you have any questions or concerns about this Privacy Policy or how your information is handled, please
                            contact:
                        </p>
                        <div className="space-y-3 rounded-lg bg-muted/30 p-4">
                            <div>
                                <p className="font-semibold text-foreground">Mumo Travels & Tours</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Website:</p>
                                <a href="http://www.mumotravels.com" className="text-primary hover:underline">
                                    www.mumotravels.com
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email:</p>
                                <a href="mailto:mumotravelsandtours@gmail.com" className="text-primary hover:underline">
                                    mumotravelsandtours@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">WhatsApp:</p>
                                <a href="https://wa.me/01332846700" className="text-primary hover:underline">
                                    +8801332846700
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}