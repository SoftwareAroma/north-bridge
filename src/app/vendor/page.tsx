'use client';
import React, { useEffect, useState } from 'react';
import ProductsTable from './components/ProductsTable';
import UnAuthorizedView from './components/UnAuthorizedView';
import { useDispatch, useSelector } from 'react-redux';
import {Dispatch, UnknownAction} from "redux";
import {AxiosResponse} from "axios";

type TQuery = {data:  AxiosResponse<any, any> | undefined, isLoading: boolean};

const VendorHome = () => {
    const vendor = useSelector((state: any) => state.vendor.vendor);
    const dispatch:  Dispatch<UnknownAction> = useDispatch();
    // const [isAuthorized, setIsAuthorized] = useState(false);

    // Queries
    // const { data, isLoading }: TQuery = useQuery({
    //     queryKey: ['vendorProfile'],
    //     queryFn: getVendorProfile,
    //     enabled: true,
    // });

    // use memo 
    useEffect((): void => {
        // if (data) {
        //     dispatch(setVendor(data?.data.data.vendor));
        // } else {
        //     setIsAuthorized(false);
        // }
        // if (data?.data.data.vendor.role == "VENDOR") {
        //     setIsAuthorized(true);
        // } else {
        //     setIsAuthorized(false);
        // }
    }, [vendor]);


    return (
        <React.Fragment>
            {/*{isLoading && <LoadingSkeleton />}*/}
            {(vendor) && <ProductsTable />}
            {(!vendor) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default VendorHome;
