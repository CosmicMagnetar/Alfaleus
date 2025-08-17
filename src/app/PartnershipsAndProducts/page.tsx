import React from "react";
import Image from "next/image";
import "./PartnershipsAndProducts.css";

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

const PartnershipsAndProducts: React.FC = () => {
  return (
    <section className="partnership-section">
      <h3 className="section-title">Associations and Collaborations with</h3>

      <div className="logo-strip-wrapper">
  <div className="logo-strip">
    {partners.map((partner) => (
      <div key={partner.name} className="logo-container">
        <Image
          src={partner.src}
          alt={partner.name}
          width={120}
          height={80}
          className="logo"
        />
      </div>
    ))}
  </div>
</div>

      <div className="products-section">
        <button className="features-button">Robust Features</button>
        <h2 className="products-title">Our Products</h2>
        <p className="products-subtext">
          AlfaLeus Technology
          <br />
          Making Eyecare Accessible
        </p>
      </div>
    </section>
  );
};

export default PartnershipsAndProducts;
