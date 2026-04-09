// import styles
import s from './Catalog.module.css';
// import components
import {CatalogItem} from "@entities/catalogItem";
// import types
import {CatalogItemType} from "@entities/catalogItem";

interface CatalogListProps {
    catalogItems: CatalogItemType[];
}

export const CatalogList = (props: CatalogListProps) => {
    const {
        catalogItems
    } = props;

    return (
        <div className={s.catalogList}>
            <h2>Каталог товаров</h2>
            <div className={s.catalogList__cards}>
                {catalogItems.map(item =>
                    <CatalogItem key={item.path} item={item} />
                )}
            </div>
        </div>
    )
}
