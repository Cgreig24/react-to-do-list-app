import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TableHeader from "../components/TableHeader";
import TaskList from "../components/TaskList";
import taskListData from "../assets/tasks.json";

function HomePage() {
  const [tasks, setTasks] = useState(taskListData);
  const [taskName, setTaskName] = useState("");
  const [completed, setCompleted] = useState(false);
  const [dueDate, setDueDate] = useState(null);
  const [dateComplete, setDateComplete] = useState(null);
  const [prio, setPrio] = useState("");
  const [additionalLabels, setAdditionalLabels] = useState([]);

  const handletaskNameInput = (e) => setTaskName(e.target.value);
  const handlePrioInput = (e) => setPrio(e.target.value);
  const handleDueDate = (date) => {
    setDueDate(date);
  };
  const handleAdditionalLabelInput = (e) => setAdditionalLabels(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      taskName,
      dueDate,
      prio,
      additionalLabels,
    };
    addNewTask(newTask);
    console.log("Submitted: ", newTask);
  };

  const addNewTask = (newTask) => {
    // Create a new array
    const updatedTaskList = [...tasks, newTask];

    setTasks(updatedTaskList);
  };

  const deleteTask = (taskId) => {
    console.log(taskId);
    const filteredTasks = tasks.filter((task) => {
      return task.taskName !== taskId;
    });

    setTasks(filteredTasks);
  };

  const completeTask = (taskId) => {
    console.log(completed);

    setCompleted(!completed);
  };

  /*
  const completeTask = (taskId) => {
    console.log(taskId);
    const filteredTasks = tasks.filter((task) => {
      return task.taskName !== taskId;
    });

    setTasks(filteredTasks);
  };
  */

  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <span>Add a Task</span>
          <div>
            <label>
              Task Name
              <input
                name="taskName"
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={handletaskNameInput}
              />
            </label>

            {/* 
           <label>
            Due Date
            <input
              name="dueDate"
              type="text"
              placeholder="Due Date"
              value={dueDate}
              onChange={handleDueDateInput}
            />
          </label>
       */}

            <label>
              Priority
              <select name="prio" onChange={handlePrioInput}>
                <option value="">-- None --</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>

            <label>
              Additional Labels
              <input
                name="additionalLabels"
                type="text"
                placeholder="Add additional tags comma separated"
                value={additionalLabels}
                onChange={handleAdditionalLabelInput}
              />
            </label>

            <label>Due Date</label>
            <div className="datePicker">
              <DatePicker
                showIcon
                className="datePicker"
                selected={dueDate}
                onChange={handleDueDate}
                //dateFormat="MM/DD/YYYY"
              />
            </div>

            <button type="submit">Add Task</button>
          </div>
        </form>
      </div>
      {/* Start of task list tabele*/}
      <h1 className="tasksHeader">Tasks to Do</h1>
      <TableHeader />

      {tasks &&
        tasks.map((task) => {
          return (
            <TaskList
              key={task.taskName}
              {...task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      <div className="mb-10"></div>
    </>
  );
}

export default HomePage;
