import { Suspense } from 'react';
import { Provider } from 'jotai';
import { QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Switch } from 'wouter';

import { globalStyles } from './config/stitches';
import { queryClient } from './config/react-query';
import { jotaiStore } from './config/jotai';

import { Button } from './components/Button';

import { PostsPage } from './modules/posts/components/PostsPage';

export function App() {
    globalStyles();

    return (
        <Provider store={jotaiStore}>
            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<div>Loading</div>}>
                    <QueryErrorResetBoundary>
                        {({ reset }) => (
                            <ErrorBoundary
                                onReset={reset}
                                fallbackRender={({ error, resetErrorBoundary }) => (
                                    <Button type="button" onClick={resetErrorBoundary}>
                                        Error: {error.toString()}
                                    </Button>
                                )}
                            >
                                <Switch>
                                    <Route path="/">
                                        <PostsPage />
                                    </Route>
                                </Switch>
                            </ErrorBoundary>
                        )}
                    </QueryErrorResetBoundary>
                </Suspense>
            </QueryClientProvider>
        </Provider>
    );
}
