'use client';
import React from 'react'
import ErrandersTable from '../widgets/ErrandersTable'
import { useSelector } from 'react-redux';
import UnAuthorizedView from '../widgets/UnAuthorizedView';

const ErrandersPage = () => {
    const admin = useSelector((state: any) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <ErrandersTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    )
}

export default ErrandersPage
