import React, { useEffect } from "react";
import { useState } from "react";

function Header({ moon }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode
      ? " hsl(209, 23%, 22%)"
      : "white";
    document.body.classList.toggle("active", darkMode);
    document.body.style.color = darkMode ? "white" : "black";
    document.querySelectorAll("span").forEach((span) => {
      span.style.color = darkMode ? "white" : "black";
    });
    document.querySelectorAll("p").forEach((para) => {
      para.style.color = darkMode ? "white" : "black";
    });
    document.querySelectorAll("strong").forEach((strong) => {
      strong.style.color = darkMode ? "white" : "black";
    });
    document.querySelector(".modebtn").style.color = darkMode
      ? "white"
      : "black";
  }, [darkMode]);
  return (
    <div className="header">
      <div className="header-text">
        <h2>Where in the word ?</h2>
      </div>
      <div className="headerbtn">
        <button onClick={toggleMode} className="modebtn">
          <img src={moon} className="moon" />
          Dark Mode
        </button>
      </div>
    </div>
  );
}

export default Header;
