import {
  Input,
  InputGroup,
  Stack,
  Box,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";

const InputContainer: React.FC = () => {
  return (
    <Box
      w={{ base: "100%", lg: "100%" }}
      h={{ base: "100%", lg: "100%" }}
      p={{ base: "1rem", lg: "4rem" }}
      bg="white"
    >
      <Stack spacing={6}>
        <InputGroup>
          {/* <FormLabel>Student Name*: </FormLabel> */}
          <FormControl
            variant="floating"
            id="student-name"
            placeholder="Student Name"
            isRequired
            isInvalid
          >
            <FormLabel>Student name</FormLabel>
            <Input
              w={{ base: "10rem", lg: "50rem" }}
              placeholder="Student name"
            />
          </FormControl>
        </InputGroup>
      </Stack>
    </Box>
  );
};

export default InputContainer;
