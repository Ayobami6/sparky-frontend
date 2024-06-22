import type { AppProps } from "next/app";
import ContextProvider from "./ContextProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ContextProvider>
            <Component {...pageProps} />
        </ContextProvider>
    )
}