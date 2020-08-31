import React from "react";
import customTheme from "../styles/customTheme";
import { ThemeProvider } from "@chakra-ui/core";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={customTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
