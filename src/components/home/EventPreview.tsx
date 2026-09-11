import Link from "next/link";
import { CoverImage } from "@/components/ui/CoverImage";
import { events } from "@/data/events";
import { formatDate, formatDateParts, formatPrice } from "@/lib/utils";
import styles from "./EventPreview.module.css";

export function EventPreview() {
  const featured = events.find((event) => event.featured) ?? events[0];

  if (!featured) {
    return null;
  }

  const parts = formatDateParts(featured.date);

  return (
    <section className={styles.section} aria-labelledby="events-title">
      <div className={styles.featured}>
        <div className={styles.media}>
          <CoverImage
            src={featured.image}
            alt=""
            sizes="(min-width: 900px) 58vw, 100vw"
          />
        </div>
        <div className={styles.copy}>
          <p className={styles.kicker}>Prochain événement</p>
          <p className={styles.when} aria-label={formatDate(featured.date)}>
            <span className={styles.day}>{parts.day}</span>
            <span className={styles.month}>{parts.month}</span>
          </p>
          <h2 id="events-title" className={styles.title}>
            {featured.title}
          </h2>
          <p className={styles.desc}>{featured.description}</p>
          {featured.price != null ? (
            <p className={styles.meta}>{formatPrice(featured.price)}</p>
          ) : null}
          {featured.reservationNote ? (
            <p className={styles.meta}>{featured.reservationNote}</p>
          ) : null}
          <div className={styles.links}>
            <Link
              href="/evenements"
              className={styles.link}
              aria-label={`Découvrir l’événement ${featured.title}`}
            >
              Découvrir l’événement
              <span aria-hidden="true"> →</span>
            </Link>
            <Link href="/evenements" className={styles.more}>
              Voir tous les événements
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
