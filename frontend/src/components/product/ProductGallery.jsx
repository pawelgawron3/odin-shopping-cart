import styles from "../../styles/ProductDetails.module.css";

export default function ProductGallery({
  product,
  selectedImage,
  setSelectedImage,
}) {
  return (
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
  );
}
