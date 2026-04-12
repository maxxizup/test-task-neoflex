import { useEffect, useState } from 'react';
import { ProductType } from '@entities/productItem';
import { ModalSlider } from '@widgets/Slider/ui/ModalSlider.tsx';
import s from '../QuickViewModal.module.css';

interface QuickViewGalleryProps {
    product: ProductType;
}

export const QuickViewGallery = (props: QuickViewGalleryProps) => {
    const { product } = props;
    const [activePhotoIndex, setActivePhotoIndex] = useState(0);

    useEffect(() => {
        setActivePhotoIndex(0);
    }, [product]);

    return (
        <>
            <div className={s.mainImg}>
                <ModalSlider
                    productImgs={product.images}
                    productTitle={product.title}
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
