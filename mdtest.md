# <img src="assets/icon.svg" width="32" height="32" alt="Site Icon" style="vertical-align: text-bottom;"> Live2D Viewer <sub style="font-size: small;"><span style="color: #8c5eff;">v</span>5.0</sub>  

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?logo=opensourceinitiative&logoColor=white)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Preview-success?logo=github)](https://imduck42.github.io/Live2D-Viewer)
[![Code Factor](https://codefactor.io/repository/github/ImDuck42/Live2D-Viewer/badge)](https://codefactor.io/repository/github/ImDuck42/Live2D-Viewer)
[![GitHub stars](https://img.shields.io/github/stars/ImDuck42/Live2D-Viewer?style=flat&color=purple&logo=github&logoColor=white)](https://github.com/ImDuck42/Live2D-Viewer/stargazers)
&nbsp;&nbsp;&nbsp;
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white)](css/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](js/)
&nbsp;&nbsp;&nbsp;
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/ImDuck42/Live2D-Viewer)

A browser-based Live2D viewer designed for interaction with one or more Live2D models.  
Built with vanilla JavaScript, the PIXI.js rendering engine and the Cubism Library.  
This project offers a feature-rich experience without the overhead of heavy frameworks.

It includes a dynamic UI, multi-model support, a GitHub repository explorer for discovering new models, and a "What's New" changelog modal, all wrapped in a clean, responsive design.

## Live Preview

### **[https://imduck42.github.io/Live2D-Viewer](https://imduck42.github.io/Live2D-Viewer)**

<details>
    <summary><strong>Screenshots (Versioned: v5.0)</strong></summary>
    <div>
        <img src="assets/screenshots/PreviewPC.png" width="50%" alt="Desktop preview showing Live2D model controls">
        <img src="assets/screenshots/PreviewMobile.png" height="230px" alt="Mobile preview with responsive layout">
    </div>
    <br>
    <div>
        <img src="assets/screenshots/ExplorerPC.png" width="50%" alt="GitHub explorer on desktop">
        <img src="assets/screenshots/ExplorerMobile.png" height="230px" alt="GitHub explorer on mobile">
    </div>
    <br>
    <div>
        <img src="assets/screenshots/NewsPC.png" width="50%" alt="Changelog modal on desktop">
        <img src="assets/screenshots/NewsMobile.png" height="230px" alt="Changelog modal on mobile">
    </div>
</details>

## Features

| Feature                  | Description                                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Model Upload Support** | Choose the **Upload model** option from the dropdown or drag the compressed zip file onto the canvas.      |
| **Multi-Model Support**  | Load, view, and interact with multiple Live2D models simultaneously on a shared canvas.                    |
| **Intuitive Controls**   | Full model manipulation via **drag** (move), **scroll/pinch** (zoom), and **tap** (trigger motions).       |
| **Dynamic Control Panel**| A real-time UI to manage expressions, motions, and hit-area visibility for the currently selected model.   |
| **GitHub Explorer**      | Browse GitHub repositories, preview model files, and instantly load models using the jsDelivr CDN.         |
| **Changelog Modal**      | A modal that displays the latest project updates from [`changes.html`](assets/changes.html).               |
| **Responsive Design**    | A modern interface that adapts seamlessly to desktop, tablet, and mobile devices.                          |
| **Framework-Free**       | Built with pure, well-organized JavaScript, ensuring a lightweight footprint and a transparent codebase.   |

## Technology Stack

-   **Languages**: HTML5, CSS3, JavaScript (ES6+)
-   **Live2D Integration**: [pixi-live2d-display](https://github.com/guansss/pixi-live2d-display) v0.4.0
-   **Core Rendering**: [PIXI.js](https://pixijs.com) v6.5.10
-   **Core SDK**: Live2D Cubism Core
-   **Icons**: [Font Awesome](https://fontawesome.com) v7.0.1
-   **Zip handling**: [JSZip](https://stuk.github.io/jszip) v3.10.1
-   **CDN**: [jsDelivr](https://www.jsdelivr.com)

## Project Structure

The project is organized into a clean, modular, and maintainable structure:

.
├── Archives_INACTIVE/   # Anything not listed below — best to stay away
├── assets/              # Static assets like icons, screenshots, and changelog
├── css/                 # Component-specific and global stylesheets
├── js/                  # Modular JavaScript files for each feature
├── libs/                # Core Live2D and PIXI.js library files — thanks for the F-rating
├── index.html           # Main application entry point
├── LICENSE              # Project license file
├── README.md            # You are here!
└── Ze_ToDo_List.txt     # The holy grail that is my check list

## Installation

To run the viewer locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ImDuck42/Live2D-Viewer.git
    cd Live2D-Viewer
    ```

2.  **(Recommended) Serve locally:**
    For best results and to avoid potential CORS issues (especially for the changelog modal), run a local web server:
    ```bash
    # If you have Python installed:
    python -m http.server 8000

    # Then open http://localhost:8000 in your browser.

3.  **Quick start (limited):**
    You can open `index.html` directly in a modern browser, but note:  
    - Changelog modal won't work (CORS restrictions when loading external HTML)
    - Some GitHub explorer features may be limited

## Usage

1.  **Load a Model:**
    -   **Via URL:** Paste the URL of a `.model.json` or `.model3.json` file into the input field and click **Load URL**.
    -   **From Defaults:** Choose a pre-configured model from the dropdown and click **Load Selected**.
    -   **Via GitHub Explorer:** Click the **folder icon** to open the explorer, browse a repository, and import a model file directly.

2.  **Upload a Model:**
    -   **Via the dropdown:** Tap the "Default Models" dropdown on the top right, select the "Upload Model" option and select the .zip archive containing your model's files (include all model files: .model3.json, textures, motions, etc.).
    -   **Via drag and drop:** Open the webpage and a file explorer, drag the .zip archive over the canvas area until its border colors purple and drop the file.

3.  **Interact with Models:**
    -   **Select:** Click on any model to select it. The control panel will update to manage that model.
    -   **Move:** Click and drag the selected model to reposition it on the canvas.
    -   **Zoom:** Use your mouse wheel or a pinch gesture on touch devices to zoom.
    -   **Trigger Motions:** Tap on a model's interactive regions (hit areas) to play animations.

4.  **Use the Control Panel:**
    -   **Show Hit Areas:** Toggle the checkbox to visualize the model's interactive zones.
    -   **Expressions & Motions:** Click buttons to apply facial expressions or trigger full-body animations.
    -   **Delete Model:** Click the trash icon to remove the selected model.

## Privacy Note

When using the GitHub Explorer, models are loaded via jsDelivr CDN. This may involve external requests to GitHub and jsDelivr servers. No data is collected or stored by this application itself.

## Contributing

Contributions are welcome! If you have ideas for improvements, new features, or bug fixes, please feel free to:

1.  **Open an Issue** to discuss the change.
2.  **Fork the repository** and submit a **Pull Request** with a clear description of your work.
3.  **Reach out** via the listed contact methods  

**Please adhere to the established code style and organizational principles of the project.**  
(Yes, including the informal comments — they give it character!)

## Contact

Feel free to reach out if you have questions or suggestions:

- **Email**: [imduck420@gmail.com](mailto:imduck420@gmail.com?subject=Help&body=Describe%20your%20issue)
- **GitHub**: [ImDuck42](https://github.com/ImDuck42)
- **Discord**: [Starchasm Nyx (@hu7ao)](https://discord.com/users/977936340186443826)  
  *(Clicking this in Discord will open my profile)*

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for full details.

> **Note on Dependencies:**  
> Since Pixi Live2D Display only works up to Pixi.js 6.5.10 (7.4.3 but without model cursor tracking), this won't be updatable. Sometimes you just gotta work with what you've got!

> **Note on Changelog:**  
> Project updates are managed in [`assets/changes.html`](assets/changes.html). The modal dynamically loads this file to display what's new.