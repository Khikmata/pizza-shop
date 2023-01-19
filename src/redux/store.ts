import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './reducers/filterSlice';
import cartSlice from './reducers/cartSlice';
import themeSlice from './reducers/themeSlice';
import searchSlice from './reducers/searchSlice';
import fetchItemSlice from './reducers/fetchItemSlice';


export const store = configureStore({
    reducer: {
        filterSlice,
        cartSlice,
        themeSlice,
        searchSlice,
        fetchItemSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;