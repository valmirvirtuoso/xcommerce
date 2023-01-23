import logoImg from "@assets/logo.svg";
import accountImg from "@assets/account.svg";

import Image from "next/image";

import { HeaderStyled } from "@/src/styles/components/Header";

export function Header () {

    return (

        <HeaderStyled>

            <div className="ContainerContent">
                <Image src={logoImg} alt="logo escrito XCO+" width="74" height="20" />
                <Image src={accountImg} alt="imagem de menu de usuário" width="77" height="40" />
            </div>

        </HeaderStyled>

    );

}