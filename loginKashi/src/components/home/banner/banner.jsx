import React, { useState, useEffect } from "react";
import banner1 from "../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";
import banner4 from "../../../assets/images/banner/banner4.jpg";

const Banner = () => {
  const banners = [
    { src: banner1, alt: "Banner 1" },
    { src: banner2, alt: "Banner 2" },
    { src: banner3, alt: "Banner 3" },
    { src: banner4, alt: "Banner 4" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image */}

      <img
        src={banners[currentIndex].src}
        alt={banners[currentIndex].alt}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Overlay with better visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex items-center justify-center text-center px-4">
        <div className="text-white flex flex-col items-center gap-6 max-w-3xl z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_4px_8px_rgba(255,255,255,0.25)]">
            Embark on a Sacred Journey
          </h1>
          <p className="text-lg md:text-2xl font-medium text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] leading-relaxed">
            Explore the Divine Essence of <strong>Kashi</strong>, <strong>Ayodhya</strong>, <strong>Prayagraj</strong> and <strong>Chitrakoot</strong> as well as <strong>Kedarnath</strong> and <strong>Badrinath</strong> with Guided Tours and Spiritual Discoveries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Contact Button */}
            <a href="/contact">
              <button className="bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Need Assistance?
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </a>

            {/* Offer List Button */}
            <a href="/offerlist">
              <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-yellow-400 hover:text-black hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Explore Our Offers
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </a>
          </div>

        </div>
      </div>



      {/* Dots */}
      {/* Dots */}
<div className="absolute bottom-4 w-full flex justify-center space-x-2 z-30">
  {banners.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentIndex(index)}
      aria-label={`Go to slide ${index + 1}`}
      className={`w-3 h-3 rounded-full ${
        index === currentIndex ? "bg-white" : "bg-gray-400"
      }`}
    />
  ))}
</div>

      {/* <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-30">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
          />
        ))}
      </div> */}
    </div>

  );
};

export default Banner;
