import React, { useState } from "react";
import hamburger from "./assets/icon-menu.svg";
import closeMenu from "./assets/icon-close.svg";
import iconDelete from "./assets/icon-delete.svg";
import logo from "./assets/logo.svg";
import cart from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";
import smallImage1 from "./assets/image-product-1-thumbnail.jpg";

export default function Nav({ count, setCount}) {
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
    setShowNav(!showNav);
  };
  const closeNav = () => {
    console.log("NavBar Closed");
    setShowNav(false);
  };
  const clearItem = () => {
    setCount(0);
  };

  return (
    <header className="md:px-24 md:py-8 p-4 ">
      <div className="flex justify-between w-full md:border-b-2 md:border-b-lightGray md:pb-8">
        <div className="flex items-center md:gap-20 gap-4">
          <img
            onClick={openNav}
            className="md:hidden block w-6"
            src={hamburger}
            alt="hamburger"
          />
          <img src={logo} alt="" className="" />
          <div className={`w-[60%] bg-white h-full fixed left-0 top-0 pl-5 md:hidden block z-30 transform transition-transform duration-300 ease-in-out ${
            showNav ? 'translate-x-0' : '-translate-x-full'
          }`}>
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

        {/* Rest of the component remains the same */}
      </div>
    </header>
  );
}