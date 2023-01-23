import { ButtonProps } from "@/src/interfaces";


export function Button ({children, ...rest}: ButtonProps) {

    return (

        <button {...rest}>{children}</button>

    );

}