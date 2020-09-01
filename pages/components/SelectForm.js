import { FormControl, FormLabel, Select} from "@chakra-ui/core";
import React from "react";

export default function SelectForm(){
    return (

        <form>
            <FormControl my={4}>
                <FormLabel>Tamanho grande com background e fonte estilizados</FormLabel>
                <Select
                    color="brandSecondary.900"
                    backgroundColor="brand.900"
                    placeholder="Melhor personagem de Arrow"
                    size="lg"
                >
                    <option value="oliver-queen">Oliver Queen</option>
                    <option value="felicity-smoak">Felicity Smoak</option>
                    <option value="malcom-merlyn">Malcom Merlyn</option>
                </Select>
            </FormControl>

            <FormControl my={4}>
                <FormLabel>Borda estilizada com "Flushed" e tamanho médio</FormLabel>
                <Select
                    variant="flushed"
                    placeholder="Melhor integrante de One Direction"
                    size="md"
                >
                    <option value="zayn">Zayn Malik</option>
                    <option value="harry">Harry Styles</option>
                    <option value="liam">Liam Payne</option>
                    <option value="louis">Louis Tomlinson</option>
                    <option value="niall">Niall Horan</option>
                </Select>
            </FormControl>

            <FormControl my={4}>
                <FormLabel>Tamanho pequeno, sem estilo de borda e sem background</FormLabel>
                <Select
                    variant="unstyled"
                    placeholder="Melhor filme do Tom Cruise"
                    size="sm"
                >
                    <option value="jerry-maguire">Jerry Maguire</option>
                    <option value="missao-impossivel">Missão: Impossível</option>
                    <option value="vanilla-sky">Vanilla Sky</option>
                </Select>
            </FormControl>
        </form>
    );
}