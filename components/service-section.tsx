"use client"

import { useEffect } from 'react'
import { Code, LayoutDashboard, MousePointer2, Palette, Users, Zap } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "UI Kit Development",
    description: "Crafting custom UI component libraries tailored to your brand's unique identity.",
  },
  {
    icon: LayoutDashboard,
    title: "Design System Consulting",
    description: "Guiding you to build scalable, consistent, and efficient design systems from scratch.",
  },
  {
    icon: MousePointer2,
    title: "Prototyping & UX",
    description: "Designing intuitive user experiences and interactive prototypes that delight your users.",
  },
  {
    icon: Code,
    title: "Frontend Integration",
    description: "Seamlessly integrating design into your development workflow for a smooth handover.",
  },
  {
    icon: Users,
    title: "Design Workshops",
    description: "Empowering your team with the latest design tools, methodologies, and best practices.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Ensuring your designs are not just beautiful but also performant and load quickly.",
  },
]

export default function ServiceSection() {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const handleMouseMove = (e: any) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: any) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div id="service" className="relative w-full bg-neutral-950 py-20">
      {/* Background elements matching hero-1.tsx vibe */}
      <div className="absolute top-0 z-[0] h-full w-full bg-neutral-900/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="relative z-10 mx-auto max-w-full px-4 md:px-8">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="font-geist mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-5xl">
            Our Comprehensive{" "}
            <span className="bg-gradient-to-r from-purple-300 to-orange-200 bg-clip-text text-transparent">
              Design Solutions
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            We offer a suite of services tailored to elevate your design process and product development, ensuring
            excellence from concept to deployment.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card rounded-lg border border-white/10 bg-neutral-900/80 p-6 text-center shadow-lg transition-all duration-300"
              style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}
            >
              <service.icon className="mx-auto h-10 w-10 text-purple-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
