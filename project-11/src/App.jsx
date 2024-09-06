import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Button from './components/Button'
import ImageGrid from './components/ImageGrid'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <hr
        style={{
          position: 'absolute',
          left: '0',
          width: '100vw', // Use 100vw for full viewport width
 // Adjust the border style as needed
        }}
      />
      <Button />
      <ImageGrid />
      <Footer />
    </>
  )
}

export default App