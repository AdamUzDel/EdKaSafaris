"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, SendIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
    tourInterest: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)

    // Show success message
    toast(
       "Message Sent!",
      {description: "Thank you for contacting us. We&apos;ll get back to you shortly.",
    })

    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "general",
      tourInterest: "",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our safari tours or need help planning your trip? Get in touch with our team and we&apos;ll
            be happy to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center bg-green-100 text-green-600 p-3 rounded-full mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
            <a href="tel:+256752195226" className="text-green-600 font-medium hover:underline">
              +256-752195226
            </a>
            <br />
            <a href="tel:+256700611865" className="text-green-600 font-medium hover:underline">
              +256-700611865
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center bg-green-100 text-green-600 p-3 rounded-full mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Send us an email anytime</p>
            <a href="mailto:info@edkasafaris.com" className="text-green-600 font-medium hover:underline">
              info@edkasafaris.com
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center bg-green-100 text-green-600 p-3 rounded-full mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Office Location</h3>
            <p className="text-gray-600 mb-4">Visit our office in Kampala</p>
            <address className="not-italic text-green-600">Kampala, Uganda</address>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name*</Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>What type of inquiry is this?</Label>
                <RadioGroup
                  defaultValue="general"
                  onValueChange={(val) => setFormState((prev) => ({ ...prev, inquiryType: val }))}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="inquiry-general" />
                    <Label htmlFor="inquiry-general">General Inquiry</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="booking" id="inquiry-booking" />
                    <Label htmlFor="inquiry-booking">Booking Information</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="inquiry-custom" />
                    <Label htmlFor="inquiry-custom">Custom Tour Request</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tour-interest">Interested in a specific tour?</Label>
                <Select onValueChange={(val) => setFormState((prev) => ({ ...prev, tourInterest: val }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a tour (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gorilla-trekking">Gorilla Trekking</SelectItem>
                    <SelectItem value="murchison-falls">Murchison Falls</SelectItem>
                    <SelectItem value="queen-elizabeth">Queen Elizabeth National Park</SelectItem>
                    <SelectItem value="kibale-forest">Kibale Forest</SelectItem>
                    <SelectItem value="kidepo-valley">Kidepo Valley</SelectItem>
                    <SelectItem value="lake-mburo">Lake Mburo</SelectItem>
                    <SelectItem value="kampala-tour">Kampala City Tour</SelectItem>
                    <SelectItem value="jinja-adventure">Jinja Adventure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject*</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message*</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Please let us know your questions or requirements..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                <SendIcon className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How do I book a safari?</h3>
                <p className="text-gray-700">
                  You can book a safari through our website by selecting your preferred tour and clicking the &quot;Book Now&quot;
                  button. Alternatively, you can contact us directly via phone or email to make a reservation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What&apos;s the best time to visit Uganda for safaris?</h3>
                <p className="text-gray-700">
                  Uganda can be visited year-round, but the dry seasons (December to February and June to August) are
                  generally considered the best times for wildlife viewing and gorilla trekking.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Do I need a visa to visit Uganda?</h3>
                <p className="text-gray-700">
                  Yes, most visitors need a visa to enter Uganda. You can apply for an e-visa online through the
                  official immigration website before your trip.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">What vaccinations do I need for Uganda?</h3>
                <p className="text-gray-700">
                  Yellow fever vaccination is mandatory for all travelers to Uganda. Other recommended vaccinations
                  include hepatitis A and B, typhoid, and routine vaccines. Consult with a travel health professional
                  before your trip.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Can I customize a tour package?</h3>
                <p className="text-gray-700">
                  We specialize in creating custom safari experiences. Contact us with your preferences, and we&apos;ll
                  design a personalized itinerary for you.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold mb-2">Need More Information?</h3>
                <p className="text-gray-700 mb-4">
                  If you have any other questions or need further assistance, don&apos;t hesitate to reach out to our team.
                  We&apos;re here to help make your Uganda safari adventure unforgettable.
                </p>
                <Button variant="outline" asChild>
                  <a href="tel:+256752195226">Call Us Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toaster />

      <SiteFooter />
    </div>
  )
}

