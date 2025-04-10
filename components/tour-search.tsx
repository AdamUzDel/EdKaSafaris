"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Search, Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { tourCategories } from "@/lib/data"

interface TourSearchProps {
  destinations: string[]
  className?: string
}

export default function TourSearch({ destinations, className = "" }: TourSearchProps) {
  const router = useRouter()
  const [destination, setDestination] = useState("")
  const [duration, setDuration] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

  // Parse duration and price ranges
  const getDurationRange = (value: string) => {
    switch (value) {
      case "1-3":
        return { min: 1, max: 3 }
      case "4-7":
        return { min: 4, max: 7 }
      case "8-14":
        return { min: 8, max: 14 }
      case "15+":
        return { min: 15, max: 30 }
      default:
        return { min: 0, max: 3 }
    }
  }

  const getPriceRange = (value: string) => {
    switch (value) {
      case "0-500":
        return { min: 0, max: 500 }
      case "500-1000":
        return { min: 500, max: 1000 }
      case "1000-2000":
        return { min: 1000, max: 2000 }
      case "2000+":
        return { min: 2000, max: 10000 }
      default:
        return { min: 0, max: 0 }
    }
  }

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()

    const durationRange = getDurationRange(duration)
    const priceRange = getPriceRange(price)

    let searchUrl = `/trip-search-result/?`

    // Add parameters only if they are selected
    if (destination && destination !== "any") {
      searchUrl += `destination=${destination}&`
    }

    if (duration) {
      searchUrl += `min-duration=${durationRange.min}&max-duration=${durationRange.max}&`
    }

    if (price) {
      searchUrl += `min-cost=${priceRange.min.toFixed(2)}&max-cost=${priceRange.max.toFixed(2)}&`
    }

    if (category && category !== "any") {
      searchUrl += `category=${category}&`
    }

    // Remove trailing & if present
    searchUrl = searchUrl.endsWith("&") ? searchUrl.slice(0, -1) : searchUrl

    router.push(searchUrl)
  }

  return (
    <div className={`w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 md:p-6 ${className}`}>
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="destination" className="text-xs text-gray-500 ml-1">
              Where would you like to go?
            </Label>
            <div className="relative">
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any destination</SelectItem>
                  {destinations.map((destination) => (
                    <SelectItem key={destination} value={destination.toLowerCase()}>
                      {destination}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration" className="text-xs text-gray-500 ml-1">
              How long is your trip?
            </Label>
            <div className="relative">
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any duration</SelectItem>
                  <SelectItem value="1-3">1-3 Days</SelectItem>
                  <SelectItem value="4-7">4-7 Days</SelectItem>
                  <SelectItem value="8-14">8-14 Days</SelectItem>
                  <SelectItem value="15+">15+ Days</SelectItem>
                </SelectContent>
              </Select>
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price" className="text-xs text-gray-500 ml-1">
              What&apos;s your budget?
            </Label>
            <div className="relative">
              <Select value={price} onValueChange={setPrice}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any price</SelectItem>
                  <SelectItem value="0-500">$0 - $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1000</SelectItem>
                  <SelectItem value="1000-2000">$1000 - $2000</SelectItem>
                  <SelectItem value="2000+">$2000+</SelectItem>
                </SelectContent>
              </Select>
              <DollarSign className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>

          <div className="flex items-end">
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white h-10">
              SEARCH
            </Button>
          </div>
        </div>

        {/* Category filter - Optional extra row */}
        <div className="mt-4">
          <Label htmlFor="category" className="text-xs text-gray-500 ml-1">
            Tour Category (Optional)
          </Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Any category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any category</SelectItem>
              {tourCategories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase()}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </form>
    </div>
  )
}

