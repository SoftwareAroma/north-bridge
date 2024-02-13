'use client';

import React, { useState } from 'react';
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
import ProductForm from './ProductForm';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { vendorLogout } from '@/providers/utils';
import { setVendor } from '@/providers/reducers/VendorReducer';
import StoreForm from './StoreForm';

const VendorNavbar = () => {
    const router = useRouter();

    const [openStoreModal, setOpenStoreModal] = useState(false);

    const vendor = useSelector((state: any) => state.vendor.vendor);
    const dispatch = useDispatch();

    // console.log(vendor);

    const logout = async () => {
        const response = await axios({
            url: vendorLogout,
            method: "GET",
            withCredentials: true,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

        if (response.data.success === true) {
            dispatch(setVendor(null));
            router.push('/vendor/');
        } else {
            console.log('Error logging out');
        }
    };

    return (
        <Navbar fluid rounded className='bg-white'>
            <NavbarBrand href="/vendor/" className='no-underline font-bold uppercase tracking-wider'>
                Vendor
            </NavbarBrand>
            <div className="flex md:order-2 space-x-4">
                <Button className='bg-blue-600 px-4' onClick={() => setOpenStoreModal(true)}>
                    Add store
                </Button>

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

            {/* add store modal */}
            <Modal show={openStoreModal} size="xl" onClose={
                () => setOpenStoreModal(false)
            } popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 uppercase">
                            Add a new store
                        </h3>
                        <div className="my-4">
                            <StoreForm />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Navbar>
    );
}

export default VendorNavbar;
