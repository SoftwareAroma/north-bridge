'use client';

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Flowbite } from 'flowbite-react';


/**
 * React Query Client
 * @see https://react-query.tanstack.com/
 */
const queryClient: QueryClient = new QueryClient();

const AppProviders = ({children}: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Flowbite>
                {children}
            </Flowbite>
            {/* React Query Dev Tools */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default AppProviders;
