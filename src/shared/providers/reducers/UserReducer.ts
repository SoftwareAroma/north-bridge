import { IProduct, IUser } from '@/shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: {
    user: IUser | null,
    authState: boolean,
} = {
    user: null,
    authState: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
            state.authState = action.payload !== null
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setUser,
} = userSlice.actions;

export default userSlice.reducer;