import { useState } from "react";
import "./App.css";
import ImageSlider from "./ImageSlider";
import cart from "./assets/icon-cart.svg";
import image1 from "/image-product-1.jpg";
import iconPlus from "./assets/icon-plus.svg";
import iconMinus from "./assets/icon-minus.svg";

import TinyImages from "./TinyImages";
import Nav from "./Nav";
function App(props) {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");
  function subNumber() {
    if (count > 0) {
      setCount(count - 1);
      return;
    }
  }
  function addNumber() {
    setCount(count + 1);
  }
  const [showNav, setShowNav] = useState(false);

  const closeNav = () => {
    console.log("NavBar Closed");
    setShowNav(false);
  };
  const cartNumber = document.querySelector(".number");
  const addItemToCart = () => {
    setItem(count);
  };

  const Mainimages = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];
  const [openMainModal, setOpenMainModal] = useState(false);
  const showMainModal = () => {
    setOpenMainModal((prevState) => !prevState);
  };
  return (
    <div>
      <Nav
        count={count}
        setCount={setCount}
        item={item}
       
      />
     {openMainModal && ( <div className="">
        <ImageSlider
          openMainModal={openMainModal}
          images={Mainimages}
          setOpenMainModal={setOpenMainModal}
        />
      </div>)}
      <div className="md:hidden block">
        <ImageSlider
          openMainModal={openMainModal}
          images={Mainimages}
          setOpenMainModal={setOpenMainModal}
        />
      </div>
      <div
        className={`pb-20 ${
          openMainModal
            ? `opacity-75 bg-opacity-80 pointer-events-none bg-overlay overlay`
            : ``
        }`}
      >
        <main className="md:pt-12">
          <div className="flex justify-center gap-28">
            <img
              src={image1}
              alt=""
              className="rounded-lg w-1/3 md:block hidden"
            />

            <div className="flex flex-col gap-4 md:pt-12 p-5 md:p-0">
              <h4 className="text-orange font-bold uppercase text-base">
                Sneaker Company
              </h4>
              <h2 className="md:text-4xl text-3xl font-bold pb-5 md:w-2/3">
                Fall Limited Edition Sneakers
              </h2>
              <p className="max-w-[420px] text-lightGray">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>
              <div className="">
                <div className="flex justify-start items-center gap-3">
                  <p className="text-2xl font-bold"> $125.00</p>
                  <p className="text-orange font-bold bg-lightOrange rounded-sm px-2 py-[1px] text-sm">
                    50%
                  </p>
                </div>
                <p className="text-xs text-lightGray pt-1 font-bold line-through">
                  $250.00
                </p>
              </div>
              <div className="flex md:flex-row flex-col justify-normal gap-5 items-center">
                <div className="flex items-center justify-between md:w-1/3 w-full bg-veryLightGray rounded-md px-5 py-3 gap-6">
                  <img
                    onClick={subNumber}
                    src={iconMinus}
                    className="w-2 cursor-pointer"
                  />
                  <p className="font-bold">{count}</p>
                  <img
                    onClick={addNumber}
                    src={iconPlus}
                    className="w-2 cursor-pointer"
                  />
                </div>
                <div
                  onClick={addItemToCart}
                  className="flex gap-2 addItem bg-orange px-5 py-3 rounded-md items-center cursor-pointer w-full  justify-center"
                >
                  <img className="w-3" src={cart} alt="" />
                  <button className="text-white font-bold text-sm">
                    {" "}
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        {showNav && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={closeNav}
          ></div>
        )}
        <TinyImages showMainModal={showMainModal} />
      
      </div>
    </div>
  );
}

export default App;
