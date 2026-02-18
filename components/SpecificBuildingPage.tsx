import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import React from "react"
import { Link, useParams } from "react-router"

const BUILDINGS_DATA: Record<string, any> = {
  m12: {
    name: "Building M12",
    heroImg:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    tagline: "Defying gravity. Defining sky.",
    sellText:
      "Building M12 stands as the pinnacle of the Mara collection. With its iconic cantilevered silhouette, it offers residents a life suspended between the clouds and the city pulse.",
    sellImg:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop",
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
    heroImg:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2670&auto=format&fit=crop",
    tagline: "The Golden Ratio of Living.",
    sellText:
      "Elegance redefined through perfect proportions. Building M11 captures the golden hour like no other, flooding every residence with warm, natural brilliance.",
    sellImg:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop",
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
    heroImg:
      "https://images.unsplash.com/photo-1449156003053-c3ca24237f81?q=80&w=2670&auto=format&fit=crop",
    tagline: "Nature, Verticalized.",
    sellText:
      "A living, breathing structure. Building M10 integrates lush vertical forests into its core, providing a permanent connection to the botanical world.",
    sellImg:
      "https://images.unsplash.com/photo-1542601906970-14197b4c1970?q=80&w=2400&auto=format&fit=crop",
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
  heroImg:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
  tagline: "Timeless Urban Excellence.",
  sellText:
    "Crafted with the signature Mara commitment to silence and precision, this building offers an unparalleled urban sanctuary.",
  sellImg:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2671&auto=format&fit=crop",
  },
  {
    id: "1br-off",
    name: "1 Bedroom + Office",
    size: "920 SQFT",
    price: "From $1.5M",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2560&auto=format&fit=crop",
  },
  {
    id: "2br",
    name: "2 Bedrooms",
    size: "1,250 SQFT",
    price: "From $2.1M",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "2br-off",
    name: "2 Bedrooms + Office",
    size: "1,480 SQFT",
    price: "From $2.8M",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: "3br",
    name: "3 Bedrooms",
    size: "1,950 SQFT",
    price: "From $3.9M",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2570&auto=format&fit=crop",
  },
  {
    id: "3br-off",
    name: "3 Bedrooms + Office",
    size: "2,400 SQFT",
    price: "From $5.2M",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop",
  },
]

const SpecificBuildingPage: React.FC = () => {
  const { buildingId } = useParams<{ buildingId: string }>()
  const data = BUILDINGS_DATA[buildingId!] || DEFAULT_DATA(buildingId!)

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <Link
          to="/apartments"
          className="group inline-flex items-center space-x-3 text-[10px] font-bold tracking-[0.4em] uppercase transition-opacity hover:opacity-50"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Residences</span>
        </Link>
      </div>

      <section className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden">
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
            className="mb-6 block text-[10px] font-bold tracking-[0.8em] uppercase"
          >
            The Collection / {data.name}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-6xl leading-none tracking-tighter md:text-9xl"
          >
            {data.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-xl font-light tracking-wide md:text-3xl"
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
            <span className="mb-8 block text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase">
              The Vision
            </span>
            <h2 className="mb-12 font-serif text-5xl leading-tight tracking-tighter md:text-7xl">
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
                    className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-[10px] font-bold tracking-widest text-neutral-500 uppercase"
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
                    className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-[10px] font-bold tracking-widest text-neutral-500 uppercase"
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
          <h2 className="mb-6 font-serif text-5xl tracking-tighter">
            Available Residences
          </h2>
          <p className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 uppercase">
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
                  <h4 className="mb-2 font-serif text-2xl tracking-tight">
                    {apt.name}
                  </h4>
                  <p className="mb-10 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                    {apt.size}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-neutral-50 pt-8">
                    <span className="text-xl font-light tracking-tight">
                      {apt.price}
                    </span>
                    <button className="border-b border-black pb-1 text-[10px] font-bold tracking-[0.2em] uppercase transition-all group-hover:opacity-50">
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
        <h2 className="mb-12 font-serif text-4xl tracking-tight md:text-6xl">
          Experience {data.name}
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-xl leading-relaxed font-light opacity-60">
          Limited opportunities remain to join this exclusive vertical
          community. Schedule a private viewing with our lead advisors.
        </p>
        <button className="border border-white/40 px-16 py-7 text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:bg-white hover:text-black">
          Book Private Tour
        </button>
      </section>
    </div>
  )
}

export default SpecificBuildingPage
