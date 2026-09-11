export const NAV_LINKS = [
  { href: "/carte", label: "La carte" },
  { href: "/evenements", label: "Événements" },
  { href: "/cave", label: "La cave" },
  { href: "/seminaires", label: "Séminaires" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { href: "/#infos", label: "Infos pratiques" },
  { href: "/mentions-legales", label: "Mentions légales" },
] as const;
