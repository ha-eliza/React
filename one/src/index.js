import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/App";
import data from "./db.json";

let title = "Мой сайт";
let slogan = "I am learning React";
let nav = {
  Главная: "./index",
  Новоcти: "./news",
  "О компании": "./about",
  Магазин: "./shop",
  Контаты: "./contacts",
};
let db = data.people;
let copy = "Copyright - 2026";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App title={title} slogan={slogan} navigation={nav} db={db} text={copy}/>
  </React.StrictMode>,
);
