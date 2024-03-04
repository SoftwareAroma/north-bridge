import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/UserReducer";
import adminReducer from "./reducers/AdminReducer";
import vendorReducer from "./reducers/VendorReducer";
import cartReducer from "./reducers/CartReducer";
import wishListReducer from "./reducers/WishListReducer";
import searchTermReducer from "./reducers/SearchTermReducer";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

// const persistConfig = {
//     key: 'root',
//     storage,
// };

const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        vendor: vendorReducer,
        cart: cartReducer,
        wishList: wishListReducer,
        searchTerm: searchTermReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
