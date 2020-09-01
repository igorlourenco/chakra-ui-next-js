import React from "react";
import customTheme from "../styles/customTheme";
import {ThemeProvider, CSSReset, Box} from "@chakra-ui/core";
import Header from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Header> {/* Componente do Next.js que equivale à tag <head> do HTML */}
                <title>Componentes Chakra UI</title>
            </Header>
                <ThemeProvider theme={customTheme}> {/* Aplicação do tema pré-criado por mim*/}
                <CSSReset/> {/* "zera" qualquer eventual aplicação de CSS que tenha no projeto (opcional) */}
                <Box p={4}> {/* coloca toda a aplicação dentro de uma "Box", que equivale à tag <div> */}
                    <Component {...pageProps} />
                </Box>
            </ThemeProvider>
        </>
    )
}

export default MyApp
