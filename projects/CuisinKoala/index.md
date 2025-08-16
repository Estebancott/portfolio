---
title: "Cuisin'Koala – Ton assistant de cuisine intelligent"
date: "2024-01-02"
cover: "/projects/CuisinKoala/cuisinkoala-cover.png"
tags: ["Angular", "Ionic", "TypeScript", "Firebase", "OCR", "API ChatGPT", "Mobile"]
---

## Le point de départ : la question fatidique "On mange quoi ce soir ?"

On connaît tous ce moment : on rentre des cours ou du travail, on ouvre le frigo, et c'est le vide intersidéral de l'inspiration. C'est de ce constat, et de l'envie de lutter contre le gaspillage alimentaire, qu'est né **Cuisin'Koala**, une application mobile que j'ai développée en équipe.

L'idée était simple : créer un compagnon de cuisine qui non seulement sait ce que j'ai dans mon frigo, mais qui me propose aussi des recettes intelligentes et m'aide à faire mes courses. Un vrai projet de A à Z, du code à la base de données.

![Capture d'écran de l'application Cuisin'Koala](/projects/CuisinKoala/cuisinkoala-home.png "Page d'accueil de Cuisin'Koala")

---

## La stack technique : une application mobile moderne 📱

Pour donner vie à ce projet, on a choisi des technologies robustes et modernes qui nous ont permis de créer une expérience utilisateur fluide et multiplateforme.

-   ![Angular Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png#icon) **Angular** : Un framework puissant pour construire une application web structurée et maintenable.
-   ![Ionic Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/1200px-Ionic_Logo.svg.png#icon) **Ionic** : Pour transformer notre application web en une véritable application mobile native pour iOS et Android, avec accès à la caméra et aux fonctionnalités du téléphone.
-   ![TypeScript Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png#icon) **TypeScript** : Pour un code plus sûr, plus propre et plus facile à déboguer.
-   ![Firebase Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Firebase_Logo.svg/1200px-Firebase_Logo.svg.png#icon) **Firebase** : J'ai utilisé Firebase pour toute la partie backend. C'était parfait pour gérer l'authentification des utilisateurs et stocker toutes les données (listes d'ingrédients, recettes, etc.) en temps réel dans la base de données Firestore.

---

## Les fonctionnalités qui changent la vie 💡

Ce qui rend Cuisin'Koala vraiment spécial, ce sont ses fonctionnalités intelligentes qui simplifient la vie en cuisine.

### 1. Le frigo intelligent grâce à l'OCR

Fini la corvée de lister à la main ce qu'il reste dans le frigo ! J'ai intégré une fonctionnalité qui utilise la **caméra du téléphone** pour scanner un ticket de caisse. Grâce à une technologie de **reconnaissance optique de caractères (OCR)**, l'application est capable de lire le ticket, d'identifier les produits achetés et de les ajouter automatiquement à l'inventaire du frigo virtuel. C'est un gain de temps énorme !

### 2. Des recettes sur mesure avec l'API ChatGPT

C'est là que la magie opère. Une fois que l'application connaît les ingrédients disponibles, j'utilise l'**API de ChatGPT** pour générer des idées de recettes créatives et adaptées. Il suffit de sélectionner quelques ingrédients, et l'IA propose une recette complète, avec les étapes de préparation. C'est la fin du gaspillage et le début de la découverte de nouveaux plats.

![Exemple de recette générée par l'IA](/projects/CuisinKoala/cuisinkoala-recipe.png "Une recette de pâtes carbonara générée à partir des ingrédients du frigo.")

### 3. Gestion des listes de courses et suivi nutritionnel

Bien sûr, l'application permet aussi de gérer ses listes de courses et de suivre ses habitudes alimentaires via des rapports hebdomadaires, pour une alimentation plus saine et mieux organisée.

---

## Ce que j'ai appris de ce projet

Cuisin'Koala a été un projet très complet qui m'a permis de monter en compétences sur tout le cycle de développement d'une application mobile. De la gestion de projet en équipe à l'intégration d'API externes comme celle de ChatGPT, en passant par la mise en place d'une base de données NoSQL avec Firebase, chaque étape a été un apprentissage. C'est le genre de projet qui confirme ma passion pour la création de solutions logicielles concrètes qui répondent à de vrais besoins du quotidien.