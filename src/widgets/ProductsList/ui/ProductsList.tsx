// import styles
import s from './ProductsList.module.css';
// import components
import { ProductItem } from '@entities/productItem';
// import types
import { ProductType } from '@entities/productItem';

interface ProductsListProps {
    products: ProductType[];
    title: string;
    addBasket: (newItem: ProductType) => void;
    openQuickView: (product: ProductType) => void;
}

export const ProductsList = (props: ProductsListProps) => {
    const { products, title, addBasket, openQuickView } = props;

    return (
        <div className={s.productList}>
            <h2 className={s.productList__title}>{title}</h2>
            <div className={s.productList__cards}>
                {products.map((product, index) => (
                    <ProductItem
                        key={index}
                        addBasket={addBasket}
                        product={product}
                        openQuickView={openQuickView}
                    />
                ))}
            </div>
        </div>
    );
};
