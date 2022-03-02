import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSetDisplayValue } from "../redux/actions";
import { RootState } from "../redux/reducer";
import { CalcBtn } from "./styles/styles";

interface CalculatorButtonInterface {
  buttonValue: number | string;
}

const CalculatorButton: React.FC<CalculatorButtonInterface> = ({
  buttonValue,
}) => {
  const dispatch = useDispatch();
  const { number } = useSelector((state: RootState) => state);
  return (
    <CalcBtn
      type="button"
      onClick={() => dispatch(handleSetDisplayValue(buttonValue, number))}
    >
      {buttonValue}
    </CalcBtn>
  );
};

export default CalculatorButton;
