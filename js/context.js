import { log }                                   from './logger.js';
import { DOM, state }                            from './config.js';
import { toggleHitAreaVisibility }               from './interaction.js';
import { deleteSelectedModel, setSelectedModel } from './model.js';

// ===========================================================================
// Screenshot
// ===========================================================================

export const takeScreenshot = () => {
  if (!state.app?.renderer) {
    log('WARN', 'Screenshot: renderer not ready.');
    return;
  }

  state.app.renderer.render(state.app.stage);

  const canvas = DOM.canvas;
  try {
    const dataURL   = canvas.toDataURL('image/png');
    const link      = document.createElement('a');
    const modelName = state.selectedModel?.internalModel?.settings?.name ?? 'live2d';
    const safeName  = modelName.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase();
    link.download   = `${safeName}_screenshot.png`;
    link.href       = dataURL;
    link.click();
    log('UI', `Screenshot saved: ${link.download}`);
  } catch (error) {
    log('ERROR', 'Screenshot failed (possible CORS taint):', error);
    alert('Screenshot failed. The model may be served from a cross-origin URL that prevents canvas export.');
  }
};

// ===========================================================================
// Keyboard shortcuts
// ===========================================================================

const SHORTCUTS = [
  { key: 'Delete',    description: 'Delete selected model' },
  { key: 'Backspace', description: 'Delete selected model' },
  { key: 's',         description: 'Screenshot'            },
  { key: 'h',         description: 'Toggle hit areas'      },
  { key: 'Tab',       description: 'Cycle models'          },
];

export const SHORTCUTS_LIST = SHORTCUTS;

const handleKeyDown = (event) => {
  const tag = document.activeElement?.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return;

  switch (event.key) {
    case 'Delete':
    case 'Backspace':
      if (state.selectedModel) {
        event.preventDefault();
        deleteSelectedModel();
        log('UI', 'Keyboard: deleted selected model.');
      }
      break;

    case 's':
      event.preventDefault();
      takeScreenshot();
      break;

    case 'h':
      if (!DOM.hitareasToggle.disabled) {
        event.preventDefault();
        DOM.hitareasToggle.checked = !DOM.hitareasToggle.checked;
        toggleHitAreaVisibility();
        log('UI', `Keyboard: hit areas ${DOM.hitareasToggle.checked ? 'on' : 'off'}.`);
      }
      break;

    case 'Tab':
      if (state.models.length > 1) {
        event.preventDefault();
        const sorted  = [...state.models].sort((a, b) => a.appModelId - b.appModelId);
        const current = sorted.findIndex((model) => model === state.selectedModel);
        const dir     = event.shiftKey ? -1 : 1;
        const next    = (current + dir + sorted.length) % sorted.length;
        setSelectedModel(sorted[next]);
      }
      break;

    default:
      break;
  }
};

export const initKeyboardShortcuts = () => {
  document.addEventListener('keydown', handleKeyDown);
  log('SYSTEM', 'Keyboard shortcuts initialized.');
};

// ===========================================================================
// Context detection
// ===========================================================================

const getContext = () => {
  if (document.getElementById('changelog-modal')?.classList.contains('active')) {
    return 'changelog';
  }
  if (DOM.explorerModal?.classList.contains('active')) {
    const previewOpen = DOM.filePreviewContainer?.classList.contains('active');
    return previewOpen ? 'explorer-preview' : 'explorer';
  }
  return 'canvas';
};

// ===========================================================================
// Menu item builders per context
// ===========================================================================

const canvasItems = () => {
  const hasModel   = !!state.selectedModel;
  const multiModel = state.models.length > 1;

  return [
    {
      label:    'Screenshot Canvas (S)',
      icon:     'fa-camera',
      disabled: !hasModel,
      action:   takeScreenshot,
    },
    { divider: true },
    {
      label:    'Toggle Hit Areas (H)',
      icon:     'fa-crosshairs',
      disabled: !hasModel,
      action:   () => {
        if (!DOM.hitareasToggle.disabled) {
          DOM.hitareasToggle.checked = !DOM.hitareasToggle.checked;
          toggleHitAreaVisibility();
        }
      },
    },
    {
      label:    'Delete Model (Del)',
      icon:     'fa-trash',
      disabled: !hasModel,
      action:   deleteSelectedModel,
    },
    { divider: true },
    {
      label:    'Next Model (Tab)',
      icon:     'fa-arrow-right',
      disabled: !multiModel,
      action:   () => {
        if (!multiModel) return;
        const sorted  = [...state.models].sort((a, b) => a.appModelId - b.appModelId);
        const current = sorted.findIndex((model) => model === state.selectedModel);
        setSelectedModel(sorted[(current + 1) % sorted.length]);
      },
    },
    {
      label:    'Previous Model (Shift+Tab)',
      icon:     'fa-arrow-left',
      disabled: !multiModel,
      action:   () => {
        if (!multiModel) return;
        const sorted  = [...state.models].sort((a, b) => a.appModelId - b.appModelId);
        const current = sorted.findIndex((model) => model === state.selectedModel);
        setSelectedModel(sorted[(current - 1 + sorted.length) % sorted.length]);
      },
    },
  ];
};

const explorerItems = () => {
  const ownerInput = DOM.ownerInput?.value?.trim();
  const repoInput  = DOM.repoInput?.value?.trim();
  const hasRepo    = !!(ownerInput && repoInput);
  const isLoaded   = !!DOM.explorerModal?.querySelector('.breadcrumbs')?.children.length;

  return [
    {
      label:    'Reload Repository',
      icon:     'fa-rotate-right',
      disabled: !hasRepo,
      action:   () => DOM.loadRepoBtn?.click(),
    },
    {
      label:    'Go to Root',
      icon:     'fa-house',
      disabled: !isLoaded,
      action:   () => {
        DOM.breadcrumbs?.querySelector('nav, a')?.click();
      },
    },
    { divider: true },
    {
      label:  'Close Explorer',
      icon:   'fa-xmark',
      action: () => DOM.closeExplorerBtn?.click(),
    },
  ];
};

const explorerPreviewItems = () => {
  const importBtn = DOM.filePreviewContainer?.querySelector('.fe-import-model-btn-preview');
  const openLink  = DOM.filePreviewContainer?.querySelector('.fe-open-link');
  const filename  = DOM.previewFileName?.textContent?.trim();

  return [
    {
      label:    filename ? `Import "${filename}"` : 'Import Model',
      icon:     'fa-file-import',
      disabled: !importBtn,
      action:   () => importBtn?.click(),
    },
    {
      label:    'Open in New Tab',
      icon:     'fa-arrow-up-right-from-square',
      disabled: !openLink,
      action:   () => openLink?.click(),
    },
    { divider: true },
    {
      label:  'Close Preview',
      icon:   'fa-door-open',
      action: () => DOM.closePreviewBtn?.click(),
    },
    {
      label:  'Close Explorer',
      icon:   'fa-xmark',
      action: () => DOM.closeExplorerBtn?.click(),
    },
  ];
};

const changelogItems = () => [
  {
    label:  'Close Changelog',
    icon:   'fa-xmark',
    action: () => document.getElementById('changelog-close-button')?.click(),
  },
];

// ===========================================================================
// Custom context menu
// ===========================================================================

const MENU_ID = 'live2d-context-menu';

const createMenuEl = () => {
  const menu = document.createElement('div');
  menu.id        = MENU_ID;
  menu.className = 'context-menu';
  menu.setAttribute('role', 'menu');
  document.body.appendChild(menu);
  return menu;
};

const hideMenu = () => {
  const menu = document.getElementById(MENU_ID);
  if (menu) {
    menu.classList.remove('context-visible');
    menu.innerHTML = '';
  }
};

const showMenu = (x, y, items) => {
  let menu = document.getElementById(MENU_ID);
  if (!menu) menu = createMenuEl();

  menu.innerHTML = '';

  items.forEach((item) => {
    if (item.divider) {
      const hr = document.createElement('div');
      hr.className = 'context-divider';
      menu.appendChild(hr);
      return;
    }

    const btn      = document.createElement('button');
    btn.className  = `context-item${item.disabled ? ' context-disabled' : ''}`;
    btn.innerHTML  = `<i class="fas ${item.icon}" aria-hidden="true"></i><span>${item.label}</span>`;
    btn.setAttribute('role', 'menuitem');
    btn.disabled   = !!item.disabled;

    if (!item.disabled) {
      btn.addEventListener('click', () => {
        hideMenu();
        item.action();
      });
    }

    menu.appendChild(btn);
  });

  menu.classList.add('context-visible');

  const vw        = window.innerWidth;
  const vh        = window.innerHeight;
  const mw        = menu.offsetWidth  || 200;
  const mh        = menu.offsetHeight || 200;
  menu.style.left = `${Math.min(x, vw - mw - 8)}px`;
  menu.style.top  = `${Math.min(y, vh - mh - 8)}px`;
};

const buildMenuItems = () => {
  switch (getContext()) {
    case 'changelog':        return changelogItems();
    case 'explorer-preview': return explorerPreviewItems();
    case 'explorer':         return explorerItems();
    default:                 return canvasItems();
  }
};

export const initContextMenu = () => {
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    showMenu(event.clientX, event.clientY, buildMenuItems());
  });

  document.addEventListener('click', (event) => {
    const menu = document.getElementById(MENU_ID);
    if (menu && !menu.contains(event.target)) hideMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hideMenu();
  });
  document.addEventListener('scroll', hideMenu, { passive: true, capture: true });

  log('SYSTEM', 'Custom context menu initialized.');
};