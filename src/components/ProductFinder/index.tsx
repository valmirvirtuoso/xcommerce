import { useProducts } from "@/src/contexts/productsContext";
import { FilterButtons, FilterButtonsContainer, InputContainer, ProductFinderContainer, ProductFinderStyled } from "@/src/styles/components/ProductFinder";
import { useState } from "react";
import { Button, Modal} from "@components";

export function ProductFinder () {

    const { 
        handleFilteredProducts, 
        handleFilterFavoriteProducts, 
        handleAllProducts
    } = useProducts();

    const [isOpen, setIsOpen] = useState(false);

    return (

        <ProductFinderStyled>

            <div className="ContainerContent">
                <ProductFinderContainer>
                    <h2>Produtos</h2>
                    <form>
                        <InputContainer>
                            <i className='bx bx-search' style={ {fontSize: "24px", color: "#99A0B0"} }></i>
                            <input
                                type="text"
                                id="product"
                                list="products-suggestions"
                                placeholder="Buscar por produtos"
                                onChange={handleFilteredProducts}
                            />
                        </InputContainer>
                    </form>
                </ProductFinderContainer>

                <FilterButtonsContainer>

                    <FilterButtons>
                        <Button onClick={handleAllProducts}>Todas</Button>
                        <Button onClick={handleFilterFavoriteProducts}>Favoritos</Button>
                    </FilterButtons>

                    <Button onClick={() => setIsOpen(true)}>Criar novo</Button>

                </FilterButtonsContainer>

            </div>

            <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>

        </ProductFinderStyled>

    );

} 