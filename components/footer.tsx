"use client"

import FlippingSocialLink from "./flipping-social-link"
import FlipLink from "./flip-link" // Import the new FlipLink component
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react" // Added new icons
// Removed: import Link from "next/link" // Link is now used inside FlipLink

export default function Footer() {
  return (
    <footer className="relative w-full bg-neutral-950 py-16 text-gray-300 border-t border-white/10 overflow-hidden">
      {/* Enhanced 3D Background Effect */}
      <div className="absolute inset-0 z-[0] bg-neutral-900/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 z-[0] opacity-40">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-75 animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-tr from-pink-500/30 to-purple-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-75 animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-bl from-blue-500/30 to-indigo-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-75 animate-float-slowest"></div>
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950/80"></div>

      <div className="relative z-10 mx-auto max-w-screen-xl px-4 md:px-8 flex flex-col items-center space-y-12">
        {/* Social Links Section */}
        <div className="flex flex-wrap justify-center gap-6">
          <FlippingSocialLink
            href="https://github.com/vercel" // Replace with your GitHub URL
            icon={Github}
            frontText="GitHub"
            backText="My GitHub"
          />
          <FlippingSocialLink
            href="https://linkedin.com/company/vercel" // Replace with your LinkedIn URL
            icon={Linkedin}
            frontText="LinkedIn"
            backText="My LinkedIn"
          />
          <FlippingSocialLink
            href="https://instagram.com/vercel" // Replace with your Instagram URL
            icon={Instagram}
            frontText="Instagram"
            backText="My Insta"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {/* About Us */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent">
              About Us
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are a passionate team dedicated to crafting innovative digital experiences. Our mission is to empower
              businesses with cutting-edge design and technology solutions.
            </p>
            {/* 3D Contact Icons */}
            <div className="flex flex-col space-y-4">
              <div className="group flex items-center space-x-3 transform transition-transform hover:translate-x-2">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg transform group-hover:scale-110 transition-transform"></div>
                  <Mail className="w-5 h-5 text-purple-300 relative z-10" />
                </div>
                <span className="text-gray-300 text-sm">contact@wiredleaf.com</span>
              </div>
              
              <div className="group flex items-center space-x-3 transform transition-transform hover:translate-x-2">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg transform group-hover:scale-110 transition-transform"></div>
                  <Phone className="w-5 h-5 text-blue-300 relative z-10" />
                </div>
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              
              <div className="group flex items-center space-x-3 transform transition-transform hover:translate-x-2">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg transform group-hover:scale-110 transition-transform"></div>
                  <MapPin className="w-5 h-5 text-pink-300 relative z-10" />
                </div>
                <span className="text-gray-300 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <FlipLink href="/#home">Home</FlipLink>
              </li>
              <li>
                <FlipLink href="/#about">About</FlipLink>
              </li>
              <li>
                <FlipLink href="/#service">Services</FlipLink>
              </li>
              <li>
                <FlipLink href="/#contact">Contact</FlipLink>
              </li>
              <li>
                <FlipLink href="#">Privacy Policy</FlipLink>
              </li>
              <li>
                <FlipLink href="#">Terms of Service</FlipLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center justify-center md:justify-start text-gray-400">
                <MapPin className="mr-2 h-4 w-4 text-purple-400" />
                123 Design St, Innovation City, CA 90210
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-400">
                <Phone className="mr-2 h-4 w-4 text-purple-400" />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center justify-center md:justify-start text-gray-400">
                <Mail className="mr-2 h-4 w-4 text-purple-400" />
                info@yourcompany.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-8 border-t border-white/5 pt-8 w-full">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
