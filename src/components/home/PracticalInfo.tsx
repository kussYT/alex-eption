import { Button } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { restaurant } from "@/data/restaurant";
import styles from "./PracticalInfo.module.css";

export function PracticalInfo() {
  return (
    <section id="infos" className={styles.section} aria-labelledby="infos-title">
      <div className={styles.inner}>
        <div>
          <h2 id="infos-title" className={styles.name}>
            {restaurant.name}
          </h2>
          <p className={styles.address}>
            {restaurant.addressLine}
            <br />
            {restaurant.postalCode} {restaurant.city}
          </p>
          <a
            className={styles.phone}
            href={restaurant.phoneHref}
            aria-label={`Appeler le ${restaurant.phone}`}
          >
            {restaurant.phone}
          </a>
          <Button href={restaurant.mapsUrl} variant="text" arrow className={styles.directions}>
            Itinéraire
          </Button>
        </div>

        <div>
          <p className={styles.hoursTitle}>Horaires</p>
          <ul className={styles.hours}>
            {restaurant.hours.map((slot) => (
              <li key={slot.days}>
                <span>{slot.days}</span>
                <span>{slot.hours}</span>
              </li>
            ))}
          </ul>
          <p className={styles.note}>Horaires indicatifs, à confirmer par téléphone.</p>
        </div>
      </div>

      <div className={styles.news}>
        <p className={styles.newsTitle}>Recevoir les prochaines cartes et soirées.</p>
        <NewsletterForm variant="footer" />
      </div>
    </section>
  );
}
