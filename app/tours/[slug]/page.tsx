"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  CalendarDays,
  MapPin,
  Check,
  X,
  Clock,
  Share2,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  CreditCard,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { tours } from "@/lib/data"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PriceDisclaimer from "@/components/price-disclaimer"

export default function TourDetailsPage() {
  const { slug } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const tour = tours.find((t) => t.slug === slug)

  if (!tour) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Tour not found</h2>
          <p className="mb-6">The tour you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Button asChild>
            <Link href="/tours">Browse All Tours</Link>
          </Button>
        </div>
        <SiteFooter />
      </div>
    )
  }

  const images = [tour.image, ...tour.gallery]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Button variant="ghost" className="mb-4" asChild>
            <Link href="/tours">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Tours
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tour Images */}
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={tour.title}
                fill
                className="object-cover"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Tour Info */}
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {tour.category}
                </span>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={`${i < Math.floor(tour.rating) ? "opacity-100" : "opacity-30"}`}
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">({tour.reviews} reviews)</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-3">{tour.title}</h1>

              <div className="flex flex-wrap mb-4 gap-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{tour.duration}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{tour.description}</p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-green-600">${tour.price}</span>
                  <span className="text-gray-600 ml-2">per person</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{tour.priceInfo}</p>
                <p className="text-sm text-gray-800 mb-6">{tour.depositRequired}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Book Your Tour</DialogTitle>
                        <DialogDescription>
                          Complete your booking for {tour.title}. A 30% deposit is required.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="booking-name">Full Name</Label>
                          <Input id="booking-name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="booking-email">Email Address</Label>
                          <Input id="booking-email" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="booking-travelers">Number of Travelers</Label>
                            <Select defaultValue="1">
                              <SelectTrigger id="booking-travelers">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 Person</SelectItem>
                                <SelectItem value="2">2 People</SelectItem>
                                <SelectItem value="3">3 People</SelectItem>
                                <SelectItem value="4">4 People</SelectItem>
                                <SelectItem value="5">5+ People</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="booking-date">Preferred Date</Label>
                            <Input id="booking-date" type="date" />
                          </div>
                        </div>
                        <Separator />
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>Tour Price</span>
                            <span>${tour.price} per person</span>
                          </div>
                          <div className="flex justify-between font-semibold">
                            <span>Required Deposit (30%)</span>
                            <span>${(tour.price * 0.3).toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                          <p>Prices are subject to change based on season and availability.</p>
                        </div>
                      </div>
                      <DialogFooter>
                        <Link href="https://store.pesapal.com/edkasafarisandadventures" target="_blank">
                          <Button type="submit">Proceed to Payment</Button>
                        </Link>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Inquire
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Inquire About This Tour</DialogTitle>
                        <DialogDescription>
                          Have questions about {tour.title}? Send us a message and we&apos;ll get back to you shortly.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="inquiry-name">Full Name</Label>
                            <Input id="inquiry-name" placeholder="John Doe" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="inquiry-email">Email Address</Label>
                            <Input id="inquiry-email" type="email" placeholder="john@example.com" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="inquiry-message">Your Message</Label>
                          <Textarea
                            id="inquiry-message"
                            placeholder="I&apos;m interested in this tour and would like to know more about..."
                            rows={5}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Send Inquiry</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="mt-4">
                  <PriceDisclaimer />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="flex items-center text-gray-600 hover:text-gray-900" aria-label="Share this tour">
                  <Share2 className="h-4 w-4 mr-1" />
                  <span>Share</span>
                </button>

                <button className="text-green-600 hover:text-green-800 font-medium">Add to Wishlist</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Details Tabs */}
        <Tabs defaultValue="itinerary" className="mt-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
            <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
            <TabsTrigger value="map">Map</TabsTrigger>
          </TabsList>

          <TabsContent value="itinerary" className="mt-6">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>

              <Accordion type="single" collapsible className="w-full">
                {tour.itinerary.map((day, index) => (
                  <AccordionItem key={index} value={`day-${index + 1}`}>
                    <AccordionTrigger className="text-lg font-medium">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center bg-green-100 text-green-800 rounded-full w-10 h-10 mr-4">
                          {index + 1}
                        </div>
                        <div className="text-left">
                          <span className="block text-gray-500 text-sm">{day.day}</span>
                          <span>{day.title}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-14 text-gray-700">
                      <p>{day.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          <TabsContent value="highlights" className="mt-6">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Tour Highlights</h2>

              <ul className="space-y-4">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="inclusions" className="mt-6">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">What&apos;s Included & Excluded</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Inclusions</h3>
                  <ul className="space-y-3">
                    {tour.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Exclusions</h3>
                  <ul className="space-y-3">
                    {tour.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-red-100 text-red-800 rounded-full p-1 mr-3 mt-0.5">
                          <X className="h-4 w-4" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="map" className="mt-6">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Tour Location</h2>

              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600">Interactive map would be displayed here</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Location Details</h3>
                <p className="text-gray-700 mb-4">
                  This tour takes place in {tour.location}, Uganda. Known for its incredible biodiversity and stunning
                  landscapes, this location offers an unforgettable experience for nature lovers and adventure seekers.
                </p>

                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-2 text-green-600" />
                  <span>{tour.location}, Uganda</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Tours */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tours
              .filter((t) => t.id !== tour.id && t.category === tour.category)
              .slice(0, 3)
              .map((relatedTour) => (
                <div key={relatedTour.id} className="relative group">
                  <Link
                    href={`/tours/${relatedTour.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`View details for ${relatedTour.title}`}
                  />
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                    <div className="relative h-48">
                      <Image
                        src={relatedTour.image || "/placeholder.svg"}
                        alt={relatedTour.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{relatedTour.title}</h3>

                      <div className="flex items-center text-gray-500 text-sm mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{relatedTour.location}</span>
                      </div>

                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        <span>{relatedTour.duration}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">From</span>
                          <p className="text-green-600 font-bold">${relatedTour.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

