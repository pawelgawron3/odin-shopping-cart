import { Search, ShoppingBag } from "lucide-react";
import styles from "../styles/Header.module.css";

export default function Header() {
  let cartCount = 2; // test

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Velora</h1>
        <span>Eyewear</span>
      </div>

      <div className={styles.actions}>
        <button aria-label="Search">
          <Search size={28} />
        </button>

        <div className={styles.cartDiv}>
          <button aria-label="Shopping cart">
            <ShoppingBag size={28} />

            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
