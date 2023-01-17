import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartPriceTotal: 0,
    items: [],
    totalCount: 0,
}



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        //Добавить пиццу с главной
        addToCart: (state, action) => {


            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type);

            (findItem) ? findItem.count++ : state.items.push({ ...action.payload, count: 1 })

            state.cartPriceTotal = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },
        // Удалить пиццу с корзины
        removeFromCart: (state, action) => {


            // state.items = state.items.filter(obj => obj.count < 1 || obj.id !== action.payload.id &&  obj.size !== action.payload.size)

            const findItem = state.items.find(obj => {
                return ((obj.id === action.payload.id) &&
                    (obj.size === action.payload.size) &&
                    (obj.type === action.payload.type))
            });
            state.cartPriceTotal -= findItem.price * findItem.count;
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
        addItem: (state, action) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type);
            findItem && findItem.count++;
            state.cartPriceTotal += findItem.price;
        },
        // -1 к счетчику на страничке корзины
        removeItem: (state, action) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type);
            findItem && findItem.count--;
            state.cartPriceTotal -= findItem.price;
        },
    }
});

export const { addToCart, removeFromCart, clearCart, addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;