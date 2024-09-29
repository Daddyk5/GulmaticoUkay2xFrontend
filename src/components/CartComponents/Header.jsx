/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6d0a7a6f1e9238ee939c4890c892dfaf179c0c3228dd98cc1712dad2439eb75?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
        alt="Company logo"
        className={styles.logo}
      />
      <nav className={styles.navigation}>
        <a href="#" className={styles.navLink}>
          Home
        </a>
        <a href="#" className={styles.navLink}>
          Items
        </a>
        <a href="#" className={styles.navLink}>
          Favorites
        </a>
        <button className={styles.menuButton} aria-label="Menu">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcf48fadb4e2cef3694c99d9c5835d8f8bc1cb5ee4ec5263d74c42b027d3a29d?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
            alt=""
            className={styles.menuIcon}
          />
          <div className={styles.menuLine} />
        </button>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7d9c10bb968d3e32c0ce5b8a981ffe9c379ccc6cccac13af4b72fc304d0eeae?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
          alt="User profile"
          className={styles.profileIcon}
        />
      </nav>
    </header>
  );
}

export default Header;
