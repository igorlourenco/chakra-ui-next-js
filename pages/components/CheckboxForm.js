import React from "react";
import { CheckboxGroup, Checkbox, Box, Flex, Stack, Text } from "@chakra-ui/core";

export default function CheckboxForm(){
    return (
    <Flex flexWrap="wrap" py={6}>
        <Box
            width={[
                "100%", // base
                "100%", // 360 - 768px
                "50%", // 768 - 1023px
                "33%", // 1024px ou mais
            ]}
            p={[0, 0, 4, 4]}
            my={[3, 3, 0, 0]}
        >
            <CheckboxGroup variantColor="green" defaultValue={["calum", "michael"]}>
                <Checkbox value="calum">Exemplo de</Checkbox>
                <Checkbox value="luke">Checkbox Group</Checkbox>
                <Checkbox value="michael">Com valores padrão</Checkbox>
                <Checkbox value="kakashi">Definidos</Checkbox>
            </CheckboxGroup>
        </Box>

        <Box
            width={[
                "100%", // base
                "100%", // 360 - 768px
                "50%", // 768 - 1023px
                "33%", // 1024px ou mais
            ]}
            p={[0, 0, 4, 4]}
            my={[3, 3, 0, 0]}
        >
            <Stack spacing={10}>
                <Checkbox size="sm" variantColor="red">
                    Exemplo com as cores de
                </Checkbox>
                <Checkbox size="md" variantColor="green" defaultIsChecked>
                    background, espaçamento
                </Checkbox>
                <Checkbox size="lg" variantColor="orange" defaultIsChecked>
                    e tamanhos personalizados
                </Checkbox>
            </Stack>
        </Box>

        <Box
            width={[
                "100%", // base
                "100%", // 360 - 768px
                "100%", // 768 - 1023px
                "33%", // 1024px ou mais
            ]}
            p={[0, 0, 4, 4]}
            my={[3, 3, 0, 0]}
        >
            <Stack spacing={10}>
                <Checkbox isDisabled>Exemplo com os elementos</Checkbox>
                <Checkbox isDisabled defaultIsChecked>
                    desabilitados (nesse tá marcado por default)
                </Checkbox>
            </Stack>
        </Box>
    </Flex>
    )
}