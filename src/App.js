import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import Teams from './pages/Teams';
import Impact from './pages/Impact';
import Collaborators from './pages/Collaborators';
import UnderConstruction from './pages/UnderConstruction';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/service" element={<Service />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/collaborators" element={<Collaborators />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/career" element={<UnderConstruction pageName="Career" />} />
            <Route path="/faqs" element={<UnderConstruction pageName="FAQ's" />} />
            <Route path="/bookaride" element={<UnderConstruction pageName="Booking" />} />
            <Route path="/privacy-policy" element={<UnderConstruction pageName="Privacy Policy" />} />
            <Route path="/terms-and-conditions" element={<UnderConstruction pageName="Terms and Conditions" />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
