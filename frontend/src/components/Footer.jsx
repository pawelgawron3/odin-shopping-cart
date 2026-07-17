import githubIcon from "../assets/github.svg";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <p>Velora</p>
      </div>

      <div className={styles.developer}>
        <img src={githubIcon} alt="Github" className={styles.githubIcon} />

        <a
          href="https://github.com/pawelgawron3"
          target="_blank"
          rel="noreferrer noopener"
        >
          Developed by Paweł Gawron
        </a>
      </div>

      <div className={styles.legal}>
        <span>© 2026 Paweł Gawron. All rights reserved.</span>
        <span>Built as part of The Odin Project.</span>
        <span>Velora™ - Premium Eyewear Concept.</span>
      </div>
    </footer>
  );
}
