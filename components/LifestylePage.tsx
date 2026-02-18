import { AnimatePresence, motion } from "framer-motion"
import {
  Activity,
  Car,
  ChevronDown,
  GraduationCap,
  Info,
  MapPin,
  ShoppingBag,
  Ticket,
  TreePine,
} from "lucide-react"
import React, { useState } from "react"
import { Link } from "react-router"

const LifestylePage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const stats = [
    { label: "Median Price", value: "€1,850/sqm" },
    { label: "Schools Rating", value: "9.2/10" },
    { label: "Center Proximity", value: "10m Walk" },
    { label: "Walk Score", value: "98/100" },
  ]

  const categories = [
    {
      id: "dining",
      title: "Dining & Nightlife",
      icon: <Ticket className="h-5 w-5" />,
      desc: "From Iulius Town's gourmet food court to the artisanal cafes of Cetate.",
      items: [
        "Maltese Terrace",
        "The Drunken Rat Pub",
        "Iulius Food Court",
        "Local Artisanal Coffee",
        "Cetate Fine Dining",
      ],
      img: "https://images.unsplash.com/photo-1550966841-3ee7adac1afb?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: "parks",
      title: "Parks & Recreation",
      icon: <TreePine className="h-5 w-5" />,
      desc: "Immediate access to the city's greenest lungs for morning runs and quiet afternoons.",
      items: [
        "Botanical Park",
        "Central Park",
        "Onsite Vertical Gardens",
        "Mara River Walk",
        "Private Fitness Hub",
      ],
      img: "https://images.unsplash.com/photo-1542601906970-14197b4c1970?q=80&w=2400&auto=format&fit=crop",
    },
    {
      id: "shopping",
      title: "Shopping & Services",
      icon: <ShoppingBag className="h-5 w-5" />,
      desc: "5,000+ sqm of onsite retail meets Romania's largest mixed-use shopping district.",
      items: [
        "Iulius Town Retail Hub",
        "Onsite Central Plaza",
        "Mara Pharmacy",
        "Mara Grocery Atelier",
        "Beauty & Spa Center",
      ],
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: "education",
      title: "Education & Health",
      icon: <GraduationCap className="h-5 w-5" />,
      desc: "Surrounded by academic prestige and specialized care for the modern family.",
      items: [
        "Politehnica University",
        "City Pediatrica Clinic",
        "Nikolaus Lenau High",
        "Mara Early Learning",
        "Regina Maria Health",
      ],
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: "transit",
      title: "Commute & Transit",
      icon: <Car className="h-5 w-5" />,
      desc: "Effortless flow to the ring road and international connections.",
      items: [
        "City Ring Road Access",
        "15m to Int'l Airport",
        "Tram Line 4 & 7",
        "Bike Sharing Stations",
        "Private Secure Parking",
      ],
      img: "https://images.unsplash.com/photo-1449156003053-c3ca24237f81?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: "culture",
      title: "Arts & Character",
      icon: <Activity className="h-5 w-5" />,
      desc: "Living in a city within a city, where history meets future-proof architecture.",
      items: [
        "Mara Opera Night",
        "Museum of Modern Silence",
        "Cultural Plaza Events",
        "Historical Cetate Square",
        "Mara Card Discounts",
      ],
      img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2400&auto=format&fit=crop",
    },
  ]

  const faqs = [
    {
      q: "Is City of Mara safe?",
      a: "Mara is a 24/7 gated community with integrated multi-layer biometric security and a dedicated onsite concierge team.",
    },
    {
      q: "What's the parking situation?",
      a: "We offer secure multi-level underground parking with dedicated EV charging stations for every building.",
    },
    {
      q: "What are the HOA fees like?",
      a: "As an nZEB certified building, energy costs are up to 40% lower, and HOA fees cover premium garden maintenance and healthcare access.",
    },
    {
      q: "What is the City of Mara Card?",
      a: "An exclusive resident privilege card providing significant discounts at onsite commercial hubs and local Timișoara partners.",
    },
    {
      q: "How fast is property value increasing?",
      a: "The Circumvalațiunii district has seen a 12% annual appreciation over the last 3 years, outperforming the city average.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex h-screen flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2670&auto=format&fit=crop"
            className="h-full w-full object-cover brightness-75"
            alt="Timișoara Neighborhood"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="mb-8 block text-[12px] font-bold tracking-[0.8em] text-white/60 uppercase">
              The District / Timișoara
            </span>
            <h1 className="mb-12 font-serif text-6xl leading-tight tracking-tighter text-white md:text-9xl">
              The Pulse <br />
              of Presence.
            </h1>

            <div className="flex flex-wrap gap-8">
              <Link
                to="/apartments"
                className="bg-white px-12 py-6 text-[10px] font-bold tracking-[0.4em] text-black uppercase shadow-2xl transition-all hover:bg-neutral-200"
              >
                View Available Homes
              </Link>
              <button className="border border-white px-12 py-6 text-[10px] font-bold tracking-[0.4em] text-white uppercase transition-all hover:bg-white hover:text-black">
                Schedule Neighborhood Tour
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 z-20 w-full border-t border-white/20 bg-white/10 px-8 py-8 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-serif text-2xl text-white">
                  {s.value}
                </span>
                <span className="mt-1 text-[9px] font-bold tracking-widest text-white/40 uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-start gap-24 px-8 py-40 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-8 block text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase">
            The Vision / Overview
          </span>
          <h2 className="mb-12 font-serif text-5xl leading-tight tracking-tighter">
            A City Within <br />A City.
          </h2>
          <div className="max-w-lg space-y-8 text-xl leading-relaxed font-light text-neutral-500">
            <p>
              City of Mara represents the evolution of Timișoara's urban core.
              Nestled on Calea Circumvalațiunii, it bridges the gap between the
              historic Cetate squares and the cutting-edge tech hubs of
              Aradului.
            </p>
            <p>
              This is a neighborhood built for corporate leaders, tech
              visionaries, and modern families who refuse to compromise on
              either efficiency or elegance.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-sm border border-neutral-100 bg-neutral-50 p-12"
        >
          <h3 className="mb-10 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
            Core Distinctives
          </h3>
          <ul className="space-y-12">
            <li className="flex items-start space-x-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="mb-2 font-serif text-lg">nZEB Efficiency</h4>
                <p className="text-sm font-light text-neutral-400">
                  Lowering utility costs by 40% through nearly Zero-Energy
                  building standards.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="mb-2 font-serif text-lg">
                  Iulius Town Proximity
                </h4>
                <p className="text-sm font-light text-neutral-400">
                  Immediate access to Romania's largest mixed-use retail and
                  corporate hub.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black">
                <Ticket className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="mb-2 font-serif text-lg">Mara Resident Card</h4>
                <p className="text-sm font-light text-neutral-400">
                  Exclusive discounts at onsite businesses and healthcare at
                  City Pediatrica.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </section>

      <section className="border-y border-neutral-100 bg-neutral-50 px-8 py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24">
            <h2 className="mb-4 font-serif text-5xl tracking-tighter">
              Life Unfolds Here.
            </h2>
            <p className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 uppercase">
              Curated Experiences / Selection
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden border border-neutral-200 bg-white p-10 transition-all duration-500 hover:border-black"
              >
                <div className="mb-8 flex items-center space-x-4">
                  <div className="rounded-full bg-neutral-50 p-3 transition-colors group-hover:bg-black group-hover:text-white">
                    {cat.icon}
                  </div>
                  <h3 className="font-serif text-xl">{cat.title}</h3>
                </div>

                <p className="mb-10 text-sm leading-relaxed font-light text-neutral-500">
                  {cat.desc}
                </p>

                <ul className="mb-12 flex-1 space-y-4">
                  {cat.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-3 text-sm text-neutral-400 transition-colors group-hover:text-black"
                    >
                      <div className="h-1 w-1 rounded-full bg-neutral-200" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto h-48 w-full overflow-hidden">
                  <img
                    src={cat.img}
                    className="h-full w-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                    alt={cat.title}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-40">
        <div className="grid items-center gap-32 lg:grid-cols-2">
          <div>
            <span className="mb-8 block text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase">
              Market Intelligence
            </span>
            <h2 className="mb-12 font-serif text-5xl leading-tight tracking-tighter">
              Exponential <br />
              Opportunity.
            </h2>
            <p className="mb-12 text-xl leading-relaxed font-light text-neutral-500">
              The Circumvalațiunii district has outperformed city averages by
              18% over the last 24 months. For corporate expats and tech
              professionals, Mara is the definitive investment destination.
            </p>

            <div className="space-y-8">
              <div className="flex items-end justify-between border-b border-neutral-100 pb-4">
                <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase">
                  Days on Market
                </span>
                <span className="font-serif text-2xl">14 Days</span>
              </div>
              <div className="flex items-end justify-between border-b border-neutral-100 pb-4">
                <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase">
                  Inventory Levels
                </span>
                <span className="font-serif text-2xl">Limited</span>
              </div>
              <div className="flex items-end justify-between border-b border-neutral-100 pb-4">
                <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase">
                  Annual Yield
                </span>
                <span className="font-serif text-2xl">6.8%</span>
              </div>
            </div>

            <p className="mt-12 text-[9px] font-bold tracking-widest text-neutral-300 uppercase">
              Source: Timișoara Real Estate Index 2024
            </p>
          </div>

          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full border border-neutral-100 bg-neutral-50 p-12">
            <svg viewBox="0 0 400 200" className="h-auto w-full text-black">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 20 180 Q 100 160 180 120 T 380 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.circle
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                cx="380"
                cy="40"
                r="4"
                fill="currentColor"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-[10px] font-bold tracking-widest text-neutral-300 uppercase">
                District Appreciation
              </span>
              <h4 className="font-serif text-6xl">+12%</h4>
              <span className="text-[9px] font-bold tracking-widest text-green-500 uppercase">
                Since Jan 2023
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-8 py-40 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <h2 className="mb-8 font-serif text-4xl tracking-tighter md:text-6xl">
              Why Choose Mara?
            </h2>
            <p className="mx-auto max-w-2xl text-xl font-light opacity-50">
              Comparing the district of tomorrow with established neighboring
              zones.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                name: "Cetate (Historic Center)",
                merit: "High charm, limited parking, older plumbing.",
                ideal: "Tourist interest.",
              },
              {
                name: "Aradului (Tech Hub)",
                merit: "Modern, business-focused, less walkable to center.",
                ideal: "Office proximity.",
              },
              {
                name: "Fabric (Heritage Hub)",
                merit: "Industrial charm, undergoing slow renewal.",
                ideal: "Artsy alternatives.",
              },
            ].map((adj) => (
              <div
                key={adj.name}
                className="rounded-sm border border-white/10 p-12 transition-all hover:border-white/40"
              >
                <h4 className="mb-6 font-serif text-2xl">{adj.name}</h4>
                <p className="mb-8 text-sm font-light opacity-60">
                  {adj.merit}
                </p>
                <div className="flex items-center space-x-3">
                  <Info className="h-4 w-4 opacity-30" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    {adj.ideal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-8 py-40">
        <div className="mb-24 text-center">
          <h2 className="font-serif text-5xl tracking-tighter">
            Expert Inquiries.
          </h2>
          <p className="mt-4 text-[10px] font-bold tracking-[0.4em] text-neutral-400 uppercase">
            Essential Neighborhood Knowledge
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-neutral-100">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="group flex w-full items-center justify-between py-8 text-left"
              >
                <span className="text-xl font-light transition-transform hover:translate-x-2">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-500 ${activeFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-lg leading-relaxed font-light text-neutral-500">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-100 px-8 py-40 text-center">
        <h2 className="mb-12 font-serif text-4xl tracking-tight md:text-6xl">
          Become a Mara Native.
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-xl leading-relaxed font-light text-neutral-400">
          The district of the future awaits your arrival. Join the inner circle
          of Timișoara's most distinguished residents.
        </p>
        <div className="flex flex-col justify-center gap-6 md:flex-row">
          <Link
            to="/apartments"
            className="bg-black px-16 py-7 text-[10px] font-bold tracking-[0.3em] text-white uppercase transition-all hover:bg-neutral-800"
          >
            Explore Available Floorplans
          </Link>
          <button className="border border-black px-16 py-7 text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:bg-black hover:text-white">
            Inquire Privately
          </button>
        </div>
      </section>
    </div>
  )
}

export default LifestylePage
