import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


export function ContactMe() {
    const [ isOpen, setIsOpen ] = useState<boolean>( false )

    const toggleForm = () => setIsOpen(!isOpen)

    return (

        <div id="ContactMe" className="container mx-auto px-10" >

            <div
                onClick={ toggleForm }
                className="flex flex-row justify-center pt-12 cursor-pointer"
            >

                <span className="font-bold"> Contact Me </span>
                <span className='pt-1 pl-1'> <IoIosArrowDown style = {{transform: isOpen ? 'rotate(180deg)' : ''}}/> </span>

            </div>
            
            {
                isOpen && (
                    <form className="flex flex-col justify-equal"> 
                        <div className="w-100">
                            <input type="text" placeholder="Name" />  
                        </div>
                        <div>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div>
                            <textarea placeholder="Your message" />
                        </div>
                        <div>
                            <button name="Send Message" />
                        </div>
                    </form>
                )
            }

        </div>

    )


}