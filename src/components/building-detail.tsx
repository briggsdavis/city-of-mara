import { motion } from "framer-motion"
import { ArrowLeft, Bath, Bed, Maximize2 } from "lucide-react"
import React from "react"

interface BuildingDetailProps {
  building: {
    id: string
    name: string
    location: string
    brief: string
    img: string
  }
  onBack: () => void
}

const BuildingDetail: React.FC<BuildingDetailProps> = ({
  building,
  onBack,
}) => {
  const units = [
    {
      id: 1,
      type: "Gallery Studio",
      size: "720 SQFT",
      bed: 1,
      bath: 1,
      price: "$890,000",
    },
    {
      id: 2,
      type: "Executive Suite",
      size: "1,450 SQFT",
      bed: 2,
      bath: 2,
      price: "$1,850,000",
    },
    {
      id: 3,
      type: "Sky Residence",
      size: "2,100 SQFT",
      bed: 3,
      bath: 3,
      price: "$2,900,000",
    },
    {
      id: 4,
      type: "Grand Penthouse",
      size: "5,800 SQFT",
      bed: 6,
      bath: 6,
      price: "$12,400,000",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="mx-auto max-w-7xl px-8 py-20">
        <button
          onClick={onBack}
          className="mb-16 flex items-center space-x-4 text-xs font-bold text-neutral-400 uppercase transition-all hover:opacity-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Portfolio</span>
        </button>

        <div className="mb-32 grid gap-32 lg:grid-cols-2">
          <div className="sticky top-40 h-fit">
            <span className="mb-6 block text-[10px] font-bold text-neutral-300 uppercase">
              {building.id} / Landmark
            </span>
            <h1 className="mb-10 font-serif text-7xl leading-none md:text-9xl">
              {building.name}
            </h1>

            <div className="mb-10 flex items-center space-x-4">
              <div className="h-[1px] w-12 bg-black"></div>
              <p className="text-[11px] font-bold uppercase">
                {building.location}
              </p>
            </div>

            <p className="mb-16 max-w-lg text-xl leading-relaxed font-light text-neutral-500">
              {building.brief}
            </p>

            <div className="grid grid-cols-2 gap-12 border-t border-neutral-100 pt-12">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase opacity-40">
                  Availability
                </p>
                <p className="font-serif text-xl">Limited Release</p>
              </div>
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase opacity-40">
                  Architect
                </p>
                <p className="font-serif text-xl">Elena Voss Atelier</p>
              </div>
            </div>

            <button className="mt-20 w-full bg-black px-16 py-6 text-[10px] font-bold text-white uppercase shadow-2xl transition-colors hover:bg-neutral-800 md:w-auto">
              Request Brochure
            </button>
          </div>

          <div>
            <div className="mb-24 aspect-[3/4] overflow-hidden bg-neutral-100 shadow-2xl transition-all duration-1000">
              <img
                src={building.img}
                alt={building.name}
                className="h-full w-full scale-105 object-cover transition-transform duration-[3s] hover:scale-100"
              />
            </div>

            <h3 className="mb-12 font-serif text-3xl">Select Units</h3>
            <div className="space-y-6">
              {units.map((u) => (
                <div
                  key={u.id}
                  className="group cursor-pointer border border-neutral-100 bg-white p-10 transition-all duration-500 hover:shadow-xl"
                >
                  <div className="mb-10 flex items-start justify-between">
                    <div>
                      <h4 className="mb-2 font-serif text-2xl">{u.type}</h4>
                      <p className="text-[10px] font-bold text-neutral-300 uppercase">
                        {u.size}
                      </p>
                    </div>
                    <span className="text-xl font-light">{u.price}</span>
                  </div>
                  <div className="flex space-x-12 border-t border-neutral-50 pt-8">
                    <div className="flex items-center space-x-3 text-neutral-400">
                      <Bed className="h-4 w-4 stroke-[1px]" />
                      <span className="text-[10px] font-bold uppercase">
                        {u.bed} Beds
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-neutral-400">
                      <Bath className="h-4 w-4 stroke-[1px]" />
                      <span className="text-[10px] font-bold uppercase">
                        {u.bath} Baths
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-neutral-400">
                      <Maximize2 className="h-4 w-4 stroke-[1px]" />
                      <span className="text-[10px] font-bold uppercase">
                        {u.size}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BuildingDetail
