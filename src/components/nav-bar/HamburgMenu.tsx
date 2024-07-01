import { useState } from "react"
import './HamburgerMenu.css'


export function HamburgMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen)    

    return (
        <div className="flex justify-end pb-8">

            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>

            { isOpen && (
                <div className={`absolute top-6 right-0 mt-2 w-48 bg-[#505a74] rounded-md shadow-lg overflow-hidden transition-all transform ${isOpen ? 'max-h-screen' : 'max-h-0'} duration-300 ease-in-out`}>
                <ul className="flex flex-col space-y-4 p-4">
                  <li>
                    <a
                      href="#AboutMe"
                      className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black rounded-md"
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Experience"
                      className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black rounded-md"
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Portfolio"
                      className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black rounded-md"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            ) 
            }

        </div>
    )

}