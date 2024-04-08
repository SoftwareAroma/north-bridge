'use client';

import { Alert, Button, Label, TextInput, Textarea } from 'flowbite-react';
import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { AxiosResponse, isAxiosError } from 'axios';
import { IStoreCategory, createStore, getStoreCategories, updateStore, useAppSelector } from '@shared';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

const initialValues = {
    "name": "",
    "about": "",
    "phone": "",
    "address": "",
    "location": "",
    "vendorId": "",
    "category": "",
};


type StoreFormProps = {
    isEdditing?: boolean;
    store?: any;
    closeModal?: () => void;
};

const StoreForm = (props: StoreFormProps) => {
    const { isEdditing = false, store, closeModal } = props;
    const [formValues, setFormValues] = useState(store ?? initialValues);
    const [isRequesting, setIsRequesting] = useState(false);
    const [error, setError] = useState('');
    const [info, setInfo] = useState('');
    const [categories, setCategories]: [
        IStoreCategory[] | null,
        Dispatch<SetStateAction<IStoreCategory[] | null>>
    ] = useState<IStoreCategory[] | null>([]);

    /// active vendor
    const vendor = useAppSelector((state) => state.vendor.vendor);

    const handleFormChange = (e: any) => {
        // set error to empty
        setError('');
        setInfo('');
        const { name, value } = e.target;
        // console.log("name >>>", name, "value >>>", value);
        setFormValues({ ...formValues, [name]: value });
    }

    const updateExistingStore = async (data: any) => {
        return await updateStore(store.id, data);
    };

    const createNewStore = async (data: any) => {
        return await createStore(data);
    };

    const submitForm = async (e: any) => {
        e.preventDefault();
        // if any of the fields except categories is empty, return
        if (!formValues.name || !formValues.about || !formValues.phone || !formValues.address || !formValues.location) {
            setError('Please fill all fields');
            return;
        }
        try {
            const name = formValues.name;
            const about = formValues.about;
            const address = formValues.address;
            const location = formValues.location;
            const vendorId = vendor?.id;
            const storeCategories = [
                formValues.category
            ];
            // remove the first zero of the phone number and replace it with +233
            const newPhone = formValues.phone.replace(/^0/, '+233');
            const phone = newPhone;

            const _data = {
                "name": name,
                "about": about,
                "phone": phone,
                "address": address,
                "location": location,
                "categories": [
                    ...storeCategories,
                ],
                "vendorId": vendorId
            };
            // console.log("data >>>", _data);
            const response: AxiosResponse<any, any> = isEdditing ? await updateExistingStore(_data) : await createNewStore(_data);
            // console.log("response >>>", response);
            if (response.data.success === true) {
                setInfo(response.data.message);
                setFormValues(initialValues);
                closeModal && closeModal();
                window.location.reload();
            } else {
                // if message is an array, join the array seperated by a comma
                if (Array.isArray(response.data.message)) {
                    setError(response.data.message.join(', '));
                } else {
                    setError(response.data.message);
                }
            }
        } catch (error) {
            // console.log("error >>>", error);
            if (isAxiosError(error)) {
                if (Array.isArray(error?.response?.data.message)) {
                    setError(error?.response?.data.message.join(', '));
                } else {
                    setError(error?.response?.data.message);
                }
            }
        }
    };

    /**
     * Query for Store Categories from backend
     */
    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: getStoreCategories,
        enabled: true,
    });

    /**
     * use Memo to memoize data
     */
    useMemo(() => {
        if (data) {
            setCategories(data?.data.data.storeCategories);
            setFormValues({
                categories: [
                    data?.data.data.storeCategories[0]
                ]
            });
        }
    }, [data]);

    return (
        <div className="max-w-lg w-full">
            <div className="w-full flex flex-col items-start space-y-4">

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

                <form className="w-full space-y-4" onSubmit={submitForm}>
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
                        <Label htmlFor="category" value="Category" />
                        <select
                            id="category"
                            name="category"
                            value={formValues.category}
                            onChange={handleFormChange}
                            className='w-full capitalize'
                        >
                            {
                                categories?.map((category: IStoreCategory, index: number) => {
                                    return (
                                        <option
                                            key={index}
                                            value={category.id}
                                            onChange={handleFormChange}
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
                        <Label htmlFor="address" value="Store Address" />
                        <TextInput
                            required
                            id="address"
                            type="text"
                            name='address'
                            value={formValues.address}
                            onChange={handleFormChange}
                            placeholder="PLT 10 BLK XXI"
                            className='w-full'
                        />
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <Label htmlFor="location" value="Store Location" />
                        <TextInput
                            required
                            id="location"
                            type="text"
                            name='location'
                            value={formValues.location}
                            onChange={handleFormChange}
                            placeholder="Adum"
                            className='w-full'
                        />
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <Label htmlFor="phone" value="Contact" />
                        <TextInput
                            required
                            id="phone"
                            type="text"
                            name='phone'
                            value={formValues.phone}
                            onChange={handleFormChange}
                            placeholder="+233 500 000 0000"
                            className='w-full'
                        />
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <Label htmlFor="about" value="Store Description" />
                        <Textarea
                            id="comment"
                            name='about'
                            value={formValues.about}
                            onChange={handleFormChange}
                            placeholder="Something about your store..."
                            required rows={4}
                        />
                    </div>

                    <div className="flex justify-center items-center w-full gap-4">
                        {
                            isRequesting ?
                                <div className="flex flex-row justify-center items-center px-4 py-2">
                                    {/* spin progress indicator */}
                                    <div className="w-4 h-4 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
                                </div> :
                                <Button color="success" className='px-12 py-1' onClick={submitForm}>
                                    Submit
                                </Button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StoreForm;
