import React from "react";
import styles from "./JoinCommunity.module.css";
import Image from "next/image";

const JoinCommunity: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      {/* Left Image */}
      <div className={styles.imageWrapper}>
        <img
          src="/newImage.png"
          alt="Community"
          className={styles.image}
        />
      </div>

      {/* Right Form */}
      <div className={styles.formWrapper}>
        <h2 className={styles.heading}>Join our community</h2>
        <p className={styles.subheading}>
          Alfaleus Technology
          <br />
          Making Eyecare Accessible
        </p>

        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />

          <div className={styles.phoneGroup}>
            <div className={styles.countryCode}>
              {/* Simplified flag box */}
              <span role="img" aria-label="India">
                🇮🇳
              </span>
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className={styles.phoneInput}
            />
          </div>

          <label className={styles.checkbox}>
            <input type="checkbox" />
            Send me updates on WhatsApp
          </label>

          <textarea
            placeholder="Type your message here..."
            className={styles.textarea}
          ></textarea>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>

          <p className={styles.terms}>
            By submitting this form, you agree to the{" "}
            <a href="#" className={styles.link}>
              privacy
            </a>{" "}
            policy &{" "}
            <a href="#" className={styles.link}>
              terms and conditions
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default JoinCommunity;
