import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import React, { useState } from "react"
import { Link, useLocation } from "react-router"

const Header: React.FC = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [residencesOpen, setResidencesOpen] = useState(false)
  const [hoveredImage, setHoveredImage] = useState(
    "/images/buildings/apartment-tower-dusk.jpg",
  )
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > window.innerHeight * 0.1)
  })

  const buildings = [
    { id: "m12", name: "Building M12" },
    { id: "m11", name: "Building M11" },
    { id: "m10", name: "Building M10" },
    { id: "m9", name: "Building M9" },
    { id: "m8", name: "Building M8" },
    { id: "m7", name: "Building M7" },
    { id: "m6", name: "Building M6" },
    { id: "m5", name: "Building M5" },
  ]

  const navItems: {
    label: string
    path: string
    img: string
    subItems?: boolean
  }[] = [
    {
      label: "Residences",
      path: "/apartments",
      img: "/images/buildings/apartment-tower-dusk.jpg",
      subItems: true,
    },
    {
      label: "About",
      path: "/about",
      img: "/images/interiors/open-office-interior.jpg",
    },
    {
      label: "Lifestyle",
      path: "/lifestyle",
      img: "/images/buildings/resort-pool.jpg",
    },
    {
      label: "News",
      path: "/news",
      img: "/images/lifestyle/city-aerial.jpg",
    },
    {
      label: "Investment",
      path: "/investment",
      img: "/images/buildings/glass-tower.jpg",
    },
    {
      label: "Contact",
      path: "/contact",
      img: "/images/buildings/hotel-exterior.jpg",
    },
  ]

  const isHomepage = location.pathname === "/"
  const effectiveScrolled = !isHomepage || isScrolled
  const textColorClass = effectiveScrolled ? "text-black" : "text-white"
  const borderColorClass = effectiveScrolled
    ? "border-black/10"
    : "border-white/20"
  const bgColorClass = effectiveScrolled ? "bg-white/90" : "bg-black/5"
  const hamburgerColorClass = effectiveScrolled ? "bg-black" : "bg-white"

  return (
    <>
      <motion.header
        initial={isHomepage ? { opacity: 0, y: "-100%" } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 z-100 flex w-full items-center justify-between border-b px-6 py-6 backdrop-blur-md transition-all duration-500 md:px-10 ${effectiveScrolled ? "border-black/5 shadow-sm" : "border-white/5"} ${bgColorClass}`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className={`group flex items-center space-x-4 p-1 transition-colors duration-500 ${textColorClass} z-110`}
        >
          <div className="flex flex-col space-y-1.5 overflow-hidden">
            <span
              className={`h-px w-5 transition-all duration-500 ${hamburgerColorClass}`}
            ></span>
            <span
              className={`h-px w-3.5 translate-x-1.5 transition-all duration-500 group-hover:translate-x-0 ${hamburgerColorClass}`}
            ></span>
          </div>
          <span className="hidden text-[9px] font-bold uppercase md:block">
            Menu
          </span>
        </button>

        <Link
          to="/"
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-lg font-medium transition-colors duration-500 hover:opacity-50 md:text-xl ${textColorClass}`}
        >
          City of Mara
        </Link>

        <Link
          to="/contact"
          className={`border px-4 py-2.5 text-[9px] font-bold uppercase transition-all duration-500 hover:bg-black hover:text-white md:px-6 ${textColorClass} ${borderColorClass}`}
        >
          Contact
        </Link>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-200 flex flex-col overflow-y-auto bg-white shadow-2xl md:flex-row md:overflow-hidden"
          >
            <div className="relative hidden h-full w-1/3 overflow-hidden bg-neutral-100 md:block">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  src={hoveredImage}
                  className="absolute inset-0 h-full w-full object-cover"
                  alt="Architecture Navigation"
                />
              </AnimatePresence>
            </div>

            <div className="relative flex flex-1 flex-col bg-white p-8 md:p-32">
              <button
                onClick={() => setIsOpen(false)}
                className="group absolute top-8 right-8 z-10 flex items-center space-x-3 md:top-20 md:right-20"
              >
                <span className="text-[10px] font-bold uppercase">Close</span>
                <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
              </button>

              <div className="mt-8 flex flex-col space-y-6 md:mt-16 md:space-y-8">
                {navItems.map((item) => (
                  <div key={item.path} className="flex flex-col">
                    {item.subItems ? (
                      <button
                        className="group flex cursor-pointer items-center space-x-4 text-left"
                        onMouseEnter={() => setHoveredImage(item.img)}
                        onClick={() => setResidencesOpen(!residencesOpen)}
                      >
                        <span className="font-serif text-3xl transition-colors hover:text-neutral-400 md:text-5xl">
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`h-6 w-6 transition-transform duration-500 md:h-8 md:w-8 ${residencesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className="group flex items-center space-x-4"
                        onMouseEnter={() => setHoveredImage(item.img)}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-serif text-3xl transition-colors hover:text-neutral-400 md:text-5xl">
                          {item.label}
                        </span>
                      </Link>
                    )}

                    {item.subItems && (
                      <AnimatePresence>
                        {residencesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-4 ml-4 flex flex-col space-y-2 overflow-hidden border-l border-neutral-100 pl-6 md:ml-8 md:space-y-3"
                          >
                            {buildings.map((b) => (
                              <Link
                                key={b.id}
                                to={`/apartments/${b.id}`}
                                onClick={() => {
                                  setIsOpen(false)
                                  setResidencesOpen(false)
                                }}
                                className="group/sub flex items-center space-x-2 text-lg font-light text-neutral-500 transition-colors hover:text-black md:text-xl"
                              >
                                <span>{b.name}</span>
                                <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover/sub:opacity-100" />
                              </Link>
                            ))}
                            <Link
                              to="/apartments"
                              onClick={() => {
                                setIsOpen(false)
                                setResidencesOpen(false)
                              }}
                              className="mt-2 text-[10px] font-bold text-neutral-400 uppercase hover:text-black"
                            >
                              View All Residences
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
