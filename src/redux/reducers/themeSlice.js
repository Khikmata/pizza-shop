import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    isNightMode: JSON.parse(localStorage.getItem('isNightMode')) || false,
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