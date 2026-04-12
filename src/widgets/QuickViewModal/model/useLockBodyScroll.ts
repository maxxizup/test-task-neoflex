import {useEffect} from "react";

export const useLockBodyScroll = (isModalOpen: boolean) => {
    useEffect(() => {
        if (!isModalOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isModalOpen]);
}