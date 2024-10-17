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
      <div className="flex flex-wrap text-stone-700 ">
        <div className="p-2 border rounded w-5/6 text-xl bg-white ">
          {taskSummary && (
            <>
              <h1 className="text-left text-2xl mb-12 font-bold">
                {taskSummary.taskName}
              </h1>
              <p className="text-left my-2">
                <span className="font-bold">Date Due:</span>{" "}
                {taskSummary.dueDate}
              </p>
              <p className="text-left my-2">
                <span className="font-bold">Date Completed: </span>
                {taskSummary.dateComplete}
              </p>
              <p className="text-left my-2">
                {" "}
                <span className="font-bold">Priority: </span>
                {prioLabel(taskSummary.prio)}
              </p>

              <p className="text-left my-2">
                <span className="font-bold">Additional Labels: </span>
                {taskSummary.additionalLabels}
              </p>
              {/*
              <p>Task Completed? {taskSummary.completed}</p>
              */}
              <button className="deleteButton">Delete</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsPage;
