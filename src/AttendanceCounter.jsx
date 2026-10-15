import { useState } from "react";

// Task 3 — AttendanceCounter Component
function AttendanceCounter() {
  const [presentCount, setPresentCount] = useState(0);

  // Use the updater function; never mutate state directly.
  const handleMarkPresent = () => {
    setPresentCount((prev) => prev + 1);
  };

  // Math.max keeps the count from ever going below 0.
  const handleUndo = () => {
    setPresentCount((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setPresentCount(0);
  };

  return (
    <div className="attendance">
      <h2>Students Present: {presentCount}</h2>
      <div className="buttons">
        <button onClick={handleMarkPresent}>Mark Present</button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default AttendanceCounter;
