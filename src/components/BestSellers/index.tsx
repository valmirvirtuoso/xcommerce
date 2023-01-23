import { useProducts } from "@/src/contexts/productsContext";

import { usePagination } from "@/src/hooks/usePagination";

import { PaginationReturnHook } from "@/src/interfaces";

import { BestSellersContainer, BestSellersContent, HeaderContainer, Pages } from "@/src/styles/components/BestSellers";

import { ProductBestSeller } from "@components";

export function BestSellers () {

    const { bestSellersProducts } = useProducts();

    const { 
        pagination, 
        rangeOfProductsPerPage, 
        nextPage, 
        previousPage
    }: PaginationReturnHook = usePagination(bestSellersProducts, 6);

    return (

        <BestSellersContainer className="ContainerContent">

            <HeaderContainer>

                <h3>Mais vendidos</h3>

                <div>
                    <button onClick={previousPage}><i className='bx bx-left-arrow-alt'></i></button>
                    <button onClick={nextPage}><i className='bx bx-right-arrow-alt'></i></button>
                </div>

            </HeaderContainer>

            <BestSellersContent>

                {rangeOfProductsPerPage.map((product) => {

                    return (

                        <ProductBestSeller 
                            key={product.code}
                            name={product.name} 
                            sales={product.sales} 
                            price={product.price} 
                            imageUrl={product.imgUrl}
                        />

                    )

                })}
                
            </BestSellersContent>

            <Pages>

                <p>Página {pagination.currentPage} de {pagination.totalPages}</p>

            </Pages>

        </BestSellersContainer>

    );

}