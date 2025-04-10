import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TourCardProps {
  title: string
  location: string
  duration: string
  price: string
  image: string
  rating: number
}

export default function TourCard({ title, location, duration, price, image, rating }: TourCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-yellow-500 text-xs font-bold px-2 py-1 rounded text-gray-900">
          FEATURED
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" fill={i < rating ? "currentColor" : "none"} />
          ))}
          <span className="text-gray-600 text-sm ml-1">({Math.floor(Math.random() * 50) + 10} reviews)</span>
        </div>

        <h3 className="font-bold text-lg mb-2">{title}</h3>

        <div className="flex items-center text-gray-500 text-sm mb-1">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{duration}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">From</span>
            <p className="text-green-600 font-bold">{price}</p>
          </div>

          <Button variant="outline" size="sm" asChild>
            <Link href="#">View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

