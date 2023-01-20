import { ICartInitState, ICartItem } from './types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"





const initialState: ICartInitState = {
    cartPriceTotal: 0,
    items: [],
    totalCount: 0,
}




export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        //Добавить пиццу с главной
        addToCart: (state, action: PayloadAction<ICartItem>) => {

            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type);

            (findItem) ? findItem.count++ : state.items.push({ ...action.payload, count: 1 })

            state.cartPriceTotal = state.items.reduce((sum, obj) => {
                return (obj.totalPrice * obj.count) + sum;
            }, 0)
        },
        // Удалить пиццу с корзины
        removeFromCart: (state, action: PayloadAction<ICartItem>) => {


            // state.items = state.items.filter(obj => obj.count < 1 || obj.id !== action.payload.id &&  obj.size !== action.payload.size)

            const findItem = state.items.find(obj => {
                return ((obj.id === action.payload.id) &&
                    (obj.size === action.payload.size) &&
                    (obj.type === action.payload.type))
            });
            if (findItem) {
                state.cartPriceTotal -= findItem.totalPrice * findItem.count;
            }
            state.items = state.items.filter(obj => {
                return ((obj.id !== action.payload.id) ||
                    (obj.size !== action.payload.size) ||
                    (obj.type !== action.payload.type))
            });

        },
        // Очистить корзину
        clearCart: (state) => {
            state.items = [];
            state.cartPriceTotal = 0
        },
        // +1 к счетчику на страничке корзины
        addItem: (state, action: PayloadAction<ICartItem>) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type);
            findItem && findItem.count++;
            if (findItem) {
                state.cartPriceTotal += findItem.totalPrice;
            }
        },
        // -1 к счетчику на страничке корзины
        removeItem: (state, action: PayloadAction<ICartItem>) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type);
            findItem && findItem.count--;
            if (findItem) {
                state.cartPriceTotal -= findItem.totalPrice;
            }
        },
    }
});





export const { addToCart, removeFromCart, clearCart, addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;