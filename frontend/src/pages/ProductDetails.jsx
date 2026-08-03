import { useParams } from "react-router";
import { useState, useEffect } from "react";
import useProduct from "../hooks/useProduct";
import Spinner from "../components/Spinner";
import styles from "../styles/ProductDetails.module.css";

export default function ProductDetails() {
  const { id } = useParams();

  const { product, loading, error } = useProduct(id);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={styles.product}>
      <div className={styles.imageWrapper}>
        <img src={selectedImage} alt={product.name} />

        <div className={styles.gallery}>
          {product.images.map((image) => (
            <button
              key={image}
              onClick={() => setSelectedImage(image)}
              className={
                selectedImage === image
                  ? `${styles.activeThumbnail} ${styles.thumbnail}`
                  : styles.thumbnail
              }
            >
              <img src={image} alt={product.name} />
            </button>
          ))}
        </div>
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
