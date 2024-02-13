'use client';
import { productCreateApi } from '@shared';
import axios from 'axios';
import { Alert, Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { HiInformationCircle } from 'react-icons/hi';

const initialValues = {
    "name": "",
    "description": "",
    "price": {
        "amount": 0.0,
        "currency": "GHS"
    },
    "quantity": 1,
    "images": [],
    "storeId": "",
    "categories": []
};

type IProduct = {
    name: string;
    description: string;
    price: {
        amount: number;
        currency: string;
    };
    quantity: number;
    images: string[];
    storeId: string;
    categories?: string[];
};

type ProductFormProps = {
    isEdditing?: boolean;
    product?: any;
};

const ProductForm = (props: ProductFormProps) => {
    const { isEdditing = false, product } = props;
    const [formValues, setFormValues] = useState(product ?? initialValues);
    const [error, setError] = useState('');
    const [info, setInfo] = useState('');

    const handleFormChange = (e: any) => {
        // set error to empty
        setError('');
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const createNewProduct = async (data: IProduct) => {
        const _data = {
            ...data,
            price: {
                amount: parseFloat(data.price.amount.toString()),
                currency: data.price.currency
            }
        };

        return axios({
            url: productCreateApi,
            method: 'POST',
            data: _data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }
        });
    };

    const submitForm = async (e: any) => {
        e.preventDefault();
        if (formValues.name === '' || formValues.description === '' || formValues.price.amount === 0) {
            setError('Please fill all the fields');
            return;
        }

        await createNewProduct(formValues)
            .then((response) => {
                if (response.data.success === true) {
                    setInfo(response.data.message);
                    setFormValues(initialValues);
                }
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="max-w-lg w-full">
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
                                value={formValues.price.currency}
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
                                value={formValues.price.amount}
                                onChange={handleFormChange}
                                placeholder="Quantity"
                                className='w-full'
                            />
                        </div>
                    </div>

                    {/* <div className='w-full flex flex-col items-start'>
                        <Label htmlFor="category" value="Category" />
                        <select
                            id="category"
                            name="category"
                            value={formValues.categories}
                            onChange={handleFormChange}
                            className='w-full'
                        // multiple
                        >
                            <option value="food">Food</option>
                            <option value="clothing">Clothing</option>
                            <option value="electronics">Electronics</option>
                            <option value="furniture">Furniture</option>
                            <option value="cosmetics">Cosmetics</option>

                        </select>
                    </div> */}

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

                    {/* <div className='w-full flex flex-col items-center'>
                        <Dropzone
                            onDrop={acceptedFiles => {
                                console.log(acceptedFiles);
                            }}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section className='w-full py-4 bg-gray-200'>
                                    <div className='w-full h-full' {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>
                                            Drag 'n' drop some files here, or click to select files
                                        </p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div> */}

                    <div className="flex justify-center gap-4">
                        <Button color="success" className='px-8 py-1' onClick={() => { }}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;
