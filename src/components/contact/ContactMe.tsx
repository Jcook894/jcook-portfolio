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

    const handleChange = ( event: any, field: string ) => {

        const val = event.target.value
        const err = ( val === "" ? true : false )

        // Validate on input change:
        setContactForm( {  ...contactForm, [ field ]: { value: event.target.value, error: err } })

    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        location.href = `mailto:jcook3894@gmail.com?subject=${contactForm.name.value}&body=${contactForm.message.value}`;
    }
    
    return (

        <div className="my-2 sm:my-4 md:my-6 shadow-sm">
            
            <div 
                className="px-6 items-center justify-center h-20 select-none flex flex-row cursor-pointer"
                onClick={toggleForm}
            >
                <h5 className="pr-2"> Contact Me </h5>
                <IoIosArrowDown style = {{transform: isOpen ? 'rotate(180deg)' : ''}}/>
            </div>

            <form
                onSubmit={ (e) => onSubmit(e) }
                className={`flex flex-col justify-center px-6 pt-0 overflow-hidden transition-[max-height] duration-400 ease-in ${isOpen ? "max-h-80" : "max-h-0"} w-full`}
            >
                <div className="flex p-2 w-full rounded-sm">
                    {
                        contactForm.name.error && <p>
                            Please enter your name
                        </p>
                    }
                    <input
                        required
                        type="text"
                        className="text-black p-1 h-8 mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-[#009bd6] "
                        placeholder="Name"
                        value={ contactForm.name.value }
                        onChange={ ( e ) => handleChange( e, "name" ) }
                    />                     
                </div>
                <div className="flex p-2">
                    {
                        contactForm.email.error && <p>
                            Please enter your email
                        </p>
                    }
                    <input
                        required
                        type="email"
                        className="text-black p-1 h-8 mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-[#009bd6] focus:ring focus:ring-[#009bd6] focus:ring-opacity-50"
                        placeholder="Email"
                        value={ contactForm.email.value }
                        onChange={ ( e ) => handleChange( e, "email" ) }
                    />                    
                </div>
                <div className="flex grow p-2">
                    {
                        contactForm.message.error && <p>
                            Please enter a message
                        </p>
                    }
                    <textarea
                        required
                        className="text-black p-1 h-20 mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-[#009bd6] focus:ring focus:ring-[#009bd6] focus:ring-opacity-50"
                        placeholder="Message..."
                        value={ contactForm.message.value }
                        onChange={ ( e ) => handleChange( e, "message" ) }
                    />                      
                </div>
                <div>
                    <button
                        type="submit"
                        className={`text-black bg-white mt-6 border rounded-xl border-gray-300 p-2 hover:bg-[#009bd6] hover:text-white`}
                    >
                        Submit Message
                    </button>   
                </div>       
            </form>
        </div>

    )


}