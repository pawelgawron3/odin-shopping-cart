import styles from "../styles/ContactForm.module.css";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactForm() {
  function handleCheckout() {
    alert(
      "This is a demo project. Payment system has not been implemented yet.",
    );
  }

  return (
    <section className={styles.main}>
      <h2>Contact us</h2>
      <form>
        <label>
          Name
          <input type="text" required placeholder="Paul" />
        </label>

        <label>
          Email
          <input type="email" required placeholder="Kowalski" />
        </label>

        <label>
          Subject
          <input type="text" required placeholder="Warranty" />
        </label>

        <label>
          Message
          <textarea rows={6} required placeholder="Type here..."></textarea>
        </label>

        <button className={styles.submitBtn} onClick={handleCheckout}>
          Send Message
        </button>
      </form>

      <div className={styles.info}>
        <h3>Contact Information</h3>
        <div className={styles.infoCard}>
          <MapPin size={20} />
          <span>Showroom</span>
          <span>Warsaw, Poland</span>
        </div>

        <div className={styles.infoCard}>
          <Mail size={20} />
          <span>Email</span>
          <span>support@velora.com</span>
        </div>

        <div className={styles.infoCard}>
          <Phone size={20} />
          <span>Phone</span>
          <span>+48 123 456 789</span>
        </div>

        <div className={styles.infoCard}>
          <Clock size={20} />
          <span>Opening Hours</span>
          <span>Mon - Fri</span>
          <span>9:00 - 18:00</span>
        </div>
      </div>
    </section>
  );
}
