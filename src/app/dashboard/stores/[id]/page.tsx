'use client';

import { IProduct, IStore, deleteProduct, getStore } from '@shared';
import { useQuery } from '@tanstack/react-query';
import { Card } from 'flowbite-react';
import React, { useMemo, useState } from 'react';
import LoadingSkeleton from '@/app/vendor/components/LoadingSkeleton';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const StoreView = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [store, setStore] = useState(null);

    const getStoreDetails = async () => {
        return await getStore(id);
    };

    // Queries
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['vendorDetail'],
        queryFn: getStoreDetails,
        enabled: true,
    });

    useMemo(() => {
        if (data) {
            // console.log(data?.data.data.store);
            setStore(data?.data.data.store)
        }
    }, [data]);


    return (
        <React.Fragment>
            {isLoading && <LoadingSkeleton />}
            {
                store && !isLoading && (<DetailView store={store} refetch={refetch} />)
            }

        </React.Fragment>
    );
}

const DetailView = (props: { store: IStore, refetch?: any }) => {
    const router = useRouter();
    const { store, refetch } = props;

    const _productDeletion = async (id: string) => {
        const response = await deleteProduct(id);
        if (response.data.success === true) {
            console.log(response.data);
            // router.push('/dashboard/vendors/')
            refetch();
        }
    }

    return (
        <div className="h-full w-full bg-white dark:bg-gray-800 flex flex-wrap items-start justify-start">
            <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3  bg-white  shadow-lg transform duration-200 easy-in-out">
                <div className="h-40 overflow-hidden" >
                    <img
                        className="w-full"
                        src="/img/forgot-password-office-dark.jpeg"
                        alt=""
                    />
                </div>
                <div className="flex justify-center px-5 py-2 -mt-12">
                    <img
                        className="h-32 w-32 bg-white p-2 rounded-full"
                        src="/images/account.png" alt=""
                    />

                </div>
                <div className=" ">
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold">{store.name}</h2>
                        <p className="text-gray-400 mt-2 hover:text-blue-500">{store.phone}</p>
                        <p className="mt-2 text-gray-500 text-sm">
                            {`${store.address} ${store.location}`}
                        </p>
                        <p className="mt-2 text-gray-500 text-sm">
                            {store.about}
                        </p>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex  bg-gray-50 ">
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span className="font-semibold">{store.products.length} </span> Products</p>
                        </div>
                        <div className="border"></div>
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            {
                                store?.categories.map((category: any) => {
                                    return (
                                        <p>
                                            {category.name}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* products */}
            <div className="flex flex-col justify-start items-start px-4 py-2">
                <div className="">
                    <h3>Products</h3>
                </div>
                <div className="w-full bg-gray-100 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        store?.products?.map((product: IProduct) => {
                            return (
                                <Card
                                    className="max-w-sm p-0 rounded-none"
                                    renderImage={
                                        () => <Image
                                            width={500}
                                            height={500}
                                            src="/img/create-account-office-dark.jpeg"
                                            alt="image 1"
                                        />
                                    }
                                >
                                    <div className="h-[0.5px] bg-gray-300 w-full"></div>
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {product.name}
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        {`${product.price.currency} ${product.price.amount}`}
                                    </p>

                                    <div className="flex flex-row justify-between items-center">
                                        <div className=""></div>
                                        <button
                                            className="px-4 py-2 bg-red-700 text-white hover:bg-red-600"
                                            onClick={() => _productDeletion(product.id)}
                                        >
                                            delete
                                        </button>
                                    </div>
                                </Card>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default StoreView;
