---
title: "Formule Polytechnique Montréal"
date: "2024-12-15"
cover: "/projects/FormulePolytechniqueMontreal/logo.png"
tags: ["STM32", "Embarqué", "CAN", "Python", "Xbee", "Télémétrie"]
---

## Mon Aventure à la Formule Polytechnique Montréal

Dans le cadre de mon échange universitaire à **Polytechnique Montréal**, j'ai eu l'immense chance de rejoindre l'équipe **Formule Polytechnique Montréal**. C'est bien plus qu'une simple association étudiante : c'est une véritable écurie de course qui conçoit et fabrique de A à Z une monoplace 100% électrique.

Le but ultime est de participer à **Formule SAE**, une compétition internationale extrêmement exigeante où des universités du monde entier s'affrontent. Pour y participer, il faut respecter un cahier des charges très strict, et la voiture est évaluée sur de nombreuses épreuves : endurance, accélération, mais aussi sur la conception technique, la gestion des coûts et même la présentation d'un business plan.

En tant que passionné de systèmes embarqués, intégrer l'équipe logicielle dans ce contexte de haute performance a été une expérience incroyablement formatrice.

![Photo de moi dans le cockpit de la formule](/projects/FormulePolytechniqueMontreal/moiDansLaFormule.jpeg "Installation dans le cockpit pour une session de tests.")


---

### Projet 1 : Portage du Firmware du BMS (STM32F4 vers L4)

Ma première mission a été un défi de taille : **porter le firmware du BMS (Battery Management System)**. L'équipe électronique avait décidé de changer le microcontrôleur de la carte, passant d'un **STM32F4** à un **STM32L4**, principalement pour sa consommation d'énergie beaucoup plus faible.

Mon rôle était donc de prendre un code existant, entièrement fonctionnel sur l'ancienne architecture, et de le rendre parfaitement opérationnel sur la nouvelle. Ce n'était pas une simple compilation : j'ai dû plonger dans le code, comprendre les interactions avec les périphériques (timers, CAN, GPIO), et les adapter aux spécificités du STM32L4. C'était un excellent exercice de rétro-ingénierie et de programmation bas niveau qui m'a demandé beaucoup de rigueur.

---

### Projet 2 : Automatisation de l'Analyse de Données Motec

L'équipe perdait un temps précieux après chaque session de roulage. Il fallait manuellement connecter un PC au volant **Motec** de la voiture, télécharger les fichiers de log, puis les analyser un par un sur un logiciel propriétaire. Les données restaient souvent sur un seul ordinateur, ce qui compliquait le partage et l'analyse collaborative.

Pour résoudre ce problème, j'ai développé un script en **Python** qui automatise tout le processus :
1.  **Parsing des Fichiers** : Le script utilise un parser open-source pour lire les fichiers `.ld` propriétaires de Motec.
2.  **Conversion en CSV** : Il convertit ensuite ces données brutes en un format CSV, beaucoup plus universel.
3.  **Envoi sur le Cloud** : Enfin, il envoie automatiquement ces fichiers CSV vers **Marple**, une plateforme en ligne de visualisation de données.

Grâce à cet outil, toutes les données de la session sont maintenant centralisées, accessibles à tous les membres de l'équipe, et facilement analysables. On peut faire des retours beaucoup plus rapides au pilote, par exemple en analysant ses courbes de freinage pour voir s'il peut optimiser ses trajectoires.

![Visualisation des données de télémétrie sur Marple](/projects/FormulePolytechniqueMontreal/viualisationSurMarple.png "Exemple de dashboard sur Marple pour l'analyse post-course.")

---

### Projet 3 : Heatmap 3D de la Batterie

Pour aider l'équipe mécanique à optimiser le refroidissement de la batterie, j'ai développé un autre outil en **Python**. En réutilisant les données CSV générées par mon premier script, je récupère toutes les informations des capteurs thermiques disséminés dans la batterie.

En étroite collaboration avec les autres pôles pour comprendre l'emplacement exact de chaque capteur, j'ai créé un script qui génère une **heatmap 3D interactive**. On peut ainsi visualiser l'évolution de la température de chaque cellule au fil du temps, identifier les points chauds et prendre des décisions sur la conception du système de refroidissement.

![Heatmap 3D de la batterie en temps réel](/projects/FormulePolytechniqueMontreal/heatmap.png "Visualisation 3D des températures de la batterie, avec un slider pour naviguer dans le temps.")

---

### Projet 4 : Fiabilisation de la Télémétrie Temps Réel

Le dernier projet que j'ai pu mener avant la fin de mon échange a été de **fiabiliser la télémétrie temps réel**. Le système existant, basé sur des modules **Xbee**, n'était pas du tout robuste : on perdait plus de 95% des messages envoyés !

Pour y remédier, j'ai complètement revu le protocole de communication :
-   **Passage en Mode API** : J'ai configuré les modules Xbee pour fonctionner en mode API, ce qui permet d'avoir des trames de données structurées avec checksum, bien plus fiables que le mode transparent utilisé auparavant.
-   **Adaptation du Code** : J'ai modifié le code embarqué sur la voiture et le code du récepteur sur le PC pour qu'ils supportent ce nouveau protocole. J'ai notamment développé un parser de trames côté PC pour reconstruire les messages CAN, même s'ils arrivent de manière fragmentée.

Après ces modifications, les tests ont été sans appel : sur un essai de 20 minutes, **nous sommes passés de 5% à 100% de messages reçus**. Cela a complètement changé la donne pour les retours en direct au pilote pendant les essais.

## Bilan d'une Expérience Intense et Collaborative

Cette expérience dans l'association Formule Polytechnique Montréal a été incroyable. Travailler dans une équipe aussi grande et structurée (près de 50 personnes !) a été hyper enrichissant, surtout en comparaison avec mon expérience à ENSIM'elec où nous étions 9. La communication et la coordination entre les différents pôles (mécanique, électronique, logiciel) sont essentielles, et j'ai adoré cet environnement où chaque ligne de code a un impact direct sur la performance.

Même si je n'ai pas pu aller jusqu'à la compétition au Michigan, je suis très fier de tout ce que j'ai pu accomplir et apporter à l'équipe en seulement 4 mois, tout en suivant mes cours à côté.