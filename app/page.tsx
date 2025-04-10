import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import TourCard from "@/components/tour-card"
import FeatureCard from "@/components/feature-card"
import { destinations, featuredTours } from "@/lib/data"
import TourSearch from "@/components/tour-search"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PriceDisclaimer from "@/components/price-disclaimer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/xdsdchtfzhi.jpg?height=600&width=1200"
              alt="Safari landscape with giraffes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <p className="text-xl md:text-2xl font-light mb-2">Find Your Dream Tour</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Where Would You Like <br />
              <span className="inline-block">
                To <span className="text-yellow-400">Go?</span>
              </span>
            </h2>

            <TourSearch destinations={destinations} />
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Special Offers"
              description="Find Your Perfect Holiday deals. Get the best prices on amazing gorilla, city and park safari tours."
              icon="tag"
              bgColor="bg-gradient-to-br from-green-50 to-green-100"
              accentColor="text-green-600"
              badge="HOLIDAY SALE"
            />

            <FeatureCard
              title="Newsletters"
              description="Join for free and get our tailored newsletters full of hot travel deals."
              icon="mail"
              bgColor="bg-gradient-to-br from-blue-50 to-blue-100"
              accentColor="text-blue-600"
            />

            <FeatureCard
              title="Travel Tips"
              description="Tips from our travel experts to make your next trip even better."
              icon="compass"
              bgColor="bg-gradient-to-br from-yellow-50 to-yellow-100"
              accentColor="text-yellow-600"
            />
          </div>
        </section>

        {/* Popular Tours */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Safari Tours</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our most popular safari experiences across East Africa. From gorilla trekking to wildlife
                safaris, we have the perfect adventure waiting for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTours.map((tour, index) => (
                <TourCard
                  key={index}
                  title={tour.title}
                  location={tour.location}
                  duration={tour.duration}
                  price={`$${tour.price.replace("UGX", "")}`}
                  image={tour.image}
                  rating={tour.rating}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="group" asChild>
                <Link href="/tours">
                  View All Tours
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="mt-8">
              <PriceDisclaimer />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Read testimonials from our satisfied customers who have experienced the magic of East African safaris
                with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                &quot;Our gorilla trekking experience was absolutely incredible. The guides were knowledgeable and the
                  entire trip was well organized. Will definitely book with Edka Safaris again!&quot;
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                &quot;The 7-day safari through Queen Elizabeth National Park exceeded all our expectations. We saw so many
                  animals and our guide was exceptional. Highly recommend!&quot;
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-medium">Michael Chen</h4>
                    <p className="text-sm text-gray-500">Canada</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                &quot;From booking to the actual tour, everything was seamless. The accommodations were comfortable and the
                  wildlife viewing opportunities were amazing. Thank you Edka Safaris!&quot;
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <h4 className="font-medium">David & Lisa Miller</h4>
                    <p className="text-sm text-gray-500">United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-4 bg-green-700 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">Stay updated with our latest offers, travel tips, and exclusive deals.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input type="email" placeholder="Your email address" className="bg-white text-gray-800 border-0" />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

