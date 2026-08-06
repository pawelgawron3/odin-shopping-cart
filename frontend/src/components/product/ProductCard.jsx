import { Link } from "react-router";
import styles from "../../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  const key = product.id;

  return (
    <article className={styles.card}>
      <Link to={`/products/${key}`} className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} />
        <span className={styles.view}>View Details</span>
      </Link>

      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p>{product.price + "$"}</p>
      </div>
    </article>
  );
}
