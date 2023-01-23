import { AllProducts, BestSellers } from "@components";
import { HomeContainer } from "../styles/pages/Home";
export default function Home() {

  return (

    <HomeContainer className="ContainerContent">

      <BestSellers />
      <AllProducts />
      
    </HomeContainer>

  )
}
