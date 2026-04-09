import {ProductType} from "@entities/productItem";

export interface BasketItemType extends ProductType{
    quantity: number;
}
