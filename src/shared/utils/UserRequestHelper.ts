import {
    addToUserCartApi, DeleteRequest,
    GetRequest, orderCreateApi, orderDeleteApi, orderDetailApi, ordersApi, orderUpdateApi, PatchRequest,
    PostRequest,
    removeFromUserCartApi,
    updateUserCartApi,
    userDeleteApi,
    userDetailApi,
    userListApi,
    userLoginApi,
    userLogoutApi,
    userOrdersApi,
    userProfileApi,
    userRegisterApi,
    userUpdateApi
} from "@shared";
import { AxiosResponse } from "axios";

export const registerUser = (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(userRegisterApi, data);
}

export const loginUser = (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(userLoginApi, data);
}
export const getUsers = (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(userListApi);
}

export const getUserProfile = (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(userProfileApi);
}

export const getUser = (id: string): Promise<AxiosResponse<any, any>> => {
    return GetRequest(userDetailApi(id));
}

export const updateUser = (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchRequest(userUpdateApi(id), data);
}

export const deleteUser = (id: string): Promise<AxiosResponse<any, any>> => {
    return GetRequest(userDeleteApi(id));
}

export const logoutUser = (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(userLogoutApi);
}

export const addProductToCart = (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchRequest(addToUserCartApi(id), data);
}

export const updateUserCart = (id: string, cartId: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchRequest(updateUserCartApi(id, cartId), data);
}

export const removeProductFromCart = (id: string, cartId: string): Promise<AxiosResponse<any, any>> => {
    return DeleteRequest(removeFromUserCartApi(id, cartId));
}

export const addOrder = (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(orderCreateApi, data);
}

export const getOrders = (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(ordersApi);
}

export const getOrderDetail = (id: string): Promise<AxiosResponse<any, any>> => {
    return GetRequest(orderDetailApi(id));
}

export const getUserOrders = (id: string): Promise<AxiosResponse<any, any>> => {
    return GetRequest(userOrdersApi(id));
}

export const updateOrder = (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchRequest(orderUpdateApi(id), data);
}

export const deleteOrder = (id: string): Promise<AxiosResponse<any, any>> => {
    return DeleteRequest(orderDeleteApi(id));
}
