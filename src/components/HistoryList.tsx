import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import { HistoryBlock, HistoryLists } from "./styles/styles";
import firebase from "firebase/compat/app";
import { getAllHistory } from "../redux/actions";

export const HistoryList: React.FC = () => {
  const dispatch = useDispatch();
  const { id, historyList } = useSelector((state: RootState) => state);
  const db = firebase.firestore();

  useEffect(() => {
    if (id) {
      dispatch(getAllHistory(db, id));
    }
  }, [db, dispatch, id]);

  return (
    <HistoryLists>
      {historyList.map((el) => (
        <HistoryBlock key={el}>{el}</HistoryBlock>
      ))}
    </HistoryLists>
  );
};
