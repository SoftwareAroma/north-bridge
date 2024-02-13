import {configureStore, EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple} from '@reduxjs/toolkit';
import userReducer from "./reducers/UserReducer";
import adminReducer from "./reducers/AdminReducer";
import vendorReducer from "./reducers/VendorReducer";
import {UnknownAction} from "redux";

const store: EnhancedStore<
    {
        user: { user: null },
        admin: { admin: null },
        vendor: { vendor: null }
    },
    UnknownAction,
    Tuple<[
        StoreEnhancer<{
            dispatch: ThunkDispatch<
                {
                    user: { user: null },
                    admin: { admin: null },
                    vendor: { vendor: null }
                }, undefined, UnknownAction>
        }
        >, StoreEnhancer
    ]>> = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        vendor: vendorReducer,
    },
});

export default store;
