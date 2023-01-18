import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { globalStyles } from "../styles/global";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (

    <div>

      <Header />
      
      <Component {...pageProps} />

    </div>

  );
}
