import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms & Conditions | Mumo Travels & Tours",
    description:
        "Read our Terms & Conditions for Mumo Travels & Tours services including air ticketing, visa assistance, tour packages, and more.",
}

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen md:mt-10 mt-6 bg-background py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-2">Terms & Conditions</h1>
                    <p className="text-lg text-muted-foreground mb-1">Mumo Travels & Tours</p>
                    <p className="text-sm text-muted-foreground">Last updated: January 8, 2026</p>
                </div>

                {/* Introduction */}
                <div className="mb-12 p-6 bg-card border border-border rounded-lg">
                    <p className="text-foreground leading-relaxed">
                        By accessing or using the website{" "}
                        <a href="https://www.mumotravels.com" className="text-blue-600 hover:underline">
                            www.mumotravels.com
                        </a>
                        , submitting an inquiry, or using any of our services, you agree to be bound by the following Terms &
                        Conditions. Please read them carefully.
                    </p>
                </div>

                {/* Table of Contents */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Contents</h2>
                    <ul className="space-y-2">
                        {[
                            { num: 1, title: "About Us" },
                            { num: 2, title: "Use of Website & Services" },
                            { num: 3, title: "Lead Information & Data Collection" },
                            { num: 4, title: "Communication Consent" },
                            { num: 5, title: "Pricing & Payments" },
                            { num: 6, title: "Visa & Immigration Disclaimer" },
                            { num: 7, title: "Cancellations, Refunds & Changes" },
                            { num: 8, title: "Third-Party Services" },
                            { num: 9, title: "Limitation of Liability" },
                            { num: 10, title: "Intellectual Property" },
                            { num: 11, title: "Changes to Terms" },
                            { num: 12, title: "Governing Law" },
                            { num: 13, title: "Contact Information" },
                        ].map((item) => (
                            <li key={item.num}>
                                <a href={`#section-${item.num}`} className="text-blue-600 hover:underline">
                                    {item.num}. {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {/* Section 1 */}
                    <Section num={1} title="About Us">
                        <p>
                            Mumo Travels & Tours is a travel service provider based in Dhaka, Bangladesh. We offer travel-related
                            services including air ticketing, visa assistance, tour packages, hotel reservations, Umrah services,
                            travel insurance, airport transfers, and corporate travel solutions.
                        </p>
                    </Section>

                    {/* Section 2 */}
                    <Section num={2} title="Use of Website & Services">
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>The information on this website is provided for general informational purposes only.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                    Submitting a form, message, or inquiry does not guarantee booking, visa approval, ticket issuance, or
                                    service confirmation.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>All services are subject to availability, third-party rules, and applicable laws.</span>
                            </li>
                        </ul>
                    </Section>

                    {/* Section 3 */}
                    <Section num={3} title="Lead Information & Data Collection">
                        <p className="mb-4">
                            When you submit your information through our website, WhatsApp, Facebook, or other platforms, you may be
                            asked to provide details such as:
                        </p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>Name</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>Phone number</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>Email address</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>Travel requirements or preferences</span>
                            </li>
                        </ul>
                        <p className="font-semibold mb-3">By submitting this information, you confirm that:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>The information provided is accurate and belongs to you</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                    You authorize Mumo Travels & Tours to contact you regarding your inquiry or requested services
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>We do not sell or rent your personal information to third parties.</span>
                            </li>
                        </ul>
                    </Section>

                    {/* Section 4 */}
                    <Section num={4} title="Communication Consent">
                        <p className="mb-4">By submitting your contact details, you agree that we may contact you via:</p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>Phone call</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>WhatsApp</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>SMS</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>Email</span>
                            </li>
                        </ul>
                        <p>This communication will be limited to service-related updates, quotations, confirmations, or support.</p>
                    </Section>

                    {/* Section 5 */}
                    <Section num={5} title="Pricing & Payments">
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                    All prices are subject to change without prior notice due to airline, hotel, embassy, or supplier
                                    policies.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Final prices are confirmed only after booking confirmation or invoice issuance.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                    Any payment made is subject to the terms and conditions of airlines, hotels, embassies, and
                                    third-party suppliers.
                                </span>
                            </li>
                        </ul>
                    </Section>

                    {/* Section 6 */}
                    <Section num={6} title="Visa & Immigration Disclaimer">
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                    Visa approval is solely at the discretion of the respective embassy or immigration authority.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                    Mumo Travels & Tours acts only as a facilitator and is not responsible for visa rejection, delays, or
                                    changes in embassy requirements.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                    Visa fees, service charges, and documentation requirements may vary and are non-refundable unless
                                    stated otherwise.
                                </span>
                            </li>
                        </ul>
                    </Section>

                    {/* Section 7 */}
                    <Section num={7} title="Cancellations, Refunds & Changes">
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                    Cancellations, refunds, and changes are governed by airline, hotel, tour operator, or supplier
                                    policies.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Service charges, convenience fees, or processing fees may be non-refundable.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Refund timelines depend on third-party processing and are beyond our direct control.</span>
                            </li>
                        </ul>
                    </Section>

                    {/* Section 8 */}
                    <Section num={8} title="Third-Party Services">
                        <p className="mb-4">
                            We work with airlines, hotels, insurance providers, transport operators, and other third parties.
                        </p>
                        <p className="font-semibold mb-3">Mumo Travels & Tours is not liable for:</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>Schedule changes</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>Service disruptions</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">•</span>
                                <span>Loss, damage, or delays caused by third parties</span>
                            </li>
                        </ul>
                    </Section>

                    {/* Section 9 */}
                    <Section num={9} title="Limitation of Liability">
                        <p className="font-semibold mb-3">Mumo Travels & Tours shall not be liable for:</p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Travel delays, cancellations, or disruptions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Loss of documents, baggage, or personal belongings</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>
                                    Events beyond our control, including natural disasters, strikes, political unrest, or government
                                    actions
                                </span>
                            </li>
                        </ul>
                    </Section>

                    {/* Section 10 */}
                    <Section num={10} title="Intellectual Property">
                        <p>
                            All website content, including text, logos, images, and designs, is the property of Mumo Travels & Tours
                            and may not be copied, reproduced, or used without written permission.
                        </p>
                    </Section>

                    {/* Section 11 */}
                    <Section num={11} title="Changes to Terms">
                        <p>
                            We reserve the right to update or modify these Terms & Conditions at any time without prior notice.
                            Updates will be effective immediately upon posting on the website.
                        </p>
                    </Section>

                    {/* Section 12 */}
                    <Section num={12} title="Governing Law">
                        <p>
                            These Terms & Conditions are governed by the laws of the People's Republic of Bangladesh. Any disputes
                            shall be subject to the jurisdiction of Bangladeshi courts.
                        </p>
                    </Section>

                    {/* Section 13 */}
                    <Section num={13} title="Contact Information">
                        <p className="font-semibold mb-4">For any questions regarding these Terms & Conditions, please contact:</p>
                        <div className="space-y-2 text-foreground">
                            <p className="font-semibold">Mumo Travels & Tours</p>
                            <p>
                                <span className="font-semibold">Website:</span>{" "}
                                <a href="https://www.mumotravels.com" className="text-blue-600 hover:underline">
                                    www.mumotravels.com
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span>{" "}
                                <a href="mailto:mumotravelsandtours@gmail.com" className="text-blue-600 hover:underline">
                                    mumotravelsandtours@gmail.com
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold">WhatsApp:</span>{" "}
                                <a href="https://wa.me/8801332846700" className="text-blue-600 hover:underline">
                                    +8801332846700
                                </a>
                            </p>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    )
}

// Section Component
function Section({
    num,
    title,
    children,
}: {
    num: number
    title: string
    children: React.ReactNode
}) {
    return (
        <section id={`section-${num}`} className="scroll-mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
                {num}. {title}
            </h2>
            <div className="text-foreground space-y-3 leading-relaxed">{children}</div>
        </section>
    )
}
