import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { Link, Outlet, Route, Routes, useLocation } from "react-router"
import AboutPage from "./components/AboutPage"
import ApartmentDetailPage from "./components/ApartmentDetailPage"
import ApartmentsPage from "./components/ApartmentsPage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import LifestylePage from "./components/LifestylePage"
import SpecificBuildingPage from "./components/SpecificBuildingPage"
import StoryView from "./components/StoryView"

export enum SequenceStep {
  INITIAL_TEXT = "initial_text",
  HERO_IMAGE = "hero_image",
  WELCOME_TEXT = "welcome_text",
  NAV_BAR = "nav_bar",
  BUTTONS = "buttons",
  READY = "ready",
}

const Layout: React.FC = () => {
  const location = useLocation()
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}

const PlaceholderPage: React.FC = () => {
  const location = useLocation()
  const name = location.pathname.slice(1)
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-white px-8 pt-48 text-center">
      <div className="max-w-2xl">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 block text-[10px] font-bold tracking-[0.5em] text-neutral-400 uppercase"
        >
          Curating Content
        </motion.span>
        <h1 className="mb-12 font-serif text-6xl tracking-tighter capitalize md:text-8xl">
          {name}
        </h1>
        <p className="mb-16 text-xl leading-relaxed font-light text-neutral-500">
          The {name} experience is currently being curated for the next phase of
          City of Mara.
        </p>
        <Link
          to="/"
          className="inline-block border border-black px-12 py-5 text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:bg-black hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

const App: React.FC = () => (
  <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A]">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/story" element={<StoryView />} />
      <Route element={<Layout />}>
        <Route path="/apartments" element={<ApartmentsPage />} />
        <Route
          path="/apartments/:buildingId"
          element={<SpecificBuildingPage />}
        />
        <Route
          path="/apartments/:buildingId/:apartmentId"
          element={<ApartmentDetailPage />}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lifestyle" element={<LifestylePage />} />
        <Route path="/neighborhood" element={<PlaceholderPage />} />
        <Route path="/investment" element={<PlaceholderPage />} />
        <Route path="/news" element={<PlaceholderPage />} />
        <Route path="/contact" element={<PlaceholderPage />} />
      </Route>
    </Routes>
  </div>
)

export default App
