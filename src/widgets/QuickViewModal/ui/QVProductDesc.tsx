// import styles
import s from './QVProductDesc.module.css';
// import components
import {Divider} from "@shared/ui/Divider/Divider.tsx";

interface QVProductDescProps {
    description: string;
}

export const QVProductDesc = (props: QVProductDescProps) => {
    const {description} = props;

    return (
        <div className={s.productDescription}>
            <Divider />
            <h3 className={s.descTitle}>Описание товара</h3>
            <p className={s.descText}>{description}</p>
        </div>
    );
};
