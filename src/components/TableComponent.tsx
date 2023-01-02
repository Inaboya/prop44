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

const TableComponent: React.FC = () => {
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

        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>John Doe</Td>
            <Td>Mathematics</Td>
            <Td>80</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>John Doe</Td>
            <Td>Mathematics</Td>
            <Td>80</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>John Doe</Td>
            <Td>Mathematics</Td>
            <Td>80</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>John Doe</Td>
            <Td>Mathematics</Td>
            <Td>80</Td>
          </Tr>

          <Tr>
            <Td>1</Td>
            <Td>John Doe</Td>
            <Td>Mathematics</Td>
            <Td>80</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
