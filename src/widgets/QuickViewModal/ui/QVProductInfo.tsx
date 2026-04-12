import s from './QVProductInfo.module.css';

interface QVProductInfoProps {
    title: string;
}

export const QVProductInfo = (props: QVProductInfoProps) => {
    const { title } = props;

    return (
        <div className={s.modalInfo}>
            <div className={s.modalInfoWrapper}>
                <h2 className={s.productTitle}>{title}</h2>
            </div>
        </div>
    );
};