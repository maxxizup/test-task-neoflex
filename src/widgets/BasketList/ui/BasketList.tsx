// import styles
import s from './BasketList.module.css';
// import components
import { BasketItem } from '@entities/basketItem';

// import types
import { BasketItemType } from '@entities/basketItem';

interface BasketListProps {
    basketItems: BasketItemType[];
    deleteItem: (index: BasketItemType) => void;
    onIncrease: (item: BasketItemType) => void;
    onDecrease: (item: BasketItemType) => void;
}

export const BasketList = (props: BasketListProps) => {
    const { basketItems, deleteItem, onIncrease, onDecrease } = props;

    const totalOrderSum: number = basketItems.reduce(
        (acum, item) => acum + item.quantity * item.price,
        0
    );

    return (
        <div className={s.basketList}>
            {basketItems.length ? (
                <div className={s.basketContent}>
                    <div>
                        {basketItems.map((item, index) => (
                            <BasketItem
                                key={index + 1}
                                deleteAll={deleteItem}
                                item={item}
                                onIncrease={onIncrease}
                                onDecrease={onDecrease}
                            />
                        ))}
                    </div>
                    <div className={s.orderCard}>
                        <div className={s.orderInfo}>
                            <h3>Итого:</h3>
                            <h3>{totalOrderSum} ₽</h3>
                        </div>
                        <button className={s.orderButton}>
                            Перейти к оформлению
                        </button>
                    </div>
                </div>
            ) : (
                <h3
                    style={{
                        marginTop: '150px',
                        textAlign: 'center',
                        fontSize: '30px',
                    }}
                >
                    Корзина пуста
                </h3>
            )}
        </div>
    );
};
