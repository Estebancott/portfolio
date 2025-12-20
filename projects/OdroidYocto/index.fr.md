---
title: "Caméra Tcp/Ip, Linux embarqué sur Odroid-C2 avec Yocto"
date: "2024-10-28"
cover: "/projects/OdroidYocto/Odroid_C2.jpg"
tags: ["Yocto", "Linux Embarqué", "Odroid", "C++", "TCP/IP", "Protocole Réseau"]
---

## Contexte

Le projet consistait à faire communiquer une carte **Odroid C2** (sous Linux embarqué construit avec **Yocto** ![Logo Yocto](https://upload.wikimedia.org/wikipedia/commons/0/00/Yocto_Project_logo.svg#icon)) et un **PC** en TCP/IP.  
L’Odroid est équipé :
- d’une **caméra**,  
- d’un **bouton physique**,  
- d’un **buzzer**.  

L’objectif était d'avoir une caméra connectée permettant :  
1. d’envoyer en continu le **flux vidéo** de la caméra vers le PC,  
2. de gérer dynamiquement la **résolution** (donc le framerate),  
3. de **détecter des QR codes** sur le PC et renvoyer l’information à l’Odroid,  
4. d’enregistrer une **image locale** lorsqu’on appuie sur le bouton de l’Odroid,  
5. de faire “jouer” à l’Odroid le contenu d’un QR code en **morse** via le buzzer.  

Tout cela repose sur un **protocole bilatéral** : chaque image envoyée par l’Odroid attend une réponse du PC avant d’envoyer la suivante. Le défi principal a donc été la **gestion des cas particuliers**.  

---

## Architecture générale

- **Odroid-C2** : serveur TCP, capture les images de la caméra, applique la logique du protocole (frames, bouton, buzzer).
- **PC (C++/OpenCV)** : client TCP, reçoit le flux vidéo, affiche, permet d’interagir (changer la résolution, sauvegarder une image, analyser les QR codes).

Communication simplifiée :
- Odroid → envoie soit :  
  - `f` → “frame” → puis une **image**
  - `s` → “save” → puis une **image**, le PC va comprendre qu'il faut qu'il l'a sauvegarde
- PC → répond soit :  
  - `o` → “ok reçu” → l’Odroid peut envoyer la suivante  
  - `r` → “change résolution” → l’Odroid stoppe le flux et attend la nouvelle résolution  
  - `q` → “QR code détecté” → le PC renvoie le contenu du QR, que l’Odroid joue en morse  

---

## Partie 1 — Odroid sous Linux embarqué (Yocto)

### Objectifs
- Construire une image Linux légère avec **Yocto**, adaptée à l’Odroid.
- Démarrer automatiquement le serveur TCP au boot.
- Gérer les périphériques : caméra, bouton, buzzer, Ethernet.

### Stack Yocto
- **poky/meta-poky** : base de Yocto.  
- **meta-oe** : recettes supplémentaires (OpenEmbedded).  
- **meta-odroid** : support de la carte.  
- **meta-g1-vlsi401** : mes recettes custom (appli + configuration réseau).  

Exemple : ajout de mon application et de son service systemd au build.

```ini
# odroid-app.service
[Unit]
Description=Serveur TCP Odroid
After=network.target

[Service]
ExecStart=/usr/bin/odroid-app
Restart=always
```
---

## Partie 2 — Application côté PC (C++)

Le PC reçoit le flux vidéo de l’Odroid, l’affiche, et propose des interactions.

### Fonctionnalités
- **Choix de la résolution** : en appuyant sur `R`, le PC envoie `r`, l’Odroid arrête le flux, attend la nouvelle résolution, puis reprend l’envoi.  
  Plus la résolution est élevée → plus l’image est lourde → plus le **framerate** diminue.  

- **Détection de QR codes** : grâce à **OpenCV ![Logo OpenCV](https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg#icon) + ZXing**, le PC analyse chaque frame.  
  - Si un QR est trouvé → il est détouré en rouge dans l’affichage.  
  - Le contenu du QR est renvoyé à l’Odroid (`q + contenu`), qui le joue en **morse** via le buzzer.  

- **Enregistrement d’une image** : si l’utilisateur appuie sur le bouton de l’Odroid, alors au lieu d’envoyer une frame classique `f + image`, la carte envoie `s + image`.  
  Le PC sait alors qu’il doit **sauvegarder cette image** en local.  

⚠️ Défi technique : gestion du **rebond** et des **appuis longs** sur le bouton, pour éviter de sauvegarder plusieurs images par erreur.  

---

## Le protocole de communication

Le cœur du projet : un protocole simple mais extensible.  

### Principe
- Chaque envoi suit la schéma :  
  Odroid → `f + image`  
  PC → `o` (ok, envoie la suite).  

- Cas particuliers :  
  - **Sauvegarde** : `s + image` → PC enregistre l’image.  
  - **Changement de résolution** : PC envoie `r` au lieu de `o`, l’Odroid stoppe le flux et attend la nouvelle résolution.  
  - **QR code** : PC envoie `q + contenu`, l’Odroid traduit le contenu en morse.  

### Avantages
- Le protocole est **bilatéral** → chaque action est confirmée.  
- Il est **modulaire** → on peut facilement ajouter de nouvelles commandes.  
- Il est **robuste** → gestion des erreurs et états particuliers (pas de blocages).  

---

## Résultats

- **Flux vidéo** fonctionnel et ajustable en résolution.  
- **QR codes** détectés et joués en morse sur le buzzer.  
- **Sauvegarde d’images** fiable via le bouton.  
- Un **protocole TCP évolutif**, capable de supporter de nouvelles fonctionnalités.  

---

## Ce que j’ai appris

- Construire une image Linux sur mesure avec **Yocto** (couches, recettes, services).  
- Gérer un protocole réseau bilatéral tolérant aux erreurs.  
- L’importance de la **synchronisation** entre deux systèmes (images + commandes).  
- Intégrer hardware (caméra, bouton, buzzer) et software (PC + traitement vidéo).  

---