import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";

const App = () => {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
};

export default App;
