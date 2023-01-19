import { createSlice } from "@reduxjs/toolkit"


interface ISearchInitState{
    searchValue: string;
}


const initialState:ISearchInitState = {
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