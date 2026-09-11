import { CallButton } from "@/components/layout/CallButton";
import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/ui/PageHero";
import { seminars } from "@/data/seminars";
import { createMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "Séminaires",
  description:
    "Séminaires, repas d’entreprise et privatisation au restaurant ALEX’CEPTION, à Raismes.",
  path: "/seminaires",
});

export default function SeminairesPage() {
  return (
    <>
      <PageHero
        title={seminars.title}
        lead={seminars.description}
      />
      <div className="site-container page-body">
        <div className={styles.layout}>
          <div className={styles.media}>
            <CoverImage
              src={seminars.image}
              alt="Table dressée pour un événement professionnel"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div>
            <ul className={styles.features}>
              {seminars.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className={styles.note}>
              Pour un devis ou une date, le plus simple est d’appeler.
            </p>
            <CallButton variant="primary" />
          </div>
        </div>
      </div>
    </>
  );
}
