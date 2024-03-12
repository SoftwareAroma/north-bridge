'use client';

import React from 'react';
import StoresTable from '../components/StoresTable';
import { useSelector } from 'react-redux';
import UnAuthorizedView from '../components/UnAuthorizedView';

const StoresPage = () => {
    const vendor = useSelector((state: any) => state.vendor.vendor);

    return (
        <React.Fragment>
            {(vendor) && <StoresTable />}
            {/* {(!vendor) && <UnAuthorizedView />} */}
        </React.Fragment>
    );
}

export default StoresPage;
