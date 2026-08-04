import styles from "../styles/ProductDetails.module.css";
import useCart from "../hooks/useCart";

export default function ProductInfo({
  product,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) {
  const { addToCart } = useCart();

  return (
    <div className={styles.content}>
      <span className={styles.label}>Premium Collection</span>
      <h1 className={styles.name}>{product.name}</h1>
      <p className={styles.description}>{product.description}</p>
      <span className={styles.price}>{product.price + "$"}</span>
      <div className={styles.quantity}>
        <button onClick={decreaseQuantity}>-</button>
        <span className={styles.info}>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button
        className={styles.addToCartBtn}
        onClick={() => addToCart(product, quantity)}
      >
        Add To Cart
      </button>
    </div>
  );
}
