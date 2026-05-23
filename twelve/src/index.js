import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import App from "./App";
import { rootReducer } from "./redux/rootReducer";
import { thunk } from "redux-thunk";
import { compose, applyMiddleware } from "@reduxjs/toolkit";

const store = configureStore({reducer: rootReducer}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTERNSION__ && window.__REDUX_DEVTOOLS_EXTERNSION__()
))
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
