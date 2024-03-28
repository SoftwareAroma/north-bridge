'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AdminDrawer from './components/AdminDrawer';
import AdminAppBar from './components/AdminAppBar';
import { Metadata } from 'next';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AdminAppBar
                open={open}
                toggleDrawer={toggleDrawer}
            />
            <AdminDrawer
                open={open}
                toggleDrawer={toggleDrawer}
            />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
