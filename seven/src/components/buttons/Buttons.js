import { useState, useEffect } from "react";
import "./Buttons.css";

function Buttons() {
  let [theme, setTheme] = useState("");
  useEffect(() => {
    const el = document.querySelector(".btns");
    theme === ""
      ? (el.style.backgroundColor = "")
      : (el.style.backgroundColor =
          theme === "dark" ? "rgb(58, 54, 49)" : "antiquewhite");
  }, [theme]);
  return (
    <div className="btns">
      <button className="btn" onClick={() => setTheme("dark")}>
        Dark
      </button>
      <button className="btn" onClick={() => setTheme("")}>
        Х
      </button>
      <button className="btn" onClick={() => setTheme("light")}>
        Light
      </button>
    </div>
  );
}
export default Buttons;
