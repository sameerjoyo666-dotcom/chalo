import React, { useEffect, useRef } from 'react';
import './MapRoute.css';

const MapRoute = () => {
  const pathRef      = useRef(null);
  const orangeDotRef = useRef(null);
  const whiteDotRef  = useRef(null);

  useEffect(() => {
    const init = setTimeout(() => {
      const path = pathRef.current;
      if (!path) return;

      const len = path.getTotalLength();
      path.style.strokeDasharray  = len;
      path.style.strokeDashoffset = len;

      let start = null;
      const duration = 2200;

      const tick = (ts) => {
        if (!start) start = ts;
        const p    = Math.min((ts - start) / duration, 1);
        const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

        path.style.strokeDashoffset = len * (1 - ease);

        const pt = path.getPointAtLength(ease * len);
        if (orangeDotRef.current) {
          orangeDotRef.current.setAttribute('cx', pt.x);
          orangeDotRef.current.setAttribute('cy', pt.y);
        }
        if (whiteDotRef.current) {
          whiteDotRef.current.setAttribute('cx', pt.x);
          whiteDotRef.current.setAttribute('cy', pt.y);
        }

        if (p < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    }, 700);

    return () => clearTimeout(init);
  }, []);

  return (
    <div className="map-route-wrapper">
      {/* Subtle map grid lines */}
      <div className="map-bg-grid" />

      <svg
        className="map-route-svg"
        viewBox="-20 -20 340 440"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <defs>
          <filter id="routeGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="pinGlow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Route path */}
        <path
          ref={pathRef}
          d="M 120 75 C 120 120, 60 150, 72 195 C 84 240, 180 268, 165 285"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#routeGlow)"
        />

        {/* Origin pin */}
        <circle cx="120" cy="75"  r="11" fill="var(--secondary)" filter="url(#pinGlow)" />
        <circle cx="120" cy="75"  r="5"  fill="white" />

        {/* Destination pin — green */}
        <circle cx="190" cy="370" r="13" fill="var(--success)" filter="url(#pinGlow)" />
        <circle cx="190" cy="370" r="6"  fill="white" />

        {/* Moving dot */}
        <circle ref={orangeDotRef} cx="120" cy="75" r="9"   fill="var(--primary)" filter="url(#pinGlow)" className="vehicle-dot" />
        <circle ref={whiteDotRef}  cx="120" cy="75" r="4"   fill="white" />
      </svg>
    </div>
  );
};

export default MapRoute;
