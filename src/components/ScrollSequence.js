import React, { useEffect, useRef, useState } from 'react';
import './ScrollSequence.css';

const ScrollSequence = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameCount = 160;

  useEffect(() => {
    let isMounted = true;
    const loadedImages = [];
    let loadedCount = 0;
    
    // Load sequence frames
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, '0');
        img.src = require(`../assets/vehicle/ezgif-frame-${frameNum}.jpg`);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount && isMounted) {
             setImages(loadedImages);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === frameCount && isMounted) {
             setImages(loadedImages);
          }
        }
        loadedImages.push(img);
    }

    return () => { isMounted = false; };
  }, []);

  const renderFrame = (index) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext('2d');
    const img = images[index];
    if (img && img.width) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  };

  useEffect(() => {
     if (images.length > 0) {
       renderFrame(0);
     }
  }, [images]);

  useEffect(() => {
     let ticking = false;
     
     const handleScroll = () => {
       if (!ticking && images.length > 0) {
         window.requestAnimationFrame(() => {
            if (!containerRef.current) return;
            const scrollY = window.scrollY;
            const containerOffsetTop = containerRef.current.offsetTop;
            const relativeScroll = scrollY - containerOffsetTop;
            const maxScroll = window.innerHeight * 2;
            
            if (relativeScroll >= 0 && relativeScroll <= maxScroll) {
              const scrollFraction = Math.min(relativeScroll / maxScroll, 1);
              const frameIndex = Math.min(
                frameCount - 1,
                Math.max(0, Math.floor(scrollFraction * frameCount))
              );
              renderFrame(frameIndex);
            } else if (relativeScroll < 0) {
              renderFrame(0);
            } else if (relativeScroll > maxScroll) {
              renderFrame(frameCount - 1);
            }
            
            ticking = false;
         });
         ticking = true;
       }
     };
     
     window.addEventListener('scroll', handleScroll, { passive: true });
     return () => window.removeEventListener('scroll', handleScroll);
  }, [images]);

  return (
    <div ref={containerRef} className="scroll-sequence-container">
      <div className="sticky-canvas-wrapper">
         <canvas ref={canvasRef} className="sequence-canvas" />
         <div className="hero-overlay">
         </div>
      </div>
    </div>
  );
};

export default ScrollSequence;
