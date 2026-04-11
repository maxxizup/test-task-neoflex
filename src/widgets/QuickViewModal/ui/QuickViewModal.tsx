// import styles
import s from './QuickViewModal.module.css';
// import types
import { ProductType } from '@entities/productItem';
//import components
import { Divider } from '@shared/ui/Divider/Divider';
import { QuickViewGallery } from './components/QuickViewGallery';
import { useBackdropClose } from '../model/useBackdropClose';

interface QuickViewModalProps {
    isOpen: boolean;
    product: ProductType | null;
    onClose: () => void;
    onAddToCart: (product: ProductType) => void;
}

export const QuickViewModal = (props: QuickViewModalProps) => {
    const { isOpen, onAddToCart, product, onClose } = props;
    const backdropHandlers = useBackdropClose(onClose);

    if (!isOpen || !product) return null;

    return (
        <div
            className={s.overlay}
            onPointerDown={backdropHandlers.onPointerDown}
            onClick={backdropHandlers.onClick}
        >
            <div className={s.modalContainer} onClick={(e) => e.stopPropagation()}>
                <QuickViewGallery product={product} isOpen={isOpen} />
                <div className={s.modalInfo}>
                    <div className={s.modalInfoWrapper}>
                        <h2 className={s.productTitle}>{product.title}</h2>
                        <p className={s.productPrice}>{product.price} ₽</p>
                    </div>
                </div>
                <div className={s.modalDescription}>
                    <Divider />
                    <h3 className={s.descTitle}>Описание товара</h3>
                    <p className={s.descText}>{product.description}</p>
                </div>
                <div className={s.actionBtns}>
                    <button className={s.addToFavourBtn}>
                        <img src="/src/shared/assets/icons/favourite.svg" alt="favourite" />
                    </button>
                    <button className={s.addToCartBtn} onClick={() => onAddToCart(product)}>
                        <img src="/src/shared/assets/icons/basket.svg" alt="basket" />
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    );
};
