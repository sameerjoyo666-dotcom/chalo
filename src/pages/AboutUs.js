import React, { useState } from 'react';
import './AboutUs.css';
import Reveal from '../components/Reveal';
import aboutData from '../assets/about-us-page.json';
import { MapPin, Search, ChevronRight, Zap, Users, Heart, Share2, Globe } from 'lucide-react';
import mapBg from '../assets/hyderabad-map-faded.png';

import visionImg from '../assets/Mission vision, Objectives/Vision.png';
import missionImg from '../assets/Mission vision, Objectives/Mission.png';
import objectivesImg from '../assets/Mission vision, Objectives/Objectives.png';
import vehicleIcon from '../assets/Icons-12.png';

const AboutUs = () => {
  const branding = aboutData.branding;
  const [activeTab, setActiveTab] = useState('Team Work');
  const [activeStrategy, setActiveStrategy] = useState('Vision');
  const [hoveredPill, setHoveredPill] = useState(null);

  const karachiStops = [
    "Nooriabad",
    "Shohrab Goth (Al-Asif Square)",
    "Saddar Taj Complex (via Lyari)"
  ];

  const hyderabadStops = [
    "Latifabad No.7",
    "Qasim Chowk",
    "Wadhu Wah Gate",
    "Jamshoro Bypass"
  ];

  const strategyData = {
    'Vision': {
      title: "Our Vision",
      desc: "Chaloo envisions becoming Pakistan’s most trusted and innovative ride-hailing platform. We aim to lead the way in providing seamlessly integrated mobility application solutions that actively support sustainable urban growth. Ultimately, our vision is to significantly improve the lives of both our users and dedicated drivers across the nation.",
      image: visionImg,
      icon: <Users size={18} />
    },
    'Mission': {
      title: "Our Mission",
      desc: "Chaloo’s mission is to revolutionize urban transportation across Pakistan. We’re dedicated to delivering affordable, accessible, and highly reliable ride-hailing services that empower local drivers with sustainable income opportunities while enhancing the daily commuting experience for every user. Our goal is a seamless, efficient, and equitable transportation network nationwide.",
      image: missionImg,
      icon: <Users size={18} />
    },
    'Objectives': {
      title: "Our Objectives",
      bullets: [
        "Innovate technology solutions that simplify everyday life.",
        "Forge strong partnerships to co-create impactful solutions.",
        "Maintain high-quality standards and ethical practices for long-term success.",
        "Foster a positive and inclusive environment for team members and clients.",
        "Leverage digital tools to help communities grow and thrive.",
        "Support professional growth and teamwork to enhance performance."
      ],
      image: objectivesImg,
      icon: <Users size={18} />
    }
  };

  const valuesData = {
    'Team Work': {
      title: "Our Synergy",
      desc: "At Chaloo, teamwork is at the core of everything we do. We foster an environment where ideas flow freely, strengths complement one another, and collective goals are achieved through mutual trust and dedication.",
      image: "https://chaloo.com.pk/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Frimpec75t%2FTeam%2520Retouced.jpg&w=1200&q=75",
      icon: <Users size={18} />
    },
    'Compassion': {
      title: "Riding with Heart",
      desc: "Our technology is driven by empathy. We understand the daily struggles of commuters and drivers, and we build solutions that prioritize their dignity, safety, and well-being.",
      image: "https://ik.imagekit.io/rylbggvwj/pinkV.jpeg",
      icon: <Heart size={18} />
    },
    'Collaboration': {
      title: "Better Together",
      desc: "We believe in the power of partnerships. From government stakeholders to local businesses, we collaborate to build a more connected and efficient Pakistan.",
      image: "https://ik.imagekit.io/rylbggvwj/safeRoute.jpeg",
      icon: <Share2 size={18} />
    },
    'Community Support': {
      title: "Rooted in Community",
      desc: "Empowering communities with smarter, greener, and connected experiences. We are not just a service; we are a partner in urban growth and local empowerment.",
      image: "https://chaloo.com.pk/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Frimpec75t%2FMission%2520Vision_Vission%252001.png&w=640&q=75",
      icon: <Globe size={18} />
    }
  };

  const currentVal = valuesData[activeTab];

  return (
    <div className="about-container" style={{ '--accent-color': branding.colors.accent }}>
      {/* Home Page Style Blobs Background */}
      <div className="about-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
      </div>
      {/* Hero Section */}
      <section className="about-hero-map" style={{ '--hero-map-img': `url(${mapBg})` }}>
        {/* Isolated Background Map layer with side-fade mask */}
        <div className="about-hero-hero-bg"></div>

        <div className="container hero-content-centered">
          <Reveal animation="fade-down">
            <h1 className="map-hero-title">Pakistan leading integrated <br />Mobility app</h1>
          </Reveal>

          <Reveal animation="fade-up" delay={200}>

          </Reveal>

          <Reveal animation="fade-up" delay={400}>
            {/* Wrapper ensures hovering the popup itself doesn't close it */}
            <div className="search-popup-wrapper" style={{ position: 'relative', display: 'inline-block' }} onMouseLeave={() => setHoveredPill(null)}>
              <div className="stops-search-bar">
                <div className="search-col">
                  <span className="search-label">Intercity</span>
                  <span className="search-val">Karachi | Hyderabad</span>
                </div>
                <div className="search-divider"></div>
                <div
                  className="search-col pill-hoverable"
                  onMouseEnter={() => setHoveredPill('karachi')}
                >
                  <span className="search-label">Karachi Stops</span>
                  <span className="search-val">3 Major Stops</span>
                </div>
                <div className="search-divider"></div>
                <div
                  className="search-col pill-hoverable"
                  onMouseEnter={() => setHoveredPill('hyderabad')}
                >
                  <span className="search-label">Hyderabad Stops</span>
                  <span className="search-val">4 Major Stops</span>
                </div>
                <button className="search-action-btn">
                  <Search size={22} />
                </button>
              </div>

              {/* Interactive Vehicle Popup Card */}
              <div className={`vehicle-popup-card ${hoveredPill ? 'visible' : ''}`}>
                <div className="vehicle-popup-header">
                  {/* Floating Tags relative to car */}
                  <div className="v-tag tag-color">Comfortable</div>
                  <div className="v-tag tag-age">A/C Standard</div>
                  <div className="v-tag tag-price">Rs 950</div>

                  {/* Using the required Icons-12.png */}
                  <img src={vehicleIcon} alt="Chalo Vehicle" className="vehicle-popup-img" />
                </div>
                <div className="vehicle-popup-body">
                  <h4>{hoveredPill === 'karachi' ? 'Karachi Departure Points' : 'Hyderabad Arrival Points'}</h4>
                  <div className="stops-list-container">
                    <ul className="popup-stops-list">
                      {hoveredPill === 'karachi'
                        ? karachiStops.map((stop, i) => <li key={i}>{stop}</li>)
                        : hoveredPill === 'hyderabad'
                          ? hyderabadStops.map((stop, i) => <li key={i}>{stop}</li>)
                          : null
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>


        </div>
      </section>

      {/* Strategic Strategy Section */}
      <section className="values-tab-section section alt-bg">
        <div className="container">
          <div className="conversational-tab-bar">
            {Object.keys(strategyData).map((tab) => (
              <button
                key={tab}
                className={`tab-pill tab-brand ${activeStrategy === tab ? 'active' : ''}`}
                onMouseEnter={() => setActiveStrategy(tab)}
                onClick={() => setActiveStrategy(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tab-content-container">
            <div className="value-dynamic-grid">
              <Reveal animation="fade-right" key={activeStrategy}>
                <div className="value-text-box">
                  <span className="hero-tag">Strategy</span>
                  <h3 className="value-heading">{strategyData[activeStrategy].title}</h3>
                  {strategyData[activeStrategy].bullets ? (
                    <ul className="value-bullets">
                      {strategyData[activeStrategy].bullets.map((bullet, i) => (
                        <li key={i}><Zap size={14} /> {bullet}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="value-desc">{strategyData[activeStrategy].desc}</p>
                  )}
                  <button className="btn-outline">Explore More</button>
                </div>
              </Reveal>
              <Reveal animation="fade-left">
                <div className="folder-container">
                  <div className="folder-back-plate"></div>
                  <div className="stacked-card-gallery image-only">
                    {/* Decorative Background Cards */}
                    <div className="gallery-card card-left-far decorative-card"></div>
                    <div className="gallery-card card-right-far decorative-card"></div>

                    {Object.keys(strategyData).map((tab, idx) => {
                      const keys = Object.keys(strategyData);
                      const activeIdx = keys.indexOf(activeStrategy);
                      let position = "hidden";
                      if (tab === activeStrategy) position = "card-main";
                      else if (tab === keys[(activeIdx + 1) % keys.length]) position = "card-right";
                      else if (tab === keys[(activeIdx + 2) % keys.length]) position = "card-left";

                      return (
                        <div className={`gallery-card ${position}`} key={tab}>
                          <img src={strategyData[tab].image} alt={tab} className="gallery-img swiping-img" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="folder-front-glass">
                    <div className="folder-accent-btn">
                      <Search size={18} />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="values-tab-section section">
        <div className="container">
          <Reveal animation="fade-up">
            <h2 className="section-title text-center">Our Core Values</h2>
          </Reveal>

          <div className="conversational-tab-bar">
            {Object.keys(valuesData).map((tab, idx) => (
              <button
                key={tab}
                className={`tab-pill tab-brand ${activeTab === tab ? 'active' : ''}`}
                onMouseEnter={() => setActiveTab(tab)}
                onClick={() => setActiveTab(tab)}
              >
                {valuesData[tab].icon}
                {tab}
                <span className="tab-badge">{idx === 0 ? 12 : idx + 2}</span>
              </button>
            ))}
          </div>

          <div className="tab-content-container">
            <div className="value-dynamic-grid">
              <Reveal animation="fade-right" key={activeTab}>
                <div className="value-text-box">
                  <span className="hero-tag">Value Pillars</span>
                  <h3 className="value-heading">{valuesData[activeTab].title}</h3>
                  <p className="value-desc">{valuesData[activeTab].desc}</p>
                  <button className="btn-outline">Learn More</button>
                </div>
              </Reveal>
              <Reveal animation="fade-left">
                <div className="folder-container">
                  <div className="folder-back-plate"></div>
                  <div className="stacked-card-gallery image-only">
                    {/* Decorative Background Cards */}
                    <div className="gallery-card card-left-far decorative-card"></div>
                    <div className="gallery-card card-right-far decorative-card"></div>

                    {Object.keys(valuesData).map((tab, idx) => {
                      const keys = Object.keys(valuesData);
                      const activeIdx = keys.indexOf(activeTab);
                      let position = "hidden";
                      if (tab === activeTab) position = "card-main";
                      else if (tab === keys[(activeIdx + 1) % keys.length]) position = "card-right";
                      else if (tab === keys[(activeIdx + 2) % keys.length]) position = "card-left";

                      return (
                        <div className={`gallery-card ${position}`} key={tab}>
                          <img src={valuesData[tab].image} alt={tab} className="gallery-img swiping-img" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="folder-front-glass">
                    <div className="folder-accent-btn">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Future (Manifesto Card) */}

      {/* Sustainable Future (Extra Polish) */}

    </div>
  );
};

export default AboutUs;
