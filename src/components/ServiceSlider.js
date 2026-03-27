import React, { useEffect, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './ServiceSlider.css';
import MapRoute from './MapRoute';

// Base Lottie JSON imported as a module
import baseAnimation from '../assets/S2.json';

import iconAmb  from '../assets/Service Icons/Ambulance.png';
import iconBus  from '../assets/Service Icons/Bus trip.png';
import iconCar  from '../assets/Service Icons/Carpoling.png';
import iconBike from '../assets/Service Icons/E-Bike.png';
import iconRik  from '../assets/Service Icons/E-Rikshaw.png';
import iconEmp  from '../assets/Service Icons/Employee Shuttle.png';
import iconInt  from '../assets/Service Icons/Intercity.png';
import iconStu  from '../assets/Service Icons/Student Shuttle.png';

const services = [
  { name: "Intercity",        icon: iconInt  },
  { name: "Bus Trip",         icon: iconBus  },
  { name: "Carpooling",       icon: iconCar  },
  { name: "E-Bike",           icon: iconBike },
  { name: "E-Rikshaw",        icon: iconRik  },
  { name: "Ambulance",        icon: iconAmb  },
  { name: "Student Shuttle",  icon: iconStu  },
  { name: "Employee Shuttle", icon: iconEmp  }
];

// Convert an image URL to base64 data-URI
const toBase64 = (url) =>
  new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.width; c.height = img.height;
      c.getContext('2d').drawImage(img, 0, 0);
      resolve(c.toDataURL('image/png'));
    };
    img.onerror = () => resolve(null);
    img.src = url;
  });

const ServiceSlider = () => {
  const containerRef = useRef(null);
  const animRef      = useRef(null);
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);

  // Pre-convert all icons to base64 once
  const b64Cache = useRef({});

  useEffect(() => {
    Promise.all(
      services.map(async (svc) => {
        if (!b64Cache.current[svc.name]) {
          b64Cache.current[svc.name] = await toBase64(svc.icon);
        }
      })
    ).then(() => setReady(true));
  }, []);

  // Build a modified copy of the JSON with the new icon embedded
  const buildJson = useCallback((svc) => {
    const json = JSON.parse(JSON.stringify(baseAnimation)); // deep clone

    // Replace the vehicle image (assets[0].p is the base64 data-URI)
    const b64 = b64Cache.current[svc.name];
    if (b64 && json.assets && json.assets[0]) {
      json.assets[0].p = b64;
    }

    // Ensure the left rectangle from S2.json is visible (we'll overlay the map on it)
    // No filtering of asset 41 here anymore.

    return json;
  }, []);

  // Load or reload Lottie animation
  const loadAnim = useCallback((svc) => {
    if (!window.lottie || !containerRef.current) return;
    if (animRef.current) {
      animRef.current.destroy();
      animRef.current = null;
    }
    containerRef.current.innerHTML = '';
    animRef.current = window.lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: buildJson(svc),
    });
  }, [buildJson]);

  // Wait for lottie CDN & icons to be ready, then load first slide
  useEffect(() => {
    if (!ready) return;
    const tryLoad = () => {
      if (window.lottie) {
        loadAnim(services[index]);
      } else {
        setTimeout(tryLoad, 200);
      }
    };
    tryLoad();
    return () => { if (animRef.current) animRef.current.destroy(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  // Auto-advance slides
  useEffect(() => {
    if (!ready) return;
    const t = setInterval(() => {
      setIndex(prev => {
        const next = prev === services.length - 1 ? 0 : prev + 1;
        loadAnim(services[next]);
        return next;
      });
    }, 4000);
    return () => clearInterval(t);
  }, [ready, loadAnim]);

  return (
    <div className="service-slider-container">
      <div className="slider-bg" />
      <div className="glow-orb orb-a" />
      <div className="glow-orb orb-b" />

      {/* Lottie + Map Route together in one scene */}
      <div className="lottie-scene">
        <div ref={containerRef} className="lottie-hero-wrapper" />

        {/* Map route panel — positioned over the LEFT (empty) rectangle inside the Lottie */}
        <div className="map-route-panel">
          <MapRoute key={index} />
        </div>
      </div>

      {/* Service name label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="service-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0  }}
          exit={{    opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {services[index].name}
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="slider-dots">
        {services.map((_, i) => (
          <div
            key={i}
            className={`dot-pip ${i === index ? 'active' : ''}`}
            onClick={() => { loadAnim(services[i]); setIndex(i); }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
