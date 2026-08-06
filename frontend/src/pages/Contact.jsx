import ContactForm from "../components/ContactForm";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.main}>
      <div className={styles.upperDiv}>
        <h1>Get in touch</h1>
        <p>
          Have questions about our collection? Our team is ready to assist you.
        </p>
      </div>

      <ContactForm />
    </section>
  );
}
