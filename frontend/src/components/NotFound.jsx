import { Link } from "react-router";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <span className={styles.label}>404</span>

      <h1 className={styles.title}>Page not found</h1>

      <p className={styles.description}>
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link to="/" className={styles.button}>
        Back to Home
      </Link>
    </section>
  );
}
