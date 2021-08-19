import React, { useState, useEffect } from "react";
import TaskComponent from "../Components/TaskComponent";

function TaskScreen() {
  const [state, setstate] = useState("NUmbee");
  const intialColors = [
    {
      id: "",
      color: "",
    },
  ];
  const [time, setTime] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [greenColor, setGreenColor] = useState(false);
  const [initialTime, setInitialTime] = useState(120);
  const [index, setIndex] = useState(0);
  const [colorsArray, setColorsArray] = useState(intialColors);
  const [finalColors, setFinalColors] = useState([]);

  const onStratTimer = () => {
    setStartTimer(true);
    setGreenColor(false);
    setInitialTime(120);
  };

  const onCreate = () => {
    if (startTimer) {
      setGreenColor(true);
      let finalColorsDummy = finalColors;
      let colorsDummy = { ...colorsArray };
      colorsDummy.id = finalColors.length + 1;
      colorsDummy.color = "Green";
      finalColorsDummy.push(colorsDummy);
      setFinalColors(finalColorsDummy);
    } else {
      let finalColorsDummy = finalColors;
      let colorsDummy = { ...colorsArray };
      colorsDummy.id = finalColors.length + 1;
      colorsDummy.color = "Red";
      finalColorsDummy.push(colorsDummy);
      setFinalColors(finalColorsDummy);
    }
  };

  useEffect(() => {
    if (initialTime > 0 && startTimer) {
      setTimeout(() => {
        setInitialTime(initialTime + 1);
      }, 1000);
    }

    if (initialTime === 240) {
      console.log("done");
      setStartTimer(false);
    }
  }, [initialTime, startTimer]);

  const formatTime = (initialTime) =>
    startTimer
      ? `${String(Math.floor(initialTime / 60)).padStart(2, "0")}:${String(
          initialTime % 60
        ).padStart(1, "0")}`
      : "00:00";
  const RESET_INTERVAL_S = 120; // 120s = 2m * 60s/m

  const timeRemain = RESET_INTERVAL_S - (initialTime % RESET_INTERVAL_S);
  const timerd = formatTime(timeRemain);
  const [close, setClose] = useState(false);
  const onClose = () => {
    setInitialTime(120);
    setStartTimer(false);
  };

  return (
    <div className="container-fluid ">
      <TaskComponent
        state={state}
        time={time}
        formatTime={formatTime}
        timer={timerd}
        onStratTimer={onStratTimer}
        onCreate={onCreate}
        index={index}
        colorsArray={colorsArray}
        finalColors={finalColors}
        initialTime={initialTime}
        onClose={onClose}
      />
    </div>
  );
}

export default TaskScreen;
