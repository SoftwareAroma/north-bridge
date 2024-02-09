'use client';

import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from 'flowbite-react';
import ProductForm from './ProductForm';

const VendorNavbar = () => {

    const [openProductModal, setOpenProductModal] = useState(false);
    const [openStoreModal, setOpenStoreModal] = useState(false);

    return (
        <Navbar fluid rounded className='bg-white'>
            <NavbarBrand href="/vendor/" className='no-underline font-bold uppercase tracking-wider'>
                Vendor
            </NavbarBrand>
            <div className="flex md:order-2 space-x-4">
                <Button className='bg-blue-600 px-4' onClick={() => setOpenStoreModal(true)}>
                    Add store
                </Button>
                <Button onClick={() => setOpenProductModal(true)}>
                    Add Product
                </Button>
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
                    <DropdownHeader>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </DropdownHeader>
                    <DropdownItem>Earnings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
                <NavbarToggle />
            </div>

            {/* add product modal */}
            <Modal show={openProductModal} size="xl" onClose={() => setOpenProductModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Add Product to Store
                        </h3>
                        <div className="my-4">
                            <ProductForm />
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button color="success" className='px-8 py-1' onClick={() => setOpenProductModal(false)}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* add store modal */}
            <Modal show={openStoreModal} size="xl" onClose={
                () => setOpenStoreModal(false)
            } popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Add a new store
                        </h3>
                        <div className="my-4">
                            <ProductForm />
                        </div>
                        <div className="flex justify-center gap-4">
                            <Button color="success" className='px-8 py-1' onClick={() => setOpenStoreModal(false)}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Navbar>
    );
}

export default VendorNavbar;
