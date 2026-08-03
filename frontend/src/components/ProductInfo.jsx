import styles from "../styles/ProductDetails.module.css";

export default function ProductInfo({ product }) {
  return (
    <div className={styles.content}>
      <span className={styles.label}>Premium Collection</span>
      <h1 className={styles.name}>{product.name}</h1>
      <p className={styles.description}>{product.description}</p>
      <span className={styles.price}>{product.price + "$"}</span>
      <button className={styles.addToCartBtn}>Add To Cart</button>
    </div>
  );
}
