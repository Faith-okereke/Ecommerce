import { useState } from "react";
import "./App.css";
import ImageSlider from "./ImageSlider";
import logo from "./assets/logo.svg";
import cart from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";
import image1 from "/image-product-1.jpg";
import smallImage1 from "./assets/image-product-1-thumbnail.jpg";
import iconDelete from "./assets/icon-delete.svg";
import iconPlus from "./assets/icon-plus.svg";
import iconMinus from "./assets/icon-minus.svg";
import hamburger from "./assets/icon-menu.svg";
import closeMenu from "./assets/icon-close.svg";
import smallImage2 from "./assets/image-product-2-thumbnail.jpg";
import smallImage3 from "./assets/image-product-3-thumbnail.jpg";
import smallImage4 from "./assets/image-product-4-thumbnail.jpg";
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

  const mainPrice = 125.0;
  let multiplication = mainPrice * count;
  const cartNumber = document.querySelector(".number");
  const addItemToCart = () => {
    setItem(count);
  };
  const [openModal, setOpenModal] = useState(false);
  const showCartItems = () => {
    setOpenModal((prevItems) => !prevItems);
  };
  const closeModal=()=>{
    setOpenModal(false)
  }
  const [showNav, setShowNav] = useState(false);
  const openNav = () => {
    console.log("NavBar Opened");
    setShowNav(true);
  };
  const closeNav = () => {
    console.log("NavBar Closed");
    setShowNav(false);
  };
  const clearItem=()=>{
    setCount(0)
  }
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
    <>
      <header>
        <div className="firsts">
          <img
            onClick={openNav}
            className="hamburger"
            src={hamburger}
            alt="hamburger"
          />
          <img src={logo} alt="" className="logo" />
          {showNav && (
            <div className="DivUl">
              <img onClick={closeNav} src={closeMenu} alt="" />
              <ul>
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
          <ul className="ul-nav-pc">
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

        <div className="images">
          <img onClick={showCartItems} src={cart} alt="cart" className="cart" />
          {count > 0 && <p className="number">{item}</p>}
          {openModal && (
            <div className="modalCart">
              <p className="cartTopic">Cart</p>
              <div id="modalCartInfo">
                {count < 1 ? (
                  <p className="emptyMessage">Your cart is empty</p>
                ) : (
                  <div className="notEmptyFirst">
                    <div className="notEmptyCart">
                      <img
                        className="smallImageThumbnail"
                        src={smallImage1}
                        alt=""
                      />
                      <div className="middle">
                        <p>Fall limited sneaker edition</p>
                        <p>
                          $125.00 &times; {count}
                          <span> {multiplication}.00</span>{" "}
                        </p>
                      </div>
                      <img onClick={clearItem} src={iconDelete} alt="" />
                    </div>

                    <button onClick={closeModal}>Checkout</button>
                  </div>
                )}
              </div>
            </div>
          )}
          <img src={avatar} alt="cart" className="avatar" />
        </div>
      </header>
      <main>
        <div className="mainBigImages">
          <ImageSlider images={Mainimages} />
        </div>
        <div className="big-images">
          <img src={image1} alt="" className="image-1" />
        </div>
        <div className="content">
          <h4>Sneaker Company</h4>
          <h2>
            Fall Limited Edition <br /> Sneakers
          </h2>
          <p className="para">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="price">
            <div className="main-money">
              <p className="main-money-price"> $125.00</p>
              <p className="discount">50%</p>
            </div>
            <p className="former-price">$250.00</p>
          </div>
          <div className="payout">
            <p>
              <img onClick={subNumber} src={iconMinus} />
              {count}
              <img onClick={addNumber} src={iconPlus} />
            </p>
            <button onClick={addItemToCart} className="addItem">
              {" "}
              <img className="cart-2" src={cart} alt="" /> Add to cart
            </button>
          </div>
        </div>
      </main>

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

      <div className="image-slider">
        <ImageSlider
          openMainModal={openMainModal}
          images={Mainimages}
          setOpenMainModal={setOpenMainModal}
        />
      </div>
    </>
  );
}

export default App;
