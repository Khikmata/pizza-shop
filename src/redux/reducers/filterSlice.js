import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    //Значение - Для сортировки категорий
    categoryIndex: 0,
    //Значение - Для сортировки по цене/популярности/алфавиту
    sort: {
        name: 'популярности',
        sortValue: 'rating',
        orderBy: false,
    }
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryIndex: (state, action) => {
            state.categoryIndex = action.payload;
        },
        setSortType: (state, action) => {
            state.sort = action.payload;
        },
        toggleOrderBy: (state) => {
            state.sort.orderBy = !state.sort.orderBy;
        },
        setFilters: (state, action) => {
            state.sort = action.payload.sort;
            state.categoryIndex = Number(action.payload.categoryIndex);
        }
    }
});

export const { setCategoryIndex, setSortType, toggleOrderBy, setFilters } = filterSlice.actions;

export default filterSlice.reducer;