'use client';

import { useState, FormEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

export default function FaqAndContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log('Input changed:', name, value); // Debug log
    setFormData(prevData => {
      const newData = { ...prevData, [name]: value };
      console.log('New form data:', newData); // Debug log
      return newData;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData); // Debug log
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API call
      console.log('Form submission successful'); // Debug log
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Form submission error:', error); // Debug log
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="w-full py-32 bg-black">
      {/* Background Pattern */}
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Questions? Let's Talk
            </h2>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
              Find answers in our FAQ or reach out to discuss your project
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* FAQ Section - Left Side */}
          <div className="p-8 bg-neutral-900 rounded-lg">
            <div className="relative">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Frequently Asked Questions
              </h3>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1" className="border-neutral-800">
                <AccordionTrigger className="text-neutral-100 hover:text-neutral-200 transition-colors">
                  What services do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  We specialize in creating innovative digital solutions including custom web development,
                  mobile applications, UI/UX design, and cutting-edge technology integration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border-neutral-800">
                <AccordionTrigger className="text-neutral-100 hover:text-neutral-200 transition-colors">
                  How long does a typical project take?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  Our agile development process typically spans 4-12 weeks depending on project
                  scope. We provide detailed timelines during initial consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border-neutral-800">
                <AccordionTrigger className="text-neutral-100 hover:text-neutral-200 transition-colors">
                  What is your pricing structure?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  We offer transparent, value-based pricing tailored to your needs.
                  Each solution is customized to provide the best return on investment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border-neutral-800">
                <AccordionTrigger className="text-neutral-100 hover:text-neutral-200 transition-colors">
                  Do you provide ongoing support?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  Yes, we provide comprehensive post-launch support and maintenance
                  packages to ensure your solution evolves with your needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Form - Right Side */}
          <div className="p-8 bg-neutral-900 rounded-lg">
            <div className="relative">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Get in Touch
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-neutral-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all backdrop-blur-sm text-neutral-100 placeholder:text-neutral-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-neutral-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all backdrop-blur-sm text-neutral-100 placeholder:text-neutral-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-neutral-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all backdrop-blur-sm text-neutral-100 placeholder:text-neutral-500"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-neutral-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all backdrop-blur-sm text-neutral-100 placeholder:text-neutral-500 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg transition-all ${!isSubmitting && 'hover:scale-[1.02] hover:brightness-110'} ${isSubmitting && 'opacity-70 cursor-not-allowed'}`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 blur-lg group-hover:opacity-75 transition-opacity"></div>
                {/* Button text */}
                <span className="relative">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
