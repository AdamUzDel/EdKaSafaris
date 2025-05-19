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
  
  // New tours to add
  {
    id: "gorilla-queen-elizabeth-4-days",
    title: "4-Day Gorilla Tracking & Queen Elizabeth National Park",
    slug: "gorilla-queen-elizabeth-4-days",
    description:
      "Experience the best of Uganda's wildlife with this 4-day safari combining gorilla tracking in Bwindi Impenetrable Forest and game viewing in Queen Elizabeth National Park. Observe mountain gorillas in their natural habitat and enjoy a boat safari on the Kazinga Channel.",
    location: "Bwindi Impenetrable Forest & Queen Elizabeth National Park",
    category: "Gorilla Tours",
    duration: "4 Days / 3 Nights",
    image: "/Uganda-Gorilla-Trekking-in-December-1.jpg?height=600&width=800",
    gallery: [
      "/Gorilla-Trekking2.webp?height=400&width=600",
      "/Gorilla-Trekking3.webp?height=400&width=600",
      "/Gorilla-Trekking4.webp?height=400&width=600",
    ],
    price: 1565,
    currency: "USD",
    priceInfo: "Per person. Excludes international flights.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.9,
    reviews: 36,
    highlights: [
      "Day 1: Arrival in Entebbe and Transfer to Bwindi Impenetrable National Park",
      "Day 2: Gorilla Tracking in Bwindi Impenetrable National Park",
      "Day 3: Transfer to Queen Elizabeth National Park and Afternoon Game Drive",
      "Day 4: Morning Boat Safari on Kazinga Channel and Return to Entebbe",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Entebbe and Transfer to Bwindi Impenetrable National Park",
        description:
          "Arrive at Entebbe International Airport (EBB) where you'll meet your driver/guide and begin the road transfer to Bwindi Impenetrable National Park (Buhoma Sector). The journey takes approximately 9-10 hours by road, including stops. Alternatively, you can take a domestic flight from Entebbe to Kihihi Airstrip (about 1.5 hours), followed by a 1-hour drive to Buhoma. Enjoy a scenic drive through Uganda's countryside, with stops for photos and lunch in Mbarara. Arrive at your lodge in Buhoma in the evening for dinner and a briefing about the next day's gorilla tracking adventure.",
      },
      {
        day: "Day 2",
        title: "Gorilla Tracking in Bwindi Impenetrable National Park",
        description:
          "After an early breakfast at 6:00 AM, transfer to Bwindi Park Headquarters for a briefing by Uganda Wildlife Authority (UWA) rangers at 7:30 AM. Begin your gorilla tracking adventure in the Buhoma Sector around 8:00 AM. The trek duration varies from 2-7 hours, depending on the gorillas' location, and includes 1 hour with the gorillas once found. Track a habituated gorilla family through the dense forest, guided by rangers and porters (optional porter hire available). Observe the gorillas' behavior, take photos, and enjoy this bucket-list experience. Return to the lodge for a late lunch and relaxation. In the evening, you have the option to take a village walk to meet the local Batwa community (additional cost, approximately $15-20 per person). Dinner and overnight at your lodge.",
      },
      {
        day: "Day 3",
        title: "Transfer to Queen Elizabeth National Park and Afternoon Game Drive",
        description:
          "After breakfast at 7:00 AM, depart Bwindi for Queen Elizabeth National Park via the Ishasha Sector (approximately 3-4 hours, 160 km). You may make an optional stop in Ishasha to spot tree-climbing lions, depending on time and road conditions. Arrive at your lodge near Queen Elizabeth National Park for lunch. In the afternoon (3:00 PM - 6:00 PM), enjoy a game drive in the Kasenyi Plains where you can spot wildlife such as elephants, buffaloes, lions, leopards (if lucky), and various antelope species. Return to the lodge for dinner and relaxation.",
      },
      {
        day: "Day 4",
        title: "Morning Boat Safari on Kazinga Channel and Return to Entebbe",
        description:
          "After an early breakfast at 6:30 AM, depart for a boat safari on the Kazinga Channel (8:00 AM - 10:00 AM). Cruise along the channel, observing hippos, crocodiles, elephants, and abundant birdlife including African fish eagles and kingfishers. After lunch at the lodge or en route, begin the return journey to Entebbe (approximately 6-7 hours, 410 km). Arrive in Entebbe by late evening (around 6:00-7:00 PM) for drop-off at Entebbe International Airport or a hotel for departure/overnight (not included in cost).",
      },
    ],
    inclusions: [
      "All transportation in a comfortable safari vehicle",
      "English-speaking driver/guide throughout the tour",
      "Accommodation as specified (mid-range options)",
      "Meals as per the itinerary (full board)",
      "Bottled water during the safari",
      "Park entrance fees for Bwindi and Queen Elizabeth",
      "Gorilla tracking permit ($700 value)",
      "Boat cruise on Kazinga Channel",
      "Game drives as mentioned in the itinerary",
    ],
    exclusions: [
      "International flights",
      "Visa fees ($50 for single-entry Uganda visa)",
      "Travel insurance",
      "Personal expenses (souvenirs, phone calls, etc.)",
      "Alcoholic and soft drinks",
      "Tips and gratuities for guides and staff",
      "Optional activities not mentioned in the itinerary",
    ],
  },
  {
    id: "honeymoon-ngamba-island-3-days",
    title: "3 Days Honeymoon on Ngamba Island",
    slug: "honeymoon-ngamba-island-3-days",
    description:
      "Enjoy a romantic 3-day honeymoon safari at Ngamba Island Chimpanzee Sanctuary on Lake Victoria. This short but memorable experience allows wildlife enthusiasts to relax and create unforgettable memories within the habitat of rescued chimpanzees from around Uganda.",
    location: "Ngamba Island, Lake Victoria",
    category: "Romantic Getaways",
    duration: "3 Days / 2 Nights",
    image: "/ngamba_island1.webp?height=600&width=800",
    gallery: [
      "/ngamba_island2.webp?height=400&width=600",
      "/ngamba_island3.webp?height=400&width=600",
      "/ngamba_island4.webp?height=400&width=600",
    ],
    price: 600,
    currency: "USD",
    priceInfo: "Per person (based on couple sharing). Excludes international flights.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.8,
    reviews: 22,
    highlights: [
      "Day 1: Pick up in Entebbe or Kampala and transfer to Ngamba Island",
      "Day 2: Full day interactive activities at Ngamba Island Chimpanzee Sanctuary",
      "Day 3: Return to Entebbe by boat and drop off",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Pick up in Entebbe or Kampala and transfer to Ngamba Island",
        description:
          "Your journey begins with a pickup from your location in Entebbe or Kampala. Your guide will drive you to the pier where you'll board a boat to Ngamba Island. The boat ride takes approximately 45 minutes across Lake Victoria, during which you'll cross the equator line. Upon arrival at Ngamba Island Sanctuary, you'll visit the visitor's center for an introduction to the island and an educational orientation. Later, enjoy an evening feeding experience with the chimpanzees. Dinner and overnight at Ngamba Island Tented Camp.",
      },
      {
        day: "Day 2",
        title: "Full day interactive activities at Ngamba Island Chimpanzee Sanctuary",
        description:
          "After breakfast at your tent, spend the day exploring the island and participating in various activities. Choose from options such as a caregiver experience, morning or evening feeding sessions, Ngamba trail walk, or visiting the nearby fishing villages. Lunch will be served at the island, and you'll have time to relax before taking an evening sunset boat cruise. Enjoy the beautiful sunset as you sip your favorite drinks and cross from the northern to the southern hemisphere. Return for dinner and overnight at Ngamba Island Tented Camp.",
      },
      {
        day: "Day 3",
        title: "Return to Entebbe by boat and drop off",
        description:
          "Enjoy a final breakfast at your camp before departing from the island for the return boat ride to the pier in Entebbe. Upon arrival at the pier, your driver-guide will transfer you back to your destination in Entebbe, Kampala, or Entebbe International Airport for your departure flight.",
      },
    ],
    inclusions: [
      "Round-trip transfers from Entebbe/Kampala",
      "Boat transfers to and from Ngamba Island",
      "2 nights accommodation at Ngamba Island Tented Camp",
      "All meals as specified in the itinerary",
      "Chimpanzee viewing and feeding experiences",
      "Sunset boat cruise",
      "English-speaking guide",
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Tips and gratuities",
      "Optional activities not mentioned in the itinerary",
    ],
  },
  {
    id: "kenya-study-tour-10-days",
    title: "10-Day Kenya Study Tour for Learners",
    slug: "kenya-study-tour-10-days",
    description:
      "This 10-day educational tour takes students to Kenya's two biggest cities: Nairobi and Mombasa. The journey begins in Nairobi, known as 'The Green City in the Sun,' and continues to the coastal city of Mombasa along the Indian Ocean, offering a comprehensive learning experience about Kenya's history, culture, and natural attractions.",
    location: "Kenya (Nairobi & Mombasa)",
    category: "Educational Tours",
    duration: "10 Days / 9 Nights",
    image: "/dh38zklg9pf1sg4exstl.webp?height=600&width=800",
    gallery: [
      "/dh38zklg9pf1sg4exstl.webp?height=400&width=600",
      "/Wilson_Airport.jpg?height=400&width=600",
      "/187600885_1906235779557630_8512490382348779404_n.jpg?height=400&width=600",
      "/80.jpg?height=400&width=600",
    ],
    price: 550,
    currency: "USD",
    priceInfo: "Per student. Group rates available.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.7,
    reviews: 45,
    highlights: [
      "Day 1: Transfer from School to Nairobi",
      "Day 2: Visit Kenyatta International Convention Centre, Kenyan Parliament, Nairobi National Museum and Snake Park",
      "Day 3: Visit Wilson Airport, Nairobi Giraffe Centre and Bomas of Kenya",
      "Day 4: Game Drive in Nairobi National Park and visit to Resurrection Gardens",
      "Day 5: Train journey to Mombasa on the Madaraka Express and visit Pirates Beach",
      "Day 6: Visit Rabai Mpya and Haller Park",
      "Day 7: Visit Fort Jesus, Likoni Ferry Experience and Mamba Village",
      "Day 8: Wild Waters activities and shopping",
      "Day 9: Transfer from Mombasa to Nairobi",
      "Day 10: Return journey to school",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Travel from Kampala to Nairobi",
        description:
          "The journey begins with pickup from a designated point in Kampala, preferably at the former Shoprite at Lugogo, at 5:00 AM to avoid traffic. Travel to Nairobi through the Busia border, arriving at the border by 8:00 AM for immigration processing. Students and staff will present their passports and yellow fever vaccination certificates. Those without passports can apply for temporary travel documents for a fee. Continue the journey to Nairobi with a stopover for lunch in either Kisumu or Kericho. Drive through the Kericho tea estates while guides provide educational information about this important agricultural area. Arrive in Nairobi by 7:00 PM and check into accommodation with separate facilities for boys and girls. Dinner and overnight stay.",
      },
      {
        day: "Day 2",
        title: "Visit Kenyatta International Convention Centre, Parliament and Nairobi National Museum",
        description:
          "After breakfast, visit the Kenyatta International Convention Centre (KICC), a 28-story building built in 1974 that serves as a symbol of Nairobi and hosts major international conferences and events. Next, walk to the nearby Kenyan Parliament to learn about its two houses (National Assembly and Senate) and the building's history. After lunch at Uhuru Park in the city center, visit the Nairobi National Museum on Museum Hill, which showcases Kenya's rich heritage through exhibits on culture, nature, history, and contemporary art. The museum offers educational displays and botanical gardens. Return to accommodation for dinner and overnight stay.",
      },
      {
        day: "Day 3",
        title: "Visit Wilson Airport, Nairobi Giraffe Centre and Bomas of Kenya",
        description:
          "Begin the day with a visit to Wilson Airport, established in 1927 by Florence Kerr Wilson. The airport handles around 120,000 landings and takeoffs annually and is used by small airlines for domestic passenger services. Next, visit the Nairobi Giraffe Centre, established in 1979 to conserve the endangered Rothschild giraffe. Students can hand-feed giraffes from a raised platform and observe warthogs in their natural habitat. After lunch, visit Bomas of Kenya, a tourist village established in 1971 to preserve Kenya's diverse cultural heritage. Explore different 'Bomas' representing Kenya's major ethnic communities and watch traditional dance performances. Return to accommodation for dinner and overnight stay.",
      },
      {
        day: "Day 4",
        title: "Game Drive in Nairobi National Park and visit to the Resurrection Gardens",
        description:
          "After an early breakfast, head to Nairobi National Park, Kenya's first game reserve established in 1946, for a morning game drive. Located just 8km from the city center, the park is home to over 100 mammal species, including four of the 'Big Five'. After lunch, visit the Resurrection Garden, a place of prayer located southwest of Nairobi. The garden features beautiful paintings depicting the history of salvation, from the birth of Jesus to the Way of the Cross, helping Christians rediscover their faith. Return to accommodation for dinner and overnight stay.",
      },
      {
        day: "Day 5",
        title: "Travel to Mombasa by Standard Gauge Railway (SGR)",
        description:
          "After an early breakfast, transfer to Syokimau Nairobi terminus to catch the 8:00 AM Madaraka Express passenger train to Mombasa. Arrive at Mombasa terminus at 2:00 PM and have lunch before visiting Pirates Beach (also known as Kenyatta public beach) in Bamburi. Located about 8km from Mombasa's city center, the beach offers activities such as sunbathing, boat rides, photography, camel rides, and swimming. Later, check into accommodation for dinner and overnight stay.",
      },
      {
        day: "Day 6",
        title: "Visit Rabai Mpya in the morning and Haller Park in the afternoon",
        description:
          "After breakfast, visit Rabai (also called Rabai Mpya), a historic location about 25km northwest of Mombasa. Explore the Rabai museum (Krapf memorial museum), which opened in June 1998 to honor the work of early missionaries and preserve the history of Christianity, slavery, and Mijikenda culture in the area. After lunch, visit Haller Park, an ecological park transformed from a limestone quarry into a thriving ecosystem of forest, grassland, and ponds. Walk the nature trails to view fenced wildlife such as hippos, giraffes, antelopes, buffaloes, tortoises, and various bird species. The park includes a game sanctuary, reptile park, fish farm, crocodile pens, giraffe viewing point, and palm gardens. Feed the hippos and giraffes before returning to accommodation for dinner and overnight stay.",
      },
      {
        day: "Day 7",
        title: "Visit to Fort Jesus, Likoni Ferry and Mamba Village",
        description:
          "Begin the day with a visit to Fort Jesus, built by the Portuguese between 1593 and 1596 on the coastline near Old Mombasa town. Learn about its history as a battleground between 1631 and 1895, changing hands nine times before becoming a British prison. In 2011, it was declared a UNESCO World Heritage Site. Next, experience the Likoni Ferry, which connects Mombasa island to the mainland suburb of Likoni, offering breathtaking views of Mombasa Port. After lunch, visit Mamba Village, Africa's largest crocodile farm with over 10,000 crocodiles, including 'Big Daddy,' the oldest crocodile. The tour begins with a video presentation about reptile species and crocodile behavior, followed by a comprehensive tour of the farm to observe crocodiles of all sizes, from hatchlings to adults.",
      },
      {
        day: "Day 8",
        title: "Visit Wild Waters for a half day full-packed activities",
        description:
          "After breakfast, spend half a day at Wild Waters in Nyali, Mombasa, a family entertainment park featuring exhilarating slides, games, rides, and pools for all ages. The park blends the thrill of an amusement park with the refreshing experience of a water park. After lunch, enjoy free time for shopping at supermarkets and Marikiti market, where students can purchase souvenirs like crafts, shirts, and bangles. Return to accommodation for dinner and overnight stay, preparing for the journey back to Nairobi.",
      },
      {
        day: "Day 9",
        title: "Drive from Mombasa to Nairobi",
        description:
          "After a relaxed breakfast, begin the road journey back to Nairobi. Travel through Tsavo East and Tsavo West national parks, with opportunities to spot zebras grazing by the roadside. Stop for lunch at Tsavo before continuing to Nairobi, arriving in the evening. Dinner and overnight stay at accommodation in Nairobi.",
      },
      {
        day: "Day 10",
        title: "Back to Uganda",
        description:
          "Wake up at sunrise and begin the journey back to Kampala. Stop for breakfast in Nakuru. Arrive at the Busia border by 1:30 PM to clear immigration and exit Kenya. Have lunch at the Busia border before continuing to Kampala. Arrive at the designated drop-off point (Shoprite Lugogo) by 6:00 PM, marking the end of the 10-day Kenya Study Tour.",
      },
    ],
    inclusions: [
      "Transportation in comfortable buses",
      "9 nights accommodation in hostels (separate facilities for boys and girls)",
      "All meals as specified in the itinerary",
      "Madaraka Express train ticket from Nairobi to Mombasa",
      "All entrance fees to attractions mentioned in the itinerary",
      "English-speaking guides throughout the tour",
      "Border crossing assistance",
      "Bottled water during the journey",
    ],
    exclusions: [
      "International travel insurance",
      "Personal expenses and souvenirs",
      "Visa fees and temporary travel documents (if required)",
      "Activities not mentioned in the itinerary",
      "Tips and gratuities",
    ],
  },
  {
    id: "uganda-cultural-tour-7-days",
    title: "7 Days Uganda Cultural Tour",
    slug: "uganda-cultural-tour-7-days",
    description:
      "Embark on a journey that transcends time, immersing yourself in the rich traditions and unique customs of Uganda's diverse tribes. This 7-day cultural safari introduces you to the heart of Uganda, where you'll engage with communities that have preserved their ancestral ways of life across three remarkable tribes.",
    location: "Uganda (Multiple Locations)",
    category: "Cultural Tours",
    duration: "7 Days / 6 Nights",
    image: "/cultural_tour4.jpg?height=600&width=800",
    gallery: [
      "/cultural_tour2.jpg?height=400&width=600",
      "/cultural_tour3.jpg?height=400&width=600",
      "/cultural_tour1.jpg?height=400&width=600",
    ],
    price: 2330,
    currency: "USD",
    priceInfo: "Per person. Excludes international flights.",
    depositRequired: "30% deposit required for confirmation",
    rating: 4.9,
    reviews: 28,
    highlights: [
      "Day 1: Kampala City Tour - Cultural and Traditional Sites",
      "Day 2: Entanda Cultural Community",
      "Day 3: Transfer to Mgahinga National Park",
      "Days 4 & 5: Time with the Batwa People",
      "Day 6: Isunga Cultural Community",
      "Day 7: Departure",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Kampala City Tour - Cultural and Traditional Sites",
        description:
          "Welcome to Uganda! Our representative will greet you and brief you on the exciting journey ahead. After some refreshment at your lodge, we'll explore the vibrant city of Kampala. Highlights include a visit to the Gadhafi Mosque, where you can view Kampala's foundational 7 hills, and Kabaka's Palace, home to Amin's former torture chambers. The day concludes with a visit to Owino Market and the Uganda Museum. Overnight at your selected accommodation in Kampala.",
      },
      {
        day: "Day 2",
        title: "Entanda Cultural Community",
        description:
          "After breakfast, enjoy a scenic 1-2 hour drive to Entanda Cultural Community. The route offers stunning views of African homesteads, bustling towns, and lush landscapes. Upon arrival, receive a warm welcome from the locals and embark on a forest walk to learn about traditional Buganda survival techniques. Return to the village center for lunch and a cultural lesson on marriage preparation. Overnight at your selected accommodation in Kampala.",
      },
      {
        day: "Day 3",
        title: "Transfer to Mgahinga National Park",
        description:
          "Start your day with a hearty breakfast before embarking on a 9-10 hour journey to Mgahinga Gorilla National Park in southwestern Uganda. Along the way, enjoy the sight of lush plantations, Ankole long-horned cattle, and diverse landscapes. Arrive in the evening to the serene surroundings of your lodge near Mgahinga National Park for dinner and overnight stay.",
      },
      {
        day: "Day 4",
        title: "Time with the Batwa People - Day 1",
        description:
          "After breakfast at your lodge, spend the day with the Batwa people, learning traditional skills such as fire-making, hunting, and using medicinal plants. The Batwa, former forest dwellers, will share their rich cultural heritage and demonstrate their deep connection to the forest. Enjoy lunch with the local community and return to your lodge for dinner and overnight stay.",
      },
      {
        day: "Day 5",
        title: "Time with the Batwa People - Day 2",
        description:
          "Continue your immersive experience with the Batwa people. Today's activities might include traditional crafts, music, dance, and storytelling sessions that reveal the spiritual beliefs and social structures of this unique community. This extended time allows for deeper cultural exchange and understanding. Return to your lodge for dinner and overnight stay.",
      },
      {
        day: "Day 6",
        title: "Isunga Cultural Community",
        description:
          "After breakfast, journey to the Isunga Cultural Community. Here, you'll participate in tea harvesting, visit the cold springs, and enjoy lively dances and stories shared by the locals. This community offers insights into agricultural practices and daily life in rural Uganda. Overnight at your selected accommodation near Isunga.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description:
          "With your cultural safari adventure complete, enjoy breakfast before a 5-6 hour transfer to Entebbe International Airport. En route, stop at the equator for a photo opportunity and a demonstration of this unique geographical landmark, where you can observe the Coriolis effect. Arrive at the airport in time for your departure flight, marking the end of your cultural journey through Uganda.",
      },
    ],
    inclusions: [
      "All activities mentioned in the itinerary",
      "Complimentary city tour (depending on arrival time)",
      "6 nights of accommodation with Full Board",
      "Transportation in a Safari Vehicle",
      "Full-time English-speaking driver-guide",
      "Scenic Viewing and Park Entry Fees",
      "All government taxes and levies",
    ],
    exclusions: [
      "Optional activities",
      "Visas",
      "Flight tickets",
      "Personal/medical insurance",
      "Personal expenses (e.g., alcohol, cigarettes, tips, laundry services, airfares, extra accommodation)",
    ],
  },  
]

