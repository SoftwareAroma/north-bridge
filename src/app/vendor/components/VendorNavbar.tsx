'use client';

import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import axios from 'axios';
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarToggle,
} from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useQuery } from "@tanstack/react-query";
import { getVendorProfile, logoutVendor, setVendor } from '@shared';

const VendorNavbar = () => {
    const router = useRouter();
    const vendor = useSelector((state: any) => state.vendor.vendor);
    const dispatch = useDispatch();

    // Queries
    const { data } = useQuery({
        queryKey: ['vendorProfile'],
        queryFn: getVendorProfile,
        enabled: true,
    });

    useEffect((): void => {
        if (data?.data.data.vendor) {
            dispatch(setVendor(data?.data.data.vendor));
        }
    }, [data]);

    // console.log(vendor);

    const logout = async () => {
        try {
            const response = await logoutVendor();

            if (response.data.success === true) {
                dispatch(setVendor(null));
                window.location.reload();
            } else {
                console.log('Error logging out');
            }
        } catch (error) {
            console.log('Error logging out', error);
        }
    };

    return (
        <React.Fragment>
            {vendor && <Navbar fluid rounded className='bg-white'>
                <NavbarBrand href="/vendor/" className='no-underline font-bold uppercase tracking-wider'>
                    Vendor
                </NavbarBrand>
                <div className="flex md:order-2 space-x-4">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt="User settings"
                                img={"/images/account.png"}
                                rounded
                            />
                        }
                    >
                        <DropdownHeader>
                            <span className="block text-sm">{vendor?.userName}</span>
                            <span className="block truncate text-sm font-medium">{vendor?.email}</span>
                        </DropdownHeader>
                        <DropdownItem>Earnings</DropdownItem>
                        <DropdownDivider />
                        {vendor && <DropdownItem onClick={logout}>Sign out</DropdownItem>}
                        {!vendor && <DropdownItem onClick={() => router.push('/vendor/')}>Sign In</DropdownItem>}
                    </Dropdown>
                    <NavbarToggle />
                </div>
            </Navbar>}
        </React.Fragment>
    );
}

export default VendorNavbar;
