import { useProducts } from "@/src/contexts/productsContext";
import { usePagination } from "@/src/hooks/usePagination";
import { PaginationReturnHook } from "@/src/interfaces";

import { AllProductsContainer, Container, HeaderContainer, Pages, PriceStyled, ProductList } from "@/src/styles/components/AllProducts";

import Image from "next/image";

import heartImg from "../../assets/heart.svg";
import heartFullImg from "@assets/heartFull.svg";
import defaultImg from "@assets/photo.svg"

export function AllProducts () {

    const { 
        products, 
        handleFavoriteSelectionProduct, 
        favoriteProducts, filteredProducts, 
        isFavoriteds 
    } = useProducts();

    const listOfProducts = filteredProducts.length > 0 ? filteredProducts : products;
    const activeProductList = isFavoriteds ? favoriteProducts : listOfProducts;

    const { 
        pagination, 
        rangeOfProductsPerPage, 
        nextPage, 
        previousPage
    }: PaginationReturnHook = usePagination(activeProductList, 5);


    return (

        <Container>

            <HeaderContainer>

                <h3>Todos os produtos</h3>
                <div>
                <button onClick={previousPage}><i className='bx bx-left-arrow-alt'></i></button>
                    <button onClick={nextPage}><i className='bx bx-right-arrow-alt'></i></button>
                </div>

            </HeaderContainer>

            <AllProductsContainer>


                <ProductList>

                    <table>

                        <thead>

                            <tr>

                                <th>IDENTIFICAÇÃO</th>
                                <th>PREÇO</th>
                                <th>VENDAS</th>
                                <th>ESTOQUE</th>
                                <th></th>

                            </tr>

                        </thead>

                        <tbody>

                            {rangeOfProductsPerPage.map((product) => {

                                const totalEarnings = new Intl.NumberFormat("pr-BR", {

                                    style: "currency",
                                    currency: "BRL"

                                }).format(product.price * product.sales);

                                const priceFormatted = new Intl.NumberFormat("pt-BR", {

                                    style: "currency",
                                    currency: "BRL"

                                }).format(product.price);

                                const haveImage = product.imgUrl ? product.imgUrl : defaultImg;

                                return (

                                    <tr key={product.code}>

                                        <td>
                                            <Image src={haveImage} alt={product.name} width="85" height="85"/>
                                            <div>
                                                <p>{product.name}</p>
                                                <p>#{product.code}</p>
                                            </div>
                                        </td>

                                        <td>{priceFormatted}</td>
                                        <td>
                                            <PriceStyled>Total de {totalEarnings}</PriceStyled>
                                            <p>{product.sales} vendas</p>
                                        </td>

                                        <td>{product.stock} und</td>

                                        <td>
                                            <button onClick={() => handleFavoriteSelectionProduct(product)}>
                                                <Image src={favoriteProducts.includes(product) ? heartFullImg : heartImg} alt=""/>
                                            </button>
                                        </td>

                                    </tr>

                                )

                            })}                    

                        </tbody>

                    </table>

                </ProductList>

            </AllProductsContainer>

            <Pages>

                <p>Página {pagination.currentPage} de {pagination.totalPages}</p>

            </Pages>

        </Container>    
    );

}