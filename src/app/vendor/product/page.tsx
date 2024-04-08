'use client';

import React from 'react';
import ProductsTable from '../components/ProductsTable';
import { useAppSelector } from '@/shared';

const VendorProductsPage = () => {
    const vendor = useAppSelector((state) => state.vendor.vendor);

    return (
        <React.Fragment>
            {/*{isLoading && <LoadingSkeleton />}*/}
            {(vendor) && <ProductsTable />}
            {/* {(!vendor) && <UnAuthorizedView />} */}
        </React.Fragment>
    );
}

export default VendorProductsPage
