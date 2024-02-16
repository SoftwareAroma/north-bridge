import React from 'react';
import AdminSideBar from './components/AdminSideBar';
import AdminNavBar from './components/AdminNavbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex flex-row justify-start items-start'>
            <div className="w-[20%]">
                <AdminSideBar />
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start">
                <div className="w-full">
                    <AdminNavBar />
                </div>
                <div className="w-full h-full">
                    {children}
                </div>
            </div>
        </main>
    );
}
