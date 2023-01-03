import {
  Box,
  HStack,
  Heading,
  Button,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GrAdd } from "react-icons/gr";
import AddStudent from "../components/AddStudent";
import EditStudent from "../components/EditStudent";
import TableComponent from "../components/TableComponent";
import { GlobalContext } from "../context/GlobalState";

const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { fetchStudents, students } = React.useContext(GlobalContext);

  const handleEdit = (id: string) => {
    console.log(id);
  };
  React.useEffect(() => {
    fetchStudents && fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        <Heading as="h3" size={{ base: "1xl", lg: "3xl" }} color={"#00000"}>
          Student Records
        </Heading>

        <Button
          w="300px"
          borderRadius="100px"
          backgroundColor={"#6B6DAD"}
          colorScheme="white"
          leftIcon={<GrAdd color={"#fff"} />}
          onClick={onOpen}
        >
          Add Student
        </Button>
      </HStack>

      <Stack spacing={6}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Student</ModalHeader>
            <ModalBody>
              <AddStudent onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>

        {students && students.length > 0 ? (
          <TableComponent students={students} />
        ) : (
          <Text>No students found</Text>
        )}
      </Stack>
    </Box>
  );
};

export default Home;
