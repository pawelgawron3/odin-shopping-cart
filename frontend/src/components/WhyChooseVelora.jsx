import "../styles/WhyChooseVelora.css";
import whyVeloraData from "../helpers/whyVeloraData";

export default function WhyChooseVelora() {
  return (
    <section className="why-velora">
      <div className="why-section-heading">
        <span className="why-section-label">
          <span className="why-section-label-text">Why Velora?</span>
        </span>

        <h2>Crafted for those who see the details.</h2>
      </div>

      <div className="benefits-grid">
        {whyVeloraData.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <article className="benefit-card" key={benefit.id}>
              <Icon size={32} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
