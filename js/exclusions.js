const exclusionPatterns = [
    // Matches: Live2D 2.1.00_1, Live2D SDK 3.4.02, etc.
    /^Live2D(?:\s+(?:SDK\s+)?\d+\.\d+(?:\.\d+)?(?:_\d+)?)?/i,
    // Matches: profile : Desktop, profile: Mobile, profile :Web
    /^profile\s*:\s*\w+\s*$/i,
    // Matches: [CSM][I], [CSM][W], [CSM][E] - any log level
    /\[CSM\]\[[IWEDF]\]/i,
    // Matches: various SoundManager error formats
    /^\[SoundManager\]\s+(?:Error\s+occurred\s+on|Failed\s+to|Unable\s+to|Cannot)/i,
    // Matches: MotionManager errors with or without parentheses
    /^\[MotionManager(?:\(.*?\))?\]\s+(?:failed\s+to\s+play\s+audio|error|unable\s+to)/i,
    // Matches: profile assignments with flexible spacing and values
    /^\s*\[PROFILE_NAME\]\s*=\s*[\w-]+\s*$/i,
    // Matches: boolean configs with flexible spacing and case
    /^\s*\[USE_ADJUST_TRANSLATION\]\s*=\s*(?:true|false|TRUE|FALSE|0|1)\s*$/i,
    // Matches: boolean configs with flexible spacing and case
    /^\s*\[USE_CACHED_POLYGON_IMAGE\]\s*=\s*(?:true|false|TRUE|FALSE|0|1)\s*$/i,
    // Matches: numeric configs with negative numbers and decimals
    /^\s*\[EXPAND_W\]\s*=\s*-?\d+(?:\.\d+)?\s*$/i,

    // Matches: $li : call *$Ri.update() before _$Ri.draw() - Dunno why it shows but everything works fine
    /^_\$li : call _\$Ri\.update\(\) before _\$Ri\.draw\(\)/i,
];

// Save the original console methods
const originalError = console.error;
const originalWarn = console.warn;
const originalLog = console.log;

var consoleDebug = false; // set to true to enable trace

function createFilteredConsoleMethod(originalMethod) {
    return function(...args) {
        const message = args.join(' ');
        
        // If debug is enabled, don't apply blocking and add trace
        if (consoleDebug) {
            const trace = new Error().stack?.split('\n')[2]?.trim();
            args.push(`\n↳ ${trace}`);
            originalMethod.apply(console, args);
            return;
        }
        
        // Only apply filtering when debug is disabled
        const shouldBlock = exclusionPatterns.some(pattern => pattern.test(message));
        if (!shouldBlock) {
            originalMethod.apply(console, args);
        }
    };
}

// Apply the filtered method to both console.log/warn/error
console.log = createFilteredConsoleMethod(originalLog);
console.warn = createFilteredConsoleMethod(originalWarn);
console.error = createFilteredConsoleMethod(originalError);