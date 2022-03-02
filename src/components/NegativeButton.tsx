import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleToggleNegative } from "../redux/actions";
import { RootState } from "../redux/reducer";
import { CalcBtn } from "./styles/styles";

const NegativeButton: React.FC = () => {
  const dispatch = useDispatch();
  const { number, storedNumber } = useSelector((state: RootState) => state);
  return (
    <CalcBtn
      type="button"
      className="white-button"
      onClick={() => dispatch(handleToggleNegative(number, storedNumber))}
    >
      -/+
    </CalcBtn>
  );
};

export default NegativeButton;
