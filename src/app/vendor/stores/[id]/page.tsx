'use client';

import { IProduct, IStore, getStore } from '@shared';
import { useQuery } from '@tanstack/react-query';
import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import LoadingSkeleton from '@/shared/components/LoadingSkeleton';
import { Modal, Table, TableBody, TableHead, TableHeadCell } from 'flowbite-react';
import TableItem from '../../components/TableItem';
import ProductForm from '../../components/ProductForm';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';

const StoreView = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [openProductModal, setOpenProductModal] = useState(false);
    const [product, setProduct]: [IProduct | null, Dispatch<SetStateAction<IProduct | null>>] = useState<IProduct | null>(null);
    const [store, setStore]: [IStore | null, Dispatch<SetStateAction<IStore | null>>] = useState<IStore | null>(null);

    const router = useRouter();

    const getStoreDetail = async () => {
        return await getStore(id);
    };

    // Queries
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['storeDetail'],
        queryFn: getStoreDetail,
        enabled: true,
    });
    // console.log(data?.data.data.store);

    const _productDelete = async (id: string) => {

    }

    useMemo(() => {
        if (data) {
            setStore(data?.data.data.store);
        }
    }, [data]);

    return (
        <React.Fragment>
            {isLoading && <LoadingSkeleton />}
            {
                store && !isLoading && (
                    <React.Fragment>
                        <div className="px-8 py-2">
                            <div className='py-2'>
                                <h1>{store?.name}</h1>
                                <div className="flex flex-row justify-start items-center space-x-4">
                                    <p className='text-md lg:text-lg'>{store?.address}</p>
                                    <p> - </p>
                                    <p>{store?.location}</p>
                                </div>
                            </div>
                            <Table striped>
                                <TableHead>
                                    <TableHeadCell>Product name</TableHeadCell>
                                    <TableHeadCell>Quantity</TableHeadCell>
                                    <TableHeadCell>Price</TableHeadCell>
                                    <TableHeadCell>
                                        <span className="sr-only">Action</span>
                                    </TableHeadCell>
                                </TableHead>
                                <TableBody className="divide-y">
                                    {
                                        store && store?.products?.map((product: IProduct, index: number) => {
                                            return (
                                                <TableItem
                                                    key={index}
                                                    name={product.name}
                                                    quantity={product.quantity}
                                                    amount={product.price.amount}
                                                    currency={product.price.currency}
                                                    onDelete={() => _productDelete(product.id)}
                                                    onEdit={() => {
                                                        setProduct(product);
                                                        setOpenProductModal(true);
                                                    }}
                                                    onClick={() => {
                                                        router.push(`/vendor/stores/${id}/${product.id}`);
                                                    }}
                                                />
                                            );
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </React.Fragment>
                )
            }

            {!isLoading && <Fab
                onClick={() => setOpenProductModal(true)}
                className='absolute bottom-10 right-10'
                color="primary"
                aria-label="add"
            >
                <AddIcon />
            </Fab>}

            {/* add product modal */}
            <Modal
                show={openProductModal}
                size="2xl" onClose={() => setOpenProductModal(false)}
                popup
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center w-full">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 uppercase">
                            {product != null ? 'Update Product' : 'Add Product to Store'}
                        </h3>
                        <div className="my-4 w-full">
                            <ProductForm
                                isEdditing={!(product == null)}
                                product={product}
                                closeModal={() => setOpenProductModal(false)}
                                storeId={id}
                            />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default StoreView;
