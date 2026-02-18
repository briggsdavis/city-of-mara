import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { SequenceStep } from "../app"
import Footer from "./footer"
import Header from "./header"
import Hero from "./hero"
import ScrollContent from "./scroll-content"

const HomePage: React.FC = () => {
  const [step, setStep] = useState<SequenceStep>(SequenceStep.INITIAL_TEXT)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(SequenceStep.HERO_IMAGE), 1500),
      setTimeout(() => setStep(SequenceStep.WELCOME_TEXT), 3000),
      setTimeout(() => setStep(SequenceStep.NAV_BAR), 3800),
      setTimeout(() => setStep(SequenceStep.BUTTONS), 4400),
      setTimeout(() => setStep(SequenceStep.READY), 5000),
    ]
    return () => timers.forEach((t) => clearTimeout(t))
  }, [])

  const isNavAtLeast = (target: SequenceStep) => {
    const order = Object.values(SequenceStep)
    return order.indexOf(step) >= order.indexOf(target)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <AnimatePresence>
        {isNavAtLeast(SequenceStep.NAV_BAR) && <Header />}
      </AnimatePresence>

      <main>
        <Hero currentStep={step} />

        {isNavAtLeast(SequenceStep.READY) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <ScrollContent />
            <Footer />
          </motion.div>
        )}
      </main>
    </motion.div>
  )
}

export default HomePage
