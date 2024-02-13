'use client';
import {
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
} from 'flowbite-react';
import TableItem from './TableItem';
import { useSelector } from 'react-redux';

const ProductsTable = () => {

    const vendor = useSelector((state: any) => state.vendor.vendor);
    const products: any = [];

    // map through the stores and add the products to the products array
    vendor?.stores.map((store: any) => {
        store.products.map((product: any) => {
            products.push(product);
        });
    });

    console.log(products)

    const _productDeletion = async (id: string) => {
        // const response = await axios({
        //     url: deleteProduct(id),
        //     method: "DELETE",
        //     withCredentials: true,
        //     headers: {
        //         "Accept": "application/json",
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //     },
        // });
        // if (response.data.success === true) {
        //     console.log(response.data);
        //     // refresh the page
        //     window.location.reload();
        // }
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

export default ProductsTable;
