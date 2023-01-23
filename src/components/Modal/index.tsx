import { FormContainer, HeaderContainer, ModalContainer, ModalContent } from "@/src/styles/components/Modal";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { ModalProps, Product } from "@/src/interfaces";
import { useProducts } from "@/src/contexts/productsContext";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export const newProductSchema = zod.object({

    name: zod.string().min(1, "Informe o nome do produto"),
    code: zod.string().min(1, "Informe o código do produto"),
    sales: zod.number().min(0),
    price: zod.number().min(0),
    stock: zod.number().min(0),
    imgUrl: zod.string().min(0),

});


export function Modal ({isOpen, setIsOpen}: ModalProps) {

    const notifySucess = (name: string) => {

        toast.success(`O produto "${name}" foi cadastrado com sucesso`, {

            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,

        });

    }

    const notifyError = (message: string) => {

        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000,
        });

    }

    const { getProducts } = useProducts();
    
    const { register, handleSubmit, watch, reset, formState:{errors}, } = useForm<Product>({
    
        resolver: zodResolver(newProductSchema),
        defaultValues: {

            name: "",
            code: "",
            sales: 0,
            price: 0,
            stock: 0,
            imgUrl: "",

        }

    });

    function handleCloseModal () {

        setIsOpen(false)

    }

    async function handleCreateNewProduct ({ name, code, sales, price, stock, imgUrl}: Product) {

        const newProduct: Product = {
            
            name,
            code,
            sales,
            price,
            stock,
            imgUrl,

        }

        // addNewProduct(newProduct);
        axios.post("/api/products", newProduct).then(response => {

            notifySucess(newProduct.name);
            getProducts();

        }).catch((error) => {

            notifyError(error.response.data.message);

        });

        reset();

    }

    return (

        <>
        
            {isOpen ? (

                <ModalContainer>

                    <ModalContent>

                        <HeaderContainer>

                            <h3>Cadastre seu produto</h3>
                            <button onClick={handleCloseModal}><i className='bx bx-x'></i></button>

                        </HeaderContainer>

                        <FormContainer onSubmit={handleSubmit(handleCreateNewProduct)}>

                            <div>
                                <label htmlFor="name">Nome</label>
                                <input 
                                    id="name" 
                                    type="text" 
                                    placeholder="Digite o nome do seu produto"
                                    {...register("name")}
                                />

                                {errors.name?.message && <span className="error">{errors.name.message}</span>}

                            </div>

                            <div>
                                <label htmlFor="code">Código</label>
                                <input 
                                    id="code" 
                                    type="text" 
                                    placeholder="Digite o código do seu produto"
                                    {...register("code")}
                                />

                                {errors.code?.message && <span className="error">{errors.code.message}</span>}

                            </div>

                            <div>
                                <label htmlFor="sales">Vendas</label>
                                <input 
                                    id="sales" 
                                    type="number" 
                                    {...register("sales", { valueAsNumber: true })}
                                />

                                {errors.sales?.message && <span className="error">{errors.sales.message}</span>}

                            </div>

                            <div>
                                <label htmlFor="price">Preço</label>
                                <input 
                                    id="price" 
                                    type="number" 
                                    {...register("price", { valueAsNumber: true })}
                                />

                                {errors.price?.message && <span className="error">{errors.price.message}</span>}

                            </div>

                            <div>
                                <label htmlFor="stock">Estoque</label>
                                <input 
                                    id="stock" 
                                    type="number" 
                                    placeholder="Digite a quantidade em estoque"
                                    {...register("stock", { valueAsNumber: true })}
                                />

                                {errors.stock?.message && <span className="error">{errors.stock.message}</span>}

                            </div>

                            <div>
                                <label htmlFor="imgUrl">Link da imagem</label>
                                <input 
                                    id="imgUrl" 
                                    type="text" 
                                    placeholder="Digite o endereço"
                                    {...register("imgUrl")}
                                />

                            </div>

                            <div>

                                <button type="submit">Cadastra</button>

                            </div>

                        </FormContainer>

                    </ModalContent>

                    <ToastContainer />

                </ModalContainer>

            ) : null}
        
        </>

    );

}