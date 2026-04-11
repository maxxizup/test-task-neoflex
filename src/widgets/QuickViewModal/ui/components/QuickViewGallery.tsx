import { useEffect, useState } from 'react';
import { ProductType } from '@entities/productItem';
import { ModalSlider } from '@widgets/Slider/ui/ModalSlider.tsx';
import s from '../QuickViewModal.module.css';

interface QuickViewGalleryProps {
    product: ProductType;
    isOpen: boolean;
}

export const QuickViewGallery = (props: QuickViewGalleryProps) => {
    const { product, isOpen } = props;
    const [activePhotoIndex, setActivePhotoIndex] = useState(0);

    useEffect(() => {
        setActivePhotoIndex(0);
    }, [product.id, isOpen]);

    return (
        <>
            <div className={s.mainImg}>
                <ModalSlider
                    product={product}
                    activeIndex={activePhotoIndex}
                    onSlideChange={setActivePhotoIndex}
                />
            </div>
            <div className={s.photoList}>
                {product.images.map((image, index) => (
                    <button
                        key={image}
                        className={`${s.photoPreview} ${index === activePhotoIndex ? s.photoPreviewActive : ''}`}
                        onClick={() => setActivePhotoIndex(index)}
                    >
                        <img
                            src={image}
                            alt={`${product.title} ${index + 1}`}
                            draggable={false}
                        />
                    </button>
                ))}
            </div>
        </>
    );
};
