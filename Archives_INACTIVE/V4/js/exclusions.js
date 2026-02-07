//==============================================================================
// CONFIGURATION
//==============================================================================
const CONSOLE_EXCLUSION_PATTERNS = {
    // General Live2D SDK, PixiJS startup and profile messages
    SDK_INFO: [
        /^Live2D(?:\s+(?:SDK\s+)?\d+\.\d+(?:\.\d+)?(?:_\d+)?)?/i, // e.g., "Live2D 2.1.00_1"
        /^profile\s*:\s*\w+\s*$/i,                                // e.g., "profile : Desktop"
        /http:\/\/www\.pixijs\.com/i,                             // PixiJS info Banner
    ],

    // Cubism Core internal logging prefixes
    CUBISM_CORE: [
        /\[CSM\]\[[IWEDF]\]/i, // e.g., "[CSM][I]"
    ],

    // Audio and motion-related warnings that are often non-critical
    AUDIO_MOTION: [
        /^\[SoundManager\]\s+(?:Error\s+occurred\s+on|Failed\s+to|Unable\s+to|Cannot)/i,
        /^\[MotionManager(?:\(.*?\))?\]\s+(?:failed\s+to\s+play\s+audio|error|unable\s+to)/i,
        /\[MotionManager\(\)\] Failed to load motion: .*/i,
    ],

    // Obscure or internal configuration logs
    INTERNAL_CONFIG: [
        /^\s*\[PROFILE_NAME\]\s*=\s*[\w-]+\s*$/i,
        /^\s*\[USE_ADJUST_TRANSLATION\]\s*=\s*(?:true|false|TRUE|FALSE|0|1)\s*$/i,
        /^\s*\[USE_CACHED_POLYGON_IMAGE\]\s*=\s*(?:true|false|TRUE|FALSE|0|1)\s*$/i,
        /^\s*\[EXPAND_W\]\s*=\s*-?\d+(?:\.\d+)?\s*$/i,
    ],

    // Specific, known non-critical warnings
    MISC: [
        /^_\$li : call _\$Ri\.update\(\) before _\$Ri\.draw\(\)/i, // A frequent, beginning warning
    ],
};

// Combine all the exclusion patterns into a single array for efficient matching
const ALL_EXCLUSION_PATTERNS = Object.values(CONSOLE_EXCLUSION_PATTERNS).flat();

//==============================================================================
// CONSOLE METHOD OVERRIDE
//==============================================================================
const DEBUG_STORAGE_KEY = 'consoleDebug';

// Getter/Setter for "consoleDebug": reads/writes a boolean to localStorage
Object.defineProperty(window, 'consoleDebug', {
  get: () => localStorage.getItem(DEBUG_STORAGE_KEY) === 'true',
  set: state => localStorage.setItem(DEBUG_STORAGE_KEY, state ? 'true' : 'false'),
  configurable: true,
  enumerable: true
});

// Creates a wrapped version of a console method (log, warn, error) that filters messages
const createFilteredConsoleMethod = (originalMethod) => {
    return (...args) => {
        // If debug mode is on, bypass filtering and show a stack trace for easier debugging
        if (window.consoleDebug) {
            const trace = new Error().stack?.split('\n')[2]?.trim() || 'Trace not available';
            originalMethod.apply(console, [...args, `\n ↳ ${trace}`]);
            return;
        }

        // Join all arguments to form a single string for pattern matching
        const message = args.map(arg => String(arg)).join(' ');

        // Check if the message matches any of the exclusion patterns
        const shouldBlock = ALL_EXCLUSION_PATTERNS.some(pattern => pattern.test(message));

        // If the message should not be blocked, call the original console method
        if (!shouldBlock) {
            originalMethod.apply(console, args);
        }
    };
};

// Override the native console methods with the filtered versions
console.log = createFilteredConsoleMethod(console.log);
console.warn = createFilteredConsoleMethod(console.warn);
console.error = createFilteredConsoleMethod(console.error);