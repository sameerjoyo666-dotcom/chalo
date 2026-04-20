import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import './Home.css';
import logo from '../assets/ChaloLogo.jpg';
import mobileMock from '../assets/Mobile.png';

import {
  CheckCircle,
  Wallet,
  Leaf,
  ShieldCheck,
  MapPin,
  Star,
  Activity,
  CreditCard,
  Headphones,
  Bot,
  UserCircle,
  Route,
  Navigation,
  Car,
  MessageCircle,
  ArrowRight,
  Zap
} from 'lucide-react';
import teslaTop from '../assets/TeslaTop.png';
import Reveal from '../components/Reveal';

const featureList = [
  {
    title: "Smart Routes", desc: "Efficient and reliable intercity routes.", icon: MapPin,
    pops: [MapPin, Activity, CheckCircle]
  },
  {
    title: "Affordable", desc: "Budget-friendly rides without compromise.", icon: Wallet,
    pops: [Wallet, CreditCard, Star]
  },
  {
    title: "Eco-Friendly", desc: "Promoting sustainable travel.", icon: Leaf,
    pops: [Leaf, MapPin, CheckCircle]
  },
  {
    title: "Trusted Drivers", desc: "Verified drivers ensure your safety.", icon: ShieldCheck,
    pops: [ShieldCheck, Star, Headphones]
  }
];

const Home = () => {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.dev_chaloo.chaloomobile&pli=1";

  const tData = [
    { name: "Hamza Malik", body: "Chaloo has made my daily commute so much easier. Affordable and safe!", rating: 5 },
    { name: "Fatima Shaikh", body: "Drivers are polite and service is on time. Highly satisfied.", rating: 5 },
    { name: "Ali Khan", body: "I really like your service, very smooth rides and friendly drivers. Just keep focusing on timing!", rating: 4 },
    { name: "Zainab R.", body: "The booking process is incredibly straightforward. A truly premium ride experience.", rating: 5 },
    { name: "Omer Tariq", body: "Finally an intercity ride service that understands the value of time. The cars are always spotless.", rating: 5 }
  ];

  const doubleTData = [...tData, ...tData];

  const renderCard = (t, i) => (
    <div className="test-card-new" key={i}>

      {/* Liquid Tang Glass Hover Animation Layers */}
      <div className="card-tang-water tang-bg"></div>
      <div className="card-tang-water tang-fg"></div>

      {/* Decorative background quote element */}
      <span className="quote-mark-bg" style={{ position: 'absolute', top: 10, right: 20, zIndex: 1 }}>“</span>

      {/* Header: Icon, Name, Stars */}
      <div className="test-author-new" style={{ position: 'relative', zIndex: 2 }}>
        <div className="profile-icon-wrapper">
          <UserCircle size={38} strokeWidth={1.5} className="profile-icon" />
        </div>
        <div className="author-details">
          <h4 className="test-name">{t.name}</h4>
          <div className="test-stars">
            {[...Array(5)].map((_, sIdx) => {
              const active = sIdx < t.rating;
              return <Star key={sIdx} size={14} className={active ? 'star-active' : 'star-inactive'} />
            })}
          </div>
        </div>
      </div>

      {/* Body: Quote Text */}
      <p className="test-body-new" style={{ position: 'relative', zIndex: 2 }}>{t.body}</p>
    </div>
  );

  const faqs = [
    { q: "How do I apply for a position?", a: "To join the Chalo team, visit our Careers portal or forward your resume to our dedicated support email." },
    { q: "Do you offer internships?", a: "Yes! We run seasonal internship programs across engineering, marketing, and operations. Keep an eye on our socials!" },
    { q: "Can I work remotely?", a: "We embrace a hybrid culture. Select roles offer full remote flexibility, while operational roles require on-site synergy." },
    { q: "What is the interview process like?", a: "Typically: an initial screening, followed by a technical/skill assessment, and a final cultural fit discussion." },
    { q: "Do you hire fresh graduates?", a: "Absolutely! We strongly believe in mentoring emerging talent and love welcoming fresh graduates to the tech mobility space." },
    { q: "Are Chalo EV bikes eco-friendly?", a: "Our EV bikes produce absolutely zero tailpipe emissions, making them the perfect green alternative for daily short-distance commutes." },
    { q: "How can universities partner with Chalo?", a: "Institutions can reach out to business@chaloo.com.pk. We provide ready-to-deploy, tech-enabled campus shuttle networks." }
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="home-container">
      {/* GLOBAL BACKGROUND BLOBS */}
      <div className="home-bg-wrapper">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>

      {/* 1. MASTER APP HERO (CINEMATIC CHALO MOBILITY) */}
      <section className="app-hero">
        <div className="hero-layout">

          <div className="hero-text-side">
            <Reveal animation="fade-right">
              <span className="hero-badge"></span>
              <h1 className="hero-main-title">
                <span>The Smarter Way</span>
                <span className="highlight">to Travel</span>
              </h1>
              <p className="hero-description" style={{ fontSize: '1.25rem', fontWeight: '500' }}>
                Track, Book, and Ride with Chalo - the most reliable   transport app in Pakistan. Built for comfort, speed, and absolute safety.
              </p>

              <div className="hero-cta-group">
                <a
                  href={playStoreLink}
                  className="btn btn-primary shadow-lg rounded-pill"
                  style={{ padding: '0.6rem 2rem' }}
                >
                  Get Chalo App
                </a>

                <button
                  className="btn btn-outline-dark rounded-pill"
                  style={{ border: '2px solid #ddd', padding: '0.6rem 2rem' }}
                >
                  Book Now
                </button>
              </div>

              <ul className="hero-checklist">
                <li><CheckCircle size={20} color="#e77e22" /> AI-Verified Professional Drivers</li>
                <li><CheckCircle size={20} color="#e77e22" /> Real-time Satellite Route Tracking</li>
                <li><CheckCircle size={20} color="#e77e22" /> Premium Clean & Insured Vehicles</li>
                <li><CheckCircle size={20} color="#e77e22" /> Integrated Mobile Payments</li>
              </ul>
            </Reveal>
          </div>

          <div className="hero-graphics">
            {/* The Vertical Road/Lane */}
            <div className="vertical-lane">
              <div className="lane-line"></div>
            </div>

            <div className="hero-car-container">
              <img
                src={teslaTop}
                alt="Chalo Premium Fleet"
                style={{
                  width: '320px',
                  filter: 'drop-shadow(0 40px 70px rgba(0,0,0,0.3))'
                }}
              />
            </div>

            {/* DATA-RICH FLOATING INFO CARD */}

          </div>

        </div>
      </section>

      {/* 3. DASHBOARD STATS SECTION - SPLIT BENTO GRID (ORIGINAL UNALIGNED V1) */}
      <section className="dashboard-stats-section section section-cream">
        <div className="container dashboard-split">

          <div className="dashboard-content">
            <Reveal animation="fade-right">
              <div className="dashboard-content">
                <div className="fancy-title-wrap">
                  <h2 className="fancy-heading">
                    Ride Instantly,<br />
                    <span className="gradient-word">Anytime</span>
                  </h2>
                  <span className="floating-pill fp-top-right" style={{ animationDelay: '0s' }}>
                    <Navigation size={14} /> smart routes
                  </span>
                </div>
                <p className="fancy-subtitle">
                  Safe, intelligent, and budget-friendly rides — experience why our clients trust Chalo.
                </p>

                <div className="liquid-grid">
                  <Reveal animation="zoom-in" delay={100}>
                    <div className="liquid-card">
                      <div className="liquid-tank" style={{ "--level": "95%" }}>
                        <div className="water water-bg"></div>
                        <div className="water water-fg"></div>
                        <span className="liquid-pct">95%</span>
                      </div>
                      <h4>Client<br />Satisfaction</h4>
                    </div>
                  </Reveal>
                  <Reveal animation="zoom-in" delay={200}>
                    <div className="liquid-card">
                      <div className="liquid-tank" style={{ "--level": "97%" }}>
                        <div className="water water-bg"></div>
                        <div className="water water-fg"></div>
                        <span className="liquid-pct">97%</span>
                      </div>
                      <h4>Positive<br />Feedback</h4>
                    </div>
                  </Reveal>
                  <Reveal animation="zoom-in" delay={300}>
                    <div className="liquid-card">
                      <div className="liquid-tank" style={{ "--level": "100%" }}>
                        <div className="water water-bg"></div>
                        <div className="water water-fg"></div>
                        <span className="liquid-pct">100%</span>
                      </div>
                      <h4>Affordable<br />Pricing</h4>
                    </div>
                  </Reveal>
                  <Reveal animation="zoom-in" delay={400}>
                    <div className="liquid-card">
                      <div className="liquid-tank" style={{ "--level": "92%" }}>
                        <div className="water water-bg"></div>
                        <div className="water water-fg"></div>
                        <span className="liquid-pct">92%</span>
                      </div>
                      <h4>Smart<br />Navigation</h4>
                    </div>
                  </Reveal>
                </div>

                <br />
              </div>
            </Reveal>
          </div>

          <div className="dashboard-bento-grid">

            {/* Column 1 */}
            <div className="bento-col-1">
              <Reveal animation="zoom-in" delay={100}>
                <div className="dash-card">
                  <div className="dash-card-header">
                    <div>
                      <h3 className="dash-title">Total Bookings</h3>
                      <p className="dash-subtitle">Consistent tracking</p>
                    </div>
                  </div>
                  <div className="dash-value">
                    <h2>100K +</h2>
                    <span className="trend up" style={{ color: "var(--primary)" }}>↗ +12% this month</span>
                  </div>
                  <div className="bar-chart-container">
                    <div className="bar-group">
                      <div className="bar"><div className="fill income" style={{ '--target-h': '60%' }}></div></div>
                      <div className="bar"><div className="fill expense" style={{ '--target-h': '40%' }}></div></div>
                    </div>
                    <div className="bar-group">
                      <div className="bar"><div className="fill income" style={{ '--target-h': '85%' }}></div></div>
                      <div className="bar"><div className="fill expense" style={{ '--target-h': '55%' }}></div></div>
                    </div>
                    <div className="bar-group">
                      <div className="bar"><div className="fill income" style={{ '--target-h': '70%' }}></div></div>
                      <div className="bar"><div className="fill expense" style={{ '--target-h': '45%' }}></div></div>
                    </div>
                    <div className="bar-group">
                      <div className="bar"><div className="fill income" style={{ '--target-h': '95%' }}></div></div>
                      <div className="bar"><div className="fill expense" style={{ '--target-h': '65%' }}></div></div>
                    </div>
                    <div className="bar-group">
                      <div className="bar"><div className="fill income" style={{ '--target-h': '50%' }}></div></div>
                      <div className="bar"><div className="fill expense" style={{ '--target-h': '30%' }}></div></div>
                    </div>
                  </div>
                  <div className="chart-legend" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
                    <span><div className="dot income"></div> Standard</span>
                    <span><div className="dot expense"></div> Intercity</span>
                  </div>
                </div>
              </Reveal>

              <Reveal animation="zoom-in" delay={300}>
                <div className="dash-card gauge-card">
                  <div className="dash-card-header">
                    <div>
                      <h3 className="dash-title">Total Fuel</h3>
                      <p className="dash-subtitle">Efficient usage tracking</p>
                    </div>
                  </div>
                  <div className="gauge-container">
                    <svg viewBox="0 0 100 50" className="gauge-svg">
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f0f0f0" strokeWidth="8" strokeLinecap="round" />
                      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="var(--primary)" strokeWidth="8" strokeLinecap="round" className="gauge-path animate-gauge" strokeDasharray="125.6" strokeDashoffset="125.6" style={{ '--target-offset': '6.2' }} />
                    </svg>
                    <div className="gauge-text">
                      <h2>941.52K</h2>
                      <p>Efficient usage</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Column 2 (Unaligned) */}
            <div className="bento-col-2">
              <Reveal animation="zoom-in" delay={200}>
                <div className="dash-card">
                  <div className="dash-card-header">
                    <div>
                      <h3 className="dash-title">Total Users</h3>
                      <p className="dash-subtitle">Consistent user growth</p>
                    </div>
                  </div>
                  <div className="dash-value" style={{ marginBottom: "1rem" }}>
                    <h2>6K +</h2>
                  </div>
                  <div className="bubble-chart-container">
                    <div className="bubble b-main" style={{ '--target-s': 1 }}>
                      <span className="bubble-text">48%</span>
                    </div>
                    <div className="bubble b-sec" style={{ '--target-s': 1 }}>
                      <span className="bubble-text">32%</span>
                    </div>
                    <div className="bubble b-tert" style={{ '--target-s': 1 }}>
                      <span className="bubble-text">13%</span>
                    </div>
                    <div className="bubble b-quat" style={{ '--target-s': 1 }}>
                      <span className="bubble-text">7%</span>
                    </div>
                  </div>
                  <div className="bubble-legend-grid">
                    <div><span className="dot b-main-bg"></span> Commuters</div>
                    <div><span className="dot b-sec-bg"></span> Students</div>
                    <div><span className="dot b-tert-bg"></span> Corporate</div>
                    <div><span className="dot b-quat-bg"></span> Occasional</div>
                  </div>
                </div>
              </Reveal>

              <div className="sub-metrics">
                <Reveal animation="zoom-in" delay={400}>
                  <div className="dash-card mini">
                    <Activity size={24} className="icon-blue" />
                    <div className="mini-info">
                      <h4>7711200 km</h4>
                      <p>Total Travelled</p>
                      <span className="trend up" style={{ color: "var(--primary)", display: "block", fontSize: "0.75rem", marginBottom: "0.5rem" }}>↗ +15% this year</span>
                      <div className="mini-bar"><div className="fill-blue" style={{ '--tw': '80%' }}></div></div>
                    </div>
                  </div>
                </Reveal>
                <Reveal animation="zoom-in" delay={500}>
                  <div className="dash-card mini" style={{ marginTop: '1rem' }}>
                    <Star size={24} className="icon-orange" />
                    <div className="mini-info">
                      <h4>35+</h4>
                      <p>Total Drivers</p>
                      <span className="trend up" style={{ color: "var(--primary)", display: "block", fontSize: "0.75rem", marginBottom: "0.5rem" }}>↗ +20% this quarter</span>
                      <div className="mini-bar"><div className="fill-orange" style={{ '--tw': '95%' }}></div></div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="why-us-section section">
        <div className="container">
          <Reveal animation="fade-down">
            <div className="fancy-title-wrap fancy-title-center">
              <span className="floating-pill fp-left" style={{ animationDelay: '0.2s' }}>
                <ShieldCheck size={14} /> trusted
              </span>
              <h2 className="fancy-heading">
                Why Choose Chalo<br />
                for Your <span className="gradient-word">Rides?</span>
              </h2>
              <span className="floating-pill fp-right" style={{ animationDelay: '0.5s' }}>
                <Route size={14} /> smart routes
              </span>
              <p className="fancy-subtitle">Safe, smart & affordable mobility — built for Pakistan's roads.</p>
            </div>
          </Reveal>

          <div className="features-grid-3d">
            {featureList.map((F, index) => {
              const Pop1 = F.pops[0];
              const Pop2 = F.pops[1];
              const Pop3 = F.pops[2];

              return (
                <Reveal animation="fade-up" delay={100 * (index + 1)} key={index}>
                  <div className="feature-card-3d">

                    {/* Mobility App UI Mini-Tiles popping out */}
                    <div className="fc-paper fc-paper-1">
                      <Pop1 size={20} className="pop-icon" />
                    </div>
                    <div className="fc-paper fc-paper-2">
                      <Pop2 size={28} className="pop-icon pop-main" />
                    </div>
                    <div className="fc-paper fc-paper-3">
                      <Pop3 size={20} className="pop-icon" />
                    </div>

                    {/* Frosted Glass Front Flap */}
                    <div className="fc-folder-front">
                      <div className="fc-folder-text">
                        <h3>{F.title}</h3>
                        <p>{F.desc}</p>
                      </div>
                      <div className="fc-folder-action">
                        <F.icon size={20} className="fc-icon" strokeWidth={2.5} />
                      </div>
                    </div>

                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="testimonials-section section section-cream">
        <div className="container">
          <Reveal animation="fade-up">
            <div className="fancy-title-wrap fancy-title-center">
              <span className="floating-pill fp-left" style={{ animationDelay: '0.3s' }}>
                <Star size={14} /> 5-star
              </span>
              <h2 className="fancy-heading">
                What Our Customers<br />
                <span className="gradient-word">Say</span>
              </h2>
              <span className="floating-pill fp-right" style={{ animationDelay: '0.6s' }}>
                <MessageCircle size={14} /> feedback
              </span>
              <p className="fancy-subtitle">Real stories from riders who trust Chalo for safe, reliable, and comfortable intercity travel.</p>
            </div>
          </Reveal>

          <div className="testimonial-marquee-container">
            <div className="marquee-grid">
              <div className="marquee-col marquee-up">
                {doubleTData.map(renderCard)}
              </div>
              <div className="marquee-col marquee-down">
                {doubleTData.slice().reverse().map(renderCard)}
              </div>
              <div className="marquee-col marquee-up">
                {doubleTData.map(renderCard)}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 6. CONTACT & MORE FEATURES */}
      <section className="contact-section section">
        <div className="container contact-split">
          <div className="contact-features">
            <Reveal animation="fade-right">
              <div className="fancy-title-wrap">
                <h2 className="fancy-heading">
                  Seamless Rides,<br />
                  <span className="gradient-word">Every Time</span>
                </h2>
                <span className="floating-pill fp-top-right" style={{ animationDelay: '0.4s' }}>
                  <Car size={14} /> book now
                </span>
              </div>
              <p className="fancy-subtitle">Reliable rides, affordable fares, real-time tracking.</p>
            </Reveal>

            <ul className="feature-list">
              <Reveal animation="fade-up" delay={100}><li><CheckCircle className="text-primary mr-2" size={20} /> <strong>Safe Rides</strong></li></Reveal>
              <Reveal animation="fade-up" delay={150}><li><Wallet className="text-primary mr-2" size={20} /> <strong>Affordable Pricing</strong></li></Reveal>
              <Reveal animation="fade-up" delay={200}><li><CreditCard className="text-primary mr-2" size={20} /> <strong>Online Payment</strong></li></Reveal>
              <Reveal animation="fade-up" delay={250}><li><Activity className="text-primary mr-2" size={20} /> <strong>Live Tracking</strong></li></Reveal>
              <Reveal animation="fade-up" delay={300}><li><Headphones className="text-primary mr-2" size={20} /> <strong>24/7 Support</strong></li></Reveal>
              <Reveal animation="fade-up" delay={350}><li><Bot className="text-primary mr-2" size={20} /> <strong>AI ChatBot</strong></li></Reveal>
            </ul>
          </div>

          <Reveal animation="fade-left" delay={200}>
            <div className="contact-form-card">
              <h3>Get in Touch</h3>
              <p>Have a question or want to book a ride? Fill out the form below.</p>
              <form onSubmit={(e) => e.preventDefault()} className="form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Query" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full shadow-lg form-submit-btn">Submit Form</button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. FAQ SECTION (Interactive 2-Column Design) */}
      <section className="faq-section section">
        <div className="container faq-split">
          
          <div className="faq-left-content">
            <Reveal animation="fade-right">
              <h2 className="faq-bold-heading">Frequently<br/>Asked Questions</h2>
              <p className="faq-subtext">Get answers to commonly asked questions about Chalo, our features, and how to make the most of our reliable mobility services.</p>
            </Reveal>
          </div>

          <div className="faq-right-list">
            <Reveal animation="fade-left">
              <div className="faq-glass-container">
                {faqs.map((faq, idx) => {
                  const isActive = activeFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`faq-pill-item ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveFaq(isActive ? null : idx)}
                    >
                      <div className="faq-q-bar">
                        <h4>{faq.q}</h4>
                        <div className="faq-icon-wrapper">
                          <div className="faq-icon-cross"></div>
                        </div>
                      </div>
                      <div className="faq-a-panel">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
