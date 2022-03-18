import React, { useEffect, useState } from "react";
import { SimpleGrid, NumberInput, NumberInputField, Heading, Button } from "@chakra-ui/react";
import inkGrapher from "../utils/inkCal";
import toast from "react-hot-toast";

const labelStyle = { opacity: 1, color: 'gray.500' }

const width = '6rem'

export default function InkValueFormRow({ title }) {

  const [target, setTarget] = useState();
  const [current, setCurrent] = useState();
  const [output, setOutput] = useState();
  const [final, setFinal] = useState();

  const copyToClipBoard = () => {
    if (final) {
      navigator.clipboard.writeText(final)
      toast.success('Coppied to clipboard!')
    } else {
      toast.error('Uh-Oh! Missing fields :(')
    }
  }

  useEffect(() => {
    if (target && current && output) {
      const calculateFinal = () => {
        setFinal(inkGrapher(target, current, output))
      }
      calculateFinal()
    }

  }, [target, current, output])

  return (
    <SimpleGrid columns={5} spacing={5} justifyContent='center' alignItems={'center'} justifyItems='start'>
      <Heading as='h2' size={'lg'} textAlign='center' pl={20} >{title}</Heading>
      <NumberInput
          precision={2}
          isRequired={true}
          size='md'
          w={width}
          onChange={(value) => {setTarget(Number(value))}}
        >
          <NumberInputField placeholder="0.00" _placeholder={labelStyle}/>
        </NumberInput>
      <NumberInput
        precision={2}
        isRequired={true}
        size='md'
        w={width}
        onChange={(value) => {setCurrent(Number(value))}}
        >
          <NumberInputField placeholder="0.00" _placeholder={labelStyle}/>
      </NumberInput>
      <NumberInput
        precision={2}
        isRequired={true}
        size='md'
        w={width}
        onChange={(value) => {setOutput(Number(value))}}
        >
          <NumberInputField placeholder="0.00" _placeholder={labelStyle}/>
      </NumberInput>
      <Button
        w={width}
        onClick={copyToClipBoard}
      >{final}</Button>
    </SimpleGrid>
  )
}