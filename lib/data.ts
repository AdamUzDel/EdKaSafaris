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
    price: "$ 1,500",
    image: "/mgahinga-gorilla-trekking.jpg?height=200&width=300",
    rating: 5,
  },
  {
    title: "Queen Elizabeth Wildlife Safari",
    location: "Queen Elizabeth National Park",
    duration: "4 Days",
    price: "$ 1,200",
    image: "/Queen-Elizabeth-National-Park3.jpg?height=200&width=300",
    rating: 4,
  },
  {
    title: "Murchison Falls Experience",
    location: "Murchison Falls National Park",
    duration: "5 Days",
    price: "$ 1,350",
    image: "/Murchisonfalls.jpg?height=200&width=300",
    rating: 5,
  },
  {
    title: "Kampala City Tour",
    location: "Kampala",
    duration: "1 Day",
    price: "$ 350",
    image: "/One Day Kampala City Trek.jpg?height=200&width=300",
    rating: 4,
  },
  {
    title: "Chimpanzee Tracking",
    location: "Kibale Forest",
    duration: "2 Days",
    price: "$ 950",
    image: "/About-Kibale-750x450-1.jpg?height=200&width=300",
    rating: 5,
  },
  {
    title: "Lake Mburo Safari",
    location: "Lake Mburo National Park",
    duration: "3 Days",
    price: "$ 850",
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
      "Activities not mentioned in the itinerary",
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
      "Activities not mentioned in the itinerary",
    ],
  },
]

