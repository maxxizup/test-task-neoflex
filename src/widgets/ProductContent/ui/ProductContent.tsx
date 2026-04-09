// import components
import { ProductsList } from '@widgets/ProductsList';

// import types
import { FilterType } from '@features/filterProducts';
import { ProductType } from '@entities/productItem';

interface ProductContentPropsType {
    filter: FilterType;
    allUniqueCategories: string[];
    categorizedProducts: Record<string, ProductType[]>;
    addToBasket: (newItem: ProductType) => void;
    sortedAndSearchedProducts: ProductType[];
    openQuickView: (product: ProductType) => void;
}

export const ProductContent = (props: ProductContentPropsType) => {
    const {
        filter,
        allUniqueCategories,
        categorizedProducts,
        addToBasket,
        sortedAndSearchedProducts,
        openQuickView,
    } = props;

    return (
        <>
            {filter.groupBy === 'category' ? (
                [...allUniqueCategories].map((category) => {
                    const categoryProducts = categorizedProducts[category];
                    const subCategoryTitle = categoryProducts[0].subCategoryTitle;

                    return (
                        <ProductsList
                            openQuickView={openQuickView}
                            addBasket={addToBasket}
                            title={subCategoryTitle}
                            products={categoryProducts}
                        />
                    );
                })
            ) : (
                <ProductsList
                    openQuickView={openQuickView}
                    addBasket={addToBasket}
                    title={'Наушники'}
                    products={sortedAndSearchedProducts}
                />
            )}
        </>
    );
};
