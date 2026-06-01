import { useState } from 'react';
import cartIcon from '../../assets/images/icon-cart.svg';
import profileAvatar from '../../assets/images/image-avatar.png';
import { logo, CartCard, NavigationLinks } from '../../index';
import closeIcon from '../../assets/images/icon-close.svg';
import hamburgerIcon from '../../assets/images/icon-menu.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [hamMenuActive, setHamMenuActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const cartProductQuantity = useSelector((state) => state.cart.length);

  return (
    <header className="z-header border-theme-dark-grayish-blue-opac desktop:px-0 mobile:py-8 mobile:px-12 fixed top-0 right-0 left-0 mr-auto ml-auto max-w-[1025px] border-b bg-white px-8 py-6">
      {isCartActive && (
        <div className="cart-card mobile:left-auto mobile:right-[10%] mobile:min-w-auto mobile:translate-x-0 absolute bottom-0 left-[50%] min-w-[90vw] translate-x-[-50%] translate-y-[110%] rounded-2xl bg-white shadow-[1px_1px_10px_rgba(1,1,1,0.5)]">
          <CartCard />
        </div>
      )}
      <div className="wrapper flex flex-row items-center justify-between">
        <div className="wrapper flex flex-row items-center justify-start gap-4">
          <div
            className="menu-btn mobile:hidden cursor-pointer"
            onClick={() => setHamMenuActive(!hamMenuActive)}
          >
            <img src={hamburgerIcon} alt="" />
          </div>

          {hamMenuActive && (
            <>
              <div
                className="overlay z-overlay bg-theme-black-75opac fixed top-0 right-0 bottom-0 left-0 cursor-pointer"
                onClick={() => setHamMenuActive(!hamMenuActive)}
              >
                {/* overlay */}
              </div>
              <div className="navMenu z-ham-menu bg-theme-white fixed top-0 right-[30%] bottom-0 left-0 p-8">
                <div
                  className="cross-btn cursor-pointer"
                  onClick={() => setHamMenuActive(!hamMenuActive)}
                >
                  <img src={closeIcon} alt="close-icon" />
                </div>
                <ul className="text-theme-dark-grayish-blue mt-8 flex flex-col gap-4">
                  <NavigationLinks />
                </ul>
              </div>
            </>
          )}

          <Link to="/home">
            <div className="logo cursor-pointer">
              <img src={logo} alt="" />
            </div>
          </Link>
        </div>

        <ul className="mobile:flex text-theme-dark-grayish-blue ml-10 hidden grow flex-row items-center justify-start gap-4">
          <NavigationLinks />
        </ul>

        <div className="wrapper flex flex-row items-center justify-start gap-4">
          <div
            className="cart relative transform cursor-pointer transition-all duration-200 ease-in-out hover:scale-120"
            onClick={() => setIsCartActive(!isCartActive)}
          >
            <img src={cartIcon} alt="cart-icon" />
            {cartProductQuantity > 0 && (
              <div className="tooltip absolute top-2 right-2 translate-x-full -translate-y-full rounded-full bg-red-600 px-2 py-1 text-center text-[12px] text-white">
                {cartProductQuantity}
              </div>
            )}
          </div>
          <div className="profile hover:border-theme-orange w-8 transform cursor-pointer rounded-full border-2 border-transparent transition-all duration-200 ease-in-out hover:scale-120">
            <img src={profileAvatar} alt="profile-pic" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
