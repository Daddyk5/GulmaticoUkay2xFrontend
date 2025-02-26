/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./ProductList.module.css";
import CategorySidebar from "./CategorySidebar";
import ProductGrid from "./ProductGrid";

const ProductList = () => {
  return (
    <main className={styles.productList}>
      <CategorySidebar />
      <ProductGrid />
    </main>
  );
};

export default ProductList;
