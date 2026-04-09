export interface FilterType {
    searchQuery: string;
    sortMethod: SortMethodsType | "";
    groupBy: string;
}

export type SortMethodsType = "title" | "rate" | "priceDown" | "priceUp";
