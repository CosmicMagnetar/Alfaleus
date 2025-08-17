import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Alfaleus',
  description: 'Get in touch with our intelligent vision technology experts',
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Connect With Our <span className={styles.highlight}>Vision Experts</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Ready to transform your business with intelligent vision technology? 
              Let's discuss your project and explore innovative solutions together.
            </p>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.deviceMockup}>
              <div className={styles.vrHeadset}></div>
              <div className={styles.mobileDevice}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className={styles.contactMethods}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.sectionSubtitle}>
            Choose the most convenient way to reach out to our team
          </p>
          
          <div className={styles.methodsGrid}>
            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>Get detailed responses to your queries</p>
              <a href="mailto:hello@alfaleus.in" className={styles.methodLink}>
                hello@alfaleus.in
              </a>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <h3>Call Us</h3>
              <p>Speak directly with our experts</p>
              <a href="tel:+919876543210" className={styles.methodLink}>
                +91 98765 43210
              </a>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>Visit Us</h3>
              <p>Meet us at our office in Delhi</p>
              <span className={styles.methodLink}>
                Delhi, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <div className={styles.formContent}>
            <div className={styles.formHeader}>
              <h2>Start Your Journey</h2>
              <p>Tell us about your project and we'll get back to you within 24 hours</p>
            </div>

            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="interest">I'm interested in</label>
                <select id="interest" name="interest">
                  <option value="">Select an option</option>
                  <option value="IVA">Intelligent Vision Analyzer</option>
                  <option value="consultation">Technical Consultation</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="demo">Product Demo</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Please describe your project, requirements, or questions..."
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>

          <div className={styles.formSidebar}>
            <div className={styles.sidebarCard}>
              <h3>Why Choose Alfaleus?</h3>
              <ul className={styles.featureList}>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  Industry-leading AI technology
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  Proven track record of success
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  24/7 technical support
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  Scalable solutions for any business size
                </li>
              </ul>
            </div>

            <div className={styles.sidebarCard}>
              <h3>Quick Response</h3>
              <p>
                Our team typically responds to inquiries within 2-4 hours during 
                business hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.faqHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Find answers to common questions about our services and solutions
            </p>
          </div>

          <div className={styles.faqGrid}>
            <div className={styles.faqCard}>
              <h3>How quickly can you implement a solution?</h3>
              <p>Implementation timelines vary based on project complexity. Most standard deployments are completed within 4-8 weeks, while custom solutions may take 3-6 months.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>Do you provide training for our team?</h3>
              <p>Yes, we offer comprehensive training programs including hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our solutions.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>Can your solutions integrate with existing systems?</h3>
              <p>Absolutely. Our solutions are designed with integration in mind and can work seamlessly with most existing enterprise systems through APIs and custom connectors.</p>
            </div>
            <div className={styles.faqCard}>
              <h3>What kind of support do you offer post-implementation?</h3>
              <p>We provide 24/7 technical support, regular system updates, performance monitoring, and dedicated account management to ensure optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <h2>Ready to Transform Your Business?</h2>
          <p>Join leading companies already using our intelligent vision technology to drive innovation and growth.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Schedule a Demo</button>
            <button className={styles.secondaryBtn}>View Case Studies</button>
          </div>
        </div>
      </section>
    </div>
  );
}