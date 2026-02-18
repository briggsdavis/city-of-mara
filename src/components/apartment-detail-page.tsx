import { motion } from "framer-motion"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import React from "react"
import { Link, useParams } from "react-router"

const APT_DATA: Record<string, any> = {
  "1br": {
    name: "1 Bedroom Residence",
    intro:
      "A sanctuary of light and volume. This one-bedroom residence is designed for the modern individual who values spatial intelligence and absolute tranquility.",
  },
  "1br-off": {
    name: "1 Bedroom + Office",
    intro:
      "The ultimate professional retreat. Perfectly balancing productivity with personal restoration, this residence features a dedicated executive office with panoramic skyline views.",
  },
  "2br": {
    name: "2 Bedroom Residence",
    intro:
      "Elevated family living. Expansive social areas meet intimate private quarters in a residence crafted with natural textures and sophisticated acoustic engineering.",
  },
  "2br-off": {
    name: "2 Bedrooms + Office",
    intro:
      "A masterclass in functional luxury. Offering dual suites and a central creative studio, this residence provides ample space for both lifestyle and legacy.",
  },
  "3br": {
    name: "3 Bedroom Residence",
    intro:
      "Palatial heights. With triple-aspect views and grand proportions, this three-bedroom home is a testament to architectural heritage and contemporary grace.",
  },
  "3br-off": {
    name: "3 Bedrooms + Office",
    intro:
      "The definitive Mara residence. An unparalleled footprint featuring a private library, formal dining, and a suite of spaces tailored for the discerning collector.",
  },
}

const BUILDING_NAMES: Record<string, string> = {
  m12: "Building M12",
  m11: "Building M11",
  m10: "Building M10",
  m9: "Building M9",
  m8: "Building M8",
  m7: "Building M7",
  m6: "Building M6",
  m5: "Building M5",
}

const ApartmentDetailPage: React.FC = () => {
  const { buildingId, apartmentId } = useParams<{
    buildingId: string
    apartmentId: string
  }>()

  const apt = APT_DATA[apartmentId!] || APT_DATA["1br"]
  const buildingName =
    BUILDING_NAMES[buildingId!] || `Building ${buildingId!.toUpperCase()}`

  const gallery = [
    {
      src: "/images/interiors/living-room-luxury.jpg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/images/interiors/bedroom-detail.jpg",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      src: "/images/interiors/kitchen-detail.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/images/interiors/bathroom-detail.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/images/interiors/penthouse-lounge.jpg",
      span: "md:col-span-3 md:row-span-2",
    },
    {
      src: "/images/interiors/bedroom-suite.jpg",
      span: "md:col-span-1 md:row-span-2",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Link
          to={`/apartments/${buildingId}`}
          className="group absolute top-8 left-8 z-20 inline-flex items-center space-x-3 text-[10px] font-bold text-white uppercase transition-opacity hover:opacity-50"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to {buildingName}</span>
        </Link>
        <img
          src="/images/interiors/apartment-hero.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt={apt.name}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-center">
          <div className="px-8">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 block text-[10px] font-bold text-white uppercase"
            >
              {buildingName} / Private Residence
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-6xl leading-none text-white md:text-8xl"
            >
              {apt.name}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-8 py-32 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-2xl leading-relaxed font-light text-neutral-600 italic md:text-3xl"
        >
          "{apt.intro}"
        </motion.p>
      </section>

      <section className="border-y border-neutral-100 bg-neutral-50 py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-10 text-[10px] font-bold text-neutral-400 uppercase">
              Location Features
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Riverside View",
                "Morning Light",
                "Elevated Floor",
                "Private Entry",
              ].map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-[10px] font-bold text-neutral-600 uppercase"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-10 text-[10px] font-bold text-neutral-400 uppercase">
              Building Infrastructure
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Smart Elevator",
                "Biometric Lobby",
                "Filtered Air",
                "24h Concierge",
              ].map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-[10px] font-bold text-neutral-600 uppercase"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-7xl px-8">
          <h3 className="mb-10 text-[10px] font-bold text-neutral-400 uppercase">
            Residence Specifics
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Marble Countertops",
              "Oak Flooring",
              "Bose Sound System",
              "Smart Climate Control",
              "Floor-to-Ceiling Windows",
            ].map((p) => (
              <span
                key={p}
                className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-[10px] font-bold text-neutral-600 uppercase"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-40">
        <div className="mb-20">
          <span className="mb-4 block text-[10px] font-bold text-neutral-400 uppercase">
            Gallery
          </span>
          <h2 className="font-serif text-5xl">Inside the Living Space.</h2>
        </div>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-4">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${img.span} group overflow-hidden rounded-sm bg-neutral-100`}
            >
              <img
                src={img.src}
                className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                alt={`Interior Detail ${i + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-neutral-100 px-8 py-32 text-center">
        <h2 className="mb-12 font-serif text-4xl">
          Interested in this Residence?
        </h2>
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <Link
            to="/contact"
            className="flex items-center space-x-4 bg-black px-12 py-6 text-[10px] font-bold text-white uppercase shadow-xl transition-all hover:bg-neutral-800"
          >
            <Mail className="h-4 w-4" />
            <span>Request Private Meeting</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-4 border border-black px-12 py-6 text-[10px] font-bold uppercase transition-all hover:bg-black hover:text-white"
          >
            <Phone className="h-4 w-4" />
            <span>Speak with Advisor</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ApartmentDetailPage
