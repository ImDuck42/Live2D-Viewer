const CHANGES_URL = 'assets/changes.html';

const init = async () => {
  const titleBtn    = document.getElementById('title-btn');
  const placeholder = document.getElementById('changelog-target');

  if (!titleBtn || !placeholder) {
    console.warn('News Modal: Required DOM elements not found. Feature disabled.');
    return;
  }

  try {
    const response = await fetch(CHANGES_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);

    // Inject the fetched HTML; the modal and close button live inside it.
    placeholder.innerHTML = await response.text();

    const modal    = document.getElementById('changelog-modal');
    const closeBtn = document.getElementById('changelog-close-button');

    if (!modal || !closeBtn) throw new Error('Changelog modal inner elements not found.');

    const open = () => {
      modal.classList.add('active');
      document.body.classList.add('no-scroll');
    };

    const close = () => {
      modal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    };

    titleBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('active')) close();
    });

  } catch (error) {
    console.error('News Modal: Error loading changelog:', error);
    titleBtn.title = 'Changelog unavailable';
  }
};

init();