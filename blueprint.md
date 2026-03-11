# Blueprint: Lotto Number Generator

## Overview

This project is a web-based lottery number generator. It provides users with a set of unique, randomly generated numbers for lottery draws. The application is built using modern, framework-less web technologies (HTML, CSS, JavaScript) and emphasizes a clean, responsive, and visually appealing user interface.

## Design and Features (Current)

### Initial Version

*   **Core Functionality:**
    *   Generates a set of 6 unique random numbers between 1 and 45.
    *   Displays the generated numbers to the user.
*   **User Interface:**
    *   A central "Generate Numbers" button to initiate the lottery draw.
    *   A display area where the selected numbers appear.
    *   A history section to view previously generated number sets.
    *   **Theme Toggle:** A dedicated button to switch between Dark and Light modes.
*   **Visual Design:**
    *   **Theme:** Support for both Light (default) and Dark modes using CSS variables.
    *   **Color Palette:** A vibrant and energetic color scheme, adapted for both themes.
    *   **Typography:** Expressive fonts (Poppins) to create a clear visual hierarchy.
    *   **Layout:** A responsive, mobile-first design that works across all screen sizes.
    *   **Effects:**
        *   Subtle noise texture on the background.
        *   Multi-layered drop shadows for depth.
        *   "Glow" effects on interactive elements like the button.
*   **Technology:**
    *   **Web Components:** A `<lotto-ball>` custom element is used to display each number.
    *   **Modern CSS:** Utilizes CSS Variables and `data-theme` attribute for theme switching.
    *   **Persistence:** Saves user theme preference in `localStorage`.

## Plan for Current Change

**Objective:** Implement Dark Mode and White (Light) Mode with a toggle functionality and persist user preference.

**Steps:**

1.  **Update `style.css`:**
    *   Define CSS variables for both themes in `:root` and `[data-theme="dark"]`.
    *   Apply transitions for smooth theme switching.
    *   Style the new theme toggle button.
2.  **Update `index.html`:**
    *   Add the theme toggle button and icon container.
3.  **Update `main.js`:**
    *   Implement logic to detect current theme, toggle between themes, update UI icons, and save/load preference from `localStorage`.
4.  **Deployment:**
    *   Push the updated code to the GitHub repository.

