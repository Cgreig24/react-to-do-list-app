import { useState } from "react";
import taskListData from "../assets/tasks.json";
import { useParams } from "react-router-dom";
import HomePage from "./HomePage";

function TaskDetailsPage() {
  const { taskName } = useParams();

  //const taskSummary = tasks.find((tasks) => tasks.taskName === taskName);
  const taskSummary = taskListData.find((task) => task.taskName === taskName);

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
    <div>
      <h1 className="p2 font-bold text-xl text-left my-10"> Task Details</h1>
      <div className="flex justify-between items-center p-2 border rounded w-5/6 text-xl ">
        {taskSummary && (
          <>
            <h1 className="text-left">{taskSummary.taskName}</h1>
            <p className="text-left">Date Due: {taskSummary.dueDate}</p>
            <p>
              <span font-bold>Date Completed: </span>
              {taskSummary.dateComplete}
            </p>
            <span>
              Priority: <span>{prioLabel(taskSummary.prio)}</span>
            </span>
            <p>Additional Labels: {taskSummary.additionalLabels}</p>
            <p>Task Completed? {taskSummary.completed}</p>
            <button className="deleteButton">Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskDetailsPage;
