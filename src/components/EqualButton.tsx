import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doMath } from "../redux/actions";
import firebase from "firebase/compat/app";
import { RootState } from "../redux/reducer";
import { CalcBtn } from "./styles/styles";

const EqualButton: React.FC = () => {
  const dispatch = useDispatch();
  const db = firebase.firestore();
  const { number, storedNumber, functionType, id, historyList } = useSelector(
    (state: RootState) => state
  );
  return (
    <CalcBtn
      className="white-button"
      type="button"
      onClick={() =>
        dispatch(
          doMath(number, storedNumber, functionType, id, db, historyList)
        )
      }
    >
      =
    </CalcBtn>
  );
};

export default EqualButton;
