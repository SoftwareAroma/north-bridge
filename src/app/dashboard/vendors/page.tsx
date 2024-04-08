'use client';
import React from 'react';
import VendorsTable from '../widgets/VendorsTable';
import UnAuthorizedView from '../widgets/UnAuthorizedView';
import { useAppSelector } from '@/shared';

const VendorsPage = () => {
    const admin = useAppSelector((state) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <VendorsTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default VendorsPage;
