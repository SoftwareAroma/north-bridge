import {
    productCategoriesApi,
    productCategoryCreateApi,
    productCategoryDeleteApi,
    productCategoryDetailApi,
    productCategoryUpdateApi,
    productCreateApi,
    productDeleteApi,
    productDetailApi,
    productsApi,
    productUpdateApi,
    DeleteRequest,
    GetRequest,
    PatchRequest,
    PostRequest,
    PostFormDataRequest,
    PatchFormDataRequest
} from "@shared";
import { AxiosResponse } from "axios";

/**
 * Create Product
 * @param data
 */
export const createProduct = (data: any): Promise<AxiosResponse<any, any>> => {
    return PostFormDataRequest(productCreateApi, data);
}

/**
 * Get Products
 */
export const getProducts = (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(productsApi);
}

export const getProduct = (id: string): Promise<AxiosResponse<any, any>> => {
    return GetRequest(productDetailApi(id));
}

/**
 * Update Product
 * @param id
 * @param data
 */
export const updateProduct = (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchFormDataRequest(productUpdateApi(id), data);
}

/**
 * Delete Product
 * @param id
 */
export const deleteProduct = (id: string): Promise<AxiosResponse<any, any>> => {
    return DeleteRequest(productDeleteApi(id));
}

/**
 * Create Product Category
 * @param data
 */
export const createProductCategory = (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(productCategoryCreateApi, data);
}

/**
 * Get Product Categories
 */
export const getProductCategories = (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(productCategoriesApi);
}

/**
 * Get Product Category
 * @param id
 */
export const getProductCategory = (id: string): Promise<AxiosResponse<any, any>> => {
    return GetRequest(productCategoryDetailApi(id));
}

/**
 * Update Product Category
 * @param id
 * @param data
 */
export const updateProductCategory = (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchRequest(productCategoryUpdateApi(id), data);
}

/**
 * Delete Product Category
 * @param id
 */
export const deleteProductCategory = (id: string): Promise<AxiosResponse<any, any>> => {
    return DeleteRequest(productCategoryDeleteApi(id));
}