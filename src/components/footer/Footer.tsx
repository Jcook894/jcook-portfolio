import { FaRegCopyright } from "react-icons/fa6";

export function Footer() {

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        
        <div className="flex justify-center">
            <div className='flex flex-row  h-16'>
                <span className="pt-1 pr-1">
                    <FaRegCopyright size={ 16 } /> 
                </span>
                <span> 
                    { currentYear } Designed & Developed by <strong> Julian Cook </strong>
                </span>
            </div>
        </div>

    )

}