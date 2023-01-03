import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { GlobalContext } from "../context/GlobalState";

type TableComponentProps = {
  onClose: () => void;
  isOpen: boolean;
};

const TableComponent: React.FC<TableComponentProps> = () => {
  const { students, fetchStudents } = React.useContext(GlobalContext);

  React.useEffect(() => {
    fetchStudents && fetchStudents();
  }, []);

  console.log({ students });
  return (
    <TableContainer>
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
          </Tr>
        </Thead>

        {students &&
          students?.map((student: any, index) => (
            <Tbody key={index}>
              <Tr>
                <Td>{student.studentNumber}</Td>
                <Td>{student.studentName}</Td>
                <Td>{student.subject}</Td>
                <Td>{student.studentMark}</Td>
              </Tr>
            </Tbody>
          ))}
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
