'use client';

'use client';
import {
    Alert,
    FloatingLabel,
    Label,
    Modal,
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
    TextInput,
    Textarea,
} from 'flowbite-react';
import { useQuery } from '@tanstack/react-query';
import { createStoreCategory, deleteStoreCategory, deleteUser, getStoreCategories, getVendors } from '@/shared';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { TableCell, TableRow } from 'flowbite-react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { HiInformationCircle } from 'react-icons/hi';
import { AxiosResponse } from 'axios';

type ISCatValues = {
    name: string,
    description: string,
}

const initialValues: ISCatValues = {
    'name': '',
    'description': '',
}


const StoreCategoriesTable = () => {
    const [storeCategories, setStoreCategories] = useState([])
    const [formValues, setFormValues] = useState(initialValues);
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();
    const { data, refetch } = useQuery({
        queryKey: ['storeCategories'],
        queryFn: getStoreCategories,
        enabled: true,
    });

    useMemo(() => {
        console.log(data?.data.data.storeCategories)
        if (data?.data.data.storeCategories) {
            setStoreCategories(data?.data.data.storeCategories)
        }
    }, [data]);

    const _categoryDelete = async (id: string) => {
        const response = await deleteStoreCategory(id);
        if (response.data.success === true) {
            // console.log(response?.data);
            // refresh the page
            // window.location.reload();
            refetch();
        }
    }

    const handleFormChange = (e: any): void => {
        // set error to empty
        setError('');
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const _onSubmitForm = async (e: any) => {
        e.preventDefault();
        if (formValues.name.length < 3) {
            setError("Invalid Category Name");
            return;
        }
        const name = formValues.name;
        const description = formValues.description;
        const data: { name: string, description: string } = {
            name,
            description
        };
        const storeCategory: AxiosResponse<any, any> = await createStoreCategory(data);
        // console.log("Login>>>", login);
        if (storeCategory.data.success === true) {
            setOpenModal(false);
            refetch();
            // window.location.reload();
        } else {
            // if message is an array, join the array seperated by a comma
            if (Array.isArray(storeCategory.data.message)) {
                setError(storeCategory.data.message.join(', '));
            } else {
                setError(storeCategory.data.message);
            }
        }
    }

    return (
        <div className="overflow-x-auto rounded-none mt-8">
            {/* table begins here */}
            <Table striped>
                <TableHead>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell>Description</TableHeadCell>
                    <TableHeadCell></TableHeadCell>
                    <TableHeadCell></TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Action</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {
                        storeCategories.map((category: any, index: number) => {
                            return (
                                <TableRow key={index} onClick={() => { }} className="bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap capitalize font-medium text-gray-900 dark:text-white">
                                        {category.name}
                                    </TableCell>
                                    <TableCell>
                                        {category?.description.length <= 0 ? "Null" : category?.description}
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell className='space-x-2'>
                                        <button onClick={() => { }} className="font-medium no-underline bg-green-500 w-20 text-white px-4 py-1">
                                            Edit
                                        </button>
                                        <button onClick={() => _categoryDelete(category.id)} className="font-medium no-underline bg-red-500 w-20 px-4 py-1 text-white">
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>

            <Fab onClick={() => setOpenModal(true)} className='absolute bottom-10 right-10' color="primary" aria-label="add">
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
                        {
                            error &&
                            <Alert
                                color="failure" icon={HiInformationCircle}
                                className='my-4 rounded-lg shadow-md'
                            >
                                <h3 className="font-medium">There was an Error</h3>
                                <div className="">
                                    {error}
                                </div>
                            </Alert>
                        }
                        <div className="my-4 flex flex-col justify-start items-start w-full space-y-4">
                            <div className='w-full flex flex-col justify-start items-start'>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Category Name" />
                                </div>
                                <TextInput
                                    id="name"
                                    type="text"
                                    name='name'
                                    value={formValues.name}
                                    onChange={handleFormChange}
                                    placeholder="Cosmetics"
                                    required
                                    className='w-full'
                                />
                            </div>
                            <div className='w-full flex flex-col justify-start items-start'>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="description"
                                        value="Category Description"
                                    />
                                </div>
                                <Textarea
                                    id="description"
                                    name='description'
                                    value={formValues.description}
                                    onChange={handleFormChange}
                                    placeholder="Category Description..."
                                    rows={4}
                                />
                            </div>
                        </div>
                        <button
                            onClick={_onSubmitForm}
                            className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-2 uppercase text-sm md:text-lg lg:text-xl mt-4"
                        >
                            submit
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default StoreCategoriesTable;
