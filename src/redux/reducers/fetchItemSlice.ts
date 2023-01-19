import { IPizza } from './../../models/IPizza';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const getPizzas = createAsyncThunk(
    'getPizza/pizzaFetchStatus',
    async (params, thunkAPI) => {
        const { categoryFilter, sortType, sortOrder, searchValue }: any = params;
        const response = await axios.get(`https://63bb40aa32d17a50908b3902.mockapi.io/items?${categoryFilter}&sortBy=${sortType}&order=${sortOrder ? 'asc' : 'desc'}&search=${searchValue}`)

        console.log(thunkAPI)
        return response.data;
    }
)



interface IFetchItemsInitState {
    items: IPizza[];
    status: 'loading' | 'fulfilled' | 'error'
}

const initialState:IFetchItemsInitState = {
    items: [],
    status: 'loading', // loading || fulfilled || error
}


export const fetchItemSlice = createSlice({
    name: 'pizzaFetch',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPizzas.pending, (state) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(getPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'fulfilled';
            })
            .addCase(getPizzas.rejected, (state) => {
                state.status = 'error'
                state.items = [];
            })
    }
});

export const { setItems } = fetchItemSlice.actions;

export default fetchItemSlice.reducer;