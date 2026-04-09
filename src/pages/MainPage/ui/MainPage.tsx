// import styles
import './MainPage.css';

// import components
import {CatalogItemType} from "@entities/catalogItem";
import { CatalogList } from "@widgets/Catalog";

// import IMGs
import EarphonesIMG from "@shared/assets/icons/earphones.jpg";
import KeyboardsIMG from "@shared/assets/icons/keyboards.png";
import MiceIMG from "@shared/assets/icons/mice.jpg";
import MonitorsIMG from "@shared/assets/icons/monitors.jpg";
import NotebooksIMG from "@shared/assets/icons/notebooks.jpg";
import CarpetsIMG from "@shared/assets/icons/mousecarpet.jpg";
import VideocardsIMG from "@shared/assets/icons/videocards.png";

const MainPage = () => {

    const catalogItems: CatalogItemType[] = [
        {name: 'Наушники', image: EarphonesIMG, path: '/earphones'},
        {name: 'Клавиатуры', image: KeyboardsIMG, path: '/keyboards'},
        {name: 'Мыши', image: MiceIMG, path: '/mice'},
        {name: 'Мониторы', image: MonitorsIMG, path: '/monitors'},
        {name: 'Ноутбуки', image: NotebooksIMG, path: '/notebooks'},
        {name: 'Ковры для мыши', image: CarpetsIMG, path: '/carpets'},
        {name: 'Видеокарты', image: VideocardsIMG, path: '/videocards'},
    ];

    return (
        <div className='MainPage'>
            <CatalogList catalogItems={catalogItems} />
        </div>
    );
};

export default MainPage;
