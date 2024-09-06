import React from "react";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_s">
        <div className="logo_div">
          <h3>myTunes</h3>
        </div>
        <div className="menu_div">
          <ul className="ul_container">
            <li>Overview</li>
            <li>Music</li>
            <li>Video</li>
            <li>Gift Cards</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="nav_container">
//       <ul className="nav_links">
//         <li>
//           <Link to="/">Hero</Link>
//         </li>
//         <li>
//           <Link to="/new-hero">NewHero</Link>
//         </li>
//         <li>
//           <Link to="/image">Image</Link>
//         </li>
//         <li>
//           <Link to="/info">Info</Link>
//         </li>
//         <li>
//           <Link to="/banner">Banner</Link>
//         </li>
//         <li>
//           <Link to="/card">Card</Link>
//         </li>
//         <li>
//           <Link to="/footer-banner">Footerbanner</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
