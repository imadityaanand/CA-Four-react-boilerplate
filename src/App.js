import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import ThemeButton from "./components/ThemeButton";



function App() {
  sessionStorage.setItem("answers", "asdfg");
  return (
    <div>
      <ThemeButton />
      <QuestionBox />
      {/* <Result /> */}
    </div>
  );
}

export default App;