import React from 'react';
import VendorNavbar from './components/VendorNavbar';
import SideBar from './components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex flex-col w-full h-full'>
            <div className="w-full h-full flex">
                <aside className="h-full">
                    <SideBar />
                </aside>
                <div className="w-full h-full">
                    <VendorNavbar />
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}