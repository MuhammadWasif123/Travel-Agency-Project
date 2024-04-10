import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import "./Navbar.css";
import menu from "../../assets/Images/menu.svg";
import PopUpMenu from "./PopUpMenu";

const Navbar = ({ navlinks }) => {
  // const [popupState, setPopupState] = useState(false);
  const [navState, setNavState] = useState(false);
  // const onTriggerPopup = () => setPopupState(!popupState);


  const onNavScroll = () => {
    if(window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
      window.removeEventListener('scroll', onNavScroll);
    }
  }, [])

  return (
    <>
      <header
        className={`nav-default-style  ${navState && 'nav-sticky-style'}`}
      >
        <nav className="w-[85vw] mx-auto xl:w-[92vw] xl:mx-auto flex md:w-[83vw] items-center justify-between font-openSans sm:w-[85vw]">
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt="Travigo" className="w-22 h-9 object-fill" />
          </NavLink>

          <ul className="flex items-center list-none gap-x-[30px] font-normal lg:hidden">
            {navlinks.map((val, i) => (
              <li key={i}>
                <NavLink className="text-lg text-slate-900 no-underline">
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="list-none lg:hidden ">
            <li>
              <button
                type="button"
                className="button-gradient-emerald text-white py-2 border-none rounded-full px-9 text-xl font-medium  transition-all duration-200 active:scale-90 shadow-lg shadow-emerald-500"
              >
                Join Us
              </button>
            </li>
          </ul>

          <ul className="list-none hidden lg:flex lg:items-center">
            <li>
              <button
                type="button"
                className="border-none bg-transparent flex items-center justify-center"
              >
                <img
                  src={menu}
                  alt="Error Loading Image"
                  className="object-cover cursor-pointer shadow-sm filter button-emerald-gradient transition-all duration-200 active:scale-90"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* <PopUpMenu navlinks={navlinks} popupState={popupState} /> */}
    </>
  );
};

export default Navbar;
