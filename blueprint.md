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
*   **Visual Design:**
    *   **Theme:** A modern and clean aesthetic with a premium feel.
    *   **Color Palette:** A vibrant and energetic color scheme.
    *   **Typography:** Expressive fonts to create a clear visual hierarchy.
    *   **Layout:** A responsive, mobile-first design that works across all screen sizes.
    *   **Effects:**
        *   Subtle noise texture on the background.
        *   Multi-layered drop shadows for depth.
        *   "Glow" effects on interactive elements like the button.
*   **Technology:**
    *   **Web Components:** A `<lotto-ball>` custom element is used to display each number, encapsulating its style and behavior.
    *   **Modern CSS:** Utilizes CSS Variables, `:has()`, and modern color spaces for a flexible and maintainable stylesheet.
    *   **ES Modules:** JavaScript is organized into modules for better code structure.

## Plan for Current Change

**Objective:** Transform the initial "Hello World" page into a fully functional and visually appealing Lotto Number Generator application.

**Steps:**

1.  **Update `index.html`:**
    *   Set the page title to "Lotto Number Generator".
    *   Create the main application structure, including a header, a controls section, a display area for the numbers, and a history section.
    *   Link the CSS and JavaScript files.

2.  **Update `style.css`:**
    *   Implement the full visual design as outlined above.
    *   Style all the new elements from `index.html`, including the container, button, number display area, and history list.
    *   Create the styles for the `<lotto-ball>` web component.
    *   Ensure the layout is responsive and looks great on mobile devices.

3.  **Update `main.js`:**
    *   Define the `<lotto-ball>` custom element class. This component will be responsible for rendering a single lottery number with its associated styling.
    *   Implement the core number generation logic.
    *   Add an event listener to the "Generate Numbers" button to trigger the number generation and display update.
    *   Implement the logic to add newly generated numbers to the history list.

