import { HERO_IMAGES as MEDIA_IMAGES } from "@/lib/media";

export const CONCEPTS = ["01", "02", "03"] as const;

export type ConceptId = (typeof CONCEPTS)[number];

export const CONCEPT_STORAGE_KEY = "alexeption-concept";

export const HERO_IMAGES = MEDIA_IMAGES;

export function isConceptId(value: string | null): value is ConceptId {
  return value === "01" || value === "02" || value === "03";
}
