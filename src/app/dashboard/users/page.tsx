
'use client';
import React from 'react';
import UsersTable from '../widgets/UsersTable';
import UnAuthorizedView from '../widgets/UnAuthorizedView';
import { useAppSelector } from '@/shared';

const UsersPage = () => {
    const admin = useAppSelector((state) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <UsersTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default UsersPage;
