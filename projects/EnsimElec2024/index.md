---
title: "Président d'ENSIM'elec – Leader d'un projet pour Eurobot 2024"
date: "2024-06-01"
cover: "/projects/EnsimElec2024/stratégieFinale.gif"
tags: ["Leadership", "Gestion de Projet", "Robotique", "STM32", "C++", "Python", "Raspberry Pi"]
---

## De Membre à Président : une Nouvelle Dimension

Après une première année de découverte chez **ENSIM'elec**, j'ai décidé de sauter le pas et de prendre la présidence de l'association pour la saison 2023-2024. Mon objectif était simple : mener notre équipe le plus loin possible dans la compétition Eurobot, tout en créant un environnement de travail collaboratif et efficace.

Cette année, le thème était **"Farming Mars"** : nos robots devaient coloniser Mars en cultivant des plantes et en déployant des panneaux solaires. Un défi passionnant qui allait nous demander de l'ingéniosité tant sur le plan mécanique qu'électronique et logiciel.

![Table de jeu Eurobot 2024](/projects/EnsimElec2024/tableDeJeu.png "Le terrain de jeu martien de la compétition Eurobot 2024.")

---

## Mon Rôle de Président : Chef d'Orchestre d'un Projet Complexe

Être président, c'est bien plus que de la technique. J'ai dû porter plusieurs casquettes pour m'assurer que le projet avance dans la bonne direction.

### Gestion de Projet et d'Équipe

Pour structurer notre travail, j'ai mis en place une organisation claire, inspirée des méthodes agiles :
-   **Définition des Rôles** : Nous avons créé trois pôles (mécanique, électronique, informatique) avec des responsables pour chaque.
-   **Planification** : J'ai établi un planning précis avec des jalons clairs et des sprints de développement pour garder le rythme tout au long de l'année.
-   **Workflow Collaboratif** : L'utilisation de **Git** est devenue la norme pour le partage de code, et nous avons mis en place un **serveur VSCode** sur le robot pour que tout le monde puisse travailler sur la même base.

### Les Tâches Administratives et Financières

J'ai aussi géré tout l'aspect "invisible" mais essentiel du projet :
-   **Gestion du Budget** : Suivi des dépenses, recherche de sponsors, et commandes de matériel.
-   **Communication** : Représentation de l'association auprès de l'école et des partenaires.
-   **Logistique** : Organisation des déplacements et de la participation à la Coupe de France.

---

## Notre Robot Martien : Conception et Stratégie 🤖

Notre stratégie, affinée au fil des mois, consistait à prioriser les tâches les plus rentables en points, comme on peut le voir sur cette simulation de notre parcours idéal.

![Stratégie du robot en action](/projects/EnsimElec2024/stratégieFinale.gif "Simulation de la stratégie de jeu pour marquer un maximum de points.")

### Le Cerveau : un Duo STM32 et Raspberry Pi

Le cœur de notre robot était un système à deux têtes :
-   **La Carte de Contrôle (bas niveau)** : Une **STM32 Nucleo-F446RE** programmée en **C++** gérait toutes les tâches temps réel : l'asservissement des moteurs et l'odométrie. Son rôle est d'obéir aux ordres et d'emmener le robot là ou l'on demande, avec une position en x y.
-   **La Carte de Décision (haut niveau)** : Une **Raspberry Pi 4**, programmée en **Python**, servait de "cerveau" stratégique. Grâce à un **Lidar** elle détectait les adversaires et prenait les décisions de jeu, comme on le voit sur cette démo.

![GIF de la détection d'adversaire avec le Lidar](/projects/EnsimElec2024/detectionAdversaire.gif "Le Lidar identifie et isole le robot adverse (en rouge).")

### Les Actionneurs : nos Outils de Fermier Martien

Pour interagir avec les éléments de jeu, nous avons designé plusieurs mécanismes sur-mesure. Le plus complexe était notre bras principal, composé d'un ascenseur et d'une pince.

Voici l'ascenseur en action, il permettait au bras de monter et descendre pour atteindre les différentes jardinières.
![GIF de l'ascenseur du robot](/projects/EnsimElec2024/ascenceurEnAction.gif "Test du mécanisme de l'ascenseur.")

Au bout de cet ascenseur se trouvait notre pince, conçue pour attraper les plantes avec précision. On peut la voir fonctionner sur ce test :
![GIF de la pince du robot](/projects/EnsimElec2024/pinceEnAction.gif "Test du mécanisme de la pince.")

Enfin, pour les panneaux solaires, un simple actionneur capable de les tourner un par un. Le voici en fonctionnement :
![GIF de l'actionneur des panneaux solaires](/projects/EnsimElec2024/actionneurPanneauSolaireEnAction.gif "Déploiement d'un panneau solaire.")

### Les PAMIs : nos Petits Explorateurs Autonomes

Nous avions aussi 4 "Petits Actionneurs Mobiles Indépendants" (PAMIs), des mini-robots dont la mission était de se déployer en fin de match pour aller "polliniser" les plantes. Les voici en action, les notres sont blanc (c'est la rediffusion Twitch d'un match de la coupe) :

![Animation d'un PAMI](/projects/EnsimElec2024/pamiEnFonctionement.gif "Le PAMI se déploie et avance de manière autonome.")

---

## Mon Rôle Technique : un Investissement sur tous les Fronts

En plus de mon rôle de président, je suis resté très impliqué sur le plan technique, en essayant d'aider sur tous les pôles. J'ai notamment travaillé sur :
-   **Le Cerveau de la Raspberry Pi** : J'ai développé le code principal en Python qui s'occupe de lire et d'interpréter des stratégies depuis un fichier JSON. Cela nous permettait de modifier le comportement du robot sans recompiler tout le code, comme on peut le voir sur cet exemple de fichier stratégie.

![Exemple de fichier de stratégie en JSON](/projects/EnsimElec2024/exempleStratégie.png "Structure d'un fichier de stratégie pour le robot.")

-   **L'Asservissement des Moteurs** : J'ai mis en œuvre le système de régulation PID pour garantir un contrôle précis de la vitesse et de la position du robot, un point crucial pour la fiabilité de nos déplacements.

![Schéma du système d'asservissement](/projects/EnsimElec2024/schemaAsservissement.png "Architecture de l'asservissement moteur avec les PID.")

-   **Une IHM Indispensable** : J'ai développé une interface graphique sur un écran tactile. Cet outil a été notre sauveur pendant les tests : il permettait de visualiser les données des capteurs en temps réel et de lancer le robot en match en choisissant la stratégie que l'on veut.

![GIF de l'interface graphique de débogage](/projects/EnsimElec2024/InterfaceGraphique.gif "L'IHM en action, permettant de contrôler le robot.")

-   **Une Électronique Modulaire** : J'ai conçu une **carte de puissance** pour distribuer proprement les tensions (5V, 12V) à tous les composants, ainsi qu'une **carte mère** sur laquelle toutes les autres cartes (STM32, Raspberry Pi, puissance) venaient s'emboîter. Cette approche modulaire facilite grandement la maintenance et les évolutions futures du robot.

![Assemblage des cartes électroniques](/projects/EnsimElec2024/assemblageDesCarte.jpg "Vue 3D de l'empilement des cartes personnalisées.")

-   **L'Optimisation des PAMIs** : J'ai participé au choix des composants et à la conception de la carte mère sur-mesure pour nos mini-robots, avec pour contrainte principale de la rendre la plus petite possible pour maximiser le nombre de PAMIs dans la zone de départ.

![Vue en coupe d'un PAMI](/projects/EnsimElec2024/pamiEnCoupe.png "Conception 3D d'un PAMI, optimisée pour la compacité.")

---

## Bilan d'une Année Intense : entre Fierté et Frustration

Cette année de présidence a été une expérience humaine et technique incroyable, et de loin la plus difficile que j'aie vécue. Gérer une équipe, un budget, un planning, tout en essayant de garder les mains dans le code a été un défi de tous les instants. Voir notre robot prendre vie et concourir à la Coupe de France a été une immense fierté et la plus belle des récompenses pour l'équipe.

Cependant, ce rôle n'a pas été facile mentalement. Il a exigé d'énormes sacrifices personnels et un investissement quotidien. Je voulais m'impliquer encore plus sur le plan technique pour pousser le projet plus loin, mais j'ai été très souvent rattrapé par les tâches administratives : les demandes de subventions, la communication, la gestion des commandes... C'était parfois frustrant. J'étais constamment sollicité pour de l'aide sur tous les fronts, et malgré la présence d'un bureau, je me suis souvent senti seul pour porter le projet, ce qui a rendu la charge de travail écrasante.

Malgré tout, cette expérience m'a énormément appris sur moi-même, sur la gestion de projet et sur l'importance de la communication.

![Photo du robot final à la compétition](/projects/EnsimElec2024/robotFinal.jpg "Notre robot, prêt à concourir !")