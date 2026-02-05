export type VillaStatus = "active" | "upcoming";

export type Villa = {
  id: string;
  name: string;
  slug: string;
  location: string;
  shortDescription: string;
  longDescription: string;
  amenities: string[];
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
    location: "Kerala, India",
    shortDescription:
      "A serene villa concept blending coastal calm with refined interiors.",
    longDescription:
      "Tropical Alma is envisioned as a serene coastal villa with signature interiors, curated art, and thoughtfully layered hospitality. Launch details will be shared soon.",
    amenities: ["Design-led interiors", "Coastal views", "Private dining"],
    gallery: [img("pt0nGH-NvoA", 1400), img("YzWmXSlTjWg", 1400)],
    heroImage: img("zNAM7ORGV-g", 1800),
    priceRange: "By enquiry",
    capacity: "By enquiry",
    googleMapLink: "https://maps.google.com/?q=Kerala",
    mapEmbed:
      "https://maps.google.com/maps?q=Kerala&t=&z=7&ie=UTF8&iwloc=&output=embed",
    bedrooms: "By enquiry",
    bathrooms: "By enquiry",
    beds: "By enquiry",
    distanceToBeach: "By enquiry",
    checkIn: "By enquiry",
    checkOut: "By enquiry",
    layout: [
      "Design-led interiors",
      "Private dining experiences",
      "Coastal calm with curated details",
    ],
    locationHighlights: [
      "Upcoming coastal villa concept",
      "Details announced soon",
    ],
    nearbyAttractions: ["Kerala coastal destinations"],
    houseRules: ["Details shared on booking"],
    status: "upcoming",
  },
  {
    id: "ferin",
    name: "Tropical Ferin",
    slug: "tropical-ferin",
    location: "Kerala, India",
    shortDescription:
      "An upcoming retreat inspired by lush forest edges and quiet luxury.",
    longDescription:
      "Tropical Ferin is a forthcoming villa nestled near nature trails and forest edges, created for guests seeking immersion in Kerala greenery and stillness.",
    amenities: ["Forest-edge setting", "Nature experiences", "Private verandas"],
    gallery: [img("6OKmxpQfgwk", 1400), img("vsGPZKjwU74", 1400)],
    heroImage: img("DcF93z79Vnc", 1800),
    priceRange: "By enquiry",
    capacity: "By enquiry",
    googleMapLink: "https://maps.google.com/?q=Kerala",
    mapEmbed:
      "https://maps.google.com/maps?q=Kerala&t=&z=7&ie=UTF8&iwloc=&output=embed",
    bedrooms: "By enquiry",
    bathrooms: "By enquiry",
    beds: "By enquiry",
    distanceToBeach: "By enquiry",
    checkIn: "By enquiry",
    checkOut: "By enquiry",
    layout: [
      "Forest-edge setting",
      "Nature-forward experiences",
      "Private verandas",
    ],
    locationHighlights: [
      "Upcoming retreat near nature trails",
      "Details announced soon",
    ],
    nearbyAttractions: ["Kerala nature escapes"],
    houseRules: ["Details shared on booking"],
    status: "upcoming",
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
