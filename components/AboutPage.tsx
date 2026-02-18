import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"

const timelineData = [
  {
    year: "2012",
    title: "The Blueprint",
    text: "Elena Voss and Alber Holding collaborate to define a new era of silence-based architecture.",
  },
  {
    year: "2015",
    title: "Site Selection",
    text: "Securing the topological pocket of Mara, the quietest zone in the metropolis.",
  },
  {
    year: "2019",
    title: "Groundbreaking",
    text: "Construction begins on the eight-tower masterplan using revolutionary acoustic materials.",
  },
  {
    year: "2023",
    title: "The Milestone",
    text: "Completion of the structural framework for M12, the flagship residence.",
  },
  {
    year: "2025",
    title: "A New Era",
    text: "Handover of the first residences and opening of the Botanical Gardens.",
  },
]

const valuesData = [
  {
    title: "Craftsmanship",
    text: "Every surface is finished by hand. We prioritize the touch of human intent over industrial repetition.",
    img: "https://images.unsplash.com/photo-1581439645268-ad7045c4323e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Innovation",
    text: "From self-healing concrete to acoustic filtration, we push the limits of what a home can do.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Serenity",
    text: "Noise is the ultimate pollutant. We design zones of absolute acoustic peace.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop",
  },
  {
    title: "Longevity",
    text: "Buildings that breathe with the city for centuries, not seasons. Built to endure.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Community",
    text: "A curated ecosystem of like-minded individuals who value privacy as much as connection.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2670&auto=format&fit=crop",
  },
]

const AboutPage: React.FC = () => {
  const containerRef = useRef(null)
  const parallaxRef = useRef(null)
  const valuesRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: valuesRef,
    offset: ["start start", "end end"],
  })

  const sections = [
    { id: "hero", label: "Legacy" },
    { id: "philosophy", label: "Philosophy" },
    { id: "timeline", label: "History" },
    { id: "values", label: "Values" },
    { id: "alber", label: "Foundation" },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const { scrollYProgress: heroProgress } = useScroll()
  const heroScale = useTransform(heroProgress, [0, 0.2], [1, 1.1])

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  })
  const parallaxY = useTransform(parallaxProgress, [0, 1], ["-20%", "20%"])

  return (
    <div ref={containerRef} className="relative bg-[#F5F5F0]">
      {/* Sidebar Quick Menu - Darker lines for visibility */}
      <div className="fixed top-1/2 right-8 z-[80] hidden -translate-y-1/2 flex-col items-end space-y-6 xl:flex">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center space-x-4 outline-none"
          >
            <span className="translate-x-4 text-[8px] font-bold tracking-[0.4em] text-black uppercase opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
              {s.label}
            </span>
            <div className="h-[1px] w-12 bg-black/40 transition-all group-hover:bg-black" />
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative h-[90vh] overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop"
            className="h-full w-full object-cover brightness-75"
            alt="About Mara Hero"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 block text-[12px] font-bold tracking-[0.8em] uppercase"
          >
            Our Origin Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-7xl leading-none tracking-tighter md:text-9xl"
          >
            Built for <br />
            Decades.
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="flex justify-center bg-white px-8 py-60"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center"
        >
          <span className="mb-12 block text-[12px] font-bold tracking-[0.5em] text-neutral-400 uppercase">
            The Philosophy
          </span>
          <h2 className="mb-12 font-serif text-4xl leading-tight md:text-5xl">
            "Silence is the bedrock of presence. We believe architectural
            excellence is measured by what it preserves, not just what it
            provides."
          </h2>
          <div className="mx-auto h-[1px] w-20 bg-black/10" />
        </motion.div>
      </section>

      {/* Parallax */}
      <section
        id="parallax"
        ref={parallaxRef}
        className="relative h-screen w-full overflow-hidden"
      >
        <motion.div
          style={{ y: parallaxY }}
          className="absolute -top-[20%] left-0 h-[140%] w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2670&auto=format&fit=crop"
            className="h-full w-full object-cover"
            alt="Parallax Skyline"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* Timeline */}
      <section id="timeline" className="bg-[#F5F5F0] px-8 py-60">
        <div className="mx-auto max-w-5xl">
          <div className="mb-32 text-center">
            <h3 className="mb-6 font-serif text-6xl">
              A Journey of <br />
              Precision
            </h3>
            <p className="text-xs tracking-[0.4em] text-neutral-400 uppercase">
              Chronicle / 2012 — 2025
            </p>
          </div>

          <div className="relative ml-4 border-l border-black/10 py-20 md:ml-0 md:pl-20">
            {timelineData.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="relative mb-32 last:mb-0"
              >
                <div className="absolute top-2 -left-[5px] h-[10px] w-[10px] rounded-full bg-black md:-left-[85px]" />
                <span className="mb-4 block font-serif text-4xl text-neutral-300">
                  {item.year}
                </span>
                <h4 className="mb-6 text-2xl font-bold tracking-widest uppercase">
                  {item.title}
                </h4>
                <p className="max-w-xl text-xl leading-relaxed font-light text-neutral-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" ref={valuesRef} className="relative h-[500vh]">
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-white">
          <div className="flex h-full w-full">
            <div className="relative h-full w-1/2 overflow-hidden">
              {valuesData.map((val, i) => {
                return (
                  <motion.div
                    key={i}
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [(i - 0.5) / 5, i / 5, (i + 0.5) / 5, (i + 1) / 5],
                        [0, 1, 1, 0],
                      ),
                    }}
                    className="absolute inset-0"
                  >
                    <motion.img
                      src={val.img}
                      className="h-full w-full object-cover"
                      alt={val.title}
                    />
                  </motion.div>
                )
              })}
            </div>

            <div className="flex h-full w-1/2 items-center justify-center bg-[#F9F9F7] p-20">
              <div className="relative h-64 w-full max-w-lg">
                {valuesData.map((val, i) => (
                  <motion.div
                    key={i}
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [(i - 0.5) / 5, i / 5, (i + 0.5) / 5, (i + 1) / 5],
                        [0, 1, 1, 0],
                      ),
                      y: useTransform(
                        scrollYProgress,
                        [(i - 0.5) / 5, i / 5, (i + 0.5) / 5, (i + 1) / 5],
                        [20, 0, 0, -20],
                      ),
                    }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <span className="mb-6 block text-[12px] font-bold tracking-[0.5em] text-neutral-400 uppercase">
                      Value / 0{i + 1}
                    </span>
                    <h3 className="mb-8 font-serif text-6xl tracking-tighter">
                      {val.title}
                    </h3>
                    <p className="text-xl leading-relaxed font-light text-neutral-500">
                      {val.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alber Foundation Section */}
      <section
        id="alber"
        className="overflow-hidden border-t border-neutral-100 bg-white px-8 py-60 text-black md:px-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="mb-10 block text-[12px] font-bold tracking-[1em] text-neutral-500 uppercase">
              Impact & Philanthropy
            </span>
            <h2 className="mb-12 font-serif text-6xl tracking-tighter md:text-8xl">
              The Alber <br />
              Foundation.
            </h2>

            <div className="max-w-xl space-y-10 text-lg leading-relaxed font-light text-neutral-600">
              <p>
                As the philanthropic arm of Alber Holding, the Foundation
                operates with a singular focus: to improve the quality of urban
                life through heritage conservation and ecological innovation.
                Our mission transcends traditional real estate, seeking to
                create lasting value for the cities that host our developments.
              </p>
              <p>
                Beyond architectural preservation, the Foundation is a leader in
                urban reforestation. In the Mara district, we have committed to
                the long-term stewardship of the Vertical Botanical Gardens,
                ensuring they remain a public asset for generations. Our "Silent
                Learning" initiative has also provided acoustic treatment to
                twelve local primary schools, fostering environments where
                children can thrive away from the roar of metropolitan transit.
              </p>
              <p>
                We believe that a corporation's legacy is defined by its
                contribution to the common good. By integrating social
                responsibility into the fabric of our business, we ensure that
                City of Mara is not just a place to live, but a catalyst for
                positive urban change.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-12 border-t border-neutral-200 pt-16">
              <div>
                <h4 className="mb-4 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                  Philanthropic Capital
                </h4>
                <p className="font-serif text-3xl">$140M+</p>
              </div>
              <div>
                <h4 className="mb-4 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                  Global Reach
                </h4>
                <p className="font-serif text-3xl">12 Cities</p>
              </div>
            </div>

            <button className="group mt-20 flex items-center space-x-6">
              <span className="border-b border-black/20 pb-2 text-[10px] font-bold tracking-[0.5em] uppercase transition-all group-hover:border-black">
                Download 2024 Impact Report
              </span>
              <div className="h-[1px] w-12 bg-black/20 transition-all duration-500 group-hover:w-20 group-hover:bg-black" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm border border-neutral-100 bg-neutral-50 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
              className="h-full w-full object-cover opacity-80 transition-all duration-1000 hover:scale-105 hover:opacity-100"
              alt="Alber Foundation Legacy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            <div className="absolute right-12 bottom-12 left-12 text-black">
              <p className="mb-3 text-[10px] font-bold tracking-[0.4em] uppercase opacity-60">
                Legacy Project
              </p>
              <h4 className="font-serif text-2xl">
                The Vertigo Forest Initiative
              </h4>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
