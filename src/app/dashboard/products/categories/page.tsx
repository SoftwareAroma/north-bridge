'use client';
import React from 'react';
import ProductCategoriesTable from '../../widgets/ProductCategories';
import UnAuthorizedView from '../../widgets/UnAuthorizedView';
import { useSelector } from 'react-redux';

const ProductCategoriesPage = () => {
    const admin = useSelector((state: any) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <ProductCategoriesTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default ProductCategoriesPage
