import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
// import logo from "../assets/logo.svg";

const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false)
  const toggleHamburgerMenu = () => {
    setShowHamburger(!showHamburger)
    console.log(showHamburger)
  }
  
  return (
    <header >
      <div className="container">
        <div className="grid grid-cols-2 justify-between align-center">
          <div className="logoSection">
            <div>
              {/* <img width={350} height={50} src={logo} alt="World Tour" /> */}
              <NavLink className="logo" to="/">World Tour</NavLink>
            </div>
          </div>
          <div className="navBarSection">
            <ul className="web-view flex justify-end">
              <li>
                <NavLink className="navBarLink" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navBarLink" to="contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="navBarLink" to="about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="navBarLink" to="country">
                  Country
                </NavLink>
              </li>
            </ul>
            <div className="hamburger-Menu">
              <button>
                <GiHamburgerMenu onClick={toggleHamburgerMenu} className="toogleHamburger"/>
                </button>
            </div>
          </div>
        </div>
        <ul className={`mobile-view-nav ${showHamburger ? "view-on" : "view-off"} `}>
              <li>
                <NavLink className="navBarLink" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navBarLink" to="contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="navBarLink" to="about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="navBarLink" to="country">
                  Country
                </NavLink>
              </li>
            </ul>
      </div>
    </header>
  );
};

export default Header;
