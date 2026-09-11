import { MenuBoard } from "@/components/carte/MenuBoard";
import { PageHero } from "@/components/ui/PageHero";
import { menu } from "@/data/menu";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "La carte",
  description:
    "La carte d’ALEX’CEPTION à Raismes : entrées, plats et desserts de saison.",
  path: "/carte",
});

export default function CartePage() {
  return (
    <div className="paper-page">
      <PageHero
        tone="paper"
        title="La carte"
        lead="Selon les arrivages. Les plats ci-dessous sont indicatifs."
      />
      <div className="site-container page-body">
        <MenuBoard categories={menu} tone="paper" />
      </div>
    </div>
  );
}
