"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CONCEPT_STORAGE_KEY,
  type ConceptId,
  isConceptId,
} from "@/lib/theme";

type ThemeContextValue = {
  concept: ConceptId;
  setConcept: (id: ConceptId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [concept, setConceptState] = useState<ConceptId>("01");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-concept");
    if (isConceptId(current)) {
      setConceptState(current);
    }
  }, []);

  const setConcept = useCallback((id: ConceptId) => {
    setConceptState(id);
    document.documentElement.setAttribute("data-concept", id);
    try {
      localStorage.setItem(CONCEPT_STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({ concept, setConcept }),
    [concept, setConcept],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
