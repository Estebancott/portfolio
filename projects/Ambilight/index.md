---
title: "Ambilight DIY pour un Setup Gaming Immersif"
date: "2025-06-06"
cover: "/projects/Ambilight/ambilight-final.gif"
tags: ["DIY", "Électronique", "Wemos D1", "WLED", "Hyperion"]
---

## La mission : offrir un Ambilight à mon petit frère

En juin dernier, j'ai eu envie de faire un cadeau un peu spécial à mon petit frère pour améliorer son setup gaming : un système **Ambilight** entièrement fait maison ! Pour ceux qui ne connaissent pas, c'est une technologie qui projette les couleurs affichées à l'écran sur le mur derrière, ce qui donne une impression d'immersion, que ce soit en jeu ou en regardant un film.

En m'inspirant d'un excellent tutoriel de la chaîne YouTube Ypsol, je me suis lancé dans l'aventure. Mon but n'était pas juste de suivre les étapes, mais de créer une solution propre, bien intégrée et durable.

---

## Le Cerveau et les Lumières 💡

Le cœur du système est un microcontrôleur **Wemos D1 MINI**, une petite carte de développement basée sur l'ESP8266 qui a l'avantage d'avoir le Wi-Fi intégré. C'est lui qui va piloter une bande de LEDs adressables collée à l'arrière de l'écran.

Mais plutôt que de tout connecter avec des fils volants, j'ai voulu faire les choses proprement.

### Une carte électronique sur mesure

J'ai conçu et fabriqué une petite carte électronique qui sert de hub central. Elle permet de connecter proprement tous les éléments :
-   Le **Wemos D1 MINI**.
-   L'alimentation qui arrive du PC.
-   Le bandeau de LEDs.

L'avantage, c'est que tout est branché avec des connecteurs. Si on a besoin de débrancher l'écran ou de faire une modification, tout se démonte facilement sans avoir à couper ou ressouder quoi que ce soit.

![Photo de la carte électronique custom](/projects/Ambilight/carte-electronique-ambilight.jpeg "La carte de connexion que j'ai conçue et soudée.")

### L'astuce : une alimentation directe depuis le PC

Un des points dont je suis le plus fier, c'est l'alimentation. Pas besoin de bloc secteur externe qui traîne par terre ! J'ai utilisé un connecteur d'alimentation **PATA/SATA 6 broches** que j'ai directement branché sur un port libre de l'alimentation Corsair de son PC.

Cette solution est super pratique car elle me fournit directement deux tensions parfaitement stabilisées :
-   **Du 12V** pour alimenter le bandeau de LEDs.
-   **Du 3,3V** pour alimenter le Wemos D1 MINI.

C'est propre, invisible et ça s'allume en même temps que l'ordinateur !

---

## Le Logiciel : le Duo WLED et Hyperion 🖥️

La partie logicielle est gérée par deux outils open source :

1.   **WLED** : C'est un firmware que j'ai flashé sur le Wemos D1 MINI. Il le transforme en un contrôleur de LEDs, accessible via une interface web sur le réseau Wi-Fi. C'est lui qui reçoit les informations de couleur et qui les envoie aux LEDs.
2.  **Hyperion** : C'est un logiciel que j'ai installé sur le PC de mon frère. Son rôle est de "capturer" en temps réel les couleurs sur les bords de l'écran, de calculer la couleur moyenne, et d'envoyer ces informations à WLED via le réseau.

L'association des deux fonctionne à merveille et offre une réactivité impressionnante.

---

## Le Résultat Final : une Immersion Totale !

Et voilà le travail ! Après quelques réglages dans Hyperion pour ajuster la fluidité et la luminosité des couleurs, le résultat est bluffant. L'ambilight réagit instantanément à ce qui se passe à l'écran, que ce soit dans un jeu rapide ou un film. Mon petit frère était ravi, et moi, très content d'avoir mené ce petit projet de A à Z.

Voici ce que ça donne en action :

![GIF de l'Ambilight en fonctionnement](/projects/Ambilight/ambilight-final.gif "L'Ambilight en action sur l'écran de mon petit frère.")