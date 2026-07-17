import styles from "../styles/WhyChooseVelora.module.css";
import whyVeloraData from "../helpers/whyVeloraData";

export default function WhyChooseVelora() {
  return (
    <section className={styles.why}>
      <div className={styles.heading}>
        <span className={styles.label}>
          <span className={styles.labelText}>Why Velora?</span>
        </span>

        <h2 className={styles.title}>Crafted for those who see the details.</h2>
      </div>

      <div className={styles.benefitsGrid}>
        {whyVeloraData.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article className={styles.benefitCard} key={benefit.id}>
              <Icon size={32} className={styles.icon} />
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
