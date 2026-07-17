import { ArrowRight } from "lucide-react";
import menCategory from "../assets/josias-garibay-unsplash.jpg";
import womenCategory from "../assets/valeria-lendel-unsplash.jpg";
import generalCategory from "../assets/wu-yi-unsplash.jpg";
import styles from "../styles/ShopByCategory.module.css";

export default function ShopByCategory() {
  return (
    <section className={styles.shopCategories}>
      <div className={styles.sectionHeading}>
        <span className={styles.sectionLabel}>
          <span className={styles.sectionLabelText}>Discover</span>
        </span>
        <h2>Shop by Category</h2>
      </div>

      <div className={styles.categoriesGrid}>
        <article className={`${styles.categoryCard} ${styles.categoryMen}`}>
          <img src={menCategory} alt="Men's eyewear" />

          <div className={styles.categoryOverlay}></div>

          <div className={styles.categoryContent}>
            <h3>Men</h3>
            <p className={styles.exploreLink}>
              Explore <ArrowRight size={16} />
            </p>
          </div>
        </article>
        <article className={`${styles.categoryCard} ${styles.categoryWomen}`}>
          <img src={womenCategory} alt="Women's eyewear" />

          <div className={styles.categoryOverlay}></div>

          <div className={styles.categoryContent}>
            <h3>Women</h3>
            <p className={styles.exploreLink}>
              Explore <ArrowRight size={16} />
            </p>
          </div>
        </article>
        <article className={`${styles.categoryCard} ${styles.categoryGeneral}`}>
          <img src={generalCategory} alt="Eyewear" />

          <div className={styles.categoryOverlay}></div>

          <div className={styles.categoryContent}>
            <h3>Sunglasses</h3>
            <p className={styles.exploreLink}>
              Explore <ArrowRight size={16} />
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
