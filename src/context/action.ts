import { ActionType } from "./actionType";

interface ADD_STUDENT {
  type: typeof ActionType.ADD_STUDENT;
  payload: any;
}

interface DELETE_STUDENT {
  type: typeof ActionType.DELETE_STUDENT;
  payload: string;
}

interface UPDATE_STUDENT {
  type: typeof ActionType.UPDATE_STUDENT;
  payload: string;
}

interface GET_STUDENT {
  type: typeof ActionType.GET_STUDENT;
  payload: string[];
}

interface GET_STUDENTS {
  type: typeof ActionType.GET_STUDENTS;
  payload: any;
}

interface STUDENT_ERROR {
  type: typeof ActionType.STUDENT_ERROR;
  payload: string;
}

export type Action =
  | ADD_STUDENT
  | DELETE_STUDENT
  | UPDATE_STUDENT
  | GET_STUDENT
  | GET_STUDENTS
  | STUDENT_ERROR;
