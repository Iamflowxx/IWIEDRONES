import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import HeroSection from './components/HeroSection/HeroSection.tsx';
import Services from './components/Services/Services.tsx';
import Drones from './components/Drones/Drones.tsx';
import Pulverizaciones from './components/Pulverizaciones/Pulverizaciones.tsx';
import Contact from './components/Contact/Contact.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar toggle={() => {}} />
      <HeroSection />
      <Drones />
      <Services />
      <Pulverizaciones />
      <Contact />
    </Router>
  );
}

export default App;
