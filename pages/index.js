import React from "react";
import {Box, Heading, Link, Text} from "@chakra-ui/core";
import Form from "./components/Form";

export default function Main() {
    return (
        <>
            <Heading color="brand.900">Elementos de formulário com Chakra UI</Heading>

            <Box p={6}>
                <Text color="brand.900" mb={6}>Aqui estão exemplificados alguns exemplos de componentes do
                    Chakra UI. Se você olhar o código, vai ver que a construção deles é bem simples e intuitiva,
                    facilitando bastante a construção do front-end da sua aplicação
                </Text>

                <Text><Link color="brand.700">Link do artigo falando sobre o Chakra UI</Link>, confere lá!</Text>

                <Text><Link color="brand.700">Clicando aqui, você pode ver o código-fonte do projeto</Link>.</Text>
            </Box>


            <Form></Form>
        </>
    )
}