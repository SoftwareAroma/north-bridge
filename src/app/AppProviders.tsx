'use client';

import {NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";
import useDarkMode, { DarkMode } from "use-dark-mode";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient: QueryClient = new QueryClient();

const AppProviders = ({children}: { children: React.ReactNode }) => {
    const darkMode: DarkMode = useDarkMode(false);

    // console.log("darkMode >>>> ", darkMode);

    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="light">
                    <main className={`${darkMode.value ? 'dark' : ''} text-foreground bg-background`}>
                        {children}
                    </main>
                </NextThemesProvider>
            </NextUIProvider>

            {/* React Query Dev Tools */}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default AppProviders;