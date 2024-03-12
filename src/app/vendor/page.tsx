'use client';
import React, { useEffect } from 'react';
import VendorProductsPage from './product/page';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const VendorHome = () => {
    const vendor = useSelector((state: any) => state.vendor.vendor);
    const router = useRouter();

    useEffect(() => {
        if (!vendor) {
            router.push('/vendor/auth/');
        }
    }, [vendor]);

    return (
        <React.Fragment>
            <VendorProductsPage />
        </React.Fragment>
    );
}

export default VendorHome;
