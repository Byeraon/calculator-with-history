import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleBackButton } from "../redux/actions";
import { RootState } from "../redux/reducer";
import { CalcBtn } from "./styles/styles";

const BackButton: React.FC = () => {
  const dispatch = useDispatch();
  const { number } = useSelector((state: RootState) => state);
  return (
    <CalcBtn
      type="button"
      className="white-button"
      onClick={() => dispatch(handleBackButton(number))}
    >
      &#8592;
    </CalcBtn>
  );
};

export default BackButton;
