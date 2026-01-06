"use client"

import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { FaqIProps } from "@/lib/data-fetch"


export function FAQSection({ faqs }: { faqs: FaqIProps[] }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="md:py-16 py-4 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side */}
          <div
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <p className="text-primary font-medium tracking-wider uppercase mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Find answers to common questions about our travel services, visa processing, and booking procedures. Can't
              find what you're looking for? Contact us directly!
            </p>
            <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
              <p className="text-primary-foreground/80 mb-4">Our team is ready to help you with any queries.</p>
              <a
                href="https://wa.me/8801332846700"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:underline"
              >
                WhatsApp: +8801332-846700
              </a>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            )}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
