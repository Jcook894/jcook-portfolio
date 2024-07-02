import { useState } from "react"
import ImgPopup from "./ImgPopup"
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

const portfolioItems = [
    {
        name: "SafetyMap",
        img: "/jcook-portfolio/1cb971e9-13ce-484a-949d-c9ecd6c42f44.png",
        description: <div className="text-left">
          <p className="text-sm"> The SafetyMap project is an intiative for the Boston Childrens Hospital to streamline fire drills, construction work, and location management across the thousands of locations they have. The project is using ASP.NET for the backend framework and jQuery to build the UI. I've been the lead the developer for the SafetyMap project for 6 years in which I manage offshore resources as well as getting in there and coding myself! </p>
        </div>
    },
    {
        name: "ezMAF",
        img: "/jcook-portfolio/45b325f9-5a34-40c6-98d5-cc029bbc5b54.png",
        description: <div className="text-left">
        <p className="text-sm"> The ezMAF is an intiative for OSH in NY that streamlines the asthma form process. I built out the UI for the parent, and provider form and dashboard as Micro Front Ends. I built out the UI adapter that consumes the Micro Front Ends that display based on patient context. I also integrated DocuSign to create and update the pdf form for asthma. </p>
      </div>
    }
]

const Carousel = () => {
 
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    const handlePrev = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1))
    }
  
    const handleNext = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1))
    }

    const handleImageClick = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
    };

    const { img, description } = portfolioItems[currentIndex];
  
    return (
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {portfolioItems.map((image, index) => (
              <>
                <div key={index} className="w-full flex-shrink-0">
                  <img src={image.img} alt={`Slide ${index}`} className="w-full object-cover cursor-pointer" onClick={handleImageClick} />
                </div>
              </>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none hover:bg-gray-600"
        >
          <FaArrowLeft size={ 30 }/>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none hover:bg-gray-600"
        >
          <FaArrowRight size={30} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full focus:outline-none ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
        <ImgPopup
          imageSrc={img}
          description={description}
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        />
      </div>
    )

}

export default Carousel