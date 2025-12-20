---
title: "Portfolio Personnel en React"
date: "2025-07-26"
cover: "/projects/Portfolio/figma.png"
tags: ["React", "Vite", "Sass", "GitHub Actions", "DNS", "HTTPS", "CI/CD"]
---

## Contexte du Projet

Ce portfolio a été conçu pour être une vitrine moderne et dynamique de mes compétences et de mes réalisations. L'objectif était de créer un site web **entièrement responsive**, **rapide** et **facile à maintenir**, où l'ajout de nouveaux projets serait le plus simple possible.

Ce projet a été initialement structuré avec l'aide de mon ami **Yael Busser**, dont vous pouvez retrouver le travail sur [son profil GitHub](https://github.com/YaelBusser). J'ai ensuite repris et fait évoluer le projet pour l'adapter à mes besoins spécifiques et y intégrer de nouvelles fonctionnalités.

---

## Technologies Utilisées 🚀

Pour construire ce site, j'ai choisi un ensemble d'outils modernes et performants :

-   ![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg#icon) **React** : Le cœur de l'application, pour une interface utilisateur réactive et modulaire.
-   ![JavaScript Logo](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png#icon) **JavaScript (ES6+)** : Pour toute la logique de l'application.
-   ![Vite Logo](https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg#icon) **Vite** : Un outil de build ultra-rapide qui a considérablement accéléré le temps de développement.
-   ![Sass Logo](https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg#icon) **Sass** : Pour un **CSS** structuré, maintenable et puissant.
-   ![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg#icon) **gray-matter** & **marked** : Pour parser les fichiers Markdown et transformer dynamiquement leur contenu en HTML.

---

## Déploiement et Mise en Ligne ⚙️

La mise en ligne de ce portfolio est entièrement automatisée. C'est un point qui me tenait à cœur pour garantir des mises à jour rapides et fiables.

### CI/CD avec GitHub Actions ![GitHub Actions Logo](https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg#icon)
J'ai mis en place un workflow d'intégration et de déploiement continus (CI/CD) avec **GitHub Actions**. À chaque `push` sur la branche `master`, le processus s'occupe de :
1.  **Builder** l'application pour la production.
2.  **Déployer** automatiquement le résultat sur GitHub Pages.

### Configuration du Domaine et Sécurité
Pour que le site soit accessible via une URL professionnelle et sécurisée :
-   **DNS** : J'ai configuré les enregistrements DNS de mon nom de domaine **estebancott.dev** pour qu'il pointe vers les serveurs de GitHub Pages.
-   **HTTPS** : La sécurité du site est assurée par un certificat SSL fourni par GitHub. J'ai ensuite configuré le repository pour **forcer l'utilisation du HTTPS**, garantissant une connexion chiffrée et sécurisée pour tous les visiteurs.

---

## Défis et Apprentissages

-   **Dynamisation des Projets** : Le défi principal était de ne pas avoir à modifier le code source pour ajouter un projet. La solution a été de lire dynamiquement les fichiers Markdown depuis le dossier `public`. Cela a nécessité de mettre en place un système de parsing avec `gray-matter` pour extraire les métadonnées (titre, date, tags...) et le contenu.

-   **Animations et Transitions** : J'ai passé du temps à peaufiner les animations en CSS (comme les transitions sur les cartes de projet ou le menu de navigation) pour rendre l'expérience utilisateur plus fluide et agréable, sans sacrifier les performances.

---

## 📷 Illustrations

![Maquette Figma du portfolio](/projects/Portfolio/figma.png "Maquette initiale sur Figma")