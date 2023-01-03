import {
  Input,
  InputGroup,
  Stack,
  Box,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddStudent: React.FC = () => {
  const [studentDetails, setStudentDetails] = React.useState({
    studentName: "",
    studentNumber: "",
    subject: "",
    studentMark: "",
  });
  const { addStudent } = React.useContext(GlobalContext);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (
      studentDetails.studentName === "" ||
      studentDetails.studentNumber === "" ||
      studentDetails.subject === "" ||
      studentDetails.studentMark === ""
    ) {
      alert("Please fill all the fields");
    }

    const newStudent = {
      id: uuidv4(),
      studentName: studentDetails.studentName,
      studentNumber: `RF-${studentDetails.studentNumber}`,
      subject: studentDetails.subject,
      studentMark: studentDetails.studentMark,
    };

    addStudent && addStudent(newStudent);
  };
  return (
    <Stack spacing={6}>
      <InputGroup>
        <FormControl
          variant="floating"
          id="student-name"
          placeholder="Student Name"
          isRequired
        >
          <FormLabel>Student name</FormLabel>
          <Input
            type="text"
            w={{ base: "20rem", lg: "25rem" }}
            placeholder="Student name"
            name="studentName"
            value={studentDetails.studentName}
            onChange={handleChanges}
          />
        </FormControl>
      </InputGroup>

      <InputGroup>
        <FormControl
          variant="floating"
          id="student-number"
          placeholder="Student Number"
          isRequired
          isInvalid
        >
          <FormLabel>Student Number</FormLabel>
          <Input
            type="text"
            w={{ base: "20rem", lg: "25rem" }}
            placeholder="Student number"
            name="studentNumber"
            value={studentDetails.studentNumber}
            onChange={handleChanges}
          />
        </FormControl>
      </InputGroup>

      <InputGroup>
        <FormControl
          variant="floating"
          id="subject"
          placeholder="Subject"
          isRequired
          isInvalid
        >
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            w={{ base: "20rem", lg: "25rem" }}
            placeholder="Subject"
            name="subject"
            value={studentDetails.subject}
            onChange={handleChanges}
          />
        </FormControl>
      </InputGroup>

      <InputGroup>
        <FormControl
          variant="floating"
          id="student-mark"
          placeholder="Student Mark"
          isRequired
          isInvalid
        >
          <FormLabel>Student Mark</FormLabel>
          <Input
            type="text"
            w={{ base: "20rem", lg: "25rem" }}
            placeholder="Mark obtained"
            name="studentMark"
            value={studentDetails.studentMark}
            onChange={handleChanges}
          />
        </FormControl>
      </InputGroup>

      <Button w={{ base: "20rem", lg: "25rem" }} onClick={handleClick}>
        Add Student
      </Button>
    </Stack>
  );
};

export default AddStudent;
