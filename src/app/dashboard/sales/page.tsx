'use client';

import React from 'react'
import SalesTable from '../widgets/SalesTable'
import { useSelector } from 'react-redux';
import UnAuthorizedView from '../widgets/UnAuthorizedView';

const SalesPage = () => {
    const admin = useSelector((state: any) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <SalesTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    )
}

export default SalesPage
