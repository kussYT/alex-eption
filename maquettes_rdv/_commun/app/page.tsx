import { ConceptStage } from "@/components/home/ConceptStage";
import { Navbar } from "@/components/layout/Navbar";
import { StyleSwitcher } from "@/components/theme/StyleSwitcher";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenu">
        <ConceptStage />
        <div id="cuisine" className="scroll-probe" aria-hidden="true" />
      </main>
      <StyleSwitcher />
    </>
  );
}
