import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Close button icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav_container">
        <div className="logo_info">
          <img src="/images/logo.png" alt="logo" />
          <h2>
            <span>C</span>ompany
          </h2>
        </div>
        <div className="nav_bar">
          <GiHamburgerMenu onClick={toggleMenu} />
        </div>
      </div>

      {/* Slide-in Menu */}
      <div className={`menu_bar ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu_content">
          <AiOutlineClose className="close_button" onClick={toggleMenu} />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
