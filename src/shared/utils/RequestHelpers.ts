import axios, { AxiosResponse } from "axios";

/**
 * Post Request
 * @param url 
 * @param data 
 * @returns AxiosResponse
 */
export const PostRequest = async (
    url: string,
    data: any,
): Promise<AxiosResponse<any, any>> => {
    return axios({
        url: url,
        method: "POST",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(data),
    });
}

/**
 * Post Form Data Request
 * @param url 
 * @param data 
 * @returns AxiosResponse
 */
export const PostFormDataRequest = async (
    url: string,
    data: any,
): Promise<AxiosResponse<any, any>> => {
    return axios({
        url: url,
        method: "POST",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
        },
        data: data,
    });
}

/**
 * Get Request
 * @param url 
 * @returns AxiosResponse
 */
export const GetRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
    return axios({
        url: url,
        method: "GET",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}

/**
 * Patch Request
 * @param url 
 * @param data 
 * @returns AxiosResponse
 */
export const PatchRequest = async (
    url: string,
    data: any,
): Promise<AxiosResponse<any, any>> => {
    return axios({
        url: url,
        method: "PATCH",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(data),
    });
}

/**
 * Patch Form Data Request
 * @param url 
 * @param data 
 * @returns AxiosResponse
 */
export const PatchFormDataRequest = async (
    url: string,
    data: any,
): Promise<AxiosResponse<any, any>> => {
    return axios({
        url: url,
        method: "PATCH",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
        },
        data: data,
    });
}

/**
 * Delete Request
 * @param url 
 * @returns AxiosResponse
 */
export const DeleteRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
    return axios({
        url: url,
        method: "DELETE",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}