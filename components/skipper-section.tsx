'use client';

import { Skipper } from "@/components/ui/skipper";

export default function SkipperSection() {
  const steps = [
    {
      title: "Welcome to Our Service",
      content: (
        <div>
          <p>Discover how we can help transform your ideas into reality.</p>
          <ul className="list-disc pl-4 mt-2">
            <li>Professional expertise</li>
            <li>Innovative solutions</li>
            <li>Dedicated support</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Our Process",
      content: (
        <div>
          <p>We follow a simple but effective process:</p>
          <ol className="list-decimal pl-4 mt-2">
            <li>Initial consultation</li>
            <li>Project planning</li>
            <li>Development phase</li>
            <li>Testing and refinement</li>
            <li>Launch and support</li>
          </ol>
        </div>
      ),
    },
    {
      title: "Get Started",
      content: (
        <div>
          <p>Ready to begin your journey with us?</p>
          <p className="mt-2">Contact our team today and let's discuss how we can help you achieve your goals.</p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <Skipper 
          steps={steps}
          onComplete={() => {
            console.log("All steps completed!");
          }}
        />
      </div>
    </section>
  );
}
