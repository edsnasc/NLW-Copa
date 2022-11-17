import { VStack } from "native-base";
import { Header } from "../components/Header";

import Logo from "../assets/logo.svg"

export function New() {
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Criar novo Bolão" />

            <VStack>
                <Logo />
            </VStack>
        </VStack>
    );
}