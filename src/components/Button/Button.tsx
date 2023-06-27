import { styled } from '../../config/stitches';

export const Button = styled('button', {
    padding: '0.6em 1.2em',

    fontSize: '1rem',
    fontWeight: 500,
    fontFamily: 'inherit',

    backgroundColor: '#1a1a1a',

    borderRadius: '0.5rem',
    border: '1px solid transparent',

    cursor: 'pointer',
    transition: 'border-color 0.25s',

    ':hover': {
        borderColor: '#646cff',
    },

    ':focus': {
        outline: '4px auto -webkit-focus-ring-color',
    },

    ':focus-visible': {
        outline: '4px auto -webkit-focus-ring-color',
    },

    '@media (prefers-color-scheme: light)': {
        button: {
            backgroundColor: '#f9f9f9',
        },
    },
});
