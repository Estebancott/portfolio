---
title: "DIY Ambilight for an Immersive Gaming Setup"
date: "2025-06-06"
cover: "/projects/Ambilight/ambilight-final.gif"
tags: ["DIY", "Electronics", "Wemos D1", "WLED", "Hyperion"]
---

## The Mission: Gifting an Ambilight to My Little Brother

Last June, I wanted to give my little brother a special gift to upgrade his gaming setup: a completely homemade **Ambilight** system! For those who don't know, this is a technology that projects the colors displayed on the screen onto the wall behind it, creating a sense of immersion, whether gaming or watching a movie.

Inspired by an excellent tutorial from the YouTube channel Ypsol, I embarked on the adventure. My goal wasn't just to follow steps, but to create a clean, well-integrated, and durable solution.

---

## The Brains and the Lights 💡

The heart of the system is a **Wemos D1 MINI** microcontroller, a small development board based on the ESP8266 which has the advantage of having built-in Wi-Fi. It drives a strip of addressable LEDs stuck to the back of the screen.

But rather than connecting everything with loose wires, I wanted to do things properly.

### A Custom Circuit Board

I designed and built a small electronic board that serves as a central hub. It allows for a clean connection of all elements:
-   The **Wemos D1 MINI**.
-   The power supply coming from the PC.
-   The LED strip.

The advantage is that everything is plugged in with connectors. If we need to unplug the screen or make a modification, everything disassembles easily without having to cut or resolder anything.

![Photo of the custom electronic board](/projects/Ambilight/carte-electronique-ambilight.jpeg "The connection board I designed and soldered.")

### The Trick: Direct Power from the PC

One of the points I am proudest of is the power supply. No need for an external power brick lying on the floor! I used a **6-pin PATA/SATA** power connector that I plugged directly into a free port on his PC's Corsair power supply.

This solution is super practical because it directly provides me with two perfectly stabilized voltages:
-   **12V** to power the LED strip.
-   **3.3V** to power the Wemos D1 MINI.

It's clean, invisible, and turns on at the same time as the computer!

---

## The Software: The WLED and Hyperion Duo 🖥️

The software side is managed by two open-source tools:

1.   **WLED**: This is a firmware that I flashed onto the Wemos D1 MINI. It transforms it into an LED controller, accessible via a web interface over Wi-Fi. It receives color information and sends it to the LEDs.
2.  **Hyperion**: This is software I installed on my brother's PC. Its role is to "capture" colors at the edges of the screen in real-time, calculate the average color, and send this information to WLED over the network.

The combination of the two works wonderfully and offers impressive responsiveness.

---

## The Final Result: Total Immersion!

And there you have it! After a few settings in Hyperion to adjust fluidity and color brightness, the result is stunning. The Ambilight reacts instantly to what is happening on screen, whether in a fast-paced game or a movie. My little brother was delighted, and I was very happy to have led this small project from A to Z.

Here is what it looks like in action:

![GIF of the Ambilight in operation](/projects/Ambilight/ambilight-final.gif "The Ambilight in action on my little brother's screen.")