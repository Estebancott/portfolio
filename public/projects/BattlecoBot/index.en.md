---
title: "BattlecoBot – The Art of Upcycling and Mechatronics"
date: "2023-05-17"
cover: "/projects/BattlecoBot/solidworks-model-full.png"
tags: ["Mechatronics", "SolidWorks", "KiCad", "Upcycling", "Arduino", "Robotics"]
---

## The Initial Idea: An Eco-Friendly Combat Robot

For my "Mechatronic Systems Design" course, I wanted a project that was both meaningful and fun. The idea came quickly: why not build an autonomous combat robot? But with a personal constraint: make it **eco-friendly**. Instead of buying new components, I decided to reuse an old rolling base and dig into my collection of electronic parts and old toys to give the hardware a second life.

The **BattlecoBot** project was born! The goal: to design a complete robot, from 3D modeling to a homemade electronic board, capable of fighting autonomously in an arena.

![The BattlecoBot modeled on SolidWorks](/projects/BattlecoBot/solidworks-model-full.png "The complete design of the BattlecoBot, ready for 3D printing.")

---

## From 3D to Electronics: The Birth of a Fighter 🤖

My goal was to master the entire design chain. So I started from scratch to imagine and create every aspect of the robot.

### Body and Weapons, Designed on SolidWorks

I spent a lot of time on **SolidWorks** designing a chassis that would fit perfectly onto my existing rolling base. I modeled a protective shell, but most importantly, I designed the two attack mechanisms:
-   **A Devastating Uppercut**: A powerful servo motor simply rotates an arm on its axis to send opponents flying.
-   **A Direct and Ingenious Punch**: For this weapon, I had fun designing a **crank and slotted lever mechanism** (Whitworth quick return). The goal is to transform the continuous rotation of a small motor into a back-and-forth movement that gives the illusion of a real punch.

![Cross-section view of the internal mechanism](/projects/BattlecoBot/solidworks-coupe.png "Cross-section showing the location of the motors for the strikes.")

The principle is quite clever: the **cyan part (crank)**, driven by the motor, makes the **yellow part (oscillating lever)** oscillate. This oscillation pushes and pulls the **blue slider**, which is forced by the **pink guide** to move back and forth in a straight line. One of the special features of this mechanism is that it creates a forward stroke that is faster than the return stroke, which is perfect for a snappy punch!

![Animation of the punching mechanism](https://i0.wp.com/www.theengineerspost.com/wp-content/uploads/2018/08/Whitworth-Quick-Return-Mechanism.gif?resize=640%2C305&ssl=1 "Animation of the Whitworth type mechanism.")

### A Homemade Electronic Board for an Autonomous Robot

For the robot's brain, I had to create my own PCB with **KiCad**. I designed the schematic around an **ATmega328P** microcontroller (the heart of the Arduino Uno) and routed all the tracks.

This unique board manages all the autonomous logic of the robot:
-   **Vision**: An **ultrasonic sensor** acts as eyes, allowing it to detect an opponent in front of it.
-   **Caution**: An **infrared sensor** is pointed at the ground to detect the edges of the arena and avoid falling.
-   **Propulsion and Weapons**: The board controls the two drive motors as well as the uppercut servo and the punch motor.

![Electronic schematic designed on KiCad](/projects/BattlecoBot/kicad-schema-elec.png "The final electronic schematic of the robot's board.")

![PCB layout designed on KiCad](/projects/BattlecoBot/kicad-pcb-routage.png "The final routing of the robot's electronic board.")

---

## Small Mishaps That Make for Great Learning

A project like this is also a series of challenges to overcome. Here are a few:

-   **Integration on an Existing Base**: The biggest modeling challenge was designing a body that fit perfectly onto the rolling base I had salvaged. I had to be very meticulous in measuring the old toy, modeling all its mounting points, and designing a reliable attachment system so my chassis would graft onto it securely.
![Rolling base of a recycled toy](/projects/BattlecoBot/base-roulante.png "The starting base, a reverse engineering challenge!")

-   **Routing, a Real Puzzle**: Placing all the tracks on the PCB without them crossing was a real headache. I learned to use **vias** to pass from one side of the board to the other and find a clean solution.

-   **Soldering Iron Heat Wave**: I learned an important lesson: always check your iron's temperature! I accidentally melted a track while soldering the microcontroller socket. A good dose of patience and meticulousness was needed to fix that.

-   **The Power-Hungry Servo**: The most educational challenge! Every time the uppercut activated, the servo motor consumed so much current that it caused a voltage drop across the entire board, driving the infrared sensor completely crazy. It's a classic problem that really made me understand the importance of separating control and power circuits.

In the end, even though the BattlecoBot remained a virtual prototype due to lack of time for printing, this project was an incredible adventure that allowed me to touch on all aspects of mechatronics. It is exactly this kind of complete challenge, from CAD to electronics via autonomous programming and concrete problem solving, that I am passionate about.