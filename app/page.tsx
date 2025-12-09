import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { ServicesWithFilter } from "@/components/services-with-filter"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <div className="md:mx-20 mx-1">
        <ServicesWithFilter />
      </div>
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
    </main>
  )
}
