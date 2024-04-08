'use client';

import {
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
} from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { IUser, deleteUser, getUsers } from '@/shared';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { TableCell, TableRow } from 'flowbite-react';


const UsersTable = () => {
    const [users, setUsers] = useState([])
    const router = useRouter();
    const { data } = useQuery({
        queryKey: ['customers'],
        queryFn: getUsers,
        enabled: true,
    });

    useMemo(() => {
        // console.log(data?.data.data.users)
        if (data?.data.data.users) {
            setUsers(data?.data.data.users);
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
                        users.map((user: IUser, index: number) => {
                            return (
                                <TableRow key={index} className="bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/users/${user.id}`);
                                    }} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.userName}
                                    </TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/users/${user.id}`);
                                    }}>{`${user.firstName} ${user.lastName}`}</TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/users/${user.id}`);
                                    }}>{user.email}</TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/users/${user.id}`);
                                    }}>{user.cart?.length}</TableCell>
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
        </div>
    );
}

export default UsersTable;
