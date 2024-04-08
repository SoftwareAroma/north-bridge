'use client';

import { getOrders } from '@/shared';
import MainFooter from '@/shared/components/footer/MainFooter';
import MainHeader from '@/shared/components/header/MainHeader';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

const OrderPage = () => {

    const [orders, setOrders] = useState([]);

    const { data } = useQuery({
        queryKey: ['orders'],
        queryFn: getOrders,
        enabled: true,
    });

    useMemo(() => {
        setOrders(data?.data.data.orders);
    }, [data]);

    // console.log(data?.data.data.orders[0]);

    return (
        <React.Fragment>
            <MainHeader />
            <section className="max-w-screen-xl h-screen mx-auto w-full py-4">
                <div className="h-10"></div>
                <div className="bg-white shadow-lg px-4 py-8 flex flex-col justify-center items-center">
                    <h2 className=''>
                        Your order has been placed successfully.
                    </h2>
                    <Link href={'/products/'} className="no-underline hover:underline hover:text-green-600">
                        Continue exploring products.
                    </Link>
                </div>
            </section>
            <MainFooter />
        </React.Fragment>
    );
}

export default OrderPage
