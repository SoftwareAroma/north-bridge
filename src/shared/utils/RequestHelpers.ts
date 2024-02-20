import axios, { AxiosResponse } from "axios";

export const PostRequest = async (
    url: string,
    data: any,
    contentType?: string
): Promise<AxiosResponse<any, any>> => {
    return axios({
        url: url,
        method: "POST",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': contentType ?? 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(data),
    });
}

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

export const PatchRequest = async (
    url: string,
    data: any,
    contentType?: string
): Promise<AxiosResponse<any, any>> => {
    return axios({
        url: url,
        method: "PATCH",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': contentType ?? 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(data),
    });
}

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