# SAÉ Refonte de site - beauvaisis.fr

## Installation de l'environnement de développement

### Pré-requis
- [NodeJS](https://nodejs.org) - version 18.18.1 LTS

Je recommande l'utilisation de [WebStorm](https://www.jetbrains.com/fr-fr/webstorm/) mais vous êtes libres d'utiliser l'IDE de votre choix tant que vous savez vous en servir correctement. Le point positif de WebStorm, c'est l'intégration assez complète de Git, NodeJS, de Typescript, de Tailwind CSS, en plus du fait que ce soit gratuit pour les étudiants via un Student Pack. De plus, j'ai créé des configurations pour lancer les scripts et autres dépendances de développement en un clic pour WebStorm.

### Installation des dépendances du projet
Lancez cette commande dans un terminal (après avoir installé NodeJS, et à la racine du projet)
```shell
npm install
```

## Fonctionnement de l'environnement de développement
J'ai réalisé plusieurs scripts et configuration de lancement, que je vais détailler ci-dessous :

- `Build website` : cette configuration "compilera" le site et mettra la sortie dans le dossier `dist/`.
- `Clean destination` : cette configuration supprimera le dossier `dist/`.
- `Launch Tailwind` : cette configuration lancera un logiciel dans le terminal de votre IDE, qui permettra de compiler le CSS automatiquement à chaque modification que vous ferez. /!\ ça ne compile pas le site, uniquement le CSS
- `Launch webserver` : cette configuration lance un serveur web prenant `dist/` comme racine, afin de tester le site en condition "réelles".