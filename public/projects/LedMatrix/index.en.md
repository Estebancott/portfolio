---
title: "Connected Screen with LED Matrices and Raspberry Pi"
date: "2025-08-28"
cover: "/projects/LedMatrix/matrix_demo.gif"
tags: ["Raspberry Pi", "LED Matrix", "Python", "Flask", "Hardware"]
---

## Context

I recovered several 64×64 **HUB75** LED matrices (reference [Adafruit 3649](https://www.adafruit.com/product/3649)), and I embarked on creating a **homemade connected screen**.
The idea: daisy-chain 3 panels to form a **large 192×64 pixel screen**, driven by a **Raspberry Pi 3B**, and controllable directly from my smartphone.

The result: a luminous wall that can display **images, animated GIFs, the time, games (pong 🏓 for example), or custom animations**. A real interactive and modular decorative object!

![Gif of the LED screen in operation](/projects/LedMatrix/matrix_demo.gif "Displaying a GIF on the screen")

---

## Hardware Used 🔧

- 🟦 **3 LED matrices 64×64** (a 4th is currently broken, I will try to fix it later with a thermal camera).
- 🟩 **ElectroDragon RGB Matrix Panel Drive Board Shield** → allows easy connection of HUB75 panels to the Pi.
- ![Raspberry Pi Logo](https://upload.wikimedia.org/wikipedia/en/c/cb/Raspberry_Pi_Logo.svg#icon) **Raspberry Pi 3B** (2 A max).
- 🔌 **5V / 15A Power Supply** (≈75 W). Each panel consumes ~4 A at full brightness, so 3 panels + the Pi = ~14 A → I took a margin.

👉 If I repair my 4th panel, I can simply add it **to the end of the chain** to further enlarge the screen.

---

## Hardware Architecture ⚡

Initially, I thought about using the three independent outputs (P0, P1, P2) of the ElectroDragon shield to control each matrix separately.
Finally, I chose to **chain my 3 panels in series on output P0** → result: **a single large 192×64 pixel screen**.

### Advantages of this choice:
- ✅ More display area (images, GIFs, animations, games).
- ✅ Easy extension: just add a panel at the end.
- ✅ Less software complexity (a single "canvas" to manage).

The **[rpi-rgb-led-matrix](https://github.com/hzeller/rpi-rgb-led-matrix)** library natively supports this mode with the parameter `--led-chain=3` (3 panels in line).

---

## Software Control 💻

### Library
I use the famous **rpi-rgb-led-matrix** with its Python bindings ![Python Logo](https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg#icon). It allows sending frame-by-frame content easily to the full screen (192×64).

### Displaying GIFs
To animate a GIF:
1. Load the file with **Pillow (PIL)**.
2. Loop through each frame.
3. Send the image to the full canvas (192×64).
4. Loop again to get a smooth animation.

The refresh rate is high (up to ~100 Hz supported by the lib), so no visible flickering, even on an animated GIF.

### Web Interface
I set up a small **Flask** server on the Pi.
- From my smartphone, I can upload a **GIF or an image**.
- The screen displays it immediately in full screen.
- I even coded a mini **Pong game**, where each player controls their paddle from their smartphone.

---

## Power Supply and Consumption ⚡

Each panel can draw up to **4 A @ 5 V** → that's ~12 A for three matrices.
The Raspberry Pi adds ~2 A → **14 A in total**.
My 5 V 15 A power supply handles the load well, but if I add a 4th panel, I will surely have to switch to a **20 A or more** to keep a margin.

---

## Results ✨

- ✅ A bright and fluid **192×64 pixel LED screen**, perfect for decoration.
- ✅ Flexible control via a **web server** (GIFs, images, games).
- ✅ Controlled consumption thanks to an adapted power supply.
- ✅ Scalable architecture: I can add a 4th panel at the end of the chain very easily.