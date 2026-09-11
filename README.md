# ALEX’CEPTION

Site du restaurant Alex’ception, à Raismes.

La racine du repository est l’espace de la version finale (V1).
Les maquettes du rendez-vous sont figées dans [`maquettes_rdv/`](./maquettes_rdv/README.md).

## Démarrer

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm run lint
```

## Pages

- `/` — Home
- `/carte`
- `/cave`
- `/evenements`
- `/seminaires`

Les contenus changeants (carte, vins, événements, infos restaurant) sont dans `src/data/`.
Les photos se remplacent dans `public/images/` sans toucher aux composants.
