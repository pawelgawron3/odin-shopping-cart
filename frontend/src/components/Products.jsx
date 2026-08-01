import { useState, useEffect } from "react";
import { getProducts } from "../services/productsApi";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Products.module.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Add spinner
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
