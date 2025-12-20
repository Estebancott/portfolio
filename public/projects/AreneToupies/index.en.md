---
title: "Electronic Tops Arena Inspired by Beyblade"
date: "2022-04-09"
cover: "/projects/AreneToupies/arene-video-preview.jpg"
tags: ["Arduino", "Electronics", "C++", "Xbee", "3D Printing", "SolidWorks"]
---

## Project Context

Inspired by the famous 2000s cartoon, this project, carried out as a team during my 2nd year at ENSIM, aims to recreate and modernize Beyblade battles. The goal was to design a fully functional combat arena where two players face off in an interactive game with several phases, combining skill and strategy.

![Photo of the arena in operation](/projects/AreneToupies/arene-video-preview.jpg "The combat arena and its control consoles.")

---

## Concept and Game Phases 🎮

The game was designed to be a complete experience taking place in two distinct phases:

1.  **Launch Phase**: A **Guitar Hero** style rhythm mini-game where players must press the right buttons at the right time. The score determines the launch speed of the motorized tops into the arena.
2.  **Combat Phase**: While the tops are clashing, each player can activate a unique **speed boost** to gain the upper hand over their opponent. They must then use a **joystick to control the speed** of the motors inside the tops. The battle ends when one of the tops stops spinning.

![Game flow diagram](/projects/AreneToupies/game-flowchart.png "Game flowchart")

---

## Technical and Hardware Design 🛠️

Realizing this project required designing and integrating numerous electronic and mechanical components, programmed in **C++** within the Arduino ecosystem.

### The Combat Arena: The Brain of the Game

The arena is the control center, driven by an **Arduino Mega** board. It manages:
-   **The Launchers**: Two powerful motors, controlled via an **L298N** module, whose speed is adjusted by the players' Guitar Hero scores.
-   **The Control Stations**: Each player has illuminated buttons and **Neopixel** LED strips for the "Guitar Hero" phase, as well as a joystick and a button for the boost.
-   **Wireless Communication**: An **Xbee** module in transmitter mode sends signals to activate the corresponding top's boost. It can also receive signals if a top is no longer spinning, to determine the winner and trigger an end-game animation.
-   **Sound Atmosphere**: A buzzer plays the Beyblade cartoon theme song at the start of the game for total immersion.

![Electronic schematic of the arena](/projects/AreneToupies/arene-schema.png "Fritzing schematic of the arena electronics")

### The Electronic Tops: Autonomous Fighters

Each top is a compact and robust embedded system, modeled on **SolidWorks** and 3D printed. It integrates:
-   **Microcontroller**: An **Arduino Nano** board, chosen for its small size.
-   **Wireless Reception**: An **Xbee** module listens on the serial port (`Serial`) for boost commands sent by the arena. It also sends a signal when the top stops spinning.
-   **Boost Actuator**: An internal motor, powered by a dedicated battery and controlled by a relay, activates upon receiving the boost signal to give a decisive advantage.
-   **Motion Detection**: An **MMA8452Q** accelerometer is used to detect the end of the combat. The code reads values on the X, Y, and Z axes and compares them to a threshold value to determine if the top is still rotating or if it has stopped.

![Electronic schematic of a top](/projects/AreneToupies/toupie-schema.png "Fritzing schematic of the embedded electronics in a top")

---

## Challenges and Learnings

This project was an excellent opportunity to confront theory with practice and solve concrete problems as a team.

-   **Power Management**: One of the first challenges was the lack of power for the launcher motors, which caused the Arduino board to shut down. This issue was resolved by using an **L298N** power module (dual H-bridge) and then a relay system to provide dedicated and sufficient power to the motors.

-   **Wireless Boost**: The main challenge was activating a motor inside an object in full rotation. The software solution was successfully achieved thanks to wireless communication via **Xbee** modules, but the physical challenge of balancing the top with this extra motor remains complex. The envisioned solution was clearly not physically possible as well. Trying to give rotational acceleration to a top by spinning its tip is physically impossible. A gyroscope would have been needed, as in satellites.

-   **Mechanical Design**: From assembling 3D printed parts to managing last-minute breakages, the mechanical part required numerous iterations and great adaptability.

This project helped solidify cross-functional skills in electronics (Arduino, motor control, wireless communication), computer science (C++ programming), and 3D design (SolidWorks), providing me with a solid background for future engineering challenges.