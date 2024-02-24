'use client';
import {
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
} from 'flowbite-react';
import TableItem from './TableItem';
import { useSelector } from 'react-redux';
import { deleteProduct } from '@/shared';
import { useMemo } from 'react';

const ProductsTable = () => {

    const vendor = useSelector((state: any) => state.vendor.vendor);
    const products: any = [];

    // map through the stores and add the products to the products array
    useMemo(() => {
        vendor?.stores.map((store: any) => {
            store.products.map((product: any) => {
                products.push(product);
            });
        });
    }, [vendor]);

    const _productDeletion = async (id: string) => {
        try {
            const response = await deleteProduct(id);
            if (response.data.success === true) {
                console.log(response.data);
                // refresh the page
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="overflow-x-auto rounded-none mt-4 bg-white dark:bg-gray-950">
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
                        products.map((product: any, index: number) => {
                            return (
                                <TableItem
                                    key={index}
                                    name={product.name}
                                    quantity={product.quantity}
                                    amount={product.price.amount}
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

export default ProductsTable;
