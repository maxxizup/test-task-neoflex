import { useRef } from 'react';
import type { MouseEvent, PointerEvent } from 'react';

interface BackdropHandlers {
    onPointerDown: (event: PointerEvent<HTMLDivElement>) => void;
    onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export const useBackdropClose = (onClose: () => void): BackdropHandlers => {
    const isBackdropPointerDownRef = useRef(false);

    const handleOverlayPointerDown = (event: PointerEvent<HTMLDivElement>) => {
        isBackdropPointerDownRef.current = event.target === event.currentTarget;
    };

    const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
        if (isBackdropPointerDownRef.current && event.target === event.currentTarget) {
            onClose();
        }

        isBackdropPointerDownRef.current = false;
    };

    return {
        onPointerDown: handleOverlayPointerDown,
        onClick: handleOverlayClick,
    };
};
