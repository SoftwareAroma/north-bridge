import React from 'react';
import VendorNavbar from './components/VendorNavbar';
import SideBar from './components/Sidebar';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Vendor | North Bridge - Looking into the future - BOLD",
    description: "North bridge is an online platform that connects you with the shops around you in your immediate vicinity. Shop with us and explore the possibilities of technology.",
};

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