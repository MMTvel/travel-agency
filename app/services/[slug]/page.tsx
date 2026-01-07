import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { ServicesCTA } from "@/components/services-cta"
import { ServicePackages } from "@/components/service-packages"
import { getServiceBySlug, getServicesWithPackages } from "@/lib/data-fetch"

interface ServicePageProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const servicesData = await getServicesWithPackages();
    return servicesData.map((service) => ({
        slug: service.url,
    }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params
    const service = await getServiceBySlug(slug)

    if (!service) {
        return {
            title: "Service Not Found | Mumo Travels & Tours",
        }
    }

    return {
        title: `${service.title} | Mumo Travels & Tours`,
        description: service.description,
    }
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params
    const service = await getServiceBySlug(slug)

    if (!service) {
        notFound()
    }

    return (
        <main className="min-h-screen">
            <PageHeader title={service.title} subtitle={service.description} breadcrumb={service.title} />
            <div className="md:px-20 px-4">
                <ServicePackages service={service} />
            </div>
            <ServicesCTA />
        </main>
    )
}
