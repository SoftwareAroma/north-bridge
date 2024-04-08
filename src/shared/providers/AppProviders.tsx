'use client';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Flowbite } from 'flowbite-react';
import store from './store';
import { Provider } from 'react-redux';
import theme from "@shared/components/theme/theme";
import { persistStore } from 'redux-persist';



/**
 * React Query Client
 * @see https://react-query.tanstack.com/
 */
const queryClient: QueryClient = new QueryClient();

persistStore(store);

const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Flowbite>
                            {children}
                        </Flowbite>
                    </ThemeProvider>
                </Provider>
            </AppRouterCacheProvider>
            {/* React Query Dev Tools */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider >
    );
}

export default AppProviders;
