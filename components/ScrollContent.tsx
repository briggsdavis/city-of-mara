import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import React, { useRef, useState } from "react"
import { Link } from "react-router"

interface ScrollContentProps {
  onOpenStory?: () => void
}

const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const benefits = [
    {
      title: "Connectivity",
      description:
        "Located at the nexus of the city's future transit hub. Mara residents enjoy a 10-minute commute to the financial center and exclusive access to the private air-taxi terminal.",
      img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2400&auto=format&fit=crop",
      metric: "10 Min Transit",
    },
    {
      title: "Greenery",
      description:
        "Directly adjacent to the Mara Botanical Gardens, offering five acres of meticulously curated vertical forests and oxygen-rich walking trails at your doorstep.",
      img: "https://images.unsplash.com/photo-1542601906970-14197b4c1970?q=80&w=2400&auto=format&fit=crop",
      metric: "5-Acre Park",
    },
    {
      title: "Culture",
      description:
        "Immerse yourself in the Museum of Modern Silence and the Mara Opera House, both located within the complex's cultural plaza.",
      img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2400&auto=format&fit=crop",
      metric: "Cultural Plaza",
    },
    {
      title: "Privacy",
      description:
        "A gated ecosystem with multi-layered biometric security and dedicated private access roads, ensuring absolute discretion for our residents.",
      img: "https://images.unsplash.com/photo-1449156003053-c3ca24237f81?q=80&w=2670&auto=format&fit=crop",
      metric: "Gated Hub",
    },
  ]

  return (
    <div className="mx-auto mb-60 max-w-7xl px-8">
      <div className="mb-24">
        <span className="mb-6 block text-[10px] font-bold tracking-[0.6em] text-neutral-400 uppercase">
          The District / 01
        </span>
        <h2 className="mb-10 font-serif text-5xl tracking-tight">
          In the Heart <br />
          of Silence
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
                <span className="mb-2 block text-[9px] font-bold tracking-widest uppercase">
                  0{i + 1}
                </span>
                <span className="font-serif text-3xl">{b.title}</span>
              </div>
              <motion.div
                animate={{
                  x: activeTab === i ? 0 : -10,
                  opacity: activeTab === i ? 1 : 0,
                }}
                className="h-[1px] w-8 bg-black"
              />
            </button>
          ))}
          <div className="pt-12">
            <Link
              to="/lifestyle"
              className="inline-block border-b border-black pb-2 text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:opacity-50"
            >
              Explore Lifestyle Page
            </Link>
          </div>
        </div>

        <div className="relative h-[500px] overflow-hidden rounded-sm bg-neutral-100 lg:w-2/3">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute right-12 bottom-12 left-12 text-white">
                <div className="mb-6 flex items-center space-x-6">
                  <div className="h-[1px] w-10 bg-white/40" />
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-60">
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
            src="https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?q=80&w=2670&auto=format&fit=crop"
            alt="City of Mara Landmark"
            className="h-full w-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />

          <motion.div
            style={{
              opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
            }}
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white"
          >
            <h3 className="mb-6 font-serif text-4xl md:text-7xl">
              Unrivaled Horizon
            </h3>
            <p className="max-w-lg text-sm leading-relaxed font-light tracking-[0.8em] uppercase">
              Defining the skyline of tomorrow, one residence at a time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

const ScrollContent: React.FC<ScrollContentProps> = ({ onOpenStory }) => {
  const residences = [
    {
      id: 1,
      title: "The Penthouse Suite",
      price: "From $4.2M",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Sky Loft Residence",
      price: "From $1.8M",
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Garden Duplex",
      price: "From $2.5M",
      img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2570&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Artist Atelier",
      price: "From $1.2M",
      img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Observatory Loft",
      price: "From $3.1M",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2560&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Terrace Haven",
      price: "From $2.2M",
      img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2674&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Linear Suite",
      price: "From $1.5M",
      img: "https://images.unsplash.com/photo-1512915922686-57c11f9ad6b3?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Heritage Manor",
      price: "From $5.5M",
      img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2570&auto=format&fit=crop",
    },
  ]

  const sharedTransition = {
    duration: 1.2,
    ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
  }

  return (
    <div className="w-full overflow-x-hidden py-32">
      <div className="mx-auto mb-60 grid max-w-7xl items-center gap-20 px-8 md:grid-cols-2">
        <motion.div
          layoutId="story-image-container"
          transition={sharedTransition}
          className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-200 shadow-2xl"
        >
          <motion.img
            layoutId="story-image"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
            alt="Interior Lounge"
            className="h-full w-full object-cover"
            transition={sharedTransition}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h2 className="mb-10 font-serif text-5xl leading-tight tracking-tight">
            Mastering the Art <br />
            of Living
          </h2>
          <p className="mb-12 text-xl leading-relaxed font-light text-gray-600">
            City of Mara is more than an address. It is a curated lifestyle
            designed for those who seek the extraordinary. Every detail is
            chosen to provide absolute serenity.
          </p>
          {onOpenStory ? (
            <button
              onClick={onOpenStory}
              className="cursor-pointer border-b-2 border-black pb-2 text-xs font-bold tracking-widest uppercase transition-all hover:opacity-50"
            >
              Explore the Heritage
            </button>
          ) : (
            <Link
              to="/story"
              className="inline-block border-b-2 border-black pb-2 text-xs font-bold tracking-widest uppercase transition-all hover:opacity-50"
            >
              Explore the Heritage
            </Link>
          )}
        </motion.div>
      </div>

      <LocationSection />

      <ExpandingSection />

      <div className="mx-auto mb-60 max-w-7xl px-8">
        <div className="mb-20 flex flex-col items-baseline justify-between md:flex-row">
          <h3 className="mb-4 font-serif text-5xl tracking-tight md:mb-0">
            Select Residences
          </h3>
          <p className="text-xs font-medium tracking-[0.4em] uppercase opacity-50">
            Swipe to Explore / 2024
          </p>
        </div>

        <div className="no-scrollbar flex cursor-grab snap-x snap-mandatory space-x-12 overflow-x-auto pb-16 active:cursor-grabbing">
          {residences.map((item) => (
            <motion.div
              key={item.id}
              className="group w-[85vw] flex-shrink-0 snap-center md:w-[400px]"
            >
              <div className="mb-8 aspect-[3/4] overflow-hidden rounded-sm bg-neutral-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between border-t border-black/10 px-1 pt-6">
                <h4 className="text-xl font-light tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold tracking-widest">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/apartments"
            className="inline-block bg-black px-12 py-5 text-[10px] font-bold tracking-[0.4em] text-white uppercase shadow-xl transition-all hover:bg-neutral-800"
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
          className="relative mx-auto flex h-[800px] max-w-[1600px] items-center justify-center overflow-hidden rounded-2xl bg-black p-12 text-center text-white"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
            alt="Eternal Design Detail"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="relative z-10 max-w-3xl">
            <h2 className="mb-10 font-serif text-6xl tracking-tight md:text-8xl">
              Eternal Design
            </h2>
            <p className="mb-14 text-xl leading-relaxed font-light opacity-70">
              We don't build for seasons; we build for centuries. Experience the
              longevity of quality materials and timeless architectural
              principles.
            </p>
            <button className="border border-white/40 px-16 py-7 text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:bg-white hover:text-black">
              Schedule Private Viewing
            </button>
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
