import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Environment, ContactShadows } from '@react-three/drei';
import CarModel from '../components/CarModel';
import './AboutUs.css';
import Reveal from '../components/Reveal';

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* 3D Hero Section - Updated to the new Interactive Presentation feel */}
      <section className="about-hero">
        <div className="about-3d-scene">
            <Canvas 
              shadows 
              dpr={[1, 2]} 
              camera={{ position: [0, 2, 12], fov: 30, far: 5000 }}
              style={{ pointerEvents: 'auto' }}
            >
              {/* BRAND LIGHTING */}
              <ambientLight intensity={2} />
              <directionalLight position={[10, 20, 10]} intensity={3} castShadow />
              <Environment preset="city" />
              {/* The Car Model (Now with Hover Follow) */}
              <CarModel />
              
              <ContactShadows position={[0, -0.2, 0]} opacity={0.6} scale={20} blur={2.5} far={10} />
            </Canvas>
        </div>

        <div className="about-hero-content">
          <Reveal animation="fade-down">
            <h1 className="about-title">About Us</h1>
          </Reveal>
          <Reveal animation="fade-up" delay={200}>
            <p className="about-subtitle">
              Interactive 3D Preview
            </p>
          </Reveal>
        </div>
      </section>

      {/* Narrative Section back in place */}
      <section className="about-narrative section">
        <div className="container">
          <div className="narrative-grid">
            <Reveal animation="fade-right">
              <div className="narrative-text">
                <h2>Our Vision</h2>
                <p>
                  At Chaloo, we believe that transportation should be efficient, safe, and accessible to everyone. 
                  Our journey started with a simple goal: to connect cities like never before.
                </p>
              </div>
            </Reveal>
            <Reveal animation="fade-left">
              <div className="about-stat-card">
                <h3>100K+</h3>
                <p>Happy Users</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
