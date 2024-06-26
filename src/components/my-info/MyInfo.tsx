import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import { ContactMe } from "../contact/ContactMe";


export function MyInfo() {
    
    const github = 'https://github.com/Jcook894'
    const linkedin = 'www.linkedin.com/in/julian-c-4a3563178'

    return (

        <div id='AboutMe' className="flex flex-col justify-between">

            <div className="flex flex-col justify-evenly text-left">
                <h1 className="font-bold"> Julian Cook </h1>
                <h3 className="font-bold"> Senior Software Engineer </h3>
            </div>
            
            {/* Contact me dropdown */}
            <div>
                <ContactMe />
            </div>
            

            {/* Social info and Resume download */}
            <div className="flex flex-row justify-evenly pt-6" >
                <RiLinkedinBoxLine
                    size={ 28 } 
                    onClick={ () => window.location.replace(linkedin) } 
                    className="cursor-pointer" 
                />
                <FaSquareGithub
                    size={ 26 } 
                    onClick={ () => window.location.replace(github) } 
                    className="cursor-pointer"
                />
                <LuNewspaper 
                    size={ 26 } 
                    onClick={ () => console.log( "Download Resume" )  } 
                    className="cursor-pointer"
                />
            </div>

        </div>

    )


}