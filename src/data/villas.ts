export type VillaStatus = "active" | "upcoming";

export type Villa = {
  id: string;
  name: string;
  slug: string;
  location: string;
  shortDescription: string;
  longDescription: string;
  amenities: string[];
  tags: string[];
  gallery: string[];
  heroImage: string;
  priceRange: string;
  capacity: string;
  googleMapLink: string;
  mapEmbed: string;
  bedrooms: string;
  bathrooms: string;
  beds: string;
  distanceToBeach: string;
  checkIn: string;
  checkOut: string;
  layout: string[];
  locationHighlights: string[];
  nearbyAttractions: string[];
  houseRules: string[];
  status: VillaStatus;
};

const img = (id: string, width: number) =>
  `https://unsplash.com/photos/${id}/download?force=true&w=${width}`;

export const villas: Villa[] = [
  {
    id: "marina",
    name: "Tropical Marina",
    slug: "tropical-marina",
    location:
      "Puthenthope Beachside, Puthenthope, Thiruvananthapuram, Kerala 695586",
    shortDescription:
      "Cozy beachfront homestay just 100 meters from Puthenthope Beach with ocean views, modern comforts, and calm village charm.",
    longDescription:
      "Tropical Marina is a beachside retreat located a few steps from the pristine shores of Puthenthope Beach in Thiruvananthapuram, Kerala. Guests wake up to the sound of the waves and enjoy a peaceful coastal village atmosphere combined with modern comforts. The homestay is ideal for couples, families, and small groups looking for a private escape by the Arabian Sea.\n\nThe villa includes two comfortable bedrooms, two bathrooms, a welcoming living space, private balconies with sea views, and a rooftop terrace for sunrise coffee or sunset breezes. With easy beach access, high-speed Wi-Fi, and optional homemade Kerala-style meals, Tropical Marina offers a homely yet premium stay.",
    amenities: [
      "Beachfront location (100 m to the shore)",
      "2 bedrooms, 2 bathrooms (entire home)",
      "Private balconies with sea views",
      "Rooftop terrace / chill-out area",
      "Free high-speed Wi-Fi",
      "Homemade Kerala-style meals on request",
      "Modern furnished interiors",
      "Suitable for small events and gatherings",
    ],
    tags: ["Beachfront", "Sea view", "Family", "Rooftop"],
    gallery: [img("Cx-EbkzjSx8", 1400), img("zNAM7ORGV-g", 1400), img("pt0nGH-NvoA", 1400)],
    heroImage: img("IQ32MAKKVFI", 1800),
    priceRange: "Premium",
    capacity: "Up to 6 guests (2 bedrooms, 2 bathrooms)",
    googleMapLink: "https://maps.app.goo.gl/dyVdDn679vQQ6R4d6",
    mapEmbed:
      "https://maps.google.com/maps?q=Puthenthope%20Beach&t=&z=14&ie=UTF8&iwloc=&output=embed",
    bedrooms: "2 bedrooms",
    bathrooms: "2 bathrooms",
    beds: "2 beds",
    distanceToBeach: "100 m walk to Puthenthope Beach",
    checkIn: "By enquiry",
    checkOut: "By enquiry",
    layout: [
      "Entire villa booked as a single unit",
      "Two well-furnished bedrooms",
      "Two bathrooms",
      "Living space for families and small groups",
      "Private balconies with sea views",
      "Rooftop terrace for sunrise and sunset views",
    ],
    locationHighlights: [
      "Beachside village setting in Puthenthope",
      "Easy access to the coastal road",
      "Ideal for coastal walks and quiet sunsets",
    ],
    nearbyAttractions: [
      "Puthenthope Beach (100 m)",
      "Coastal village road and seaside cafes",
    ],
    houseRules: [
      "Check-in by prior confirmation",
      "Non-smoking rooms",
      "Quiet hours after 10 PM",
    ],
    status: "active",
  },
  {
    id: "villa",
    name: "Tropical Villa",
    slug: "tropical-villa",
    location:
      "Puthenthope / Vettutura, near St. Andrews Beach, Thiruvananthapuram, Kerala 695586",
    shortDescription:
      "A cozy beachside villa just a short walk from St. Andrews Beach, offering privacy, parking, and modern comforts near Trivandrum city.",
    longDescription:
      "Tropical Villa is located in the peaceful coastal village of Puthenthope / Vettutura, about a 500 m walk from St. Andrews Beach. This private, air-conditioned villa features a spacious terrace, garden views, a fully equipped kitchen, washing machine, and flat-screen TV, making it ideal for short or extended stays.\n\nGuests enjoy free Wi-Fi, private parking, and pet-friendly stays on request. The villa is around 14-15 km from Thiruvananthapuram International Airport and within easy reach of city landmarks including Sree Padmanabhaswamy Temple, Napier Museum, Karikkakom Temple, and Anjengo Fort.",
    amenities: [
      "Private entire villa stay",
      "Air conditioning throughout",
      "Fully equipped kitchen",
      "Washing machine",
      "Flat-screen TV",
      "Private terrace and balcony with garden view",
      "Free Wi-Fi",
      "Free private parking",
      "Pet-friendly on request",
      "Non-smoking property",
    ],
    tags: ["Beach access", "Family", "Pet-friendly", "Terrace"],
    gallery: [img("YzWmXSlTjWg", 1400), img("dgTzAvblPw4", 1400), img("DcF93z79Vnc", 1400)],
    heroImage: img("6OKmxpQfgwk", 1800),
    priceRange: "Signature",
    capacity: "Up to 6 adults (1-2 bedrooms, 2 bathrooms)",
    googleMapLink: "https://maps.google.com/?q=St.%20Andrews%20Beach%20Puthenthope",
    mapEmbed:
      "https://maps.google.com/maps?q=St.%20Andrews%20Beach%20Puthenthope&t=&z=13&ie=UTF8&iwloc=&output=embed",
    bedrooms: "1-2 bedrooms",
    bathrooms: "2 bathrooms",
    beds: "1 queen bed",
    distanceToBeach: "500 m walk to St. Andrews Beach",
    checkIn: "1:00 PM - 11:00 PM",
    checkOut: "11:00 AM",
    layout: [
      "Entire private villa",
      "Air-conditioned bedroom(s)",
      "Two bathrooms",
      "Spacious terrace and garden views",
      "Fully equipped kitchen and living space",
    ],
    locationHighlights: [
      "Quiet coastal village of Puthenthope / Vettutura",
      "Short walk to St. Andrews Beach",
      "Convenient drive to Trivandrum city",
    ],
    nearbyAttractions: [
      "St. Andrews Beach (500 m)",
      "Karikkakom Temple (13-14 km)",
      "Anjengo Fort (12-13 km)",
      "Sree Padmanabhaswamy Temple (18 km)",
      "Napier Museum (19 km)",
    ],
    houseRules: [
      "Check-in: 1:00 PM - 11:00 PM",
      "Check-out: 11:00 AM",
      "Non-smoking property",
      "Pets allowed on request",
    ],
    status: "active",
  },
  {
    id: "oasis",
    name: "Tropical Oasis",
    slug: "tropical-oasis",
    location:
      "133 (Tropical Oasis), Veli–Perumathura Road, Puthenthope, Thiruvananthapuram, Kerala, India",
    shortDescription:
      "A 3-bedroom beachside villa on Veli–Perumathura Road in Puthenthope with easy access to Puthenthope Beach and nearby attractions.",
    longDescription:
      "Tropical Oasis is a private villa stay set in the beachside village of Puthenthope on the Veli–Perumathura coastal road. The home offers three bedrooms, shared kitchen facilities, a lounge and TV room, garden area, and terrace access — ideal for families or small groups seeking a relaxed coastal escape near Thiruvananthapuram.\n\nGuests enjoy easy beach access, air-conditioned rooms, free Wi-Fi, and on-site parking with 24-hour reception and security. The location makes it convenient for quick trips to Thumba Beach, Magic Planet, VSSC Space Museum, and Madavoorpara Siva Temple, while the airport is within a short drive.",
    amenities: [
      "3 bedrooms (entire villa)",
      "Shared kitchen for self-cooking",
      "Lounge / TV room and bar-style seating",
      "Garden area and terrace",
      "Air-conditioned rooms",
      "Free Wi-Fi",
      "Parking on site",
      "24-hour reception and security",
      "Non-smoking rooms",
    ],
    tags: ["Beach access", "Family", "Garden", "Kitchen"],
    gallery: [img("HNSZt4KGpNk", 1400), img("Cx-EbkzjSx8", 1400)],
    heroImage: img("vsGPZKjwU74", 1800),
    priceRange: "By enquiry",
    capacity: "Up to 6 guests (3 bedrooms)",
    googleMapLink: "https://maps.google.com/?q=Puthenthope",
    mapEmbed:
      "https://maps.google.com/maps?q=Puthenthope&t=&z=13&ie=UTF8&iwloc=&output=embed",
    bedrooms: "3 bedrooms",
    bathrooms: "2 bathrooms",
    beds: "3 beds",
    distanceToBeach: "Beach access via coastal road",
    checkIn: "12:00 PM - 11:59 PM",
    checkOut: "11:00 AM",
    layout: [
      "Three bedrooms for families and small groups",
      "Shared kitchen for self-cooking",
      "Lounge and TV room",
      "Garden area and terrace",
    ],
    locationHighlights: [
      "Veli-Perumathura coastal road location",
      "Short drive to Thumba Beach",
      "Easy access to city attractions",
    ],
    nearbyAttractions: [
      "Thumba Beach (approx. 2.8 km)",
      "VSSC Space Museum (10 min drive)",
      "Magic Planet Theme Park (10 min drive)",
      "Madavoorpara Siva Temple (15 min drive)",
      "Thiruvananthapuram International Airport (17-20 km)",
    ],
    houseRules: [
      "Check-in: 12:00 PM - 11:59 PM",
      "Check-out: 11:00 AM",
      "Non-smoking rooms",
    ],
    status: "active",
  },
  {
    id: "alma",
    name: "Tropical Alma",
    slug: "tropical-alma",
    location:
      "Puthenthope coastal area, Thiruvananthapuram district, Kerala, India",
    shortDescription:
      "A peaceful beachfront villa in Puthenthope, just steps from a serene beach in coastal Thiruvananthapuram.",
    longDescription:
      "Tropical Alma is a tranquil beachfront home in the Puthenthope coastal area of Thiruvananthapuram. The villa opens to a serene beach and offers multiple bedrooms, spacious living areas, and private outdoor space with a pool and garden ambience - ideal for family stays and group getaways.\n\nGuests enjoy air-conditioned interiors, high-speed Wi-Fi, a fully equipped kitchen, washing machine, and entertainment setup, along with free private parking. The location keeps you close to the shoreline while staying tucked into a quiet coastal village atmosphere.",
    amenities: [
      "Direct beach access",
      "High-speed Wi-Fi",
      "Air-conditioned interiors",
      "Fully equipped kitchen",
      "Washing machine",
      "TV / entertainment setup",
      "Free private parking",
      "Outdoor pool and tropical garden",
    ],
    tags: ["Beachfront", "Pool", "Family", "Garden"],
    gallery: [img("pt0nGH-NvoA", 1400), img("YzWmXSlTjWg", 1400)],
    heroImage: img("zNAM7ORGV-g", 1800),
    priceRange: "By enquiry",
    capacity: "Family-friendly stay (multiple bedrooms)",
    googleMapLink: "https://maps.google.com/?q=Puthenthope",
    mapEmbed:
      "https://maps.google.com/maps?q=Puthenthope&t=&z=13&ie=UTF8&iwloc=&output=embed",
    bedrooms: "Multiple bedrooms",
    bathrooms: "Multiple bathrooms",
    beds: "Multiple beds",
    distanceToBeach: "Steps to the beach",
    checkIn: "By enquiry",
    checkOut: "By enquiry",
    layout: [
      "Entire beachfront villa for private stays",
      "Multiple bedrooms and spacious living areas",
      "Private outdoor space with pool and garden",
      "Family-friendly layout for groups",
    ],
    locationHighlights: [
      "Beachfront setting in Puthenthope",
      "Quiet coastal village atmosphere",
      "Easy access to regional beaches and attractions",
    ],
    nearbyAttractions: ["St. Andrews Beach", "Puthenthope coastline"],
    houseRules: ["Details shared on booking"],
    status: "active",
  },
  {
    id: "ferin",
    name: "Tropical Ferin",
    slug: "tropical-ferin",
    location:
      "Puthenthope (Vettuthura area), near St. Andrews Beach, Thiruvananthapuram, Kerala 695586, India",
    shortDescription:
      "A private tropical-style villa in Puthenthope offering a fully equipped home for up to 5-6 guests with easy access to St. Andrews Beach.",
    longDescription:
      "Tropical Ferin is a private holiday home in the coastal village of Puthenthope near St. Andrews Beach. Designed for families and small groups, the villa offers 2-3 bedrooms, 2 bathrooms, and a relaxed layout with a spacious terrace and garden-style outdoor sitting areas.\n\nGuests enjoy air-conditioned rooms, free Wi-Fi, a fully equipped kitchen, and free private parking. The home is reserved for one group only, ensuring privacy and a quiet seaside escape, while remaining within easy reach of Thiruvananthapuram city.",
    amenities: [
      "Air-conditioned rooms",
      "Fully equipped kitchen",
      "Spacious terrace",
      "Free Wi-Fi",
      "Free private parking",
      "Garden-style outdoor seating",
      "Private entire home",
    ],
    tags: ["Beach access", "Family", "Terrace", "Private"],
    gallery: [img("6OKmxpQfgwk", 1400), img("vsGPZKjwU74", 1400)],
    heroImage: img("DcF93z79Vnc", 1800),
    priceRange: "By enquiry",
    capacity: "Up to 5-6 guests",
    googleMapLink: "https://maps.google.com/?q=St.%20Andrews%20Beach%20Puthenthope",
    mapEmbed:
      "https://maps.google.com/maps?q=St.%20Andrews%20Beach%20Puthenthope&t=&z=13&ie=UTF8&iwloc=&output=embed",
    bedrooms: "2-3 bedrooms",
    bathrooms: "2 bathrooms",
    beds: "2-3 beds",
    distanceToBeach: "Short walk to St. Andrews Beach",
    checkIn: "By enquiry",
    checkOut: "By enquiry",
    layout: [
      "Entire villa reserved for one group",
      "2-3 bedrooms with air conditioning",
      "Living space and fully equipped kitchen",
      "Spacious terrace and garden-style outdoor area",
    ],
    locationHighlights: [
      "Quiet coastal village of Puthenthope / Vettuthura",
      "Near St. Andrews Beach",
      "Approx. 16-17 km from Thiruvananthapuram city centre",
    ],
    nearbyAttractions: [
      "St. Andrews Beach",
      "Puthenthope coastline",
      "Thiruvananthapuram city centre (approx. 16-17 km)",
    ],
    houseRules: ["Details shared on booking"],
    status: "active",
  },
];

export const featuredVillas = villas.filter((villa) => villa.status === "active");

const normalizeSlug = (slug?: string | string[]) => {
  if (!slug) return "";
  const value = Array.isArray(slug) ? slug[0] : slug;
  return value.trim().toLowerCase().replace(/\/+$/, "");
};

export const getVillaBySlug = (slug?: string | string[]) => {
  const normalized = normalizeSlug(slug);
  return villas.find((villa) => normalizeSlug(villa.slug) === normalized);
};
