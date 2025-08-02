"use client";

import { cn } from "@/lib/utils";

const clients = [
  {
    name: "Microsoft",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 23 23" fill="currentColor">
        <path d="M0 0h11v11H0zm12 0h11v11H12zM0 12h11v11H0zm12 0h11v11H12z" />
      </svg>
    ),
  },
  {
    name: "Google",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.766 12.2764c0-.9175-.076-1.7976-.236-2.6542H12.24v4.9956h6.468c-.276 1.4976-1.12 2.7745-2.388 3.6255v3.0067h3.86c2.264-2.0852 3.586-5.1565 3.586-8.973z"
          fill="#4285F4"
        />
        <path
          d="M12.24 24c3.236 0 5.956-1.0745 7.94-2.9078l-3.86-3.0067c-1.072.7234-2.44 1.1533-4.08 1.1533-3.132 0-5.784-2.1234-6.732-4.9734H1.498v3.0988C3.482 21.2565 7.56 24 12.24 24z"
          fill="#34A853"
        />
        <path
          d="M5.508 14.2654c-.244-.7234-.384-1.4976-.384-2.2654s.14-1.542.384-2.2654V6.6358H1.498C.544 8.2868 0 10.1868 0 12.2c0 2.0133.544 3.9133 1.498 5.5642l4.01-3.0988z"
          fill="#FBBC05"
        />
        <path
          d="M12.24 4.9611c1.764 0 3.348.6066 4.596 1.7956l3.42-3.4177C18.212 1.2489 15.492 0 12.24 0 7.56 0 3.482 2.7435 1.498 6.6358l4.01 3.0988c.948-2.85 3.6-4.9735 6.732-4.9735z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
  {
    name: "Amazon",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.045 18.02c.072-.116.187-.124.348-.022..." />
      </svg>
    ),
  },
  {
    name: "Meta",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205..." />
      </svg>
    ),
  },
  {
    name: "Apple",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47..." />
      </svg>
    ),
  },
  {
    name: "IBM",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 2.25h21v2.25h-21z..." />
      </svg>
    ),
  },
  {
    name: "Intel",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 6.375v11.25h-1.5V6.375z..." />
      </svg>
    ),
  },
  {
    name: "Samsung",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.8 13.2c-.4 0-.8-.4-.8-.8s.4-.8..." />
      </svg>
    ),
  },
  {
    name: "Oracle",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 16.488c-1.085 0-2.04-.529-2.64-1.339..." />
      </svg>
    ),
  },
];

const allClients = [...clients, ...clients];

export default function TrustedClientsBanner() {
  return (
    <section className="w-full py-32 bg-black overflow-hidden">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 tracking-tight mb-6">
          Our Trusted Clients
        </h2>
        <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
          Join the ranks of industry leaders who trust our expertise. Schedule a consultation to discuss how we can help transform your business.
        </p>
        <a
          href="/book-consultation"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300 group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            Book a Consultation
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
        </a>
      </div>

      <div className="relative w-full">
        {/* Gradient Overlays */}
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* Scrolling Content */}
        <div className="relative flex overflow-hidden py-12">
          <div className="flex min-w-full animate-scroll-left whitespace-nowrap">
            {/* First set of clients */}
            <div className="flex items-center min-w-full px-24">
              <div className="flex items-center justify-between w-full">
                {clients.map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex items-center space-x-8 group mx-12"
                  >
                    <div className="w-28 h-28 rounded-xl bg-neutral-800/50 border-2 border-neutral-700/50 flex items-center justify-center text-neutral-400 group-hover:text-neutral-200 group-hover:border-neutral-600/50 transition-all duration-300 p-6">
                      {client.icon}
                    </div>
                    <span className="text-neutral-500 group-hover:text-neutral-300 text-2xl font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap min-w-[120px]">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second set of clients for seamless loop */}
            <div className="flex items-center min-w-full px-24">
              <div className="flex items-center justify-between w-full">
                {clients.map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex items-center space-x-8 group mx-12"
                  >
                    <div className="w-28 h-28 rounded-xl bg-neutral-800/50 border-2 border-neutral-700/50 flex items-center justify-center text-neutral-400 group-hover:text-neutral-200 group-hover:border-neutral-600/50 transition-all duration-300 p-6">
                      {client.icon}
                    </div>
                    <span className="text-neutral-500 group-hover:text-neutral-300 text-2xl font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap min-w-[120px]">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
