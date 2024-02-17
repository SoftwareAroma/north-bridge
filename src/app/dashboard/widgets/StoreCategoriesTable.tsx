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
import { deleteUser, getStoreCategories, getVendors } from '@/shared';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { TableCell, TableRow } from 'flowbite-react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const StoreCategoriesTable = () => {
    const [storeCategories, setStoreCategories] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();
    const { data } = useQuery({
        queryKey: ['storeCategories'],
        queryFn: getStoreCategories,
        enabled: true,
    });

    useMemo(() => {
        // console.log(data?.data.data.storeCategories)
        if (data?.data.data.storeCategories) {
            setStoreCategories(data?.data.data.storeCategories)
        }
    }, [data]);

    const _userDeleted = async (id: string) => {
        const response = await deleteUser(id);
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
                        storeCategories.map((user: any, index: number) => {
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
                                        <button onClick={() => _userDeleted} className="font-medium no-underline bg-red-500 w-20 px-4 py-1 text-white">
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

export default StoreCategoriesTable;
