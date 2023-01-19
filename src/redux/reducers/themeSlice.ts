import { createSlice } from "@reduxjs/toolkit"

interface IThemeInitState{
    isNightMode: boolean;
}
const item = localStorage.getItem('isNightMode');
export const storedNightMode = item ? JSON.parse(item) : false;

const initialState:IThemeInitState = {

    isNightMode: storedNightMode,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setIsNightMode: (state) => {
            state.isNightMode = !state.isNightMode;
            localStorage.setItem('isNightMode', JSON.stringify(state.isNightMode));
        },

    }
});

export const { setIsNightMode } = themeSlice.actions;

export default themeSlice.reducer;