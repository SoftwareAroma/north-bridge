import { AxiosResponse } from "axios";

export type TQuery = { data: AxiosResponse<any, any> | undefined, isLoading: boolean };

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

export type IProduct = {
    id: string;
    name: string;
    description: string;
    price: {
        amount: number;
        currency: string;
    };
    quantity: number;
    rating: number;
    status: string;
    storeId: string;
    createdAt: string;
    updatedAt: string;
    categories: any[]; // You might want to replace `any[]` with the actual type for categories
}

export type IStore = {
    id: string;
    name: string;
    about: string;
    phone: string;
    address: string;
    location: string;
    vendorId: string;
    createdAt: string;
    updatedAt: string;
    products: IProduct[];
    categories: [];
}

export type IVendor = {
    id: string;
    email: string;
    password: string;
    userName: string;
    firstName: string;
    lastName: string;
    otherName: string;
    phone: string;
    salt: string;
    isActive: boolean;
    isEmailVerified: boolean;
    role: string;
    createdAt: string;
    updatedAt: string;
    stores: IStore[];
}

export type IUser = {
    id: string;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    otherName: string;
    salt: string;
    phone: string;
    password: string;
    isActive: boolean;
    isEmailVerified: boolean;
    role: string;
    createdAt: string;
    updatedAt: string;
    cart: IProduct[]; // Assuming cart can contain any type of data
};

export type IProductCategory = {
    id: string,
    name: string,
    description: string,
    productId?: string,
    product?: IProduct,
    createdAt?: string,
    updatedAt?: string,
}

export type IStoreCategory = {
    id: string,
    name: string,
    description: string,
    storeId?: string,
    store?: IStore,
    createdAt?: string,
    updatedAt?: string,
}

