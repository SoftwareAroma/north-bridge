'use client';
import React, { useEffect, useState } from 'react';
import ProductsTable from './components/ProductsTable';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { vendorProfile } from '@/providers/utils';
import LoadingSkeleton from './components/LoadingSkeleton';
import { useRouter } from 'next/navigation';
import UnAuthorizedView from './components/UnAuthorizedView';
import { useDispatch, useSelector } from 'react-redux';
import { setVendor } from '@/providers/reducers/VendorReducer';

const VendorHome = () => {
    const router = useRouter();
    const vendor = useSelector((state: any) => state.vendor.vendor);

    const dispatch = useDispatch();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const getVendorProfile = async () => {
        return await axios({
            url: vendorProfile,
            method: "GET",
            withCredentials: true,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    };

    // Queries
    const { data, isLoading } = useQuery({
        queryKey: ['vendorProfile'],
        queryFn: getVendorProfile,
        enabled: true,
    });

    // use memo 
    useEffect(() => {
        if (data) {
            dispatch(setVendor(data?.data.data.vendor));
        } else {
            setIsAuthorized(false);
        }
        if (data?.data.data.vendor.role == "VENDOR") {
            setIsAuthorized(true);
        } else {
            setIsAuthorized(false);
        }
    }, [data]);


    return (
        <React.Fragment>
            {isLoading && <LoadingSkeleton />}
            {(isAuthorized && data) && <ProductsTable />}
            {(!isAuthorized && !isLoading) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default VendorHome;
