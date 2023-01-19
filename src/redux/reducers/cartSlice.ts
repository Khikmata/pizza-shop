import { createSlice, PayloadAction } from "@reduxjs/toolkit"




export interface ICartItem{
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: string;
    count: number;
}

interface ICartInitState {
    cartPriceTotal: number;
    items: ICartItem[];
    totalCount: number;
}

const initialState:ICartInitState = {
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
                return (obj.price * obj.count) + sum;
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
            if (findItem){
                state.cartPriceTotal -= findItem.price * findItem.count;
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
            if (findItem){
            state.cartPriceTotal += findItem.price;
            }
        },
        // -1 к счетчику на страничке корзины
        removeItem: (state, action: PayloadAction<ICartItem>) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type);
            findItem && findItem.count--;
            if (findItem){
            state.cartPriceTotal -= findItem.price;
            }
        },
    }
});

export const { addToCart, removeFromCart, clearCart, addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;