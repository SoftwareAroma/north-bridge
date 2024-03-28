'use client';

import MainFooter from '@/shared/components/footer/MainFooter';
import MainHeader from '@/shared/components/header/MainHeader';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CheckoutItemCard from './CheckoutItemCard';
import { IProduct, initializePayment, verifyPayment } from '@/shared';
import Link from 'next/link';
import { Alert, Button, Modal } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
}

const CheckoutView = () => {
    const [formValues, setFormValues] = React.useState(initialState);
    const [paymentPayload, setPaymentPayload]: any = React.useState({
        authorization_url: null,
        reference: null,
        access_code: null,
    });
    const [isRequesting, setIsRequesting] = React.useState(false);
    const [error, setError] = React.useState('');
    const [info, setInfo] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);
    const [subTotal, setSubTotal] = React.useState(0.0);
    const [total, setTotal] = React.useState(0.0);
    const [delivery, setDelivery] = React.useState(0.0);
    const [tax, setTax] = React.useState(0);
    const [currency, setCurrency] = React.useState('GHS');
    const [openModal, setOpenModal] = useState(false);
    const [isPaymentDone, setIsPaymentDone] = useState(false);
    const router = useRouter();

    const cart = useSelector((state: any) => state.cart.cart);
    const user = useSelector((state: any) => state.user.user);

    // console.log("Response>>>", paymentPayload);

    const calculateTotal = () => {
        let subTotal = 0;
        cart?.forEach((item: { product: IProduct, quantity: number }) => {
            subTotal += item.product.price.amount * item.quantity;
        });
        setSubTotal(subTotal);
        setDelivery(0);
        setTax(0);
        const totalAmount = subTotal + delivery + tax;
        const total = Math.round(totalAmount * 100) / 100;
        setTotal(total);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // set error to empty string
        setError('');
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const handlePayment = async (e: any) => {
        e.preventDefault();
        setIsRequesting(true);
        const { email } = formValues;
        // if email is null or empty, show error message
        // if email and password are empty, return
        if (!email.includes('@') || !email.includes('.com')) {
            setError('Please provide a valid email');
            return;
        }
        try {
            const _data = {
                "amount": parseFloat(total.toString()),
                "currency": currency,
                "email": email
            }
            const response = await initializePayment(_data);
            // console.log("Response>>>", response);
            if (response.data.success === true) {
                setInfo(response.data.message);
                setIsRequesting(false);
                setPaymentPayload(response?.data.data.payload['data']);
                setOpenModal(true);
                // console.log("Response>>>", paymentPayload);
            } else {
                setIsRequesting(false);
                // if message is an array, join the array seperated by a comma
                if (Array.isArray(response.data.message)) {
                    setError(response.data.message.join(', '));
                } else {
                    setError(response.data.message);
                }
            }
        } catch (_error) {
            // console.log(_error);
            setIsRequesting(false);
            if (isAxiosError(_error)) {
                if (Array.isArray(_error?.response?.data.message)) {
                    setError(_error?.response.data.message.join(', '));
                } else {
                    setError(_error?.response?.data.message);
                }
            }
        }
    }

    const verifyPaymentDone = async (reference: string) => {
        try {
            const _data = {
                reference: reference
            };
            const response = await verifyPayment(_data);
            var _isTrue = response?.data?.data.payload.data.receipt_number;
            if (response.data.success === true) {
                setInfo(response.data.message);
                if (_isTrue !== null || _isTrue !== undefined || _isTrue !== '') {
                    setInfo('Payment Verified, wait while we complete your order');
                    setError('');
                    router.push('/order/');
                } else {
                    setError('Payment cannot be verified');
                    setInfo('');
                }
                // console.log("Response>>>", response);
                // redirect to the order page
            } else {
                // if message is an array, join the array seperated by a comma
                if (Array.isArray(response.data.message)) {
                    setError(response.data.message.join(', '));
                } else {
                    setError(response.data.message);
                }
            }
        } catch (_error) {
            // console.log(_error);
            if (isAxiosError(_error)) {
                if (Array.isArray(_error?.response?.data.message)) {
                    setError(_error?.response.data.message.join(', '));
                } else {
                    setError(_error?.response?.data.message);
                }
            }
        }
    }

    // console.log(cart);
    useEffect(() => {
        setIsLoading(false);
        calculateTotal();
        // get the currency from the first product in the cart
        if (cart?.length > 0) {
            setCurrency(cart[0]?.product?.price?.currency);
        }
        if (user) {
            setFormValues({
                ...formValues,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
            })
        }
        if (isPaymentDone) {
            setInfo('Payment Done, wait while we verify your payment');
            setError('');
            verifyPaymentDone(paymentPayload.reference);
        }
    }, [cart, isPaymentDone]);

    return (
        <React.Fragment>
            <MainHeader />
            <div className="px-8 py-4">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
                    <div className="bg-[#3f3f3f] lg:h-screen lg:sticky lg:top-0">
                        <div className="relative h-full">
                            <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)]">
                                <h2 className="text-2xl font-bold text-white">Order Summary</h2>
                                <div className="space-y-6 mt-10">
                                    {
                                        isLoading && (
                                            <div className='space-y-2'>
                                                <div className="animate-pulse flex items-center space-x-4">
                                                    <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                                </div>
                                                <div className="animate-pulse flex items-center space-x-4">
                                                    <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                                </div>
                                                <div className="animate-pulse flex items-center space-x-4">
                                                    <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    {
                                        // if cart is empty, show add some products to cart call to action
                                        cart?.length === 0 && <div className="text-center py-12">
                                            <h3 className="text-xl font-extrabold text-white mb-6">
                                                Your cart is empty
                                            </h3>
                                            <Link
                                                type="button"
                                                href={'/products/'}
                                                className="no-underline text-center text-md px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded"
                                            >
                                                Add some products
                                            </Link>
                                        </div>
                                    }
                                    {
                                        cart?.map((item: { product: IProduct, quantity: number }, index: number) => {
                                            return (
                                                <CheckoutItemCard
                                                    key={index}
                                                    name={item.product.name}
                                                    image={item.product.images[0]?.path}
                                                    price={item.product.price.amount}
                                                    currency={item.product.price.currency}
                                                    quantity={item.quantity}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="absolute left-0 bottom-0 bg-[#444] w-full p-4">
                                <h4 className="flex flex-wrap gap-4 text-base text-white">
                                    Total <span className="ml-auto">{currency} {total}</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-2 h-max rounded-md p-8 sticky top-0">
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
                        {
                            info &&
                            <Alert
                                color="success" icon={HiInformationCircle}
                                className='my-4 rounded-lg shadow-md'
                            >
                                <h3 className="font-medium">Info</h3>
                                <div className="">
                                    {info}
                                </div>
                            </Alert>
                        }
                        <h2 className="text-2xl font-bold text-[#333]">Complete your order</h2>
                        <form className="mt-10">
                            <div>
                                <h3 className="text-lg font-bold text-[#333] mb-6">Personal Details</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="relative flex items-center">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            name='firstName'
                                            value={formValues.firstName}
                                            onChange={handleInputChange}
                                            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                                            viewBox="0 0 24 24">
                                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                            <path
                                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                    <div className="relative flex items-center">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            name='lastName'
                                            value={formValues.lastName}
                                            onChange={handleInputChange}
                                            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                                            viewBox="0 0 24 24">
                                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                            <path
                                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                    <div className="relative flex items-center">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name='email'
                                            value={formValues.email}
                                            onChange={handleInputChange}
                                            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                                        />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4"
                                            viewBox="0 0 682.667 682.667">
                                            <defs>
                                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                                </clipPath>
                                            </defs>
                                            <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                                <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                                    data-original="#000000"></path>
                                                <path
                                                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                                    data-original="#000000"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="relative flex items-center">
                                        <input
                                            type="number"
                                            placeholder="Phone No."
                                            name='phone'
                                            value={formValues.phone}
                                            onChange={handleInputChange}
                                            className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                                        />
                                        <svg fill="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 64 64">
                                            <path
                                                d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                                                data-original="#000000"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-bold text-[#333] mb-6">Delivery Address</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        name='address'
                                        value={formValues.address}
                                        onChange={handleInputChange}
                                        className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        name='city'
                                        value={formValues.city}
                                        onChange={handleInputChange}
                                        className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                                    />
                                </div>
                                <div className="flex gap-6 max-sm:flex-col mt-10">
                                    <Link href={'/cart/'}
                                        className="no-underline text-center rounded-md px-6 py-3 w-full text-sm font-semibold bg-transparent hover:bg-gray-100 border-2 text-[#333]"
                                    >
                                        Cancel
                                    </Link>
                                    {
                                        isRequesting ?
                                            <div className="flex flex-row justify-center items-center px-4 py-2">
                                                {/* spin progress indicator */}
                                                <div className="w-4 h-4 border-t-2 border-b-2 bg-[#333] text-white hover:bg-[#222] rounded-full animate-spin"></div>
                                            </div> : <button
                                                type="button"
                                                onClick={handlePayment}
                                                className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#333] text-white hover:bg-[#222]">
                                                Complete Purchase
                                            </button>
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Modal for payment */}
            <Modal show={openModal} onClose={() => {
                setOpenModal(false);
                setIsPaymentDone(false);
            }}>
                <Modal.Header>
                    <h3>
                        Complete Purchase
                    </h3>
                    {/* click done after transaction to close this modal info */}
                    <p className="pc-4 py-2">
                        Click done after transaction to close this modal
                    </p>
                </Modal.Header>
                <Modal.Body>
                    {/* show the paymentPayload['data']['authorization_url'] in this modal */}

                    <iframe
                        src={paymentPayload.authorization_url ?? ""}
                        width="100%"
                        height="500px"
                        title="Payment"
                    ></iframe>

                </Modal.Body>
                <Modal.Footer className="w-full">
                    <div className="flex flex-row justify-between items-center px-4 w-full">
                        <Button className='bg-red-500 text-white px-4 py-2' onClick={() => {
                            setOpenModal(false);
                            setIsPaymentDone(false);
                        }}>
                            Cancel
                        </Button>
                        <Button className='bg-green-500 text-white px-4 py-2' onClick={() => {
                            setOpenModal(false);
                            setIsPaymentDone(true);
                        }}>
                            Done
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

            <MainFooter />
        </React.Fragment>
    );
}

export default CheckoutView;
