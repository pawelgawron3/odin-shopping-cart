import styles from "../../styles/About.module.css";

export default function AboutStory() {
  return (
    <section className={styles.story}>
      <h2>Designed to elevate everyday moments.</h2>

      <div className={styles.content}>
        <p>
          At Velora, we believe eyewear is more than an accessory - it is an
          expression of confidence and individuality. Every collection is
          inspired by timeless aesthetics, modern craftsmanship, and the desire
          to create pieces that feel as good as they look.
        </p>

        <p>
          Our mission is to offer premium sunglasses that combine exceptional
          quality with effortless style. From carefully selected materials to
          refined details, every frame is designed to accompany you through
          everyday life with elegance and comfort.
        </p>
      </div>
    </section>
  );
}
