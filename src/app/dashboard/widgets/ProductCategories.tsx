'use client';

'use client';
import {
    Modal,
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
} from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { deleteProductCategory, deleteUser, getProductCategories } from '@/shared';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { TableCell, TableRow } from 'flowbite-react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const ProductCategoriesTable = () => {
    const [productCategories, setProductCategories] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();
    const { data } = useQuery({
        queryKey: ['productCategories'],
        queryFn: getProductCategories,
        enabled: true,
    });

    useMemo(() => {
        // console.log(data?.data.data.productCategories)
        if (data?.data.data.productCategories) {
            setProductCategories(data?.data.data.productCategories)
        }
    }, [data]);

    const _categoryDelele = async (id: string) => {
        const response = await deleteProductCategory(id);
        if (response.data.success === true) {
            console.log(response?.data);
            // refresh the page
            window.location.reload();
        }
    }

    return (
        <div className="overflow-x-auto rounded-none mt-8">
            <Table striped>
                <TableHead>
                    <TableHeadCell>User Name</TableHeadCell>
                    <TableHeadCell>Full Name</TableHeadCell>
                    <TableHeadCell>Email</TableHeadCell>
                    <TableHeadCell>Cart Items</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Action</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {
                        productCategories.map((user: any, index: number) => {
                            return (
                                <TableRow key={index} onClick={() => { }} className="bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.userName}
                                    </TableCell>
                                    <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.cart?.length}</TableCell>
                                    <TableCell className='space-x-2'>
                                        <button onClick={() => { }} className="font-medium no-underline bg-green-500 w-20 text-white px-4 py-1">
                                            Edit
                                        </button>
                                        <button onClick={() => _categoryDelele(user.id)} className="font-medium no-underline bg-red-500 w-20 px-4 py-1 text-white">
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>

            <Fab className='absolute bottom-10 right-10' color="primary" aria-label="add">
                <AddIcon />
            </Fab>

            {/* add store modal */}
            <Modal show={openModal} size="xl" onClose={
                () => setOpenModal(false)
            } popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 uppercase">
                            Add a new store category
                        </h3>
                        <div className="my-4">
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ProductCategoriesTable;
