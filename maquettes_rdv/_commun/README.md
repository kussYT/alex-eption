# Fichiers communs aux 3 maquettes

Ces fichiers n’appartiennent à aucune direction seule. Ils font tourner le prototype RDV.

| Fichier | Rôle |
| --- | --- |
| `app/page.tsx` | Unique route `/` : Navbar + ConceptStage + StyleSwitcher |
| `app/layout.tsx` | Fonts, `data-concept`, script localStorage anti-FOUC |
| `app/globals.css` | Tailwind 4, reset, `.site-container`, placeholder `#cuisine` |
| `styles/themes.css` | Jetons des 3 concepts |
| `components/home/ConceptStage.*` | Affiche Hero + Manifesto du concept actif |
| `components/home/HeroPhoto.*` | Photo hero selon le concept |
| `components/layout/Navbar.*` | Navigation, glass / scrolled selon le thème |
| `components/theme/ThemeProvider.tsx` | État `data-concept` + localStorage |
| `components/theme/StyleSwitcher.*` | Boutons 1 / 2 / 3 (outil de présentation, pas un élément du site final) |
| `components/ui/Button.*` | CTA primary / outline / text |
| `lib/copy.ts` | Textes mockés hero + manifesto |
| `lib/media.ts` | Chemins des 3 photos hero |
| `lib/nav.ts` | Liens d’ancre (pages pas encore créées) |
| `lib/theme.ts` | IDs de concepts |
| `lib/cn.ts` | Helper de classes |
| `images/hero.jpg` | Doublon non utilisé de `concept-01.jpg` |

Pas de `node_modules`, pas de `.next`.
