'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CollapsibleSections() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* FAQ Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>How do I get started?</AccordionTrigger>
            <AccordionContent>
              Getting started is easy! Simply sign up for an account and follow our
              quick setup guide. We'll walk you through each step of the process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards, PayPal, and bank transfers. All
              payments are processed securely through our payment gateway.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>How can I contact support?</AccordionTrigger>
            <AccordionContent>
              Our support team is available 24/7. You can reach us through email,
              live chat, or our dedicated support hotline.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Navigation Menu */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="electronics">
            <AccordionTrigger>Electronics</AccordionTrigger>
            <AccordionContent>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="hover:underline">Smartphones</a>
                <a href="#" className="hover:underline">Laptops</a>
                <a href="#" className="hover:underline">Accessories</a>
                <a href="#" className="hover:underline">Smart Home</a>
              </nav>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="clothing">
            <AccordionTrigger>Clothing</AccordionTrigger>
            <AccordionContent>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="hover:underline">Men's Wear</a>
                <a href="#" className="hover:underline">Women's Wear</a>
                <a href="#" className="hover:underline">Kids</a>
                <a href="#" className="hover:underline">Accessories</a>
              </nav>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Settings Panel */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="profile">
            <AccordionTrigger>Profile Settings</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Display Name</label>
                  <input type="text" className="border rounded p-2" placeholder="Your name" />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="border rounded p-2" placeholder="your@email.com" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="notifications">
            <AccordionTrigger>Notification Preferences</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Email notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span>Push notifications</span>
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Detail View */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="basic-info">
            <AccordionTrigger>Basic Information</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p><strong>Name:</strong> Premium Widget Pro</p>
                <p><strong>Price:</strong> $99.99</p>
                <p><strong>Availability:</strong> In Stock</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="specifications">
            <AccordionTrigger>Technical Specifications</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p><strong>Dimensions:</strong> 10" x 5" x 2"</p>
                <p><strong>Weight:</strong> 250g</p>
                <p><strong>Material:</strong> Aircraft-grade aluminum</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping">
            <AccordionTrigger>Shipping Information</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p><strong>Processing Time:</strong> 1-2 business days</p>
                <p><strong>Shipping Method:</strong> Express Delivery</p>
                <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
