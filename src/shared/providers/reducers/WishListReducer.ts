import { IProduct } from '@/shared/types';
import { createSlice } from '@reduxjs/toolkit'

const initialState: {
    wishlist: Array<{ product: IProduct }>
} = {
    wishlist: [],
}

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            // if it already exists in wishlist, return
            const existingProduct = state.wishlist.find((item) => item.product.id === action.payload.product.id);
            if (existingProduct) {
                return;
            }
            state.wishlist.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.product.id !== action.payload.product.id);
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addToWishlist,
    removeFromWishlist,
} = wishListSlice.actions;

export default wishListSlice.reducer;