---
title: "ENSIM'elec President – Leading a Project for Eurobot 2024"
date: "2024-06-01"
cover: "/projects/EnsimElec2024/stratégieFinale.gif"
tags: ["Leadership", "Project Management", "Robotics", "STM32", "C++", "Python", "Raspberry Pi"]
---

## From Member to President: A New Dimension

After a first year of discovery at **ENSIM'elec**, I decided to take the plunge and take over the presidency of the association for the 2023-2024 season. My goal was simple: to lead our team as far as possible in the Eurobot competition, while creating a collaborative and efficient work environment.

This year, the theme was **"Farming Mars"**: our robots had to colonize Mars by cultivating plants and deploying solar panels. An exciting challenge that would require ingenuity mechanically, electronically, and software-wise.

![Eurobot 2024 Game Table](/projects/EnsimElec2024/tableDeJeu.png "The Martian playing field of the Eurobot 2024 competition.")

---

## My Role as President: Conductor of a Complex Project

Being president is much more than technical work. I had to wear several hats to ensure the project moved in the right direction.

### Project and Team Management

To structure our work, I implemented a clear organization, inspired by agile methods:
-   **Role Definition**: We created three departments (mechanical, electronic, software) with managers for each.
-   **Planning**: I established a precise schedule with clear milestones and development sprints to keep the pace throughout the year.
-   **Collaborative Workflow**: Using **Git** became the standard for code sharing, and we set up a **VSCode server** on the robot so everyone could work on the same base.

### Administrative and Financial Tasks

I also managed all the "invisible" but essential aspects of the project:
-   **Budget Management**: Tracking expenses, looking for sponsors, and ordering equipment.
-   **Communication**: Representing the association to the school and partners.
-   **Logistics**: Organizing trips and participation in the French Cup.

---

## Our Martian Robot: Design and Strategy 🤖

Our strategy, refined over the months, consisted of prioritizing the most point-profitable tasks, as seen in this simulation of our ideal path.

![Robot strategy in action](/projects/EnsimElec2024/stratégieFinale.gif "Simulation of the game strategy to score maximum points.")

### The Brain: An STM32 and Raspberry Pi Duo

The heart of our robot was a two-headed system:
-   **The Control Board (Low Level)**: An **STM32 Nucleo-F446RE** programmed in **C++** managed all real-time tasks: motor control loops and odometry. Its role is to obey orders and take the robot to the requested x, y position.
-   **The Decision Board (High Level)**: A **Raspberry Pi 4**, programmed in **Python**, served as the strategic "brain". Thanks to a **Lidar**, it detected opponents and made game decisions, as seen in this demo.

![GIF of opponent detection with Lidar](/projects/EnsimElec2024/detectionAdversaire.gif "The Lidar identifies and isolates the opposing robot (in red).")

### The Actuators: Our Martian Farmer Tools

To interact with game elements, we designed several custom mechanisms. The most complex was our main arm, composed of an elevator and a gripper.

Here is the elevator in action, it allowed the arm to go up and down to reach different planters.
![GIF of the robot elevator](/projects/EnsimElec2024/ascenceurEnAction.gif "Test of the elevator mechanism.")

At the end of this elevator was our gripper, designed to grab plants with precision. You can see it working in this test:
![GIF of the robot gripper](/projects/EnsimElec2024/pinceEnAction.gif "Test of the gripper mechanism.")

Finally, for the solar panels, a simple actuator capable of turning them one by one. Here it is in operation:
![GIF of the solar panel actuator](/projects/EnsimElec2024/actionneurPanneauSolaireEnAction.gif "Deployment of a solar panel.")

### The PAMIs: Our Little Autonomous Explorers

We also had 4 "Independent Mobile Actuators" (PAMIs), mini-robots whose mission was to deploy at the end of the match to "pollinate" plants. Here they are in action, ours are white (this is the Twitch replay of a cup match):

![Animation of a PAMI](/projects/EnsimElec2024/pamiEnFonctionement.gif "The PAMI deploys and moves autonomously.")

---

## My Technical Role: Involvement on All Fronts

In addition to my role as president, I remained very involved technically, trying to help in all departments. I notably worked on:
-   **The Raspberry Pi Brain**: I developed the main Python code that reads and interprets strategies from a JSON file. This allowed us to modify the robot's behavior without recompiling all the code, as seen in this strategy file example.

![Example of JSON strategy file](/projects/EnsimElec2024/exempleStratégie.png "Structure of a strategy file for the robot.")

-   **Motor Control**: I implemented the PID control system to guarantee precise control of the robot's speed and position, a crucial point for the reliability of our movements.

![Schematic of the control system](/projects/EnsimElec2024/schemaAsservissement.png "Motor control architecture with PIDs.")

-   **An Indispensable HMI**: I developed a graphical interface on a touch screen. This tool was our savior during tests: it allowed us to visualize sensor data in real-time and launch the robot in a match by choosing the desired strategy.

![GIF of the debugging graphical interface](/projects/EnsimElec2024/InterfaceGraphique.gif "The HMI in action, allowing robot control.")

-   **Modular Electronics**: I designed a **power board** to properly distribute voltages (5V, 12V) to all components, as well as a **motherboard** onto which all other boards (STM32, Raspberry Pi, power) plugged in. This modular approach greatly facilitates maintenance and future robot upgrades.

![Assembly of electronic boards](/projects/EnsimElec2024/assemblageDesCarte.jpg "3D view of the stack of custom boards.")

-   **PAMI Optimization**: I participated in the choice of components and the design of the custom motherboard for our mini-robots, with the main constraint of making it as small as possible to maximize the number of PAMIs in the start zone.

![Cross-section view of a PAMI](/projects/EnsimElec2024/pamiEnCoupe.png "3D design of a PAMI, optimized for compactness.")

---

## Review of an Intense Year: Between Pride and Frustration

This year as president was an incredible human and technical experience, and by far the most difficult I have lived. Managing a team, a budget, a schedule, while trying to keep hands in the code was a constant challenge. Seeing our robot come to life and compete in the French Cup was an immense pride and the greatest reward for the team.

However, this role was not easy mentally. It demanded huge personal sacrifices and daily investment. I wanted to get even more involved technically to push the project further, but I was very often caught up by administrative tasks: grant applications, communication, order management... It was sometimes frustrating. I was constantly asked for help on all fronts, and despite the presence of a board, I often felt alone in carrying the project, which made the workload overwhelming.

Nevertheless, this experience taught me a lot about myself, about project management, and about the importance of communication.

![Photo of the final robot at the competition](/projects/EnsimElec2024/robotFinal.jpg "Our robot, ready to compete!")