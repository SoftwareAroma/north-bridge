'use client';

import { deleteProduct, storeDetail } from '@/providers/utils';
import { Skeleton } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import { Button, Modal, Table, TableBody, TableHead, TableHeadCell } from 'flowbite-react';
import TableItem from '../../components/TableItem';
import ProductForm from '../../components/ProductForm';

const StoreView = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [openProductModal, setOpenProductModal] = useState(false);

    const getStoreDetail = async () => {
        return await axios({
            url: storeDetail(id),
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
        queryKey: ['storeDetail'],
        queryFn: getStoreDetail,
        enabled: true,
    });
    console.log(data?.data.data.store);

    return (
        <React.Fragment>
            <div className="flex flex-row justity-between items-center w-full px-8 mt-4">
                <div className="w-full"></div>
                <div className=''>
                    <Button className='w-44 px-4' onClick={() => setOpenProductModal(true)}>
                        Add Product
                    </Button>
                </div>
            </div>
            {isLoading && <LoadingSkeleton />}
            {
                data?.data.data.store && !isLoading && (<DetailView data={data} />)
            }

            {/* add product modal */}
            <Modal show={openProductModal} size="xl" onClose={() => setOpenProductModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 uppercase">
                            Add Product to Store
                        </h3>
                        <div className="my-4">
                            <ProductForm />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

const DetailView = (props: any) => {
    const { data } = props;

    const _productDeletion = async (id: string) => {
        const response = await axios({
            url: deleteProduct(id),
            method: "DELETE",
            withCredentials: true,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
        if (response.data.success === true) {
            console.log(response.data);
            // refresh the page
            window.location.reload();
        }
    }

    return (
        <div className="px-8 py-2">
            <div className='py-2'>
                <h1>{data?.data.data.store.name}</h1>
                <div className="flex flex-row justify-start items-center space-x-4">
                    <p className='text-md lg:text-lg'>{data?.data.data.store.address}</p>
                    <p> - </p>
                    <p>{data?.data.data.store.location}</p>
                </div>
            </div>
            <Table striped>
                <TableHead>
                    <TableHeadCell>Product name</TableHeadCell>
                    <TableHeadCell>Category</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Action</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {
                        data?.data.data.store.address.products?.map((product: any, index: number) => {
                            return (
                                <TableItem
                                    key={index}
                                    name={product.name}
                                    category={product.category}
                                    price={product.price.amount}
                                    currency={product.price.currency}
                                    onDelete={_productDeletion.bind(this, product.id)}
                                    onEdit={() => { }}
                                    onClick={() => { }}
                                />
                            );
                        })
                    }
                </TableBody>
            </Table>
        </div>
    );
}

export default StoreView;
