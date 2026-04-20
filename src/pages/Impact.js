import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Impact.css';

const impactEvents = [
  {
    title: "Young Entrepreneurs' Competition & Conference",
    images: [
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/WhatsApp%20Image%202026-02-23%20at%2010.50.27%20AM.jpeg",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/WhatsApp%20Image%202026-02-23%20at%2010.50.27%20AM%20(1).jpeg",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/WhatsApp%20Image%202026-02-23%20at%2010.51.05%20AM.jpeg"
    ]
  },
  {
    title: "SZABIST Hyderabad Career Fair 2025",
    images: [
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impactonepic1.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impactonepic2.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impactonepic3.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impactonepic4.jfif"
    ]
  },
  {
    title: "KEI Job Fair 2025, invited by ICMA Pakistan",
    images: [
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impacttwopic2.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impacttwopic1.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impacttwopic3.jfif"
    ]
  },
  {
    title: "TEDxClifton Sponsorship",
    images: [
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impactsixpic1.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/tedxClifton.jpg",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/tedxtwo.jpg"
    ]
  },
  {
    title: "Mobility Live Middle East 2025, Dubai",
    images: [
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/dubai1.jpg",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/dubai2.jpg",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/dubai3.jpg"
    ]
  },
  {
    title: "Independence Day 2025",
    images: [
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/AUGUST1.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/august1.jpg",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/august3.jfif"
    ]
  },
  {
    title: "Future Leaders Award 2.0 (Enterprise Builder)",
    images: [
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/ITCNone.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/itscTwo.jfif"
    ]
  },
  {
    title: "Jashan-e-Bahara, SOS Village Jamshoro",
    images: [
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impacttenpic1.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impacttenpic2.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impacttenpic3.jfif",
      "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impacttenpic7.jfif"
    ]
  }
];

const clotheslineData = [
  "https://ik.imagekit.io/rimpec75t/Chaloo-assets/AUGUST1.jfif",
  "https://ik.imagekit.io/rimpec75t/Chaloo-assets/thatta2.jpg",
  "https://ik.imagekit.io/rimpec75t/Chaloo-assets/ITCNone.jfif",
  "https://ik.imagekit.io/rimpec75t/Chaloo-assets/tedxtwo.jpg",
  "https://ik.imagekit.io/rimpec75t/Chaloo-assets/dubai1.jpg",
  "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impactonepic3.jfif",
  "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impacttenpic2.jfif",
  "https://ik.imagekit.io/rimpec75t/Chaloo-assets/impacttwopic3.jfif"
];

// Combine arrays to make scrolling smooth and endless
const infiniteClothesline = [...clotheslineData, ...clotheslineData, ...clotheslineData];

const Impact = () => {
  return (
    <div className="impact-page-container">
      {/* Background Ambience */}
      <div className="impact-bg"></div>

      <div className="impact-content-wrapper">
        <header className="impact-header">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="decorative-pill"
          >
            <span>Community & Growth</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our <span className="text-gradient">Impact.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="impact-subtitle"
          >
            Driving change across Pakistan and beyond. Here's a glimpse of our journey uniting communities, advancing transport technology, and creating endless smiles.
          </motion.p>
        </header>

        {/* DYNAMIC IMPACT CAROUSELS */}
        {/* ARTISTIC MASONRY STORY GALLERY */}
        <section className="impact-stories-section">
          {impactEvents.map((ev, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div 
                key={index} 
                className={`impact-story-container ${isReversed ? 'reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="story-text-pane">
                  <div className="story-sticky-content">
                    <span className="story-badge">Milestone {String(index + 1).padStart(2, '0')}</span>
                    <h2 className="story-title">{ev.title}</h2>
                    <p className="story-desc">Discover the moments that defined our journey. We brought innovation to the masses and created unforgettable digital experiences across Pakistan’s mobility landscape.</p>
                  </div>
                </div>

                <div className="story-gallery-pane">
                  <div className="masonry-collage">
                    {/* Render up to 3 images perfectly sized into the bento boxes */}
                    {ev.images.slice(0, 3).map((img, i) => (
                      <div className={`m-card m-card-${i + 1}`} key={i}>
                        <img src={`${img}?tr=w-600,h-500,fo-auto`} alt={`Impact visual ${i}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Impact;
