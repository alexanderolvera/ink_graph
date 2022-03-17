import React from "react";
import { SimpleGrid, Heading } from "@chakra-ui/react";

export default function GridTitles() {
  return(
    <SimpleGrid columns={5} spacing={5} justifyContent='center' alignItems={'center'}>
    <Heading></Heading>
    <Heading as='h4' size={'md'} textAlign='center' w='6rem'>Pantone</Heading>
    <Heading as='h4' size={'md'} textAlign='center' w='6rem'>Print</Heading>
    <Heading as='h4' size={'md'} textAlign='center' w='6rem'>CGS</Heading>
    <Heading as='h4' size={'md'} textAlign='center' w='6rem'>New CGS</Heading>
  </SimpleGrid>
  )
}