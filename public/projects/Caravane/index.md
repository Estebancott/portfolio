---
title: "Rénovation et modernisation d’une caravane"
date: "2025-07-03"
cover: "/projects/Caravane/caravane_cover.gif"
tags: ["DIY", "Électricité", "Audio", "Bricolage"]
---

# Rénovation et modernisation d’une caravane

Tout a commencé lorsque mon père a acheté une **caravane IMV Adria Prima 4152 D** afin de l’installer à notre étang.  
L’idée était simple : pouvoir y dormir quand nous recevons du monde, ou juste profiter d’un abri lors de nos après-midi pêche et petites soirées.  

Mon petit frère et mon père se sont rapidement attaqués à la **restauration** de la caravane, car elle avait subi des infiltrations d’eau et présentait de la moisissure.  
Pendant qu’ils s’occupaient de remettre l’intérieur en état, je me suis dit : *“Pourquoi ne pas profiter des travaux pour ajouter un vrai système électrique et audio ?”* 

---
## Le besoin initial  
Jusqu’ici, quand on voulait de la musique et de la lumière à l’étang, on apportait une **batterie de tracteur** rechargée à fond, sur laquelle on branchait une enceinte et quelques lampes.  
Pratique mais contraignant, puisqu’il fallait toujours transporter et préparer le matériel.  

Il existait déjà une petite cabane équipée d’un **panneau solaire**, mais uniquement pour fournir un peu de lumière.  
Pas de frigo, pas de musique, pas de recharge téléphone.  

L’idée était donc de rendre la caravane **autonome en énergie**, avec tout le confort nécessaire sur place.  

---

## Compréhension du circuit électrique d’origine  
La caravane était initialement équipée d’un **circuit 220 V**, protégé par un coupe-circuit, alimentant un transformateur **220 V / 12 V**.  
Celui-ci permettait d’alimenter l’éclairage, le réfrigérateur, la pompe à eau et la ventilation du chauffage.  

> **Extrait du manuel utilisateur :**  
> “Le circuit électrique  
> Votre caravane est équipée en série d'un circuit électrique 220 V, protégé par un coupe-circuit avec fusibles à cartouche de 16 A qui alimente des prises de courant domestique. Cette installation vous permet de brancher des appareils électriques dont la puissance totale ne devra pas dépasser 3 000 W. En outre, ce circuit alimente aussi un transformateur 220 V/12 V, de 150 VA à 350 VA, suivant les modèles qui rend ainsi disponible un circuit basse tension en 12 V, venant se substituer au circuit 12 V du véhicule tracteur lorsque vous avez la possibilité de brancher votre caravane sur le réseau électrique.  
> Le circuit 12 V alimente l'éclairage intérieur de votre caravane, les pompes électriques, le réfrigérateur et la ventilation du chauffage.  
> L'alimentation en 220 V de votre caravane se fait à partir d'un boîtier électrique situé à l'extérieur, relié au coupe-circuit et au transformateur placé dans un des coffres.  
> La centralisation de tous les circuits a lieu dans le combiné multi-services placé au-dessus du bloc cuisine.  
> Il est muni d'une applique incorporée (ampoule à vis de 12 V 25 W) qui permet un éclairage complet du plan de travail et de l'évier. Dans certains modèles (gamme SUPRA et MAXIMA) il est équipé en série d'une hotte électrique qui rejette vers l'extérieur les vapeurs de cuisson.  
> Chaque circuit possède son interrupteur à voyant lumineux et est protégé par un fusible (voir tableau des fonctions en page 24 et schéma ci-contre).”

![Schéma électrique de la caravane](/projects/Caravane/schema_elec.jpeg)
*Schéma type d’implantation électrique (manuel utilisateur)* ![Schéma de principe du circuit électrique](/projects/Caravane/schema_principe.jpeg)
*Schéma de principe du circuit électrique (manuel utilisateur)* Problème : en achetant la caravane d’occasion, le **circuit 220 V avait déjà été supprimé** (plus de transfo, plus de frigo, plus de pompe, etc.).  
Avantage : il restait uniquement **les interrupteurs, relais et l’éclairage 12 V**, ce qui simplifiait énormément mon projet.  

---

## Conception du système audio (Récupération)

Pour la partie audio, j'ai voulu privilégier le réemploi. J'ai récupéré l'essentiel des composants (haut-parleurs, autoradio, câblage) sur une voiture destinée à la casse. Cela permet d'avoir des équipements nativement prévus pour le 12 V.

![Composants audio de récupération](/projects/Caravane/composants.jpg)
*Vue d'ensemble des composants récupérés pour la conception du système audio*

J'ai sélectionné **6 haut-parleurs** pour répartir le son uniformément, ainsi qu'un autoradio classique. Pour obtenir un son plus propre, j'ai travaillé sur les filtres afin de bien séparer les basses, médiums et aigus.

---

## Installation Électrique et Gestion de l'alimentation

L'un des défis était la gestion de la source d'énergie. L'alimentation peut provenir de deux sources :
1. La **batterie** (autonomie à l'étang, rechargée par panneau solaire).
2. Une **prise extérieure** (secteur 220V).

Pour gérer cela, il y a un **relais de commutation**.

![Branchements électriques et relais](/projects/Caravane/branchements_autoradio.jpg)
*Câblage du système avec le relais de priorité*

Ce relais permet de switcher automatiquement entre les deux sources : la **prise extérieure a la priorité**. Dès qu'elle est branchée, le relais coupe l'alimentation via la batterie pour la préserver. Si aucune prise n'est branchée, le système bascule naturellement sur la batterie.

J'ai également intégré un petit module de contrôle affichant la tension de la batterie en temps réel, couplé à des prises USB pour la recharge.

---

## Résultat et Intégration

L'intégration a été pensée pour être la plus discrète possible. Les 6 haut-parleurs ont été incrustés directement dans les meubles existants.

![Intégration gauche](/projects/Caravane/resultat_gauche.jpg)
*Côté gauche : Intégration des haut-parleurs dans les placards hauts*

Sur la partie droite, on retrouve le "tableau de bord" incrusté dans le meuble :
- L'autoradio.
- Le voltmètre (pour surveiller la batterie).
- Le chargeur de téléphone avec enrouleurs de câbles intégrés.

![Intégration droite](/projects/Caravane/resultat_droite.jpg)
*Côté droit : Autoradio, voltmètre et chargeurs intégrés au mobilier*

Aujourd’hui, la caravane de 1989 est devenue un vrai **petit refuge moderne** :  
- lumière intérieure alimentée en 12 V,  
- musique en Bluetooth grâce à l’autoradio,  
- recharges téléphones faciles,  
- autonomie grâce au panneau solaire.  

On peut désormais profiter de l’étang pleinement, sans avoir à transporter tout le matériel à chaque fois.

![Gif de l'intérieur de la caravane](/projects/Caravane/caravane.gif)