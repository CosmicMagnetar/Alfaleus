"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Eye, Monitor, Zap, Shield, Globe, BarChart3, Users, CheckCircle, Star, Play, Menu, X, ChevronRight, Activity, Stethoscope } from 'lucide-react';
import styles from './page.module.css';

export default function AlfaleuslVALandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "VR-Based Visual Field Testing",
      description: "Revolutionary virtual reality platform that provides comprehensive visual field analysis with superior accuracy and patient comfort."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Advanced Perimetry",
      description: "State-of-the-art perimetry technology that delivers precise visual field measurements for early detection of eye conditions."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-time Analysis",
      description: "Intelligent algorithms provide instant analysis and reporting, enabling faster diagnosis and treatment decisions."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Portable & Efficient",
      description: "Compact design makes advanced eye testing accessible in any clinical setting, from hospitals to remote clinics."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Clinical Precision",
      description: "FDA-approved standards with clinical-grade accuracy that matches traditional perimetry equipment."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Comprehensive Reporting",
      description: "Detailed analytics and reporting tools that integrate seamlessly with existing electronic health records."
    }
  ];

  const products = [
    {
      title: "iVA+ Enterprise",
      description: "Complete clinical solution with advanced analytics, multi-device management, and comprehensive support for healthcare institutions.",
      icon: <Monitor className="w-8 h-8" />,
      tags: ["Multi-Device Support", "24/7 Clinical Support", "EHR Integration"],
      isPopular: true
    },
    {
      title: "iVA+ Professional",
      description: "Perfect for eye care professionals with essential features and clinical-grade accuracy for comprehensive eye testing.",
      icon: <Eye className="w-8 h-8" />,
      tags: ["Clinical Grade", "Professional Analytics", "Training Included"]
    },
    {
      title: "iVA+ Basic",
      description: "Entry-level solution for basic visual field testing, ideal for screening programs and primary care settings.",
      icon: <Zap className="w-8 h-8" />,
      tags: ["Easy Setup", "Basic Testing", "Online Support"]
    }
  ];

  const impactMetrics = [
    { icon: <Users className="w-8 h-8" />, number: "50K+", text: "Patients Tested" },
    { icon: <Eye className="w-8 h-8" />, number: "95%", text: "Accuracy Rate" },
    { icon: <BarChart3 className="w-8 h-8" />, number: "70%", text: "Time Reduction" },
    { icon: <Globe className="w-8 h-8" />, number: "15+", text: "Countries Served" }
  ];

  const benefits = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Cost Effective",
      items: [
        "Reduce equipment costs by up to 60%",
        "Lower maintenance requirements",
        "Minimal space requirements",
        "Improved operational efficiency"
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Enhanced Performance",
      items: [
        "Faster testing procedures",
        "Real-time result analysis",
        "Improved patient compliance",
        "Higher diagnostic accuracy"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Patient Experience",
      items: [
        "Comfortable VR-based testing",
        "Engaging interactive experience",
        "Reduced testing anxiety",
        "Immediate result visualization"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Ophthalmologist, City Eye Hospital",
      avatar: "SM",
      rating: 5,
      content: "The iVA+ has revolutionized how we conduct visual field tests. Our patients find it more comfortable, and the accuracy is remarkable. It's a game-changer for early glaucoma detection."
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Director, Vision Care Center",
      avatar: "RK",
      rating: 5,
      content: "Since implementing iVA+, our testing efficiency has improved by 70%. The VR technology makes complex testing simple and patients actually enjoy the experience now."
    },
    {
      name: "Dr. Emily Chen",
      role: "Clinical Director, Regional Eye Clinic",
      avatar: "EC",
      rating: 5,
      content: "The portability of iVA+ allows us to bring advanced eye testing to remote locations. We've been able to screen thousands of patients who previously had no access to such technology."
    }
  ];

  const timeline = [
    {
      year: "2024",
      text: "Launch of next-generation iVA+ with enhanced VR capabilities and AI-powered analysis for superior diagnostic accuracy."
    },
    {
      year: "2023",
      text: "International expansion and clinical validation studies demonstrating superior patient compliance and diagnostic effectiveness."
    },
    {
      year: "2022",
      text: "FDA approval and launch of commercial iVA+ system with comprehensive visual field testing capabilities."
    },
    {
      year: "2018",
      text: "Founded by Sandal Kotawala with a mission to make advanced eye care accessible through innovative VR technology."
    }
  ];

  const specifications = [
    { label: "Test Duration", value: "8-12 min" },
    { label: "Accuracy", value: "95%+" },
    { label: "Visual Field", value: "30° Radius" },
    { label: "Portability", value: "2.5 kg" },
    { label: "Display", value: "4K VR" },
    { label: "Compliance", value: "FDA Approved" }
  ];

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.navInner}>
            <a href="#" className={styles.logo}>
              Alfaleus iVA+
            </a>
            
            <ul className={styles.navLinks}>
              {['Features', 'Products', 'Benefits', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className={styles.navLink}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <button 
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Revolutionize Eye Care with{' '}
              <span className={styles.heroTitleHighlight}>
                VR-Powered Vision Testing
              </span>
            </h1>
            <p className={styles.heroDescription}>
              Experience the future of visual field testing with Alfaleus iVA+ - the world's most advanced VR-based perimetry system. 
              Delivering clinical-grade accuracy with unmatched patient comfort and operational efficiency.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className={styles.secondaryButton}>
                Schedule Demo
              </button>
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            <div className={styles.heroImageWrapper}>
              <div className={styles.deviceShowcase}>
                <div className={styles.deviceImage}>
                  <Eye size={80} className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.specGrid}>
            {impactMetrics.map((metric, index) => (
              <div key={index} className={styles.specCard}>
                <div className={styles.featureIcon}>
                  {metric.icon}
                </div>
                <div className={styles.specValue}>{metric.number}</div>
                <div className={styles.specLabel}>{metric.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Advanced Features for Modern Eye Care</h2>
            <p className={styles.sectionSubtitle}>
              Experience cutting-edge VR technology designed to revolutionize visual field testing and eye care diagnostics
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Choose Your Perfect iVA+ Solution</h2>
            <p className={styles.sectionSubtitle}>
              Flexible configurations designed to meet the diverse needs of healthcare professionals and institutions
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {products.map((product, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  {product.icon}
                  {product.isPopular && <Star size={20} className="text-yellow-500 ml-2" />}
                </div>
                <h3 className={styles.featureTitle}>{product.title}</h3>
                <p className={styles.featureDescription}>{product.description}</p>
                <div style={{marginTop: '1rem'}}>
                  {product.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#dbeafe',
                        color: '#1e40af',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem',
                        marginRight: '0.5rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className={styles.primaryButton} style={{marginTop: '1rem', width: '100%'}}>
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className={`${styles.section} ${styles.sectionGray}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose Alfaleus iVA+?</h2>
            <p className={styles.sectionSubtitle}>
              Discover the transformative benefits that make iVA+ the preferred choice for eye care professionals worldwide
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <h3 className={styles.benefitTitle}>
                  {benefit.icon}
                  <span style={{marginLeft: '0.5rem'}}>{benefit.title}</span>
                </h3>
                <ul className={styles.benefitList}>
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.benefitItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className={`${styles.section} ${styles.sectionBlue}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleWhite}`}>Trusted by Eye Care Professionals</h2>
            <p className={`${styles.sectionSubtitle} ${styles.sectionSubtitleLight}`}>
              See how healthcare professionals worldwide are transforming their practice with iVA+
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={styles.featureCard}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    marginRight: '1rem'
                  }}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div style={{fontWeight: '600'}}>{testimonial.name}</div>
                    <div style={{fontSize: '0.875rem', opacity: 0.75}}>{testimonial.role}</div>
                  </div>
                </div>
                <div style={{display: 'flex', marginBottom: '1rem'}}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p style={{opacity: 0.9, lineHeight: 1.6}}>"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.sectionContainer}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center'}}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Our Innovation Journey</h2>
              <p className={styles.sectionSubtitle}>
                From startup vision to revolutionizing eye care - discover the milestones that shaped iVA+ 
                into the world's leading VR-based visual field analyzer.
              </p>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
              {timeline.map((item, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'flex-start'}}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#1e40af',
                    borderRadius: '50%',
                    marginTop: '1.5rem',
                    marginRight: '1.5rem',
                    flexShrink: 0,
                    position: 'relative'
                  }}>
                    {index < timeline.length - 1 && (
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '2px',
                        height: '4rem',
                        backgroundColor: '#bfdbfe'
                      }}></div>
                    )}
                  </div>
                  <div style={{
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    flex: 1,
                    boxShadow: '0 4px 6px rgba(30, 64, 175, 0.1)',
                    border: '1px solid #e2e8f0'
                  }}>
                    <div style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '0.5rem'}}>
                      {item.year}
                    </div>
                    <div style={{color: '#475569', lineHeight: 1.6}}>
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className={`${styles.section}`} style={{background: '#0f172a', color: 'white'}}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleWhite}`}>Technical Specifications</h2>
            <p className={`${styles.sectionSubtitle} ${styles.sectionSubtitleLight}`}>
              Clinical-grade performance metrics and capabilities you can depend on
            </p>
          </div>

          <div className={styles.specGrid}>
            {specifications.map((spec, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div style={{fontSize: '0.875rem', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.5rem'}}>
                  {spec.label}
                </div>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'white'}}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className={`${styles.section} ${styles.sectionBlue}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Eye Care?</h2>
            <p className={styles.ctaDescription}>
              Join hundreds of eye care professionals already using iVA+ to revolutionize their practice. 
              Schedule a demo today and see the difference VR technology can make.
            </p>
            
            <div className={styles.ctaForm}>
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className={styles.ctaInput}
              />
              <input 
                type="text" 
                placeholder="Healthcare facility name" 
                className={styles.ctaInput}
              />
              <button className={styles.ctaButton}>
                Schedule Demo
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            <div style={{marginTop: '3rem', textAlign: 'center'}}>
              <p style={{fontSize: '0.875rem', opacity: 0.75}}>
                Trusted by healthcare professionals in 15+ countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h4>Alfaleus iVA+</h4>
            <p>
              Revolutionizing eye care with advanced VR-based visual field testing technology. 
              Making comprehensive eye diagnostics accessible and efficient for healthcare professionals worldwide.
            </p>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#1e40af',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <Globe size={20} />
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#1e40af',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <Activity size={20} />
              </div>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#1e40af',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <Stethoscope size={20} />
              </div>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Products</h4>
            <ul>
              <li><a href="#">iVA+ Enterprise</a></li>
              <li><a href="#">iVA+ Professional</a></li>
              <li><a href="#">iVA+ Basic</a></li>
              <li><a href="#">Support & Training</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Clinical Research</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <p>Email: info@alfaleus.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Innovation Drive</p>
            <p>Healthcare City, HC 12345</p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Alfaleus Healthcare. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
}