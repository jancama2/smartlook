import { Suspense } from 'react';
import { useLocation } from 'wouter';

import { ErrorBoundary } from '../../../../components/ErrorBoundary';
import { Dialog } from '../../../../components/Dialog';

import { User } from '../User';

export interface UserDetailProps {
    id: number;
}

export const UserDetail = (props: UserDetailProps) => {
    const [, setLocation] = useLocation();

    return (
        <Dialog
            open
            onOpenChange={() => {
                setLocation('/');
            }}
        >
            <Suspense fallback="Loading">
                <ErrorBoundary>
                    <User {...props} />
                </ErrorBoundary>
            </Suspense>
        </Dialog>
    );
};
