---
title: "Personal Portfolio in React"
date: "2025-07-26"
cover: "/projects/Portfolio/figma.png"
tags: ["React", "Vite", "Sass", "GitHub Actions", "DNS", "HTTPS", "CI/CD"]
---

## Project Context

This portfolio was designed to be a modern and dynamic showcase of my skills and achievements. The goal was to create a **fully responsive**, **fast**, and **easy-to-maintain** website, where adding new projects would be as simple as possible.

This project was initially structured with the help of my friend **Yael Busser**, whose work you can find on [his GitHub profile](https://github.com/YaelBusser). I then took over and evolved the project to adapt it to my specific needs and integrate new features.

---

## Technologies Used 🚀

To build this site, I chose a set of modern and high-performance tools:

-   ![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg#icon) **React**: The heart of the application, for a reactive and modular user interface.
-   ![JavaScript Logo](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png#icon) **JavaScript (ES6+)**: For all application logic.
-   ![Vite Logo](https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg#icon) **Vite**: An ultra-fast build tool that significantly sped up development time.
-   ![Sass Logo](https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg#icon) **Sass**: For structured, maintainable, and powerful **CSS**.
-   ![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg#icon) **gray-matter** & **marked**: To parse Markdown files and dynamically transform their content into HTML.

---

## Deployment and Going Live ⚙️

The deployment of this portfolio is entirely automated. This was a point close to my heart to guarantee fast and reliable updates.

### CI/CD with GitHub Actions ![GitHub Actions Logo](https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg#icon)
I set up a Continuous Integration and Deployment (CI/CD) workflow with **GitHub Actions**. On every `push` to the `master` branch, the process takes care of:
1.  **Building** the application for production.
2.  **Automatically deploying** the result to GitHub Pages.

### Domain Configuration and Security
To make the site accessible via a professional and secure URL:
-   **DNS**: I configured the DNS records of my domain name **estebancott.dev** to point to GitHub Pages servers.
-   **HTTPS**: Site security is ensured by an SSL certificate provided by GitHub. I then configured the repository to **force HTTPS usage**, guaranteeing an encrypted and secure connection for all visitors.

---

## Challenges and Learnings

-   **Dynamizing Projects**: The main challenge was not having to modify the source code to add a project. The solution was to dynamically read Markdown files from the `public` folder. This required setting up a parsing system with `gray-matter` to extract metadata (title, date, tags...) and content.

-   **Animations and Transitions**: I spent time refining CSS animations (like transitions on project cards or the navigation menu) to make the user experience smoother and more pleasant, without sacrificing performance.

---

## 📷 Illustrations

![Figma mock-up of the portfolio](/projects/Portfolio/figma.png "Initial mock-up on Figma")