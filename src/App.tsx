import React from "react";
import style from "./App.module.scss";
import ProgressBar from "./component/ProgressBar/ProgressBar";
import ProgressCircle from "./component/ProgressCircle/ProgressCircle";
function App() {
  return (
    <>
      <ProgressBar percent={10} showValueSide={true} />
      <ProgressCircle percentage={10} strokeWidth={10} strokeColor="#7F56D9" />
      <ProgressCircle percentage={70} strokeWidth={2} strokeColor="#F97066" />
    </>
  );
}

export default App;
