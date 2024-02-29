import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/UserReducer";
import adminReducer from "./reducers/AdminReducer";
import vendorReducer from "./reducers/VendorReducer";
import cartReducer from "./reducers/CartReducer";
import wishListReducer from "./reducers/WishListReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        vendor: vendorReducer,
        cart: cartReducer,
        wishList: wishListReducer,
    },
});

export default store;
