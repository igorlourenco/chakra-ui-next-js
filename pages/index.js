import React from "react";
import {Heading} from "@chakra-ui/core";
import Form from "./components/Form";

export default function Main() {
    return (
        <>
            <Heading color="brand.900">Elementos de formulário com Chakra UI</Heading>
            <Form></Form>
        </>
    )
}