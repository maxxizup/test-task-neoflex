import {Link} from 'react-router-dom';
// import styles
import s from './Header.module.css';
// import IMGs
import favourite from "@shared/assets/icons/favourite.svg";
import basket from "@shared/assets/icons/basket.svg";
// import components
import {useScroll} from '@shared/lib/hooks/useScroll';
import {useAppSelector} from "@shared/config/redux/redux";
import {Logo} from "@shared/ui/Logo/Logo";


export const Header = () => {
    // get basketState from store
    const basketItems = useAppSelector(state => state.basket.items);

    // whether the header should have scrolled styles
    const isScrolled: boolean = useScroll(10);

    const countProducts: number = basketItems.reduce(
        (accum, item) => accum + item.quantity,
        0
    );
    const countFavourites: number = 0;

    return (
        <header className={`${s.myHeader} ${(isScrolled ? s.scrolled : '')}`}>
            <Logo />
            <div className={s.headerLinks}>
                <div className={s.headerLinks__group}>
                    <Link to={'/favourite'}>
                        <img className={s.headerLinks__item} src={favourite} alt="Favourite products page"/>
                        <span className={s.headerLinks__item_count}>{countFavourites}</span>
                    </Link>
                </div>
                <div className={s.headerLinks__group}>
                    <Link style={{textDecoration: 'none', color: 'var(--main-title-color)'}} to={'/basket'}>
                        <img className={s.headerLinks__item} src={basket} alt="Basket page"/>
                        <span className={s.headerLinks__item_count}>{countProducts}</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
