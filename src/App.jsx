import Header from "./Header";
import StudentCard from "./StudentCard";
import AttendanceCounter from "./AttendanceCounter";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="card-list">
        {/* Strings use quotes; numbers and booleans use curly braces */}
        <StudentCard name="Angel Cruz" age={20} course="BSIT" isRegular={true} />
        <StudentCard name="Mark Santos" age={21} course="BSIT" isRegular={false} />
        <StudentCard name="Liza Reyes" age={19} course="BSIT" isRegular={true} />
      </div>

      <AttendanceCounter />
    </div>
  );
}

export default App;
