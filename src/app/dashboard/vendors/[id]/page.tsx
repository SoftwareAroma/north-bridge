'use client';

import { IProduct, IStore, IVendor, deleteProduct, deleteStore, deleteVendor, getVendorById } from '@shared';
import { useQuery } from '@tanstack/react-query';
import { Card } from 'flowbite-react';
import React, { useMemo, useState } from 'react';
import LoadingSkeleton from '@/app/vendor/components/LoadingSkeleton';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const VendorView = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [vendor, setVendor] = useState(null);

    const getVendor = async () => {
        return await getVendorById(id);
    };

    // Queries
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['vendorDetail'],
        queryFn: getVendor,
        enabled: true,
    });

    useMemo(() => {
        if (data) {
            // console.log(data?.data.data.store);
            setVendor(data?.data.data.vendor)
        }
    }, [data]);


    return (
        <React.Fragment>
            {isLoading && <LoadingSkeleton />}
            {
                vendor && !isLoading && (<DetailView vendor={vendor} refetch={refetch} />)
            }

        </React.Fragment>
    );
}

const DetailView = (props: { vendor: IVendor, refetch?: any }) => {
    const router = useRouter();
    const [products, setProducts] = useState(0)
    const { vendor, refetch } = props;

    useMemo(() => {
        var productCount = 0;
        vendor.stores?.map((store) => {
            productCount += store.products.length;
        });
        setProducts(productCount);
    }, [vendor]);

    const _productDeletion = async (id: string) => {
        const response = await deleteProduct(id);
        if (response.data.success === true) {
            console.log(response.data);
            // router.push('/dashboard/vendors/')
            refetch();
        }
    }
    const _storeDelete = async (id: string) => {
        const response = await deleteStore(id);
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
                        <h2 className="text-gray-800 text-3xl font-bold">{vendor.userName}</h2>
                        <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="BLANK()">{vendor.email}</a>
                        <p className="mt-2 text-gray-500 text-sm">
                            {`${vendor.firstName} ${vendor.otherName} ${vendor.lastName}`}
                        </p>
                        <p className="mt-2 text-gray-500 text-sm">
                            {vendor.phone}
                        </p>
                    </div>
                    <hr className="mt-6" />
                    <div className="flex  bg-gray-50 ">
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span className="font-semibold">{vendor.stores.length} </span> Stores</p>
                        </div>
                        <div className="border"></div>
                        <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p> <span className="font-semibold">{products} </span> Products</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* stores */}
            <div className="flex flex-col justify-start items-start px-4 py-2">
                <div className="">
                    <h3>Stores</h3>
                </div>
                <div className="w-full bg-gray-100 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        vendor?.stores?.map((store: IStore) => {
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
                                        {store.name}
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        {store.about}
                                    </p>

                                    <div className="flex flex-row justify-between items-center">
                                        <div className=""></div>
                                        <button
                                            className="px-4 py-2 bg-red-700 text-white hover:bg-red-600 capitalize"
                                            onClick={() => _storeDelete(store.id)}
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
            {/* products */}
            <div className="flex flex-col justify-start items-start px-4 py-2">
                <div className="">
                    <h3>Products</h3>
                </div>
                <div className="w-full bg-gray-100 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        vendor?.stores?.map((store: IStore) => {
                            return store?.products?.map((product: IProduct) => {
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
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default VendorView;
