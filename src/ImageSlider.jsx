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
      {openMainModal && (
        <div className="image-slider">
          <img
            onClick={() => {
              setOpenMainModal(false);
            }}
            className="exitButton"
            src={exitIcon}
            alt=""
          />
          <div className="bigImages">
            <img
              className="mainBigImages"
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
            />

            <div className="leftArrow-div" onClick={prevSlide}>
              <img className="leftArrow" src={arrowLeft} alt="" />
            </div>
            <div className="Arrow-div" onClick={nextSlide}>
              <img className="rightArrow" src={arrowRight} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlider;
