import { useParams } from "react-router";
import { useState, useEffect } from "react";
import useProduct from "../hooks/useProduct";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import Spinner from "../components/Spinner";
import styles from "../styles/ProductDetails.module.css";

export default function ProductDetails() {
  const { id } = useParams();

  const { product, loading, error } = useProduct(id);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

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
      <ProductGallery
        product={product}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <ProductInfo
        product={product}
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </section>
  );
}
