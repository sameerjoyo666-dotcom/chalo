import React from 'react';
import { motion } from 'framer-motion';
import './Collaborators.css';

const collaboratorsData = [
  {
    title: "American Lycetuff School",
    desc: "Chalo Technologies has signed an MOU with American Lycetuff School (Hyderabad Branch) to provide safe and reliable pick-and-drop services under its School Shuttle program, ensuring a smoother and more secure daily commute for students and staff.",
    mainImg: "https://ik.imagekit.io/rimpec75t/WhatsApp%20Image%202026-01-28%20at%2011.17.55%20AM%20(1).jpeg",
    logo: "https://ik.imagekit.io/rimpec75t/american-logo.jfif"
  },
  {
    title: "People’s School Program (SEF)",
    desc: "Chalo Technologies partners with People’s School Program (SEF) to deliver reliable, tech-enabled shuttle services, supporting educators with safe and dependable transportation.",
    mainImg: "https://ik.imagekit.io/rimpec75t/WhatsApp%20Image%202026-01-28%20at%2011.37.22%20AM.jpeg",
    logo: "https://ik.imagekit.io/rimpec75t/TMK.jfif"
  },
  {
    title: "Foundation College of Law",
    desc: "Chalo Technologies partners with Foundation College of Law to launch a safe, punctual, and tech-enabled university shuttle service, redefining reliable campus transportation for students.",
    mainImg: "https://ik.imagekit.io/rimpec75t/WhatsApp%20Image%202026-01-28%20at%2011.21.32%20AM.jpeg",
    logo: "https://ik.imagekit.io/rimpec75t/lawcollegelogo.jfif"
  },
  {
    title: "MUET EV-Bike Ride Hailing",
    desc: "Chalo Technologies is driving clean, smart, and tech-enabled mobility for students and faculty, starting right from the MUET campus.",
    mainImg: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/mehranMOU.jfif",
    logo: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/mehran.png"
  },
  {
    title: "SABS University Jamshoro",
    desc: "SABS University Jamshoro and Chalo Technologies have officially signed an MoU to modernize and fully digitize the campus transportation system.",
    mainImg: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/sabs.jfif",
    logo: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/sabs.png"
  },
  {
    title: "Hashim Medical City",
    desc: "Chalo Technologies is proud to provide a dedicated corporate pick-and-drop service, ensuring smooth and reliable commutes for doctors, paramedical staff, and employees of Hashim Medical City Hospital, Hyderabad.",
    mainImg: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/hashimphoto.jfif",
    logo: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/logohashim.jpg"
  },
  {
    title: "Iqra University Hyderabad",
    desc: "Chalo Technologies will provide safe, reliable, and convenient daily pick-and-drop services for students and faculty, enhancing the campus commute experience at Iqra University Hyderabad.",
    mainImg: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/iqramou.jfif",
    logo: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/iqrauni.png"
  },
  {
    title: "Pak-Turk Maarif Schools",
    desc: "Chalo Technologies met with senior management of Pak-Turk Maarif International Schools to discuss a tech-enabled, safe, and convenient pick-and-drop service for students and faculty.",
    mainImg: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/pakturkk.jfif",
    logo: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/pakturk.png"
  },
  {
    title: "ICMA Pakistan",
    desc: "Chalo Technologies will provide eco-friendly and reliable transportation solutions for the students and faculty of ICMA Pakistan, promoting sustainable and efficient commuting.",
    mainImg: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/icmapic.jfif",
    logo: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/icma.jfif"
  },
  {
    title: "TIME Institute",
    desc: "Chalo Technologies will provide safe and reliable daily pick-and-drop services, enhancing convenience and security for the students of TIME – The Institute of Management and Entrepreneurship.",
    mainImg: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/timess.jfif",
    logo: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/times.jfif"
  },
  {
    title: "APSACS Petaro",
    desc: "Chalo Technologies will provide safe, reliable, and affordable daily shuttle services for students and faculty of APSACS Petaro, enhancing convenience and supporting academic excellence.",
    mainImg: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/apass.jfif",
    logo: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/apcas.jfif"
  },
  {
    title: "Al Tijjar Logistics",
    desc: "Chalo Technologies has teamed up with Al Tijjar Logistics to deliver efficient fleet supply solutions, strengthening Pakistan’s mobility ecosystem.",
    mainImg: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/alltijar.jfif",
    logo: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/altijar.webp"
  },
  {
    title: "Isra Foundation Schools",
    desc: "Chalo Technologies will provide safe, reliable, and efficient daily pick-and-drop shuttle services for students and staff of Isra Foundation Schools, advancing smart and technology-driven transportation solutions.",
    mainImg: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/isssra.jfif",
    logo: "https://ik.imagekit.io/rimpec75t/Chaloo-assets/isra.jfif"
  },
  {
    title: "Shaukat Khanum Cancer Hospital",
    desc: "Chalo Technologies has partnered with Shaukat Khanum Memorial Cancer Hospital to provide daily staff transport. This ensures safe, reliable, and efficient commuting for healthcare professionals.",
    mainImg: "https://ik.imagekit.io/rimpec75t/MOU.jpeg",
    logo: "https://ik.imagekit.io/rimpec75t/logo.png"
  }
];

const Collaborators = () => {
  return (
    <div className="collab-page-container">
      {/* Background Ambience */}
      <div className="collab-bg">
        <div className="collab-blob-left"></div>
        <div className="collab-blob-right"></div>
      </div>

      <div className="collab-content-wrapper">
        <header className="collab-header">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="decorative-pill"
          >
            <span>Our Partners</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Powering Mobility <br/><span className="text-gradient">Together.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="collab-subtitle"
          >
            Hover over the cards below to explore how we are collaborating with top educational institutions, hospitals, and logistical platforms across the nation.
          </motion.p>
        </header>

        {/* FLIP CARDS GRID */}
        <section className="collab-grid-section">
          <div className="collab-grid">
            {collaboratorsData.map((collab, index) => (
              <motion.div 
                key={index}
                className="collab-card-wrapper"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
              >
                <div className="modern-collab-card">
                  <img className="collab-base-img" src={`${collab.mainImg}?tr=w-400,h-300,fo-auto`} alt={collab.title} />
                  <div className="collab-gradient-scrim"></div>
                  
                  <div className="collab-floating-logo">
                    <img src={`${collab.logo}?tr=w-80,h-80,fo-auto`} alt="Publisher Logo" />
                  </div>

                  <div className="collab-drawer">
                    <div className="drawer-header">
                      <h3>{collab.title}</h3>
                    </div>
                    <div className="drawer-body">
                      <p>{collab.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collaborators;
