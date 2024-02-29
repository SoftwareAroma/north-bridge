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
import { IStore, deleteStore, getStores } from '@/shared';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { TableCell, TableRow } from 'flowbite-react';
import LoadingSkeleton from '@/app/vendor/components/LoadingSkeleton';


const StoresTable = () => {
    const [stores, setStores] = useState([])
    const router = useRouter();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['stores'],
        queryFn: getStores,
        enabled: true,
    });

    useMemo(() => {
        // console.log(data?.data.data.stores)
        if (data?.data.data.stores) {
            setStores(data?.data.data.stores)
        }
    }, [data]);

    const _storeDelete = async (id: string) => {
        const response = await deleteStore(id);
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
                    <TableHeadCell>Address</TableHeadCell>
                    <TableHeadCell>Contact</TableHeadCell>
                    <TableHeadCell>Number of Products</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Action</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {
                        stores.map((store: IStore, index: number) => {
                            return (
                                isLoading ? <LoadingSkeleton /> : <TableRow key={index} className="bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/stores/${store.id}`);
                                    }} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {store.name}
                                    </TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/stores/${store.id}`);
                                    }} >{`${store.address} ${store.location}`}</TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/stores/${store.id}`);
                                    }} >{store.phone}</TableCell>
                                    <TableCell onClick={() => {
                                        router.push(`/dashboard/stores/${store.id}`);
                                    }} >{store.products?.length}</TableCell>
                                    <TableCell className='space-x-2'>
                                        <button onClick={() => { }} className="font-medium no-underline bg-green-500 w-20 text-white px-4 py-1">
                                            Edit
                                        </button>
                                        <button onClick={() => _storeDelete(store.id)} className="font-medium no-underline bg-red-500 w-20 px-4 py-1 text-white">
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

export default StoresTable;
