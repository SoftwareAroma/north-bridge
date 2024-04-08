'use client';
import React from 'react';
import StoresTable from '../widgets/StoresTable';
import UnAuthorizedView from '../widgets/UnAuthorizedView';
import { useAppSelector } from '@/shared';

const StoresPage = () => {
    const admin = useAppSelector((state) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <StoresTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default StoresPage
