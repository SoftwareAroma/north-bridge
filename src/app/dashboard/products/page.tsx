'use client';
import React from 'react';
import ProductsTable from '../widgets/ProductsTable';
import UnAuthorizedView from '../widgets/UnAuthorizedView';
import { useSelector } from 'react-redux';

const ProductsPage = () => {
    const admin = useSelector((state: any) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <ProductsTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    )
}

export default ProductsPage;
