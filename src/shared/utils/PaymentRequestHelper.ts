import {
    GetRequest,
    paymentHistoryApi,
    paymentInitializeApi,
    paymentVerifyApi,
    PostRequest
} from "@shared";
import {AxiosResponse} from "axios";

/**
 * Initialize Payment
 * @param data
 */
export const initializePayment = (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(paymentInitializeApi, data);
}

/**
 * Verify Payment
 * @param data
 */
export const verifyPayment = (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(paymentVerifyApi, data);
}

/**
 * Get Payment History
 */
export const getPaymentHistory = (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(paymentHistoryApi);
}