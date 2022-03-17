import React from "react";
import { Box, Button, Center, ChakraProvider, extendTheme } from '@chakra-ui/react'
import InkValuesForm from "./components/inkValuesForm";
import { Toaster } from "react-hot-toast";

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({config})

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Box h='100%' mr='15%' ml='15%'>
        <Center>
          <InkValuesForm />
        </Center>
        <Center>
          <Button ml={'auto'} mr='0' mt={'1rem'} colorScheme='red' variant='solid' onClick={() => {window.location.reload()}}>RESET</Button>
        </Center>
        </Box>
      </div>
      <Toaster/>
    </ChakraProvider>
  );
}
