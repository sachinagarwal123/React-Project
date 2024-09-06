import React from "react";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="img_container">
        <img src="/images/hero.png" alt="hero_image" />
      </div>
      <div className="text_info">
        <p className="offer_tag">50 % OFF All Products</p>
        <h1>Enjoy Your, <br/> Delicious Food</h1>
        <p className="info_text">
          Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris <br />
          blandit aliquet elit, eget tincidunt nibh pulvinar a.
        </p>
        <button>Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;
