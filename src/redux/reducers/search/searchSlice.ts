import { ISearchInitState } from './types';
import { createSlice } from "@reduxjs/toolkit"


const initialState: ISearchInitState = {
    searchValue: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
    }
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;