import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import useCart from "../hooks/useCart";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const { items, clearCart } = useCart();

  return (
    <section className={styles.cart}>
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <p className={styles.emptyCartInfo}>Your cart is empty!</p>
      ) : (
        <div className={styles.items}>
          <div className={styles.products}>
            {items.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <button className={styles.clearCartBtn} onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          <CartSummary />
        </div>
      )}
    </section>
  );
}
