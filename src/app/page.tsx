import { Distinction } from "@/components/home/Distinction";
import { EventPreview } from "@/components/home/EventPreview";
import { Hero } from "@/components/home/Hero";
import { MenuPreview } from "@/components/home/MenuPreview";
import { PracticalInfo } from "@/components/home/PracticalInfo";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { SeminarPreview } from "@/components/home/SeminarPreview";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata();

export default function Home() {
  return (
    <>
      <Hero />
      <MenuPreview />
      <EventPreview />
      <ProductShowcase />
      <Distinction />
      <SeminarPreview />
      <PracticalInfo />
    </>
  );
}
