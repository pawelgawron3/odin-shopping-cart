import styles from "../../styles/About.module.css";
import img from "../../assets/wu-yi-unsplash.jpg";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.label}>Our Story</span>
        <h1>About Velora</h1>
        <p>
          Crafting timeless eyewear that combines elegance, comfort and everyday
          confidence.
        </p>
      </div>

      <img src={img} alt="Luxury sunglasses" />
    </section>
  );
}
