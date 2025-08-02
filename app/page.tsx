import Hero1 from "../components/mvpblocks/hero-1"
import AboutSection from "@/components/about-section"
import ServiceSection from "@/components/service-section"
import FaqAndContactSection from "@/components/faq-and-contact-section"
import ScrollingTextBanner from "@/components/scrolling-text-banner"

export default function Page() {
  return (
    <div className="relative">
      <Hero1 />
      <AboutSection />
      <ServiceSection />
      <ScrollingTextBanner />
      <FaqAndContactSection />
    </div>
  )
}
