import { useState } from "react"
import './HamburgerMenu.css'


export function HamburgMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen)    

    return (
        <div className="flex">
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>

            {isOpen && (
                <div className="menu flex justify-end" onClick={ toggleMenu }>
                    <ul className="flex flex-col space-y-4">
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Experience</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            )}

        </div>
    )

}