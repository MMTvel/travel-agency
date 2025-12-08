"use client"

import { useInView } from "react-intersection-observer"
import { Plane, FileText, Hotel, Map, GraduationCap, Compass, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: FileText,
    title: "Visa Processing Assistance",
    description:
      "Expert guidance for all visa types including tourist, business, student, and work visas with a 99% approval rate.",
    features: ["Document preparation", "Application review", "Embassy appointment", "Interview coaching"],
    color: "from-blue-500 to-blue-600",
    popular: true,
  },
  {
    icon: Plane,
    title: "Air Ticket Booking",
    description:
      "Best deals on domestic and international flights with flexible booking options and 24/7 customer support.",
    features: ["Best price guarantee", "Flexible rebooking", "Multi-city options", "Last-minute deals"],
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: Map,
    title: "Tour Planning",
    description:
      "Customized travel itineraries designed to match your preferences, budget, and travel style perfectly.",
    features: ["Personalized itineraries", "Local experiences", "Group tours", "Private tours"],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Compass,
    title: "Umrah & Hajj Packages",
    description: "Spiritual journey packages with complete arrangements for a blessed pilgrimage experience.",
    features: ["5-star accommodations", "Guided tours", "Transport included", "Visa processing"],
    color: "from-emerald-500 to-emerald-600",
  }
]

export function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-12 md:py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-3 md:px-20">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-8 md:mb-16 transition-all duration-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm md:text-base mb-2 md:mb-4">
            Our Services
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6 text-balance">
            Comprehensive Travel Solutions
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg">
            From visa processing to complete tour packages, we handle every aspect of your travel needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "group p-5 md:p-8 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-pointer",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  "inline-flex p-3 md:p-4 rounded-lg md:rounded-xl mb-4 md:mb-6 transition-transform group-hover:scale-110",
                  service.color,
                )}
              >
                <service.icon className="h-5 w-5 md:h-7 md:w-7 text-card" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-3 md:mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm md:text-base font-medium group-hover:gap-4 transition-all">
                <span>Learn More</span>
                <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
