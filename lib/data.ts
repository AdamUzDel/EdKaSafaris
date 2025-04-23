export const destinations = [
  "Bwindi Impenetrable Forest",
  "Queen Elizabeth National Park",
  "Murchison Falls",
  "Kibale Forest",
  "Lake Mburo",
  "Kampala City",
  "Jinja",
  "Kidepo Valley",
  "Entebbe",
]

export const tourCategories = ["Gorilla Tours", "Wildlife Safaris", "City Tours", "Adventure Tours", "Cultural Tours"]

export const featuredTours = [
  {
    title: "Gorilla Trekking Adventure",
    location: "Bwindi Impenetrable Forest",
    duration: "3 Days",
    price: "1,500",
    image: "/mgahinga-gorilla-trekking.jpg?height=200&width=300",
    rating: 5,
  },
  {
    title: "Queen Elizabeth Wildlife Safari",
    location: "Queen Elizabeth National Park",
    duration: "4 Days",
    price: "1,200",
    image: "/Queen-Elizabeth-National-Park3.jpg?height=200&width=300",
    rating: 4,
  },
  {
    title: "Murchison Falls Experience",
    location: "Murchison Falls National Park",
    duration: "5 Days",
    price: "1,350",
    image: "/Murchisonfalls.jpg?height=200&width=300",
    rating: 5,
  },
  {
    title: "Kampala City Tour",
    location: "Kampala",
    duration: "1 Day",
    price: "350",
    image: "/One Day Kampala City Trek.jpg?height=200&width=300",
    rating: 4,
  },
  {
    title: "Chimpanzee Tracking",
    location: "Kibale Forest",
    duration: "2 Days",
    price: "950",
    image: "/About-Kibale-750x450-1.jpg?height=200&width=300",
    rating: 5,
  },
  {
    title: "Lake Mburo Safari",
    location: "Lake Mburo National Park",
    duration: "3 Days",
    price: "850",
    image: "/kampala-city-990x490.jpg?height=200&width=300",
    rating: 4,
  },
]

export const tours = [
  {
    id: "murchison-falls-3-days",
    title: "3 Days Murchison Falls",
    slug: "murchison-falls-3-days",
    description:
      "This trip is to take you to the world's most powerful water and participate in several activities like game drives, rhino tracking, launch trips and community visits.",
    location: "Murchison Falls National Park",
    category: "Wildlife Safaris",
    duration: "3 Days / 2 Nights",
    image: "/Murchisonfalls.jpg?height=600&width=800",
    gallery: [
      "/Murchison-Falls-4.jpg?height=400&width=600",
      "/biganimals.jpg?height=400&width=600",
      "/Best-to-visit-Murchison-Falls-National-Park.jpg?height=400&width=600",
    ],
    price: 750,
    currency: "USD",
    priceInfo: "Per person. Excludes international flights.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.8,
    reviews: 24,
    highlights: [
      "Day 1 – Travel to Murchison falls national park",
      "Day 2 – Game drive and launch cruise in the afternoon",
      "Day 3 – Transfer back to Kampala",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Travel to Murchison falls national park",
        description:
          "On this first day of the trip, you will be received by our guide at Entebbe Airport, give a short briefing about the whole trip and right away start the journey to Murchison Falls national park. This is Uganda's largest conservation area located in the north west of the country. Depending on your time of arrival at the airport, have a stopover at the famous Ziwa Rhino sanctuary for rhino tracking and proceed to the park for simply late dinner and overnight.",
      },
      {
        day: "Day 2",
        title: "Game drive and launch cruise in the afternoon",
        description:
          "Today is a game drive day, having enjoyed a cup of coffee in the early morning, head for a game drive to sot different wildlife species likes lions, giraffes, elephants, Uganda kobs, water bucks, duikers, buffaloes and warthogs among others. The drive will also give you beautiful views of Lake Albert and numerous bird species. In the afternoon go for a launch cruise t view the park's main attraction, the Murchison falls. This is the world's strongest fall where huge sums of water squeeze up in a small 7 meter gorge to form a rainbow. The river banks have schools of hippos, crocodiles and other animals that come along for drinking water.",
      },
      {
        day: "Day 3",
        title: "Transfer back to Kampala",
        description:
          "After breakfast, check out of your accommodation and begin your journey back to Kampala. Enjoy the scenic drive as you reflect on your adventure in Murchison Falls National Park.",
      },
    ],
    inclusions: [
      "Transport to and from the airport",
      "All ground transport in a comfortable safari vehicle",
      "All Meals and Accommodations as per the itinerary",
      "Service from a full time English speaking tour guide/ Driver",
      "Drinking water",
    ],
    exclusions: [
      "Entry visa to Uganda. (apply online)",
      "All kinds of drinks except water",
      "Alcoholic drinks",
      "Airfare",
      "All services of a personal nature",
      "Activities not mentioned in the itinerary",
      "Health insurance is not included",
    ],
  },
  {
    id: "kidepo-valley-3-days",
    title: "3 Days Kidepo Valley National Park",
    slug: "kidepo-valley-3-days",
    description:
      "The 3 days are perfectly enough to explore the Africa only true wilderness; Kidepo Valley national park. Its remoteness has protected its virgin nature, an adventure that you rightfully chose.",
    location: "Kidepo Valley National Park",
    category: "Wildlife Safaris",
    duration: "3 Days / 2 Nights",
    image: "/Kidepo-valley-990x490.jpg?height=600&width=800",
    gallery: [
      "/apoka-overview-2.jpg?height=400&width=600",
      "/Narus-655x450-1.webp?height=400&width=600",
      "/giraffe-evening-walk.jpg?height=400&width=600",
    ],
    price: 1950,
    currency: "USD",
    priceInfo: "Per person. Excludes international flights.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.9,
    reviews: 18,
    highlights: [
      "Day 1 – Travel to Kidepo Valley National Park",
      "Day 2 – Game drive and Karamojong community visit",
      "Day 3 – Transfer back to Kampala",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Travel to Kidepo Valley National Park",
        description:
          "You will be picked by our guide from the hotel you will have spent the night. He will brief you about the trip and immediately start the journey to Kidepo Valley national Park. It is an eleven hour journey in our comfortable safari car. You will have a stopover for lunch and arrive at the lodge in the late evening for dinner and slumber.",
      },
      {
        day: "Day 2",
        title: "Game drive and Karamojong community visit",
        description:
          "Breakfast is served early in the morning to head for a game drive in the park. The beautiful landscape of the Kidepo offers the best game drive experiences. You will be amazed how you will start spotting several wildlife species in just a few seconds of the drive, from buffaloes, warthogs, Uganda kobs, elephants, cheetahs to lions, everything you are likely to see. The Karamojong community will be for evening. These are one of the most hospitable and kind people you will meet in Uganda, yet they were renowned hostile people. You will enjoy cultural performances from the local people and probably taste the local cuisines at a free will.",
      },
      {
        day: "Day 3",
        title: "Transfer back to Kampala",
        description:
          "Today is the last day of the trip, immediately after breakfast, start the journey back to Kampala to a hotel where you will spend the night. Depending on your departure time, the guide can even transfer yu straight to the airport to fly home.",
      },
    ],
    inclusions: [
      "Transport to and from the airport",
      "All ground transport in a comfortable safari vehicle",
      "All Meals and Accommodations as per the itinerary",
      "Applicable park entry fees",
      "Service from a full time English speaking tour guide/ Driver",
      "Drinking water",
    ],
    exclusions: [
      "Entry visa to Uganda. (apply online)",
      "All kinds of drinks except water",
      "Alcoholic drinks",
      "Airfare",
      "All services of a personal nature",
      "Activities not mentioned in the itinerary",
      "Health insurance is not included",
    ],
  },
  {
    id: "gorilla-trekking-3-days",
    title: "3 Days Gorilla Trekking in Uganda",
    slug: "gorilla-trekking-3-days",
    description:
      "Gorilla trekking is Uganda's most iconic tourist attraction, almost every tourist to the country wants to see at least a one giant mountain gorilla. The 3 days are enough to take you the Virunga tropics to have sights and real upclose encounters with the forest giants.",
    location: "Bwindi Impenetrable Forest",
    category: "Gorilla Tours",
    duration: "3 Days / 2 Nights",
    image: "/mgahinga-gorilla-trekking.jpg?height=600&width=800",
    gallery: [
      "/Gorilla-Trekking-in-Bwindi-Impenetrable-National-Park.jpg?height=400&width=600",
      "/habimanya-gorilla-family.jpg?height=400&width=600",
      "/Gorillasa.jpg?height=400&width=600",
    ],
    price: 1350,
    currency: "USD",
    priceInfo: "Per person. Excludes international flights.",
    depositRequired: "30% deposit required for confirmation",
    rating: 5.0,
    reviews: 42,
    highlights: [
      "Day 1 – Transfer to Bwindi Impenetrable national Park",
      "Day 2 – Gorilla trekking and the Batwa people",
      "Day 3 – Travel back to Kampala",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Transfer to Bwindi Impenetrable national Park",
        description:
          "Be picked by our knowledgeable travel guide from the hotel you spent the previous night. Have a short brief about the whole trip and start the journey to Bwindi Impenetrable national park. Have stopover in Kyabwe at the Uganda equator; one of the most picturesque spots in the country. Proceed to the park with beautiful views of the landscape along the way. Lunch will be enroute, arrive in the evening at the lodge just for check-in, dinner and overnight.",
      },
      {
        day: "Day 2",
        title: "Gorilla trekking and the Batwa people",
        description:
          "Early morning after breakfast, head to the park headquarters where the park ranger rangers will give you a simple briefing about gorilla trekking. Be divided into groups of eight and enter into the forest on the guidance of the ranger. Gorillas keep on moving in a forest so you just trek their trails to find them. Walk through the tropical forest, in slippery trails, sometimes only finding support from your moving stick. On meeting the gorillas, spend an hour with them, watching them how they carry on their daily lives, feeding, the dominant silverback jealously protecting its females; it's all an amazing experience worth having. The evening is for visiting the Batwa community. These were the first inhabitants of the forest before the government resettled tem to protect the park. This community visit guarantees the taste of their local delicacies at a free will and cultural performances from the locals. After head back to the lodge for dinner and slumber as you prepare for the next day.",
      },
      {
        day: "Day 3",
        title: "Travel back to Kampala",
        description:
          "Today is the end of tour day. Transfer back to Kampala immediately after breakfast. The memories here will leave you confirming that choosing this package is probably one of the best decisions you have ever made.",
      },
    ],
    inclusions: [
      "Transport to and from the airport",
      "All ground transport in a comfortable safari vehicle",
      "All Meals and Accommodations as per the itinerary",
      "Applicable park entry fees",
      "Trekking permits",
      "Service from a full time English speaking tour guide/ Driver",
      "Drinking water",
    ],
    exclusions: [
      "Entry visa to Uganda. (apply online)",
      "All kinds of drinks except water",
      "Alcoholic drinks",
      "Airfare",
      "All services of a personal nature",
      "Activities not mentioned in the itinerary",
      "Health insurance is not included",
    ],
  },
  {
    id: "kampala-city-trek-1-day",
    title: "One Day Kampala City Trek",
    slug: "kampala-city-trek-1-day",
    description:
      "Welcome to a one day trek that takes you around Uganda's capital Kampala. This trek is to take you around the city on foot until maybe you get tired and can't move anymore.",
    location: "Kampala",
    category: "City Tours",
    duration: "1 Day",
    image: "/One Day Kampala City Trek.jpg?height=600&width=800",
    gallery: [
      "/hq720.jpg?height=400&width=600",
      "/09.jpg?height=400&width=600",
      "/2_1-one-day-best-of-kampala-city-walking-tour.jpg?height=400&width=600",
    ],
    price: 159,
    currency: "USD",
    priceInfo: "Per person. Excludes international flights.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.6,
    reviews: 35,
    highlights: [
      "Visit the Independence Monument",
      "Explore Nakasero Market",
      "Visit the Hindu Temple and Royal Palace",
      "See the Old Kampala Mosque (Gaddafi Mosque)",
      "Visit the Uganda National Museum",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Kampala City Trek",
        description:
          "Shortly after breakfast, our guide will pick you up and drive you to the starting point of the Kampala trek. He will brief you about the whole day. Kindly endeavor to put on light clothes because of the sun, however still carry a jacket with you since Uganda's weather is a kind where we can have both sun and rain in the same day. Start the trek from the Independence monument. This is located in the city Centre where almost everyone passes every morning and evening. The monument was established to commemorate Uganda's independence. Just opposite there is the Muteesa one monument and then slope to the National theatre. This usually has a lineup of great live music, film, dance and drama and live performances. From here walk to Nakasero market, this is Uganda's oldest market established in 1921. You will be surprised by the numbers of people that you will find here, almost everything is sold here, from fruits, vegetables and food to clothes, shoes, bags and everything you can ever think of. This is a kind of market where if you lose contact with some just wait to meet them again at home. The Kampala trek then takes you down to the Hindu temple as you slope to the king's royal palace. This is the palace for the king on Buganda kingdom. Uganda has over 56 different cultures but Buganda kingdom dominates the central region. Here you will visit Idi Amin's torture chambers where more than 25,000 elites are believed to have been killed from here. Here have the Royal mile walk, walking through the one mile that separates the King's palace and his court. You will pass by the Nantawentwa junction (Royal drum) and proceed to the Kings court. The trek will then take you to the Old Kampala mosque commonly known as the Gaddafi mosque. This is Uganda's biggest mosque and second biggest in Africa. It's located on one of Kampala's seven hills giving you a 360 degree angle view of the city. Lunch will be in a random restaurant in the city Centre to have a taste of the local cuisines of Kampala people. Depending on the time, the driver guide will then take you to the Uganda National museum where you will wind up the Kampala city trek from. That will be the end of the trip.",
      },
    ],
    inclusions: [
      "Transport to and from the airport",
      "All ground transport in a comfortable safari vehicle",
      "All Meals",
      "Service from a full time English speaking tour guide/ Driver",
      "Drinking water",
    ],
    exclusions: [
      "Entry visa to Uganda. (apply online)",
      "All kinds of drinks except water",
      "Alcoholic drinks",
      "Airfare",
      "All services of a personal nature",
      "Activities not mentioned in the itinerary",
      "Health insurance is not included",
    ],
  },
  {
    id: "kampala-lake-mburo-3-days",
    title: "3 Days Kampala City & Lake Mburo National Park",
    slug: "kampala-lake-mburo-3-days",
    description:
      "These three days are to show you around Uganda's capital Kampala and also take you to the country's closest national park to the capital; Lake Mburo national park.",
    location: "Kampala & Lake Mburo National Park",
    category: "Wildlife Safaris",
    duration: "3 Days / 2 Nights",
    image: "/kampala-city-990x490.jpg?height=600&width=800",
    gallery: [
      "/1-Day-Kampala-City-Tour.jpg?height=400&width=600",
      "/boats-2.jpg?height=400&width=600",
      "/Game-Drive-Kidepo.jpg?height=400&width=600",
    ],
    price: 835,
    currency: "USD",
    priceInfo: "Per person. Excludes international flights.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.7,
    reviews: 22,
    highlights: [
      "Day 1: Kampala City walk",
      "Day 2: Transfer to lake Mburo national park and afternoon launch cruise",
      "Day 3: Morning game drive, local community and drive back to Kampala",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Kampala City walk",
        description:
          "Early morning after breakfast, be picked by our travel guide from the hotel you will have spent the night. Have a simple briefing about the day's walk from the guide, be sure of the hot sun, however you can still carry a sweater because Uganda's weather is one you can have sun and rain in the same day. He walk exposes you to the way of life of Ugandans in the city Centre. Kampala is a never tiring city, people work day and night, visit the different monuments and learn about them, Gaddafi mosque, the national museum, Royal mile walk and others to prove to you that Uganda's tourism is not just in the parks, even in its Centre. Lunch will be along walk, just enter into one local restaurants and taste the local cuisines that Kampala people dine on.",
      },
      {
        day: "Day 2",
        title: "Transfer to lake Mburo national park and afternoon launch cruise",
        description:
          "Today morning, immediately after breakfast, start your journey to Lake Mburo national park. It's a four to five hour journey filled with astonishing views of the surrounding along the road. Have a stopover at Kayabwe for the Uganda Equator photos, have a chance to stand in the middle of the earth, one leg in the southern and the other in the northern hemisphere. Arrival in the park is in the afternoon, have lunch and head for the launch cruise on Lake Mburo. The lakes a home to numerous wildlife species like hippos, crocodiles, several bird species as well as other animals that come along the shores for drinking water in the afternoon.",
      },
      {
        day: "Day 3",
        title: "Morning game drive, local community and drive back to Kampala",
        description:
          "Having had a mouthwatering breakfast, now embark on the safari vehicle for a game drive through the park. Lake Mburo national park is not that will reward you with those rare predators, but be sure of the beautiful species like zebras, buffaloes, giraffes, kobs, warthogs, hippos and others. Coming back from the drive, just check out of the lodge and drive back to Kampala, either straight to the airport or to the lodge of your choice. That will be the end of the trip.",
      },
    ],
    inclusions: [
      "Transport to and from the airport",
      "All ground transport in a comfortable safari vehicle",
      "All Meals and Accommodations as per the itinerary",
      "Applicable park entry fees",
      "Service from a full time English speaking tour guide/ Driver",
      "Drinking water",
    ],
    exclusions: [
      "Entry visa to Uganda. (apply online)",
      "All kinds of drinks except water",
      "Alcoholic drinks",
      "Airfare",
      "All services of a personal nature",
      "Activities not mentioned in the itinerary",
      "Health insurance is not included",
    ],
  },
  {
    id: "kibale-forest-3-days",
    title: "3 Days Kibale Forest National Park",
    slug: "kibale-forest-3-days",
    description:
      "As much as Uganda is known for so many various beauties that nature placed here, it's as well known for being the mother of the world's primate capital; Kibale forest national park.",
    location: "Kibale Forest National Park",
    category: "Wildlife Safaris",
    duration: "3 Days / 2 Nights",
    image: "/About-Kibale-750x450-1.jpg?height=600&width=800",
    gallery: [
      "/kibale-forest-nature-walks.jpg?height=400&width=600",
      "/Kibale-Forest-National-Park-2000x833.webp?height=400&width=600",
      "/Kibale-forest-Chimps.jpg?height=400&width=600",
    ],
    price: 1240,
    currency: "USD",
    priceInfo: "Per person. Excludes international flights.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.9,
    reviews: 31,
    highlights: [
      "Day 1: Travel to Kibale Forest national park",
      "Day 2: Chimp trekking and Bigodi wetland",
      "Day 3: End of the trip",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Travel to Kibale Forest national park",
        description:
          "You are to be welcomed by the company guide at the airport, have a short brief of the whle trip and start the journey to Kibale forest national park. The journey is a 5 – 6 hour road trip that exposes you to awesome views of Uganda's ever-changing landscape. One minute you will be seeing a flat plateau, and the next all you see is a hilly rock. The local business along the road, some even just targeting foreign tourists like you will leave you mesmerized. Arrival is in the evening, where you are to just check-in at the hotel, diner and rest.",
      },
      {
        day: "Day 2",
        title: "Chimp trekking and Bigodi wetland",
        description:
          "Today you go chimp trekking. After an early breakfast, head out to the park headquarters. All chimp trekking experiences start with a short briefing from the park ranger. Here you are divided into groups of eight and then set into the forest. Chimp trekking involves walking through the forest muddy and rugged trails, sometimes even just getting support from the walking stick. In the trails you can cme across huge hips of dung left by the forest elephants. On meeting the chimps, spend an hour in their sight, watching them do their daily routines, see how the feed, communicate with each other and take as many photos and videos as you want with the guidance of the ranger. The evening will be for Bigodi wetland to view more primate species like the baboons, grey cheeked moneys, white tailed monkeys and so many others. Here you are to also spot several bird species and the wetland is one of the renowned birding spots in Uganda. See different tree species, insects and nature at its peak.",
      },
      {
        day: "Day 3",
        title: "End of the trip",
        description:
          "After breakfast, check out of the lodge and embark on the journey back to Entebbe and back home, that will mark the end of your 3 days trip in Kibale forest national park.",
      },
    ],
    inclusions: [
      "Transport to and from the airport",
      "All ground transport in a comfortable safari vehicle",
      "All Meals and Accommodations as per the itinerary",
      "Applicable park entry fees",
      "Service from a full time English speaking tour guide/ Driver",
      "Drinking water",
    ],
    exclusions: [
      "Entry visa to Uganda. (apply online)",
      "All kinds of drinks except water",
      "Alcoholic drinks",
      "Airfare",
      "All services of a personal nature",
      "Activities not mentioned in the itinerary",,
      "Health insurance is not included"
    ],
  },
  {
    id: "jinja-adventure-2-days",
    title: "2 Days Full Adventure Paced Jinja Trip",
    slug: "jinja-adventure-2-days",
    description:
      "The two adventure days are likely to turn into the most adrenaline filled trip you will ever have. This Jinja trip will have you enjoy white water rafting on Africa's longest river the Nile, do bungee jumping and tubing the Nile.",
    location: "Jinja",
    category: "Adventure Tours",
    duration: "2 Days / 1 Night",
    image: "/jinja-1-1-800x490.jpg?height=600&width=800",
    gallery: [
      "/Activities-to-Do-in-Jinja.webp?height=400&width=600",
      "/Quad-Biking-in-Jinja-Uganda.jpg?height=400&width=600",
      "/jinja-bunjee-jumping.jpg?height=400&width=600",
    ],
    price: 450,
    currency: "USD",
    priceInfo: "Per person. Excludes international flights.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.8,
    reviews: 27,
    highlights: [
      "Day 1 - Drive to Jinja city and white water rafting",
      "Day 2 – Bungee jumping, tubing the Nile and back to Kampala",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive to Jinja city and white water rafting",
        description:
          "After breakfast, our f=driver guide is to pick you from the hotel in the morning and drive to Jinja city. This is East Africa's adventure capital full of adrenaline activates to engage in. The journey is roughly 2 to 3 hours, have a stopover at Namawojolo, a car stage famously known for its street vendors hat sell very delicious chicken. Drive through Mabira forest; the once Uganda's largest tropical forest before it was cut down. Drive across the new bridge and enter into Jinja city. Head straight to the rafting offices for a briefing and proceed to the river. Once you start no turning back, white water rafting takes you past five grades of rapids, on a lucky day with high volumes of water, the raft can even flip over the rapids; this you can never forget. The evening will be for relaxation at the lodge in preparation for the next day.",
      },
      {
        day: "Day 2",
        title: "Bungee jumping, tubing the Nile and back to Kampala",
        description:
          "Today after breakfast, drive to Bungee Uganda for a briefing from the guide. Bungee jumping involves jumping from a platform, all tied up legs or waist with a bungee cord. You need to psychologically prepare for the activity. It doesn't take long, like in an hour you will be done with everything. Immediately after jumping, go for tubing the Nile; here you relax on the river on round tubes, and flow with the river waves, though it's thrilling, it's also too cool for relaxation. After this, have lunch and drive back to Kampala. That will be the end of the trip.",
      },
    ],
    inclusions: [
      "Transport to and from the airport",
      "All ground transport in a comfortable safari vehicle",
      "All Meals and Accommodations as per the itinerary",
      "Service from a full time English speaking tour guide/ Driver",
      "Drinking water",
    ],
    exclusions: [
      "Entry visa to Uganda. (apply online)",
      "All kinds of drinks except water",
      "Alcoholic drinks",
      "Airfare",
      "All services of a personal nature",
      "Activities not mentioned in the itinerary",,
      "Health insurance is not included"
    ],
  },
  {
    id: "kenya-study-tour-10-days",
    title: "10 Day Kenya Study Tour",
    slug: "kenya-study-tour-10-days",
    description:
      "This 10 days Kenya study tour is a regional tour that takes you for an Educational tour to Kenya – one of the east African countries using either Malaba or Busia border. Students spend tour Nairobi and Mombasa, Kenya two biggest cities",
    location: "Kenya",
    category: "Educational Tours",
    duration: "10 Days / 9 Nights",
    image: "/dh38zklg9pf1sg4exstl.webp?height=600&width=800",
    gallery: [
      "/dh38zklg9pf1sg4exstl.webp?height=400&width=600",
      "/Wilson_Airport.jpg?height=400&width=600",
      "/187600885_1906235779557630_8512490382348779404_n.jpg?height=400&width=600",
      "/80.jpg?height=400&width=600"
    ],
    price: 2800,
    currency: "USD",
    priceInfo: "Per person. Includes accommodation, meals, park entry, and activities.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.7,
    reviews: 31,
    highlights: [
      "Kenya, Nairobi – Mombasa study tour for group of pupils /students",
      "Your study tour will begin and end at a designated point in Kampala.",
      "Study tour to cover 10 days and 9 nights",
      "Accommodation is hotel and hostel category based on room sharing. However there are separate facilities for girls/boys.",
      "This study tour is suitable for pupils from P5 to P7 classes",
      "This study tour is suitable for all students both secondary and post-secondary",
      "This study tour can be customized to suit your needs",
      "This study tour is available all year round but most preferably in December/Early January",
      "Use of the Madaraka Express passenger train from Nairobi to Mombasa and return by road",
      "Ground transportation is by Buses and Coasters",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Travel from Kampala to Nairobi",
        description:
          "The learners will be picked by a team of our professional tour guides at a designated point in Kampala, preferably at the former Shoprite at Lugogo.After a meet and greet session, the journey to Nairobi through Busia border will start. We hope to set off by 5.00 am to avoid traffic jam and to ensure that we are the Busia border by 8.00 am. They will go through the immigration process where learners and accompanying staff will be expected to present their passports and yellow fever vaccination certificates. Those without passports will apply for temporary travel document at a fee. Depending on the time taken on immigration clearances, they will continue their  journey to Nairobi with a stopover for lunch either in Kisumu or Kericho. They will drive through Kericho tea estate as learners are given key educative lectures about this mighty tea estate by our onboard guides. They will arrive in Nairobi by 7PM and will be checked into their accommodation facility for supper and overnight. There will be a strict demarcation for boys and girls when it comes to accommodation facilities. Meal Plan: Breakfast, Lunch and Dinner."
      },
      {
        day: "Day 2",
        title: "Visit Kenyatta International Convention Centre, Parliament and Nairobi National Museum.",
        description:
          "Kenyatta International Convention Centre: \n After breakfast, the Nairobi tour will start in high gear with a visit to Kenyatta International Convention Centre (KICC). KICC is a tall beautiful building of 28-storeys, built in 1974 and is considered a symbol of Nairobi serving as an international venue for major conferences, seminars, exhibitions, meetings as well as special events including international summits.Kenyan Parliament: From KICC, they will walk across the road to the Kenyan Parliament which is just a stone throw away. The Kenyan parliament is divided into 2 houses namely – National Assembly and Senate. The learners will take a tour of the building that houses the Parliament and learn about its history. Nairobi National Museum. After lunch, they will head to Nairobi National Museum which is the flagship brand of the National Museums of Kenya located on Museum Hill. It is a 10 minute drive from Nairobi city central business district. The museum tells the story of Kenya’s rich Heritage with four distinctive themes representing Kenya’s Culture, Nature, History and Contemporary Art hence it offers a one stop Center for visitors to sample the country’s rich heritage both for education and leisure. In addition to the museum, visitors are treated to a variety of shopping and eating facilities, as well as botanical gardens that offer a serene environment. After, they will be taken to Uhuru Park in the middle of the city to relax and have lunch. Later in the day, the learners will retire back to ther accommodation facility for supper and overnight. Meal Plan: Breakfast, lunch and Dinner"
      },
      {
        day: "Day 3",
        title: "Visit Wilson Airport, Nairobi Giraffe Centre and Bomas of Kenya",
        description:
          "Wilson Airport: On day three after breakfast, the learners will visit Wilson airport which lies about 4km by road south of Nairobi central business district. The airport was established as Nairobi West Aerodrome in 1927 by a wealthy widow called Florence Kerr Wilson. The airport’s average traffic is around 120,000 landings and take-offs annually. Air Kenya and other small airlines use Wilson Airport for scheduled domestic passenger services instead of JKIA. Nairobi Giraffe Centre: After visit Wilson Airport, the leaners will tour Nairobi Giraffe Centre located about 20km from Nairobi city center. It was established in 1979 under the African Fund for Endangered Wildlife (AFEW) which plays a pivotal role in conserving the critically endangered Rothschild giraffe. The main attraction for both school children and visitors is the hand feeding of giraffes from a raised wooden structure (giraffe height). They can also watch Warthogs snuffling at their hooves, scavenging on the fallen pellets. Bomas of Kenya. After lunch they will visit Bomas of Kenya which is a tourist village in Langata – Nairobi on Forest edge road about 10km from Nairobi City Centre. It was established by the Government of Kenya in 1971 with the overall mandate to preserve, maintain and promote the rich and diverse cultural values of various ethnic groups of Kenya and to act as a tourist attraction. There are currently different “Bomas” representing each of Kenya’s major ethnic communities with numerous huts displaying traditional villages belonging to the several Kenyan tribes. They will watch the traditional dances representing the various ethnic communities of Kenya before having a tour of the different “Bomas”. Later in the evening the learners will retreat back to their accommodation facility for supper and overnight. Meal plan: Breakfast, Lunch and Dinner"
      },
      {
        day: "Day 4",
        title: "Game Drive in Nairobi National park and visit to the Resurrection Gardens",
        description:
          "Nairobi National park: Day four starts with a visit to Nairobi National Park. After breakfast,the learners will head to the park for an early morning game drive believed to be more rewarding than any other time of the day. Known as “The world’s only Wildlife Capital”, Nairobi National park is Kenya’s first game reserve, established in 1946. It is a short drive out of Nairobi central business district located about 8km south of Nairobi on Lang’ata edge road. It is home to over 100 mammals with four of the big five present. Resurrection Garden: After lunch, they  will visit the Resurrection Garden which is a place of prayer located south west of Nairobi about 1km off Dagoretti road. The resurrection garden was established purposely to help Christians rediscover the roots of their faith in order to draw new inspiration and courage in serving God. The garden is painted with beautiful pictures in different stations showing the history of salvation – the birth of Jesus, his ministry and one that ends up with the way of the cross. Meal plan: Breakfast, Lunch and Dinner"
      },
      {
        day: "Day 5",
        title: "Travel to Mombasa by Standard Gauge Railway (SGR).",
        description:
          "After an early morning breakfast, the learners will be dropped off at Syokimau Nairobi terminus on time for the 8:00 am train schedule and have a transfer to Mombasa by the Madaraka Express passenger train arriving the Mombasa terminus at 2:00 pm. They will have lunch before being transferred to Pirates Beach for their first introduction to coastal life. Pirates beach also known as Kenyatta public beach is found in Bamburi along Mombasa – Malindi highway about 8 kilometers from Mombasa central business district. Over looked by several beautiful beach resorts, lots of activities await you at pirates beach including sun bathing, boat rides, photography, Camel rides and swimming among others. Later they will retire to their booked accommodation facility for supper and overnight. Meal plan: Breakfast, Lunch and Dinner"
      },
      {
        day: "Day 6",
        title: "Visit Rabai Mpya in the morning and Haller Park in the afternoon.",
        description:
          "Rabai: After breakfast your first experience of coast life begins with a visit to Rabai also called Rabai Mpya. It is a historic location situated about 25km north-west of Mombasa, off the Mombasa – Nairobi highway along the Mazeras – Kaloleni road in Kilifi County. The Rabia museum also referred to as Krapf memorial museum was officially opened on June 1998 in memory of Krapt and to honor his work in the area. It was also founded so as to give formal and a perpetual reminder to monumental events during the advent of early missionaries. Today this place represents the mixture of the history of Christianity, Slavery and the Mijikenda culture whose evidence is still in the place. The Rabai festival is an annual event held in November to celebrate the history, life and culture of the Rabai and their small town. Haller Park: After lunch you will head to Haller Park situated in the North Coast of Mombasa south of the Bamburi Cement factory along Mombasa – Malindi highway. This is an ecological park that is as a result of transformation of a quarry wasteland into a park full of diverse varieties of plants and animals. What was once a limestone quarry is now a thriving ecosystem of forest, grassland and ponds with walking trails for you to view the fenced wildlife such as hippo, giraffe, antelope, buffalo, humongous tortoises and smaller mammals. The park also has a number of bird species like the eagle, sandpiper, weaver, kingfisher, ibis, owl, heron, egret and much more. The sections of the park include the game sanctuary, reptile park, fish farm, crocodile pens, giraffe viewing point and palm gardens. Enjoy the twisting and winding nature trails and have the opportunity to feed the hippos and giraffes. Later retire to your booked accommodation facility for supper and overnight"
      },
      {
        day: "Day 7",
        title: "Visit to Fort Jesus, Likoni Ferry and  Mamba Village",
        description:
          "Fort Jesus: After breakfast students will start the day with a morning visit to Fort Jesus. Fort Jesus was built by Portuguese towards the end of the 16th century between 1593 to 1596 on the coastline near Old Mombasa town. After the Portuguese inhabited it, the fort became the subject of battle between 1631 and 1895, it was captured and recaptured, changing hands nine times with the Oman Arabs winning control over it in 1698. In 1895 the British transformed it into a prison in which they held slaves in the torture rooms and cells in the inner part of the fort. In 2011 it was declared a World Heritage Site by UNESCO and highlighted as one of the most outstanding and well-preserved examples of 16th century Portuguese military fortifications. Likoni Ferry: After about an hour, the learners will depart Fort Jesus and connect to have an experience of the Likoni Ferry which serves the Mombasa island side and the mainland suburb of Likoni. Two-Four double-ended ferries alternate across the harbor, carrying both road and foot traffic. They will have the experience of being on the ferry with breathtaking views of Mombasa Port seen from a close range. Mamba village: After lunch, they will head to Mamba Village located about 12 kilometers north of Kenyan coastal town of Mombasa, in the Nyali area. Mamba village is the largest crocodile farm in Africa and is home to over 10,000 crocodiles. It is also home to BIG DADDY which is known as the oldest crocodile. The tour of the farm will begin with a video presentation as an introduction to many reptile species, life cycle and behavior of crocodiles. This will be followed by a comprehensive tour of the rest of the farm as they learn more about the crocodile life cycle and behavior while viewing lives of crocodile of every size, starting from hatchlings to fully grown adults."
      },
      {
        day: "Day 8",
        title: "Visit Wild Waters for a half day full-packed activities",
        description:
          "Wild Waters: After breakfast, the learners will head to wild waters situated in Nyali, Mombasa on links road for half day fun full packed activities and experience the beautiful coastal sunshine at wild waters. Wild waters is a family entertainment park that boasts a range of fun with its exhilarating slides, games, rides and pool for all ages. Wild Waters blends the thrill of an amusement park with the refreshing cool of a water park. In this place, there is something for everyone. Shopping: After lunch, they will spend the rest of the afternoon at leisure with shopping options in one of the supermarkets as well as at Marikiti market for those with interested in purchasing some souvenirs like crafts, shirts, bangles etc. Later they will retire back to their accommodation for supper and to sleep as they prepare for the journey back to Nairobi."
      },
      {
        day: "Day 9",
        title: "Drive from Mombasa to Nairobi",
        description:
          "On the ninth day the learners will have a relaxed breakfast before being transferred to Nairobi by road. They will go through Tsavo east and Tsavo west national parks as they catch a glimpse of Zebras that commonly graze by the road side enroute to Nairobi. Lunch break will be at Tsavo before continuing the journey and arriving Nairobi in the evening.  Supper and overnight at the respective booked accommodation facility. "
      },
      {
        day: "Day 10",
        title: "Back to Uganda",
        description:
          "The learners will wake up at sunrise and set off for Kampala. Breakfast will be served enroute in Nakuru. Arrive at Busia border by 1:30pm, clear with immigration to confirm exit from Kenya. Have lunch at Busia border before continuing your journey to Kampala. Arrive in Kampala at the designated pick up point (Shoprite Lugogo) at 6.00 PM. Meal Plan: Breakfast and Lunch. This marks the end of 10 Days and 9 nights of the Kenyan Study Tour"
      }
    ],
    inclusions: [
      "Airport transfers",
      "Accommodation (twin sharing basis)",
      "All meals as per itinerary",
      "Entrance fees to parks and reserves",
      "Professional English-speaking guide",
      "Cultural engagement activities",
      "Ground transportation in a safari vehicle",
      "Bottled water during travel"
    ],
    exclusions: [
      "International airfare",
      "Personal expenses",
      "Visa fees",
      "Tips and gratuities",
      "Travel and medical insurance",
      "Activities not mentioned in itinerary",
      "Vaccinations and COVID-19 testing (if required)",
      "Health insurance is not included"
    ]
  },  
]

