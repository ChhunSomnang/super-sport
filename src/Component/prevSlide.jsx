import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const slides = [
    {
      url: "https://store.fcbarcelona.com/cdn/shop/collections/banners_equipacion_2.jpg?v=1706114047&width=2500",
    },
    {
      url: "https://www.thesoccerstore.co.uk/media/wysiwyg/Ultimatch_One_Mobile.jpg",
    },
    {
      url: "https://www.wilson.com/sites/default/files/styles/none/public/23-1386_CityEdition_Homepage_Banner.jpg?",
    },
    {
      url: "https://www.bergamosera.com/wp-content/uploads/2021/03/FIVB-vball-1024x683-1.png",
    },
    {
      url: "https://www.gearpatrol.com/wp-content/uploads/sites/2/2023/05/nike-running-shoe-buying-guide-refresh-lead-64517574cc201-jpg.webp",
    },
  ];

  return (
    
      <div className="max-w-screen-lg mx-auto h-[600px] w-3/4 m-auto py-16 relative group ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full flex items-center rounded-lg justify-center opacity-0 transition-opacity duration-500 ease-in-out"
            style={{
              backgroundImage: `url(${slide.url})`,
              zIndex: currentIndex === index ? 1 : 0,
              opacity: currentIndex === index ? 1 : 0,
            }}
          >
            <img
              src={slide.url}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 left-0 text-white z-10 cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 right-0 text-white z-10 cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full bg-white/50 cursor-pointer ${
                currentIndex === index ? "bg-white" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    
  );
}
