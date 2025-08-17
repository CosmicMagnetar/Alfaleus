import styles from './page.module.css';
import Image from 'next/image';
import { Eye, Users, Target, Lightbulb, Zap, Heart, Award, Building2 } from 'lucide-react';
import React from 'react';

export default function AboutPage() {
  const timelineData = [
    {
      step: 1,
      date: "December, 2016",
      description: "Inception of the idea during an eye examination at the hospital, and the journey started.",
      cta: "Aravind Eye Care System",
      image: "/images/aravind.png",
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

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              About <span className={styles.highlight}>Alfaleus Technologies</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Making eye care accessible and affordable through innovative Virtual Reality technology. 
              We're revolutionizing vision testing with our cutting-edge Intelligent Vision Analyzer (iVA).
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <h3>2018</h3>
                <p>Founded</p>
              </div>
              <div className={styles.stat}>
                <h3>6+</h3>
                <p>Years Innovation</p>
              </div>
              <div className={styles.stat}>
                <h3>VR</h3>
                <p>Technology</p>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageContainer}>
              <Eye className={styles.techIcon} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.sectionContent}>
          <div className={styles.missionGrid}>
            <div className={styles.missionText}>
              <h2>Our Mission</h2>
              <p>
                At Alfaleus Technologies, our mission is to advance eye care by making healthcare 
                more accessible and affordable for everyone. We work collaboratively to design and 
                develop cutting-edge products that transform traditional vision testing.
              </p>
              <p>
                Founded in 2018 by Sandal Kotawala, we're disrupting the eye care diagnostics industry 
                through innovative Virtual Reality solutions, empowering better vision with technology 
                that makes a positive impact on the world.
              </p>
            </div>
            <div className={styles.missionImage}>
              <div className={styles.visionCard}>
                <Eye className={styles.cardIcon} />
                <h4>Intelligent Vision Analyzer</h4>
                <p>VR-based eye testing device revolutionizing diagnostics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <Zap className={styles.valueIcon} />
              <h3>Innovation</h3>
              <p>Pioneering VR technology in eye care diagnostics to transform traditional vision testing methods.</p>
            </div>
            <div className={styles.valueCard}>
              <Heart className={styles.valueIcon} />
              <h3>Accessibility</h3>
              <p>Making advanced eye care technology accessible and affordable for healthcare providers worldwide.</p>
            </div>
            <div className={styles.valueCard}>
              <Users className={styles.valueIcon} />
              <h3>Collaboration</h3>
              <p>Working together to design cutting-edge products that make eye care more effective for everyone.</p>
            </div>
            <div className={styles.valueCard}>
              <Target className={styles.valueIcon} />
              <h3>Impact</h3>
              <p>Creating positive change in healthcare through technology that empowers better vision outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <div className={styles.timelineContainer}>
        <div className={styles.vrFrameTimeline}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineWrapper}>
              <div className={styles.timelineLineContainer}>
                <div className={styles.timelineLine} />
                <div className={styles.timelineProgress} style={{ height: "2200px" }} />
              </div>

              {timelineData.map((item) => (
                <div key={item.step}>
                  <div className={styles.timelineStep} style={{ top: `${item.top}px` }}>
                    <div className={styles.stepNumber}>{item.step}</div>
                  </div>
                  <div 
                    className={`${styles.timelineItem} ${item.direction === 'left' ? styles.left : styles.right}`} 
                    style={{ top: `${item.top}px` }}
                  >
                    {item.direction === "left" && (
                      <div className={styles.timelineImage}>
                        <img src={item.image} alt={item.cta} />
                      </div>
                    )}
                    <div className={styles.timelineContentItem}>
                      <div className={styles.timelineDate}>{item.date}</div>
                      <div className={styles.timelineDescription}>{item.description}</div>
                      <div className={styles.timelineCta}>{item.cta}</div>
                    </div>
                    {item.direction === "right" && (
                      <div className={styles.timelineImage}>
                        <img src={item.image} alt={item.cta} />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Optional End Message */}
              <div className={styles.timelineStep} style={{ 
                top: "2260px",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none"
              }}>
                <div className={styles.stepNumber} style={{ 
                  backgroundColor: "#1661b5",
                  width: "auto",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "40px",
                  overflow: "visible",
                  fontSize: "18px"
                }}>
                  Continued..
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We Are Alfaleus Section */}
      <section className={styles.weAreAlfaleus}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>We are Alfaleus!</h2>
          
          {/* Leadership */}
          <div className={styles.leadershipGrid}>
            <div className={styles.leaderCard}>
              <div className={styles.leaderAvatar}>
                <span>SK</span>
              </div>
              <h4>Sandal Kotawala</h4>
              <p className={styles.position}>CEO / Founder</p>
            </div>
            <div className={styles.leaderCard}>
              <div className={styles.leaderAvatar}>
                <span>PA</span>
              </div>
              <h4>Dr. P. Arumozhvarman</h4>
              <p className={styles.position}>Technical Director</p>
            </div>
          </div>

          {/* Mentors / Technical Advisors */}
          <div className={styles.mentorsSection}>
            <h3>Mentors / Technical Advisors</h3>
            <div className={styles.mentorsGrid}>
              <div className={styles.mentorCard}>
                <div className={styles.mentorAvatar}>
                  <span>VK</span>
                </div>
                <h5>Dr. Venkatesh</h5>
                <p>Chief Medical Officer, Aravind Eye Hospital</p>
              </div>
              <div className={styles.mentorCard}>
                <div className={styles.mentorAvatar}>
                  <span>SU</span>
                </div>
                <h5>Dr. Swati Upadhyay</h5>
                <p>HOD Neuro Ophthalmology, Aravind Eye Hospital</p>
              </div>
              <div className={styles.mentorCard}>
                <div className={styles.mentorAvatar}>
                  <span>AS</span>
                </div>
                <h5>Dr. Anand Sivaraman</h5>
                <p>CEO / Founder, Eyemitra</p>
              </div>
              <div className={styles.mentorCard}>
                <div className={styles.mentorAvatar}>
                  <span>RB</span>
                </div>
                <h5>Dr. Rajachandran</h5>
                <p>General Manger, VIT TBI</p>
              </div>
              <div className={styles.mentorCard}>
                <div className={styles.mentorAvatar}>
                  <span>SP</span>
                </div>
                <h5>Dr. S. Priya</h5>
                <p>Head of Neuro Ophthalmology Aravind Eye Hospitals</p>
              </div>
              <div className={styles.mentorCard}>
                <div className={styles.mentorAvatar}>
                  <span>JK</span>
                </div>
                <h5>Dr. Jitendra Kumar</h5>
                <p>Managing Director, Bangalore Bioinnovation Centre</p>
              </div>
            </div>
          </div>

          {/* The Team */}
          <div className={styles.teamSection}>
            <h3>The Team</h3>
            <div className={styles.teamMembersGrid}>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberAvatar}>
                  <span>SB</span>
                </div>
                <h5>Saurabh Bhatt</h5>
                <p>Project Manager</p>
              </div>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberAvatar}>
                  <span>NK</span>
                </div>
                <h5>Nandhu Kumar</h5>
                <p>Senior Developer</p>
              </div>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberAvatar}>
                  <span>PC</span>
                </div>
                <h5>Priyanka Chaturvedi</h5>
                <p>Optometrist</p>
              </div>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberAvatar}>
                  <span>KS</span>
                </div>
                <h5>Kiran Shukla</h5>
                <p>Regional Sales Manager</p>
              </div>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberAvatar}>
                  <span>HV</span>
                </div>
                <h5>Harshit P.V.V</h5>
                <p>Electronics Intern</p>
              </div>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberAvatar}>
                  <span>AT</span>
                </div>
                <h5>Abu Thaher Amees</h5>
                <p>Industrial Design Intern</p>
              </div>
              <div className={styles.teamMemberCard}>
                <div className={styles.teamMemberAvatar}>
                  <span>DB</span>
                </div>
                <h5>Deepikaa Balaji</h5>
                <p>Research fellow Intern</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className={styles.technology}>
        <div className={styles.sectionContent}>
          <div className={styles.technologyContent}>
            <div className={styles.technologyText}>
              <h2>Our Technology: iVA</h2>
              <p>
                The Intelligent Vision Analyzer (iVA) is our flagship product - a revolutionary visual field 
                perimeter built on a Virtual Reality platform. This cutting-edge eye-testing device represents 
                a breakthrough in making advanced diagnostics more accessible and user-friendly.
              </p>
              <div className={styles.techFeatures}>
                <div className={styles.techFeature}>
                  <span className={styles.techBullet}>•</span>
                  <span>VR-Based Visual Field Testing</span>
                </div>
                <div className={styles.techFeature}>
                  <span className={styles.techBullet}>•</span>
                  <span>Portable Diagnostic Solution</span>
                </div>
                <div className={styles.techFeature}>
                  <span className={styles.techBullet}>•</span>
                  <span>Enhanced Patient Experience</span>
                </div>
                <div className={styles.techFeature}>
                  <span className={styles.techBullet}>•</span>
                  <span>Clinical-Grade Accuracy</span>
                </div>
              </div>
            </div>
            <div className={styles.technologyVisual}>
              <div className={styles.techShowcase}>
                <div className={styles.techDevice}>
                  <div className={styles.deviceScreen}></div>
                  <div className={styles.deviceBase}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Transform Eye Care?</h2>
          <p>
            Join us in revolutionizing eye care diagnostics with innovative VR technology. 
            Let's make healthcare more accessible together.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>Get Started</button>
            <button className={styles.secondaryButton}>Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}