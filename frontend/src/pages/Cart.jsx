import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";
import styles from "../styles/CartItem.module.css";

export default function Cart() {
  const { items, clearCart } = useCart();

  return (
    <section className={styles.cart}>
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {items.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}

          <button className={styles.clearCartBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
}
