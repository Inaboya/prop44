import * as fs from "fs";
import { createContext, useReducer } from "react";
import AddReducer from "./AddReducer";
import { setStudents, getStudents } from "../data/students";
import { ActionType } from "./actionType";

interface StudentState {
  students: any[];
  loading: boolean;
  error: string | null;
  addStudent?: (payload: object) => Promise<any>;
  fetchStudents?: () => any[];
}

const initialState: StudentState = {
  students: [],
  error: null,
  loading: false,
};

export const GlobalContext = createContext({} as StudentState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AddReducer, initialState);

  const addStudent = async (payload: object) => {
    try {
      const students = getStudents() as unknown as any[];

      console.log({ students });
      const newStudents = students ? [...students, payload] : [payload];
      console.log({ newStudents });
      setStudents(newStudents);
      dispatch({
        type: ActionType.ADD_STUDENT,
        payload: newStudents,
      });

      return newStudents;
    } catch (error) {
      throw error;
    }
  };

  const fetchStudents = () => {
    try {
      const students = getStudents() as unknown as any[];

      console.log({ students });
      dispatch({
        type: ActionType.GET_STUDENTS,
        payload: students,
      });

      return students;
    } catch (error) {
      throw error;
    }
  };

  const editStudent = (id: string, payload: object) => {
    try {
      const students = getStudents() as unknown as any[];
      const newStudents = students.map((student: any) => {
        if (student.id === id) {
          return { ...student, ...payload };
        }
        return student;
      });
      setStudents(newStudents);
      dispatch({
        type: ActionType.UPDATE_STUDENT,
        payload: newStudents,
      });
    } catch (error) {
      throw error;
    }
  };

  const deleteStudent = (id: string) => {
    try {
      const students = getStudents() as unknown as any[];
      const newStudents = students.filter((student: any) => student.id !== id);
      setStudents(newStudents);
      dispatch({
        type: ActionType.DELETE_STUDENT,
        payload: newStudents,
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        students: state.students,
        loading: state.loading,
        error: state.error,
        addStudent,
        fetchStudents,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
