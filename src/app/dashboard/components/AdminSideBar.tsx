
'use client';

import AdminSideBarItem, { ISideBarItem } from './AdminSideBarItem';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type SiteBarItem = {
    title: string,
    link: string,
    active: boolean,
}

var navListItems: Array<SiteBarItem> = [
    {
        title: "Dashboard",
        link: '/dashboard/',
        active: true,
    },
    {
        title: "Users",
        link: '/dashboard/users/',
        active: false,
    },
    {
        title: "Vendors",
        link: '/dashboard/vendors/',
        active: false,
    },
    {
        title: "Erranders",
        link: '/dashboard/erranders/',
        active: false,
    },
    {
        title: "Products",
        link: '/dashboard/products/',
        active: false,
    },
    {
        title: "Sales",
        link: '/dashboard/sales/',
        active: false,
    },
    {
        title: "Sign In",
        link: '/dashboard/auth/',
        active: false,
    },
]


const AdminSideBar = () => {
    const router = useRouter();
    const [stateValues, setStateValues] = useState(navListItems);

    return (
        <div className='flex flex-col justify-start items-start w-full'>
            <div className="flex flex-col justify-start items-start w-full space-y-1">
                <div className="mt-14"></div>
                {
                    stateValues?.map((navItem: SiteBarItem, index: number) => {
                        return <AdminSideBarItem
                            key={index}
                            title={navItem.title}
                            onClick={() => {
                                const updatedStateValues = stateValues?.map((item, idx) => {
                                    return {
                                        ...item,
                                        active: idx === index  // Set active to true only for the clicked item
                                    };
                                });
                                setStateValues(updatedStateValues);
                                router.push(navItem.link);
                            }}
                            active={navItem.active}
                        />
                    })
                }
            </div>
            <div className=""></div>
        </div>
    );
}

export default AdminSideBar;
