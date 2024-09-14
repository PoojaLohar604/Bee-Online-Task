import React from 'react';
import { useEffect } from 'react';
import './App.css';
import NavbarTab from './NavbarTab';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Hero from './Components/HeroSection/Hero';
import Packages from './Components/Packages/Packages';
import Team from './Components/Team/Team';
import News from './Components/NewsLetter/News';
import Footer from './Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 }); 
  // }, []);
  return (
    <>
        <NavbarTab />     
        < Hero />  
        <Packages />
        <Team />
        <News />
        <Footer />
    </>
  )
}

export default App