import { Tag, Mail, Compass } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  bgColor: string
  accentColor: string
  badge?: string
}

export default function FeatureCard({ title, description, icon, bgColor, accentColor, badge }: FeatureCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "tag":
        return <Tag className={`h-6 w-6 ${accentColor}`} />
      case "mail":
        return <Mail className={`h-6 w-6 ${accentColor}`} />
      case "compass":
        return <Compass className={`h-6 w-6 ${accentColor}`} />
      default:
        return <Tag className={`h-6 w-6 ${accentColor}`} />
    }
  }

  return (
    <div className={`rounded-lg p-6 ${bgColor} relative overflow-hidden group transition-all hover:shadow-md`}>
      {badge && (
        <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
          {badge}
        </div>
      )}

      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full bg-white mr-3">{renderIcon()}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      <p className="text-gray-700">{description}</p>

      <div className={`mt-4 flex items-center ${accentColor} font-medium cursor-pointer group-hover:underline`}>
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="ml-1 group-hover:translate-x-1 transition-transform"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          />
        </svg>
      </div>
    </div>
  )
}

