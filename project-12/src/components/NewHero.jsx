import React from "react";
import { FaMusic } from "react-icons/fa";

const NewHero = () => {
  return (
    <div className="new_hero">
      <div className="new_hero_info">
        <h2>
          <FaMusic /> Music
        </h2>
        <h3>45 million songs. Zero ads.</h3>
        <p>
          Stream over 45 million songs, ad-free. Or download albums and tracks
          to listen to offline. All the music in your personal myTunes library —
          no matter where it came from — lives right alongside the Orange Music
          catalog. Start your free three-month trial with no commitment, and
          cancel anytime.
        </p>
        <button>Start Your Trial Now</button>
        <p>Orange Music is available in myTunes, and for iOS and Android devices.</p>
      </div>
    </div>
  );
};

export default NewHero;
