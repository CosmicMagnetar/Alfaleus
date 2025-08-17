import React from 'react'
import styles from "../page.module.css";
import Link from 'next/link';

const page = () => {
  return (
    <div>
        <header className={styles.fixedHeader}>
        <div className={styles.topBar}>
          <span>We Make Eye Care Accessible! We are Alfaleus!</span>
          <Link href="/" className={styles.topBarLink}>
            Learn more →
          </Link>
        </div>
        <nav className={styles.navbar}>
          <img src="/logo.png" alt="Logo" height={30} />
          <div className={styles.navLinks}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
          <button className={styles.navButton}>Book a Demo</button>
        </nav>
</header>
    </div>
  )
}

export default page