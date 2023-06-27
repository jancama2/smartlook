import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches();

export const globalStyles = globalCss({
    '#root': {
        maxWidth: '768px',
        margin: '0 auto',
        padding: '2rem',
    },

    body: {
        display: 'flex',
        placeItems: 'center',

        minWidth: '320px',
        minHeight: '100vh',

        margin: 0,

        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        lineHeight: 1.5,
        fontWeight: 400,

        colorScheme: 'light dark',
        color: 'rgba(255, 255, 255, 0.87)',
        backgroundColor: '#242424',

        fontSynthesis: 'none',
        textRendering: 'optimizeLegibility',
        webkitFontSmoothing: 'antialiased',
        mozOsxFontSmoothing: 'grayscale',
        webkitTextSizeAdjust: '100%',
    },

    a: {
        fontWeight: 500,
        color: '#646cff',
        textDecoration: 'inherit',
    },

    'a:hover': {
        color: '#535bf2',
    },

    '@media (prefers-color-scheme: light)': {
        body: {
            color: '#213547',
            backgroundColor: '#ffffff',
        },

        'a:hover': {
            color: '#747bff',
        },
    },
});
