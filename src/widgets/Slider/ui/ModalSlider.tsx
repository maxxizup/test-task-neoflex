// import styles
import s from './ModalSlider.module.css';
// import components
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import types
import type { Swiper as SwiperType } from 'swiper';
import { ProductType } from '@entities/productItem';

interface ModalSliderProps {
    productImgs: string[];
    productTitle: string;
    activeIndex: number;
    onSlideChange: (index: number) => void;
}

export const ModalSlider = (props: ModalSliderProps) => {
    const { productImgs, productTitle, activeIndex, onSlideChange } = props;
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (!swiperRef.current || swiperRef.current.activeIndex === activeIndex) {
            return;
        }

        swiperRef.current.slideTo(activeIndex);
    }, [activeIndex]);

    return (
        <div className={s.swiperWrapper}>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
                modules={[Navigation]}
                navigation
            >
                {productImgs.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={productTitle} draggable={false} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
