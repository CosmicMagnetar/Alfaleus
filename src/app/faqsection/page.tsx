// FaqSection.jsx
import React, { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  const tabs = ["General", "Product", "Support", "Other"] as const;
  type TabKey = typeof tabs[number];
  const [activeTab, setActiveTab] = useState<TabKey>("General");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  type FaqItem = { q: string; a: string };
  type FaqData = { [key in TabKey]: FaqItem[] } & { [key: string]: FaqItem[] };
  const faqData: FaqData = {
    General: [
      {
        q: "Are Alfaleus devices approved for clinical use?",
        a: "Yes. Our products undergo rigorous clinical validations in collaboration with leading institutions like Aravind Eye Hospital and AIIMS, New Delhi."
      },
      { 
        q: "How is iVA+ different from other vision testing tools?", 
        a: "iVA+ uses portable VR technology to deliver accurate, user-friendly visual field testing with enhanced precision and patient comfort." 
      },
      { 
        q: "Who can use Alfaleus products?", 
        a: "Clinics and eye-care professionals can easily adopt our tools for streamlined diagnostics and improved patient care." 
      }
    ],
    Product: [
      { 
        q: "Is iVA+ lightweight and portable?", 
        a: "Yes—a carry-friendly VR device designed for clinics on the move with easy setup and transportation." 
      },
      { 
        q: "Does it need constant internet?", 
        a: "No—works offline for daily operations, with internet needed only for software updates and technical support." 
      }
    ],
    Support: [
      { 
        q: "Do you offer training?", 
        a: "Yes—we provide comprehensive online and in-person training programs for smooth onboarding of your team." 
      },
      { 
        q: "What about repairs?", 
        a: "We offer complete warranty support and provide fast replacement units to minimize downtime where needed." 
      }
    ],
    Other: [
      { 
        q: "Where is Alfaleus headquartered?", 
        a: "Our team is based in Vellore, Tamil Nadu, India, with a focus on serving eye-care professionals globally." 
      },
      { 
        q: "Can I collaborate with Alfaleus?", 
        a: "Absolutely—we actively partner with institutions, researchers, and clinicians worldwide to advance eye care technology." 
      }
    ]
  };

  const handleToggle = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };



  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        {/* Left Column */}
        <div className={styles.leftCol}>
          {/* Header Section */}
          <div className={styles.headerSection}>
            <div className={styles.headerContent}>
              {/* FAQ Badge */}
              <div className={styles.faqBadge}>
                <div className={styles.badgeText}>FAQ</div>
              </div>
              
              {/* Title and Description */}
              <div className={styles.titleSection}>
                <h2 className={styles.title}>
                  <span className={styles.titleNormal}>Frequently asked </span>
                  <span className={styles.titleHighlight}>questions</span>
                </h2>
                <p className={styles.description}>
                  Our FAQ section offers fast, clear answers to popular questions, so you can find information easily.
                </p>
              </div>
            </div>

            {/* Tabs Container */}
            <div className={styles.tabsContainer}>
              <div className={styles.tabsWrapper}>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                    onClick={() => {
                      setActiveTab(tab);
                      setExpandedIndex(0);
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className={styles.faqList}>
            {faqData[activeTab].map((item, idx) => (
              <div
                key={idx}
                className={styles.faqItem}
                onClick={() => handleToggle(idx)}
              >
                <div className={`${styles.questionRow} ${expandedIndex === idx ? styles.questionRowExpanded : ''}`}>
                  {expandedIndex === idx ? (
                    <div className={styles.expandedContent}>
                      <div className={styles.question}>{item.q}</div>
                      <div className={styles.answer}>{item.a}</div>
                    </div>
                  ) : (
                    <div className={styles.question}>{item.q}</div>
                  )}
                  
                  <div className={styles.iconButton}>
                    {expandedIndex === idx ? (
                      <Minus size={16} color="#3783C3" />
                    ) : (
                      <Plus size={16} color="#3783C3" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightCol}>
          {/* Illustration */}
          <div className={styles.illustration}>
            <img 
              src="./boy-waiting-with-cat.png" 
              alt="FAQ illustration" 
              className={styles.illustrationImg}
            />
          </div>

          {/* Live Chat Card */}
          <div className={styles.liveChatCard}>
            <div className={styles.chatContent}>
              <h4 className={styles.chatTitle}>Live chat</h4>
              <p className={styles.chatDescription}>
                Get real-time support from a Alfaleus expert to quickly resolve your questions.
              </p>
            </div>
            <div className={styles.chatIconWrapper}>
              <MessageCircle size={16} color="black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}