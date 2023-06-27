import { styled } from '../../config/stitches';

export const Button = styled('button', {
    padding: '0.6em 1.2em',

    fontSize: '1em',
    fontWeight: 500,
    fontFamily: 'inherit',

    backgroundColor: '$grey900',

    borderRadius: '0.5rem',
    border: '1px solid transparent',

    cursor: 'pointer',
    transition: 'border-color 0.25s',

    '&:hover': {
        borderColor: '$blue200',
    },

    '&:focus': {
        outline: '4px auto -webkit-focus-ring-color',
    },

    '&:focus-visible': {
        outline: '4px auto -webkit-focus-ring-color',
    },

    '@light': {
        backgroundColor: '$grey100',
    },
});
