
'use client';
import React from 'react';
import UsersTable from '../widgets/UsersTable';
import { useSelector } from 'react-redux';
import UnAuthorizedView from '../widgets/UnAuthorizedView';

const UsersPage = () => {
    const admin = useSelector((state: any) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <UsersTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default UsersPage;
