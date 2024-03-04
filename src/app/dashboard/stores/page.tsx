'use client';
import React from 'react';
import StoresTable from '../widgets/StoresTable';
import { useSelector } from 'react-redux';
import UnAuthorizedView from '../widgets/UnAuthorizedView';

const StoresPage = () => {
    const admin = useSelector((state: any) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <StoresTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default StoresPage
