import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import HeroSection from './components/HeroSection/HeroSection.tsx';
import Services from './components/Services/Services.tsx';
import Drones from './components/Drones/Drones.tsx';
import Contact from './components/Contact/Contact.tsx';
import Quote from './components/Quote/Quote.tsx';
import Footer from './components/Footer/Footer.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar toggle={() => {}} />
      <HeroSection />
      <Quote />
      <Drones />
      <Services />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
