import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { Link } from "react-router"
import { SequenceStep } from "../app"

interface HeroProps {
  currentStep: SequenceStep
}

const Hero: React.FC<HeroProps> = ({ currentStep }) => {
  const brandName = "City of Mara"

  const isStepAtLeast = (target: SequenceStep) => {
    const order = Object.values(SequenceStep)
    return order.indexOf(currentStep) >= order.indexOf(target)
  }

  const metrics = [
    { label: "Buildings", value: "8" },
    { label: "Residences", value: "250+" },
    { label: "Garden Area", value: "30%" },
    { label: "Max Height", value: "150m" },
  ]

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#F5F5F0]">
      <AnimatePresence mode="wait">
        {currentStep === SequenceStep.INITIAL_TEXT && (
          <motion.div
            key="initial-text-container"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="z-10 flex font-serif text-[6vw] select-none"
          >
            {brandName.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={char === " " ? "mx-3" : ""}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isStepAtLeast(SequenceStep.HERO_IMAGE) && (
          <motion.div
            key="hero-image-overlay"
            initial={{ opacity: 0, clipPath: "inset(15% 15% 15% 15%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-0 bg-neutral-900"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="h-full w-full bg-cover bg-center brightness-[55%]"
              style={{
                backgroundImage: `url('/images/buildings/apartment-tower-dusk.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isStepAtLeast(SequenceStep.WELCOME_TEXT) && (
          <motion.div
            layout
            key="hero-main-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              layout: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 1.5 },
              y: { duration: 1.5 },
            }}
            className="z-20 flex max-w-4xl flex-col items-center px-6 text-center text-white"
          >
            <motion.span
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              className="mb-5 block text-[9px] font-medium uppercase"
            >
              The Future of Living
            </motion.span>

            <motion.h1
              layout
              className="mb-8 font-serif text-4xl leading-[0.9] md:text-7xl"
            >
              Where Living <br />
              <span className="font-light">Breathes</span>
            </motion.h1>

            <motion.div
              layout
              className="mb-12 grid w-full max-w-2xl grid-cols-2 gap-8 px-4 md:grid-cols-4"
            >
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <span className="mb-1 font-serif text-2xl">{m.value}</span>
                  <span className="text-[8px] font-bold uppercase opacity-50">
                    {m.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              layout
              className="mx-auto mb-10 max-w-xl text-sm leading-relaxed font-light opacity-70 md:text-base"
            >
              A masterpiece of modern residence where minimalist luxury meets
              the pulse of the city. Discover your new sanctuary in the sky.
            </motion.p>

            <AnimatePresence>
              {isStepAtLeast(SequenceStep.BUTTONS) && (
                <motion.div
                  key="buttons-group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center gap-5 md:flex-row"
                >
                  <Link
                    to="/apartments"
                    className="inline-block bg-white px-10 py-4 text-[9px] font-bold text-black uppercase transition-colors hover:bg-neutral-200"
                  >
                    Explore Residences
                  </Link>
                  <Link
                    to="/about"
                    className="inline-block border border-white/30 px-10 py-4 text-[9px] font-bold text-white uppercase backdrop-blur-md transition-colors hover:bg-white/10"
                  >
                    Our Philosophy
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isStepAtLeast(SequenceStep.READY) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center text-white/40"
          >
            <span className="mb-4 text-[7px] uppercase">Descend</span>
            <div className="relative h-16 w-[1px] overflow-hidden bg-white/10">
              <motion.div
                animate={{ y: ["-100%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 h-1/2 w-full bg-white/40"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero
