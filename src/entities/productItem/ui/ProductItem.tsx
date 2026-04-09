// import styles
import s from './ProductItem.module.css';
// import IMGs
import starRate from '@shared/assets/icons/starRate.svg';
// import types
import { ProductType } from '../model/types/types';

interface ProductItemProps {
    product: ProductType;
    addBasket: (newItem: ProductType) => void;
    openQuickView: (product: ProductType) => void;
}

export const ProductItem = (props: ProductItemProps) => {
    const { addBasket, product, openQuickView } = props;

    return (
        <div className={s.productCard}>
            <div className={s.productCard__top}>
                <img
                    style={{ height: '237px', width: '237px' }}
                    src={product.img}
                    alt={product.title}
                />
                <button onClick={() => openQuickView(product)} className={s.quickView}>
                    <img
                        src="/src/shared/assets/icons/quickView.png"
                        alt="quickView"
                        style={{ height: '23px', width: '23px' }}
                    />
                    Быстрый просмотр
                </button>
            </div>
            <div className={s.productInfo}>
                <div className={s.productInfo__top}>
                    <h3 style={{ fontSize: '17px', fontWeight: '600' }}>{product.title}</h3>
                    <p
                        style={{
                            fontSize: '17px',
                            fontWeight: '600',
                            color: 'var(--main-accent-color)',
                        }}
                    >
                        {product.price} ₽
                    </p>
                </div>
                <div className={s.productInfo__bottom}>
                    <div className={s.productInfo__botom_rating}>
                        <img src={starRate} alt="Rating" />
                        <p
                            style={{
                                fontSize: '17px',
                                fontWeight: '600',
                                color: '#838383',
                            }}
                        >
                            {product.rate}
                        </p>
                    </div>
                    <button onClick={() => addBasket(product)} className={s.buyButton}>
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};
