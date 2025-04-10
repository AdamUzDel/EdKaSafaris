"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ChevronDown, Filter } from "lucide-react"
import Link from "next/link"
import { tours } from "@/lib/data"
import TourSearch from "@/components/tour-search"
import { destinations } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { tourCategories } from "@/lib/data"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PriceDisclaimer from "@/components/price-disclaimer"
import Image from "next/image"

export default function TripSearchResults() {
  const searchParams = useSearchParams()
  const [filteredTours, setFilteredTours] = useState(tours)
  const [sortBy, setSortBy] = useState("recommended")

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedDurations, setSelectedDurations] = useState<string[]>([])
  const [priceRange] = useState<[number, number]>([0, 5000])

  useEffect(() => {
    const destination = searchParams.get("destination") || ""
    const minDuration = Number.parseInt(searchParams.get("min-duration") || "0")
    const maxDuration = Number.parseInt(searchParams.get("max-duration") || "100")
    const minCost = Number.parseFloat(searchParams.get("min-cost") || "0")
    const maxCost = Number.parseFloat(searchParams.get("max-cost") || "10000")
    const category = searchParams.get("category") || ""

    let filtered = [...tours]

    // Filter by destination
    if (destination && destination !== "any") {
      filtered = filtered.filter((tour) => tour.location.toLowerCase().includes(destination.toLowerCase()))
    }

    // Filter by category from URL
    if (category && category !== "any") {
      filtered = filtered.filter((tour) => tour.category.toLowerCase().includes(category.toLowerCase()))
    }

    // Filter by duration (approximate based on days in the duration string)
    filtered = filtered.filter((tour) => {
      const durationDays = Number.parseInt(tour.duration.split(" ")[0])
      return durationDays >= minDuration && durationDays <= maxDuration
    })

    // Filter by price
    filtered = filtered.filter((tour) => tour.price >= minCost && tour.price <= maxCost)

    // Apply additional filters from the filter sidebar
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((tour) => selectedCategories.includes(tour.category))
    }

    if (selectedDurations.length > 0) {
      filtered = filtered.filter((tour) => {
        const durationDays = Number.parseInt(tour.duration.split(" ")[0])
        return selectedDurations.some((range) => {
          if (range === "1-3") return durationDays >= 1 && durationDays <= 3
          if (range === "4-7") return durationDays >= 4 && durationDays <= 7
          if (range === "8+") return durationDays >= 8
          return false
        })
      })
    }

    // Sort the results
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    setFilteredTours(filtered)
  }, [searchParams, selectedCategories, selectedDurations, priceRange, sortBy])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleDurationChange = (duration: string) => {
    setSelectedDurations((prev) => (prev.includes(duration) ? prev.filter((d) => d !== duration) : [...prev, duration]))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Safari Tour Search Results</h1>

        <div className="mb-8">
          <TourSearch destinations={destinations} />
        </div>

        <div className="mb-6">
          <PriceDisclaimer />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-bold text-lg mb-4">Filters</h2>

              <Accordion type="single" collapsible defaultValue="category">
                <AccordionItem value="category">
                  <AccordionTrigger>Tour Category</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {tourCategories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <Label htmlFor={`category-${category}`}>{category}</Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="duration">
                  <AccordionTrigger>Duration</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="duration-1-3"
                          checked={selectedDurations.includes("1-3")}
                          onCheckedChange={() => handleDurationChange("1-3")}
                        />
                        <Label htmlFor="duration-1-3">1-3 Days</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="duration-4-7"
                          checked={selectedDurations.includes("4-7")}
                          onCheckedChange={() => handleDurationChange("4-7")}
                        />
                        <Label htmlFor="duration-4-7">4-7 Days</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="duration-8+"
                          checked={selectedDurations.includes("8+")}
                          onCheckedChange={() => handleDurationChange("8+")}
                        />
                        <Label htmlFor="duration-8+">8+ Days</Label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Mobile Filters */}
          <div className="lg:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Filter className="w-4 h-4 mr-2" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <Accordion type="single" collapsible defaultValue="category">
                    <AccordionItem value="category">
                      <AccordionTrigger>Tour Category</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {tourCategories.map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox
                                id={`mobile-category-${category}`}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={() => handleCategoryChange(category)}
                              />
                              <Label htmlFor={`mobile-category-${category}`}>{category}</Label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="duration">
                      <AccordionTrigger>Duration</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-duration-1-3"
                              checked={selectedDurations.includes("1-3")}
                              onCheckedChange={() => handleDurationChange("1-3")}
                            />
                            <Label htmlFor="mobile-duration-1-3">1-3 Days</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-duration-4-7"
                              checked={selectedDurations.includes("4-7")}
                              onCheckedChange={() => handleDurationChange("4-7")}
                            />
                            <Label htmlFor="mobile-duration-4-7">4-7 Days</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-duration-8+"
                              checked={selectedDurations.includes("8+")}
                              onCheckedChange={() => handleDurationChange("8+")}
                            />
                            <Label htmlFor="mobile-duration-8+">8+ Days</Label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredTours.length} tours found</p>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border rounded-md py-2 pl-3 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>

            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTours.map((tour) => (
                  <div key={tour.id} className="relative group">
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="absolute inset-0 z-10"
                      aria-label={`View details for ${tour.title}`}
                    />
                    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                      <div className="relative h-48">
                        <Image
                          fill
                          src={tour.image || "/placeholder.svg"}
                          alt={tour.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-yellow-500 text-xs font-bold px-2 py-1 rounded text-gray-900">
                          {tour.category}
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center text-yellow-400 mb-2">
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
                          <span className="text-gray-600 text-sm ml-1">({tour.reviews} reviews)</span>
                        </div>

                        <h3 className="font-bold text-lg mb-2">{tour.title}</h3>

                        <div className="flex items-center text-gray-500 text-sm mb-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                          </svg>
                          <span>{tour.location}</span>
                        </div>

                        <div className="flex items-center text-gray-500 text-sm mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                          </svg>
                          <span>{tour.duration}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">From</span>
                            <p className="text-green-600 font-bold">${tour.price}</p>
                          </div>

                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/tours/${tour.slug}`}>View Details</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">No tours found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search filters or explore our featured tours below.
                </p>
                <Button asChild>
                  <Link href="/tours">View All Tours</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}

