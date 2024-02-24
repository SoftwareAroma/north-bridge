import {
    adminDeleteApi,
    adminDetailApi,
    adminListApi,
    adminLoginApi, adminLogoutApi,
    adminProfileApi,
    adminRegisterApi, adminUpdateApi, DeleteRequest,
    GetRequest,
    PostRequest
} from "@shared";
import { AxiosResponse } from "axios";

export const registerAdmin = (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(adminRegisterApi, data);
}

export const loginAdmin = (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(adminLoginApi, data);
}

export const getAdmins = (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(adminListApi);
}

export const getAdminProfile = (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(adminProfileApi);
}

export const getAdmin = (id: string): Promise<AxiosResponse<any, any>> => {
    return GetRequest(adminDetailApi(id));
}

export const updateAdmin = (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(adminUpdateApi(id), data);
}

export const deleteAdmin = (id: string): Promise<AxiosResponse<any, any>> => {
    return DeleteRequest(adminDeleteApi(id));
}

export const logoutAdmin = (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(adminLogoutApi);
}