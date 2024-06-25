import { FaRegCopyright } from "react-icons/fa6";

export function Footer() {

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (

        <div className="flex align-center text-justify">
            <span className="pt-1 pr-1">
                <FaRegCopyright size={ 16 } /> 
            </span>
            <span> 
                { currentYear } Designed & Developed with ❤️ By Julian Cook
            </span>
        </div>

    )

}