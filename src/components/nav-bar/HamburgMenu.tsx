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

            { isOpen && (
                <div className="menu flex justify-end" onClick={ toggleMenu }>
                    <ul className="flex flex-col space-y-4">
                        <li><a href="/AboutMe">About Me</a></li>
                        <li><a href="/Experience">Experience</a></li>
                        <li><a href="/Portfolio">Portfolio</a></li>
                        <li><a href="/ContactMe">Contact Me</a></li>
                    </ul>
                </div>
            ) }

        </div>
    )

}