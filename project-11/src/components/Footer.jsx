import React from "react";
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="logo_info">
          <img src="/images/logo.png" alt="logo" />
          <h2>
            <span>C</span>ompany
          </h2>
        </div>
        <div className="main_link">
            <h4>Main Link</h4>
            <p>Order Tracking</p>
            <p>New Order</p>
            <p>Contact Us</p>
            <p>News & Blogs</p>
        </div>
        <div className="main_link">
            <h4>Support</h4>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
            <p>Terms & Conditions</p>
        </div>
        <div className="main_link">
            <h4>Join Our Newsletter</h4>
            <input type="email" placeholder="Enter Your Email Address" />
            <p>Follow Us</p>
            <div className="social_icon">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />

            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
