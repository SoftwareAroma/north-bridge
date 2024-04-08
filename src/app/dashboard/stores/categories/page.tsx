'use client';
import React from 'react';
import StoreCategoriesTable from '../../widgets/StoreCategoriesTable';
import UnAuthorizedView from '../../widgets/UnAuthorizedView';
import { useAppSelector } from '@/shared';

const StoreCategoriesPage = () => {
    const admin = useAppSelector((state) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <StoreCategoriesTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default StoreCategoriesPage;
