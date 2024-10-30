// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Innovations from './pages/Innovations';
import Contact from './pages/Contact';
import ServiceDetails from './pages/ServiceDetails'; // Create this as needed

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
          <Route path="consulting" element={<ServiceDetails service="Consulting" />} />
          <Route path="analytics" element={<ServiceDetails service="Analytics" />} />
          <Route path="development" element={<ServiceDetails service="Development" />} />
        </Route>
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
