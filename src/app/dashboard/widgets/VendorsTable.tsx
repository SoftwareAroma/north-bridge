'use client';

'use client';
import {
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
} from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { IVendor, deleteVendor, getVendors } from '@/shared';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { TableCell, TableRow } from 'flowbite-react';
import LoadingSkeleton from '@/app/vendor/components/LoadingSkeleton';


const VendorsTable = () => {
    const [vendors, setVendors] = useState([])
    const router = useRouter();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['vendors'],
        queryFn: getVendors,
        enabled: true,
    });

    useMemo(() => {
        // console.log(data?.data.data.vendors)
        if (data?.data.data.vendors) {
            setVendors(data?.data.data.vendors)
        }
    }, [data]);

    const _vendorDelete = async (id: string) => {
        const response = await deleteVendor(id);
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
                    <TableHeadCell>User Name</TableHeadCell>
                    <TableHeadCell>Full Name</TableHeadCell>
                    <TableHeadCell>Phone Number</TableHeadCell>
                    <TableHeadCell>Number of Stores</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Action</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {
                        vendors.map((vendor: IVendor, index: number) => {
                            return (
                                isLoading ? <LoadingSkeleton /> : <TableRow key={index} className="bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/vendors/${vendor.id}`);
                                    }} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {vendor.userName}
                                    </TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/vendors/${vendor.id}`);
                                    }}>{`${vendor.firstName} ${vendor.lastName}`}</TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/vendors/${vendor.id}`);
                                    }}>{vendor.phone}</TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/vendors/${vendor.id}`);
                                    }}>{vendor.stores?.length}</TableCell>
                                    <TableCell className='space-x-2'>
                                        <button onClick={() => {
                                        }} className="font-medium no-underline bg-green-500 w-20 text-white px-4 py-1">
                                            Edit
                                        </button>
                                        <button onClick={() => { _vendorDelete(vendor.id) }} className="font-medium no-underline bg-red-500 w-20 px-4 py-1 text-white">
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

export default VendorsTable;
