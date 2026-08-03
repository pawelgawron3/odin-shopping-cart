import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Spinner from "./Spinner";
import styles from "../styles/ProductCollection.module.css";

export default function ProductCollection() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={styles.products}>
      <div className={styles.heading}>
        <span className={styles.label}>
          <span className={styles.labelText}>Collection</span>
        </span>
        <h2 className={styles.title}>Premium Eyewear</h2>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
