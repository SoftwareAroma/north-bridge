'use client';

import React from 'react';
import StoresTable from '../components/StoresTable';
import { useAppSelector } from '@/shared';

const StoresPage = () => {
    const vendor = useAppSelector((state) => state.vendor.vendor);

    return (
        <React.Fragment>
            {(vendor) && <StoresTable />}
            {/* {(!vendor) && <UnAuthorizedView />} */}
        </React.Fragment>
    );
}

export default StoresPage;
