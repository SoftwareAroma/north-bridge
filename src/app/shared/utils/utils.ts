export const mainEndpointApi: string = 'http://localhost:5000/api';
const _apiEndpoint: string = `${mainEndpointApi}/v1`;


/**
 * Admin API Endpoints
 */
const _adminApiEndpoint: string = `${_apiEndpoint}/admin`;
export const adminRegisterApi: string = `${_adminApiEndpoint}/register`;
export const adminLoginApi: string = `${_adminApiEndpoint}/login`;
export const adminListApi: string = `${_adminApiEndpoint}/admins`;
export const adminProfileApi: string = `${_adminApiEndpoint}/profile`;
export const adminDetailApi = (id: string): string => `${_adminApiEndpoint}/admin/${id}`;
export const adminUpdateApi = (id: string): string => `${_adminApiEndpoint}/admin/${id}`;
export const adminDeleteApi = (id: string): string => `${_adminApiEndpoint}/admin/${id}`;
export const adminLogoutApi: string = `${_adminApiEndpoint}/logout`;

/**
 * User API Endpoints
 */
const _userApiEndpoint: string = `${_apiEndpoint}/user`;
export const userRegisterApi: string = `${_userApiEndpoint}/register`;
export const userLoginApi: string = `${_userApiEndpoint}/login`;
export const userListApi: string = `${_userApiEndpoint}/users`;
export const userProfileApi: string = `${_userApiEndpoint}/profile`;
export const userDetailApi = (id: string): string => `${_userApiEndpoint}/user/${id}`;
export const userUpdateApi = (id: string): string => `${_userApiEndpoint}/user/${id}`;
export const userDeleteApi = (id: string): string => `${_userApiEndpoint}/user/${id}`;
export const userLogoutApi: string = `${_userApiEndpoint}/logout`;

/**
 * Add and remove product from user cart
 * @param id
 */
export const addToUserCartApi = (id: string): string => `${_userApiEndpoint}/add-cart/${id}`;
export const updateUserCartApi = (id: string, cartId: string): string => `${_userApiEndpoint}/update-cart/${id}/${cartId}`;
export const removeFromUserCartApi = (id: string, cartId: string): string => `${_userApiEndpoint}/remove-cart/${id}/${cartId}`;

/**
 * Vendor API Endpoints
 */
const _vendorApiEndpoint: string = `${_apiEndpoint}/vendor`;
export const vendorRegisterApi: string = `${_vendorApiEndpoint}/register`;
export const vendorLoginApi: string = `${_vendorApiEndpoint}/login`;
export const vendorListApi: string = `${_vendorApiEndpoint}/vendors`;
export const vendorProfileApi: string = `${_vendorApiEndpoint}/profile`;
export const vendorDetailApi = (id: string): string => `${_vendorApiEndpoint}/vendor/${id}`;
export const vendorUpdateApi = (id: string): string => `${_vendorApiEndpoint}/vendor/${id}`;
export const vendorDeleteApi = (id: string): string => `${_vendorApiEndpoint}/vendor/${id}`;
export const vendorLogoutApi: string = `${_vendorApiEndpoint}/logout`;

/**
 * Store API Endpoints
 */
const _storeApiEndpointApi: string = `${_apiEndpoint}/store`;
export const storeCreateApi: string = `${_storeApiEndpointApi}/create`;
export const storesApi: string = `${_storeApiEndpointApi}/stores`;
export const storeDetailApi = (id: string): string => `${_storeApiEndpointApi}/store/${id}`;
export const storeUpdateApi = (id: string): string => `${_storeApiEndpointApi}/store/${id}`;
export const storeDeleteApi = (id: string): string => `${_storeApiEndpointApi}/store/${id}`;
/**
 * Store Category API Endpoints
  */
export const storeCategoryCreateApi: string = `${_storeApiEndpointApi}/create-category`;
export const storeCategoriesApi: string = `${_storeApiEndpointApi}/categories`;
export const storeCategoryDetailApi = (id: string): string => `${_storeApiEndpointApi}/category/${id}`;
export const storeCategoryUpdateApi = (id: string): string => `${_storeApiEndpointApi}/category/${id}`;
export const storeCategoryDeleteApi = (id: string): string => `${_storeApiEndpointApi}/category/${id}`;
/**
 * Add and remove category from store
 * @param id
 */
export const storeCategoryAddApi = (id: string): string => `${_storeApiEndpointApi}/add-category/${id}`;
export const storeCategoryRemoveApi = (id: string): string => `${_storeApiEndpointApi}/remove-category/${id}`;
/**
 * Add and remove product from store
 * @param id
 */
export const storeAddProductApi = (id: string): string => `${_storeApiEndpointApi}/add-product/${id}`;
export const storeRemoveProductApi = (id: string): string => `${_storeApiEndpointApi}/remove-product/${id}`;

/**
 * Product API Endpoints
 */
const _productApiEndpoint: string = `${_apiEndpoint}/product`;
export const productCreateApi: string = `${_productApiEndpoint}/create`;
export const productsApi: string = `${_productApiEndpoint}/products`;
export const productDetailApi = (id: string): string => `${_productApiEndpoint}/product/${id}`;
export const productUpdateApi = (id: string): string => `${_productApiEndpoint}/product/${id}`;
export const productDeleteApi = (id: string): string => `${_productApiEndpoint}/product/${id}`;
/**
 * Product Category API Endpoints
 */
export const productCategoryCreateApi: string = `${_productApiEndpoint}/create-category`;
export const productCategoriesApi: string = `${_productApiEndpoint}/categories`;
export const productCategoryDetailApi = (id: string): string => `${_productApiEndpoint}/category/${id}`;
export const productCategoryUpdateApi = (id: string): string => `${_productApiEndpoint}/category/${id}`;
export const productCategoryDeleteApi = (id: string): string => `${_productApiEndpoint}/category/${id}`;


/**
 * Payment API Endpoints
 */
const _paymentApiEndpoint: string = `${_apiEndpoint}/payment`;
export const paymentInitializeApi: string = `${_paymentApiEndpoint}/initialize`;
export const paymentVerifyApi: string = `${_paymentApiEndpoint}/verify`;
export const paymentHistoryApi: string = `${_paymentApiEndpoint}/transactions`;

