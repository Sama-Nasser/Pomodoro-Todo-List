function TimerDisplay({ minutes, seconds }) {
  return (
    <div className="timer-display">
      <div className="time-container">
        <div className="time-box">{minutes.toString().padStart(2, "0")}</div>
        <div className="time-label">Minutes</div>
      </div>
      <div className="time-container">
        <div className="time-box">{seconds.toString().padStart(2, "0")}</div>
        <div className="time-label">Seconds</div>
      </div>
    </div>
  );
}

export default TimerDisplay;
