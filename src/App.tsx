import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </GlobalProvider>
  );
};

export default App;
