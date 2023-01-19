
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"


export interface IPizza {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
    description: string;
}

export interface IFetchPizza{
    categoryFilter: string;
    sortType: string;
    sortOrder: boolean | undefined;
    searchValue: string;
}


export const getPizzas = createAsyncThunk<IPizza[], IFetchPizza>(
    'getPizza/pizzaFetchStatus',
    async (params) => {
        const { categoryFilter, sortType, sortOrder, searchValue } = params;
        const {data} = await axios.get<IPizza[]>(`https://63bb40aa32d17a50908b3902.mockapi.io/items?${categoryFilter}&sortBy=${sortType}&order=${sortOrder ? 'asc' : 'desc'}&search=${searchValue}`)
        return data;
    }
)
export    enum Status {
    LOADING = 'loading',
    FULLFILLED = 'fulfilled',
    ERROR = 'error',
}


interface IFetchItemsInitState {
    items: IPizza[];
    status: Status;
}

const initialState:IFetchItemsInitState = {
    items: [],
    status: Status.LOADING, // loading || fulfilled || error
}


export const fetchItemSlice = createSlice({
    name: 'pizzaFetchStatus',
    initialState,
    reducers: {
        setItems: (state, action:PayloadAction<IPizza[]>) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPizzas.pending, (state) => {
                state.status = Status.LOADING;
                state.items = [];
            })
            .addCase(getPizzas.fulfilled, (state, action) => {
                state.status = Status.FULLFILLED;
                state.items = action.payload;
            })
            .addCase(getPizzas.rejected, (state) => {
                state.status = Status.ERROR;
                state.items = [];
            })
    }
});

export const { setItems } = fetchItemSlice.actions;

export default fetchItemSlice.reducer;