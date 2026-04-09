import React from 'react';
import s from './QuickViewModal.module.css';
import { ProductType } from '@entities/productItem';
import { Divider } from '@shared/ui/Divider/Divider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface QuickViewModalProps {
    isOpen: boolean;
    product: ProductType | null;
    onClose: () => void;
    onAddToCart: (product: ProductType) => void;
}

export const QuickViewModal = (props: QuickViewModalProps) => {
    const { isOpen, onAddToCart, product, onClose } = props;

    if (!isOpen || !product) return null;
    const mainImage = product.images[0];

    return (
        <div className={s.overlay} onClick={onClose}>
            <div className={s.modalContainer} onClick={(e) => e.stopPropagation()}>
                <div className={s.carouselPhoto}>
                    <div className={s.swiperWrapper}>
                        <Swiper>
                            {product.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={product.title} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className={s.photoList}>photoList</div>
                <div className={s.modalContent}>
                    <div className={s.contentMain}>
                        <h2 className={s.contentTitle}>{product.title}</h2>
                        <p className={s.price}>{product.price} ₽</p>
                    </div>
                </div>
                <div className={s.contentDesc}>
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
