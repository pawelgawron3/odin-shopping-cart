import { Link } from "react-router";
import useCart from "../../hooks/useCart";
import { Search, ShoppingBag } from "lucide-react";
import styles from "../../styles/Header.module.css";

export default function Header() {
  const { items } = useCart();
  const cartQuantity = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logo}>
        <h1>Velora</h1>
        <span>Eyewear</span>
      </Link>

      <div className={styles.actions}>
        <button aria-label="Search">
          <Search size={28} />
        </button>

        <Link to={"cart"} className={styles.cartDiv}>
          <button aria-label="Shopping cart">
            <ShoppingBag size={28} />

            {cartQuantity > 0 && (
              <span className={styles.cartCount}>{cartQuantity}</span>
            )}
          </button>
        </Link>
      </div>
    </header>
  );
}
