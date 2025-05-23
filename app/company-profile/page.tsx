import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PriceDisclaimer from "@/components/price-disclaimer"

export default function CompanyProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-green-700 text-white">
          <div className="absolute inset-0 opacity-20">
            <Image src="/placeholder.svg?height=600&width=1200" alt="Safari landscape" fill className="object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Edka Safaris & Adventures</h1>
            <p className="text-xl max-w-3xl mx-auto">Company Profile</p>
          </div>
        </section>

        {/* Company Summary */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Company Summary</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Edka Safaris & Adventures is a fully established and legally registered company operating safari tours,
                car rentals, and travel services throughout East Africa. We specialize in creating unforgettable safari
                experiences that showcase the natural beauty and cultural richness of Uganda and neighboring countries.
              </p>

              <p className="text-gray-700 mb-6">
                Our driving force is the passion to provide efficient and personalized customer care service to all
                those who engage with us. We always strive to exceed our customers' expectations by keeping our promises
                and assuring them of our trust at all times.
              </p>

              <p className="text-gray-700 mb-6">
                Our service delivery is pegged on quality, value, and reliability. Our growth pattern can be traced
                largely to references and word of mouth from clients who have enjoyed a satisfying and fulfilling
                experience with us.
              </p>

              <p className="text-gray-700">
                Founded locally, the Edka Safaris team guarantees you an unrivalled African travel experience. &quot;We want
                to offer our clients an unforgettable adventure into Africa.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Mission</h3>
                <p className="text-gray-700 mb-4">
                  Achieving people&apos;s and companies&apos; dreams as we help them travel smart, with the aim to exceed their
                  expectations for service, quality, and value.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      We strive to earn our customers&apos; loyalty by working to deliver more than promised, being honest
                      and fair, and &quot;going the extra mile&quot; to provide exceptional personalized service.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      We treat employees and customers like family and never compromise our commitment to superior
                      customer service.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Vision</h3>
                <p className="text-gray-700 mb-4">
                  Our vision is to be the premier and preferred safari company in East Africa and to offer service
                  beyond customer satisfaction and demand.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      We want to help our clients maximize their travel experience and increase their appreciation of
                      Africa&apos;s natural beauty by providing exceptional service and unforgettable experiences.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      We aim to be recognized as the most reliable, professional, and customer-focused safari operator
                      in East Africa.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Integrity:</strong> We insist on open, honest, and fair relationships with our customers,
                      each other, and business partners.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Excellence:</strong> We strive for excellence in every aspect of our service, from
                      planning to execution.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Sustainability:</strong> We are committed to environmentally responsible tourism that
                      preserves East Africa&apos;s natural beauty.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Community:</strong> We believe in giving back to the communities we visit and supporting
                      local development.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Proactive Team</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our experienced team of guides, travel experts, and support staff are dedicated to making your safari
                experience unforgettable.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "John Doe",
                  title: "Founder & CEO",
                  bio: "John is the light of Edka Safaris. He motivates, manages, and teaches the team into desired personal and business growth. A travel enthusiast himself, he makes sure we serve you beyond your expectations.",
                },
                {
                  name: "Jane Smith",
                  title: "Tour Consultant",
                  bio: "Jane traveled Uganda and fell in love with its beautiful nature. She is our trusted tour consultant that'll make sure your trip planning does not take a toll on your ability to travel.",
                },
                {
                  name: "Michael Johnson",
                  title: "Safari Guide",
                  bio: "Very enthusiastic and passionate about tourism, Michael has extensive knowledge in traversing Uganda's nature hot spots. He's an excellent guide who ensures you receive the right information during your trips.",
                },
                {
                  name: "Sarah Williams",
                  title: "Operations Manager",
                  bio: "The engine of Edka Safari trips is Sarah. Once you're in the country for your planned trip, Sarah will make sure your experience goes beyond your expectations to give you stories that will be told for years to come.",
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-64 relative">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=${member.name}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-green-600 text-sm mb-3">{member.title}</p>
                    <p className="text-gray-700 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Edka Safaris?</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Today we have so much choice when it comes to traveling in Uganda or East Africa; it&apos;s often a little
                mind-numbing to make a decision which part of the country to travel, let alone with whom to travel. Edka
                Safaris makes the choice easy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Local Expertise</h3>
                <p className="text-gray-700 mb-4">
                  Our guides are local experts with intimate knowledge of the terrain, wildlife, and culture. They know
                  the best spots for wildlife viewing and can provide rich cultural context.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Experienced guides who know the best wildlife viewing spots</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Deep understanding of local cultures and traditions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Insider knowledge of hidden gems off the tourist path</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Customized Experiences</h3>
                <p className="text-gray-700 mb-4">
                  We tailor each safari to our clients&apos; interests, preferences, and budget. Whether you&apos;re interested in
                  wildlife photography, bird watching, or cultural experiences, we create an itinerary just for you.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personalized itineraries based on your interests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Flexible scheduling to accommodate your needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Options for all budgets without compromising quality</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Quality Accommodations</h3>
                <p className="text-gray-700 mb-4">
                  We partner with the best lodges and camps that offer comfort, excellent service, and authentic
                  experiences without compromising on sustainability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Carefully selected accommodations for comfort and authenticity</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Options ranging from luxury lodges to authentic tented camps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Eco-friendly properties that support conservation efforts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Responsible Tourism</h3>
                <p className="text-gray-700 mb-4">
                  We are committed to ethical wildlife viewing practices and supporting conservation efforts. We believe
                  that tourism should benefit both visitors and the destinations they explore.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Support for local conservation initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ethical wildlife viewing practices that prioritize animal welfare</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Community involvement and support for local economies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of safari and travel services to ensure your East African adventure is
                seamless, memorable, and tailored to your preferences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Gorilla Trekking Safaris",
                  description:
                    "Experience the thrill of encountering mountain gorillas in their natural habitat in Bwindi Impenetrable Forest.",
                  icon: "🦍",
                },
                {
                  title: "Wildlife Safaris",
                  description:
                    "Explore Uganda's diverse national parks and witness incredible wildlife including lions, elephants, giraffes, and more.",
                  icon: "🦁",
                },
                {
                  title: "Bird Watching Tours",
                  description:
                    "Uganda is a bird watcher's paradise with over 1,000 species. Our specialized tours cater to both beginners and experienced birders.",
                  icon: "🦜",
                },
                {
                  title: "Cultural Experiences",
                  description:
                    "Immerse yourself in the rich cultural heritage of Uganda through village visits, traditional performances, and local interactions.",
                  icon: "🏺",
                },
                {
                  title: "Adventure Activities",
                  description:
                    "From white water rafting on the Nile to hiking in the Rwenzori Mountains, we offer thrilling adventures for the active traveler.",
                  icon: "🚣",
                },
                {
                  title: "Car Rental Services",
                  description:
                    "Our fleet of well-maintained vehicles is available for hire, with or without experienced drivers, to explore Uganda at your own pace.",
                  icon: "🚙",
                },
                {
                  title: "Accommodation Booking",
                  description:
                    "We partner with the best lodges, hotels, and camps across Uganda to ensure comfortable and memorable stays.",
                  icon: "🏨",
                },
                {
                  title: "Airport Transfers",
                  description:
                    "Seamless pickup and drop-off services at Entebbe International Airport and other locations across Uganda.",
                  icon: "✈️",
                },
                {
                  title: "Custom Tour Packages",
                  description:
                    "We specialize in creating bespoke itineraries tailored to your specific interests, timeframe, and budget.",
                  icon: "📝",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Fleet */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Fleet</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Edka Safaris offers the best deals on wheels in Uganda. With years of experience in the transportation
                service industry, we pride ourselves in offering reliable, mechanically sound vehicles for hire.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  type: "Safari Land Cruisers",
                  description:
                    "Our Toyota Land Cruisers are specially modified for safari with pop-up roofs for optimal game viewing. Perfect for off-road adventures in national parks.",
                  capacity: "4-6 passengers",
                  image: "/placeholder.svg?height=300&width=400&text=Land+Cruiser",
                },
                {
                  type: "Safari Vans",
                  description:
                    "Comfortable and spacious vans with pop-up roofs, perfect for families and small groups. Ideal for both wildlife viewing and transfers between destinations.",
                  capacity: "7-8 passengers",
                  image: "/placeholder.svg?height=300&width=400&text=Safari+Van",
                },
                {
                  type: "Minibuses",
                  description:
                    "Spacious and comfortable minibuses for larger groups. Perfect for transfers and tours with extended road travel.",
                  capacity: "10-14 passengers",
                  image: "/placeholder.svg?height=300&width=400&text=Minibus",
                },
                {
                  type: "Sedan Cars",
                  description:
                    "Comfortable sedan cars for urban travel and airport transfers. Ideal for business travelers or couples exploring urban areas.",
                  capacity: "1-4 passengers",
                  image: "/placeholder.svg?height=300&width=400&text=Sedan",
                },
                {
                  type: "4x4 SUVs",
                  description:
                    "Versatile SUVs that combine comfort with off-road capability. Great for self-drive adventures or guided tours.",
                  capacity: "4-5 passengers",
                  image: "/placeholder.svg?height=300&width=400&text=SUV",
                },
                {
                  type: "Luxury Vehicles",
                  description:
                    "Premium vehicles for discerning travelers who want to explore Uganda in style and comfort.",
                  capacity: "2-4 passengers",
                  image: "/placeholder.svg?height=300&width=400&text=Luxury+Vehicle",
                },
              ].map((vehicle, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 relative">
                    <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.type} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-green-700 mb-2">{vehicle.type}</h3>
                    <p className="text-gray-600 text-sm mb-3">Capacity: {vehicle.capacity}</p>
                    <p className="text-gray-700">{vehicle.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-4">Notable Strengths</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Staff</h4>
                  <p className="text-gray-700 mb-4">
                    We have friendly, knowledgeable, and efficient staff that are ready to help you reserve your
                    preferred vehicle.
                  </p>

                  <h4 className="font-bold mb-2">Reliability</h4>
                  <p className="text-gray-700">
                    Our vehicles are available 24 hours a day, 7 days a week and can be picked up at our offices or your
                    preferred drop site in Kampala and other locations in major towns in Uganda.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Fleet</h4>
                  <p className="text-gray-700 mb-4">
                    We have a good fleet of new and well-maintained vehicles for hire at affordable rates, from sedans
                    to 4X4 land cruisers and minivans to minibuses.
                  </p>

                  <h4 className="font-bold mb-2">Drivers</h4>
                  <p className="text-gray-700">
                    We have well-trained and fully licensed drivers with vast Ugandan road experience and excellent 4x4
                    driving skills for off-road capabilities including game parks. Many of our drivers are also
                    knowledgeable guides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Uganda - The Pearl of Africa */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Uganda - The Pearl of Africa</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From the moment you land at Entebbe&apos;s modern and efficient airport, with its breathtaking equatorial
                location on the forested shore of island-strewn Lake Victoria, it is clear that Uganda is no ordinary
                safari destination.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">An Elegant Adventure</h3>
                <p className="text-gray-700 mb-4">
                  Dominated by an expansive golf course leading down to the lakeshore, and a century-old botanical
                  garden alive with the chatter of acrobatic monkeys and colorful tropical birds, Entebbe itself is the
                  least obviously urban of all comparably sized African towns.
                </p>
                <p className="text-gray-700 mb-4">
                  Just 40km distant, sprawled across seven hills, there is the capital Kampala. The bright modern feel
                  of this bustling, cosmopolitan city reflects the ongoing economic growth and political stability that
                  has characterized Uganda since 1986.
                </p>
                <p className="text-gray-700">
                  Ecologically, Uganda is where the East African savannah meets the West African jungle. Where else but
                  in this impossibly lush country can one observe lions prowling the open plains in the morning and
                  track chimpanzees through the rainforest undergrowth the same afternoon?
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Uganda+Landscape"
                  alt="Uganda Landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Uganda+Wildlife"
                  alt="Uganda Wildlife"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Incredible Biodiversity</h3>
                <p className="text-gray-700 mb-4">
                  Uganda&apos;s status as by far the smallest of four African countries whose bird checklist tops the 1,000
                  mark attests to its incredible biodiversity. Yet there is more to the country than wildlife - far
                  more!
                </p>
                <p className="text-gray-700 mb-4">
                  There is the mighty Nile, punctuated by the spectacular Murchison Falls, and the setting for some of
                  the world&apos;s most thrilling commercial white-water rafting. There are the snow-capped peaks of the
                  Rwenzoris, which provide a tantalizing challenge to dedicated mountaineers.
                </p>
                <p className="text-gray-700">
                  Whether you&apos;re a first-time safari-goer or a seasoned African traveler, Uganda - with its unique blend
                  of savannah and forest creatures, its rare wealth of montane and lake habitats - is simply dazzling.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <blockquote className="italic text-xl text-gray-700">
                &quot;We wander for distraction, but we travel for fulfillment.&quot;
                <footer className="text-sm mt-2">- Hilaire Belloc</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Travel Advice */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Travel Advice</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Essential information to help you prepare for your Ugandan adventure.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Money & Spending</h3>
                <p className="text-gray-700 mb-4">
                  Uganda&apos;s unit of currency is the Uganda Shilling. We advise getting some on arrival as it&apos;s easier to
                  buy drinks, souvenirs, and meals in the local currency when traveling between destinations.
                </p>
                <p className="text-gray-700">
                  US Dollars are widely accepted throughout the country, though note that cash is best. Traveler&apos;s
                  cheques and credit cards can be used at most lodges and in Kampala but may attract transaction fees.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Tipping</h3>
                <p className="text-gray-700 mb-4">
                  A tip of around 10-15% is customary in Uganda for good service. Tips are usually given in Uganda
                  Shillings or US Dollars.
                </p>
                <p className="text-gray-700">
                  If you are doing a gorilla trek, your porter (if you choose to take one) should usually receive the
                  highest tip, with a second tip distributed between your guides, trackers, and security personnel.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Climate</h3>
                <p className="text-gray-700 mb-4">Average year-round temperatures: 14°C to 27°C</p>
                <p className="text-gray-700 mb-4">Rainy seasons: March to May and September to December</p>
                <p className="text-gray-700">
                  The mountains tend to be cold and damp, so pack according to the altitude - a change of clothes and a
                  warm fleece in your day pack are advised.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">What to Pack</h3>
                <p className="text-gray-700 mb-4">
                  During the day, temperatures in Uganda are generally warm, so pack plenty of lightweight clothing.
                </p>
                <p className="text-gray-700 mb-4">
                  For gorilla trekking, pack long trousers and long-sleeved tops, long socks to wear over your trousers
                  as protection against ants, a pair of light gloves to protect against nettles, a hat, and a raincoat.
                </p>
                <p className="text-gray-700">
                  A pair of sturdy, comfortable hiking boots is most important – try to break these in before your trip.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Flights & Getting Around</h3>
                <p className="text-gray-700 mb-4">
                  Entebbe International Airport, located 35km from Kampala, is Uganda's international gateway. Visitors
                  usually arrive via Nairobi or other regional hubs.
                </p>
                <p className="text-gray-700">
                  Despite Uganda's small size, expect long rides between destinations. Game drives in the national parks
                  are generally conducted in open-sided 4X4s.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Visa & Passport Requirements</h3>
                <p className="text-gray-700 mb-4">
                  All visitors to Uganda require a visa, and every visitor's passport must be valid for at least six
                  months from their departure date.
                </p>
                <p className="text-gray-700">
                  Visas for Uganda can be obtained at all major borders as well as at the international airport at
                  Entebbe. Single and double-entry visas are valid for up to three months at a cost of around US $50,
                  and extensions are available at the immigration office in Kampala.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 bg-green-700 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
              <p className="max-w-3xl mx-auto">
                Get in touch with us to plan your dream safari adventure in East Africa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 mr-3" />
                  <h3 className="text-xl font-bold">Email</h3>
                </div>
                <p className="mb-2">info@edkasafaris.com</p>
                <p>bookings@edkasafaris.com</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 mr-3" />
                  <h3 className="text-xl font-bold">Phone</h3>
                </div>
                <p className="mb-2">+256-752195226</p>
                <p>+256-700611865</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 mr-3" />
                  <h3 className="text-xl font-bold">Address</h3>
                </div>
                <p className="mb-2">Kampala, Uganda</p>
                <p>East Africa</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-green-700"
              >
                <Link href="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Contact us today to plan your dream safari in East Africa. Our team is ready to create an unforgettable
              experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/tours">Browse Tours</Link>
              </Button>
            </div>
            <div className="mt-8">
              <PriceDisclaimer />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
