'use client';

import { Alert, Button, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import axios, { AxiosResponse } from 'axios';
import { createStore, updateStore } from '@/providers/utils';
import { useSelector } from 'react-redux';

const initialValues = {
    "name": "",
    "about": "",
    "phone": "",
    "address": "",
    "location": "",
    "vendorId": "",
    "categories": [],
};

type IStore = {
    name: string;
    about: string;
    phone: string;
    address: string;
    location: string;
    storeCategories?: string[];
    vendorId: string;
};

type StoreFormProps = {
    isEdditing?: boolean;
    store?: any;
    closeModal?: () => void;
};

const StoreForm = (props: StoreFormProps) => {
    const { isEdditing = false, store, closeModal } = props;
    const [formValues, setFormValues] = useState(store ?? initialValues);
    const [error, setError] = useState('');
    const [info, setInfo] = useState('');

    /// active vendor
    const vendor = useSelector((state: any) => state.vendor.vendor);

    const handleFormChange = (e: any) => {
        // set error to empty
        setError('');
        setInfo('');
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const updateExistingStore = async (data: IStore) => {
        const name = data.name;
        const about = data.about;
        const address = data.address;
        const location = data.location;
        const vendorId = data.vendorId;
        const storeCategories = data.storeCategories;
        // remove the first zero of the phone number and replace it with +233
        const newPhone = data.phone.replace(/^0/, '+233');
        const phone = newPhone;

        const _data = {
            name,
            about,
            phone,
            address,
            location,
            vendorId,
            storeCategories,
        }

        // console.log("data >>>", _data);
        return await axios({
            url: updateStore(store.id),
            method: "PATCH",
            withCredentials: true,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            data: _data,
        });
    };

    const createNewStore = async (data: IStore) => {
        const name = data.name;
        const about = data.about;
        const address = data.address;
        const location = data.location;
        const vendorId = data.vendorId;
        const storeCategories = data.storeCategories;
        // remove the first zero of the phone number and replace it with +233
        const newPhone = data.phone.replace(/^0/, '+233');
        const phone = newPhone;

        const _data = {
            name,
            about,
            phone,
            address,
            location,
            vendorId,
            storeCategories,
        }

        // console.log("data >>>", _data);
        return await axios({
            url: createStore,
            method: "POST",
            withCredentials: true,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            data: _data,
        });
    };

    const submitForm = async (e: any) => {
        e.preventDefault();
        // if any of the fields except categories is empty, return
        if (!formValues.name || !formValues.about || !formValues.phone || !formValues.address || !formValues.location) {
            setError('Please fill all fields');
            return;
        }
        const _data = {
            ...formValues,
            vendorId: vendor.id,
        };
        const response: AxiosResponse<any, any> = isEdditing ? await updateExistingStore(_data) : await createNewStore(_data);
        // console.log("response >>>", response);
        if (response.data.success === true) {
            setInfo(response.data.message);
            setFormValues(initialValues);
            if (isEdditing) {
                closeModal && closeModal();
            }
        } else {
            // if message is an array, join the array seperated by a comma
            if (Array.isArray(response.data.message)) {
                setError(response.data.message.join(', '));
            } else {
                setError(response.data.message);
            }
        }
    };

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
                        <Button color="success" className='px-12 py-1' onClick={submitForm}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StoreForm;
