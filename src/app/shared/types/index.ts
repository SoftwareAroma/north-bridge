import {AxiosResponse} from "axios";

export type TQuery = {data:  AxiosResponse<any, any> | undefined, isLoading: boolean};

export type ILoginFormValues = {
    email: string;
    password: string;
    rememberMe: string;
    showPassword: string;
}

export type IVendorRegisterFormValues = {
    email: string;
    password: string;
    userName: string;
    firstName: string;
    lastName: string;
    otherName?: string;
    phone: string;
    showPassword: string;
}

export type IVendorRegisterData = {
    email: string,
    password: string,
    userName: string,
    firstName: string,
    lastName: string,
    otherName?: string,
    phone: string,
};