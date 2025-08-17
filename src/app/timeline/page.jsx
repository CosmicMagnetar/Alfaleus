"use client";

import React from "react";
import "./Timeline.css"; // adjust path as needed if CSS is not in same folder

const timelineData = [
  {
    step: 1,
    date: "December, 2016",
    description: "Inception of the idea during an eye examination at the hospital, and the journey started.",
    cta: "Aravind Eye Care System",
    image: "/images/aravind.png", // Replace with your actual local image path
    direction: "right",
    top: 100,
  },
  {
    step: 2,
    date: "Oct 2017",
    description: "Raised first angel fund via VITTBI.",
    cta: "VIT TBI",
    image: "/images/vit.png",
    direction: "left",
    top: 370,
  },
  {
    step: 3,
    date: "June 2018",
    description: "Clinical validation from Aravind Eye Hospital and Johns Hopkins Hospital.",
    cta: "Johns Hopkins School of Medicine",
    image: "/images/johns-hopkins.png",
    direction: "right",
    top: 640,
  },
  {
    step: 4,
    date: "Feb 2019",
    description: "Launch of C3 Field Analyser, Version 1.",
    cta: "Learn more",
    image: "/images/c3-v1.png",
    direction: "left",
    top: 910,
  },
  {
    step: 5,
    date: "March 2021",
    description: "Launch of IWA – Intelligent Vision Analyser, a comprehensive eye-testing device.",
    cta: "Learn more",
    image: "/images/iwa-launch.png",
    direction: "right",
    top: 1180,
  },
  {
    step: 6,
    date: "May 2022",
    description: "IWA+ launched by Mrs. Kiran Mazumdar Shaw.",
    cta: "Learn more",
    image: "/images/iwa-plus.png",
    direction: "left",
    top: 1450,
  },
  {
    step: 7,
    date: "Jan 2023",
    description: "Signing of collaborative research agreement (CRA) with All India Institute of Medical Sciences (AIIMS), New Delhi.",
    cta: "Johns Hopkins School of Medicine",
    image: "/images/aiims.png",
    direction: "right",
    top: 1720,
  },
  {
    step: 8,
    date: "Feb 2023",
    description: "Inauguration of R&D center at Technology Research Park, IIT Hyderabad.",
    cta: "Learn more",
    image: "/images/iit-hyderabad.png",
    direction: "left",
    top: 1990,
  },
];

const TimelinePage = () => {
  return (
    <div className="timeline-container">
      <div className="vr-frame-timeline">
        <div className="timeline-content">
          <div className="timeline-wrapper">
            <div className="timeline-line-container">
              <div className="timeline-line" />
              <div className="timeline-progress" style={{ height: "2200px" }} />
            </div>

            {timelineData.map((item) => (
              <React.Fragment key={item.step}>
                <div className="timeline-step" style={{ top: `${item.top}px` }}>
                  <div className="step-number">{item.step}</div>
                </div>
                <div className={`timeline-item ${item.direction}`} style={{ top: `${item.top}px` }}>
                  {item.direction === "left" && (
                    <div className="timeline-image">
                      <img src={item.image} alt={item.cta} />
                    </div>
                  )}
                  <div className="timeline-content-item">
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-description">{item.description}</div>
                    <div className="timeline-cta">{item.cta}</div>
                  </div>
                  {item.direction === "right" && (
                    <div className="timeline-image">
                      <img src={item.image} alt={item.cta} />
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}

            {/* Optional End Message */}
            <span className="timeline-step" style={{ top: "2260px",backgroundColor:"transparent",border:"none",boxShadow:"none"}}>
              <span className="step-number" style={{ backgroundColor:"#1661b5",width:"auto",padding:"12px 12px",border:"none",borderRadius:"40px",overflow:"visible",fontSize:"18px"}}>Continued..</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
