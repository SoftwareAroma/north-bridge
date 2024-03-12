'use client';

import React from 'react'
import { useSelector } from 'react-redux';
import ProductsTable from '../components/ProductsTable';
import UnAuthorizedView from '../components/UnAuthorizedView';

const VendorProductsPage = () => {
    const vendor = useSelector((state: any) => state.vendor.vendor);

    return (
        <React.Fragment>
            {/*{isLoading && <LoadingSkeleton />}*/}
            {(vendor) && <ProductsTable />}
            {/* {(!vendor) && <UnAuthorizedView />} */}
        </React.Fragment>
    );
}

export default VendorProductsPage
