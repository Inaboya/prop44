// import fs from "fs";
import { createContext, useReducer } from "react";
import AddReducer from "./AddReducer";
import StudentData from "../data/students.json";
import { ActionType } from "./actionType";

const fs = require("fs");

interface StudentState {
  students: any[];
  loading: boolean;
  error: string | null;
  addStudent?: (payload: object) => Promise<any>;
  getStudents?: () => Promise<any>;
}

const initialState: StudentState = {
  students: [],
  error: null,
  loading: false,
};

export const GlobalContext = createContext({} as StudentState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AddReducer, initialState);

  const addStudent = (payload: object) => {
    return new Promise((resolve, reject) => {
      const data = fs.readFileSync("../data/students.json", {
        encoding: "utf-8",
      });
      const students = JSON.parse(data);
      students.push(payload);
      fs.writeFileSync("../data/students.json", JSON.stringify(students));
      dispatch({
        type: ActionType.ADD_STUDENT,
        payload,
      });
      resolve(students);
    });
  };

  const getStudents = () => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: ActionType.GET_STUDENTS,
        payload: StudentData,
      });
      resolve(StudentData);
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        students: state.students,
        loading: state.loading,
        error: state.error,
        addStudent,
        getStudents,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
