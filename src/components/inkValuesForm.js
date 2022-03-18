import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import InkValueFormRow from "./InkValueFormRow";
import GridTitles from "./gridTitles";

export default function InkValuesForm() {
  return (
    <Stack spacing={4}>
      <Heading as='h1' size='xl' mb={2} textAlign='center'>Please enter all values</Heading>
      <GridTitles />
      <InkValueFormRow title={'C'}/>
      <InkValueFormRow title={'M'}/>
      <InkValueFormRow title={'Y'}/>
      <InkValueFormRow title={'K'}/>
    </Stack>
  )
}