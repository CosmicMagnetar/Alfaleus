import React from "react";
import styles from "./ReputablePartners.module.css";

const ReputablePartners: React.FC = () => {
  const partners = [
  { name: "DST", src: "/logos/dst.png" },
  { name: "BIRAC", src: "/logos/birac.png" },
  { name: "Invest India", src: "/logos/investindia.png" },
  { name: "VIT", src: "/logos/vit.png" },
  { name: "Startup India", src: "/logos/startupindia.png" },
  { name: "Aravind Eye Care", src: "/logos/aravind.png" },
  { name: "IIT Hyderabad", src: "/logos/iith.png" },
  { name: "DST1", src: "/logos/dst.png" },
  { name: "BIRAC1", src: "/logos/birac.png" },
  { name: "Invest India1", src: "/logos/investindia.png" },
  { name: "VIT1", src: "/logos/vit.png" },
  { name: "Startup India1", src: "/logos/startupindia.png" },
  { name: "Aravind Eye Care1", src: "/logos/aravind.png" },
  { name: "IIT Hyderabad1", src: "/logos/iith.png" },
];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className="features-button">Innovate Now</div>
          <h2 className={styles.title}>Reputable Partners</h2>
          <p className={styles.subtitle}>
            Our reputable partners underscore our commitment to quality,
            illustrating the strong relationships we've built with top brands
            in the industry.
          </p>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <h3 className={styles.statValue}>100+</h3>
            <p className={styles.statLabel}>Project Completed</p>
          </div>
          <div className={styles.statCard}>
            <h3 className={styles.statValue}>98.1%</h3>
            <p className={styles.statLabel}>Client Succession</p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className={styles.logoMarquee}>
          <div className={styles.logoTrack}>
            {partners.map((partner) => (
              <img
                key={partner.name} 
                src={partner.src}
                alt={partner.name}
                className={styles.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReputablePartners;
