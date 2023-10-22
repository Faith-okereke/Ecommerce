import React, { useState } from 'react';
import './App.css';
import arrowLeft from "./assets/icon-previous.svg";
import arrowRight from "./assets/icon-next.svg";
import exitIcon from './assets/icon-close.svg'

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
  const [openMainModal, setOpenMainModal] = useState(true)
  const closeModal=()=>{
   
    setOpenMainModal((prevShow)=>!prevShow)
  }

  return (
    <div className="image-slider">
      {openMainModal &&
       <div className="bigImages">
       <img
         className="mainBigImages"
         src={images[currentImageIndex]}
         alt={`Slide ${currentImageIndex + 1}`} 
       />
       <img onClick={closeModal} className='exitButton' src={exitIcon} alt="" />
       <div className="leftArrow-div">
         <img onClick={prevSlide} className="leftArrow" src={arrowLeft} alt="" />
       </div>
       <div className="Arrow-div">
         <img onClick={nextSlide} className="rightArrow" src={arrowRight} alt="" />
       </div>
     </div>
    }
     
       
     </div>
  );
};

export default ImageSlider;
