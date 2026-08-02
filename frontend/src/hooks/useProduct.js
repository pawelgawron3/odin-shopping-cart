import { useState, useEffect } from "react";
import { getProductById } from "../services/productsApi";

export default function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await getProductById(id);
        setProduct(product);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  return {
    product,
    loading,
    error,
  };
}
