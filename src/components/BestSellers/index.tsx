import { BestSellersContainer } from "@/src/styles/components/BestSellers";
import Image from "next/image";

import mockupImg from "../../assets/photo.svg";

export function BestSellers () {

    return (

        <BestSellersContainer>

            <header>

                <h3>Mais vendidos</h3>
                <i className='bx bx-left-arrow-alt'></i>
                <i className='bx bx-right-arrow-alt'></i>

            </header>

            <div>

                <div>

                    <Image src={mockupImg} alt="produto mocado" width="168" height="148"/>

                    <span>R$ 31,67</span>
                    <span>203 vendas</span>
                    <p>Kit 10 Un.Adesivo (...)</p>

                </div>

            </div>

        </BestSellersContainer>

    );

}