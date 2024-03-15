import { IProduct, IUser } from '@/shared/types';
import { createSlice } from '@reduxjs/toolkit'

const initialState: {
    cart: Array<{ product: IProduct, quantity: number }>,
} = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // if product already exists in cart, increase quantity
            const existingProduct = state.cart.find((item) => item.product.id === action.payload.product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
                return;
            }
            state.cart.push(action.payload);
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.cart.find((item) => item.product.id === action.payload.product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
                return;
            }
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.cart.find((item) => item.product.id === action.payload.product.id);
            // if quantity is 1, remove from cart
            if (existingProduct?.quantity === 1) {
                state.cart = state.cart.filter((item) => item.product.id !== action.payload.product.id);
                return;
            }
            if (existingProduct) {
                existingProduct.quantity -= 1;
                return;
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.product.id !== action.payload.product.id);
        },
        // clear cart
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;