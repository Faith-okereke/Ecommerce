import React, { useState } from "react";
import "./App.css";
import arrowLeft from "./assets/icon-previous.svg";
import arrowRight from "./assets/icon-next.svg";
import exitIcon from "./assets/icon-close.svg";

const ImageSlider = ({ images, openMainModal, setOpenMainModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      
        <div className="md:fixed sticky inset-0 bg-black bg-opacity-75 flex items-center justify-center md:z-30">
          <div className="relative max-w-2xl w-full">
            {/* Close button */}
            <img
              onClick={() => setOpenMainModal(false)}
              className="absolute hidden md:block -top-8 right-[20%] cursor-pointer"
              src={exitIcon}
              alt="Close"
            />
            {/* Image and navigation */}
            <div className="relative flex justify-center items-center">
              <img
                className="w-full md:w-[60%] md:rounded-xl fill-white"
                src={images[currentImageIndex]}
                alt={`Slide ${currentImageIndex + 1}`}
              />
              {/* Previous Button */}
              <button
                className="absolute top-1/2 md:left-[120px] left-5 transform -translate-y-1/2 bg-white rounded-full flex justify-center items-center h-10 w-10 cursor-pointer"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <img src={arrowLeft} alt="Previous" />
              </button>
              {/* Next Button */}
              <button
                className="absolute top-1/2 md:right-[120px] right-5 transform -translate-y-1/2 bg-white rounded-full flex justify-center items-center h-10 w-10 cursor-pointer"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <img src={arrowRight} alt="Next" />
              </button>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default ImageSlider;
