import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Hero from './components/Hero';
import './App.css'
import Banner from './components/banner';
import Card from './components/Card';
import CardList from './components/CardList';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
     <Hero />
     <Banner/>
     <CardList />
     <Contact />
     <Footer />
    </>
  )
}

export default App