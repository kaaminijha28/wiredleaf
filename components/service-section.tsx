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
  return (
    <div id="service" className="relative w-full bg-neutral-950 py-20">
      {" "}
      {/* Added id="service" */}
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
              className="rounded-lg border border-white/10 bg-neutral-900 p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105"
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
