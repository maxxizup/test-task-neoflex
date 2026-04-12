// import styles
import s from './QVProductActions.module.css';
// import components
import {Heart, ShoppingCart} from "lucide-react";

interface QVProductActionsProps {
    onAddToCart: () => void;
    price: number;
}

export const QVProductActions = (props: QVProductActionsProps) => {
    const { onAddToCart, price } = props;

    return (
        <div className={s.actionBtns}>
            <p className={s.productPrice}>{price} ₽</p>
            <button className={s.addToFavourBtn}>
                <Heart />
                Добавить в избранное
            </button>

            <button className={s.addToCartBtn} onClick={onAddToCart}>
                <ShoppingCart />
                Добавить в корзину
            </button>
        </div>
    );
};