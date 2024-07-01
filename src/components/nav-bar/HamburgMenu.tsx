import { useState } from "react";
import './HamburgerMenu.css';

interface IHamburgMenuProps {
    isOpen: boolean
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>
}

export function HamburgMenu( props: IHamburgMenuProps ) {
    
    const { isOpen, setIsOpen } = props
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
    <div className="flex justify-end pb-8 bg-red">
        <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>

        { isOpen && (
        <div className={`absolute top-9 right-0 mt-2 w-48 bg-[#00415a] rounded-md shadow-lg overflow-hidden transition-all transform ${isOpen ? 'max-h-screen' : 'max-h-0'} duration-300 ease-in-out`}>
            <ul className="flex flex-col space-y-4 p-4">
                <li className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black rounded-md cursor-pointer">
                    <a
                        href="#aboutme"
                        onClick={toggleMenu}
                    >
                        About Me
                    </a>
                </li>
                <li className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black rounded-md cursor-pointer">
                    <a
                        href="#experience"
                        onClick={toggleMenu}
                    >
                        Experience
                    </a>
                </li>
                <li className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black rounded-md cursor-pointer">
                <a
                        href="#portfolio"
                        onClick={toggleMenu}
                    >
                        Portfolio
                    </a>
                </li>
            </ul>
        </div>
        )
    }
    </div>
    );
}
