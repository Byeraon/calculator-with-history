import React from "react";
import { useSelector } from "react-redux";
import { DisplayStyles } from "./styles/styles";
import { RootState } from "../redux/reducer";

const Display: React.FC = () => {
  const { number, storedNumber } = useSelector((state: RootState) => state);
  return (
    <DisplayStyles>
      <h2
        className={
          storedNumber && storedNumber.length > 12
            ? "long-main-display"
            : undefined
        }
      >
        {!number.length && !storedNumber ? "0" : number || storedNumber}
      </h2>
    </DisplayStyles>
  );
};

export default Display;
