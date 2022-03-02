import React from "react";
import { useDispatch } from "react-redux";
import { handleClearValue } from "../redux/actions";
import { CalcBtn } from "./styles/styles";

const ClearButton: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <CalcBtn
      type="button"
      className="white-button"
      onClick={() => dispatch(handleClearValue())}
    >
      C
    </CalcBtn>
  );
};

export default ClearButton;
