import { useParams } from "react-router";
import useProduct from "../hooks/useProduct";
import styles from "../styles/ProductDetails.module.css";

export default function ProductDetails() {
  const { id } = useParams();

  const { product, loading, error } = useProduct(id);

  if (loading) {
    return <p>Loading...</p>; // Add spinner
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={styles.product}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} />
      </div>

      <div className={styles.content}>
        <span className={styles.label}>Premium Collection</span>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <span className={styles.price}>{product.price + "$"}</span>
        <button className={styles.addToCartBtn}>Add to cart</button>
      </div>
    </section>
  );
}
