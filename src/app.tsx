import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import {
  Link,
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
  useLocation,
} from "react-router"
import AboutPage from "./components/about-page"
import ApartmentDetailPage from "./components/apartment-detail-page"
import ApartmentsPage from "./components/apartments-page"
import Footer from "./components/footer"
import Header from "./components/header"
import HomePage from "./components/home-page"
import LifestylePage from "./components/lifestyle-page"
import SpecificBuildingPage from "./components/specific-building-page"

export enum SequenceStep {
  INITIAL_TEXT = "initial_text",
  HERO_IMAGE = "hero_image",
  WELCOME_TEXT = "welcome_text",
  NAV_BAR = "nav_bar",
  BUTTONS = "buttons",
  READY = "ready",
}

const RootLayout: React.FC = () => (
  <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A]">
    <ScrollRestoration />
    <Outlet />
  </div>
)

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
          className="mb-8 block text-[10px] font-bold text-neutral-400 uppercase"
        >
          Curating Content
        </motion.span>
        <h1 className="mb-12 font-serif text-6xl capitalize md:text-8xl">
          {name}
        </h1>
        <p className="mb-16 text-xl leading-relaxed font-light text-neutral-500">
          The {name} experience is currently being curated for the next phase of
          City of Mara.
        </p>
        <Link
          to="/"
          className="inline-block border border-black px-12 py-5 text-[10px] font-bold uppercase transition-all hover:bg-black hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        element: <Layout />,
        children: [
          { path: "/apartments", element: <ApartmentsPage /> },
          {
            path: "/apartments/:buildingId",
            element: <SpecificBuildingPage />,
          },
          {
            path: "/apartments/:buildingId/:apartmentId",
            element: <ApartmentDetailPage />,
          },
          { path: "/about", element: <AboutPage /> },
          { path: "/lifestyle", element: <LifestylePage /> },
          { path: "/neighborhood", element: <PlaceholderPage /> },
          { path: "/investment", element: <PlaceholderPage /> },
          { path: "/news", element: <PlaceholderPage /> },
          { path: "/contact", element: <PlaceholderPage /> },
        ],
      },
    ],
  },
])
