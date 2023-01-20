import { IThemeInitState } from './types';
import { createSlice } from "@reduxjs/toolkit"



const initialState: IThemeInitState = {

    isNightMode: true,
}

export const themeSlice = createSlice({
    name: 'themeState',
    initialState,
    reducers: {
        setIsNightMode: (state) => {
            state.isNightMode = !state.isNightMode;
        },

    }
});

export const { setIsNightMode } = themeSlice.actions;

export default themeSlice.reducer;