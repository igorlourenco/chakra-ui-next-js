import React from "react";
import {Box, Flex} from "@chakra-ui/core";

import SimpleForm from "./SimpleForm";
import SelectForm from "./SelectForm";
import CheckboxForm from "./CheckboxForm";

export default function Form() {

    return (
        <Flex flexWrap="wrap">
            <Box
                width={[
                    "100%", // base
                    "100%", // 360 - 768px
                    "50%", // 768 - 1023px
                    "50%", // 1024px ou mais     aqui é o tratamento de responsividade. BEM FÁCIL!!!
                ]}
                p={[0, 0, 4, 4]}    // para "tamanho de tela", um padding é atribuído
                my={[3, 3, 0, 0]}
            >

                <SimpleForm/> {/* Componente com os elementos de formulário simples */}

            </Box>
            <Box
                width={[
                    "100%", // base
                    "100%", // 360 - 768px
                    "50%", // 768 - 1023px
                    "50%", // 1024px ou mais
                ]}
                p={[0, 0, 4, 4]}
                my={[3, 3, 0, 0]}
            >

                <SelectForm/>  {/* Componente com os exemplos de "Select" */}

            </Box>

            <Box
                width="100%"
                p={[0, 0, 4, 4]}
                my={[3, 3, 0, 0]}
            >

                <CheckboxForm/>  {/* Componente com os exemplos de "Checkbox" */}

            </Box>

            
        </Flex>
    );
}