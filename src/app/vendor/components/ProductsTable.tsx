'use client';
import {
    Modal,
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
} from 'flowbite-react';
import TableItem from './TableItem';
import { useSelector } from 'react-redux';
import { IProduct, IStore, deleteProduct } from '@/shared';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductForm from './ProductForm';

const ProductsTable = () => {
    const vendor = useSelector((state: any) => state.vendor.vendor);
    const [products, setProducts]: [
        IProduct[] | null,
        Dispatch<SetStateAction<IProduct[] | null>>
    ] = useState<IProduct[] | null>([]);
    const router = useRouter();
    const [openProductModal, setOpenProductModal] = useState(false);
    const [product, setProduct]: [IProduct | null, Dispatch<SetStateAction<IProduct | null>>] = useState<IProduct | null>(null);

    // map through the stores and add the products to the products array
    useEffect(() => {
        setProducts(vendor?.stores.map((store: IStore) => store.products).flat());
    }, [vendor]);

    const _productDeletion = async (id: string) => {
        try {
            const response = await deleteProduct(id);
            if (response.data.success === true) {
                // console.log(response.data);
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
                        products?.map((product: any, index: number) => {
                            return (
                                <TableItem
                                    key={index}
                                    name={product.name}
                                    quantity={product.quantity}
                                    amount={product.price.amount}
                                    currency={product.price.currency}
                                    onDelete={() => _productDeletion(product.id)}
                                    onEdit={() => { }}
                                    onClick={() => {
                                        router.push(`/vendor/product/${product.id}`);
                                    }}
                                />
                            );
                        })
                    }
                </TableBody>
            </Table>

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
                                storeId={product?.storeId ?? ''}
                            />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ProductsTable;
