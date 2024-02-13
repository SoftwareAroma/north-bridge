export const mainEndpoint = 'http://localhost:5000/api';
export const apiEndpoint = `${mainEndpoint}/v1`;
/// admin api endpoints
export const adminApiEndpoint = `${apiEndpoint}/admin`;
export const adminRegister = `${adminApiEndpoint}/register`;
export const adminLogin = `${adminApiEndpoint}/login`;
export const adminList = `${adminApiEndpoint}/admins`;
export const adminProfile = `${adminApiEndpoint}/profile`;
export const adminDetail = (id: string) => `${adminApiEndpoint}/admin/${id}`;
export const adminUpdate = (id: string) => `${adminApiEndpoint}/admin/${id}`;
export const adminDelete = (id: string) => `${adminApiEndpoint}/admin/${id}`;
export const adminLogout = `${adminApiEndpoint}/logout`;

/// user api endpoints
export const userApiEndpoint = `${apiEndpoint}/user`;
export const userRegister = `${userApiEndpoint}/register`;
export const userLogin = `${userApiEndpoint}/login`;
export const userList = `${userApiEndpoint}/users`;
export const userProfile = `${userApiEndpoint}/profile`;
export const userDetail = (id: string) => `${userApiEndpoint}/user/${id}`;
export const userUpdate = (id: string) => `${userApiEndpoint}/user/${id}`;
export const userDelete = (id: string) => `${userApiEndpoint}/user/${id}`;
// cart api endpoints
export const addToUserCart = (id: string) => `${userApiEndpoint}/add-cart/${id}`;
export const updateUserCart = (id: string, cartId: string) => `${userApiEndpoint}/update-cart/${id}/${cartId}`;
export const removeFromUserCart = (id: string, cartId: string) => `${userApiEndpoint}/remove-cart/${id}/${cartId}`;
export const userLogout = `${userApiEndpoint}/logout`;

/// vendor api endpoints
export const vendorApiEndpoint = `${apiEndpoint}/vendor`;
export const vendorRegister = `${vendorApiEndpoint}/register`;
export const vendorLogin = `${vendorApiEndpoint}/login`;
export const vendorList = `${vendorApiEndpoint}/vendors`;
export const vendorProfile = `${vendorApiEndpoint}/profile`;
export const vendorDetail = (id: string) => `${vendorApiEndpoint}/vendor/${id}`;
export const vendorUpdate = (id: string) => `${vendorApiEndpoint}/vendor/${id}`;
export const vendorDelete = (id: string) => `${vendorApiEndpoint}/vendor/${id}`;
export const vendorLogout = `${vendorApiEndpoint}/logout`;

/// store api endpoints
export const storeApiEndpoint = `${apiEndpoint}/store`;
export const createStore = `${storeApiEndpoint}/create`;
export const stores = `${storeApiEndpoint}/stores`;
export const storeDetail = (id: string) => `${storeApiEndpoint}/store/${id}`;
export const updateStore = (id: string) => `${storeApiEndpoint}/store/${id}`;
export const deleteStore = (id: string) => `${storeApiEndpoint}/store/${id}`;
// store category
export const createStoreCategory = `${storeApiEndpoint}/create-category`;
export const storeCategories = `${storeApiEndpoint}/categories`;
export const storeCategoryDetail = (id: string) => `${storeApiEndpoint}/category/${id}`;
export const updateStoreCategory = (id: string) => `${storeApiEndpoint}/category/${id}`;
export const deleteStoreCategory = (id: string) => `${storeApiEndpoint}/category/${id}`;
// add store category
export const addStoreCategory = (id: string) => `${storeApiEndpoint}/add-category/${id}`;
export const removeStoreCategory = (id: string) => `${storeApiEndpoint}/remove-category/${id}`;
// add product to store
export const addProductToStore = (id: string) => `${storeApiEndpoint}/add-product/${id}`;
export const removeProductFromStore = (id: string) => `${storeApiEndpoint}/remove-product/${id}`;

/// product api endpoints
export const productApiEndpoint = `${apiEndpoint}/product`;
export const createProduct = `${productApiEndpoint}/create`;
export const products = `${productApiEndpoint}/products`;
export const productDetail = (id: string) => `${productApiEndpoint}/product/${id}`;
export const updateProduct = (id: string) => `${productApiEndpoint}/product/${id}`;
export const deleteProduct = (id: string) => `${productApiEndpoint}/product/${id}`;
// product category
export const createProductCategory = `${productApiEndpoint}/create-category`;
export const productCategories = `${productApiEndpoint}/categories`;
export const productCategoryDetail = (id: string) => `${productApiEndpoint}/category/${id}`;
export const updateProductCategory = (id: string) => `${productApiEndpoint}/category/${id}`;
export const deleteProductCategory = (id: string) => `${productApiEndpoint}/category/${id}`;


/// payment api endponts
export const paymentApiEndpoint = `${apiEndpoint}/payment`;
export const initiatePayment = `${paymentApiEndpoint}/initialize`;
export const verifyPayment = `${paymentApiEndpoint}/verify`;
export const paymentHistory = `${paymentApiEndpoint}/transactions`;

