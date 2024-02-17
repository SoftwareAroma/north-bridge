'use client';

import {
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
} from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { IProduct, deleteProduct, getProducts } from '@/shared';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { TableCell, TableRow } from 'flowbite-react';


const ProductsTable = () => {
    const [products, setProducts] = useState([])
    const router = useRouter();
    const { data, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        enabled: true,
    });

    useMemo(() => {
        // console.log(data?.data.data.vendors)
        if (data?.data.data.products) {
            setProducts(data?.data.data.products);
        }
    }, [data]);

    const _productDelete = async (id: string) => {
        const response = await deleteProduct(id);
        if (response.data.success === true) {
            console.log(response?.data);
            // refresh the page
            // window.location.reload();
            refetch();
        }
    }

    return (
        <div className="overflow-x-auto rounded-none mt-8">
            <Table striped>
                <TableHead>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>Status</TableHeadCell>
                    <TableHeadCell>Quantity In Stock</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Action</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {
                        products.map((product: IProduct, index: number) => {
                            return (
                                <TableRow key={index} className="bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/products/${product.id}`);
                                    }} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {product.name}
                                    </TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/products/${product.id}`);
                                    }}>{`${product.price.currency} ${product.price.amount}`}</TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/products/${product.id}`);
                                    }}>{product.status}</TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/products/${product.id}`);
                                    }}>{product.quantity}</TableCell>
                                    <TableCell className='space-x-2'>
                                        <button onClick={() => { }} className="font-medium no-underline bg-green-500 w-20 text-white px-4 py-1">
                                            Edit
                                        </button>
                                        <button onClick={() => _productDelete(product.id)} className="font-medium no-underline bg-red-500 w-20 px-4 py-1 text-white">
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </div>
    );
}

export default ProductsTable;
