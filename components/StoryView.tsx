import { motion } from "framer-motion"
import React, { useEffect } from "react"
import { Link } from "react-router"

const StoryView: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const sharedTransition = {
    duration: 1.2,
    ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
  }

  return (
    <motion.div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed top-0 left-0 z-[110] flex w-full items-center justify-between px-8 py-6 text-white mix-blend-difference"
      >
        <div className="font-serif text-2xl font-semibold tracking-tighter">
          City of Mara
        </div>
        <Link
          to="/"
          className="text-xs tracking-[0.3em] uppercase transition-opacity hover:opacity-50"
        >
          Close [esc]
        </Link>
      </motion.div>

      <div className="flex min-h-screen flex-col md:flex-row">
        <motion.div
          layoutId="story-image-container"
          transition={sharedTransition}
          className="sticky top-0 h-[60vh] w-full overflow-hidden bg-neutral-100 md:h-screen md:w-1/2"
        >
          <motion.img
            layoutId="story-image"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
            alt="Interior Heritage"
            className="h-full w-full object-cover"
            transition={sharedTransition}
          />
        </motion.div>

        <div className="min-h-screen w-full bg-white px-8 py-24 md:w-1/2 md:px-24 md:py-48">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="mb-8 block text-[10px] font-bold tracking-[0.6em] text-neutral-400 uppercase">
              The Heritage / Vol. 01
            </span>
            <h1 className="mb-16 font-serif text-6xl leading-tight tracking-tighter md:text-8xl">
              Legacy in <br />
              the Light.
            </h1>

            <div className="space-y-10 text-xl leading-relaxed font-light text-neutral-600">
              <p>
                City of Mara was conceived as a response to the frantic pace of
                modern urban life. We asked ourselves: can a home be both in the
                center of a metropolis and a place of absolute stillness?
              </p>
              <p>
                The answer lies in our architecture. By utilizing specialized
                acoustic glass and the highest grade of natural stone, we have
                created an environment that filters the noise of the world,
                leaving only the beauty of the skyline.
              </p>
              <p className="border-y border-neutral-100 py-10 font-serif text-3xl text-neutral-900">
                "We don't build structures; we build sanctuaries that honor the
                passage of time."
              </p>
              <p>
                Every residence at Mara is a testament to quality. Our
                collaboration with lead architect Elena Voss ensures that every
                angle is considered, every shadow is intentional, and every view
                is a masterpiece.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-24 border-t border-neutral-100 pt-16"
            >
              <div className="flex items-center space-x-16">
                <div>
                  <h4 className="mb-3 text-[10px] font-bold tracking-[0.3em] uppercase">
                    Architect
                  </h4>
                  <p className="text-sm font-light">Elena Voss</p>
                </div>
                <div>
                  <h4 className="mb-3 text-[10px] font-bold tracking-[0.3em] uppercase">
                    Est. Completion
                  </h4>
                  <p className="text-sm font-light">Late 2025</p>
                </div>
              </div>
            </motion.div>

            <Link
              to="/"
              className="mt-24 inline-block bg-black px-14 py-6 text-[10px] font-bold tracking-[0.3em] text-white uppercase transition-colors hover:bg-neutral-800"
            >
              Return to Gallery
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default StoryView
