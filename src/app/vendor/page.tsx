
import React from 'react';
import VendorNavbar from './components/VendorNavbar';
import ProductsTable from './components/ProductsTable';

const VendorHome = () => {
    return (
        <React.Fragment>
            <VendorNavbar />
            <ProductsTable />
        </React.Fragment>
    );
}

export default VendorHome;