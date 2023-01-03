import { Action } from "./action";
import { ActionType } from "./actionType";

interface initialState {
  students: string[];
  error: string | null;
  loading: boolean;
}

const AddReducer = (state: initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case ActionType.DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student !== action.payload
        ),
      };
    case ActionType.UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student === action.payload ? action.payload : student
        ),
      };
    case ActionType.GET_STUDENT:
      return {
        ...state,
        students: action.payload,
      };
    case ActionType.GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };
    case ActionType.STUDENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AddReducer;
