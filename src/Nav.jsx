import React, { useState } from "react";
import hamburger from "./assets/icon-menu.svg";
import closeMenu from "./assets/icon-close.svg";
import iconDelete from "./assets/icon-delete.svg";
import logo from "./assets/logo.svg";
import cart from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";
import smallImage1 from "./assets/image-product-1-thumbnail.jpg";
export default function Nav({ count, setCount, item }) {
  const [openModal, setOpenModal] = useState(false);
  const mainPrice = 125.0;
  let multiplication = mainPrice * count;

  const showCartItems = () => {
    setOpenModal((prevItems) => !prevItems);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const [showNav, setShowNav] = useState(false);
  const openNav = () => {
    console.log("NavBar Opened");
    setShowNav(true);
  };
  const closeNav = () => {
    console.log("NavBar Closed");
    setShowNav(false);
  };
  const clearItem = () => {
    setCount(0);
  };
  return (
    <header className="md:px-24 md:py-8 p-4">
      <div className="flex justify-between w-full md:border-b-2 md:border-b-lightGray md:pb-8">
        <div className="flex items-center md:gap-20 gap-4">
          <img
            onClick={openNav}
            className="md:hidden block w-6"
            src={hamburger}
            alt="hamburger"
          />
          <img src={logo} alt="" className="" />
          {showNav && (
            <div className="w-[60%] bg-white h-full fixed left-0 top-0 pl-5 md:hidden block z-30">
              <img
                onClick={closeNav}
                src={closeMenu}
                alt=""
                className="fill-black z-10 w-4 h-4 mt-5"
              />
              <ul className="flex flex-col gap-4 justify-start font-bold  pt-12 z-30">
                <li>
                  <a href="#">Collections</a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          )}

          <ul className="md:flex  justify-center gap-10 items-center hidden">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center md:gap-7 gap-2">
          <div className="relative">
            <img
              onClick={showCartItems}
              src={cart}
              alt="cart"
              className="cursor-pointer relative"
            />
            {count > 0 && (
              <p className="bg-orange px-2 text-white text-[8px] rounded-2xl absolute -top-1 left-2">
                {item}
              </p>
            )}
          </div>

          {openModal && (
            <div className="absolute top-16 right-16 bg-white shadow-xl rounded-md ">
              <p className="border-b-2 border-b-veryLightGray py-3 px-2 font-bold">
                Cart
              </p>
              <div className=" flex flex-col justify-center items-center px-5">
                {count < 1 ? (
                  <div className="px-12 h-24 flex justify-center items-center">
                    <p className="text-center flex-nowrap text-nowrap font-bold">
                      Your cart is empty.
                    </p>
                  </div>
                ) : (
                  <div className="pb-5">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-8 rounded-md"
                        src={smallImage1}
                        alt=""
                      />
                      <div className="pt-3">
                        <p>Fall limited sneaker edition</p>
                        <p>
                          $125.00 &times; {count}
                          <strong> ${multiplication}.00</strong>{" "}
                        </p>
                      </div>
                      <img
                        onClick={clearItem}
                        src={iconDelete}
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>

                    <button
                      className="bg-orange w-full rounded-md p-2 text-white text-center my-5"
                      onClick={closeModal}
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          <img
            src={avatar}
            alt="cart"
            className="w-8 cursor-pointer border-2 rounded-full  hover:border-orange"
          />
        </div>
      </div>
    </header>
  );
}
