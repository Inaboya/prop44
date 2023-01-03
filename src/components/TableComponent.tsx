import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
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
import { GlobalContext } from "../context/GlobalState";
import EditStudent from "./EditStudent";

// type TableComponentProps = {
//   onClose: () => void;
//   onOpen: () => void;
// };

type TableComponentProps = {
  students: any;
  // fetchStudents: () => void;
};

const TableComponent: React.FC<TableComponentProps> = ({ students }) => {
  // console.log({ students });
  const { deleteStudent, editStudent } = React.useContext(GlobalContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Student</ModalHeader>
          <ModalBody>
            <EditStudent onClose={onClose} editStudent={editStudent} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Table
        variant="striped"
        size={{ base: "sm", md: "md", lg: "md" }}
        colorScheme="teal"
      >
        <Thead>
          <Tr>
            <Th>Student Number</Th>
            <Th>Student Name</Th>
            <Th>Subject</Th>
            <Th>Mark</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>

        {students &&
          students.map((student: any, index: number) => (
            <Tbody key={index}>
              <Tr>
                <Td>{student.studentNumber}</Td>
                <Td>{student.studentName}</Td>
                <Td>{student.subject}</Td>
                <Td>{student.studentMark}</Td>

                <Td>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    onClick={() => deleteStudent && deleteStudent(student.id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          ))}
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
