---
title: "(WIP) Connected Paludarium: Aquarium, Terrarium and Diorama"
date: "2025-09-07"
cover: "/projects/Paludarium/paludarium_cover.png"
tags: ["Paludarium", "ESP32", "IoT", "DIY", "Work-In-Progress"]
---

## Context 🌱🐟

For a long time, I have had two passions:
- **Aquariums**, for their soothing, mesmerizing nature, and that little piece of living nature kept at home.
- **Terrarium-style decors**, which add depth, verticality, and total immersion in a miniature landscape.

A **paludarium** is the perfect combination of both: an aquarium enriched by a natural and realistic decor, with plants, waterfalls, mist, and even small dioramas to push realism to the max.

This is my **dream project** ✨, and I decided to go all in: custom-made, elaborate decor, connected and intelligent.

---

## Decoration and Staging 🎨

### 1. A Treasure Cave Under the Soil
Under the sand, I want to set up a **3D printed hideout**, cave-style.
Inspired by [this video](https://www.youtube.com/watch?v=wwya_r1b2sg), but revisited as a **treasure room**: small gold coins, a miniature chest, and an **LED bulb mimicking a golden torch**. "Shiny" effect guaranteed!

### 2. A Waterfall and Mist
Impossible to imagine a paludarium without a **waterfall**:
- Natural water flow over stones.
- A **mister** to add a veil of mist floating above the water.
- Inspiration: [example 1](https://www.youtube.com/watch?v=4Z_AxRAnoJ0), [example 2](https://www.youtube.com/watch?v=370G74cAma0).

### 3. Realistic Dioramas
For the final touch, I want to integrate **realistic miniature scenery** (dioramas):
- Houses on stilts, small luminous lampposts.
- Stairs leading to a miniature harbor with a tethered boat.
- Lights integrated into the huts.
- References: [diorama 1](https://www.youtube.com/watch?v=XD7Xwi7d1J0), [diorama 2](https://www.youtube.com/watch?v=Ysgiyn9Ownw).

The idea is to create a **complete and living scene**, a decor that tells a story.

### 4. Special "Above Water" Zone

I discovered [this principle](https://www.youtube.com/shorts/0e8xclMhT6U) which consists of inverting a glass cube above the aquarium so that water stays trapped inside by vacuum effect, allowing fish to swim **above the usual level**.

In my case, the idea is to go further and integrate it directly into the structure of the **trapezoidal paludarium**:
- The rear windows are naturally higher (for the waterfall and decor).
- The front windows are lower (at water level).
- By simply adding two panes to a rear corner + a glass roof, I can create a **closed zone** that holds water above the normal level.

The twist is that this zone will be **camouflaged in the decor**, like a **mountain or a mine tunnel**, allowing glimpses of the fish through "natural windows".
An idea I haven't seen anywhere else, which could give a spectacular result!

---

## Technical Part ⚙️

Such a project is not limited to decoration: I want a **connected and intelligent paludarium**.

### Envisioned Controls:
- 💡 Lighting (aquarium + decors + submarine).
- 💧 Pumps (filtration + waterfalls).
- 🌫️ Mister.
- 🐟 Automatic food dispenser.
- 🌡️ Real-time measurements (temperature, O₂, CO₂, water quality).

Everything will be viewable and controllable via:
- Either **buttons integrated into the cabinet**.
- Or a **touch screen**.
- And above all, a **web dashboard accessible from my smartphone**.

### IoT Architecture
- System core: an **ESP32-C2** (Zigbee integrated), low power and perfect for managing sensors + actuators.
- An **IoT bridge (Raspberry Pi)** will centralize all my connected creations (aquarium, future weather station, etc.), with possible integration in **Thread / Zigbee / Matter**.
- Scalable system → each module can be added to the dashboard.

### Planned Optimizations
- **A single pump** that manages both filtration and the waterfall.
- Addition of **Y-valves** at the pump inlet and outlet to:
  - Switch between filling the aquarium and emptying it (easier water changes).
  - Alternate between water intake from the aquarium or external (RO water).
- Automatic lighting management to avoid excess (and therefore algae).
- RO water dispenser in the cabinet to change the aquarium water when needed. But also to water the plants in my home.

---

## Inspirations and References 📺

- [Cave-style hideout under the soil](https://www.youtube.com/watch?v=wwya_r1b2sg)
- [Waterfall + mist](https://www.youtube.com/watch?v=4Z_AxRAnoJ0)
- [Paludarium with mister](https://www.youtube.com/watch?v=370G74cAma0)
- [Detailed diorama](https://www.youtube.com/watch?v=XD7Xwi7d1J0)
- [Complete example (waterfall, plants, lights)](https://www.youtube.com/watch?v=Ysgiyn9Ownw)
- [Inverted water cube (above water zone)](https://www.youtube.com/shorts/0e8xclMhT6U)

---

## Conclusion (WIP) 🚧

This is undoubtedly my **most ambitious project** to date, as much for the **decorative creativity** as for the **technical complexity**.
It mixes **nature, technology, imagination, and electronics** in a single piece of furniture.

It is still in the **design and experimentation phase**, but I am convinced that the result will be spectacular: a unique paludarium, decorated to the smallest detail, and totally **connected**.

---

## 📷 Illustrations (Coming Soon)

- Supervision interface.
- Photos of the decors.
- Test of the waterfall + mist.
- RO water dispenser.