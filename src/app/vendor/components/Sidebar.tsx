
'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const SideBar = () => {

    const vendor = useSelector((state: any) => state.vendor.vendor);

    return (
        <Sidebar aria-label="Sidebar with multi-level dropdown example" className='h-screen rounded-none'>
            <Sidebar.Items className='h-full'>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" className='no-underline text-green-600 font-bold uppercase tracking-widest'>
                        North Bridge
                        {/* icon={HiChartPie} */}
                    </Sidebar.Item>
                    {/* <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                        <Sidebar.Item href="#">Products</Sidebar.Item>
                        <Sidebar.Item href="#">Sales</Sidebar.Item>
                        <Sidebar.Item href="#">Refunds</Sidebar.Item>
                        <Sidebar.Item href="#">Shipping</Sidebar.Item>
                    </Sidebar.Collapse> */}
                    <Sidebar.Item href="/vendor/" icon={HiShoppingBag} className='no-underline'>
                        Products
                    </Sidebar.Item>
                    <Sidebar.Item href="/vendor/stores/" icon={HiTable} className='no-underline'>
                        Stores
                    </Sidebar.Item>
                    {
                        !vendor && <Sidebar.Item href="/vendor/auth/" icon={HiArrowSmRight} className='no-underline'>
                            Sign In
                        </Sidebar.Item>
                    }
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default SideBar;