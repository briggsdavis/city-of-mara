import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import React from "react"
import { Link, useParams } from "react-router"

const BUILDINGS_DATA: Record<string, any> = {
  m12: {
    name: "Building M12",
    heroImg: "/images/buildings/glass-tower.jpg",
    tagline: "Defying gravity. Defining sky.",
    sellText:
      "Building M12 stands as the pinnacle of the Mara collection. With its iconic cantilevered silhouette, it offers residents a life suspended between the clouds and the city pulse.",
    sellImg: "/images/interiors/open-office-interior.jpg",
    locationPills: [
      "North Wing Apex",
      "Sky-Taxi Accessible",
      "Financial District Nexus",
      "Elevated Privacy",
    ],
    amenityPills: [
      "Infinity Sky Pool",
      "Private Cinema M12",
      "Helipad Access",
      "24/7 Butler Service",
      "Oxygenated Gym",
      "Climate Vaults",
    ],
  },
  m11: {
    name: "Building M11",
    heroImg: "/images/buildings/city-skyline.jpg",
    tagline: "The Golden Ratio of Living.",
    sellText:
      "Elegance redefined through perfect proportions. Building M11 captures the golden hour like no other, flooding every residence with warm, natural brilliance.",
    sellImg: "/images/buildings/apartment-tower-dusk.jpg",
    locationPills: [
      "Central Plaza Side",
      "Golden Hour Facing",
      "Art District Core",
      "Transit Friendly",
    ],
    amenityPills: [
      "Library of Silence",
      "Tea Ceremony Room",
      "Valet Parking",
      "Concierge Atelier",
      "Zen Garden",
      "Sauna World",
    ],
  },
  m10: {
    name: "Building M10",
    heroImg: "/images/buildings/vertical-forest.jpg",
    tagline: "Nature, Verticalized.",
    sellText:
      "A living, breathing structure. Building M10 integrates lush vertical forests into its core, providing a permanent connection to the botanical world.",
    sellImg: "/images/lifestyle/botanical-garden.jpg",
    locationPills: [
      "Botanical Pocket",
      "Eco-Hub Central",
      "River Breeze Path",
      "Quiet Zone",
    ],
    amenityPills: [
      "Hydrotherapy Spa",
      "Community Greenhouse",
      "Filtered Air Intake",
      "Pet Sanctuary",
      "Yoga Atrium",
      "Organic Cafe",
    ],
  },
}

const DEFAULT_DATA = (id: string) => ({
  name: `Building ${id.toUpperCase()}`,
  heroImg: "/images/buildings/glass-tower.jpg",
  tagline: "Timeless Urban Excellence.",
  sellText:
    "Crafted with the signature Mara commitment to silence and precision, this building offers an unparalleled urban sanctuary.",
  sellImg: "/images/interiors/penthouse-lounge.jpg",
  locationPills: [
    "District Hub",
    "Heritage View",
    "Culture Nexus",
    "Secure Perimeter",
  ],
  amenityPills: [
    "Concierge 24/7",
    "Fitness Studio",
    "Private Lounge",
    "Secure Storage",
    "Meeting Hub",
    "Wine Cellar",
  ],
})

const apartmentTypes = [
  {
    id: "1br",
    name: "1 Bedroom",
    size: "780 SQFT",
    price: "From $1.2M",
    img: "/images/interiors/bedroom-1br.jpg",
  },
  {
    id: "1br-off",
    name: "1 Bedroom + Office",
    size: "920 SQFT",
    price: "From $1.5M",
    img: "/images/interiors/bedroom-office.jpg",
  },
  {
    id: "2br",
    name: "2 Bedrooms",
    size: "1,250 SQFT",
    price: "From $2.1M",
    img: "/images/interiors/living-room-2br.jpg",
  },
  {
    id: "2br-off",
    name: "2 Bedrooms + Office",
    size: "1,480 SQFT",
    price: "From $2.8M",
    img: "/images/interiors/open-plan.jpg",
  },
  {
    id: "3br",
    name: "3 Bedrooms",
    size: "1,950 SQFT",
    price: "From $3.9M",
    img: "/images/interiors/bedroom-suite.jpg",
  },
  {
    id: "3br-off",
    name: "3 Bedrooms + Office",
    size: "2,400 SQFT",
    price: "From $5.2M",
    img: "/images/interiors/penthouse-lounge.jpg",
  },
]

const SpecificBuildingPage: React.FC = () => {
  const { buildingId } = useParams<{ buildingId: string }>()
  const data = BUILDINGS_DATA[buildingId!] || DEFAULT_DATA(buildingId!)

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden">
        <Link
          to="/apartments"
          className="group absolute top-8 left-8 z-20 inline-flex items-center space-x-3 text-[10px] font-bold text-white uppercase transition-opacity hover:opacity-50"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Residences</span>
        </Link>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={data.heroImg}
            className="h-full w-full object-cover"
            alt={data.name}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        <div className="relative z-10 px-8 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 block text-[10px] font-bold uppercase"
          >
            The Collection / {data.name}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-6xl leading-none md:text-9xl"
          >
            {data.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-xl font-light md:text-3xl"
          >
            {data.tagline}
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-40">
        <div className="grid items-center gap-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="mb-8 block text-[10px] font-bold text-neutral-400 uppercase">
              The Vision
            </span>
            <h2 className="mb-12 font-serif text-5xl leading-tight md:text-7xl">
              Mastering <br />
              the Horizon.
            </h2>
            <p className="mb-12 text-xl leading-relaxed font-light text-neutral-600">
              {data.sellText}
            </p>
            <div className="h-[1px] w-20 bg-black/10" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 shadow-2xl"
          >
            <img
              src={data.sellImg}
              className="h-full w-full object-cover"
              alt="Interior Detail"
            />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-neutral-100 bg-neutral-50 py-40">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-24 md:grid-cols-2">
            <div>
              <h3 className="mb-12 font-serif text-2xl">Premier Location</h3>
              <div className="flex flex-wrap gap-4">
                {data.locationPills.map((pill: string) => (
                  <span
                    key={pill}
                    className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-[10px] font-bold text-neutral-500 uppercase"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-12 font-serif text-2xl">Dedicated Amenities</h3>
              <div className="flex flex-wrap gap-4">
                {data.amenityPills.map((pill: string) => (
                  <span
                    key={pill}
                    className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-[10px] font-bold text-neutral-500 uppercase"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-40">
        <div className="mb-24 text-center">
          <h2 className="mb-6 font-serif text-5xl">Available Residences</h2>
          <p className="text-[10px] font-bold text-neutral-400 uppercase">
            Curated Floorplans / Selection
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {apartmentTypes.map((apt, idx) => (
            <motion.div
              key={apt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <Link
                to={`/apartments/${buildingId}/${apt.id}`}
                className="inline-flex w-full cursor-pointer flex-col overflow-hidden border border-neutral-100 bg-white transition-all duration-500 hover:border-black"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={apt.img}
                    alt={apt.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h4 className="mb-2 font-serif text-2xl">{apt.name}</h4>
                  <p className="mb-10 text-[10px] font-bold text-neutral-400 uppercase">
                    {apt.size}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-neutral-50 pt-8">
                    <span className="text-xl font-light">{apt.price}</span>
                    <button className="border-b border-black pb-1 text-[10px] font-bold uppercase transition-all group-hover:opacity-50">
                      View Residence
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-black px-8 py-40 text-center text-white">
        <h2 className="mb-12 font-serif text-4xl md:text-6xl">
          Experience {data.name}
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-xl leading-relaxed font-light opacity-60">
          Limited opportunities remain to join this exclusive vertical
          community. Schedule a private viewing with our lead advisors.
        </p>
        <button className="border border-white/40 px-16 py-7 text-[10px] font-bold uppercase transition-all hover:bg-white hover:text-black">
          Book Private Tour
        </button>
      </section>
    </div>
  )
}

export default SpecificBuildingPage
