import { FilterButtons, FilterButtonsContainer, ProductFinderContainer, ProductFinderStyled } from "@/src/styles/components/ProductFinder";
import { Button } from "../Button";

export function ProductFinder () {

    return (

        <ProductFinderStyled>

            <ProductFinderContainer>
                <h2>Produtos</h2>
                <form>
                    <input
                        type="text"
                        id="product"
                        list="products-suggestions"
                        placeholder="Buscar por produtos"
                    />
                    <datalist id="products-suggestions">
                        <option value="Produto 1" />
                        <option value="Produto 2" />
                        <option value="Produto 3" />
                        <option value="Banana" />
                    </datalist>
                </form>
            </ProductFinderContainer>

            <FilterButtonsContainer>

                <FilterButtons>
                    <Button>Todas</Button>
                    <Button>Favoritos</Button>
                </FilterButtons>

                <Button>Criar novo</Button>

            </FilterButtonsContainer>

        </ProductFinderStyled>

    );

} 