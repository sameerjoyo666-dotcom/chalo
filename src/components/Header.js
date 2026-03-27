import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, PlayCircle, Menu, X } from 'lucide-react';
import logo from '../assets/ChaloLogo.jpg';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const playStoreLink = "https://play.google.com/store/apps/details?id=com.dev_chaloo.chaloomobile&pli=1";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Chalo Logo" className="logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
          <Link to="/service" className={`nav-link ${isActive('/service')}`}>Service</Link>
          <Link to="/teams" className={`nav-link ${isActive('/teams')}`}>Team</Link>
          <Link to="/impact" className={`nav-link ${isActive('/impact')}`}>Impact</Link>
          
          <div 
            className="dropdown-container"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link dropdown-toggle">
              More <ChevronDown size={16} style={{ marginLeft: '4px' }} />
            </span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/collaborators" className="dropdown-item">Collaborators</Link>
                <Link to="/career" className="dropdown-item">Career</Link>
                <Link to="/faqs" className="dropdown-item">FAQ's</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="btn btn-outline" onClick={() => alert('Sign up feature coming soon!')}>Sign Up</button>
          <a href={playStoreLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-pill">
            <PlayCircle size={20} style={{ marginRight: '8px' }} /> Mobile App
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <Link to="/" onClick={toggleMenu} className="mobile-link">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="mobile-link">About Us</Link>
            <Link to="/service" onClick={toggleMenu} className="mobile-link">Service</Link>
            <Link to="/teams" onClick={toggleMenu} className="mobile-link">Team</Link>
            <Link to="/impact" onClick={toggleMenu} className="mobile-link">Impact</Link>
            <div className="mobile-dropdown-header">More Links</div>
            <Link to="/collaborators" onClick={toggleMenu} className="mobile-link sub">Collaborators</Link>
            <Link to="/career" onClick={toggleMenu} className="mobile-link sub">Career</Link>
            <Link to="/faqs" onClick={toggleMenu} className="mobile-link sub">FAQ's</Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
