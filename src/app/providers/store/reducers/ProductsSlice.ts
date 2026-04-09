import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductType } from '@entities/productItem';
import { MOCK_PRODUCTS } from '@shared/api/mockProducts';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return new Promise<ProductType[]>((resolve) => {
            setTimeout(() => {
                resolve(MOCK_PRODUCTS);
            }, 3000);
        });
    }
);

interface ProductsState {
    items: ProductType[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
    items: [],
    loading: false,
    error: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = false;
            state.error = 'Ошибка загрузки товаров';
        });
    },
});

export default productsSlice.reducer;
