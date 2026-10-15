// Task 2 — StudentCard Component
// Props are read-only: we only read them, never reassign or modify them.
function StudentCard(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p className={props.isRegular ? "status regular" : "status irregular"}>
        {props.isRegular ? "Regular Student" : "Irregular Student"}
      </p>
    </div>
  );
}

export default StudentCard;
