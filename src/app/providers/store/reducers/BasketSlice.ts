import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BasketItemType} from "@entities/basketItem";
import {ProductType} from "@entities/productItem";

interface BasketState {
    items: BasketItemType[];
}

const initialState: BasketState = {
    items: JSON.parse(sessionStorage.getItem('basketItems') || '[]'),
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket(state, action: PayloadAction<BasketItemType | ProductType>): void {
            const existingItem = state.items.find(
                item =>
                    item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },

        removeOneItem(state, action: PayloadAction<BasketItemType>): void {
            const item = state.items.find(item =>
                item.id === action.payload.id
            );

            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    state.items = state.items.filter(item =>
                        item.id !== action.payload.id
                    )
                }
            }
        },

        removeFromBasket(state, action: PayloadAction<BasketItemType>): void {
            const item = state.items.find(item =>
                item.id === action.payload.id
            );

            if (item) {
                state.items = state.items.filter(item =>
                    item.id !== action.payload.id
                )
            }
        }
    }
})
;

export const {
    addToBasket,
    removeOneItem,
    removeFromBasket
} = basketSlice.actions;

export default basketSlice.reducer;
