import { RiLinkedinBoxLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { FaSquareGithub } from "react-icons/fa6";
import { ContactMe } from "../contact/ContactMe";


export function MyInfo() {
    
    const github = 'https://github.com/Jcook894'
    const linkedin = 'www.linkedin.com/in/julian-c-4a3563178'

    return (

        <div id='AboutMe' className="flex flex-col">

            <div className="flex flex-row justify-center">
                <RxAvatar size={ 120 } />
            </div>
            <div className="flex flex-col justify-center text-center">
                <p className="font-extrabold text-5xl"> Julian Cook </p>
                <p className="font-bold text-xl"> Senior Software Engineer </p>
            </div>
            
            {/* Social info and Resume download */}
            <div className="object-bottom bottom-0 pb-4">
                <div
                    className="flex flex-row justify-evenly bottom-0 pt-6"
                >
                    <RiLinkedinBoxLine
                        size={ 30 } 
                        onClick={ () => window.location.replace(linkedin) } 
                        className="cursor-pointer" 
                    />
                    <FaSquareGithub
                        size={ 30 } 
                        onClick={ () => window.location.replace(github) } 
                        className="cursor-pointer"
                    />
                </div>
            </div>

            {/* Contact Me form dropdown */}
            <div>
                <ContactMe />
            </div>
            
        </div>

    )


}