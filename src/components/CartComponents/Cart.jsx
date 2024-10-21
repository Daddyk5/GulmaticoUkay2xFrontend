import React from "react";
import styles from "./Cart.module.css";
import Header from "./Header";
import EmptyCart from "./EmptyCart";
import Footer from "./Footer";
import useStore from "../store/zustandStore";

function Cart() {
  const cartItems = useStore((state) => state.cartItems);

  // Helper function to calculate subtotal for each product
  const calculateSubtotal = (item) => item.price * item.quantity;

  // Helper function to calculate total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  return (
    <div className={styles.cartPage}>
      <Header />
      <main className={styles.cart}>
        <section className={styles.cartContent}>
          <h1 className={styles.cartTitle}>Cart</h1>
          {cartItems.length === 0 ? (
            <EmptyCart /> // If the cart is empty, show EmptyCart component
          ) : (
            <div className={styles.cartDetails}>
              <table className={styles.cartTable}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.imageUrl || "http://b.io/placeholder-image"}
                          alt={item.name}
                          className={styles.productImage}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>${calculateSubtotal(item).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total Display */}
              <div className={styles.totalWrapper}>
                <div className={styles.totalLabel}>Total:</div>
                <div className={styles.totalAmount}>${calculateTotal().toFixed(2)}</div>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
