import { ChangeEvent, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Product, ProductContextProps } from "../interfaces";
import axios from "axios";

export const ProductContext = createContext<ProductContextProps>({

} as ProductContextProps);


export const ProductProvider = ({children}: {children: ReactNode}) => {
    
    const [products, setProducts] = useState<Product[]>([]);

    async function getProducts () {

        const { data } = await axios.get("/api/products");
        setProducts(data.products);

    }

    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

    const [isFavoriteds, setIsFavoriteds] = useState<boolean>(false);
    
    const bestSellersProducts = [...products].sort(toCompare);

    function handleFilterFavoriteProducts () {

        setIsFavoriteds(true);

    }

    function handleAllProducts () {

        setIsFavoriteds(false);

    }

    function toCompare(a: Product, b: Product) {

        if (a.sales > b.sales) {

            return -1;

        }

        if (a.sales < b.sales) {

            return 1;

        }

        return 0;
    }

    function handleFilteredProducts (event: ChangeEvent<HTMLInputElement>) {

        const text = event.target.value.toUpperCase()

        const filtered = products.filter(product => product.name.toUpperCase().includes(text));
        setFilteredProducts(filtered);

    }

    function handleFavoriteSelectionProduct (productFavorited: Product) {

        if (favoriteProducts.includes(productFavorited)) {

            setFavoriteProducts(favoriteProducts.filter(product => product.code !== productFavorited.code))
            return false;

        }

        setFavoriteProducts((currentState => [...currentState, productFavorited]))
        return true

    }

    useEffect(() => {

        (async () => await getProducts())()
    
    }, []);

    return <ProductContext.Provider value={
        {
            products, 
            isFavoriteds,
            handleFavoriteSelectionProduct, 
            favoriteProducts, 
            handleFilteredProducts, 
            filteredProducts,
            getProducts,
            bestSellersProducts,
            handleFilterFavoriteProducts,
            handleAllProducts,
        }
    }>{children}</ProductContext.Provider>

}

export const useProducts = () => {

    return useContext(ProductContext);

}