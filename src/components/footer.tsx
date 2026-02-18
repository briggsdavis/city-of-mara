import React from "react"
import { Link } from "react-router"

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-white px-8 pt-32 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-3">
          <div className="col-span-1 md:col-span-1">
            <h4 className="mb-8 font-serif text-4xl">City of Mara</h4>
            <p className="max-w-xs text-sm leading-relaxed font-light text-gray-400">
              Exceptional architecture. Unparalleled serenity. The future of
              metropolitan luxury living.
            </p>
          </div>

          <div>
            <h5 className="mb-10 text-[10px] font-bold text-neutral-800 uppercase">
              Explore
            </h5>
            <ul className="space-y-5 text-sm font-light text-gray-500">
              <li>
                <Link
                  to="/apartments"
                  className="transition-colors hover:text-black"
                >
                  Residences
                </Link>
              </li>
              <li>
                <Link
                  to="/neighborhood"
                  className="transition-colors hover:text-black"
                >
                  Neighborhood
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-black"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  to="/investment"
                  className="transition-colors hover:text-black"
                >
                  Investment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-10 text-[10px] font-bold text-neutral-800 uppercase">
              Atelier
            </h5>
            <ul className="space-y-5 text-sm font-light text-gray-500">
              <li>
                <Link to="/news" className="transition-colors hover:text-black">
                  Press & News
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-black"
                >
                  Enquire
                </Link>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Private Portal
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-black">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-gray-50 pt-10 text-xs font-bold uppercase opacity-30 md:flex-row">
          <p>© {new Date().getFullYear()} City of Mara. All rights reserved.</p>
          <a
            href="https://briggsdavis.com"
            className="mt-6 transition-opacity hover:opacity-100 md:mt-0"
          >
            Made by Briggs Davis
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
