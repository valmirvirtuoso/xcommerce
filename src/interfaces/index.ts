import { ButtonHTMLAttributes, ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";
import * as zod from "zod";

import { newProductSchema } from "../components/Modal/index"

export type Product = zod.infer<typeof newProductSchema>

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    children: ReactNode;

}

export interface BestProductProps {

    name: string;
    imageUrl: string;
    sales: number;
    price: number;

}

export interface ModalProps {

    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;

}

export interface ProductContextProps {

    products: Product[];
    isFavoriteds: boolean;
    bestSellersProducts: Product[];
    favoriteProducts: Product[];
    filteredProducts: Product[];
    getProducts: () => void;
    handleFilteredProducts: (event: ChangeEvent<HTMLInputElement>) => void;
    handleFavoriteSelectionProduct: (productFavorited: Product) => boolean;
    handleFilterFavoriteProducts: () => void;
    handleAllProducts: () => void;

}

export interface PaginationProps {

    totalItens: number; 
    previousPage: number | null;
    currentPage: number | null;
    nextPage: number | null;
    totalPages: number;

}

export interface PaginationReturnHook {

    pagination: PaginationProps;
    rangeOfProductsPerPage: Product[];
    nextPage: () => void;
    previousPage: () => void;

}