'use client';
import React from 'react';
import ProductsTable from '../widgets/ProductsTable';
import UnAuthorizedView from '../widgets/UnAuthorizedView';
import { useAppSelector } from '@/shared';

const ProductsPage = () => {
    const admin = useAppSelector((state) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <ProductsTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    )
}

export default ProductsPage;
