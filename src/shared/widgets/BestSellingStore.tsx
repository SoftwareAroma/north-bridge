'use client';

import React, { useMemo } from 'react';
import { IStore, getStores } from '@shared';
import { useQuery } from '@tanstack/react-query';
import BestSellingStoreCard from './BestSellingStoreCard';

const BestSellingStore = () => {

    const [stores, setStores] = React.useState([]);

    const { data, isLoading } = useQuery({
        queryKey: ['stores'],
        queryFn: getStores,
        enabled: true,
    });

    // console.log('categories >>> ', data);

    useMemo(() => {
        if (data?.data.data.stores) {
            setStores(data?.data.data.stores);
        }
    }, [data]);

    return (
        <React.Fragment>
            <section className="best-selling-store-area">
                <div data-w-id="8d52a7cb-498b-ad22-84e3-f024dd5ca95d" className="container">
                    <div className="section-title-wrap">
                        <h3 className="section-title mb-40">Best Selling Store</h3>
                    </div>
                    <div className="best-selling-store-item-wrap">
                        {
                            (isLoading) && (
                                <div className='space-y-2'>
                                    <div className="animate-pulse flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                    <div className="animate-pulse flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                    <div className="animate-pulse flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            stores.map((store: IStore, index: number) => {
                                // console.log('store >>> ', store);
                                if (index < 4) {
                                    return (
                                        <BestSellingStoreCard
                                            key={index}
                                            image={"/images/store one-min.png"}
                                            thumbnail={store?.thumbnail ?? "/images/Ellipse 287.png"}
                                            title={store.name}
                                            categories={store.categories}
                                            tagline={store?.deliveryTime ?? "Delivery with in 24 hours"}
                                        />
                                    );
                                }
                            })
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default BestSellingStore;
