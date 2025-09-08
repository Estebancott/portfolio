---
title: "Écran connecté avec matrices LED et Raspberry Pi"
date: "2025-08-28"
cover: "/projects/LedMatrix/matrix_demo.gif"
tags: ["Raspberry Pi", "LED Matrix", "Python", "Flask", "Hardware"]
---

## Contexte

J’ai récupéré plusieurs matrices LED 64×64 **HUB75** (référence [Adafruit 3649](https://www.adafruit.com/product/3649)), je me suis lancé dans la création d’un **écran connecté maison**.  
L’idée : chaîner 3 panneaux pour former un **grand écran de 192×64 pixels**, piloté par une **Raspberry Pi 3B**, et contrôlable directement depuis mon smartphone.

Le résultat : un mur lumineux qui peut afficher **des images, des GIFs animés, l’heure, des jeux (pong 🏓 par exemple), ou encore des animations personnalisées**. Un vrai objet de déco interactif et modulable !

![Gif de l’écran LED en fonctionnement](/projects/LedMatrix/matrix_demo.gif "Affichage d’un GIF sur l’écran")

---

## Matériel utilisé 🔧

- 🟦 **3 matrices LED 64×64** (une 4e est HS pour l’instant, j’essaierai de la réparer plus tard avec une caméra thermique).  
- 🟩 **Shield ElectroDragon RGB Matrix Panel Drive Board** → permet de connecter facilement les panneaux HUB75 au Pi.  
- ![Logo Raspberry Pi](https://upload.wikimedia.org/wikipedia/en/c/cb/Raspberry_Pi_Logo.svg#icon) **Raspberry Pi 3B** (2 A max).  
- 🔌 **Alimentation 5V / 15A** (≈75 W). Chaque panneau consomme ~4 A en pleine luminosité, donc 3 panneaux + le Pi = ~14 A → j’ai pris une marge.  

👉 Si je répare mon 4e panneau, je pourrai simplement l’ajouter **en bout de chaîne** pour agrandir encore l’écran.

---

## Architecture matérielle ⚡

Au départ, je pensais utiliser les trois sorties indépendantes (P0, P1, P2) du shield ElectroDragon pour contrôler chaque matrice séparément.  
Finalement, j’ai choisi de **chaîner mes 3 panneaux en série sur la sortie P0** → résultat : **un seul grand écran 192×64 pixels**.  

### Avantages de ce choix :
- ✅ Plus de surface d’affichage (images, GIFs, animations, jeux).  
- ✅ Extension facile : il suffit de rajouter un panneau au bout.  
- ✅ Moins de complexité logicielle (un seul “canvas” à gérer).  

La librairie **[rpi-rgb-led-matrix](https://github.com/hzeller/rpi-rgb-led-matrix)** supporte nativement ce mode avec le paramètre `--led-chain=3` (3 panneaux en ligne).  

---

## Pilotage logiciel 💻

### Librairie
J’utilise la célèbre **rpi-rgb-led-matrix** avec ses bindings Python ![Logo Python](https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg#icon). Elle permet d’envoyer facilement du contenu image par image vers l’écran complet (192×64).

### Affichage de GIFs
Pour animer un GIF :
1. Charger le fichier avec **Pillow (PIL)**.  
2. Boucler sur chaque frame.  
3. Envoyer l’image au canvas complet (192×64).  
4. Reboucler pour obtenir une animation fluide.  

Le taux de rafraîchissement est élevé (jusqu’à ~100 Hz supportés par la lib), donc aucun scintillement visible, même sur un GIF animé.

### Interface Web
J’ai mis en place un petit serveur **Flask** sur le Pi.  
- Depuis mon smartphone, je peux uploader un **GIF ou une image**.  
- L’écran l’affiche immédiatement en plein écran.  
- J’ai même codé un mini-**jeu Pong**, où chaque joueur contrôle sa raquette depuis son smartphone.  

---

## Alimentation et consommation ⚡

Chaque panneau peut tirer jusqu’à **4 A @ 5 V** → soit ~12 A pour trois matrices.  
Le Raspberry Pi ajoute ~2 A → **14 A au total**.  
Mon bloc d’alimentation 5 V 15 A tient bien la charge, mais si j’ajoute un 4e panneau, je devrai sûrement passer sur une **20 A ou plus** pour garder de la marge.  

---

## Résultats ✨

- ✅ Un **écran LED 192×64 pixels** lumineux et fluide, parfait en déco.  
- ✅ Pilotage flexible via un **serveur web** (GIFs, images, jeux).  
- ✅ Consommation maîtrisée grâce à une alimentation adaptée.  
- ✅ Architecture évolutive : je peux rajouter un 4e panneau en bout de chaîne très facilement.  