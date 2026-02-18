import { motion } from "framer-motion"
import React from "react"
import { Link } from "react-router"
import RightNav from "./right-nav"

const buildings = [
  {
    id: "m12",
    name: "Building M12",
    status: "Available Units",
    brief:
      "The flagship of the Mara collection. Defying gravity with cantilevered balconies and panoramic sky views.",
    features: [
      "Triple-Height Ceilings",
      "Private Sky-Deck",
      "Acoustic Insulation Max",
    ],
    img: "/images/buildings/glass-tower.jpg",
  },
  {
    id: "m11",
    name: "Building M11",
    status: "Available Units",
    brief:
      "Classic elegance meeting urban pulse. Large floor-to-ceiling windows capturing the golden hour daily.",
    features: [
      "Floor-to-Ceiling Glass",
      "Chef's Kitchen",
      "Smart Home Integration",
    ],
    img: "/images/buildings/city-skyline.jpg",
  },
  {
    id: "m10",
    name: "Building M10",
    status: "Available Units",
    brief:
      "A sanctuary built around a vertical garden. Perfect for those who seek tranquility amidst the city.",
    features: [
      "Vertical Garden Balcony",
      "Open Concept Living",
      "Rainwater Filtration",
    ],
    img: "/images/buildings/vertical-forest.jpg",
  },
  {
    id: "m9",
    name: "Building M9",
    status: "Sold Out",
    brief:
      "Exclusive residences featuring double-height ceilings and private elevator lobbies for every unit.",
    features: [
      "Private Elevator Access",
      "Wine Cellar Room",
      "Automated Shading",
    ],
    img: "/images/buildings/luxury-residence.jpg",
  },
  {
    id: "m8",
    name: "Building M8",
    status: "Sold Out",
    brief:
      "Low-rise boutique living with expansive private terraces and direct access to the Mara Botanical Walk.",
    features: [
      "Private Terrace Space",
      "Botanical Walk Access",
      "Outdoor Fireplace",
    ],
    img: "/images/buildings/low-rise-terrace.jpg",
  },
  {
    id: "m7",
    name: "Building M7",
    status: "Sold Out",
    brief:
      "Integrated into the cultural heart of the complex, featuring direct connections to fine dining.",
    features: ["Concierge Service", "Direct Plaza Access", "Marble Finishings"],
    img: "/images/buildings/hotel-exterior.jpg",
  },
  {
    id: "m6",
    name: "Building M6",
    status: "Sold Out",
    brief:
      "Uninterrupted views of the Mara Botanical Gardens with a focus on natural materials.",
    features: ["Parkside Views", "Sustainable Timber", "Air Purification"],
    img: "/images/buildings/resort-pool.jpg",
  },
  {
    id: "m5",
    name: "Building M5",
    status: "Sold Out",
    brief:
      "Boutique apartments directly overlooking the Mara River with private jetty access.",
    features: ["Riverfront Access", "Private Jetty", "Floor Heating"],
    img: "/images/buildings/apartment-tower-dusk.jpg",
  },
]

const ApartmentsPage: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen bg-white pt-24">
      <RightNav activeId="" onSelect={scrollTo} />

      <div className="mx-auto mb-40 max-w-7xl px-8 pt-32">
        <span className="mb-6 block text-[10px] font-bold text-neutral-400 uppercase">
          Architecture / Collection
        </span>
        <h1 className="mb-12 font-serif text-6xl leading-none md:text-9xl">
          The Buildings.
        </h1>
        <p className="max-w-xl text-xl leading-relaxed font-light text-neutral-500">
          An eight-tower masterpiece designed as a single, breathing entity.
          Explore the unique signatures of the Mara skyline.
        </p>
      </div>

      <div className="flex flex-col">
        {buildings.map((b, i) => (
          <section
            id={b.id}
            key={b.id}
            className={`border-t border-neutral-100 px-8 py-40 ${i % 2 === 1 ? "bg-[#F9F9F7]" : "bg-white"}`}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-24 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="aspect-[4/3] overflow-hidden rounded-sm bg-neutral-100 shadow-2xl"
              >
                <img
                  src={b.img}
                  alt={b.name}
                  className="h-full w-full object-cover transition-all duration-1000 hover:scale-105"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <div className="mb-6 flex items-center space-x-4">
                  <span
                    className={`rounded-full border px-4 py-1.5 text-[10px] font-bold uppercase ${b.status === "Available Units" ? "border-green-200 bg-green-50 text-green-600" : "border-neutral-200 bg-neutral-50 text-neutral-400"}`}
                  >
                    {b.status}
                  </span>
                </div>

                <h2 className="mb-8 font-serif text-5xl md:text-7xl">
                  {b.name}
                </h2>

                <p className="mb-10 max-w-lg text-xl leading-relaxed font-light text-neutral-500">
                  {b.brief}
                </p>

                <div className="mb-12">
                  <h4 className="mb-6 text-[10px] font-bold text-neutral-400 uppercase">
                    Core Features
                  </h4>
                  <ul className="space-y-4">
                    {b.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-4 text-neutral-800"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-black/20" />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/apartments/${b.id}`}
                  className="group inline-flex items-center space-x-6 transition-all hover:opacity-60"
                >
                  <span className="border-b border-black/20 pb-2 text-[10px] font-bold uppercase transition-all group-hover:border-black">
                    Find Apartments
                  </span>
                  <div className="h-[1px] w-12 bg-black/20 transition-all duration-500 group-hover:w-20 group-hover:bg-black" />
                </Link>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default ApartmentsPage
