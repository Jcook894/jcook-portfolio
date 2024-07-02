import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ImagePopupProps {
  imageSrc: string
  description: JSX.Element
  isOpen: boolean
  onClose: () => void
}

const ImgPopup: React.FC<ImagePopupProps> = ({ imageSrc, description, isOpen, onClose }) => {
  
    if (!isOpen) return null

    return (
        <div className="xl:container fixed inset-0 bg-[#1d1936] bg-opacity-75 flex items-center w-full justify-center">
            <div className="bg-[#1d1936] rounded-lg shadow-lg max-w-md w-full relative">
               
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                    <IoIosCloseCircleOutline size={ 30 } color='red' />
                </button>
                <img src={imageSrc} alt="Popup" className="mb-4 rounded-md object-fill" />
                
                {description}

            </div>
        </div>
    )
}

export default ImgPopup
