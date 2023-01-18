import { AllProducts } from "../components/AllProducts"
import { BestSellers } from "../components/BestSellers"
import { ProductFinder } from "../components/ProductFinder"
import { styled } from "../styles"

const Teste = styled("h1", {

  background: "$blue200"

})

export default function Home() {


  return (

    <div>

      <ProductFinder />

      <BestSellers />
      <AllProducts />
      
    </div>

  )
}
