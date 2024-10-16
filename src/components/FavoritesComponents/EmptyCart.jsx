/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./EmptyCart.module.css";

function EmptyCart() {
  return (
    <section className={styles.emptyCart}>
      <h2 className={styles.title}>No Favorites yet!.</h2>
      <p className={styles.description}>
        Your Shopping Favorites lives to serve.
        <br />
        Fill it with your favorites and make it happy!
      </p>
      <button className={styles.continueButton}>Continue Shopping</button>
    </section>
  );
}

export default EmptyCart;
