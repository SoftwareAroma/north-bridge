import { IProduct, IUser } from '@/shared/types';
import { createSlice } from '@reduxjs/toolkit'

const initialState: {
    term: string,
} = {
    term: "",
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setTerm(state, action) {
            state.term = action.payload;
        },
        clearTerm(state, _) {
            state.term = "";
        }
    },
});

// Action creators are generated for each case reducer function
export const {
    setTerm,
    clearTerm,
} = searchSlice.actions;

export default searchSlice.reducer;