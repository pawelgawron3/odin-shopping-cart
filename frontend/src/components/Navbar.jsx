import { Link } from "react-router";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <Link to={"/"} className={styles.item}>
          Home
        </Link>
        <Link to={"/products"} className={styles.item}>
          Collection
        </Link>
        <Link to={"cart"} className={styles.item}>
          Cart
        </Link>
        <Link to={"/"} className={styles.item}>
          About
        </Link>
        <Link to={"contact"} className={styles.item}>
          Contact
        </Link>
      </ul>
    </nav>
  );
}
