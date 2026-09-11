import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site ALEX’CEPTION.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="Mentions légales"
        lead="Page temporaire. Les mentions définitives seront rédigées avec le client."
      />
      <div className="site-container page-body">
        <p className="t-body page-hero-lead">
          Éditeur du site, hébergeur, propriété intellectuelle et données personnelles
          seront précisés ici avant la mise en ligne.
        </p>
      </div>
    </>
  );
}
