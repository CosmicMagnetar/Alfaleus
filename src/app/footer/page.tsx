import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1 - About Us */}
        <div className={styles.column}>
          <h4>About Us</h4>
          <p>
            We work collaboratively to design and develop cutting-edge products
            and services that make eye care more accessible, affordable, and
            effective for everyone.{" "}
            <strong>We are Alfaleus!</strong>
          </p>
          <div className={styles.backToTop}>
            <span>Back to top</span>
            <button className={styles.iconBtn}>↑</button>
          </div>
        </div>

        {/* Column 2 - Useful Links */}
        <div className={styles.column}>
          <h4>Useful Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Careers</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 3 - Show us some love */}
        <div className={styles.column}>
          <h4>Show us some love</h4>
          <p>
            If you liked our product, please do give us a shoutout on social
            media or tell a friend to help us grow!
          </p>
          <p>Don’t forget to tag us when you wear us!</p>
          <div className={styles.socialButtons}>
            <button>F</button>
            <button>I</button>
          </div>
        </div>

        {/* Column 4 - Subscribe */}
        <div className={styles.column}>
          <h4>Subscribe to our Emails</h4>
          <p>
            Don't miss out and subscribe to our emails to know about new
            arrivals!
          </p>
          <div className={styles.subscribeBox}>
            <input type="email" placeholder="Your e-mail" />
            <button>→</button>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className={styles.bottomRow}>
        <span>© 2025 Alfaleus</span>
        <span>All rights reserved</span>
        <span>
          Made with <span className={styles.heart}>♥</span> in India
        </span>
      </div>
    </footer>
  );
}
