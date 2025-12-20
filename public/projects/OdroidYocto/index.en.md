---
title: "TCP/IP Camera, Embedded Linux on Odroid-C2 with Yocto"
date: "2024-10-28"
cover: "/projects/OdroidYocto/Odroid_C2.jpg"
tags: ["Yocto", "Embedded Linux", "Odroid", "C++", "TCP/IP", "Network Protocol"]
---

## Context

The project consisted of making an **Odroid C2** board (running embedded Linux built with **Yocto** ![Yocto Logo](https://upload.wikimedia.org/wikipedia/commons/0/00/Yocto_Project_logo.svg#icon)) communicate with a **PC** via TCP/IP.
The Odroid is equipped with:
- a **camera**,
- a **physical button**,
- a **buzzer**.

The goal was to have a connected camera allowing:
1. sending the **video stream** continuously from the camera to the PC,
2. dynamically managing the **resolution** (and thus the framerate),
3. **detecting QR codes** on the PC and sending the information back to the Odroid,
4. saving a **local image** when the button on the Odroid is pressed,
5. having the Odroid "play" the content of a QR code in **Morse code** via the buzzer.

All this relies on a **bilateral protocol**: each image sent by the Odroid awaits a response from the PC before sending the next one. The main challenge was therefore **handling edge cases**.

---

## General Architecture

- **Odroid-C2**: TCP server, captures camera images, applies protocol logic (frames, button, buzzer).
- **PC (C++/OpenCV)**: TCP client, receives video stream, displays it, allows interaction (change resolution, save an image, analyze QR codes).

Simplified communication:
- Odroid → sends either:
  - `f` → "frame" → then an **image**
  - `s` → "save" → then an **image**, the PC will understand it needs to save it
- PC → responds either:
  - `o` → "ok received" → the Odroid can send the next one
  - `r` → "change resolution" → the Odroid stops the stream and waits for the new resolution
  - `q` → "QR code detected" → the PC sends back the QR content, which the Odroid plays in Morse

---

## Part 1 — Odroid on Embedded Linux (Yocto)

### Objectives
- Build a lightweight Linux image with **Yocto**, adapted to the Odroid.
- Automatically start the TCP server at boot.
- Manage peripherals: camera, button, buzzer, Ethernet.

### Yocto Stack
- **poky/meta-poky**: Yocto base.
- **meta-oe**: Additional recipes (OpenEmbedded).
- **meta-odroid**: Board support.
- **meta-g1-vlsi401**: My custom recipes (app + network configuration).

Example: adding my application and its systemd service to the build.

```ini
# odroid-app.service
[Unit]
Description=Odroid TCP Server
After=network.target

[Service]
ExecStart=/usr/bin/odroid-app
Restart=always
```

## Part 2 — PC Side Application (C++)

The PC receives the video stream from the Odroid, displays it, and offers interactions.

### Features
- **Resolution Choice**: by pressing `R`, the PC sends `r`, the Odroid stops the stream, waits for the new resolution, then resumes sending.
  Higher resolution → heavier image → lower **framerate**.

- **QR Code Detection**: thanks to **OpenCV ![OpenCV Logo](https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg#icon) + ZXing**, the PC analyzes each frame.
  - If a QR is found → it is outlined in red on the display.
  - The QR content is sent back to the Odroid (`q + content`), which plays it in **Morse** via the buzzer.

- **Image Saving**: if the user presses the Odroid button, then instead of sending a classic `f + image` frame, the board sends `s + image`.
  The PC then knows it must **save this image** locally.

⚠️ Technical challenge: handling **debouncing** and **long presses** on the button, to avoid saving multiple images by mistake.

---

## The Communication Protocol

The heart of the project: a simple but extensible protocol.

### Principle
- Each transmission follows the schema:
  Odroid → `f + image`
  PC → `o` (ok, send next).

- Special cases:
  - **Save**: `s + image` → PC saves the image.
  - **Change Resolution**: PC sends `r` instead of `o`, the Odroid stops the stream and waits for the new resolution.
  - **QR Code**: PC sends `q + content`, the Odroid translates the content into Morse.

### Advantages
- The protocol is **bilateral** → every action is confirmed.
- It is **modular** → new commands can be easily added.
- It is **robust** → error handling and special states (no deadlocks).

---

## Results

- **Video Stream** functional and adjustable in resolution.
- **QR Codes** detected and played in Morse on the buzzer.
- **Image Saving** reliable via the button.
- A **scalable TCP protocol**, capable of supporting new features.

---

## What I Learned

- Building a custom Linux image with **Yocto** (layers, recipes, services).
- Managing an error-tolerant bilateral network protocol.
- The importance of **synchronization** between two systems (images + commands).
- Integrating hardware (camera, button, buzzer) and software (PC + video processing).