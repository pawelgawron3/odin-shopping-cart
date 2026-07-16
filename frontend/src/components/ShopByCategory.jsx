import { ArrowRight } from "lucide-react";
import menCategory from "../assets/josias-garibay-unsplash.jpg";
import womenCategory from "../assets/valeria-lendel-unsplash.jpg";
import generalCategory from "../assets/wu-yi-unsplash.jpg";
import "../styles/ShopByCategory.css";

export default function ShopByCategory() {
  return (
    <section className="shop-categories">
      <div className="section-heading">
        <span>Discover</span>
        <h2>Shop by Category</h2>
      </div>

      <div className="categories-grid">
        <article className="category-card category-men">
          <img src={menCategory} alt="Men's eyewear" />

          <div className="category-overlay"></div>

          <div className="category-content">
            <h3>Men</h3>
            <p className="explore-link">
              Explore <ArrowRight size={16} />
            </p>
          </div>
        </article>
        <article className="category-card category-women">
          <img src={womenCategory} alt="Women's eyewear" />

          <div className="category-overlay"></div>

          <div className="category-content">
            <h3>Women</h3>
            <p className="explore-link">
              Explore <ArrowRight size={16} />
            </p>
          </div>
        </article>
        <article className="category-card category-general">
          <img src={generalCategory} alt="Eyewear" />

          <div className="category-overlay"></div>

          <div className="category-content">
            <h3>Sunglasses</h3>
            <p className="explore-link">
              Explore <ArrowRight size={16} />
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
