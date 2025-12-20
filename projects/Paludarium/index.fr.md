---
title: "(WIP) Paludarium connecté : aquarium, terrarium et diorama"
date: "2025-09-07"
cover: "/projects/Paludarium/paludarium_cover.png"
tags: ["Paludarium", "ESP32", "IoT", "DIY", "Work-In-Progress"]
---

## Contexte 🌱🐟

Depuis longtemps, j’ai deux passions :  
- **Les aquariums**, pour leur côté apaisant, hypnotisant, et ce petit bout de nature vivante qu’on garde chez soi.  
- **Les décors type terrarium**, qui viennent ajouter du relief, de la verticalité et une immersion totale dans un paysage miniature.  

Un **paludarium**, c’est l’association parfaite des deux : un aquarium enrichi par un décor naturel et réaliste, avec plantes, cascades, brume et même de petits dioramas pour pousser le réalisme au maximum.  

C’est mon **projet de rêve** ✨, et j’ai décidé d’y aller à fond : sur-mesure, décor travaillé, connecté et intelligent.

---

## Décoration et mise en scène 🎨

### 1. Une grotte au trésor sous le sol
Sous le sable, je veux aménager une **cachette imprimée en 3D**, façon caverne.  
Inspiré par [cette vidéo](https://www.youtube.com/watch?v=wwya_r1b2sg), mais revisitée en **salle au trésor** : petites pièces dorées, un coffre miniature, et une **ampoule LED imitant une torche dorée**. Effet "shiny" garanti !

### 2. Une cascade et de la brume
Impossible d’imaginer un palmarium sans **cascade** :  
- Un écoulement d’eau naturel sur des pierres.  
- Un **brumisateur** pour ajouter un voile de brume flottant au-dessus de l’eau.  
- Inspiration : [exemple 1](https://www.youtube.com/watch?v=4Z_AxRAnoJ0), [exemple 2](https://www.youtube.com/watch?v=370G74cAma0).

### 3. Dioramas réalistes
Pour la touche finale, je veux intégrer des **décors miniatures réalistes** (dioramas) :  
- Maisons sur pilotis, petits lampadaires lumineux.  
- Escaliers menant à un port miniature avec une barque attachée.  
- Lumières intégrées dans les cabanes.  
- Références : [diorama 1](https://www.youtube.com/watch?v=XD7Xwi7d1J0), [diorama 2](https://www.youtube.com/watch?v=Ysgiyn9Ownw).  

L’idée est de créer une **scène complète et vivante**, un décor qui raconte une histoire.

### 4. Zone spéciale “au-dessus de l’eau”

J’ai découvert [ce principe](https://www.youtube.com/shorts/0e8xclMhT6U) qui consiste à retourner un cube en verre au-dessus de l’aquarium pour que l’eau y reste coincée par effet de vide, permettant aux poissons de nager **au-dessus du niveau habituel**.

Dans mon cas, l’idée est d’aller plus loin et de l’intégrer directement dans la structure du **palmarium en trapèze** :  
- Les vitres arrières sont naturellement plus hautes (pour la cascade et le décor).  
- Les vitres avant sont plus basses (au niveau de l’eau).  
- En ajoutant simplement deux vitres à un coin arrière + un toit en verre, je peux créer une **zone fermée** qui retient l’eau au-dessus du niveau normal.  

Le twist, c’est que cette zone sera **camouflée dans le décor**, comme une **montagne ou un tunnel de mine**, permettant d’apercevoir les poissons à travers des “fenêtres naturelles”.  
Une idée que je n'ai jamais vue ailleurs, qui pourrait donner un rendu spectaculaire !

---

## Partie technique ⚙️

Un tel projet ne se limite pas à la déco : je veux un **palmarium connecté et intelligent**.

### Contrôles envisagés :
- 💡 Éclairage (aquarium + décors + sous-marin).  
- 💧 Pompes (filtration + cascades).  
- 🌫️ Brumisateur.  
- 🐟 Distributeur automatique de nourriture.  
- 🌡️ Mesures en temps réel (température, O₂, CO₂, qualité de l’eau).  

Le tout sera consultable et pilotable via :  
- Soit des **boutons intégrés dans le meuble**.  
- Soit un **écran tactile**.  
- Et surtout, un **dashboard web accessible depuis mon smartphone**.

### Architecture IoT
- Cœur du système : un **ESP32-C2** (Zigbee intégré), peu énergivore et parfait pour gérer capteurs + actionneurs.  
- Un **pont IoT (Raspberry Pi)** centralisera toutes mes créations connectées (aquarium, future station météo, etc.), avec intégration possible en **Thread / Zigbee / Matter**.  
- Système évolutif → chaque module pourra être ajouté au dashboard.  

### Optimisations prévues
- **Une seule pompe** qui gère à la fois la filtration et la cascade.  
- Ajout de **vannes en Y** aux entré et sortie de la pompe pour :  
  - Basculer entre remplissage de l’aquarium et vidage (changement d’eau facilité).  
  - Alterner entre prise d’eau dans l’aquarium ou externe (eau osmosée).  
- Gestion automatique de l’éclairage pour éviter les excès (et donc les algues).  
- Distributeur d'eau osmosée dans le meuble pour changer l'eau de l'aquarium quand il faudra. Mais aussi pour arroser les plantes de mon logement.

---

## Inspirations et références 📺

- [Cachette sous le sol type grotte](https://www.youtube.com/watch?v=wwya_r1b2sg)  
- [Cascade + brume](https://www.youtube.com/watch?v=4Z_AxRAnoJ0)  
- [Paludarium avec brumisateur](https://www.youtube.com/watch?v=370G74cAma0)  
- [Diorama détaillé](https://www.youtube.com/watch?v=XD7Xwi7d1J0)  
- [Exemple complet (cascade, plantes, lumières)](https://www.youtube.com/watch?v=Ysgiyn9Ownw)  
- [Cube d’eau inversé (zone au-dessus de l’eau)](https://www.youtube.com/shorts/0e8xclMhT6U)  

---

## Conclusion (WIP) 🚧

C’est sans doute mon **projet le plus ambitieux** jusqu’ici, autant par la **créativité décorative** que par la **complexité technique**.  
Il mêle **nature, technologie, imagination et électronique** dans un seul meuble.  

Il est encore en **phase de conception et d’expérimentation**, mais je suis persuadé que le résultat sera spectaculaire : un palmarium unique, décoré dans les moindres détails, et totalement **connecté**.  

---

## 📷 Illustrations (à venir)

- Interface de supervision.  
- Photos des décors.   
- Test de la cascade + brume.  
- Distributeur d'eau osmosé.