import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Home</li>
        <li>Collection</li>
        <li>Cart</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
