# Maquettes présentées au client — ALEX’CEPTION

Archive figée du travail montré au rendez-vous.

Ces fichiers sont une **copie**. Le prototype live reste dans `src/` et `public/`.
Rien n’a été déplacé : les maquettes continuent de fonctionner via le sélecteur 1 / 2 / 3 en bas à droite.

## Pourquoi cette organisation

Les 3 directions ne sont **pas** 3 applications séparées.
Elles vivent dans **une seule app Next.js**, basculées au runtime par `data-concept` + `localStorage` (`alexeption-concept`).

Il n’existe qu’une route : `/`.

Déplacer les fichiers hors de `src/` casserait le prototype. Copier les fichiers ici conserve le RDV sans toucher au design, et laisse la racine du repo comme espace de la version finale.

Point git correspondant : `cb8ddca` (26 août 2026).

## Les 3 directions

| Dossier | Switcher | Direction | Palette | Hero |
| --- | --- | --- | --- | --- |
| `maquette-01/` | Style 1, sombre | Haut de gamme, retenue | Noir `#11110f` / ivoire `#faf8f3` / or `#b58a4a` | Photo plein écran, texte à gauche, photo à droite, nav floutée |
| `maquette-02/` | Style 2, naturel | Éditorial, lumière | Sage `#20251d` / papier `#f2f0e8` / vert `#97aa98` | Split 54 / 46, photo cadrée |
| `maquette-03/` | Style 3, chaud | Cinématique, chaleur | Brun `#211b17` / ivoire `#f5eee6` / terracotta `#b96d4d` | Photo plein écran, overlay radial |

Base recommandée pour le site final : **maquette-01**.

## Contenu de chaque dossier

- `maquette-01/` `maquette-02/` `maquette-03/` — composants, styles et photo **spécifiques** à cette direction
- `_commun/` — fichiers partagés par les 3 (navbar, boutons, textes, photos, thème, switcher)

Ces copies ne sont pas exécutables toutes seules. Pour revoir une maquette : `npm run dev`, puis cliquer 1, 2 ou 3.
