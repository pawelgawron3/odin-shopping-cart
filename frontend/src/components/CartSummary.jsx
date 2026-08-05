import useCart from "../hooks/useCart";
import styles from "../styles/CartSummary.module.css";

export default function CartSummary() {
  const { items } = useCart();

  const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const totalPrice = items.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0,
  );

  return (
    <aside className={styles.summary}>
      <h2>Order summary</h2>
      <div className={styles.row}>
        <span>Items</span>
        <span>{totalItems}</span>
      </div>
      <div className={styles.row}>
        <span>Total</span>
        <span>{totalPrice + "$"}</span>
      </div>
      <button className={styles.checkout}>Checkout</button> /* Payment system
      not implemented*/
    </aside>
  );
}
