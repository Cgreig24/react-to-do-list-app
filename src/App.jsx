import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import taskListData from "./assets/tasks.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import TaskList from "./components/TaskList";
import About from "./pages/about";
import HomePage from "./pages/HomePage";
import TaskDetailsPage from "./pages/TaskDetails";

function App() {
  const [tasks, setTasks] = useState(taskListData);
  const [taskName, setTaskName] = useState("");
  const [completed, setCompleted] = useState(false);
  const [dueDate, setDueDate] = useState(null);
  const [dateComplete, setDateComplete] = useState(null);
  const [prio, setPrio] = useState("");
  const [additionalLabels, setAdditionalLabels] = useState("");

  const deleteTask = (taskId) => {
    console.log(taskId);
    const filteredTasks = tasks.filter((task) => {
      return task.taskName !== taskId;
    });

    setTasks(filteredTasks);
  };

  return (
    <>
      <div>
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/" element={<HomePage className="Homepage" />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/task/:taskName"
            element={<TaskDetailsPage deleteTask={deleteTask} />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
