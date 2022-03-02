import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetCalcFunction } from "../redux/actions";
import { RootState } from "../redux/reducer";
import { CalcBtn } from "./styles/styles";

interface FunctionButtonInterface {
  buttonValue: number | string;
}

const FunctionButton: React.FC<FunctionButtonInterface> = ({ buttonValue }) => {
  const dispatch = useDispatch();
  const { number, storedNumber } = useSelector((state: RootState) => state);
  return (
    <CalcBtn
      className="function-button"
      type="button"
      onClick={() =>
        dispatch(handleSetCalcFunction(buttonValue, storedNumber, number))
      }
    >
      {buttonValue}
    </CalcBtn>
  );
};

export default FunctionButton;
