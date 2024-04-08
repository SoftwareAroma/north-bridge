import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from "./reducers/UserReducer";
import adminReducer from "./reducers/AdminReducer";
import vendorReducer from "./reducers/VendorReducer";
import cartReducer from "./reducers/CartReducer";
import wishListReducer from "./reducers/WishListReducer";
import searchTermReducer from "./reducers/SearchTermReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    user: persistReducer(persistConfig, userReducer),
    admin: persistReducer(persistConfig, adminReducer),
    vendor: persistReducer(persistConfig, vendorReducer),
    cart: persistReducer(persistConfig, cartReducer),
    wishList: persistReducer(persistConfig, wishListReducer),
    searchTerm: persistReducer(persistConfig, searchTermReducer),
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    // devTools: process.env.NODE_ENV !== 'production',
});
// const store = configureStore({
//     reducer: {
//         user: userReducer,
//         admin: adminReducer,
//         vendor: vendorReducer,
//         cart: cartReducer,
//         wishList: wishListReducer,
//         searchTerm: searchTermReducer,
//     },
//     devTools: process.env.NODE_ENV !== 'production',
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
