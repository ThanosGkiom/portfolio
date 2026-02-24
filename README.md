# My Personal Portfolio 🚀

> A modern, responsive personal portfolio website built to master the Vue.js ecosystem.

![Project Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview+Coming+Soon)

## 📖 About The Project

This project marks my transition from Vanilla JavaScript to a modern component-based framework. It serves not only as a showcase of my work but as a playground for learning Vue 3's core concepts, the Composition API, and strict architectural patterns.

Built with performance and maintainability in mind, this portfolio leverages a feature-based architecture and Scss 7-1 pattern to keep code clean and scalable.

## ✨ Core Features

*   **Reactive UI Components:** leveraging Vue 3's reactivity system for smooth updates without manual DOM manipulation.
*   **Modular Architecture:** Organized using a *Service-Composable-Feature* pattern for maximum scalability.
*   **Custom Design System:** Hand-crafted styles using **SCSS** (7-1 architecture) instead of reliance on pre-built UI libraries.
*   **Type Safety:** Fully typed with **TypeScript** to catch errors early and improve developer experience.
*   **Global State Management:** Utilizing **Pinia** for efficient state handling across components.
*   **Interactive Maps:** Integrated **Leaflet** for dynamic map visualizations.
*   **Backend Integration:** Connects to a dedicated **NestJS** backend for secure contact form submissions and email notifications.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Vue.js 3](https://vuejs.org/) (Composition API) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Sass/SCSS](https://sass-lang.com/) |
| **State Management** | [Pinia](https://pinia.vuejs.org/) |
| **Routing** | [Vue Router](https://router.vuejs.org/) |
| **Maps** | [Leaflet](https://leafletjs.com/) |
| **Backend** | [NestJS](https://nestjs.com/) |

## 🧠 What I Learned

Transitioning from Vanilla JS to Vue.js has been an enlightening journey. Here are my key takeaways:

*   **Declarative vs. Imperative:** I learned to stop telling the browser *how* to update the DOM (manipulating elements) and start telling it *what* the state should look like.
*   **The Composition API:** Moving effectively from the Options API mental model to `<script setup>` allowed me to group related logic together, making the code much more readable and reusable.
*   **Component Communication:** Deepened my understanding of "Props Down, Events Up" and when to reach for global state (Pinia) versus local state.
*   **Structured Styling:** Implementing the 7-1 SCSS architecture taught me the importance of organizing styles to prevent the dreaded "CSS Spaghetti."

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
*   Node.js (v20 or higher recommended)
*   npm or pnpm
*   [Portfolio Backend](https://github.com/ThanosGkiom/portfolio-backend.git) (Required for contact form functionality)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/ThanosGkiom/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🗺️ Future Improvements

This project is a living document of my growth. Here is what I plan to add next:

- [ ] **Unit Testing:** Integrate [Vitest](https://vitest.dev/) to ensure component reliability.
- [ ] **Animations:** enhance UX with [Vue Transition](https://vuejs.org/guide/built-ins/transition.html) and GSAP.
- [ ] **Headless CMS:** Connect to a CMS for easier content management.
- [ ] **Accessibility:** Perform a full audit to ensure WCAG compliance.
- [ ] **CI/CD:** Set up automated deployment pipelines.

---

*Built with ❤️ by [Thanos](https://github.com/ThanosGkiom).*
