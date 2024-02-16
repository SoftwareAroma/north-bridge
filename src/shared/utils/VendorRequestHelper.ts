import {AxiosResponse} from "axios";
import {
    vendorDeleteApi,
    vendorDetailApi,
    vendorLoginApi, vendorLogoutApi,
    vendorProfileApi,
    vendorRegisterApi,
    vendorUpdateApi,
    DeleteRequest,
    GetRequest,
    PatchRequest,
    PostRequest, vendorListApi
} from "@shared";

/**
 * Register Vendor
 * @param data
 */
export const registerVendor = async (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(vendorRegisterApi, data);
}

/**
 * Login Vendor
 * @param data
 */
export const loginVendor = async (data: { email: string, password: string }): Promise<AxiosResponse<any,any>> => {
    const email: string = data.email;
    const password: string = data.password;
    return PostRequest(vendorLoginApi, {email, password});
}

/**
 * Get Vendor Profile
 */
export const getVendorProfile = async (): Promise<AxiosResponse<any,any>> => {
    return GetRequest(vendorProfileApi);
};

/**
 * Update Vendor Profile
 * @param id
 * @param data
 */
export const updateVendorProfile = async (id:string, data: any): Promise<AxiosResponse<any,any>> => {
    return PatchRequest(vendorUpdateApi(id), data);
}

/**
 * Get Vendors
 */
export const getVendors = async (): Promise<AxiosResponse<any,any>> => {
    return GetRequest(vendorListApi);
}

/**
 * Delete Vendor Profile
 * @param id
 */
export const deleteVendorProfile = async (id: string): Promise<AxiosResponse<any,any>> => {
    return DeleteRequest(vendorDeleteApi(id));
}

/**
 * Get Vendor By Id
 * @param id
 */
export const getVendorById = async (id: string): Promise<AxiosResponse<any,any>> => {
    return GetRequest(vendorDetailApi(id));
}

/**
 * Logout Vendor
 */
export const logoutVendor = async (): Promise<AxiosResponse<any,any>> => {
    return GetRequest(vendorLogoutApi);
}
