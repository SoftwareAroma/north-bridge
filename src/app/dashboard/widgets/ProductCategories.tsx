'use client';

import {
    Alert,
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
import {
    createProductCategory,
    deleteProductCategory,
    getProductCategories,
    updateProductCategory
} from '@/shared';
import { useMemo, useState } from 'react';
import { TableCell, TableRow } from 'flowbite-react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AxiosResponse } from 'axios';
import { HiInformationCircle } from 'react-icons/hi';

type ISCatValues = {
    name: string,
    description: string,
}

const initialValues: ISCatValues = {
    'name': '',
    'description': '',
}


const ProductCategoriesTable = () => {
    const [productCategories, setProductCategories] = useState([])
    const [formValues, setFormValues] = useState(initialValues);
    const [category, setCategory]: any = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState('');
    const { data, refetch } = useQuery({
        queryKey: ['productCategories'],
        queryFn: getProductCategories,
        enabled: true,
    });



    useMemo(() => {
        // console.log(data?.data.data.productCategories)
        if (data?.data.data.productCategories) {
            setProductCategories(data?.data.data.productCategories)
        }
        if (category) {
            setCategory({
                name: category?.name,
                description: category?.description,
            })
        }
    }, [data, category]);

    const _categoryDelele = async (id: string) => {
        const response = await deleteProductCategory(id);
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
        try {
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
            const productCategory: AxiosResponse<any, any> = await createProductCategory(data);
            // console.log("Login>>>", login);
            if (productCategory.data.success === true) {
                setOpenModal(false);
                refetch();
                setFormValues(initialValues);
                // window.location.reload();
            } else {
                // if message is an array, join the array seperated by a comma
                if (Array.isArray(productCategory.data.message)) {
                    setError(productCategory.data.message.join(', '));
                } else {
                    setError(productCategory.data.message);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    // update category
    const _updateCategory = async (e: any) => {
        e.preventDefault();
        try {
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
            const productCategory: AxiosResponse<any, any> = await updateProductCategory(category.id, data);
            // console.log("productCategory >>>", productCategory);
            if (productCategory.data.success === true) {
                setOpenModal(false);
                refetch();
                setFormValues(initialValues);
                // window.location.reload();
            } else {
                // if message is an array, join the array seperated by a comma
                if (Array.isArray(productCategory.data.message)) {
                    setError(productCategory.data.message.join(', '));
                } else {
                    setError(productCategory.data.message);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="overflow-x-auto rounded-none mt-8">
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
                        productCategories.map((category: any, index: number) => {
                            return (
                                <TableRow key={index} onClick={() => {

                                }} className="bg-white cursor-pointer dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap capitalize font-medium text-gray-900 dark:text-white">
                                        {category.name}
                                    </TableCell>
                                    <TableCell>
                                        {category?.description.length <= 0 ? "Null" : category?.description}
                                    </TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell className='space-x-2'>
                                        <button onClick={() => {
                                            setCategory(category);
                                            setOpenModal(true);
                                        }} className="font-medium no-underline bg-green-500 w-20 text-white px-4 py-1">
                                            Edit
                                        </button>
                                        <button onClick={() => _categoryDelele(category.id)} className="font-medium no-underline bg-red-500 w-20 px-4 py-1 text-white">
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
                            {category != null ? 'Update Product Category' : 'Add a new Product Category category'}
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
                            onClick={category != null ? _updateCategory : _onSubmitForm}
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

export default ProductCategoriesTable;
