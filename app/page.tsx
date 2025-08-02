import Hero1 from "../components/mvpblocks/hero-1"
import AboutSection from "@/components/about-section"
import ServiceSection from "@/components/service-section"
import ContactSection from "@/components/contact-section"
import { MouseTrailDemo } from "@/components/mouse-trail-demo" // Import MouseTrailDemo

export default function Page() {
  return (
    <div className="relative">
      <Hero1 />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <MouseTrailDemo /> {/* Add the MouseTrailDemo component here */}
    </div>
  )
}
