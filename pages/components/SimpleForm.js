import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    useToast
} from "@chakra-ui/core";

export default function SimpleForm() {
    const {handleSubmit, errors, register, formState} = useForm();
    const toast = useToast();

    function validateName(value) {
        let error;
        if (!value) {
            error = "Preencha o campo Nome";
        } else if (value !== "Igor") {
            error = "Hey, vc colocou o nome errado";
        }
        return error || true;
    }

    function onSubmit() {
        setTimeout(
            () =>
                toast( {
                    title: "Você digitou o nome certo",
                    description: "Esse é um exemplo de 'Toast'",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                } )
            , 100 );
    }

    return (
        <form onSubmit={handleSubmit( onSubmit )}>
            <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Digite "Igor" para mensagem de sucesso</FormLabel>
                <Input
                    name="name"
                    placeholder="Entre com um nome"
                    ref={register( {validate: validateName} )}
                />
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            <Button
                mt={4}
                variantColor="teal"
                isLoading={formState.isSubmitting}
                type="submit"
            >
                Enviar
            </Button>
        </form>
    );
}