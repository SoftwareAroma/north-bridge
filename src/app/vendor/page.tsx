'use client';
import React, { useEffect } from 'react';
import VendorProductsPage from './product/page';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/shared';

const VendorHome = () => {
    const vendor = useAppSelector((state) => state.vendor.vendor);
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
