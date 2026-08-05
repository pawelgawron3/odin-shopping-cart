import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import useCart from "../hooks/useCart";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const { items, clearCart } = useCart();

  return (
    <section className={styles.cart}>
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className={styles.items}>
          {items.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}

          <CartSummary />

          <button className={styles.clearCartBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </section>
  );
}
