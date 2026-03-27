import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/service" element={<UnderConstruction pageName="Service" />} />
            <Route path="/teams" element={<UnderConstruction pageName="Teams" />} />
            <Route path="/collaborators" element={<UnderConstruction pageName="Collaborators" />} />
            <Route path="/impact" element={<UnderConstruction pageName="Impact" />} />
            <Route path="/career" element={<UnderConstruction pageName="Career" />} />
            <Route path="/faqs" element={<UnderConstruction pageName="FAQ's" />} />
            <Route path="/bookaride" element={<UnderConstruction pageName="Booking" />} />
            <Route path="/privacy-policy" element={<UnderConstruction pageName="Privacy Policy" />} />
            <Route path="/terms-and-conditions" element={<UnderConstruction pageName="Terms and Conditions" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
