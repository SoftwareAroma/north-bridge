import { IAdmin } from '@/shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: {
    admin: IAdmin | null,
    authState: boolean,
} = {
    admin: null,
    authState: false,
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmin: (state, action: PayloadAction<any>) => {
            state.admin = action.payload;
            state.authState = action.payload !== null
        },
    },
});

// Action creators are generated for each case reducer function
export const { setAdmin } = adminSlice.actions;

export default adminSlice.reducer;