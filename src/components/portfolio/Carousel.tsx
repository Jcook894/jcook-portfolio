import { useState } from "react";

const portfolioItems = [
    {
        name: "SafetyMap",
        img: "/1cb971e9-13ce-484a-949d-c9ecd6c42f44.png",
        description: ""
    },
    {
        name: "ezMAF",
        img: "/45b325f9-5a34-40c6-98d5-cc029bbc5b54.png",
        description: ""
    },
]

const Carousel = () => {
 
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {portfolioItems.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img src={image.img} alt={`Slide ${index}`} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none hover:bg-gray-600"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none hover:bg-gray-600"
        >
          &gt;
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
      </div>
    );

}

export default Carousel