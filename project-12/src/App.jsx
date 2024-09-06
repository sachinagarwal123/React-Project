import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import NewHero from './components/NewHero'
import Image from './components/Image'
import Info from './components/Info'
import Banner from './components/Banner'
import Card from './components/Card'
import Footerbanner from './components/Footerbanner'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewHero />
      <Image />
      <Info />
      <Banner />
      <Card />
      <Footerbanner />
    </>
  )
}

export default App

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import './App.css';
// import Hero from './components/Hero';
// import NewHero from './components/NewHero';
// import Image from './components/Image';
// import Info from './components/Info';
// import Banner from './components/Banner';
// import Card from './components/Card';
// import Footerbanner from './components/Footerbanner';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/new-hero" element={<NewHero />} />
//         <Route path="/image" element={<Image />} />
//         <Route path="/info" element={<Info />} />
//         <Route path="/banner" element={<Banner />} />
//         <Route path="/card" element={<Card />} />
//         <Route path="/footer-banner" element={<Footerbanner />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
