
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';

const AdminNavBar = () => {
    return (
        <Navbar fluid className='w-full sticky top-0 rounded-none shadow-md'>
            <Navbar.Brand
                href="/Dashboard/"
                className='no-underline uppercase text-green-800 font-bold tracking-wider'
            >
                North Bridge
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        <Link href='/dashboard/'>
                            Dashboard
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => { }}>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
        </Navbar>
    );
}

export default AdminNavBar;
