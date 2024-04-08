'use client';

import React from 'react'
import SalesTable from '../widgets/SalesTable'
import UnAuthorizedView from '../widgets/UnAuthorizedView';
import { useAppSelector } from '@/shared';

const SalesPage = () => {
    const admin = useAppSelector((state) => state.admin.admin);
    return (
        <React.Fragment>
            {(admin) && <SalesTable />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    )
}

export default SalesPage
