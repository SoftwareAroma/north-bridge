'use client';
import React from 'react';
import ProductCategoriesTable from '../../widgets/ProductCategories';
import UnAuthorizedView from '../../widgets/UnAuthorizedView';
import { useAppSelector } from '@/shared';

const ProductCategoriesPage = () => {
    const admin = useAppSelector((state) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <ProductCategoriesTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default ProductCategoriesPage
