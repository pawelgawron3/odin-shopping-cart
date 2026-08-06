import styles from "../../styles/CartItem.module.css";
import useCart from "../../hooks/useCart";

export default function CartItem({ cartItem }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <article className={styles.cartItem}>
      <img src={cartItem.image} alt={cartItem.name} />
      <div className={styles.itemContent}>
        <h3>{cartItem.name}</h3>
        <p>{cartItem.price + "$"}</p>
        <div className={styles.quantity}>
          <button
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
          >
            -
          </button>

          <span>Quantity: {cartItem.quantity}</span>

          <button
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button
        className={styles.remove}
        onClick={() => removeFromCart(cartItem.id)}
      >
        Remove
      </button>
    </article>
  );
}
