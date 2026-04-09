import { combineReducers, configureStore } from '@reduxjs/toolkit';
import basketReducer from '../reducers/BasketSlice.ts';
import productsReducer from '../reducers/ProductsSlice';

const rootReducer = combineReducers({
    basket: basketReducer,
    products: productsReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
