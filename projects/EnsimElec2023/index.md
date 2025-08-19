---
title: "Mes Débuts chez ENSIM'elec – Eurobot 2023"
date: "2023-06-01"
cover: "/projects/EnsimElec2023/logo.png"
tags: ["Événementiel", "Arduino", "Électronique", "Gestion de Projet", "SolidWorks"]
---

## Plongée dans le grand bain de l'association

Début 2023, en troisième année à l'ENSIM, j'ai poussé la porte de l'association **ENSIM'elec**. Jje voulais voir de l'intérieur comment on construisait un robot de A à Z. Pour cette première année, je n'étais pas encore sur le robot principal, mais j'ai eu la chance de me voir confier des missions qui se sont révélées incroyablement formatrices.

Le thème de la saison était **"Cherry on the Cake"**. Le principe ? Des robots autonomes devaient empiler des "gâteaux" et récolter des "cerises" pour marquer un maximum de points en 100 secondes. Un défi à la fois technique et stratégique !

![Table de jeu Eurobot 2023](/projects/EnsimElec2023/vinyle_table_2023.svg "Le terrain de jeu officiel de la compétition Eurobot 2023.")

---

## Ma Mission n°1 : Le Panier à Cerises 🍒

Notre première tâche concrète a été de concevoir et réaliser le **panier à cerises** de l'équipe. Un élément de jeu qui paraît simple, mais qui est crucial : à la fin du match, chaque cerise dans le panier rapporte des points. Il devait être parfaitement conforme aux règles (dimensions, poids) et, surtout, facilement utilisable par notre robot.

### De SolidWorks à la découpe laser

Nous avons commencé par modéliser le panier sur **SolidWorks**, en pensant chaque pièce pour un assemblage simple et une fabrication par découpe laser dans du bois.

![Modélisation du panier sur SolidWorks](/projects/EnsimElec2023/panier-decoupe-solidworks.png "Conception 3D du panier, optimisée pour la découpe laser.")

Le premier prototype était fonctionnel, mais un problème est vite apparu : **le poids**. On dépassait la limite autorisée par le règlement ! On a donc dû retourner sur la conception pour **réaliser des évidements** sur les faces latérales. C'était un excellent exercice d'optimisation : alléger la structure au maximum sans compromettre sa solidité.

![Panier final avec les évidements](/projects/EnsimElec2023/panier-final.jpg "Le panier assemblé. On peut voir les découpes sur les côtés, ajoutées pour respecter la contrainte de poids.")

### Le petit plus : un compteur de points intelligent

Pour aller plus loin, Nous avons décidé de rendre notre panier "intelligent" en y intégrant un **compteur de cerises automatique**.
-   **Le Cerveau** : Une carte **Arduino Uno** pour la logique.
-   **La Détection** : Un **capteur à ultrasons** placé au-dessus du panier détectait chaque cerise qui tombait dedans.
-   **L'Affichage** : Un **écran LCD** affichait en direct le nombre de cerises.

![Schéma électronique du compteur de cerises](/projects/EnsimElec2023/schema-compteur.png "Schéma électronique du système de comptage.")


---

## Ma Mission n°2 : Organiser la Pré-Coupe

En parallèle, on m'a confié une grosse responsabilité : l'**organisation de la Pré-Coupe de robotique** de l'école. C'est un événement-clé qui sert de répétition générale avant la vraie Coupe de France.

Ce fut une plongée intense dans la gestion de projet événementiel :
-   **La chasse aux équipes** : J'ai passé des semaines à contacter des clubs de robotique de toute la région, via des mails, des messages sur les réseaux sociaux (Instagram, Twitter...), pour les convaincre de participer.
-   **Les démarches officielles** : J'ai dû faire le lien avec les organisateurs nationaux d'Eurobot pour que notre événement soit "agréé", mais aussi avec l'administration de l'ENSIM pour obtenir les autorisations nécessaires, notamment pour ouvrir l'événement au public le samedi.
-   **La communication** : Pour attirer un maximum de monde, j'ai participé à la création et à la diffusion d'une affiche promotionnelle que nous avons placardée partout dans l'école et partagée en ligne.

![Affiche de la pré-coupe organisée à l'ENSIM](/projects/EnsimElec2023/pre-coupe-affiche.jpg "L'affiche de l'événement, un gros travail de communication !")

---

## Le déclic pour la suite

Cette première année a été une révélation. Entre la conception d'un objet technique soumis à des contraintes fortes et l'organisation d'un événement de A à Z, j'ai touché à tout : la technique, la communication, la gestion de projet, la logistique... J'ai adoré cette vision d'ensemble et le challenge de faire bouger les choses. C'est cette expérience incroyablement riche qui m'a convaincu de me présenter et de prendre la présidence de l'association l'année suivante.