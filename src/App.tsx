import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Calculator from "./components/Calculator";
import { HistoryList } from "./components/HistoryList";
import { setLocalId } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const myId = localStorage.getItem("id");
    if (myId !== null) {
      dispatch(setLocalId(parseInt(myId)));
    } else {
      const localId = Date.now();
      localStorage.setItem("id", localId.toString());
      dispatch(setLocalId(localId));
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Calculator />
      <HistoryList />
    </div>
  );
}

export default App;
