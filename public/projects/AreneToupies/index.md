---
title: "Arène de Toupies Électroniques Inspirée de Beyblade"
date: "2022-04-09"
cover: "/projects/AreneToupies/arene-video-preview.jpg"
tags: ["Arduino", "Électronique", "C++", "Xbee", "Impression 3D", "SolidWorks"]
---

## Contexte du Projet

Inspiré par le célèbre dessin animé des années 2000, ce projet, réalisé en équipe dans le cadre de ma 2ème année à l'ENSIM, vise à recréer et moderniser les combats de toupies Beyblade. L'objectif était de concevoir une arène de combat entièrement fonctionnelle où deux joueurs s'affrontent dans un jeu interactif en plusieurs phases, mêlant habileté et stratégie.

![Photo de l'arène en fonctionnement](/projects/AreneToupies/arene-video-preview.jpg "L'arène de combat et ses pupitres de commande.")

---

## Concept et Phases de Jeu 🎮

Le jeu a été pensé pour être une expérience complète se déroulant en deux phases distinctes :

1.  **Lancement du Combat** : Un mini-jeu de rythme de type **Guitar Hero** où les joueurs doivent appuyer sur les bons boutons au bon moment. Le score détermine la vitesse des moteurs de lancement des toupies motorisées dans l'arène.
2.   **Phase de Combat** : Pendant que les toupies s'affrontent, chaque joueur peut activer un **boost de vitesse** unique pour prendre le dessus sur son adversaire. Ils doivent alors utiliser un **joystick pour contrôler la vitesse** des moteurs dans les toupies. Le combat se termine lorsqu'une des toupies s'arrête.

![Schéma du déroulement du jeu](/projects/AreneToupies/game-flowchart.png "Organigramme du jeu")

---

## Conception Technique et Matérielle 🛠️

La réalisation de ce projet a nécessité la conception et l'intégration de nombreux composants électroniques et mécaniques, programmés en **C++** dans l'écosystème Arduino.

### L'Arène de Combat : Le Cerveau du Jeu

L'arène est le centre de contrôle, pilotée par une carte **Arduino Mega**. Elle gère :
-   **Les Lanceurs** : Deux moteurs puissants, contrôlés via un module **L298N**, dont la vitesse est ajustée par les scores des joueurs au guitar hero.
-   **Les Postes de Contrôle** : Chaque joueur dispose de boutons lumineux et de bandes de LEDs **Neopixel** pour la phase "Guitar Hero", ainsi qu'un joystick et un bouton pour le boost.
-   **La Communication Sans Fil** : Un module **Xbee** en mode émetteur envoie pour activer le boost de la toupie correspondante. Il peut également recevoir si une toupie ne tourne plus, pour savoir qui a gagner et lancer une animation de fin.
-   **L'Ambiance Sonore** : Un buzzer joue le générique du dessin animé Beyblade au lancement du jeu pour une immersion totale.

![Schéma électronique de l'arène](/projects/AreneToupies/arene-schema.png "Schéma Fritzing de l'électronique de l'arène")

### Les Toupies Électroniques : Des Combattants Autonomes

Chaque toupie est un système embarqué compact et résistant, modélisé sur **SolidWorks** et imprimé en 3D. Elle intègre :
-   **Microcontrôleur** : Une carte **Arduino Nano**, choisie pour sa petite taille.
-   **Réception Sans Fil** : Un module **Xbee** écoute sur le port série (`Serial`) les commandes de boost envoyées par l'arène. Il envoie également quand la toupie ne tourne plus.
-   **Actionneur de Boost** : Un moteur interne, alimenté par une pile dédiée et contrôlé par un relais, s'active à la réception du signal de boost pour donner un avantage décisif.
-   **Détection de Mouvement** : Un accéléromètre **MMA8452Q** est utilisé pour détecter la fin du combat. Le code lit les valeurs sur les axes X, Y et Z et les compare à une valeur seuil pour déterminer si la toupie est encore en rotation ou si elle s'est arrêtée.

![Schéma électronique d'une toupie](/projects/AreneToupies/toupie-schema.png "Schéma Fritzing de l'électronique embarquée dans une toupie")

---

## Défis et Apprentissages

Ce projet a été une excellente occasion de confronter la théorie à la pratique et de résoudre des problèmes concrets en équipe.

-   **Gestion de l'Alimentation** : L'un des premiers défis a été le manque de puissance des moteurs des lanceurs, qui éteignait la carte Arduino. Ce problème a été résolu en utilisant un module de puissance **L298N** (double pont en H) puis un système de relais pour fournir une alimentation dédiée et suffisante aux moteurs.

-   **Le Boost Sans Fil** : Le défi principal était d'activer un moteur à l'intérieur d'un objet en pleine rotation. La solution informatique a été relevée avec succès grâce à la communication sans fil via les modules **Xbee**, mais le défi physique de l'équilibrage de la toupie avec ce moteur supplémentaire reste complexe. La solution envisagée n'était clairement pas possible physiquement également. Vouloir donner une accélération rotative à une toupie en faisant tourner sa pointe est physiquement impossible. Il aurait fallu un gyroscope, comme dans les satellites.

-   **Conception Mécanique** : De l'assemblage des pièces imprimées en 3D à la gestion des casses de dernière minute, la partie mécanique a demandé de nombreuses itérations et une grande capacité d'adaptation.

Ce projet a permis de solidifier des compétences transversales en électronique (Arduino, gestion de moteurs, communication sans fil), en informatique (programmation C++) et en conception 3D (SolidWorks), me fournissant un bagage solide pour de futurs défis d'ingénierie.