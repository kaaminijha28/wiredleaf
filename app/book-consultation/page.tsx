"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/supabase";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CalendarIcon, Clock, Building2, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const serviceTypes = [
  { id: "web_development", label: "Web Development", description: "Custom websites, web applications, and e-commerce solutions" },
  { id: "mobile_app", label: "Mobile App Development", description: "iOS and Android mobile applications" },
  { id: "ui_ux", label: "UI/UX Design", description: "User interface and experience design" },
  { id: "cloud_services", label: "Cloud Services", description: "Cloud infrastructure and deployment" },
  { id: "consulting", label: "Technical Consulting", description: "Expert advice and technical strategy" },
];

const teamSizeOptions = [
  { value: "1-5", label: "1-5 employees" },
  { value: "6-10", label: "6-10 employees" },
  { value: "11-25", label: "11-25 employees" },
  { value: "26-50", label: "26-50 employees" },
  { value: "51-100", label: "51-100 employees" },
  { value: "100+", label: "100+ employees" },
];

const budgetRanges = [
  { value: "5k-10k", label: "₹5,000 - ₹10,000" },
  { value: "10k-25k", label: "₹10,000 - ₹25,000" },
  { value: "25k-50k", label: "₹25,000 - ₹50,000" },
  { value: "50k-100k", label: "₹50,000 - ₹1,00,000" },
  { value: "100k+", label: "₹1,00,000+" },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().min(2, { message: "Please enter your company name." }),
  teamSize: z.string({ required_error: "Please select your team size" }),
  serviceType: z.string({ required_error: "Please select a service type" }),
  projectTitle: z.string().min(5, { message: "Project title must be at least 5 characters." }),
  projectDescription: z.string().min(50, { message: "Please provide a detailed project description (minimum 50 characters)" }),
  budgetRange: z.string({ required_error: "Please select your budget range" }),
  timeline: z.string().min(1, { message: "Please provide your expected timeline" }),
  technicalRequirements: z.string().optional(),
  existingTechnology: z.string().optional(),
  date: z.date({ required_error: "Please select a date for the consultation." }).nullable(),
  time: z.string({ required_error: "Please select a time slot." }),
  preferredMode: z.enum(["online", "in_person"], { required_error: "Please select your preferred mode" }),
  goals: z.string().min(30, { message: "Please describe your project goals (minimum 30 characters)" }),
  challenges: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export default function BookConsultation() {
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.user && !auth.loading) {
      router.replace("/auth/signin");
    }
  }, [auth.user, auth.loading, router]);

  if (auth.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 flex items-center justify-center">
        <div className="text-neutral-400">Loading...</div>
      </div>
    );
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: auth.user?.email || "",
      phone: "",
    company: "",
    teamSize: "",
    serviceType: "",
    projectTitle: "",
    projectDescription: "",
    budgetRange: "",
    timeline: "",
    technicalRequirements: "",
    existingTechnology: "",
    date: null,
    time: "",
    preferredMode: "online",
    goals: "",
    challenges: "",
    additionalNotes: "",
  },
});


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      if (!auth.user) throw new Error("You must be signed in to book a consultation");

      const { error } = await supabase.from("consultations").insert([
        {
          user_id: auth.user.id,
          status: "pending",
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: values.company,
          team_size: values.teamSize,
          service_type: values.serviceType,
          project_title: values.projectTitle,
          project_description: values.projectDescription,
          budget_range: values.budgetRange,
          timeline: values.timeline,
          technical_requirements: values.technicalRequirements,
          existing_technology: values.existingTechnology,
          consultation_date: values.date ? values.date.toISOString() : null,
          consultation_time: values.time,
          preferred_mode: values.preferredMode,
          project_goals: values.goals,
          challenges: values.challenges,
          additional_notes: values.additionalNotes,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      alert("Consultation scheduled successfully!");
      form.reset();
    } catch (error: any) {
      alert(error.message || "An error occurred while scheduling your consultation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-neutral-900 py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Book a Consultation
          </motion.h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Fill out the form below to schedule a consultation with our team.
          </p>
        </div>

        <Card className="p-8 bg-neutral-900/50 border-neutral-800">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name */}
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Email */}
              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Phone */}
              <FormField name="phone" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Company */}
              <FormField name="company" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Team Size */}
              <FormField name="teamSize" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Team Size</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-white">
                      <option value="">Select team size</option>
                      {teamSizeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Service Type */}
              <FormField name="serviceType" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Service Type</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-white">
                      <option value="">Select a service</option>
                      {serviceTypes.map((service) => (
                        <option key={service.id} value={service.label}>{service.label}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Project Title */}
              <FormField name="projectTitle" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Project Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Your project title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Project Description */}
              <FormField name="projectDescription" control={form.control} render={({ field }) => (
                <FormItem className="group">
                  <FormLabel className="text-white group-hover:text-purple-400 transition-colors">
                    <motion.span 
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-sm border border-purple-500/20">📝</span>
                      Project Description
                    </motion.span>
                  </FormLabel>
                  <FormControl>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Textarea 
                        placeholder="Tell us about your project vision, requirements, and what you'd like to achieve..." 
                        {...field}
                        className="min-h-[150px] bg-neutral-800/50 border-neutral-700 focus:border-purple-500 transition-all duration-300 hover:border-purple-500/50 placeholder-neutral-500 resize-none"
                      />
                    </motion.div>
                  </FormControl>
                  <FormDescription className="text-neutral-500 mt-2 text-sm">
                    🎯 Be specific about your goals and challenges to help us understand your needs better.
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )} />

              {/* Budget */}
              <FormField name="budgetRange" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Budget Range</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-white">
                      <option value="">Select budget</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget.value} value={budget.value}>{budget.label}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Timeline */}
              <FormField name="timeline" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Expected Timeline</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 2 months" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Technical Requirements */}
              <FormField name="technicalRequirements" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Technical Requirements</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any specific technical requirements..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Existing Technology */}
              <FormField name="existingTechnology" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Existing Technology</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List existing tools, platforms, or technology..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Date */}
              <FormField name="date" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Select Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !field.value && "text-neutral-400")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? format(field.value, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={field.value ?? undefined} onSelect={field.onChange} initialFocus />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Time */}
              <FormField name="time" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Select Time Slot</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-white">
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Preferred Mode */}
              <FormField name="preferredMode" control={form.control} render={({ field }) => (
                <FormItem className="group">
                  <FormLabel className="text-white group-hover:text-purple-400 transition-colors">
                    <motion.span 
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-sm border border-purple-500/20">🤝</span>
                      Meeting Mode
                    </motion.span>
                  </FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => field.onChange("online")}
                        className={`p-4 rounded-lg border ${
                          field.value === "online"
                            ? "bg-purple-500/20 border-purple-500"
                            : "bg-neutral-800/50 border-neutral-700 hover:border-purple-500/50"
                        } transition-all duration-300 text-center`}
                      >
                        <span className="text-2xl mb-2 block">💻</span>
                        <span className="text-sm font-medium text-white">Online Meeting</span>
                      </motion.button>
                      
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => field.onChange("in_person")}
                        className={`p-4 rounded-lg border ${
                          field.value === "in_person"
                            ? "bg-purple-500/20 border-purple-500"
                            : "bg-neutral-800/50 border-neutral-700 hover:border-purple-500/50"
                        } transition-all duration-300 text-center`}
                      >
                        <span className="text-2xl mb-2 block">🏢</span>
                        <span className="text-sm font-medium text-white">In-Person Meeting</span>
                      </motion.button>
                    </div>
                  </FormControl>
                  <FormDescription className="text-neutral-500 mt-2 text-sm text-center">
                    Choose your preferred mode of consultation
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )} />

              {/* Goals */}
              <FormField name="goals" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Project Goals</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe your project goals..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Challenges */}
              <FormField name="challenges" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Challenges</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Mention any challenges you foresee..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Additional Notes */}
              <FormField name="additionalNotes" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any other details..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Submitting..." : "Submit Consultation Request"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}

