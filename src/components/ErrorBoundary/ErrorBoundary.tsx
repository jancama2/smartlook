import type { ReactNode } from 'react';
import { QueryErrorResetBoundary as QueryBoundary } from '@tanstack/react-query';
import { ErrorBoundary as Boundary } from 'react-error-boundary';

import { Button } from '../Button';

export interface ErrorBoundaryProps {
    children: ReactNode;
}

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => (
    <QueryBoundary>
        {({ reset }) => (
            <Boundary
                onReset={reset}
                fallbackRender={({ error, resetErrorBoundary }) => (
                    <section>
                        <p>
                            <strong>There was an error</strong>
                            <br />
                            <code>{JSON.stringify(error)}</code>
                        </p>
                        <Button type="button" onClick={resetErrorBoundary}>
                            Reload app
                        </Button>
                    </section>
                )}
            >
                {children}
            </Boundary>
        )}
    </QueryBoundary>
);
