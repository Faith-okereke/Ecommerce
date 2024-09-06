import React from "react";
import smallImage1 from "./assets/image-product-1-thumbnail.jpg";
import smallImage2 from "./assets/image-product-2-thumbnail.jpg";
import smallImage3 from "./assets/image-product-3-thumbnail.jpg";
import smallImage4 from "./assets/image-product-4-thumbnail.jpg";
export default function TinyImages({ showMainModal }) {
  return (
    <div>
      <div className="md:flex hidden items-center gap-5 pl-44 py-10">
        <img
          onClick={showMainModal}
          className="active w-20 rounded-lg cursor-pointer  hover:opacity-40"
          src={smallImage1}
          alt=""
        />
        <img
          className=" w-20 rounded-lg cursor-pointer hover:opacity-40"
          onClick={showMainModal}
          src={smallImage2}
          alt=""
        />
        <img
          className=" w-20 rounded-lg cursor-pointer hover:opacity-40"
          onClick={showMainModal}
          src={smallImage3}
          alt=""
        />
        <img
          className=" w-20 rounded-lg cursor-pointer hover:opacity-40"
          onClick={showMainModal}
          src={smallImage4}
          alt=""
        />
      </div>
    </div>
  );
}
