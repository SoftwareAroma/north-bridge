'use client';

import Link from 'next/link';
import React from 'react';
import { vendorLogin } from '@/providers/utils';
import { Alert, TextInput } from 'flowbite-react';
import { HiEye, HiEyeOff, HiInformationCircle, HiLockOpen, HiMail } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import axios, { AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';

const defaltValues = {
    'email': '',
    'password': '',
    'rememberMe': 'no',
    'showPassword': 'no',
}

const LoginPage = () => {
    const [formValues, setFormValues] = React.useState(defaltValues);
    const [error, setError] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter();

    const handleFormChange = (e: any) => {
        // set error to empty
        setError('');
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const loginVendor = async (loginCreds: { email: string, password: string }) => {
        const email = loginCreds.email;
        const password = loginCreds.password;
        return await axios({
            url: vendorLogin,
            method: "POST",
            withCredentials: true,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            data: JSON.stringify({
                email,
                password,
            }),
        });
    }

    const submitForm = async (e: any) => {
        e.preventDefault();
        const email = formValues.email;
        const password = formValues.password;

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

        const data = {
            email,
            password
        };
        const login: AxiosResponse<any, any> = await loginVendor(data);
        // console.log("Login>>>", login);
        if (login.data.success === true) {
            // navigate to the vendor dashboard
            router.push('/vendor/');
        } else {
            // if message is an array, join the array seperated by a comma
            if (Array.isArray(login.data.message)) {
                setError(login.data.message.join(', '));
            } else {
                setError(login.data.message);
            }
        }
    }

    return (
        <React.Fragment>
            <div className="w-full h-screen flex flex-col justify-center items-center bg-background-one bg-cover bg-no-repeat py-32 px-12">
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

                <div className="w-full max-w-sm p-4 bg-white shadow-md border border-gray-200 rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" onSubmit={submitForm}>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white uppercase">Sign In</h5>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formValues.email}
                                onChange={handleFormChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="********"
                                value={formValues.password}
                                onChange={handleFormChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                            <div className=" flex flex-row mt-2 justify-start items-center">
                                <input
                                    id="showPassword"
                                    type="checkbox"
                                    value={formValues.showPassword}
                                    onChange={
                                        () => {
                                            handleFormChange
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
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        value={formValues.rememberMe}
                                        onChange={handleFormChange}
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    />
                                </div>
                                <label
                                    htmlFor="remember"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Remember me
                                </label>
                            </div>
                            <Link href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                                Lost Password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={submitForm}
                        >
                            Login
                        </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex flex-row justify-center items-center">
                            Not registered?
                            <Link href="/vendor/auth/register/" className="text-blue-700 hover:underline dark:text-blue-500 mx-4">
                                Create account
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LoginPage;
