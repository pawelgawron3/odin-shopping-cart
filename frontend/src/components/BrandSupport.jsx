import { Clock } from "lucide-react";
import styles from "../styles/BrandSupport.module.css";
import brandSupportData from "../helpers/brandSupportData";
import specialistData from "../helpers/specialistData";

export default function BrandSupport() {
  return (
    <section className={styles.brandSupport}>
      <div className={styles.linkGroups}>
        {brandSupportData.map((info) => (
          <div className={styles.linkGroup} key={info.id}>
            <h4 className={styles.title}>{info.title}</h4>

            <ul className={styles.list}>
              {info.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.specialist}>
        <h3 className={styles.specialistTitle}>{specialistData.title}</h3>

        <p className={styles.description}>{specialistData.description}</p>

        <div className={styles.contacts}>
          {specialistData.contacts.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                className={styles.contactItem}
                href={
                  item.type === "email"
                    ? `mailto:${item.value}`
                    : item.type === "phone"
                      ? `tel:${item.value}`
                      : "#"
                }
              >
                <Icon size={18} />
                <span>{item.value}</span>
              </a>
            );
          })}
        </div>

        <div className={styles.hours}>
          <Clock size={18} />
          <span>{specialistData.hours}</span>
        </div>
      </div>
    </section>
  );
}
