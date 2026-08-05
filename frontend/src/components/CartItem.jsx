import styles from "../styles/CartItem.module.css";
import useCart from "../hooks/useCart";

export default function CartItem({ cartItem }) {
  const { removeFromCart } = useCart();

  return (
    <article className={styles.cartItem}>
      <img src={cartItem.image} alt={cartItem.name} />
      <div className={styles.itemContent}>
        <h3>{cartItem.name}</h3>
        <p>{cartItem.price + "$"}</p>
        <span>Quantity: {cartItem.quantity}</span>
      </div>
      <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
    </article>
  );
}
