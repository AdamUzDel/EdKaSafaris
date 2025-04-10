import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function PriceDisclaimer() {
  return (
    <Alert className="bg-amber-50 border-amber-200">
      <AlertTriangle className="h-4 w-4 text-amber-600" />
      <AlertDescription className="text-amber-800 text-sm">
        <strong>Price Disclaimer:</strong> All prices are in USD and are subject to change based on season, group size,
        availability, and other factors. Please contact us for the most current pricing and to confirm availability for
        your desired travel dates.
      </AlertDescription>
    </Alert>
  )
}

