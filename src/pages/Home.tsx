import { Box, HStack, Heading, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { GrAdd } from "react-icons/gr";
import InputContainer from "../components/InputContainer";
import TableComponent from "../components/TableComponent";

const Home: React.FC = () => {
  return (
    <Box
      position={{ base: "relative", lg: "sticky" }}
      top="0px"
      bg="white"
      h="100px"
      w="100vw"
    >
      <HStack
        justifyContent="space-between"
        h="100%"
        p={{ base: "1rem", lg: "4rem" }}
        alignItems={{ base: "center", lg: "center" }}
      >
        <Heading as="h3" size="2xl" color={"#00000"}>
          Student Records
        </Heading>

        <Button
          w="300px"
          borderRadius="100px"
          backgroundColor={"#6B6DAD"}
          colorScheme="white"
          leftIcon={<GrAdd color={"#fff"} />}
        >
          Match
        </Button>
      </HStack>

      <Stack spacing={6}>
        <InputContainer />
        <TableComponent />
      </Stack>
    </Box>
  );
};

export default Home;
