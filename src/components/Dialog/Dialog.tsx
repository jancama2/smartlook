import type { ReactNode } from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { styled } from '../../config/stitches';

const DialogOverlay = styled(RadixDialog.Overlay, {
    position: 'fixed',
    zIndex: 0,
    inset: 0,

    opacity: 0.9,

    backgroundColor: '$grey800',

    '@light': {
        opacity: 0.3,

        backgroundColor: '$grey800',
    },
});

const DialogContent = styled(RadixDialog.Content, {
    position: 'fixed',

    top: '30%',
    left: '50%',
    zIndex: 1,

    padding: '1.5rem',

    width: '90vw',
    maxWidth: '450px',

    maxHeight: '85vh',

    backgroundColor: '$grey900',
    borderRadius: '0.5rem',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

    transform: 'translate(-50%, -30%)',

    '&:focus': {
        outline: 'none',
    },

    '@light': {
        backgroundColor: '$white',
    },
});

const DialogCloseButton = styled('button', {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '2rem',
    height: '2rem',

    padding: 0,
    margin: 0,

    border: 'none',
    borderRadius: '100%',

    backgroundColor: 'transparent',

    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '$grey900',
    },

    '&:focus': {
        outline: '4px auto -webkit-focus-ring-color',
    },

    '&:focus-visible': {
        outline: '4px auto -webkit-focus-ring-color',
    },

    '@light': {
        '&:hover': {
            backgroundColor: '$grey100',
        },
    },
});

export interface DialogProps {
    open: boolean;
    onOpenChange: (state: boolean) => void;
    children: ReactNode;
}

export const Dialog = ({ open, onOpenChange, children }: DialogProps) => (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
        <RadixDialog.Portal>
            <DialogOverlay />
            <DialogContent>
                {children}
                <RadixDialog.Close asChild>
                    <DialogCloseButton aria-label="Close">
                        <Cross2Icon width={20} height={20} />
                    </DialogCloseButton>
                </RadixDialog.Close>
            </DialogContent>
        </RadixDialog.Portal>
    </RadixDialog.Root>
);
