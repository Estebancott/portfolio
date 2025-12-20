---
title: "Battlécobot – L'art de la récup' et de la mécatronique"
date: "2023-05-17"
cover: "/projects/BattlecoBot/solidworks-model-full.png"
tags: ["Mécatronique", "SolidWorks", "KiCad", "Upcycling", "Arduino", "Robotique"]
---

## L'idée de départ : un robot de combat éco-responsable

Pour mon cours de "Conception de Systèmes Mécatroniques", je voulais un projet qui ait du sens et qui soit amusant. L'idée m'est vite venue : pourquoi ne pas construire un robot de combat autonome ? Mais avec une contrainte personnelle : le faire en mode **éco-responsable**. Plutôt que d'acheter des composants neufs, j'ai décidé de réutiliser une vieille base roulante et de piocher dans ma collection de pièces électroniques et de vieux jouets pour donner une seconde vie au matériel.

Le projet **Battlécobot** était né ! L'objectif : concevoir un robot complet, de la modélisation 3D à la carte électronique maison, capable de se battre de manière autonome dans une arène.

![Le Battlécobot modélisé sur SolidWorks](/projects/BattlecoBot/solidworks-model-full.png "Le design complet du Battlécobot, prêt pour l'impression 3D.")

---

## De la 3D à l'électronique : la naissance d'un combattant 🤖

Mon but était de maîtriser toute la chaîne de conception. Je suis donc parti de zéro pour imaginer et créer chaque aspect du robot.

### Le corps et les armes, pensés sur SolidWorks

J'ai passé beaucoup de temps sur **SolidWorks** pour designer un châssis qui viendrait s'adapter parfaitement sur ma base roulante existante. J'ai modélisé une coque protectrice, mais surtout, j'ai conçu les deux mécanismes d'attaque :
-   **Un uppercut dévastateur** : Un servomoteur puissant fait simplement tourner un bras sur son axe pour envoyer les adversaires valser.
-   **Un coup de poing direct et ingénieux** : Pour cette arme, je me suis amusé à concevoir un mécanisme de **bielle-manivelle avec une coulisse oscillante**. Le but est de transformer la rotation continue d'un petit moteur en un mouvement de va-et-vient qui donne l'illusion d'un vrai coup de poing.

![Vue en coupe du mécanisme interne](/projects/BattlecoBot/solidworks-coupe.png "Vue en coupe montrant l'emplacement des moteurs pour les coups.")

Le principe est assez malin : la **pièce cyan (manivelle)**, entraînée par le moteur, fait osciller la **pièce jaune (coulisse oscillante)**. Cette oscillation pousse et tire le **coulisseau bleu**, qui est forcé par le **guidage rose** à avancer et reculer en ligne droite. Une des particularités de ce mécanisme, c'est qu'il crée un "aller" plus rapide que le "retour", ce qui est parfait pour un coup de poing vif !

![Animation du mécanisme de coup de poing](https://i0.wp.com/www.theengineerspost.com/wp-content/uploads/2018/08/Whitworth-Quick-Return-Mechanism.gif?resize=640%2C305&ssl=1 "Animation du mécanisme de type Whitworth.")

### Une carte électronique maison pour un robot autonome

Pour le cerveau du robot, il fallait créer sa propre PCB avec **KiCad**. J'ai designé le schéma autour d'un microcontrôleur **ATmega328P** (le cœur des Arduino Uno) et j'ai fait le routage de toutes les pistes.

Cette carte unique gère toute la logique autonome du robot :
-   **La Vision** : Un **capteur à ultrasons** joue le rôle des yeux, lui permettant de détecter un adversaire en face de lui.
-   **La Prudence** : Un **capteur infrarouge** est pointé vers le sol pour détecter les bords de l'arène et éviter de tomber.
-   **La Propulsion et les Armes** : La carte contrôle les deux moteurs de déplacement ainsi que le servomoteur de l'uppercut et le moteur du coup de poing.

![Schéma elec conçue sur KiCad](/projects/BattlecoBot/kicad-schema-elec.png "Le schéma elec final de la carte électronique du robot.")

![Schéma de la PCB conçue sur KiCad](/projects/BattlecoBot/kicad-pcb-routage.png "Le routage final de la carte électronique du robot.")

---

## Les petits imprévus qui font tout l'apprentissage

Un projet comme celui-ci, c'est aussi une suite de défis à relever. En voici quelques-uns :

-   **L'intégration sur une base existante** : Le plus grand défi de modélisation a été de concevoir un corps qui s'adapte parfaitement à la base roulante que j'avais récupérée. Il a fallu être très minutieux dans les mesures du vieux jouet, modéliser tous ses points de fixation et concevoir un système d'attache fiable pour que mon châssis vienne s'y greffer solidement.
![Base roulante d'un jouet recyclé](/projects/BattlecoBot/base-roulante.png "La base de départ, un défi de rétro-ingénierie !")

-   **Le routage, un vrai puzzle** : Placer toutes les pistes sur la PCB sans qu'elles se croisent a été un vrai casse-tête. J'ai appris à utiliser des **vias** pour passer d'une face à l'autre de la carte et trouver une solution propre.

-   **Le coup de chaud du fer à souder** : J'ai appris une leçon importante : toujours vérifier la température de son fer ! J'ai accidentellement fait fondre une piste en soudant le support du microcontrôleur. Une bonne dose de patience et de minutie a été nécessaire pour réparer ça.

-   **Le servo gourmand en énergie** : Le défi le plus formateur ! Chaque fois que l'uppercut s'activait, le servomoteur consommait tellement de courant qu'il provoquait une chute de tension sur toute la carte, ce qui rendait le capteur infrarouge complètement fou. C'est un problème classique qui m'a vraiment fait comprendre l'importance de séparer les circuits de commande et de puissance.

Au final, même si le Battlécobot est resté à l'état de prototype virtuel par manque de temps pour l'impression, ce projet a été une aventure incroyable qui m'a permis de toucher à tous les aspects de la mécatronique. C'est exactement ce genre de défi complet, de la CAO à l'électronique en passant par la programmation autonome et la résolution de problèmes concrets, qui me passionne.