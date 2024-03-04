'use client';
import React from 'react';
import StoreCategoriesTable from '../../widgets/StoreCategoriesTable';
import UnAuthorizedView from '../../widgets/UnAuthorizedView';
import { useSelector } from 'react-redux';

const StoreCategoriesPage = () => {
    const admin = useSelector((state: any) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <StoreCategoriesTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default StoreCategoriesPage;
