import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Users, Award, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Edka Safaris & Adventures</h1>
            <p className="text-xl max-w-3xl mx-auto">Crafting Unforgettable Journeys in Uganda and beyond</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Edka Safaris and Adventure is a premier tour and travel company based in Kampala, Uganda, renowned for
                  delivering exceptional and immersive travel experiences across East Africa.
                </p>
                <p className="text-gray-700 mb-4">
                  Founded by two brothers, Edris and Ismael, whose shared passion for adventure and deep love for
                  Uganda&apos;s natural and cultural heritage inspired the company&apos;s inception, Edka Safaris has quickly
                  established itself as a trusted name in the tourism industry.
                </p>
                <p className="text-gray-700 mb-6">
                  With a commitment to creating unforgettable memories, we specialize in tailor-made safaris, cultural
                  tours, and adventure activities that showcase the breathtaking beauty and biodiversity of Uganda,
                  often referred to as the &quot;Pearl of Africa.&quot;
                </p>
                <div className="flex items-center space-x-2 text-green-600 font-medium">
                  <span>Learn more about our journey</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Safari guides and team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vision and Mission</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our vision and mission guide everything we do at Edka Safaris.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Our Vision</h3>
                <p className="text-gray-700">
                  Edka Safaris and Adventure was born from the brothers&apos; vision to share Uganda&apos;s unparalleled
                  landscapes, wildlife, and vibrant cultures with the world. We strive to be the premier gateway for
                  travelers seeking authentic and transformative experiences in East Africa.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Our Mission</h3>
                <p className="text-gray-700">
                  Our mission is to provide personalized, high-quality travel experiences that not only captivate
                  travelers but also promote sustainable tourism and support local communities. By combining our
                  intimate knowledge of the region with a dedication to customer satisfaction, we transform travel
                  dreams into reality, one journey at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                At Edka Safaris & Adventures, we are guided by a set of core values that shape everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-green-600 mb-4">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-700">
                  We are deeply committed to sustainable tourism practices that preserve Uganda&apos;s natural wonders and
                  uplift local communities. We partner with eco-friendly lodges, support conservation initiatives, and
                  engage local artisans and guides to ensure economic benefits reach grassroots levels.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-green-600 mb-4">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-700">
                  We believe in giving back to the communities we visit. We employ local guides, support community-based
                  tourism initiatives, and contribute to local development projects. By promoting responsible travel, we
                  ensure that future generations can experience Uganda&apos;s pristine wilderness.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-green-600 mb-4">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in every aspect of our service. From the moment you contact us to the end of
                  your safari, we are dedicated to providing an exceptional experience with our team of certified guides
                  and passionate staff who bring expertise and enthusiasm to every journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Offerings */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Travel Offerings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Edka Safaris offers a diverse portfolio of travel packages designed to cater to a wide range of
                interests and budgets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Gorilla Trekking"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Wildlife Experiences</h3>
                  <p className="text-gray-700 mb-4">
                    From gorilla and chimpanzee trekking in Bwindi Impenetrable and Kibale Forests to thrilling game
                    drives in Queen Elizabeth and Murchison Falls National Parks, we ensure travelers encounter Uganda&apos;s
                    iconic wildlife up close.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Adventure Activities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Adventure Activities</h3>
                  <p className="text-gray-700 mb-4">
                    Adventure enthusiasts can enjoy whitewater rafting on the Nile River in Jinja, hiking in the
                    Rwenzori Mountains, or birdwatching expeditions to spot rare species like the shoebill.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Cultural Tours"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Cultural Tours</h3>
                  <p className="text-gray-700 mb-4">
                    Our cultural tours provide authentic interactions with local communities, such as the Batwa in
                    Bwindi or the Karamojong in the northeast, offering insights into Uganda&apos;s rich heritage.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                Each itinerary is meticulously crafted to reflect the unique preferences of clients, whether they seek
                luxury lodges, mid-range accommodations, or budget-friendly options. We pride ourselves on flexibility,
                ensuring every detail—from accommodation to activities—aligns with your vision. Our services also extend
                to Rwanda, Kenya, and Tanzania, offering multi-destination safaris that highlight the best of East
                Africa.
              </p>
              <Button asChild>
                <Link href="/tours">Explore Our Tours</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Edka Safaris</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What sets us apart from other safari operators in East Africa?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full p-2 mt-1">
                  <ThumbsUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                  <p className="text-gray-700">
                    Our guides are certified by the Uganda Safari Guides Association (USAGA) and possess extensive
                    knowledge of Uganda&apos;s flora, fauna, and cultural nuances. They know the best spots for wildlife
                    viewing and can provide rich cultural context.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full p-2 mt-1">
                  <ThumbsUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Customized Experiences</h3>
                  <p className="text-gray-700">
                    We tailor each safari to our clients&apos; interests, preferences, and budget. Whether you&apos;re interested
                    in wildlife photography, bird watching, or cultural experiences, we create an itinerary just for
                    you.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full p-2 mt-1">
                  <ThumbsUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quality Accommodations</h3>
                  <p className="text-gray-700">
                    We partner with the best lodges and camps that offer comfort, excellent service, and authentic
                    experiences without compromising on sustainability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 text-green-600 rounded-full p-2 mt-1">
                  <ThumbsUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Responsible Tourism</h3>
                  <p className="text-gray-700">
                    We are committed to ethical wildlife viewing practices and supporting conservation efforts. We
                    believe that tourism should benefit both visitors and the destinations they explore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experiences with Edka
                Safaris.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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

        {/* CTA */}
        <section className="py-16 px-4 bg-green-700 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="mb-8 text-lg">
              As our founders Edris and Ismael often say, &quot;Every journey with Edka is a story waiting to be told.&quot;
              Contact us today to plan your dream safari in East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-green-700"
              >
                <Link href="/tours">Browse Tours</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
