import React, { useState } from 'react';
import './App.css';
import arrowLeft from "./assets/icon-previous.svg";
import arrowRight from "./assets/icon-next.svg";

const ImageSlider = ({ images }) => {
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
    <div className="image-slider">
      <div className="bigImages">
          <img
            className="mainBigImages"
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`} 
          />
          <div className="leftArrow-div">
            <img onClick={prevSlide} className="leftArrow" src={arrowLeft} alt="" />
          </div>
          <div className="Arrow-div">
            <img onClick={nextSlide} className="rightArrow" src={arrowRight} alt="" />
          </div>
        </div>
      
       
     </div>
  );
};

export default ImageSlider;
