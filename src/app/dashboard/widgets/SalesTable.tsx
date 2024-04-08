'use client';

import {
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
} from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { deleteProduct, getProducts } from '@/shared';
import { useMemo, useState } from 'react';
import { TableCell, TableRow } from 'flowbite-react';


const SalesTable = () => {
    const [transactions, setPayments]: any = useState([])
    const { data, refetch } = useQuery({
        queryKey: ['transactions'],
        queryFn: getProducts,
        enabled: true,
    });

    useMemo(() => {
        // console.log(data?.data.data.vendors)
        if (data?.data.data.products) {
            setPayments(data?.data.data.products)
        }
    }, [data]);

    const _productDelete = async (id: string) => {
        const response = await deleteProduct(id);
        if (response.data.success === true) {
            // console.log(response?.data);
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
                        transactions?.map((product: any, index: number) => {
                            return (
                                <TableRow key={index} onClick={() => { }} className="bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {product.name}
                                    </TableCell>
                                    <TableCell>{`${product.price.currency} ${product.price.amount}`}</TableCell>
                                    <TableCell>{product.status}</TableCell>
                                    <TableCell>{product.quantity}</TableCell>
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

export default SalesTable;
