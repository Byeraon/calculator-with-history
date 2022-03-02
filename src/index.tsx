import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { store } from "./redux/strore";

const firebaseConfig = {
  apiKey: "AIzaSyD4CO3-2aZGoqpga9wgaynHOip4-tOQnsg",
  authDomain: "calculator-app-f004c.firebaseapp.com",
  projectId: "calculator-app-f004c",
  storageBucket: "calculator-app-f004c.appspot.com",
  messagingSenderId: "696791678545",
  appId: "1:696791678545:web:39ff8c63363a08fef3c270",
  measurementId: "G-CKK67LPNZ4",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
