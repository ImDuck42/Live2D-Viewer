'use strict';

//==============================================================================
// INITIALIZATION AND DOMContentLoaded
//==============================================================================
document.addEventListener('DOMContentLoaded', () => {
    //==============================================================================
    // CONFIGURATION AND DOM ELEMENT CACHE
    //==============================================================================
    const NEWSMODAL_CONFIG = {
        CHANGES_HTML_URL: window.CONFIG?.CHANGES_HTML_URL || 'assets/changes.html',
    };

    const DOMElementsModal = {
        siteTitleButton: document.getElementById('site-title-button'),
        changelogPlaceholder: document.getElementById('changelog-placeholder'),
        changelogModal: null,
        changelogCloseButton: null,
    };

    //==============================================================================
    // CHANGELOG LOADING AND SETUP
    //==============================================================================
    async function loadAndSetupChangelog() {
        if (!DOMElementsModal.changelogPlaceholder || !DOMElementsModal.siteTitleButton) {
            console.warn("News Modal: Changelog placeholder or site title button not found. Feature disabled.");
            return;
        }

        try {
            const response = await fetch(NEWSMODAL_CONFIG.CHANGES_HTML_URL);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${NEWSMODAL_CONFIG.CHANGES_HTML_URL}: ${response.status} ${response.statusText}`);
            }
            const htmlContent = await response.text();
            DOMElementsModal.changelogPlaceholder.innerHTML = htmlContent;

            // Cache modal elements after content is loaded
            DOMElementsModal.changelogModal = document.getElementById('changelog-modal');
            DOMElementsModal.changelogCloseButton = document.getElementById('changelog-close-button');

            setupChangelogModalInteractions();

        } catch (error) {
            console.error("News Modal: Error loading changelog content:", error);
            if (DOMElementsModal.siteTitleButton) {
                DOMElementsModal.siteTitleButton.title = 'Changelog unavailable';
            }
        }
    }

    //==============================================================================
    // MODAL INTERACTION SETUP
    //==============================================================================
    function setupChangelogModalInteractions() {
        if (DOMElementsModal.siteTitleButton && DOMElementsModal.changelogModal && DOMElementsModal.changelogCloseButton) {
            const openModal = () => {
                if (DOMElementsModal.changelogModal) {
                    DOMElementsModal.changelogModal.classList.add('active');
                    document.body.classList.add('no-scroll');
                }
            };
            const closeModal = () => {
                if (DOMElementsModal.changelogModal) {
                    DOMElementsModal.changelogModal.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            };

            DOMElementsModal.siteTitleButton.addEventListener('click', openModal);
            DOMElementsModal.changelogCloseButton.addEventListener('click', closeModal);

            // Escape key to close modal
            window.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && DOMElementsModal.changelogModal?.classList.contains('active')) {
                    closeModal();
                }
            });
        } else {
            console.warn("News Modal: UI elements not found after loading. Interactions may be incomplete.");
        }
    }

    // Initialize the changelog functionality
    loadAndSetupChangelog();
});