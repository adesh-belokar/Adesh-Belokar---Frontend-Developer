import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { SiSpacex } from "react-icons/si"
import SearchBar from "../pages/SearchBar"


export default function Header({ capsules, setFilteredCapsules }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <header className="absolute flex items-center justify-between px-5 w-full">
        <div>
          <Link to="/">
            <SiSpacex className="text-8xl text-white" />
          </Link>
        </div>

        <nav className={`${isOpen ? "open" : ""}`}>
          <ul>
            <li>
            <SearchBar/>
            </li>
            <li>
              <Link to="/capsules" className="text-white text-sm">
                Capsules
              </Link>
            </li>
            
            <li>
              <Link to="/dragons" className="text-white text-sm">
                Dragons
              </Link>
            </li>
            
            <li>
              <Link to="/rockets" className="text-white text-sm">
                Rockets
              </Link>
            </li>
            
          </ul>
        </nav>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-sm uppercase tracking-wider"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>
    </>
  )
}

