import Image from "next/image";

import heartImg from "../../assets/heart.svg";

export function AllProducts () {

    return (

        <div>

            <header>

            <h3>Todos os produtos</h3>
            <i className='bx bx-left-arrow-alt'></i>
            <i className='bx bx-right-arrow-alt'></i>

            </header>

            <table>

                <thead>

                    <th>IDENTIFICAÇÃO</th>
                    <th>PREÇO</th>
                    <th>VENDAS</th>
                    <th>ESTOQUE</th>

                </thead>

                <tbody>

                    <tr>

                        <td>
                            <Image src="" alt="" />
                            <p>Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular</p>
                        </td>

                        <td>#MLB2063247364</td>

                        <td>R$ 31,67</td>

                        <td>

                            <p>Total de 4.750</p>
                            <p>150 vendas</p>

                        </td>

                        <td>0 und</td>

                        <td>
                            <Image src={heartImg} alt="" />
                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    );

}