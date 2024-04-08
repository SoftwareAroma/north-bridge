'use client';
import React from 'react';
import ErrandersTable from '../widgets/ErrandersTable';
import UnAuthorizedView from '../widgets/UnAuthorizedView';
import { useAppSelector } from '@/shared';

const ErrandersPage = () => {
    const admin = useAppSelector((state) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <ErrandersTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    )
}

export default ErrandersPage
