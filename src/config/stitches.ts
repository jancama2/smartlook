import { createStitches } from '@stitches/react';

export const { styled, css, globalCss } = createStitches({
    theme: {
        colors: {
            grey100: '#f9f9f9',
            grey300: '#c4c4c4',
            grey800: '#242424',
            grey900: '#1a1a1a',
            blue100: '#747bff',
            blue200: '#646cff',
            blue300: '#535bf2',
            blue800: '#213547',
            white: '#ffffff',
        },
    },
    media: {
        md: '(min-width: 769px)',
        light: '(prefers-color-scheme: light)',
    },
});

export const globalStyles = globalCss({
    '#root': {
        maxWidth: '768px',
        margin: '0 auto',
        padding: '0 1rem',
    },

    body: {
        display: 'flex',
        placeItems: 'center',

        minWidth: '320px',
        minHeight: '100vh',

        margin: 0,

        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        fontSize: '0.875rem',
        lineHeight: 1.5,
        fontWeight: 400,

        colorScheme: 'light dark',
        color: 'rgba(255, 255, 255, 0.87)',
        backgroundColor: '$grey800',

        fontSynthesis: 'none',
        textRendering: 'optimizeLegibility',
        webkitFontSmoothing: 'antialiased',
        mozOsxFontSmoothing: 'grayscale',
        webkitTextSizeAdjust: '100%',
    },

    a: {
        fontWeight: 500,
        color: '$blue200',
        textDecoration: 'inherit',
    },

    'a:hover': {
        color: '$blue300',
    },

    '@md': {
        '#root': {
            padding: '2rem',
        },

        body: {
            fontSize: '1rem',
        },
    },

    '@light': {
        body: {
            color: '$blue800',
            backgroundColor: '$white',
        },

        'a:hover': {
            color: '$blue100',
        },
    },
});
