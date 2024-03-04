'use client';
import React from 'react';
import VendorsTable from '../widgets/VendorsTable';
import { useSelector } from 'react-redux';
import UnAuthorizedView from '../widgets/UnAuthorizedView';

const VendorsPage = () => {
    const admin = useSelector((state: any) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <VendorsTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default VendorsPage;
