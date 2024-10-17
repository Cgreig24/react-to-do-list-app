import { Routes, Route, Link } from "react-router-dom";

function TaskList({
  taskName,
  completed,
  dueDate,
  dateComplete,
  prio,
  additionalLabels,
  deleteTask,
}) {
  function prioLabel(prio) {
    if (prio == "Low") {
      return <button className="lowPrio">{prio}</button>;
    } else if (prio == "Medium") {
      return <button className="mediumPrio">{prio}</button>;
    } else {
      return <button className="highPrio">{prio}</button>;
    }
  }

  return (
    <Link to={`/task/${taskName}`}>
      <div className="flex justify-between items-center p-2 border rounded-md w-5/6 text-lg">
        <span style={{ flexBasis: "16%" }}>{taskName}</span>
        <span style={{ flexBasis: "16%" }}>{completed ? "✅" : "⬜️"}</span>
        <span style={{ flexBasis: "16%" }}>
          {new Date(dueDate).toLocaleDateString()}
        </span>
        <span style={{ flexBasis: "16%" }}>
          {new Date(dateComplete).toLocaleDateString()}
        </span>
        <span style={{ flexBasis: "16%" }}>{prioLabel(prio)}</span>
        <span style={{ flexBasis: "16%" }}>{additionalLabels}</span>
        <span style={{ flexBasis: "16%" }}>
          <button onClick={() => deleteTask(taskName)} className="deleteButton">
            Delete
          </button>
        </span>
      </div>
    </Link>
  );
}

export default TaskList;
