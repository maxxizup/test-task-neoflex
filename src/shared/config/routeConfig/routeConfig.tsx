import {RouteProps} from "react-router-dom";
import {BasketPage} from "@pages/BasketPage";
import {FavouritePage} from "@pages/FavouritePage";
import {ProductsPage} from "@pages/ProductsPage";
import {MainPage} from "@pages/MainPage";

export enum AppRoutes {
    MAIN = 'main',
    BASKET = 'basket',
    FAVOURITE = 'favourite',
    EARPHONES = 'earphones',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.BASKET]: '/basket',
    [AppRoutes.FAVOURITE]: '/favourite',
    [AppRoutes.EARPHONES]: '/earphones',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.BASKET]: {
        path: RoutePath.basket,
        element: <BasketPage />
    },
    [AppRoutes.FAVOURITE]: {
        path: RoutePath.favourite,
        element: <FavouritePage />
    },
    [AppRoutes.EARPHONES]: {
        path: RoutePath.earphones,
        element: <ProductsPage />
    },
}
