import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Service.css';

const servicesContent = [
  {
    title: "Inter City",
    description: "Seamlessly travel between cities with our reliable and comfortable long-route service.",
    icon: "https://ik.imagekit.io/rimpec75t/Icons-09.png",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Ride",
    description: "Book your personal ride anytime with our premium and secure private taxi service.",
    icon: "https://ik.imagekit.io/rimpec75t/Icons-13.png",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Bus trip",
    description: "Move affordably with public transport options enhanced with real-time tracking.",
    icon: "https://ik.imagekit.io/rimpec75t/Icons-16.png",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "E-Rickshaw",
    description: "Eco-friendly e-rickshaw rides for quick and affordable short-distance travel.",
    icon: "https://ik.imagekit.io/rimpec75t/Rikshaw.png",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "E-Bike",
    description: "Beat the traffic with our fast, lightweight, and economical electric bike service.",
    icon: "https://ik.imagekit.io/rimpec75t/E-Bike.png",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Ambulance",
    description: "Instant emergency & non-emergency ambulance bookings with trained responders.",
    icon: "https://ik.imagekit.io/rimpec75t/Icons-15.png",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Employee Shuttle",
    description: "Reliable daily pick-and-drop for school, work, and routine travel needs.",
    icon: "https://ik.imagekit.io/rimpec75t/Employee%20Shuttle.png",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    title: "Student Shuttle",
    description: "Verified school & university shuttle service with real-time vehicle supervision.",
    icon: "https://ik.imagekit.io/rimpec75t/Icons-14.png",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Carpooling",
    description: "Save money and reduce emissions by sharing your route with trusted co-riders.",
    icon: "https://ik.imagekit.io/rimpec75t/Icons-12.png",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    title: "Tech for Transport",
    description: "Built to enable efficient ride-sharing and sustainable mobility through trusted co-riders.",
    icon: "https://ik.imagekit.io/rimpec75t/Tech%20for%20Transport.png",
    colSpan: 2,
    rowSpan: 1,
  }
];

const BentoCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1, 
        ease: [0.165, 0.84, 0.44, 1] 
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.03, y: -8, transition: { type: "spring", stiffness: 400, damping: 20 } }}
      className={`bento-card col-span-${service.colSpan} row-span-${service.rowSpan}`}
      onMouseMove={handleMouseMove}
    >
      <div className="bento-card-inner">
        <div className="bento-glass-overlay"></div>
        <div className="bento-content">
          <div className="bento-text-area">
            <h3 className="bento-title">{service.title}</h3>
            <p className="bento-desc">{service.description}</p>
          </div>
          <div className="bento-icon-wrapper">
            <motion.img 
              src={service.icon} 
              alt={service.title} 
              className="bento-icon"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="bento-icon-glow"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Service = () => {
  return (
    <div className="service-page-container">
      {/* Background Ambience */}
      <div className="service-bg">
        <div className="service-orb service-orb-top"></div>
        <div className="service-orb service-orb-bottom"></div>
        <div className="service-grid-pattern"></div>
      </div>

      <div className="service-content-wrapper">
        {/* Top Video Wrapper in Bento Style */}
        <motion.div 
          className="service-video-container bento-card"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
        >
          <video 
            src="https://ik.imagekit.io/r8lsvc359/Our%20Service-Updated_12-2-2026.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            className="service-hero-video"
          />
        </motion.div>

        <header className="service-header mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="decorative-pill"
          >
            <span>Our Offerings</span>
          </motion.div>
          
          <motion.h1 
            className="service-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mobility <span className="text-gradient">Redefined.</span>
          </motion.h1>
          
          <motion.p 
            className="service-subheading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Reliable, affordable, and comfortable travel. Thousands of happy passengers trust us across Pakistan.
          </motion.p>
        </header>

        <main className="bento-grid-container">
          {servicesContent.map((service, idx) => (
            <BentoCard key={idx} service={service} index={idx} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Service;
