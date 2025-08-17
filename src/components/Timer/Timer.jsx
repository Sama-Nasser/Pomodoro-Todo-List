import React from "react";
import useTimer from "../../hooks/useTimer";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

function Timer() {
  const { minutes, seconds, isActive, onBreak, isFinished, start, pause, reset, startBreak } =
    useTimer();

  return (
    <div className="timer">
      <h2>{onBreak ? "Break Time" : "Pomodoro Timer"}</h2>
      <TimerDisplay minutes={minutes} seconds={seconds} />
      <TimerControls
        isActive={isActive}
        onBreak={onBreak}
        isFinished={isFinished}
        start={start}
        pause={pause}
        reset={reset}
        startBreak={startBreak}
      />
    </div>
  );
}

export default Timer;
