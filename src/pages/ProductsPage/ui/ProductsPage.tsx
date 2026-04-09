import { useEffect, useState } from 'react';
// import styles
import './ProductsPage.css';
// import components
import { Input } from 'antd';
import { useProducts } from '@features/filterProducts/hooks/useProducts.ts';
import { useCategories } from '@features/filterProducts/hooks/useCategories.ts';
import { useCategorizedProducts } from '@features/filterProducts/hooks/useCategorizedProducts.ts';
import { Filters } from '@features/filterProducts';
import { ProductContent } from '@widgets/ProductContent';
import { message } from 'antd';

// import types
import { ProductType } from '@entities/productItem';
import { FilterType } from '@features/filterProducts';
import { useAppDispatch, useAppSelector } from '@shared/config/redux/redux.ts';
import { addToBasket } from '@app/providers/store/reducers/BasketSlice.ts';
import { fetchProducts } from '@app/providers/store/reducers/ProductsSlice';
import { PageLoader } from '@widgets/PageLoader';
import { QuickViewModal } from '@widgets/QuickViewModal';

const ProductsPage = () => {
    const { items, loading, error } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // states
    const [filter, setFilter] = useState<FilterType>({
        searchQuery: '',
        sortMethod: '',
        groupBy: '',
    });
    const [messageApi, contextHolder] = message.useMessage();
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // ------------------------------------------------------------------------

    // filters and search
    const sortedAndSearchedProducts = useProducts(items, filter.searchQuery, filter.sortMethod);
    const allUniqueCategories = useCategories(items);
    const categorizedProducts = useCategorizedProducts(
        sortedAndSearchedProducts,
        allUniqueCategories
    );

    // --------------------------------------------------------------------------------------------

    // handlers
    function handleAdd(product: ProductType) {
        dispatch(addToBasket(product));
        messageApi.success('Товар успешно добавлен в корзину!');
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFilter({ ...filter, searchQuery: e.target.value });
    };

    const openQuickView = (product: ProductType) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeQuickView = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <div className="ProductsPage">
            {loading && <PageLoader />}

            {error && <h2>Товары не найдены</h2>}

            {!loading && !error && (
                <>
                    {contextHolder}
                    <Input
                        onChange={handleInput}
                        value={filter.searchQuery}
                        className="myInput"
                        placeholder="Поиск..."
                        variant="underlined"
                    />
                    <Filters filter={filter} setFilter={setFilter} />
                    <ProductContent
                        addToBasket={handleAdd}
                        filter={filter}
                        categorizedProducts={categorizedProducts}
                        sortedAndSearchedProducts={sortedAndSearchedProducts}
                        allUniqueCategories={allUniqueCategories}
                        openQuickView={openQuickView}
                    />
                </>
            )}
            <QuickViewModal
                isOpen={isModalOpen}
                product={selectedProduct}
                onClose={closeQuickView}
                onAddToCart={handleAdd}
            />
        </div>
    );
};

export default ProductsPage;
