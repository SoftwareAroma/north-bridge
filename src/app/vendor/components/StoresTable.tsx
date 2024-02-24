'use client';
import {
    Button,
    Modal,
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
} from 'flowbite-react';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import StoreTableItem from './StoreTableItem';
import StoreForm from './StoreForm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteStore } from '@/shared';


const StoresTable = () => {
    const [openStoreModal, setOpenStoreModal] = useState(false);
    const [activeStore, setActiveStore] = useState(null);
    const vendor = useSelector((state: any) => state.vendor.vendor);
    const [stores, setStores] = useState([]);
    const router = useRouter();

    const _storeDeletion = async (id: string) => {
        try {
            const response = await deleteStore(id);
            if (response.data.success === true) {
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    useMemo(() => {
        setStores(vendor?.stores);
    }, [vendor]);

    return (
        <React.Fragment>
            <div className="overflow-x-auto mt-4 ">
                <div className="flex flex-row justify-between items-center px-8 mb-4 bg-blue-200 py-2">
                    <div className=""></div>
                    <div>
                        <Button className='bg-blue-600 px-4' onClick={() => setOpenStoreModal(true)}>
                            Add store
                        </Button>
                    </div>
                </div>
                <Table striped>
                    <TableHead>
                        <TableHeadCell>Store name</TableHeadCell>
                        <TableHeadCell>Address</TableHeadCell>
                        <TableHeadCell>Location</TableHeadCell>
                        <TableHeadCell>
                            <span className="sr-only">Action</span>
                        </TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {
                            stores?.map((store: any, index: number) => {
                                return <StoreTableItem
                                    key={index}
                                    name={store.name}
                                    address={store.address}
                                    location={store.location}
                                    onDelete={_storeDeletion.bind(this, store.id)}
                                    onEdit={() => {
                                        console.log("edit store clicked");
                                        setOpenStoreModal(true);
                                        setActiveStore(store);
                                    }}
                                    onClick={() => {
                                        router.push(`/vendor/stores/${store.id}`);
                                    }}
                                />
                            })
                        }
                    </TableBody>
                </Table>

                {/* add store modal */}
                <Modal show={openStoreModal} size="xl" onClose={
                    () => setOpenStoreModal(false)
                } popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 uppercase">
                                Add a new store
                            </h3>
                            <div className="my-4">
                                <StoreForm
                                    isEdditing={!(activeStore == null)}
                                    store={activeStore}
                                    closeModal={() => setOpenStoreModal(false)}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </React.Fragment>
    );
}

export default StoresTable;
