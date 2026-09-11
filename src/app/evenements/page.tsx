import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/ui/PageHero";
import { events } from "@/data/events";
import { createMetadata } from "@/lib/seo";
import { formatDate, formatPrice } from "@/lib/utils";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "Événements",
  description:
    "Soirées, nouvelles cartes et rendez-vous autour de la table, au restaurant ALEX’CEPTION à Raismes.",
  path: "/evenements",
});

export default function EvenementsPage() {
  return (
    <>
      <PageHero
        title="Événements"
        lead="Des soirées ponctuelles, une carte qui change, parfois une table un peu plus habillée."
      />
      <div className="site-container page-body">
        <ul className={styles.list}>
          {events.map((event) => (
            <li key={event.slug} className={styles.item}>
              <div className={styles.media}>
                <CoverImage src={event.image} alt="" sizes="(min-width: 768px) 280px, 100vw" />
              </div>
              <div>
                <p className="t-label">{formatDate(event.date)}</p>
                <h2 className="t-h3">{event.title}</h2>
                <p className={styles.desc}>{event.description}</p>
                {event.price != null ? (
                  <p className={styles.meta}>{formatPrice(event.price)}</p>
                ) : null}
                {event.reservationNote ? (
                  <p className={styles.meta}>{event.reservationNote}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
