import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MessageCircle, PlayCircle } from 'lucide-react';
import logo from '../assets/ChaloLogo.jpg';
import './Footer.css';

const Footer = () => {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.dev_chaloo.chaloomobile&pli=1";

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Column 1: Info */}
        <div className="footer-col brand-col">
          <img src={logo} alt="Chalo Logo" className="footer-logo" />
          <p className="footer-desc">
            Reliable, affordable, and comfortable travel. Thousands of happy passengers trust us across Pakistan.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="WhatsApp"><MessageCircle size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/teams">Teams</Link></li>
            <li><Link to="/collaborators">Collaborators</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/faqs">FAQ's</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-links">
            <li><a href="tel:+923148461261">+92 314 8461261</a></li>
            <li><a href="mailto:support@chaloo.com.pk">support@chaloo.com.pk</a></li>
            <li><a href="mailto:business@chaloo.com.pk">business@chaloo.com.pk</a></li>
          </ul>
        </div>

        {/* Column 4: Download App */}
        <div className="footer-col">
          <h3 className="footer-heading">Download App</h3>
          <p className="footer-desc" style={{ marginBottom: '1rem' }}>Get the Chalo app on the Play Store.</p>
          <a href={playStoreLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary footer-playstore">
            <PlayCircle size={24} style={{ marginRight: '8px' }} /> Get it on Play Store
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} Chaloo Technologies. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms Condition</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
