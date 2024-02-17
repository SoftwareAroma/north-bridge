'use client';
import {
    Modal,
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
} from 'flowbite-react';
import { useSelector } from 'react-redux';
import StoreTableItem from './StoreTableItem';
import StoreForm from './StoreForm';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const StoresTable = () => {
    const [openStoreModal, setOpenStoreModal] = useState(false);
    const [activeStore, setActiveStore] = useState(null);
    const vendor = useSelector((state: any) => state.vendor.vendor);
    const stores = vendor?.stores;
    const router = useRouter();
    // console.log(stores);

    const _storeDeletion = async (id: string) => {
        // const response = await axios({
        //     url: deleteStore(id),
        //     method: "DELETE",
        //     withCredentials: true,
        //     headers: {
        //         "Accept": "application/json",
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //     },
        // });
        // if (response.data.success === true) {
        //     console.log(response?.data);
        //     // refresh the page
        //     window.location.reload();
        // }
    }

    return (
        <div className="overflow-x-auto rounded-none mt-4 bg-white dark:bg-gray-950">
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
                                isEdditing={true}
                                store={activeStore}
                                closeModal={() => setOpenStoreModal(false)}
                            />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default StoresTable;
