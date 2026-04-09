// import styles
import './BasketPage.css';
// import components
import { BasketList } from '@widgets/BasketList';

// import types
import { useAppDispatch, useAppSelector } from '@shared/config/redux/redux';
import {
    addToBasket,
    removeFromBasket,
    removeOneItem,
} from '@app/providers/store/reducers/BasketSlice.ts';
import { BasketItemType } from '@entities/basketItem';

const BasketPage = () => {
    const basketItems = useAppSelector((state) => state.basket.items);
    const dispatch = useAppDispatch();

    function itemIncrease(item: BasketItemType): void {
        dispatch(addToBasket(item));
    }

    function itemDecrease(item: BasketItemType): void {
        dispatch(removeOneItem(item));
    }

    function deleteItem(item: BasketItemType): void {
        dispatch(removeFromBasket(item));
    }

    return (
        <div className="BasketPage">
            <h2
                style={{
                    marginTop: '30px',
                    fontSize: '20px',
                    fontWeight: '600',
                }}
            >
                Корзина
            </h2>
            <BasketList
                deleteItem={deleteItem}
                basketItems={basketItems}
                onIncrease={itemIncrease}
                onDecrease={itemDecrease}
            />
        </div>
    );
};

export default BasketPage;
