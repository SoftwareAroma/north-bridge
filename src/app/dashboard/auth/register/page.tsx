'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import { AxiosResponse, isAxiosError } from 'axios';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import { IVendorRegisterData, IVendorRegisterFormValues, TQuery, getAdminProfile, registerAdmin, registerVendor, setAdmin, setVendor } from "@shared";
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

const defaultValues: IVendorRegisterFormValues = {
    'email': '',
    'password': '',
    'userName': '',
    'firstName': '',
    'lastName': '',
    'otherName': '',
    'phone': '',
    'showPassword': 'no',
}


const RegisterPage = () => {

    const [formValues, setFormValues] = React.useState(defaultValues);
    const [error, setError] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [isLogin, setIsLogIn] = React.useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const handleFormChange = (e: any): void => {
        // set error to empty
        setError('');
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const submitForm = async (e: any): Promise<void> => {
        e.preventDefault();
        try {
            const email: string = formValues.email;
            const password: string = formValues.password;
            const userName: string = formValues.userName;
            const firstName: string = formValues.firstName;
            const lastName: string = formValues.lastName;
            const otherName: string | undefined = formValues.otherName;
            const phone: string = formValues.phone;

            // if email and password are empty, return
            if (!email.includes('@') || !email.includes('.com')) {
                setError('Please provide a valid email');
                return;
            }
            // if password is less than 8 characters return 
            if (password.length < 8) {
                setError("Weak Password");
                return;
            }
            // if password is less than 8 characters return 
            if (firstName.length < 3 || lastName.length < 3 || userName.length < 3) {
                setError("Please fill all required fields");
                return;
            }
            const _data = {
                "email": email,
                "password": password,
                "userName": userName,
                "firstName": firstName,
                "lastName": lastName,
                "otherName": otherName,
                "phone": phone,
            }
            const response: AxiosResponse<any, any> = await registerAdmin(_data);
            // console.log("Login>>>", response);
            if (response.data.success === true) {
                // navigate to the vendor dashboard
                setIsLogIn(true);
            } else {
                // if message is an array, join the array seperated by a comma
                if (Array.isArray(response.data.message)) {
                    setError(response.data.message.join(', '));
                } else {
                    setError(response.data.message);
                }
            }
        } catch (err: any) {
            if (isAxiosError(err)) {
                if (Array.isArray(err?.response?.data.message)) {
                    setError(err?.response?.data.message.join(', '));
                } else {
                    setError(err?.response?.data.message);
                }
            }
        }
    }

    const { data } = useQuery({
        queryKey: ['adminProfile'],
        queryFn: getAdminProfile,
        enabled: true,
    });

    useMemo(() => {
        if (data) {
            dispatch(setAdmin(data?.data.data.admin));
            router.push('/dashboard/');
        }
    }, [data, isLogin]);

    return (
        <React.Fragment>
            <div className="w-full h-screen flex flex-col justify-center items-center bg-create-account dark:bg-create-account-dark bg-cover bg-no-repeat py-32 px-12">
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

                <div className="w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-4" onSubmit={submitForm}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white uppercase">Sign Up</h5>
                        <div>
                            <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input
                                type="text"
                                name="userName"
                                id="userName"
                                value={formValues.userName}
                                onChange={handleFormChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Janny"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formValues.firstName}
                                onChange={handleFormChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Jane"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formValues.lastName}
                                onChange={handleFormChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Doe"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={formValues.phone}
                                onChange={handleFormChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="+233 500 000 0000"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formValues.email}
                                onChange={handleFormChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="janedoe@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                value={formValues.password}
                                onChange={handleFormChange}
                                placeholder="********"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>
                        <div className="flex flex-row mt-2 justify-start items-center">
                            <input
                                id="showPassword"
                                type="checkbox"
                                value={formValues.showPassword}
                                onChange={
                                    (e: any): void => {
                                        handleFormChange(e);
                                        setShowPassword(!showPassword);
                                    }
                                }
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            />
                            <label
                                htmlFor="showPassword"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Show Password
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Register
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex flex-row justify-center items-center">
                            Already have an account?
                            <Link href="/dashbaord/auth/" className="text-blue-700 hover:underline dark:text-blue-500 mx-4">
                                login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RegisterPage