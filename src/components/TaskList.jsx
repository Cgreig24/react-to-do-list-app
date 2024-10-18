import { Routes, Route, Link } from "react-router-dom";

function TaskList({
  taskName,
  completed,
  dueDate,
  dateComplete,
  prio,
  additionalLabels,
  deleteTask,
  completeTask,
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

  function completedLabel(completed) {
    return (
      <button
        onClick={() => completeTask(taskName)}
        className={completed ? "DoneButton" : "NotDoneButton"}
      >
        {completed ? "Done" : "Not Done"}
      </button>
    );
  }

  return (
    <>
      {/*<span style={{ flexBasis: "16%" }}>{completed ? "✅" : "⬜️"}</span>*/}
      <div className="flex justify-between items-center p-2 border rounded-md w-5/6 text-lg ">
        <Link to={`/task/${taskName}`}>
          <span className="taskNameTable">{taskName}</span>
        </Link>
        <span style={{ flexBasis: "16%" }}>{completedLabel(completed)}</span>
        <span>{completed}</span>
        <span style={{ flexBasis: "16%" }}>
          {new Date(dueDate).toLocaleDateString()}
        </span>
        <span style={{ flexBasis: "16%" }}>
          {dateComplete ? new Date(dateComplete).toLocaleDateString() : ""}
        </span>
        <span style={{ flexBasis: "16%" }}>{prioLabel(prio)}</span>
        <span style={{ flexBasis: "16%" }}>
          {/*{additionalLabels ? additionalLabels.join(", ") : ""}
           */}
          {additionalLabels.length > 1
            ? additionalLabels.toString()
            : additionalLabels}
        </span>

        <span style={{ flexBasis: "16%" }}>
          <button onClick={() => deleteTask(taskName)} className="deleteButton">
            Delete
          </button>
        </span>
      </div>
    </>
  );
}

export default TaskList;
