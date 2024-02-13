import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/UserReducer";
import adminReducer from "./reducers/AdminReducer";
import vendorReducer from "./reducers/VendorReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        vendor: vendorReducer,
    },
});

export default store;
