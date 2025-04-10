import Link from "next/link"

import { tours, destinations } from "@/lib/data"
import TourSearch from "@/components/tour-search"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Star } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PriceDisclaimer from "@/components/price-disclaimer"

export default function ToursPage() {
  // Group tours by category
  const toursByCategory = tours.reduce(
    (acc, tour) => {
      if (!acc[tour.category]) {
        acc[tour.category] = []
      }
      acc[tour.category].push(tour)
      return acc
    },
    {} as Record<string, typeof tours>,
  )

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3">Discover Our Safari Tours</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience the beauty of Uganda with our carefully curated safari packages. From wildlife adventures to
            cultural experiences, we have something for every traveler.
          </p>
        </div>

        <div className="mb-12">
          <TourSearch destinations={destinations} />
        </div>

        <div className="mb-6">
          <PriceDisclaimer />
        </div>

        {Object.entries(toursByCategory).map(([category, categoryTours]) => (
          <div key={category} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{category}</h2>
              <Link href={`/trip-search-result/?category=${category.toLowerCase()}`}>
                <Button variant="link">View All {category}</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryTours.map((tour) => (
                <div key={tour.id} className="relative group">
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`View details for ${tour.title}`}
                  />
                  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                    <div className="relative h-48">
                      <img
                        src={tour.image || "/placeholder.svg"}
                        alt={tour.title}
                        className="h-full w-full object-cover"
                      />
                      {tour.price < 500 && (
                        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          BEST VALUE
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-center text-yellow-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4"
                            fill={i < Math.floor(tour.rating) ? "currentColor" : "none"}
                          />
                        ))}
                        <span className="text-gray-600 text-sm ml-1">({tour.reviews} reviews)</span>
                      </div>

                      <h3 className="font-bold text-lg mb-2">{tour.title}</h3>

                      <div className="flex items-center text-gray-500 text-sm mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{tour.location}</span>
                      </div>

                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{tour.duration}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">From</span>
                          <p className="text-green-600 font-bold">${tour.price}</p>
                        </div>

                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-green-50 rounded-lg p-8 mt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-gray-700 mb-6">
                We specialize in customized safari experiences. Let us know your preferences, and we'll create a
                personalized itinerary just for you.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us for Custom Tour</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden h-64 relative">
              <img
                src="/jinja-city-1-1024x683.webp?height=300&width=500"
                alt="Custom Safari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

