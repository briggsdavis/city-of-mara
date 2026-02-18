import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import React, { useRef, useState } from "react"
import { Link } from "react-router"

const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const benefits = [
    {
      title: "Connectivity",
      description:
        "Located at the nexus of the city's future transit hub. Mara residents enjoy a 10-minute commute to the financial center and exclusive access to the private air-taxi terminal.",
      img: "/images/lifestyle/transit.jpg",
      metric: "10 Min Transit",
    },
    {
      title: "Greenery",
      description:
        "Directly adjacent to the Mara Botanical Gardens, offering five acres of meticulously curated vertical forests and oxygen-rich walking trails at your doorstep.",
      img: "/images/lifestyle/botanical-garden.jpg",
      metric: "5-Acre Park",
    },
    {
      title: "Culture",
      description:
        "Immerse yourself in the Museum of Modern Silence and the Mara Opera House, both located within the complex's cultural plaza.",
      img: "/images/lifestyle/arts-culture.jpg",
      metric: "Cultural Plaza",
    },
    {
      title: "Privacy",
      description:
        "A gated ecosystem with multi-layered biometric security and dedicated private access roads, ensuring absolute discretion for our residents.",
      img: "/images/buildings/vertical-forest.jpg",
      metric: "Gated Hub",
    },
  ]

  return (
    <div className="mx-auto mb-60 max-w-7xl px-8">
      <div className="mb-24">
        <span className="mb-6 block text-[10px] font-bold text-neutral-400 uppercase">
          The District / 01
        </span>
        <h2 className="mb-10 font-serif text-5xl">
          Where Living <br />
          Breathes
        </h2>
        <p className="max-w-2xl text-xl leading-relaxed font-light text-gray-500">
          Mara is positioned in a unique topological pocket of the city where
          natural sound dampening and high elevation converge to create a
          permanent oasis of tranquility.
        </p>
      </div>

      <div className="flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col space-y-2 lg:w-1/3">
          {benefits.map((b, i) => (
            <button
              key={b.title}
              onClick={() => setActiveTab(i)}
              className={`group flex items-center justify-between border-b border-neutral-100 py-8 text-left transition-all ${activeTab === i ? "opacity-100" : "opacity-30 hover:opacity-60"}`}
            >
              <div>
                <span className="mb-2 block text-[9px] font-bold uppercase">
                  0{i + 1}
                </span>
                <span className="font-serif text-3xl">{b.title}</span>
              </div>
              <motion.div
                animate={{
                  x: activeTab === i ? 0 : -10,
                  opacity: activeTab === i ? 1 : 0,
                }}
                className="h-px w-8 bg-black"
              />
            </button>
          ))}
          <div className="pt-12">
            <Link
              to="/lifestyle"
              className="inline-block border-b border-black pb-2 text-[10px] font-bold uppercase transition-all hover:opacity-50"
            >
              Explore Lifestyle Page
            </Link>
          </div>
        </div>

        <div className="relative h-125 overflow-hidden rounded-sm bg-neutral-100 lg:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0"
            >
              <img
                src={benefits[activeTab].img}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute right-12 bottom-12 left-12 text-white">
                <div className="mb-6 flex items-center space-x-6">
                  <div className="h-px w-10 bg-white/40" />
                  <span className="text-[10px] font-bold uppercase opacity-60">
                    {benefits[activeTab].metric}
                  </span>
                </div>
                <p className="max-w-lg text-lg leading-relaxed font-light opacity-90">
                  {benefits[activeTab].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

const ExpandingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const width = useTransform(scrollYProgress, [0, 0.6], ["80%", "100%"])
  const height = useTransform(scrollYProgress, [0, 0.6], ["80vh", "100vh"])
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["40px", "0px"])
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={sectionRef} className="relative h-[150vh] w-full">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width,
            height,
            borderRadius,
            scale,
            opacity,
          }}
          className="relative overflow-hidden bg-neutral-900"
        >
          <img
            src="/images/lifestyle/city-landmark.jpg"
            alt="City of Mara Landmark"
            className="h-full w-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/60" />

          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
            }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white"
          >
            <h3 className="mb-6 font-serif text-4xl md:text-7xl">
              Unrivaled Horizon
            </h3>
            <p className="max-w-lg text-sm leading-relaxed font-light uppercase">
              Defining the skyline of tomorrow, one residence at a time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

const ScrollContent: React.FC = () => {
  const residences = [
    {
      id: 1,
      title: "The Penthouse Suite",
      price: "From $4.2M",
      img: "/images/interiors/penthouse-lounge.jpg",
    },
    {
      id: 2,
      title: "Sky Loft Residence",
      price: "From $1.8M",
      img: "/images/interiors/living-room-2br.jpg",
    },
    {
      id: 3,
      title: "Garden Duplex",
      price: "From $2.5M",
      img: "/images/interiors/bedroom-suite.jpg",
    },
    {
      id: 4,
      title: "Artist Atelier",
      price: "From $1.2M",
      img: "/images/interiors/open-plan.jpg",
    },
    {
      id: 5,
      title: "Observatory Loft",
      price: "From $3.1M",
      img: "/images/interiors/bedroom-office.jpg",
    },
    {
      id: 6,
      title: "Terrace Haven",
      price: "From $2.2M",
      img: "/images/interiors/terrace-kitchen.jpg",
    },
    {
      id: 7,
      title: "Linear Suite",
      price: "From $1.5M",
      img: "/images/interiors/linear-suite.jpg",
    },
    {
      id: 8,
      title: "Heritage Manor",
      price: "From $5.5M",
      img: "/images/interiors/living-room-luxury.jpg",
    },
  ]

  return (
    <div className="w-full overflow-x-hidden py-32">
      <div className="mx-auto mb-60 grid max-w-7xl items-center gap-20 px-8 md:grid-cols-2">
        <div className="aspect-4/5 overflow-hidden rounded-sm bg-gray-200 shadow-2xl">
          <img
            src="/images/buildings/low-rise-terrace.jpg"
            alt="Interior Lounge"
            className="h-full w-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h2 className="mb-10 font-serif text-5xl leading-tight">
            Mastering the Art <br />
            of Living
          </h2>
          <p className="mb-12 text-xl leading-relaxed font-light text-gray-600">
            City of Mara is more than an address. It is a curated lifestyle
            designed for those who seek the extraordinary. Every detail is
            chosen to provide absolute serenity.
          </p>
          <Link
            to="/about"
            className="inline-block border-b-2 border-black pb-2 text-xs font-bold uppercase transition-all hover:opacity-50"
          >
            Explore the Heritage
          </Link>
        </motion.div>
      </div>

      <LocationSection />

      <ExpandingSection />

      <div className="mx-auto mb-60 max-w-7xl px-8">
        <div className="mb-20 flex flex-col items-baseline justify-between md:flex-row">
          <h3 className="mb-4 font-serif text-5xl md:mb-0">
            Select Residences
          </h3>
          <p className="text-xs font-medium uppercase opacity-50">
            Swipe to Explore / 2024
          </p>
        </div>

        <div className="no-scrollbar flex cursor-grab snap-x snap-mandatory space-x-12 overflow-x-auto pb-16 active:cursor-grabbing">
          {residences.map((item) => (
            <motion.div
              key={item.id}
              className="group w-[85vw] shrink-0 snap-start md:w-[calc((100%-3rem)/2)] lg:w-[calc((100%-6rem)/3)]"
            >
              <div className="mb-8 aspect-3/4 overflow-hidden rounded-sm bg-neutral-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between border-t border-black/10 px-1 pt-6">
                <h4 className="text-xl font-light">{item.title}</h4>
                <p className="text-xs font-semibold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/apartments"
            className="inline-block bg-black px-12 py-5 text-[10px] font-bold text-white uppercase shadow-xl transition-all hover:bg-neutral-800"
          >
            Explore Buildings Portfolio
          </Link>
        </div>
      </div>

      <div className="px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative mx-auto flex h-200 max-w-400 items-center justify-center overflow-hidden rounded-2xl bg-black p-12 text-center text-white"
        >
          <img
            src="/images/interiors/living-room-luxury.jpg"
            alt="Eternal Design Detail"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="relative z-10 max-w-3xl">
            <h2 className="mb-10 font-serif text-6xl md:text-8xl">
              Eternal Design
            </h2>
            <p className="mb-14 text-xl leading-relaxed font-light opacity-70">
              We don't build for seasons; we build for centuries. Experience the
              longevity of quality materials and timeless architectural
              principles.
            </p>
            <Link
              to="/contact"
              className="border border-white/40 px-16 py-7 text-[10px] font-bold uppercase transition-all hover:bg-white hover:text-black"
            >
              Schedule Private Viewing
            </Link>
          </div>
        </motion.div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default ScrollContent
