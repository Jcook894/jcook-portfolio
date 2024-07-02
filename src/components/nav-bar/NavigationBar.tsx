import { useState } from "react";
import { HamburgMenu } from "./HamburgMenu";


export function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className='fixed justify-end w-full pr-4 pt-2 h-16 text-white bg-transparent'>
            <div className={`fixed top-4 right-6 w-12 h-12 rounded-lg ${ isOpen ? "rounded-b-none" : null } bg-[#00415a] flex items-center justify-center`}>
                <div className="pt-8">
                    <HamburgMenu isOpen={isOpen} setIsOpen={ setIsOpen } />
                </div>
            </div>
        </div>

    )

}