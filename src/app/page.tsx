"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ImpactSection from "./ImpactSection/page";
import PartnershipsAndProducts from "./PartnershipsAndProducts/page";
import ProductHighlight from "./ProductHighlight/page";
import Timeline from "./timeline/page";
import JobApplication from "./application/page";
import Testimonials from './testimonials/page'
import Reputation from './reputablepartners/page'
import JoinCommunity from "./joincommunity/page";
import Footer from "./footer/page";
import FaqSection from "./faqsection/page";

export default function Home() {
  const slides = [
    {
      label: "iVA+",
      src: "/img1.png",
      title: "Intelligent Vision Analyser (iVA+)",
      desc: "Virtual‑reality perimeter for precise visual‑field testing—portable and patient‑friendly.",
      buttonText: "Know More",
    },
    {
      label: "LVA",
      src: "/img2.png",
      title: "Low Vision Aids (LVA)",
      desc: "Clinically validated VR aid that enhances residual vision for everyday tasks.",
      buttonText: "Know More",
    },
    {
      label: "C3FA",
      src: "/img3.png",
      title: "C3 Field Analyser (C3FA)",
      desc: "The first VR visual‑field perimeter (2019)—foundation for today’s IVA line.",
      buttonText: "Know More",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.page}>
      {/* Fixed Top Strip + Navbar */}
      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.imageWrapper}>
              <Image
                src={slides[activeIndex].src}
                alt={slides[activeIndex].title}
                fill
                priority
                className={styles.imageFade}
              />

              {/* Slices */}
              <div className={styles.sliceOverlay}>
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className={`${styles.slice} ${
                      i === activeIndex ? styles.activeSlice : ""
                    }`}
                    onClick={() => setActiveIndex(i)}
                  >
                    {i === activeIndex ? (
                      // Content is ALWAYS mounted, but CSS keeps it invisible
                      <div className={styles.sliceContent}>
                        <span className={styles.label}>{slide.label}</span>
                        <h2 className={styles.sliceTitle}>{slide.title}</h2>
                        <p className={styles.sliceDesc}>{slide.desc}</p>
                        <button className={styles.sliceButton}>
                          {slide.buttonText} →
                        </button>
                      </div>
                    ) : (
                      <span className={styles.sliceLabel}>{slide.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other sections */}
        <ImpactSection />
        <PartnershipsAndProducts />
        <ProductHighlight />
        <Timeline />
        <Reputation/>
        <Testimonials/>
        <JoinCommunity/>
        <FaqSection/>
        <Footer/>
      </main>
    </div>
  );
}
