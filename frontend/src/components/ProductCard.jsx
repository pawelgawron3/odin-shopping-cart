import { Link } from "react-router";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <Link to={`/products/${product.id}`} className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} />
        <span className={styles.view}>View Details</span>
      </Link>

      <div className={styles.content}>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </article>
  );
}
