export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-neutral-950 py-20">
      {/* Background elements matching hero-1.tsx vibe */}
      <div className="absolute top-0 z-[0] h-full w-full bg-neutral-900/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-10 mx-auto max-w-full px-4 md:px-8">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="font-geist mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-5xl">
            Innovating for a{" "}
            <span className="bg-gradient-to-r from-purple-300 to-orange-200 bg-clip-text text-transparent">
              Brighter Future
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            We are a team of passionate individuals dedicated to delivering innovative solutions and exceptional
            experiences. Our mission is to empower businesses and individuals through cutting-edge technology and
            design.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-gray-400">
                To be a global leader in technology and design, creating impactful solutions that drive progress and
                inspire creativity across industries.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Our Values</h3>
              <p className="text-gray-400">
                Innovation, integrity, customer-centricity, and collaborative excellence are the pillars of our work,
                guiding every decision and interaction.
              </p>
            </div>
          </div>
          <img
            alt="Abstract technology background"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last border border-white/10 shadow-lg"
            height="310"
            src="/placeholder.svg?height=310&width=550"
            width="550"
          />
        </div>
      </div>
    </section>
  )
}
