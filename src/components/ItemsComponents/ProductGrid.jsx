/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./ProductGrid.module.css";
import ProductCard from "./ProductCard";

const products = [
  { name: "Product 1", price: "₱ 500.00" },
  { name: "Product 2", price: "₱ 500.00" },
  { name: "Product 3", price: "₱ 500.00" },
  { name: "Product 4", price: "₱ 500.00" },
  { name: "Product 5", price: "₱ 500.00" },
  { name: "Product 6", price: "₱ 500.00" },
];

const ProductGrid = () => {
  return (
    <section className={styles.productGrid}>
      <div className={styles.sortContainer}>
        <span className={styles.sortLabel}>Sort by: </span>
        <button className={styles.sortButton} aria-label="Sort options">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef4884b6db0631a6e96449fa4d8ca378775b11244d9028f3c420da766168a1bf?placeholderIfAbsent=true&apiKey=63cef383af9641cc969e43f7e6acc6c2"
            alt=""
            className={styles.sortIcon}
          />
        </button>
      </div>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
