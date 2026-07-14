import { Search, ShoppingBag } from "lucide-react";
import "../styles/Header.css";

export default function Header() {
  let cartCount = 2; // test

  return (
    <header className="header">
      <div className="logo">
        <h1>Velora</h1>
        <span>Eyewear</span>
      </div>

      <div className="actions">
        <button aria-label="Search">
          <Search size={28} />
        </button>

        <div className="cart-div">
          <button aria-label="Shopping cart">
            <ShoppingBag size={28} />

            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
