import { IFilterInitState, ISort } from './types';
import { RootState } from '../../store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"




const initialState: IFilterInitState = {
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
        setCategoryIndex: (state, action: PayloadAction<number>) => {
            state.categoryIndex = action.payload;
        },
        setSortType: (state, action: PayloadAction<ISort>) => {
            state.sort = action.payload;
        },
        toggleOrderBy: (state) => {
            state.sort.orderBy = !state.sort.orderBy;
        },
        setFilters: (state, action: PayloadAction<IFilterInitState>) => {
            state.sort = action.payload.sort;
            state.categoryIndex = action.payload.categoryIndex;
        }
    }
});



export const { setCategoryIndex, setSortType, toggleOrderBy, setFilters } = filterSlice.actions;

export default filterSlice.reducer;