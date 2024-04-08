import { IVendor } from '@/shared';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: {
    vendor: IVendor | null,
    authState: boolean,
} = {
    vendor: null,
    authState: false,
}

export const vendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        setVendor: (state, action: PayloadAction<any>) => {
            state.vendor = action.payload;
            state.authState = action.payload !== null
        },
    },
});

// Action creators are generated for each case reducer function
export const { setVendor } = vendorSlice.actions;

export default vendorSlice.reducer;