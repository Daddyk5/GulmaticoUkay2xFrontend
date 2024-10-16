/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Favorites.module.css"; // Adjust this import based on your actual CSS file
import Header from "./Header";
import EmptyCart from "./EmptyCart"; // This might need to be updated depending on your logic
import Footer from "./Footer";

function Favorites() {
  return (
    <main className={styles.favorites}> {/* Use the correct className from your CSS module */}
      <Header />
      <section className={styles.favoritesContent}>
        <div className={styles.favoritesLayout}>
          <div className={styles.imageColumn}>
           
          </div>
          <div className={styles.contentColumn}>
            <EmptyCart /> {/* This component might need to be changed based on your design */}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Favorites; // Change this to export Favorites
