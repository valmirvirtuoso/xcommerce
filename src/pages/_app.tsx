import type { AppProps } from "next/app";
import { Header, ProductFinder } from "@components";
import { globalStyles } from "../styles/global";
import { ProductProvider } from "@/src/contexts/productsContext";
import "../server/mirage";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (

    <div>

      <ProductProvider>

        <Header />

        <ProductFinder />
        
        <Component {...pageProps} />
        
      </ProductProvider>

    </div>

  );
}
