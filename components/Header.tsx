import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router"

const Header: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [residencesOpen, setResidencesOpen] = useState(false)
  const [hoveredImage, setHoveredImage] = useState(
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop",
  )
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > window.innerHeight * 0.1)
  })

  const handleNav = (path: string) => {
    navigate(path)
    setIsOpen(false)
    setResidencesOpen(false)
  }

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
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop",
      subItems: true,
    },
    {
      label: "About",
      path: "/about",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop",
    },
    {
      label: "Lifestyle",
      path: "/lifestyle",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
    },
    {
      label: "News",
      path: "/news",
      img: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2670&auto=format&fit=crop",
    },
    {
      label: "Investment",
      path: "/investment",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
    },
    {
      label: "Contact",
      path: "/contact",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop",
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 z-100 flex w-full items-center justify-between border-b px-6 py-6 backdrop-blur-md transition-all duration-500 md:px-10 ${effectiveScrolled ? "border-black/5 shadow-sm" : "border-white/5"} ${bgColorClass}`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className={`group flex items-center space-x-4 transition-colors duration-500 ${textColorClass} z-110`}
        >
          <div className="flex flex-col space-y-1.5 overflow-hidden">
            <span
              className={`h-px w-5 transition-all duration-500 group-hover:translate-x-1 ${hamburgerColorClass}`}
            ></span>
            <span
              className={`h-px w-3.5 translate-x-1.5 transition-all duration-500 group-hover:translate-x-0 ${hamburgerColorClass}`}
            ></span>
          </div>
          <span className="hidden text-[9px] font-bold tracking-[0.4em] uppercase md:block">
            Menu
          </span>
        </button>

        <button
          onClick={() => handleNav("/")}
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-lg font-medium tracking-tighter transition-colors duration-500 hover:opacity-50 md:text-xl ${textColorClass}`}
        >
          City of Mara
        </button>

        <button
          onClick={() => handleNav("/contact")}
          className={`border px-4 py-2.5 text-[9px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:bg-black hover:text-white md:px-6 ${textColorClass} ${borderColorClass}`}
        >
          Contact
        </button>
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
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
                  Close
                </span>
                <X className="h-5 w-5 transition-transform group-hover:rotate-90" />
              </button>

              <div className="mt-8 flex flex-col space-y-6 md:mt-16 md:space-y-8">
                {navItems.map((item, i) => (
                  <div key={item.path} className="flex flex-col">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                      className="group flex cursor-pointer items-center space-x-4 text-left"
                      onMouseEnter={() => setHoveredImage(item.img)}
                      onClick={() => {
                        if (item.subItems) {
                          setResidencesOpen(!residencesOpen)
                        } else {
                          handleNav(item.path)
                        }
                      }}
                    >
                      <span className="font-serif text-3xl tracking-tighter transition-colors hover:text-neutral-400 md:text-5xl">
                        {item.label}
                      </span>
                      {item.subItems && (
                        <ChevronDown
                          className={`h-6 w-6 transition-transform duration-500 md:h-8 md:w-8 ${residencesOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </motion.div>

                    {item.subItems && (
                      <AnimatePresence>
                        {residencesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-4 ml-4 flex flex-col space-y-2 overflow-hidden border-l border-neutral-100 pl-6 md:ml-8 md:space-y-3"
                          >
                            {buildings.map((b, idx) => (
                              <motion.button
                                key={b.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => handleNav(`/apartments/${b.id}`)}
                                className="group/sub flex items-center space-x-2 text-left text-lg font-light text-neutral-500 transition-colors hover:text-black md:text-xl"
                              >
                                <span>{b.name}</span>
                                <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover/sub:opacity-100" />
                              </motion.button>
                            ))}
                            <button
                              onClick={() => handleNav("/apartments")}
                              className="mt-2 text-left text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase hover:text-black"
                            >
                              View All Residences
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col justify-between space-y-6 border-t border-neutral-100 pt-12 md:flex-row md:space-y-0">
                <div className="text-[9px] font-bold tracking-[0.3em] text-neutral-400 uppercase">
                  <p>Inquiries</p>
                  <p className="mt-2 text-black">atelier@mara.com</p>
                </div>
                <div className="text-[9px] font-bold tracking-[0.3em] text-neutral-400 uppercase md:text-right">
                  <p>Follow</p>
                  <p className="mt-2 text-black">Instagram / Vimeo</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
