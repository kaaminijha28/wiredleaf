"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"

export default function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network delay
      console.log("Form submitted:", formData)
      toast({
        title: "Success!",
        description: "Your message has been sent.",
        variant: "default",
      })
      setFormData({ name: "", email: "", message: "" }) // Clear form
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg bg-neutral-900 border border-white/10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-white">Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-gray-300">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-neutral-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-neutral-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-gray-300">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="bg-neutral-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
