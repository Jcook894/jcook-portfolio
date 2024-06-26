import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IContactForm {
    name: IInputState
    email: IInputState
    message: IInputState
}

interface IInputState {
    value: string
    error: boolean
}

export function ContactMe() {
    const [ isOpen, setIsOpen ] = useState<boolean>( false )
    const [ contactForm, setContactForm ] = useState<IContactForm>({
        email: {
            value: "",
            error: false
        },
        name: {
            value: "",
            error: false
        },
        message: {
            value: "",
            error: false
        }
    })

    const toggleForm = () => setIsOpen(!isOpen)

    // const setContactForm = ( formField: string ) => setContactForm({ ...contactForm, "form" })

    return (

        <div className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer">
            
            <div 
                className="px-6 items-center justify-center h-20 select-none flex flex-row"
                onClick={toggleForm}
            >
                <h5 className="pr-2"> Contact Me </h5>
                <IoIosArrowDown style = {{transform: isOpen ? 'rotate(180deg)' : ''}}/>
            </div>

            <form className={`flex flex-col justify-center px-6 pt-0 overflow-hidden transition-[max-height] duration-200 ease-in ${isOpen ? "max-h-80" : "max-h-0"} w-full`}>
                <div className="flex p-2 w-full rounded-sm">
                    <input
                        type="text"
                        className="mt-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                        placeholder="Name"
    
                    />                     
                </div>
                <div className="flex p-2">
                    <input
                        type="email"
                        className="mt-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                        placeholder="Email"
                    />                    
                </div>
                <div className="flex grow p-2">
                    <textarea
                        className="mt-1 w-full rounded-sm border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
                        placeholder="Message"
    
                    />                      
                </div>
                <div>
                    <button
                        type="button"
                        className={`text-black bg-white mt-6 border rounded-xl border-gray-300 p-2 hover:bg-purple-500 hover:text-white`}
                        // disabled={loading}
                        // onClick={handleSignIn}
                    >
                        Submit Message
                    </button>   
                </div>       
            </form>
        </div>

    )


}