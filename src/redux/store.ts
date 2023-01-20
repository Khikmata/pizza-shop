import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filterSlice from './reducers/filter/filterSlice';
import cartSlice from './reducers/cart/cartSlice';
import themeSlice from './reducers/theme/themeSlice';
import searchSlice from './reducers/search/searchSlice';
import fetchItemSlice from './reducers/fetchItems/fetchItemSlice';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: [filterSlice]
}

const rootReducer = combineReducers({
    filterSlice,
    cartSlice,
    themeSlice,
    searchSlice,
    fetchItemSlice,
})


const persistedReducer = persistReducer(persistConfig as any, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store)