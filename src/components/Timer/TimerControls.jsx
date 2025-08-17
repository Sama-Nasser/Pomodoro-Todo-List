function TimerControls({ isActive, onBreak, isFinished, start, pause, reset, startBreak }) {
  return (
    <div>
      {!isActive && !onBreak && !isFinished && (
        <button className="start" onClick={start}>Start</button>
      )}

      {isActive && <button className="pause" onClick={pause}>Pause</button>}

      <button className="reset" onClick={reset}>Reset</button>

      {isFinished && !onBreak && (
        <button className="break" onClick={startBreak}>Start Break</button>
      )}
    </div>
  );
}

export default TimerControls;
