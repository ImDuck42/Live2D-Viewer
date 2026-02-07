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

    // These elements are populated after the changelog content is fetched
    let changelogModal = null;
    let changelogCloseButton = null;

    //==============================================================================
    // CORE FUNCTIONALITY
    //==============================================================================
    // Opens the changelog modal and adds a class to the body to prevent background scrolling
    const openModal = () => {
        if (changelogModal) {
            changelogModal.classList.add('active');
            DOM.body.classList.add('no-scroll');
        }
    };

    // Closes the changelog modal and removes the no-scroll class from the body to restore background scrolling
    const closeModal = () => {
        if (changelogModal) {
            changelogModal.classList.remove('active');
            DOM.body.classList.remove('no-scroll');
        }
    };

    //==============================================================================
    // EVENT HANDLERS & LISTENERS
    //==============================================================================
    // Sets up event listeners including the open button, close button, and the 'Escape' key
    const setupModalEventListeners = () => {
        DOM.siteTitleButton.addEventListener('click', openModal);
        changelogCloseButton.addEventListener('click', closeModal);

        // Add a global keydown listener to close the modal with the 'Escape' key
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && changelogModal?.classList.contains('active')) {
                closeModal();
            }
        });
    };

    //==============================================================================
    // INITIALIZATION
    //==============================================================================
    // Fetches and injects the changelog HTML content from an external file
    const initializeChangelog = async () => {
        if (!DOM.changelogPlaceholder || !DOM.siteTitleButton) {
            console.warn("News Modal: Required DOM elements not found. Feature disabled.");
            return;
        }

        try {
            const response = await fetch(NEWSMODAL_CONFIG.CHANGES_HTML_URL);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            // Injects the entire modal structure from the external file
            DOM.changelogPlaceholder.innerHTML = await response.text();

            // Cache modal elements now that they have been added to the DOM
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
    };

    // Initialize the changelog feature when the DOM is ready
    initializeChangelog();
});