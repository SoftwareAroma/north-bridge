import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    vendor: null,
}

export const vendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        setVendor: (state, action) => {
            state.vendor = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setVendor } = vendorSlice.actions;

export default vendorSlice.reducer;