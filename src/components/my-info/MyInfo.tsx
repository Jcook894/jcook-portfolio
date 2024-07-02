import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { ContactMe } from "../contact/ContactMe";


export function MyInfo() {
    
    const github = 'https://github.com/Jcook894'
    const linkedin = 'https://www.linkedin.com/in/julian-cook'

    return (

        <div id='AboutMe' className="flex flex-col">

            <div className="flex flex-row justify-center">
                <img
                    src="/jcook-portfolio/2a94af21-7cae-45dd-95c0-a4165e366ca0.jpeg"
                    className="w-30 h-40 rounded-full"
                    alt="Profile"
                />
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