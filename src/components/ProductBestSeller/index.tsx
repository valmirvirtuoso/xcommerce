import Image from "next/image";
import { BestSellersProducts } from "@/src/styles/components/BestSellers";
import { BestProductProps } from "@/src/interfaces";

import defaultImg from "@assets/photo.svg";

export function ProductBestSeller ({name, sales, price, imageUrl}: BestProductProps) {

    const haveImage = imageUrl ? imageUrl : defaultImg;

    const priceFormatted = new Intl.NumberFormat("pr-BR", {

        style: "currency",
        currency: "BRL"

    }).format(price);

    return (

        <BestSellersProducts>

            <Image src={haveImage} alt={name} width="168" height="148"/>

            <p>
                <span>{priceFormatted}</span>
                <span>{sales} vendas</span>
            </p>
            <p>{`${name.slice(0, 14)} (...)`}</p>

        </BestSellersProducts>

    );

}