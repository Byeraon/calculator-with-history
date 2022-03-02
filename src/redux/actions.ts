import { Dispatch } from "react";

export const SET_STORED_NUMBER = "SET_STORED_NUMBER";
export const SET_NUMBER = "SET_NUMBER";
export const SET_FUNCTION_TYPE = "SET_FUNCTION_TYPE";
export const SET_LOCAL_ID = "SET_LOCAL_ID";
export const SET_HISTORY = "SET_HISTORY";

const formatDate = (date: number) => {
  const myDate = date.toString();
  return myDate.length > 1 ? myDate : 0 + myDate;
};

export const setLocalId = (payload: number) => {
  return {
    type: SET_LOCAL_ID,
    payload,
  };
};

export const getAllHistory = (db: any, id: number) => {
  return (dispatch: Dispatch<any>) => {
    return db
      .collection("data")
      .doc(id.toString())
      .get()
      .then((response: any) => response.data())
      .then((data: any) => dispatch({ type: SET_HISTORY, payload: data.data }));
  };
};

export const setHistory = (db: any, id: number, newHistory: string[]) => {
  return (dispatch: Dispatch<any>) => {
    return db
      .collection("data")
      .doc(id.toString())
      .set({ data: newHistory })
      .then(() => dispatch(getAllHistory(db, id)));
  };
};

export const setStoredNumber = (payload: string) => {
  return {
    type: SET_STORED_NUMBER,
    payload,
  };
};

export const setFunctionType = (payload: string) => {
  return {
    type: SET_FUNCTION_TYPE,
    payload,
  };
};

export const setNumber = (payload: string) => {
  return {
    type: SET_NUMBER,
    payload,
  };
};

export const handleSetDisplayValue = (num: string | number, number: string) => {
  return (dispatch: Dispatch<any>) =>
    dispatch(setNumber(`${(number + num).replace(/^0+/, "")}`));
};

export const handleSetStoredValue = (number: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(setStoredNumber(number));
    dispatch(setNumber(""));
  };
};

export const handleClearValue = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(setNumber(""));
    dispatch(setStoredNumber(""));
    dispatch(setFunctionType(""));
  };
};

export const handleBackButton = (number: string) => {
  return (dispatch: Dispatch<any>) => {
    if (number !== "") {
      const deletedNumber = number.slice(0, number.length - 1);
      dispatch(setNumber(deletedNumber));
    }
  };
};

export const handleSetCalcFunction = (
  type: string | number,
  storedNumber: string,
  number: string
) => {
  return (dispatch: Dispatch<any>) => {
    if (number) {
      dispatch(setFunctionType(type.toString()));
      dispatch(handleSetStoredValue(number));
    }
    if (storedNumber) {
      dispatch(setFunctionType(type.toString()));
    }
  };
};

export const handleToggleNegative = (number: string, storedNumber: string) => {
  return (dispatch: Dispatch<any>) => {
    if (number) {
      if (parseFloat(number) > 0) {
        dispatch(setNumber(`-${number}`));
      } else {
        const positiveNumber = number.slice(1);
        dispatch(setNumber(positiveNumber));
      }
    } else if (parseFloat(storedNumber) > 0) {
      dispatch(setStoredNumber(`-${storedNumber}`));
    } else {
      const positiveNumber = storedNumber.slice(1);
      dispatch(setStoredNumber(positiveNumber));
    }
  };
};

export const doMath = (
  number: string,
  storedNumber: string,
  functionType: string,
  id: number,
  db: any,
  prevarray: string[]
) => {
  return (dispatch: Dispatch<any>) => {
    if (number && storedNumber) {
      switch (functionType) {
        case "+":
          dispatch(
            setStoredNumber(
              `${
                Math.round(
                  (parseFloat(storedNumber) + parseFloat(number)) * 100
                ) / 100
              }`
            )
          );
          break;
        case "-":
          dispatch(
            setStoredNumber(
              `${
                Math.round(
                  (parseFloat(storedNumber) - parseFloat(number)) * 1000
                ) / 1000
              }`
            )
          );
          break;
        case "/":
          dispatch(
            setStoredNumber(
              `${
                Math.round(
                  (parseFloat(storedNumber) / parseFloat(number)) * 1000
                ) / 1000
              }`
            )
          );
          break;
        case "*":
          dispatch(
            setStoredNumber(
              `${
                Math.round(
                  parseFloat(storedNumber) * parseFloat(number) * 1000
                ) / 1000
              }`
            )
          );
          break;
        default:
          break;
      }
      dispatch(
        setHistory(db, id, [
          ...prevarray,
          `${new Date().getFullYear()}-${formatDate(
            new Date().getMonth()
          )}-${formatDate(new Date().getDay())} | ${formatDate(
            new Date().getHours()
          )}:${formatDate(new Date().getMinutes())}:${formatDate(
            new Date().getSeconds()
          )} | ${storedNumber} ${functionType} ${number} = ${
            functionType === "+"
              ? Math.round(
                  (parseFloat(storedNumber) + parseFloat(number)) * 100
                ) / 100
              : functionType === "-"
              ? Math.round(
                  (parseFloat(storedNumber) - parseFloat(number)) * 100
                ) / 100
              : functionType === "*"
              ? Math.round(
                  parseFloat(storedNumber) * parseFloat(number) * 100
                ) / 100
              : Math.round(
                  (parseFloat(storedNumber) / parseFloat(number)) * 100
                ) / 100
          }`,
        ])
      );
      dispatch(setNumber(""));
    }
  };
};
