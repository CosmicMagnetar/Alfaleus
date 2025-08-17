"use client";

import React from "react";
import { FaUsers, FaUserMd, FaGlobe } from "react-icons/fa";
import "./impact.css"; // Make sure this path matches where your CSS is saved

const stats = [
  {
    icon: <FaUsers />,
    number: "50000+",
    title: "Lives Impacted",
    desc: "Drive impact and growth with our strategic and effective eyecare solutions",
  },
  {
    icon: <FaUserMd />,
    number: "150+",
    title: "Trusted Doctors",
    desc: "Maximize revenue and drive growth with our comprehensive sales.",
  },
  {
    icon: <FaGlobe />,
    number: "4+",
    title: "Countries",
    desc: "Drive impact and growth with our strategic digital marketing solutions",
  },
];

export default function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="impact-tag">Robust Features</div>
      <h2 className="impact-heading">Impact We Created</h2>
      <p className="impact-subtext">
        Our all-in-one solutions streamline your workflow by integrating essential tools into a single, cohesive package
      </p>

      <div className="impact-grid">
        {stats.map((item, idx) => (
          <div key={idx} className="impact-card">
            <div className="card-header">
              <div className="card-icon">{item.icon}</div>
              <div className="card-number">{item.number}</div>
            </div>
            <div className="card-title">{item.title}</div>
            <div className="card-desc">{item.desc}</div>
            <a href="#" className="card-link">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
