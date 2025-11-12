# <img src="assets/icon.svg" width="32" height="32" alt="Site Icon" style="vertical-align: text-bottom;"> Live2D Viewer <sub style="font-size: small;"><span style="color: #8c5eff;">v</span>4.8</sub>  

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?logo=opensourceinitiative&logoColor=white)](LICENSE)
[![GitHub Pages](https://img.shields.io/github/deployments/ImDuck42/Live2D-Viewer/github-pages?label=Live%20Preview&logo=github)](https://imduck42.github.io/Live2D-Viewer)
[![GitHub stars](https://img.shields.io/github/stars/ImDuck42/Live2D-Viewer?style=flat&color=purple&logo=github&logoColor=white)](https://github.com/ImDuck42/Live2D-Viewer/stargazers)
&nbsp;&nbsp;&nbsp;
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white)](css)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](js)
&nbsp;&nbsp;&nbsp;
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/ImDuck42/Live2D-Viewer)  

A decently performant, browser-based Live2D viewer designed for interaction with one or more Live2D models. Built with vanilla JavaScript and the PIXI.js rendering engine.  
This project offers a feature-rich experience without the overhead of heavy frameworks.

It includes a dynamic UI, multi-model support, a GitHub repository explorer for discovering new models, and a "What's New" changelog modal, all wrapped in a clean, responsive design.

## Live Preview

### **[https://imduck42.github.io/Live2D-Viewer](https://imduck42.github.io/Live2D-Viewer)**

<details>
    <summary><strong>Screenshots (kinda not new)</strong></summary>
    <p align="left">
        <img src="assets/screenshots/PreviewPC.png" width="49%" alt="Preview on Desktop">
        <img src="assets/screenshots/PreviewMobile.png" height="220px" alt="Preview on Mobile">
    </p>
    <p align="left">
        <img src="assets/screenshots/ExplorerPC.png" width="49%" alt="File Explorer on Desktop">
        <img src="assets/screenshots/ExplorerMobile.png" height="220px" alt="File Explorer on Mobile">
    </p>
    <p align="left">
        <img src="assets/screenshots/NewsPC.png" width="49%" alt="Changelog on Desktop">
        <img src="assets/screenshots/NewsMobile.png" height="220px" alt="Changelog on Mobile">
    </p>
</details>

## Features

| Feature                  | Description                                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Multi-Model Support**  | Load, view, and interact with multiple Live2D models simultaneously on a shared canvas.                    |
| **Intuitive Controls**   | Full model manipulation via **drag** (move), **scroll/pinch** (zoom), and **tap** (trigger motions).       |
| **Dynamic Control Panel**| A real-time UI to manage expressions, motions, and hit-area visibility for the currently selected model.   |
| **GitHub Explorer**      | Browse GitHub repositories, preview model files, and instantly load models using the jsDelivr CDN.         |
| **Changelog Modal**      | A sleek, glassmorphism-style modal that displays the latest project updates from `changes.html`.           |
| **Responsive Design**    | A fluid and modern interface that adapts seamlessly to desktop, tablet, and mobile devices.                |
| **Framework-Free**       | Built with pure, well-organized JavaScript, ensuring a lightweight footprint and a transparent codebase.   |

## Technology Stack

-   **Core Rendering**: [PIXI.js](https://pixijs.com/) v6.5.10
-   **Live2D Integration**: [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display) v0.4.0
-   **Core SDK**: Live2D Cubism Core
-   **Languages**: HTML5, CSS3, JavaScript (ES6+)
-   **Icons**: [Font Awesome](https://fontawesome.com/)
-   **CDN**: [jsDelivr](https://www.jsdelivr.com/)

## Project Structure

The project is organized into a clean, modular, and maintainable structure:

```
.
├── assets/              # Static assets like icons, screenshots, and changelog
├── css/                 # Component-specific and global stylesheets
├── js/                  # Modular JavaScript files for each feature
├── libs/                # Core Live2D and PIXI.js library files
├── index.html           # Main application entry point
├── README.md            # You are here!
└── LICENSE              # Project license file
```

## Installation

To run the viewer locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ImDuck42/Live2D-Viewer.git
    cd Live2D-Viewer
    ```

2.  **Open in a browser:**
    You can open `index.html` directly in a modern browser.

3.  **(Recommended) Serve locally:**
    For best results and to avoid potential CORS issues when loading models, run a local web server. 
    ```bash
    # If you have Python 3 installed:
    python3 -m http.server 8000

    # Then open http://localhost:8000 in your browser.
    ```

## Usage

1.  **Load a Model:**
    -   **Via URL:** Paste the URL of a `.model.json` or `.model3.json` file into the input field and click **Load URL**.
    -   **From Defaults:** Choose a pre-configured model from the dropdown and click **Load Selected**.
    -   **Via GitHub Explorer:** Click the **folder icon** to open the explorer, browse a repository, and import a model file directly.

2.  **Interact with Models:**
    -   **Select:** Click on any model to select it. The control panel will update to manage that model.
    -   **Move:** Click and drag the selected model to reposition it on the canvas.
    -   **Zoom:** Use your mouse wheel or a pinch gesture on touch devices to zoom.
    -   **Trigger Motions:** Tap on a model's interactive regions (hit areas) to play animations.

3.  **Use the Control Panel:**
    -   **Show Hit Areas:** Toggle the checkbox to visualize the model's interactive zones.
    -   **Expressions & Motions:** Click buttons to apply facial expressions or trigger full-body animations.
    -   **Delete Model:** Click the trash icon to remove the selected model.

## Contributing

Contributions are welcome! If you have ideas for improvements, new features, or bug fixes, please feel free to:

1.  **Open an Issue** to discuss the change.
2.  **Fork the repository** and submit a **Pull Request** with a clear description of your work.
3.  **Reach out** via the listed contact methods  

**Please adhere to the established code style and organizational principles of the project.**

## Contact

Feel free to reach out if you have questions or suggestions:

- **Email**: [imduck420@gmail](mailto:imduck420@gmail.com?subject=Help&body=Describe%20your%20issue)
- **GitHub**: [ImDuck42](https://github.com/ImDuck42)
- **Discord**: [Starchasm Nyx (@hu7ao)](https://discord.com/users/977936340186443826)

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for full details.

> **Note on Dependencies:**  
> Since Pixi Live2D Display only works up to Pixi.js 6.5.10 (7.4.3 but without model cursor tracking), this won't be updatable.