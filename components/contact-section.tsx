"use client"

import ContactForm from "./contact-form"
// import Spline from "@splinetool/react-spline" // Import Spline

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-12 md:py-24 lg:py-32 bg-neutral-950 overflow-hidden">
      {/* Subtle background gradient matching hero-1.tsx vibe */}
      <div className="absolute top-0 z-[0] h-full w-full bg-neutral-900/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Crazy 3D Spline Effect in the background */}
      <div className="absolute inset-0 z-[0] opacity-50">
        {/* 
          The Spline scene URL provided previously was causing an error.
          Please replace "https://prod.spline.design/your-crazy-3d-scene-url/scene.splinecode"
          with a valid URL from your published Spline scene.
          
          If you don't have a Spline scene, you can remove the Spline component
          or consider using @react-three/fiber for custom 3D models.
        */}
        {/* <Spline scene="https://prod.spline.design/your-crazy-3d-scene-url/scene.splinecode" /> */}
      </div>

      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="font-geist mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-5xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-300 to-orange-200 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="mx-auto max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or want to work together? Send us a message! We'd love to hear from you.
            </p>
          </div>
        </div>
        {/* Contact form now takes full width and is centered */}
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
