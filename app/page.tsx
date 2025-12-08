import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PackagesSection } from "@/components/packages-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </main>
  )
}
