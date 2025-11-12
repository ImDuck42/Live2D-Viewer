'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //==============================================================================
    // CONSTANTS & CONFIGURATION
    //==============================================================================

    const NEWSMODAL_CONFIG = {
        CHANGES_HTML_URL: 'assets/changes.html',
    };

    //==============================================================================
    // DOM ELEMENT CACHE
    //==============================================================================

    const DOM = {
        siteTitleButton: document.getElementById('site-title-button'),
        changelogPlaceholder: document.getElementById('changelog-placeholder'),
        body: document.body,
    };

    // These are populated after the content is fetched
    let changelogModal = null;
    let changelogCloseButton = null;

    //==============================================================================
    // INITIALIZATION
    //==============================================================================

    // Fetches and injects the changelog HTML, then sets up interactions.
    async function initializeChangelog() {
        if (!DOM.changelogPlaceholder || !DOM.siteTitleButton) {
            console.warn("News Modal: Required DOM elements not found. Feature disabled.");
            return;
        }

        try {
            const response = await fetch(NEWSMODAL_CONFIG.CHANGES_HTML_URL);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            // Injects the entire modal structure from an external file.
            DOM.changelogPlaceholder.innerHTML = await response.text();

            // Cache modal elements now that they exist in the DOM
            changelogModal = document.getElementById('changelog-modal');
            changelogCloseButton = document.getElementById('changelog-close-button');

            if (changelogModal && changelogCloseButton) {
                setupModalEventListeners();
            } else {
                throw new Error("Changelog modal content loaded, but inner elements not found.");
            }

        } catch (error) {
            console.error("News Modal: Error loading changelog content:", error);
            DOM.siteTitleButton.title = 'Changelog unavailable';
        }
    }

    //==============================================================================
    // CORE FUNCTIONALITY
    //==============================================================================

    // Opens the changelog modal and prevents background scrolling.
    const openModal = () => {
        if (changelogModal) {
            changelogModal.classList.add('active');
            DOM.body.classList.add('no-scroll');
        }
    };

    // Closes the changelog modal and restores background scrolling.
    const closeModal = () => {
        if (changelogModal) {
            changelogModal.classList.remove('active');
            DOM.body.classList.remove('no-scroll');
        }
    };

    //==============================================================================
    // EVENT HANDLERS & LISTENERS
    //==============================================================================

    // Sets up all event listeners for modal interactions.
    function setupModalEventListeners() {
        DOM.siteTitleButton.addEventListener('click', openModal);
        changelogCloseButton.addEventListener('click', closeModal);

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && changelogModal?.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // Start the process
    initializeChangelog();
});