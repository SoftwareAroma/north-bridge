'use client';

import React, { useEffect, useState } from 'react';
import StoresTable from '../components/StoresTable';
import { useQuery } from '@tanstack/react-query';
import { setVendor } from '@/providers/reducers/VendorReducer';
import axios from 'axios';
import { vendorProfileApi } from '@/utils/utils';
import { useDispatch } from 'react-redux';
import LoadingSkeleton from '../components/LoadingSkeleton';
import UnAuthorizedView from '../components/UnAuthorizedView';

const StoresPage = () => {

    const [isAuthorized, setIsAuthorized] = useState(false);
    const dispatch = useDispatch();

    const getVendorProfile = async () => {
        return await axios({
            url: vendorProfileApi,
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
            {(isAuthorized && data) && <StoresTable />}
            {(!isAuthorized && !isLoading) && <UnAuthorizedView />}
        </React.Fragment>
    );
}

export default StoresPage;
