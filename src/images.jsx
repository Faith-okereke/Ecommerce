import { useState } from "react";
import smallImage1 from "./assets/image-product-1-thumbnail.jpg";
import smallImage2 from "./assets/image-product-2-thumbnail.jpg";
import smallImage3 from "./assets/image-product-3-thumbnail.jpg";
import smallImage4 from "./assets/image-product-4-thumbnail.jpg";
import ImageSlider from "./ImageSlider";
export default function Images(){
    const [openMainModal, setOpenMainModal] = useState(true)
const showMainModal = () =>{
  setOpenMainModal((prevState)=>prevState)
}
    return(
    <>
    <div className="littleImages">
        <img
          onClick={showMainModal}
          className="active"
          src={smallImage1}
          alt=""
        />
        <img onClick={showMainModal} src={smallImage2} alt="" />
        <img onClick={showMainModal} src={smallImage3} alt="" />
        <img onClick={showMainModal} src={smallImage4} alt="" />
      </div>
    </>
    )
}