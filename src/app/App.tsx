import {FC, useEffect} from "react";
import {useAppSelector} from "@shared/config/redux/redux.ts";
// import styles
import './styles/index.css';
// import components
import {Header} from "@widgets/Header";
import {Footer} from "@widgets/Footer";
import {AppRouter} from "@app/providers/router";


const App: FC = () => {

    const basketItems = useAppSelector(state => state.basket.items);

    useEffect(() => {
        sessionStorage.setItem('basketItems', JSON.stringify(basketItems));
    }, [basketItems]);

    return (
        <div className='App'>
            <Header />
            <AppRouter />
            <Footer/>
        </div>
    );
}

export default App;
