import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './Teams.css';

const leadership = [
  {
    name: "Ali Raza",
    role: "Founder & CEO",
    image: "https://ik.imagekit.io/rimpec75t/CEO%20and%20Director-01.jpg",
    desc: "At Chalo Technologies, we provide smart, reliable, and affordable transportation solutions for individuals and businesses. Our mission is to make mobility seamless, safe, and accessible for everyone through innovation and dedication."
  },
  {
    name: "Syed Akmal Kazmi",
    role: "Co-Founder",
    image: "https://ik.imagekit.io/rimpec75t/CEO%20and%20Director-02.jpg",
    desc: "Guided by a shared vision, our team at Chalo Technologies delivers smarter, seamless urban mobility. Through creativity, expertise, and collaboration, we ensure every journey is efficient and effortless."
  }
];

const teamMembers = [
  {
    name: "Samiuddin Panhwar",
    role: "Head - Strategic Alliances & HR",
    image: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/hr.png?updatedAt=1761723468562",
    linkedin: "https://www.linkedin.com/in/samiuddin-panhwar-23ba01385/"
  },
  {
    name: "Faizan Ali",
    role: "Finance Manager",
    image: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/faizan.png?updatedAt=1761723467283",
    linkedin: "https://www.linkedin.com/in/faizan-ali-689481138"
  },
  {
    name: "Sameer Ahmed",
    role: "Social Media Manager",
    image: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/sameer.jpg?updatedAt=1761723468187",
    linkedin: "https://www.linkedin.com/in/sameer-ahmed-nasrullah-49226a211"
  },
  {
    name: "Aaliyan Ahmed",
    role: "Full Stack Developer",
    image: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/Aaliyan-01.png?updatedAt=1761723464770",
    linkedin: "https://www.linkedin.com/in/aaliyan-ahmed-b7349030b/"
  },
  {
    name: "Jahanzaib Sikandar",
    role: "Assistant Operation Manager",
    image: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/SIR.jpg?updatedAt=1761723466251",
    linkedin: "https://www.linkedin.com/in/jahanzaib-sikander-50a71434b"
  },
  {
    name: "Aamna Sohail",
    role: "Head - Coorporate Sales",
    image: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/Amna.png?updatedAt=1761715398641",
    linkedin: "https://www.linkedin.com/in/aamna-arain-b27452327/"
  },
  {
    name: "Nirma Abro",
    role: "Frontend Developer",
    image: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/mine.png?updatedAt=1761723465674",
    linkedin: "https://www.linkedin.com/in/nirma-a-85a885230/"
  },
  {
    name: "Narjis Khatoon",
    role: "Operations Support Executive",
    image: "https://ik.imagekit.io/rimpec75t/Narjis-01%20(1).jpg",
    linkedin: "https://www.linkedin.com/in/nurjis-shabbir/"
  },
  {
    name: "Ayesha Khero",
    role: "Customer Support Officer",
    image: "https://ik.imagekit.io/rimpec75t/Mam%20Aisha.png",
    linkedin: "https://www.linkedin.com/in/aisha-khero-743b9237b/"
  },
  {
    name: "Adil Charan",
    role: "Monitoring Associate",
    image: "https://ik.imagekit.io/rimpec75t/Aadil-01.png",
    linkedin: "https://www.linkedin.com/in/adil-charan-888a85381/"
  }
];

const MemberCard = ({ member, index }) => {
  return (
    <div className="accordion-card">
      <div className="accordion-img-wrapper">
        <img 
          src={member.image.includes('?') ? `${member.image}&tr=w-400,h-400,fo-auto` : `${member.image}?tr=w-400,h-400,fo-auto`} 
          alt={member.name} 
          className="accordion-img" 
        />
      </div>
      <div className="accordion-info">
        <span className="accordion-role">{member.role}</span>
        <h3 className="accordion-name">{member.name}</h3>
        <a href={member.linkedin} target="_blank" rel="noreferrer" className="accordion-linkedin">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

const LeaderCard = ({ leader, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="leader-card"
    >
      <div className="leader-img-wrapper">
        <img src={leader.image} alt={leader.name} />
      </div>
      <div className="leader-content">
        <h2>{leader.name}</h2>
        <span className="leader-role">{leader.role}</span>
        <p className="leader-desc">{leader.desc}</p>
      </div>
    </motion.div>
  );
};

const LottieHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let anim;
    let isMounted = true;

    const loadLottie = async () => {
      try {
        // Dynamically import specific JSON based on screen size to avoid bloated bundles
        let module;
        if (window.innerWidth < 768) {
          module = await import('../assets/Teams-Mobile.json');
        } else {
          module = await import('../assets/Teams-Laptop.json');
        }
        
        const animData = module.default || module;

        const tryInit = () => {
          if (!isMounted) return;
          if (window.lottie && containerRef.current) {
            anim = window.lottie.loadAnimation({
              container: containerRef.current,
              renderer: 'svg',
              loop: true,
              autoplay: true,
              animationData: animData
            });
          } else {
            setTimeout(tryInit, 200);
          }
        };
        tryInit();
      } catch (err) {
        console.error("Failed to load Lottie animation:", err);
      }
    };

    loadLottie();

    return () => {
      isMounted = false;
      if (anim) anim.destroy();
    };
  }, []);

  return (
    <motion.div 
      className="teams-hero-lottie-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div ref={containerRef} className="teams-hero-lottie" />
    </motion.div>
  );
};

const Teams = () => {
  return (
    <div className="teams-page-container">
      {/* Background Orbs */}
      <div className="teams-bg">
        <div className="team-orb-1"></div>
        <div className="team-orb-2"></div>
      </div>

      <div className="teams-content-wrapper">
        {/* Animated Hero Top Block - Replaced with Lottie */}
        <LottieHero />

        <header className="teams-header">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="decorative-pill"
          >
            <span>The Minds Behind Chalo</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Meet Our <span className="text-gradient">Team.</span>
          </motion.h1>
        </header>

        {/* Leadership Section */}
        <section className="leadership-section">
          <div className="leadership-grid">
            {leadership.map((leader, i) => (
              <LeaderCard key={i} leader={leader} index={i} />
            ))}
          </div>
        </section>

        {/* Extended Team Section - Accordion Hover */}
        <section className="extended-team-section">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Meet Our Expert Team
          </motion.h2>
          
          <div className="accordion-container">
            <div className="accordion-row">
              {teamMembers.map((member, i) => (
                <MemberCard key={i} member={member} index={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Teams;
