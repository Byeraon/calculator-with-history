import {
  SET_STORED_NUMBER,
  SET_NUMBER,
  SET_FUNCTION_TYPE,
  SET_LOCAL_ID,
  SET_HISTORY,
} from "./actions";

export interface RootState {
  id: number;
  number: string;
  storedNumber: string;
  functionType: string;
  historyList: string[];
}

const initialState = {
  id: null,
  number: "",
  storedNumber: "",
  functionType: "",
  historyList: [],
};

export const systemReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        historyList: action.payload.length > 0 ? action.payload : [],
      };
    case SET_STORED_NUMBER:
      return { ...state, storedNumber: action.payload };
    case SET_LOCAL_ID:
      return { ...state, id: action.payload };
    case SET_NUMBER:
      return { ...state, number: action.payload };
    case SET_FUNCTION_TYPE:
      return { ...state, functionType: action.payload };
    default:
      return state;
  }
};
