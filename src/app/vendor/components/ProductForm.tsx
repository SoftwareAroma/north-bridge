'use client';
import { IProductCategory, createProduct, getStoreCategories, updateProduct } from '@shared';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { Alert, Button, Label, TextInput, Textarea } from 'flowbite-react';
import { Dispatch, Key, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { HiInformationCircle } from 'react-icons/hi';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import { IconButton } from '@mui/material';

const initialValues = {
    "name": "",
    "description": "",
    "amount": 0.0,
    "currency": "GHS",
    "quantity": 1,
    "images": [],
    "storeId": "",
    "category": ""
};

// const thumbInner = {
//     display: 'flex',
//     minWidth: 0,
//     overflow: 'hidden'
// };


type InProduct = {
    name: string;
    description: string;
    amount: number;
    currency: string;
    quantity: number;
    images: string[];
    storeId: string;
    category?: string;
};

type ProductFormProps = {
    storeId: string,
    isEdditing?: boolean;
    product?: any;
    closeModal?: () => void,
};

const ProductForm = (props: ProductFormProps) => {
    const { storeId, isEdditing = false, product, closeModal } = props;
    const [formValues, setFormValues] = useState(product ?? initialValues);
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');
    const [info, setInfo] = useState('');
    const [categories, setCategories]: [
        IProductCategory[] | null,
        Dispatch<SetStateAction<IProductCategory[] | null>>
    ] = useState<IProductCategory[] | null>([]);

    /**
     * Handle form change
     * @param e event
     */
    const handleFormChange = (e: any) => {
        // set error to empty
        setError('');
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    /**
     * Submit form
     * @param e event
     * @returns void
     */
    const submitForm = async (e: any) => {
        e.preventDefault();
        if (formValues.name === '' || formValues.description === '' || formValues.amount === 0) {
            setError('Please fill all the fields');
            return;
        }

        const formData = new FormData();

        const _price = {
            currency: formValues.currency,
            amount: parseFloat(formValues.amount.toString()),
        }

        // add form data
        formData.append("name", formValues.name);
        formData.append("description", formValues.description);
        formData.append("price", JSON.stringify({
            currency: formValues.currency,
            amount: parseFloat(formValues.amount.toString()),
        }));
        formData.append("categories", JSON.stringify([
            formValues.category,
        ]));
        formData.append("quantity", formValues.quantity);
        formData.append("storeId", storeId);
        formData.append("images", JSON.stringify([]));
        // add images
        files.forEach((file: any) => {
            formData.append('files', file, file.name);
        });

        // console.log(formData.values());
        // console.log(formData.getAll('images'));

        return await createProduct(formData, 'multipart/form-data')
            .then((response) => {
                if (response.data.success === true) {
                    setInfo(response.data.message);
                    setFormValues(initialValues);
                    closeModal;
                } else {
                    setInfo(response.data.message);
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    /**
     * Update a product
     * @param e event
     * @returns void
     */
    const _updateProduct = async (e: any) => {
        e.preventDefault();
        if (formValues.name === '' || formValues.description === '' || formValues.price.amount === 0) {
            setError('Please fill all the fields');
            return;
        }

        const formData = new FormData();

        const _price = {
            "currency": formValues.currency,
            "amount": parseFloat(formValues.amount.toString()),
        }

        formData.append("name", formValues.name);
        formData.append("description", formValues.description);
        formData.append("price", JSON.stringify({
            currency: formValues.currency,
            amount: parseFloat(formValues.amount.toString()),
        }));
        formData.append("categories", JSON.stringify([
            formValues.category,
        ]));
        formData.append("quantity", formValues.quantity);
        formData.append("storeId", storeId);
        formData.append("images", JSON.stringify([]));
        // add images
        files.forEach((file: any) => {
            formData.append('files', file, file.name);
        });

        return await updateProduct(product.id, formData)
            .then((response) => {
                if (response.data.success === true) {
                    setInfo(response.data.message);
                    setFormValues(initialValues);
                    closeModal;
                } else {
                    setInfo(response.data.message);
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    /**
     * Query for Product Categories from backend
     */
    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: getStoreCategories,
        enabled: true,
    });

    useEffect(() => {
        return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, []);

    /**
     * use Memo to memoize data
     */
    useMemo(() => {
        if (data) {
            setCategories(data?.data.data.storeCategories);
        }
    }, [data]);

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 4, // max number of files
        maxSize: 1024 * 1024 * 1000, // 1GB
        accept: {
            'image/*': []
        },
        onDrop: (acceptedFiles: any) => {
            setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },
        onDropRejected: () => {
            setError("Some files were rejected. Please try again.");
        },
        onFileDialogCancel: () => {
            setError("No files were selected.");
        }
    });

    return (
        <div className="w-full">
            <div className="w-full flex flex-col items-start">

                {
                    error &&
                    <Alert
                        color="failure" icon={HiInformationCircle}
                        className='my-4 rounded-lg shadow-md w-full'
                        onDismiss={() => setError('')}
                    >
                        <h3 className="font-medium">There was an Error</h3>
                        <div className="">
                            {error}
                        </div>
                    </Alert>
                }
                {
                    info &&
                    <Alert
                        color="info" icon={HiInformationCircle}
                        className='my-4 rounded-lg shadow-md w-full'
                        onDismiss={() => setInfo('')}
                    >
                        <h3 className="font-medium uppercase">
                            {isEdditing ? 'Store Updated' : 'Store Created'}
                        </h3>
                        <div className="">
                            {info}
                        </div>
                    </Alert>
                }

                <form className="w-full space-y-4">
                    <div className='w-full flex flex-col items-start'>
                        <Label htmlFor="name" value="Store Name" />
                        <TextInput
                            required
                            id="name"
                            type="text"
                            name='name'
                            value={formValues.name}
                            onChange={handleFormChange}
                            placeholder="Name"
                            className='w-full'
                        />
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <Label htmlFor="quantity" value="Quantity" />
                        <TextInput
                            required
                            id="quantity"
                            type="number"
                            name='quantity'
                            value={formValues.quantity}
                            onChange={handleFormChange}
                            placeholder="Quantity"
                            className='w-full'
                        />
                    </div>
                    <div className="flex flex-row space-x-4">
                        <div className='w-full flex flex-col items-start'>
                            <Label htmlFor="currency" value="Currency" />
                            <TextInput
                                required
                                id="currency"
                                type="text"
                                name='currency'
                                value={formValues.currency}
                                onChange={handleFormChange}
                                placeholder="GHS"
                                className='w-full'
                            />
                        </div>
                        <div className='w-full flex flex-col items-start'>
                            <Label htmlFor="amount" value="Amount" />
                            <TextInput
                                required
                                id="amount"
                                type="number"
                                name='amount'
                                value={formValues.amount}
                                onChange={handleFormChange}
                                placeholder="Amount"
                                className='w-full'
                            />
                        </div>
                    </div>

                    <div className='w-full flex flex-col items-start'>
                        <Label htmlFor="category" value="Category" />
                        <select
                            id="category"
                            name="category"
                            value={formValues.category}
                            onChange={handleFormChange}
                            className='w-full capitalize'
                        >
                            {
                                categories?.map((category: IProductCategory, index: number) => {
                                    return (
                                        <option
                                            key={index}
                                            value={category.id}
                                            className='capitalize'
                                        >
                                            {category.name}
                                        </option>
                                    );
                                })
                            }
                        </select>
                    </div>

                    <div className='w-full flex flex-col items-start'>
                        <Label htmlFor="description" value="Discription" />
                        <Textarea
                            id="description"
                            name='description'
                            value={formValues.description}
                            onChange={handleFormChange}
                            placeholder="Something about the product..."
                            required rows={4}
                        />
                    </div>

                    {
                        <section className="container flex flex-col justify-center items-center">
                            <div
                                {...getRootProps({ className: 'dropzone' })}
                                className='flex flex-col justify-center items-center w-full h-full border border-gray-300 border-dashed border-spacing-8 py-2 px-4'
                            >
                                <input
                                    {...getInputProps()}
                                    className='w-full h-full'
                                />
                                <p className='text-center w-full h-full'>
                                    Drag 'n' drop some files here, or click to select files
                                </p>
                            </div>
                            <aside
                                className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-16 py-8 px-2"
                            >
                                {
                                    (files.length > 0) && <button
                                        onClick={() => setFiles([])}
                                        className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1">
                                        Clear
                                    </button>
                                }
                                {
                                    files.map((file: any) => (
                                        <div
                                            key={file.name}
                                            className="rounded-md w-100 h-100"
                                        >
                                            <div className="flex min-w-10 overflow-hidden">
                                                <img
                                                    src={file.preview}
                                                    className="block h-full"
                                                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </aside>
                        </section>
                    }

                    <div className="flex justify-center gap-4">
                        <Button
                            color="success"
                            className='px-8 py-1 text-sm md:text-lg lg:text-xl'
                            onClick={
                                isEdditing ? _updateProduct : submitForm
                            }
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;
