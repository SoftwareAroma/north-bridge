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
import { deleteUser, getVendors } from '@/shared';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { TableCell, TableRow } from 'flowbite-react';
import { Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const ErrandersTable = () => {
    const [erranders, setErranders] = useState([])
    const [openErranderModal, setOpenErranderModal] = useState(false);
    const router = useRouter();
    const { data, refetch } = useQuery({
        queryKey: ['erranders'],
        queryFn: getVendors,
        enabled: true,
    });

    useMemo(() => {
        // console.log(data?.data.data.vendors)
        if (data?.data.data.users) {
            setErranders(data?.data.data.users)
        }
    }, [data]);

    const _userDeleted = async (id: string) => {
        const response = await deleteUser(id);
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
                    <TableHeadCell>User Name</TableHeadCell>
                    <TableHeadCell>Full Name</TableHeadCell>
                    <TableHeadCell>Email</TableHeadCell>
                    <TableHeadCell>Deliveries</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Action</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {
                        erranders.map((user: any, index: number) => {
                            return (
                                <TableRow key={index} className="bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell onClick={() => { }} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.userName}
                                    </TableCell>
                                    <TableCell onClick={() => { }}>{`${user.firstName} ${user.lastName}`}</TableCell>
                                    <TableCell onClick={() => { }}>{user.email}</TableCell>
                                    <TableCell onClick={() => { }}>{user.cart?.length}</TableCell>
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

            <Tooltip title="Add an Errander">
                <Fab className='absolute bottom-10 right-10' color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            {/* add store modal */}
            <Modal show={openErranderModal} size="xl" onClose={
                () => setOpenErranderModal(false)
            } popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 uppercase">
                            Add an errander
                        </h3>
                        <div className="my-4">
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ErrandersTable;
