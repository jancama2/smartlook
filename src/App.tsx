import { Suspense } from 'react';
import { Provider } from 'jotai';
import { Route } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';

import { globalStyles } from './config/stitches';
import { queryClient } from './config/react-query';
import { jotaiStore } from './config/jotai';

import { ErrorBoundary } from './components/ErrorBoundary';

import { PostsList } from './modules/posts/components/PostsList';
import { UserDetail } from './modules/users/components/UserDetail';

export const App = () => {
    globalStyles();

    return (
        <Provider store={jotaiStore}>
            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<div>Loading</div>}>
                    <ErrorBoundary>
                        <h1>Smartfeed</h1>
                        <Route path="/user/:id">{params => <UserDetail id={Number.parseInt(params.id)} />}</Route>
                        <PostsList />
                    </ErrorBoundary>
                </Suspense>
            </QueryClientProvider>
        </Provider>
    );
};
