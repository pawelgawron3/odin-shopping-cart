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
      <img src={product.image} alt={product.name} />

      <div className={styles.content}>
        <h1>{product.name}</h1>

        <p>{product.description}</p>

        <span>${product.price}</span>

        <button>Add to cart</button>
      </div>
    </section>
  );
}
