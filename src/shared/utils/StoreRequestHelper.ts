
// create store
import { AxiosResponse } from "axios";
import {
    storeAddProductApi,
    storeCategoriesApi,
    storeCategoryAddApi,
    storeCategoryCreateApi,
    storeCategoryDeleteApi,
    storeCategoryDetailApi,
    storeCategoryRemoveApi,
    storeCategoryUpdateApi,
    storeCreateApi,
    storeDeleteApi,
    storeDetailApi, storeRemoveProductApi,
    storesApi,
    storeUpdateApi,
    DeleteRequest,
    GetRequest,
    PatchRequest,
    PostRequest
} from "@shared";

/**
 * Create Store
 * @param data
 */
export const createStore = async (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(storeCreateApi, data);
}

/**
 * Get Store
 * @param id
 */
export const getStore = async (id: string): Promise<AxiosResponse<any, any>> => {
    return GetRequest(storeDetailApi(id));
}

/**
 * Get Stores
 */
export const getStores = async (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(storesApi);
}

/**
 * Update Store
 * @param id
 * @param data
 */
export const updateStore = async (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(storeUpdateApi(id), data);
}

/**
 * Delete Store
 * @param id
 */
export const deleteStore = async (id: string): Promise<AxiosResponse<any, any>> => {
    return DeleteRequest(storeDeleteApi(id));
}

/**
 * Create Store Category
 * @param data
 */
export const createStoreCategory = async (data: any): Promise<AxiosResponse<any, any>> => {
    return PostRequest(storeCategoryCreateApi, data);
}

/**
 * Get Store Categories
 */
export const getStoreCategories = async (): Promise<AxiosResponse<any, any>> => {
    return GetRequest(storeCategoriesApi);
}

/**
 * Get Store Category
 * @param id
 */
export const getStoreCategory = async (id: string): Promise<AxiosResponse<any, any>> => {
    return GetRequest(storeCategoryDetailApi(id));
}

/**
 * Update Store Category
 * @param id
 * @param data
 */
export const updateStoreCategory = async (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchRequest(storeCategoryUpdateApi(id), data);
}

/**
 * Delete Store Category
 * @param id
 */
export const deleteStoreCategory = async (id: string): Promise<AxiosResponse<any, any>> => {
    return DeleteRequest(storeCategoryDeleteApi(id));
}

/**
 * Add Store Category to Store
 * @param id
 * @param data
 */
export const addStoreCategoryToStore = async (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchRequest(storeCategoryAddApi(id), data);
}

/**
 * Remove Store Category from Store
 * @param id
 * @param data
 */
export const removeStoreCategoryFromStore = async (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchRequest(storeCategoryRemoveApi(id), data);
}

/**
 * Add Product to Store
 * @param id
 * @param data
 */
export const addProductToStore = async (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchRequest(storeAddProductApi(id), data);
}

/**
 * Remove Product from Store
 * @param id
 * @param data
 */
export const removeProductFromStore = async (id: string, data: any): Promise<AxiosResponse<any, any>> => {
    return PatchRequest(storeRemoveProductApi(id), data);
}