'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AdminDrawer from './components/AdminDrawer';
import AdminAppBar from './components/AdminAppBar';


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
    // return (
    //     <main>
    //         {children}
    //     </main>
    // <main className='flex flex-row justify-start items-start'>
    //     <div className="w-64 sticky top-0">
    //         <AdminSideBar />
    //     </div>
    //     <div className="w-full h-full flex flex-col justify-start items-start">
    //         <div className="w-full sticky top-0">
    //             <AdminNavBar />
    //         </div>
    //         <div className="w-full h-full px-4 py-1">
    //             {children}
    //         </div>
    //     </div>
    // </main>
    // );
}
