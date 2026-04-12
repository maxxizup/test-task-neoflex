// import styles
import s from './QuickViewModal.module.css';
// import types
import { ProductType } from '@entities/productItem';
//import components
import { QVProductInfo } from "@widgets/QuickViewModal/ui/QVProductInfo.tsx";
import { QuickViewGallery } from './components/QuickViewGallery';
import { useBackdropClose } from '../model/useBackdropClose';
import {QVProductDesc} from "@widgets/QuickViewModal/ui/QVProductDesc.tsx";
import {QVProductActions} from "@widgets/QuickViewModal/ui/QVProductActions.tsx";
import {useLockBodyScroll} from "@widgets/QuickViewModal/model/useLockBodyScroll.ts";

interface QuickViewModalProps {
    isOpen: boolean;
    product: ProductType | null;
    onClose: () => void;
    onAddToCart: (product: ProductType) => void;
}

export const QuickViewModal = (props: QuickViewModalProps) => {
    const { isOpen, onAddToCart, product, onClose } = props;
    const backdropHandlers = useBackdropClose(onClose);
    useLockBodyScroll(isOpen);

    if (!isOpen) return null;
    if (!product) return null;

    const handleAddToCart = () => onAddToCart(product);

    return (
        <div
            className={s.overlay}
            onPointerDown={backdropHandlers.onPointerDown}
            onClick={backdropHandlers.onClick}
        >
            <div className={s.modalContainer} onClick={(e) => e.stopPropagation()}>
                <QuickViewGallery product={product} />
                <QVProductInfo title={product.title} />
                <QVProductDesc description={product.description} />
                <QVProductActions onAddToCart={handleAddToCart} price={product.price}/>
            </div>
        </div>
    );
};
